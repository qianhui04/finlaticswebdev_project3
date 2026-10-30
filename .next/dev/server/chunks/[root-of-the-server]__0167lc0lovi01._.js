module.exports = [
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/upload.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$formidable__$5b$external$5d$__$28$formidable$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$formidable$29$__ = __turbopack_context__.i("[externals]/formidable [external] (formidable, esm_import, [project]/node_modules/formidable)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$29$__ = __turbopack_context__.i("[externals]/pdf-parse [external] (pdf-parse, cjs, [project]/node_modules/pdf-parse)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$formidable__$5b$external$5d$__$28$formidable$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$formidable$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$formidable__$5b$external$5d$__$28$formidable$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$formidable$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    try {
        // Receive one PDF file with a maximum size of 10 MB.
        const form = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$formidable__$5b$external$5d$__$28$formidable$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$formidable$29$__["default"])({
            maxFileSize: 10 * 1024 * 1024,
            maxFiles: 1
        });
        const [fields, files] = await form.parse(req);
        const uploadedFile = files.file?.[0];
        if (!uploadedFile) {
            return res.status(400).json({
                error: "Please upload a PDF file."
            });
        }
        // Validate the uploaded file extension.
        const filename = uploadedFile.originalFilename || "";
        if (!filename.toLowerCase().endsWith(".pdf")) {
            return res.status(400).json({
                error: "Only PDF files are allowed."
            });
        }
        // Read the uploaded PDF file.
        const fileBuffer = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(uploadedFile.filepath);
        // Check the PDF file signature (%PDF-).
        const fileSignature = fileBuffer.subarray(0, 5).toString();
        if (fileSignature !== "%PDF-") {
            return res.status(400).json({
                error: "Invalid PDF file."
            });
        }
        // Extract text and page count using pdf-parse.
        const pdfData = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$29$__["default"])(fileBuffer);
        if (!pdfData.text || !pdfData.text.trim()) {
            return res.status(400).json({
                error: "No readable text was found in this PDF."
            });
        }
        return res.status(200).json({
            message: "PDF uploaded and processed successfully!",
            filename,
            totalPages: pdfData.numpages,
            extractedText: pdfData.text
        });
    } catch (error) {
        console.error("PDF upload error:", error);
        return res.status(500).json({
            error: "Failed to upload or extract PDF content."
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0167lc0lovi01._.js.map