const { chunkText } = require("../../lib/chunker");
const db = require("../../lib/db");

import { generateEmbeddings } from "../../lib/embedder";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const client = await db.pool.connect();

  try {
    const { text, filename, totalPages } = req.body || {};

    if (
      typeof text !== "string" ||
      !text.trim() ||
      typeof filename !== "string" ||
      !filename.trim()
    ) {
      return res.status(400).json({
        error: "Please provide valid PDF text and filename.",
      });
    }

    // Step 1: Divide extracted text into chunks
    const chunks = chunkText(text, 500, 50);

    // Step 2: Generate embeddings for all chunks
    const chunkContents = chunks.map((chunk) => chunk.content);

    const embeddings = await generateEmbeddings(chunkContents);

    console.log("Total embeddings:", embeddings.length);
    console.log("Embedding dimensions:", embeddings[0]?.length);

    // Step 3: Start database transaction
    await client.query("BEGIN");

    // Step 4: Save document information
    const documentResult = await client.query(
      `INSERT INTO documents (filename, total_pages)
       VALUES ($1, $2)
       RETURNING id`,
      [filename, totalPages || null]
    );

    const documentId = documentResult.rows[0].id;

    // Step 5: Save each chunk and its embedding
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];

      const vector = `[${embeddings[i].join(",")}]`;

      await client.query(
        `INSERT INTO chunks
         (document_id, content, start_token, end_token, embedding)
         VALUES ($1, $2, $3, $4, $5::vector)`,
        [
          documentId,
          chunk.content,
          chunk.startToken,
          chunk.endToken,
          vector,
        ]
      );
    }

    // Step 6: Commit transaction
    await client.query("COMMIT");

    return res.status(200).json({
      message: "Document and embeddings saved successfully!",
      documentId,
      totalChunks: chunks.length,
      totalEmbeddings: embeddings.length,
      embeddingDimensions: embeddings[0]?.length,
      chunks,
    });

  } catch (error) {
    await client.query("ROLLBACK");

    console.error("Document processing error:", error);

    return res.status(500).json({
      error: "Failed to process and save document.",
    });

  } finally {
    client.release();
  }
}