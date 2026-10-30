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
    const form = formidable({
      maxFileSize: 10 * 1024 * 1024,
      maxFiles: 1,
      filter: ({ mimetype }) => mimetype === "application/pdf",
    });

    const [fields, files] = await form.parse(req);

    const uploadedFile = files.file?.[0];

    if (!uploadedFile) {
      return res.status(400).json({
        error: "Please upload a PDF file.",
      });
    }

    const fileBuffer = await fs.readFile(uploadedFile.filepath);

    const pdfData = await pdfParse(fileBuffer);

    return res.status(200).json({
      message: "PDF uploaded and processed successfully!",
      filename: uploadedFile.originalFilename,
      totalPages: pdfData.numpages,
      extractedText: pdfData.text,
    });
  } catch (error) {
    console.error("PDF upload error:", error);

    return res.status(500).json({
      error: "Failed to process PDF.",
    });
  }
}