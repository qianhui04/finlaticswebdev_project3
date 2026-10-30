module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/pages/chat/[docId].js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$markdown$29$__ = __turbopack_context__.i("[externals]/react-markdown [external] (react-markdown, esm_import, [project]/node_modules/react-markdown)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$markdown$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$markdown$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const ChatDocPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { docId } = router.query;
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!question.trim() || loading || !docId) return;
        const currentQuestion = question.trim();
        // Add the user's question and an empty assistant message
        setMessages((prev)=>[
                ...prev,
                {
                    role: "user",
                    content: currentQuestion
                },
                {
                    role: "assistant",
                    content: "",
                    sources: []
                }
            ]);
        setQuestion("");
        setLoading(true);
        setError("");
        try {
            // Step 1: Connect to the streaming API
            const response = await fetch("/api/chat-stream", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: currentQuestion,
                    documentId: docId
                })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to generate answer.");
            }
            if (!response.body) {
                throw new Error("Streaming response is not available.");
            }
            // Step 2: Read the incoming stream
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";
            // Helper: update the latest assistant message
            const updateAssistant = (callback)=>{
                setMessages((prev)=>{
                    const updated = [
                        ...prev
                    ];
                    const lastIndex = updated.length - 1;
                    if (updated[lastIndex]?.role === "assistant") {
                        updated[lastIndex] = callback(updated[lastIndex]);
                    }
                    return updated;
                });
            };
            // Step 3: Process each SSE event
            const processEvent = (eventText)=>{
                if (!eventText.trim()) return;
                let eventName = "message";
                const dataLines = [];
                eventText.split("\n").forEach((line)=>{
                    if (line.startsWith("event:")) {
                        eventName = line.slice(6).trim();
                    }
                    if (line.startsWith("data:")) {
                        dataLines.push(line.slice(5).trim());
                    }
                });
                const data = dataLines.join("\n");
                if (!data) return;
                if (eventName === "sources") {
                    const sources = JSON.parse(data);
                    updateAssistant((message)=>({
                            ...message,
                            sources
                        }));
                }
                if (eventName === "token") {
                    const token = JSON.parse(data);
                    updateAssistant((message)=>({
                            ...message,
                            content: message.content + token
                        }));
                }
                if (eventName === "error") {
                    const errorData = JSON.parse(data);
                    throw new Error(errorData.error || "Streaming failed.");
                }
            };
            // Step 4: Keep reading until Claude finishes
            while(true){
                const { value, done } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, {
                    stream: true
                });
                const events = buffer.split("\n\n");
                buffer = events.pop() || "";
                events.forEach(processEvent);
            }
            // Process any remaining data
            buffer += decoder.decode();
            if (buffer.trim()) {
                processEvent(buffer);
            }
        } catch (err) {
            console.error("Chat streaming error:", err);
            setError(err.message);
            // Remove the empty or incomplete assistant message
            setMessages((prev)=>prev.slice(0, -1));
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "jsx-212a143ccae73412" + " " + "page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-212a143ccae73412" + " " + "chat-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                        className: "jsx-212a143ccae73412" + " " + "header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "jsx-212a143ccae73412",
                                children: "DocuMind AI"
                            }, void 0, false, {
                                fileName: "[project]/pages/chat/[docId].js",
                                lineNumber: 167,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "jsx-212a143ccae73412",
                                children: "Chat with your uploaded document"
                            }, void 0, false, {
                                fileName: "[project]/pages/chat/[docId].js",
                                lineNumber: 168,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("small", {
                                className: "jsx-212a143ccae73412",
                                children: [
                                    "Document ID: ",
                                    docId || "Loading..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/chat/[docId].js",
                                lineNumber: 169,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/chat/[docId].js",
                        lineNumber: 166,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        className: "jsx-212a143ccae73412" + " " + "messages",
                        children: [
                            messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-212a143ccae73412" + " " + "welcome",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "jsx-212a143ccae73412",
                                        children: "Ask your document anything!"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/chat/[docId].js",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-212a143ccae73412",
                                        children: "Ask a question about the uploaded PDF and Claude will answer using its content."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/chat/[docId].js",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/chat/[docId].js",
                                lineNumber: 174,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-212a143ccae73412" + " " + `message ${message.role}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            className: "jsx-212a143ccae73412",
                                            children: message.role === "user" ? "You" : "DocuMind AI"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/chat/[docId].js",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-212a143ccae73412" + " " + "markdown-content",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$markdown$29$__["default"], {
                                                children: message.content
                                            }, void 0, false, {
                                                fileName: "[project]/pages/chat/[docId].js",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/pages/chat/[docId].js",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        message.sources?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-212a143ccae73412" + " " + "sources",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-212a143ccae73412",
                                                    children: "Sources"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/chat/[docId].js",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                message.sources.map((source, sourceIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-212a143ccae73412" + " " + "source-card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "jsx-212a143ccae73412",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-212a143ccae73412",
                                                                        children: [
                                                                            "Source ",
                                                                            sourceIndex + 1,
                                                                            ":"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/chat/[docId].js",
                                                                        lineNumber: 206,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    source.filename
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/chat/[docId].js",
                                                                lineNumber: 205,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "jsx-212a143ccae73412",
                                                                children: [
                                                                    "Chunk ID: ",
                                                                    source.chunkId
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/chat/[docId].js",
                                                                lineNumber: 210,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "jsx-212a143ccae73412",
                                                                children: [
                                                                    "Tokens: ",
                                                                    source.startToken,
                                                                    " - ",
                                                                    source.endToken
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/chat/[docId].js",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "jsx-212a143ccae73412",
                                                                children: [
                                                                    "Similarity:",
                                                                    " ",
                                                                    (source.similarity * 100).toFixed(1),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/chat/[docId].js",
                                                                lineNumber: 216,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, source.chunkId, true, {
                                                        fileName: "[project]/pages/chat/[docId].js",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/chat/[docId].js",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/pages/chat/[docId].js",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-212a143ccae73412" + " " + "loading",
                                children: "Claude is responding..."
                            }, void 0, false, {
                                fileName: "[project]/pages/chat/[docId].js",
                                lineNumber: 228,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-212a143ccae73412" + " " + "error",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/pages/chat/[docId].js",
                                lineNumber: 234,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/chat/[docId].js",
                        lineNumber: 172,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "jsx-212a143ccae73412" + " " + "input-area",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: question,
                                onChange: (e)=>setQuestion(e.target.value),
                                placeholder: "Ask a question about your PDF...",
                                disabled: loading || !docId,
                                className: "jsx-212a143ccae73412"
                            }, void 0, false, {
                                fileName: "[project]/pages/chat/[docId].js",
                                lineNumber: 241,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading || !question.trim() || !docId,
                                className: "jsx-212a143ccae73412",
                                children: loading ? "Thinking..." : "Send"
                            }, void 0, false, {
                                fileName: "[project]/pages/chat/[docId].js",
                                lineNumber: 249,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/chat/[docId].js",
                        lineNumber: 240,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/chat/[docId].js",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "212a143ccae73412",
                children: ".page.jsx-212a143ccae73412{background:#f4f5fb;min-height:100vh;padding:40px 20px;font-family:Arial,sans-serif}.chat-container.jsx-212a143ccae73412{background:#fff;border-radius:16px;flex-direction:column;max-width:850px;height:85vh;margin:auto;display:flex;overflow:hidden;box-shadow:0 4px 20px #0000000f}.header.jsx-212a143ccae73412{color:#fff;background:#29234d;padding:24px}.header.jsx-212a143ccae73412 h1.jsx-212a143ccae73412{margin:0 0 8px}.header.jsx-212a143ccae73412 p.jsx-212a143ccae73412{color:#ddd8f5;margin:0 0 8px}.header.jsx-212a143ccae73412 small.jsx-212a143ccae73412{color:#c4bde8}.messages.jsx-212a143ccae73412{flex:1;padding:24px;overflow-y:auto}.welcome.jsx-212a143ccae73412{text-align:center;color:#555;margin-top:100px}.message.jsx-212a143ccae73412{border-radius:12px;max-width:85%;margin-bottom:16px;padding:16px;line-height:1.6}.message.jsx-212a143ccae73412 p.jsx-212a143ccae73412{white-space:pre-wrap}.user.jsx-212a143ccae73412{background:#eeeaff;margin-left:auto}.assistant.jsx-212a143ccae73412{background:#f4f5f8;margin-right:auto}.sources.jsx-212a143ccae73412{border-top:1px solid #ddd;margin-top:20px;padding-top:12px}.source-card.jsx-212a143ccae73412{background:#fff;border:1px solid #e2e2e8;border-radius:8px;margin-top:10px;padding:10px;font-size:13px}.source-card.jsx-212a143ccae73412 p.jsx-212a143ccae73412{overflow-wrap:anywhere;margin:4px 0}.loading.jsx-212a143ccae73412{color:#777;padding:12px}.error.jsx-212a143ccae73412{color:#c62828;padding:12px}.input-area.jsx-212a143ccae73412{border-top:1px solid #eee;gap:10px;padding:20px;display:flex}.input-area.jsx-212a143ccae73412 input.jsx-212a143ccae73412{border:1px solid #ddd;border-radius:8px;flex:1;min-width:0;padding:14px;font-size:15px}.input-area.jsx-212a143ccae73412 button.jsx-212a143ccae73412{color:#fff;cursor:pointer;background:#6854d9;border:none;border-radius:8px;padding:14px 24px;font-weight:700}.input-area.jsx-212a143ccae73412 button.jsx-212a143ccae73412:disabled{cursor:not-allowed;background:#aaa}@media (width<=600px){.page.jsx-212a143ccae73412{padding:10px}.chat-container.jsx-212a143ccae73412{height:95vh}.message.jsx-212a143ccae73412{max-width:95%}}.markdown-content.jsx-212a143ccae73412{overflow-wrap:anywhere;line-height:1.7}.markdown-content.jsx-212a143ccae73412 h1.jsx-212a143ccae73412,.markdown-content.jsx-212a143ccae73412 h2.jsx-212a143ccae73412,.markdown-content.jsx-212a143ccae73412 h3.jsx-212a143ccae73412{color:#29234d;margin:18px 0 10px}.markdown-content.jsx-212a143ccae73412 p.jsx-212a143ccae73412{margin:10px 0}.markdown-content.jsx-212a143ccae73412 ul.jsx-212a143ccae73412,.markdown-content.jsx-212a143ccae73412 ol.jsx-212a143ccae73412{margin:10px 0;padding-left:24px}.markdown-content.jsx-212a143ccae73412 li.jsx-212a143ccae73412{margin-bottom:6px}.markdown-content.jsx-212a143ccae73412 strong.jsx-212a143ccae73412{color:#29234d}.markdown-content.jsx-212a143ccae73412 code.jsx-212a143ccae73412{background:#eeeaff;border-radius:4px;padding:2px 5px}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/chat/[docId].js",
        lineNumber: 164,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ChatDocPage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06q7j9lg95rtu._.js.map