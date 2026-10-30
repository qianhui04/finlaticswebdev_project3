import { generateEmbeddings } from "../../lib/embedder";

const { searchSimilarChunks } = require("../../lib/vectorSearch");

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

    // Step 1: Generate an embedding for the question
    const embeddings = await generateEmbeddings([
      question.trim(),
    ]);

    const queryEmbedding = embeddings[0];

    // Step 2: Search for the 5 most relevant chunks
    const results = await searchSimilarChunks(
      queryEmbedding,
      5,
      documentId || null
    );

    // Step 3: Return the search results
    return res.status(200).json({
      message: "Vector search completed successfully!",
      question,
      totalResults: results.length,
      results,
    });

  } catch (error) {
    console.error("Vector search error:", error);

    return res.status(500).json({
      error: error.message || "Failed to search documents.",
    });
  }
}