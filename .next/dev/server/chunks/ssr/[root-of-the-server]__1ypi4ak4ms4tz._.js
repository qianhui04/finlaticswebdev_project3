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
"[project]/components/AppSidebar.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppSidebar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
;
;
;
;
function AppSidebar() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isUploadActive = router.pathname === "/";
    const isDocumentsActive = router.pathname === "/documents" || router.pathname.startsWith("/chat/");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
        className: "jsx-4d82e6922414a286" + " " + "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-4d82e6922414a286" + " " + "brand",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-4d82e6922414a286" + " " + "brand-logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 40 40",
                            fill: "none",
                            className: "jsx-4d82e6922414a286",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                d: "M20 4L23.5 16.5L36 20L23.5 23.5L20 36L16.5 23.5L4 20L16.5 16.5L20 4Z",
                                fill: "white",
                                className: "jsx-4d82e6922414a286"
                            }, void 0, false, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AppSidebar.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/AppSidebar.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-4d82e6922414a286" + " " + "brand-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "jsx-4d82e6922414a286",
                                children: [
                                    "DocuMind",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-4d82e6922414a286",
                                        children: " AI"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AppSidebar.jsx",
                                        lineNumber: 27,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "jsx-4d82e6922414a286",
                                children: "DOCUMENT INTELLIGENCE"
                            }, void 0, false, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AppSidebar.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AppSidebar.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-4d82e6922414a286" + " " + "navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "jsx-4d82e6922414a286" + " " + "nav-heading",
                        children: "WORKSPACE"
                    }, void 0, false, {
                        fileName: "[project]/components/AppSidebar.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: `nav-link ${isUploadActive ? "active" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-4d82e6922414a286" + " " + "nav-icon",
                                children: "＋"
                            }, void 0, false, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-4d82e6922414a286",
                                children: "Upload Document"
                            }, void 0, false, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AppSidebar.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/documents",
                        className: `nav-link ${isDocumentsActive ? "active" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-4d82e6922414a286" + " " + "nav-icon",
                                children: "▤"
                            }, void 0, false, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-4d82e6922414a286",
                                children: "My Documents"
                            }, void 0, false, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AppSidebar.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AppSidebar.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-4d82e6922414a286" + " " + "sidebar-bottom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-4d82e6922414a286" + " " + "powered-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-4d82e6922414a286" + " " + "powered-icon",
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-4d82e6922414a286",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        className: "jsx-4d82e6922414a286",
                                        children: "AI-powered search"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AppSidebar.jsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-4d82e6922414a286",
                                        children: "Find answers in your files."
                                    }, void 0, false, {
                                        fileName: "[project]/components/AppSidebar.jsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AppSidebar.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-4d82e6922414a286" + " " + "profile",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-4d82e6922414a286" + " " + "avatar",
                                children: "QH"
                            }, void 0, false, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-4d82e6922414a286" + " " + "profile-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        className: "jsx-4d82e6922414a286",
                                        children: "My Workspace"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AppSidebar.jsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-4d82e6922414a286",
                                        children: "Personal account"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AppSidebar.jsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-4d82e6922414a286" + " " + "profile-menu",
                                children: "···"
                            }, void 0, false, {
                                fileName: "[project]/components/AppSidebar.jsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AppSidebar.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AppSidebar.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "4d82e6922414a286",
                children: ".sidebar.jsx-4d82e6922414a286{color:#fff;box-sizing:border-box;background:#17182c;flex-direction:column;width:258px;min-width:258px;min-height:100vh;padding:28px 18px;display:flex}.brand.jsx-4d82e6922414a286{align-items:center;gap:12px;margin-bottom:55px;padding:0 8px;display:flex}.brand-logo.jsx-4d82e6922414a286{background:linear-gradient(135deg,#8b5cf6,#6366f1);border-radius:12px;justify-content:center;align-items:center;width:40px;height:40px;display:flex}.brand-logo.jsx-4d82e6922414a286 svg.jsx-4d82e6922414a286{width:23px;height:23px}.brand-text.jsx-4d82e6922414a286 h2.jsx-4d82e6922414a286{color:#fff;margin:0;font-size:19px;font-weight:700}.brand-text.jsx-4d82e6922414a286 h2.jsx-4d82e6922414a286 span.jsx-4d82e6922414a286{color:#a78bfa}.brand-text.jsx-4d82e6922414a286 p.jsx-4d82e6922414a286{letter-spacing:1.4px;color:#9293aa;margin:4px 0 0;font-size:9px}.navigation.jsx-4d82e6922414a286{flex-direction:column;gap:8px;display:flex}.nav-heading.jsx-4d82e6922414a286{color:#777991;letter-spacing:1.5px;margin:0 0 12px 12px;font-size:10px;font-weight:700}.nav-link.jsx-4d82e6922414a286{box-sizing:border-box;color:#b7b8ca;background:0 0;border-radius:10px;align-items:center;gap:13px;width:100%;padding:13px 14px;font-size:13px;font-weight:500;text-decoration:none;transition:all .2s;display:flex}.nav-link.jsx-4d82e6922414a286:hover{color:#fff;background:#282941;text-decoration:none}.nav-link.active.jsx-4d82e6922414a286{color:#c4b5fd;background:#343052;font-weight:600;box-shadow:inset 3px 0 #a78bfa}.nav-icon.jsx-4d82e6922414a286{justify-content:center;align-items:center;width:22px;height:22px;font-size:19px;display:flex}.sidebar-bottom.jsx-4d82e6922414a286{margin-top:auto}.powered-card.jsx-4d82e6922414a286{background:#24253e;border-radius:12px;gap:12px;margin-bottom:22px;padding:15px 12px;display:flex}.powered-icon.jsx-4d82e6922414a286{color:#a78bfa;font-size:20px}.powered-card.jsx-4d82e6922414a286 strong.jsx-4d82e6922414a286{color:#fff;font-size:12px}.powered-card.jsx-4d82e6922414a286 p.jsx-4d82e6922414a286{color:#9293aa;margin:5px 0 0;font-size:11px}.profile.jsx-4d82e6922414a286{border-top:1px solid #34354b;align-items:center;gap:11px;padding:15px 5px 0;display:flex}.avatar.jsx-4d82e6922414a286{color:#fff;background:#51417d;border-radius:50%;justify-content:center;align-items:center;width:36px;height:36px;font-size:12px;font-weight:700;display:flex}.profile-info.jsx-4d82e6922414a286{flex-direction:column;gap:4px;display:flex}.profile-info.jsx-4d82e6922414a286 strong.jsx-4d82e6922414a286{color:#fff;font-size:12px}.profile-info.jsx-4d82e6922414a286 span.jsx-4d82e6922414a286{color:#9293aa;font-size:11px}.profile-menu.jsx-4d82e6922414a286{color:#9293aa;margin-left:auto}@media (width<=768px){.sidebar.jsx-4d82e6922414a286{width:210px;min-width:210px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AppSidebar.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/pages/documents.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Documents
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppSidebar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppSidebar.jsx [ssr] (ecmascript)");
;
;
;
;
;
function Documents() {
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        async function fetchDocuments() {
            try {
                const response = await fetch("/api/documents");
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error || "Failed to load documents.");
                }
                setDocuments(data.documents || []);
            } catch (err) {
                setError(err.message);
            } finally{
                setLoading(false);
            }
        }
        fetchDocuments();
    }, []);
    function formatDate(date) {
        return new Date(date).toLocaleDateString("en-MY", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "jsx-4f119d0be89e9002" + " " + "app",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppSidebar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/documents.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "jsx-4f119d0be89e9002" + " " + "main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                        className: "jsx-4f119d0be89e9002" + " " + "topbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "jsx-4f119d0be89e9002",
                            children: "Workspace / Document Library"
                        }, void 0, false, {
                            fileName: "[project]/pages/documents.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/documents.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "jsx-4f119d0be89e9002" + " " + "content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-4f119d0be89e9002" + " " + "page-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-4f119d0be89e9002",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "jsx-4f119d0be89e9002" + " " + "eyebrow",
                                                children: "YOUR WORKSPACE"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                className: "jsx-4f119d0be89e9002",
                                                children: "Document Library"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "jsx-4f119d0be89e9002" + " " + "subtitle",
                                                children: "Manage your uploaded PDFs and explore their contents with AI."
                                            }, void 0, false, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/documents.js",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "upload-button",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-4f119d0be89e9002",
                                                children: "＋"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            " Upload PDF"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/documents.js",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/documents.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-4f119d0be89e9002" + " " + "stats-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-4f119d0be89e9002" + " " + "stats-icon",
                                        children: "▤"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/documents.js",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-4f119d0be89e9002",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "jsx-4f119d0be89e9002",
                                                children: "Total Documents"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                className: "jsx-4f119d0be89e9002",
                                                children: documents.length
                                            }, void 0, false, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/documents.js",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/documents.js",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-4f119d0be89e9002" + " " + "documents-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-4f119d0be89e9002" + " " + "section-heading",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-4f119d0be89e9002",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                    className: "jsx-4f119d0be89e9002",
                                                    children: "Your Documents"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/documents.js",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-4f119d0be89e9002",
                                                    children: "All your uploaded PDF files in one place."
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/documents.js",
                                                    lineNumber: 76,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/documents.js",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/documents.js",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-4f119d0be89e9002" + " " + "state-message",
                                        children: "Loading your documents..."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/documents.js",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    !loading && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-4f119d0be89e9002" + " " + "state-message error",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/pages/documents.js",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    !loading && !error && documents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-4f119d0be89e9002" + " " + "empty-state",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-4f119d0be89e9002" + " " + "empty-icon",
                                                children: "▤"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "jsx-4f119d0be89e9002",
                                                children: "No documents yet"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "jsx-4f119d0be89e9002",
                                                children: "Upload your first PDF to start asking questions about your documents."
                                            }, void 0, false, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "upload-button",
                                                children: "＋ Upload your first PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/documents.js",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    !loading && !error && documents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-4f119d0be89e9002" + " " + "document-list",
                                        children: documents.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-4f119d0be89e9002" + " " + "document-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4f119d0be89e9002" + " " + "pdf-icon",
                                                        children: "PDF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/documents.js",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "jsx-4f119d0be89e9002" + " " + "document-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-4f119d0be89e9002",
                                                                children: doc.filename
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/documents.js",
                                                                lineNumber: 113,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "jsx-4f119d0be89e9002",
                                                                children: [
                                                                    doc.total_pages,
                                                                    " pages",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-4f119d0be89e9002",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/documents.js",
                                                                        lineNumber: 116,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Uploaded ",
                                                                    formatDate(doc.created_at)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/documents.js",
                                                                lineNumber: 114,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/documents.js",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/chat/${doc.id}`,
                                                        className: "chat-button",
                                                        children: [
                                                            "Chat with document ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-4f119d0be89e9002",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/documents.js",
                                                                lineNumber: 125,
                                                                columnNumber: 42
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/documents.js",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, doc.id, true, {
                                                fileName: "[project]/pages/documents.js",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/pages/documents.js",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/documents.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/documents.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/documents.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "4f119d0be89e9002",
                children: ".app.jsx-4f119d0be89e9002{background:#f7f8fc;min-height:100vh;display:flex}.main.jsx-4f119d0be89e9002{flex:1;min-width:0}.topbar.jsx-4f119d0be89e9002{color:#9293a3;background:#fff;border-bottom:1px solid #ececf2;align-items:center;height:72px;padding:0 40px;font-size:13px;display:flex}.content.jsx-4f119d0be89e9002{max-width:1150px;margin:0 auto;padding:45px 40px}.page-heading.jsx-4f119d0be89e9002{justify-content:space-between;align-items:center;gap:20px;margin-bottom:32px;display:flex}.eyebrow.jsx-4f119d0be89e9002{color:#8063d8;letter-spacing:1.5px;margin-bottom:10px;font-size:11px;font-weight:700}h1.jsx-4f119d0be89e9002{color:#202139;margin:0;font-size:30px}.subtitle.jsx-4f119d0be89e9002{color:#85869a;margin-top:10px;font-size:14px}.upload-button.jsx-4f119d0be89e9002{color:#fff;white-space:nowrap;background:#7054d8;border-radius:9px;align-items:center;gap:8px;padding:12px 18px;font-size:13px;font-weight:600;text-decoration:none;transition:background .2s;display:inline-flex}.upload-button.jsx-4f119d0be89e9002:hover{background:#5c40c4}.stats-card.jsx-4f119d0be89e9002{background:#fff;border:1px solid #ededf3;border-radius:12px;align-items:center;gap:16px;width:240px;margin-bottom:38px;padding:22px;display:flex}.stats-icon.jsx-4f119d0be89e9002{color:#7659d6;background:#f0edff;border-radius:12px;justify-content:center;align-items:center;width:46px;height:46px;font-size:23px;display:flex}.stats-card.jsx-4f119d0be89e9002 p.jsx-4f119d0be89e9002{color:#9293a3;margin:0 0 5px;font-size:12px}.stats-card.jsx-4f119d0be89e9002 h2.jsx-4f119d0be89e9002{color:#25263d;margin:0;font-size:24px}.documents-section.jsx-4f119d0be89e9002{background:#fff;border:1px solid #ededf3;border-radius:14px;padding:26px}.section-heading.jsx-4f119d0be89e9002 h2.jsx-4f119d0be89e9002{color:#25263d;margin:0;font-size:17px}.section-heading.jsx-4f119d0be89e9002 p.jsx-4f119d0be89e9002{color:#9293a3;margin:7px 0 22px;font-size:12px}.document-list.jsx-4f119d0be89e9002{flex-direction:column;gap:12px;display:flex}.document-card.jsx-4f119d0be89e9002{border:1px solid #ededf3;border-radius:11px;align-items:center;gap:16px;padding:17px;transition:border-color .2s,background .2s;display:flex}.document-card.jsx-4f119d0be89e9002:hover{background:#fcfbff;border-color:#c9bdf5}.pdf-icon.jsx-4f119d0be89e9002{color:#e45c64;background:#fff0f0;border-radius:9px;justify-content:center;align-items:center;width:45px;height:48px;font-size:11px;font-weight:800;display:flex}.document-info.jsx-4f119d0be89e9002{flex:1;min-width:0}.document-info.jsx-4f119d0be89e9002 h3.jsx-4f119d0be89e9002{color:#292a41;overflow-wrap:anywhere;margin:0 0 7px;font-size:13px}.document-info.jsx-4f119d0be89e9002 p.jsx-4f119d0be89e9002{color:#9697a7;margin:0;font-size:11px}.document-info.jsx-4f119d0be89e9002 p.jsx-4f119d0be89e9002 span.jsx-4f119d0be89e9002{margin:0 8px}.chat-button.jsx-4f119d0be89e9002{color:#7054d8;white-space:nowrap;border:1px solid #ddd5fa;border-radius:8px;align-items:center;gap:9px;padding:10px 14px;font-size:12px;font-weight:600;text-decoration:none;display:inline-flex}.chat-button.jsx-4f119d0be89e9002:hover{background:#f3f0ff}.state-message.jsx-4f119d0be89e9002{text-align:center;color:#85869a;padding:50px 20px;font-size:13px}.error.jsx-4f119d0be89e9002{color:#dc5555}.empty-state.jsx-4f119d0be89e9002{text-align:center;padding:55px 20px}.empty-icon.jsx-4f119d0be89e9002{color:#7659d6;background:#f0edff;border-radius:18px;justify-content:center;align-items:center;width:60px;height:60px;margin:0 auto 18px;font-size:28px;display:flex}.empty-state.jsx-4f119d0be89e9002 h3.jsx-4f119d0be89e9002{color:#292a41;margin:0 0 9px;font-size:16px}.empty-state.jsx-4f119d0be89e9002 p.jsx-4f119d0be89e9002{color:#9293a3;max-width:360px;margin:0 auto 22px;font-size:13px;line-height:1.6}@media (width<=700px){.content.jsx-4f119d0be89e9002{padding:28px 18px}.topbar.jsx-4f119d0be89e9002{padding:0 18px}.page-heading.jsx-4f119d0be89e9002{flex-direction:column;align-items:flex-start}.document-card.jsx-4f119d0be89e9002{flex-wrap:wrap}.chat-button.jsx-4f119d0be89e9002{margin-left:61px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/documents.js",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ypi4ak4ms4tz._.js.map