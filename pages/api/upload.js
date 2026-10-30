import formidable from "formidable";
import fs from "fs/promises";
import pdfParse from "pdf-parse";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    // Receive one PDF file with a maximum size of 10 MB.
    const form = formidable({
      maxFileSize: 10 * 1024 * 1024,
      maxFiles: 1,
    });

    const [fields, files] = await form.parse(req);

    const uploadedFile = files.file?.[0];

    if (!uploadedFile) {
      return res.status(400).json({
        error: "Please upload a PDF file.",
      });
    }

    // Validate the uploaded file extension.
    const filename = uploadedFile.originalFilename || "";

    if (!filename.toLowerCase().endsWith(".pdf")) {
      return res.status(400).json({
        error: "Only PDF files are allowed.",
      });
    }

    // Read the uploaded PDF file.
    const fileBuffer = await fs.readFile(uploadedFile.filepath);

    // Check the PDF file signature (%PDF-).
    const fileSignature = fileBuffer.subarray(0, 5).toString();

    if (fileSignature !== "%PDF-") {
      return res.status(400).json({
        error: "Invalid PDF file.",
      });
    }

    // Extract text and page count using pdf-parse.
    const pdfData = await pdfParse(fileBuffer);

    if (!pdfData.text || !pdfData.text.trim()) {
      return res.status(400).json({
        error: "No readable text was found in this PDF.",
      });
    }

    return res.status(200).json({
      message: "PDF uploaded and processed successfully!",
      filename,
      totalPages: pdfData.numpages,
      extractedText: pdfData.text,
    });
  } catch (error) {
    console.error("PDF upload error:", error);

    return res.status(500).json({
      error: "Failed to upload or extract PDF content.",
    });
  }
}