import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateEmbeddings(texts) {
  if (!Array.isArray(texts) || texts.length === 0) {
    throw new Error("Please provide at least one text.");
  }

  const validTexts = texts.filter(
    (text) => typeof text === "string" && text.trim().length > 0
  );

  if (validTexts.length !== texts.length) {
    throw new Error("All inputs must contain valid text.");
  }

  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: validTexts,
    encoding_format: "float",
  });

  return response.data.map((item) => item.embedding);
}