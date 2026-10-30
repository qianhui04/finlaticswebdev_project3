const db = require("./db");

async function searchSimilarChunks(queryEmbedding, limit = 5, documentId = null) {
  // Check that the question embedding is valid
  if (
    !Array.isArray(queryEmbedding) ||
    queryEmbedding.length !== 1536
  ) {
    throw new Error("Invalid query embedding. Expected 1536 dimensions.");
  }

  // Convert the embedding array into PostgreSQL vector format
  const vector = `[${queryEmbedding.join(",")}]`;

  // Always limit the results to a maximum of 5
  const searchLimit = Math.min(Math.max(Number(limit) || 5, 1), 5);

  let result;

  if (documentId) {
    // Search within one specific document
    result = await db.query(
      `SELECT
          c.id,
          c.document_id,
          d.filename,
          c.content,
          c.start_token,
          c.end_token,
          1 - (c.embedding <=> $1::vector) AS similarity
       FROM chunks c
       JOIN documents d ON c.document_id = d.id
       WHERE c.document_id = $2
       ORDER BY c.embedding <=> $1::vector
       LIMIT $3`,
      [vector, documentId, searchLimit]
    );
  } else {
    // Search across all uploaded documents
    result = await db.query(
      `SELECT
          c.id,
          c.document_id,
          d.filename,
          c.content,
          c.start_token,
          c.end_token,
          1 - (c.embedding <=> $1::vector) AS similarity
       FROM chunks c
       JOIN documents d ON c.document_id = d.id
       ORDER BY c.embedding <=> $1::vector
       LIMIT $2`,
      [vector, searchLimit]
    );
  }

  return result.rows.map((row) => ({
    ...row,
    similarity: Number(row.similarity),
  }));
}

module.exports = { searchSimilarChunks };