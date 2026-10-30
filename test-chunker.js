const { chunkText } = require("./lib/chunker");

const sampleText = "This is a sample document. ".repeat(200);

const chunks = chunkText(sampleText);

console.log("Total chunks:", chunks.length);

chunks.forEach((chunk, index) => {
  console.log(`\nChunk ${index + 1}`);
  console.log("Start token:", chunk.startToken);
  console.log("End token:", chunk.endToken);
  console.log("Content:", chunk.content.slice(0, 100));
});