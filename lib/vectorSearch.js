const db = require("./db");

async function searchSimilarChunks(queryEmbedding, limit = 5, documentId = null) {
  // Validate the OpenAI query embedding.
  if (
    !Array.isArray(queryEmbedding) ||
    queryEmbedding.length !== 1536
  ) {
    throw new Error(
      "Invalid query embedding. Expected 1536 dimensions."
    );
  }

  // Convert the embedding into PostgreSQL pgvector format.
  const vector = `[${queryEmbedding.join(",")}]`;

  // Retrieve a maximum of 5 results.
  const searchLimit = Math.min(
    Math.max(Number(limit) || 5, 1),
    5
  );

  let result;

  if (documentId) {
    // Cosine similarity search within a specific document.
    result = await db.query(
      `SELECT
          c.id,
          c.document_id,
          d.filename,
          c.content,
          c.start_token,
          c.end_token,
          c.embedding <=> $1::vector AS cosine_distance,
          1 - (c.embedding <=> $1::vector) AS similarity
       FROM chunks c
       JOIN documents d ON c.document_id = d.id
       WHERE c.document_id = $2
       ORDER BY cosine_distance ASC
       LIMIT $3`,
      [vector, documentId, searchLimit]
    );
  } else {
    // Cosine similarity search across all uploaded documents.
    result = await db.query(
      `SELECT
          c.id,
          c.document_id,
          d.filename,
          c.content,
          c.start_token,
          c.end_token,
          c.embedding <=> $1::vector AS cosine_distance,
          1 - (c.embedding <=> $1::vector) AS similarity
       FROM chunks c
       JOIN documents d ON c.document_id = d.id
       ORDER BY cosine_distance ASC
       LIMIT $2`,
      [vector, searchLimit]
    );
  }

  return result.rows.map((row) => ({
    ...row,
    cosine_distance: Number(row.cosine_distance),
    similarity: Number(row.similarity),
  }));
}

module.exports = { searchSimilarChunks };