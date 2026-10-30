module.exports = [
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/db.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { Pool } = __turbopack_context__.r("[externals]/pg [external] (pg, cjs, [project]/node_modules/pg)");
const pool = /*TURBOPACK member replacement*/ __turbopack_context__.g.pgPool || new Pool({
    connectionString: process.env.DATABASE_URL
});
if ("TURBOPACK compile-time truthy", 1) {
    /*TURBOPACK member replacement*/ __turbopack_context__.g.pgPool = pool;
}
module.exports = {
    pool,
    query: (text, params)=>pool.query(text, params)
};
}),
"[project]/pages/api/documents.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
const db = __turbopack_context__.r("[project]/lib/db.js [api] (ecmascript)");
async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    try {
        const result = await db.query(`
      SELECT id, filename, total_pages, created_at
      FROM documents
      ORDER BY created_at DESC
    `);
        return res.status(200).json({
            documents: result.rows
        });
    } catch (error) {
        console.error("Fetch documents error:", error);
        return res.status(500).json({
            error: "Failed to retrieve documents."
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__002--l-kdsvup._.js.map