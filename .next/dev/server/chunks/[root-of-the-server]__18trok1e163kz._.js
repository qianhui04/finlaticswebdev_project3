module.exports = [
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/chunker.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { encode } = __turbopack_context__.r("[externals]/gpt-tokenizer [external] (gpt-tokenizer, cjs, [project]/node_modules/gpt-tokenizer)");
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
    for(let i = 0; i < tokens.length; i += step){
        const chunkTokens = tokens.slice(i, i + chunkSize);
        const chunk = {
            content: __turbopack_context__.r("[externals]/gpt-tokenizer [external] (gpt-tokenizer, cjs, [project]/node_modules/gpt-tokenizer)").decode(chunkTokens),
            startToken: i,
            endToken: i + chunkTokens.length
        };
        chunks.push(chunk);
        if (i + chunkSize >= tokens.length) {
            break;
        }
    }
    return chunks;
}
module.exports = {
    chunkText
};
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
"[project]/lib/embedder.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "generateEmbeddings",
    ()=>generateEmbeddings
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$openai__$5b$external$5d$__$28$openai$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$openai$29$__ = __turbopack_context__.i("[externals]/openai [external] (openai, esm_import, [project]/node_modules/openai)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$openai__$5b$external$5d$__$28$openai$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$openai$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$openai__$5b$external$5d$__$28$openai$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$openai$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const openai = new __TURBOPACK__imported__module__$5b$externals$5d2f$openai__$5b$external$5d$__$28$openai$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$openai$29$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
async function generateEmbeddings(texts) {
    if (!Array.isArray(texts) || texts.length === 0) {
        throw new Error("Please provide at least one text.");
    }
    const validTexts = texts.filter((text)=>typeof text === "string" && text.trim().length > 0);
    if (validTexts.length !== texts.length) {
        throw new Error("All inputs must contain valid text.");
    }
    const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: validTexts,
        encoding_format: "float"
    });
    return response.data.map((item)=>item.embedding);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/api/process.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$embedder$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/embedder.js [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$embedder$2e$js__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$embedder$2e$js__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const { chunkText } = __turbopack_context__.r("[project]/lib/chunker.js [api] (ecmascript)");
const db = __turbopack_context__.r("[project]/lib/db.js [api] (ecmascript)");
;
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    const client = await db.pool.connect();
    try {
        const { text, filename, totalPages } = req.body || {};
        if (typeof text !== "string" || !text.trim() || typeof filename !== "string" || !filename.trim()) {
            return res.status(400).json({
                error: "Please provide valid PDF text and filename."
            });
        }
        // Step 1: Divide extracted text into chunks
        const chunks = chunkText(text, 500, 50);
        // Step 2: Generate embeddings for all chunks
        const chunkContents = chunks.map((chunk)=>chunk.content);
        const embeddings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$embedder$2e$js__$5b$api$5d$__$28$ecmascript$29$__["generateEmbeddings"])(chunkContents);
        console.log("Total embeddings:", embeddings.length);
        console.log("Embedding dimensions:", embeddings[0]?.length);
        // Step 3: Start database transaction
        await client.query("BEGIN");
        // Step 4: Save document information
        const documentResult = await client.query(`INSERT INTO documents (filename, total_pages)
       VALUES ($1, $2)
       RETURNING id`, [
            filename,
            totalPages || null
        ]);
        const documentId = documentResult.rows[0].id;
        // Step 5: Save each chunk and its embedding
        for(let i = 0; i < chunks.length; i++){
            const chunk = chunks[i];
            const vector = `[${embeddings[i].join(",")}]`;
            await client.query(`INSERT INTO chunks
         (document_id, content, start_token, end_token, embedding)
         VALUES ($1, $2, $3, $4, $5::vector)`, [
                documentId,
                chunk.content,
                chunk.startToken,
                chunk.endToken,
                vector
            ]);
        }
        // Step 6: Commit transaction
        await client.query("COMMIT");
        return res.status(200).json({
            message: "Document and embeddings saved successfully!",
            documentId,
            totalChunks: chunks.length,
            totalEmbeddings: embeddings.length,
            embeddingDimensions: embeddings[0]?.length,
            chunks
        });
    } catch (error) {
        await client.query("ROLLBACK");
        console.error("Document processing error:", error);
        return res.status(500).json({
            error: "Failed to process and save document."
        });
    } finally{
        client.release();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__18trok1e163kz._.js.map