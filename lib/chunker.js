
const { encode } = require("gpt-tokenizer");

function chunkText(text, chunkSize = 500, overlap = 50) {
  if (!text || typeof text !== "string") {
    return [];
  }

  if (overlap >= chunkSize || overlap < 0) {
    throw new Error("Overlap must be smaller than chunk size.");
  }

  const tokens = encode(text);
  const chunks = [];

  const step = chunkSize - overlap;

  for (let i = 0; i < tokens.length; i += step) {
    const chunkTokens = tokens.slice(i, i + chunkSize);

    const chunk = {
      content: require("gpt-tokenizer").decode(chunkTokens),
      startToken: i,
      endToken: i + chunkTokens.length,
    };

    chunks.push(chunk);

    if (i + chunkSize >= tokens.length) {
      break;
    }
  }

  return chunks;
}

module.exports = { chunkText };
