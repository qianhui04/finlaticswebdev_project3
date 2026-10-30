import { generateEmbeddings } from "../../lib/embedder";
import { streamAnswer } from "../../lib/claudeRAG";
const { MIN_SIMILARITY } = require("../../lib/ragConfig");

const {
  searchSimilarChunks,
} = require("../../lib/vectorSearch");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { question, documentId } = req.body || {};

    if (
      typeof question !== "string" ||
      !question.trim()
    ) {
      return res.status(400).json({
        error: "Please provide a valid question.",
      });
    }

    // Step 1: Generate question embedding
    const embeddings = await generateEmbeddings([
      question.trim(),
    ]);

    const queryEmbedding = embeddings[0];

    // Step 2: Retrieve relevant document chunks
    const retrievedChunks = await searchSimilarChunks(
      queryEmbedding,
      5,
      documentId || null
    );

    // Step 3: Filter out chunks below the similarity threshold
    const relevantChunks = retrievedChunks.filter(
      (chunk) => Number(chunk.similarity) >= MIN_SIMILARITY
    );

    // Step 3: Set up Server-Sent Events
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    });

    res.flushHeaders?.();

    // Send source information first
    const sources = relevantChunks.map((chunk) => ({
      chunkId: chunk.id,
      filename: chunk.filename,
      startToken: chunk.start_token,
      endToken: chunk.end_token,
      similarity: chunk.similarity,
    }));

    res.write(`event: sources\n`);
    res.write(`data: ${JSON.stringify(sources)}\n\n`);

    // Step 4: Stream Claude's answer
    await streamAnswer(
      question,
      relevantChunks,
      (text) => {
        res.write(`event: token\n`);
        res.write(`data: ${JSON.stringify(text)}\n\n`);
      }
    );

    // Step 5: Tell the frontend the response is complete
    res.write(`event: done\n`);
    res.write(`data: {}\n\n`);

    res.end();

  } catch (error) {
    console.error("Streaming chat API error:", error);

    if (!res.headersSent) {
      return res.status(500).json({
        error: error.message || "Failed to generate answer.",
      });
    }

    res.write(`event: error\n`);
    res.write(
      `data: ${JSON.stringify({
        error: error.message || "Streaming failed.",
      })}\n\n`
    );

    res.end();
  }
}