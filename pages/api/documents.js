
const db = require("../../lib/db");

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const result = await db.query(`
      SELECT id, filename, total_pages, created_at
      FROM documents
      ORDER BY created_at DESC
    `);

    return res.status(200).json({
      documents: result.rows,
    });
  } catch (error) {
    console.error("Fetch documents error:", error);

    return res.status(500).json({
      error: "Failed to retrieve documents.",
    });
  }
}
