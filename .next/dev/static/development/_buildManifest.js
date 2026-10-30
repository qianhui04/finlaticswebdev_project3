self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/chat/[docId]": [
    "static/chunks/pages/chat/[docId].js"
  ],
  "/documents": [
    "static/chunks/pages/documents.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/api/auth/[...newAuth]",
    "/api/chat",
    "/api/chat-stream",
    "/api/documents",
    "/api/process",
    "/api/search",
    "/api/upload",
    "/chat/[docId]",
    "/documents"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()