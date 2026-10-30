import { generateEmbeddings } from "../../lib/embedder";
import { generateAnswer } from "../../lib/claudeRAG";
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

    // Step 1: Convert the question into an embedding
    const embeddings = await generateEmbeddings([
      question.trim(),
    ]);

    const queryEmbedding = embeddings[0];

    // Step 2: Retrieve the 5 most relevant chunks
    const retrievedChunks = await searchSimilarChunks(
      queryEmbedding,
      5,
      documentId || null
    );

    // Filter out chunks below the similarity threshold
    const relevantChunks = retrievedChunks.filter(
      (chunk) => Number(chunk.similarity) >= MIN_SIMILARITY
    );

    // Step 3: Generate an answer using Claude
    const answer = await generateAnswer(
      question,
      relevantChunks
    );

    // Step 4: Return the answer and source information
    return res.status(200).json({
      message: "Answer generated successfully!",
      question,
      answer,

      sources: relevantChunks.map((chunk) => ({
        chunkId: chunk.id,
        filename: chunk.filename,
        startToken: chunk.start_token,
        endToken: chunk.end_token,
        similarity: chunk.similarity,
      })),
    });

  } catch (error) {
    console.error("Chat API error:", error);

    return res.status(500).json({
      error: error.message || "Failed to generate answer.",
    });
  }
}