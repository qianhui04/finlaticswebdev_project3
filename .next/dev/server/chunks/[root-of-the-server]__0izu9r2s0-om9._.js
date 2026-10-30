module.exports = [
(()=>{"use strict";return[
"[externals]/formidable [external] (formidable, esm_import, [project]/node_modules/formidable)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("formidable-f7b7456c24eef66c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_context__.s([
    "hoist",
    ()=>hoist
]);
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
}
}),
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/pages/api/upload.js [api] (ecmascript)\" } [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__,
    "handler",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/api-utils/index.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upload$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/api/upload.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request-meta.js [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upload$2e$js__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upload$2e$js__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upload$2e$js__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upload$2e$js__$5b$api$5d$__$28$ecmascript$29$__, 'config');
// Create and export the route module that will be consumed.
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/upload",
        pathname: "/api/upload",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upload$2e$js__$5b$api$5d$__$28$ecmascript$29$__,
    distDir: ("TURBOPACK compile-time value", ".next\\dev") || '',
    relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
});
async function handler(req, res, ctx) {
    if (ctx.requestMeta) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$api$5d$__$28$ecmascript$29$__["setRequestMeta"])(req, ctx.requestMeta);
    }
    if (routeModule.isDev) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$api$5d$__$28$ecmascript$29$__["addRequestMeta"])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
    }
    let srcPage = "/api/upload";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    }
    // Registering `instrumentation.ts` usually installs the tracer provider, so
    // do it before starting the request span. The span is started before
    // `prepare`, so route module preparation is part of the request's trace.
    // When this request triggers registration, the lifecycle spans of
    // `instrumentation.ts` are emitted inside the request span.
    const { instrumentation } = await routeModule.ensureInstrumentation(req, {
        deferSpans: true
    });
    return routeModule.traceRequest(req, {
        tracer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$api$5d$__$28$ecmascript$29$__["getTracer"])(),
        spanName: `${req.method || 'GET'} ${srcPage}`,
        httpTarget: req.url,
        instrumentation
    }, (requestSpan, requestRootSpan)=>handleRequest(req, res, ctx, srcPage, requestSpan, requestRootSpan));
}
async function handleRequest(req, res, ctx, srcPage, requestSpan, requestRootSpan) {
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return;
    }
    const { query, params, previewProps, routerServerContext } = prepareResult;
    try {
        const method = req.method || 'GET';
        const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$api$5d$__$28$ecmascript$29$__["getTracer"])();
        const isWrappedByNextServer = Boolean(routerServerContext == null ? void 0 : routerServerContext.isWrappedByNextServer);
        const onRequestError = routeModule.instrumentationOnRequestError.bind(routeModule);
        const invokeRouteModule = async (span)=>routeModule.render(req, res, {
                query: {
                    ...query,
                    ...params
                },
                params,
                allowedRevalidateHeaderKeys: ("TURBOPACK compile-time value", []),
                multiZoneDraftMode: Boolean(("TURBOPACK compile-time value", false)),
                trustHostHeader: ("TURBOPACK compile-time value", false),
                // TODO: get this from from runtime env so manifest
                // doesn't need to load
                previewProps,
                propagateError: false,
                dev: routeModule.isDev,
                page: "/api/upload",
                internalRevalidate: routerServerContext == null ? void 0 : routerServerContext.revalidate,
                onError: (...args)=>onRequestError(req, ...args)
            }).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                if (res.statusCode && res.statusCode >= 500) {
                    // For 5xx status codes: SHOULD be set to 'Error' span status.
                    // x-ref: https://opentelemetry.io/docs/specs/semconv/http/http-spans/#status
                    span.setStatus({
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$api$5d$__$28$ecmascript$29$__["SpanStatusCode"].ERROR
                    });
                    // For span status 'Error', SHOULD set 'error.type' attribute.
                    span.setAttribute('error.type', res.statusCode.toString());
                }
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route') || srcPage;
                const name = `${method} ${route}`;
                span.setAttributes({
                    'next.route': route,
                    'http.route': route,
                    'next.span_name': name
                });
                span.updateName(name);
                // Propagate http.route to the request's root span if it isn't the
                // request span (e.g. a platform-created HTTP span in adapter
                // deployments).
                if (requestRootSpan && requestRootSpan !== span) {
                    requestRootSpan.setAttribute('http.route', route);
                    requestRootSpan.updateName(name);
                }
            });
        // When invoked directly, the request span was started before `prepare`;
        // record the request target as normalized by it. next-server's request
        // span already has it.
        if (!isWrappedByNextServer && req.url !== undefined) {
            requestSpan == null ? void 0 : requestSpan.setAttribute('http.target', req.url);
        }
        try {
            await invokeRouteModule(requestSpan);
        } catch (err) {
            // A request span started for a direct invocation outlives the error
            // handling below, which only rethrows in dev: record the error on the
            // span here otherwise.
            if (!isWrappedByNextServer && requestSpan && !routeModule.isDev) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$api$5d$__$28$ecmascript$29$__["recordSpanError"])(requestSpan, err);
            }
            throw err;
        }
    } catch (err) {
        // we re-throw in dev to show the error overlay
        if (routeModule.isDev) {
            throw err;
        }
        // this is technically an invariant as error handling
        // should be done inside of api-resolver onError
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$api$5d$__$28$ecmascript$29$__["sendError"])(res, 500, 'Internal Server Error');
    } finally{
        // We don't allow any waitUntil work in pages API routes currently
        // so if callback is present return with resolved promise since no
        // pending work
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/next/dist/esm/lib/constants.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_SUFFIX",
    ()=>ACTION_SUFFIX,
    "APP_DIR_ALIAS",
    ()=>APP_DIR_ALIAS,
    "CACHE_ONE_YEAR_SECONDS",
    ()=>CACHE_ONE_YEAR_SECONDS,
    "DOT_NEXT_ALIAS",
    ()=>DOT_NEXT_ALIAS,
    "ESLINT_DEFAULT_DIRS",
    ()=>ESLINT_DEFAULT_DIRS,
    "GSP_NO_RETURNED_VALUE",
    ()=>GSP_NO_RETURNED_VALUE,
    "GSSP_COMPONENT_MEMBER_ERROR",
    ()=>GSSP_COMPONENT_MEMBER_ERROR,
    "GSSP_NO_RETURNED_VALUE",
    ()=>GSSP_NO_RETURNED_VALUE,
    "HTML_CONTENT_TYPE_HEADER",
    ()=>HTML_CONTENT_TYPE_HEADER,
    "INFINITE_CACHE",
    ()=>INFINITE_CACHE,
    "INSTRUMENTATION_HOOK_FILENAME",
    ()=>INSTRUMENTATION_HOOK_FILENAME,
    "JSON_CONTENT_TYPE_HEADER",
    ()=>JSON_CONTENT_TYPE_HEADER,
    "MATCHED_PATH_HEADER",
    ()=>MATCHED_PATH_HEADER,
    "MIDDLEWARE_FILENAME",
    ()=>MIDDLEWARE_FILENAME,
    "MIDDLEWARE_LOCATION_REGEXP",
    ()=>MIDDLEWARE_LOCATION_REGEXP,
    "NEXT_BODY_SUFFIX",
    ()=>NEXT_BODY_SUFFIX,
    "NEXT_CACHE_IMPLICIT_TAG_ID",
    ()=>NEXT_CACHE_IMPLICIT_TAG_ID,
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER",
    ()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER,
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER",
    ()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER,
    "NEXT_CACHE_ROOT_PARAM_TAG_ID",
    ()=>NEXT_CACHE_ROOT_PARAM_TAG_ID,
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH",
    ()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH,
    "NEXT_CACHE_TAGS_HEADER",
    ()=>NEXT_CACHE_TAGS_HEADER,
    "NEXT_CACHE_TAG_MAX_ITEMS",
    ()=>NEXT_CACHE_TAG_MAX_ITEMS,
    "NEXT_CACHE_TAG_MAX_LENGTH",
    ()=>NEXT_CACHE_TAG_MAX_LENGTH,
    "NEXT_DATA_SUFFIX",
    ()=>NEXT_DATA_SUFFIX,
    "NEXT_INTERCEPTION_MARKER_PREFIX",
    ()=>NEXT_INTERCEPTION_MARKER_PREFIX,
    "NEXT_META_SUFFIX",
    ()=>NEXT_META_SUFFIX,
    "NEXT_NAV_DEPLOYMENT_ID_HEADER",
    ()=>NEXT_NAV_DEPLOYMENT_ID_HEADER,
    "NEXT_QUERY_PARAM_PREFIX",
    ()=>NEXT_QUERY_PARAM_PREFIX,
    "NEXT_RESUME_HEADER",
    ()=>NEXT_RESUME_HEADER,
    "NEXT_RESUME_STATE_LENGTH_HEADER",
    ()=>NEXT_RESUME_STATE_LENGTH_HEADER,
    "NON_STANDARD_NODE_ENV",
    ()=>NON_STANDARD_NODE_ENV,
    "PAGES_DIR_ALIAS",
    ()=>PAGES_DIR_ALIAS,
    "PRERENDER_REVALIDATE_HEADER",
    ()=>PRERENDER_REVALIDATE_HEADER,
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER",
    ()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER,
    "PROXY_FILENAME",
    ()=>PROXY_FILENAME,
    "PROXY_LOCATION_REGEXP",
    ()=>PROXY_LOCATION_REGEXP,
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT",
    ()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT,
    "ROOT_DIR_ALIAS",
    ()=>ROOT_DIR_ALIAS,
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS",
    ()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS,
    "RSC_ACTION_ENCRYPTION_ALIAS",
    ()=>RSC_ACTION_ENCRYPTION_ALIAS,
    "RSC_ACTION_PROXY_ALIAS",
    ()=>RSC_ACTION_PROXY_ALIAS,
    "RSC_ACTION_VALIDATE_ALIAS",
    ()=>RSC_ACTION_VALIDATE_ALIAS,
    "RSC_CACHE_WRAPPER_ALIAS",
    ()=>RSC_CACHE_WRAPPER_ALIAS,
    "RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS",
    ()=>RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS,
    "RSC_MOD_REF_PROXY_ALIAS",
    ()=>RSC_MOD_REF_PROXY_ALIAS,
    "RSC_SEGMENTS_DIR_SUFFIX",
    ()=>RSC_SEGMENTS_DIR_SUFFIX,
    "RSC_SEGMENT_SUFFIX",
    ()=>RSC_SEGMENT_SUFFIX,
    "RSC_SUFFIX",
    ()=>RSC_SUFFIX,
    "SERVER_PROPS_EXPORT_ERROR",
    ()=>SERVER_PROPS_EXPORT_ERROR,
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT",
    ()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT,
    "SERVER_PROPS_SSG_CONFLICT",
    ()=>SERVER_PROPS_SSG_CONFLICT,
    "SERVER_RUNTIME",
    ()=>SERVER_RUNTIME,
    "SSG_FALLBACK_EXPORT_ERROR",
    ()=>SSG_FALLBACK_EXPORT_ERROR,
    "SSG_GET_INITIAL_PROPS_CONFLICT",
    ()=>SSG_GET_INITIAL_PROPS_CONFLICT,
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR",
    ()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR,
    "TEXT_PLAIN_CONTENT_TYPE_HEADER",
    ()=>TEXT_PLAIN_CONTENT_TYPE_HEADER,
    "UNSTABLE_REVALIDATE_RENAME_ERROR",
    ()=>UNSTABLE_REVALIDATE_RENAME_ERROR,
    "WEBPACK_LAYERS",
    ()=>WEBPACK_LAYERS,
    "WEBPACK_RESOURCE_QUERIES",
    ()=>WEBPACK_RESOURCE_QUERIES,
    "WEB_SOCKET_MAX_RECONNECTIONS",
    ()=>WEB_SOCKET_MAX_RECONNECTIONS
]);
const TEXT_PLAIN_CONTENT_TYPE_HEADER = 'text/plain';
const HTML_CONTENT_TYPE_HEADER = 'text/html; charset=utf-8';
const JSON_CONTENT_TYPE_HEADER = 'application/json; charset=utf-8';
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_NAV_DEPLOYMENT_ID_HEADER = 'x-nextjs-deployment-id';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_RESUME_STATE_LENGTH_HEADER = 'x-next-resume-state-length';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const NEXT_CACHE_ROOT_PARAM_TAG_ID = '_N_RP_';
const CACHE_ONE_YEAR_SECONDS = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const PROXY_FILENAME = 'proxy';
const PROXY_LOCATION_REGEXP = `(?:src/)?${PROXY_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
const WEB_SOCKET_MAX_RECONNECTIONS = 12;
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The Node.js bundle layer for the API routes.
   */ apiNode: 'api-node',
    /**
   * The Edge Lite bundle layer for the API routes.
   */ apiEdge: 'api-edge',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.apiNode,
            WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
;
}),
"[project]/node_modules/next/dist/esm/server/api-utils/index.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS",
    ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA",
    ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT",
    ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES",
    ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA",
    ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate",
    ()=>checkIsOnDemandRevalidate,
    "clearPreviewData",
    ()=>clearPreviewData,
    "redirect",
    ()=>redirect,
    "sendError",
    ()=>sendError,
    "sendStatusCode",
    ()=>sendStatusCode,
    "setLazyProp",
    ()=>setLazyProp,
    "wrapApiHandler",
    ()=>wrapApiHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [api] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$api$5d$__$28$ecmascript$29$__["getTracer"])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$api$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(rawHeaders, previewProps) {
    // Headers is a plain object for Node.js, Headers object in Edge runtime
    if (typeof rawHeaders.get === 'function') {
        const headers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(rawHeaders);
        const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
        const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
        const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
        return {
            isOnDemandRevalidate,
            revalidateOnlyGenerated
        };
    }
    const headers = rawHeaders;
    const previewModeId = headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]];
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.hasOwnProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/cookie/index.js [api] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
}
}),
"[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppRenderSpan",
    ()=>AppRenderSpan,
    "AppRouteRouteHandlersSpan",
    ()=>AppRouteRouteHandlersSpan,
    "AppRouteRouteModuleSpan",
    ()=>AppRouteRouteModuleSpan,
    "BaseServerSpan",
    ()=>BaseServerSpan,
    "DevBundlerServiceSpan",
    ()=>DevBundlerServiceSpan,
    "InstrumentationSpan",
    ()=>InstrumentationSpan,
    "LoadComponentsSpan",
    ()=>LoadComponentsSpan,
    "LogSpanAllowList",
    ()=>LogSpanAllowList,
    "MiddlewareSpan",
    ()=>MiddlewareSpan,
    "NextNodeServerSpan",
    ()=>NextNodeServerSpan,
    "NextServerSpan",
    ()=>NextServerSpan,
    "NextSpan",
    ()=>NextSpan,
    "NextVanillaSpanAllowlist",
    ()=>NextVanillaSpanAllowlist,
    "NodeSpan",
    ()=>NodeSpan,
    "RenderSpan",
    ()=>RenderSpan,
    "ResolveMetadataSpan",
    ()=>ResolveMetadataSpan,
    "RouteModuleSpan",
    ()=>RouteModuleSpan,
    "RouterSpan",
    ()=>RouterSpan,
    "StartServerSpan",
    ()=>StartServerSpan
]);
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
var BaseServerSpan = /*#__PURE__*/ function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
    return BaseServerSpan;
}(BaseServerSpan || {});
var LoadComponentsSpan = /*#__PURE__*/ function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
    LoadComponentsSpan["loadRouteModule"] = "LoadComponents.loadRouteModule";
    return LoadComponentsSpan;
}(LoadComponentsSpan || {});
var InstrumentationSpan = /*#__PURE__*/ function(InstrumentationSpan) {
    InstrumentationSpan["loadModule"] = "Instrumentation.loadModule";
    InstrumentationSpan["register"] = "Instrumentation.register";
    return InstrumentationSpan;
}(InstrumentationSpan || {});
var NextServerSpan = /*#__PURE__*/ function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getRequestHandlerWithMetadata"] = "NextServer.getRequestHandlerWithMetadata";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
    return NextServerSpan;
}(NextServerSpan || {});
var NextNodeServerSpan = /*#__PURE__*/ function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
    return NextNodeServerSpan;
}(NextNodeServerSpan || {});
var StartServerSpan = /*#__PURE__*/ function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
    return StartServerSpan;
}(StartServerSpan || {});
var RenderSpan = /*#__PURE__*/ function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
    return RenderSpan;
}(RenderSpan || {});
var AppRenderSpan = /*#__PURE__*/ function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
    AppRenderSpan["waitShellReady"] = "AppRender.waitShellReady";
    AppRenderSpan["renderToNodeFizzStream"] = "AppRender.renderToNodeFizzStream";
    AppRenderSpan["instantInsights"] = "AppRender.instantInsights";
    AppRenderSpan["instantInsightsPrepareValidation"] = "AppRender.instantInsights.prepareValidation";
    AppRenderSpan["instantInsightsRunValidation"] = "AppRender.instantInsights.runValidation";
    return AppRenderSpan;
}(AppRenderSpan || {});
var DevBundlerServiceSpan = /*#__PURE__*/ function(DevBundlerServiceSpan) {
    DevBundlerServiceSpan["ensurePage"] = "DevBundlerService.ensurePage";
    return DevBundlerServiceSpan;
}(DevBundlerServiceSpan || {});
var RouterSpan = /*#__PURE__*/ function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
    return RouterSpan;
}(RouterSpan || {});
var NodeSpan = /*#__PURE__*/ function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
    return NodeSpan;
}(NodeSpan || {});
var AppRouteRouteHandlersSpan = /*#__PURE__*/ function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
    return AppRouteRouteHandlersSpan;
}(AppRouteRouteHandlersSpan || {});
var AppRouteRouteModuleSpan = /*#__PURE__*/ function(AppRouteRouteModuleSpan) {
    AppRouteRouteModuleSpan["loadUserland"] = "AppRouteRouteModule.loadUserland";
    return AppRouteRouteModuleSpan;
}(AppRouteRouteModuleSpan || {});
var RouteModuleSpan = /*#__PURE__*/ function(RouteModuleSpan) {
    RouteModuleSpan["prepare"] = "RouteModule.prepare";
    RouteModuleSpan["loadManifests"] = "RouteModule.loadManifests";
    return RouteModuleSpan;
}(RouteModuleSpan || {});
var ResolveMetadataSpan = /*#__PURE__*/ function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
    return ResolveMetadataSpan;
}(ResolveMetadataSpan || {});
var MiddlewareSpan = /*#__PURE__*/ function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
    return MiddlewareSpan;
}(MiddlewareSpan || {});
var NextSpan = /*#__PURE__*/ function(NextSpan) {
    // Root span inserted by the middleware adapter when the request has no
    // trace context (separately invoked middleware without a parent), so the
    // middleware and the render are siblings in one trace.
    NextSpan["request"] = "Next.request";
    return NextSpan;
}(NextSpan || {});
const NextVanillaSpanAllowlist = new Set([
    "Middleware.execute",
    "Next.request",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "LoadComponents.loadRouteModule",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "AppRouteRouteModule.loadUserland",
    "RouteModule.prepare",
    "Instrumentation.loadModule",
    "Instrumentation.register",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
]);
const LogSpanAllowList = new Set([
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
]);
;
}),
"[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BubbledError",
    ()=>BubbledError,
    "SpanKind",
    ()=>SpanKind,
    "SpanStatusCode",
    ()=>SpanStatusCode,
    "getTracer",
    ()=>getTracer,
    "isBubbledError",
    ()=>isBubbledError,
    "recordSpanError",
    ()=>recordSpanError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/is-thenable.js [api] (ecmascript)");
;
;
const NEXT_OTEL_PERFORMANCE_PREFIX = process.env.NEXT_OTEL_PERFORMANCE_PREFIX;
const LOCAL_SPAN_RECORDER_KEY = Symbol.for('@next/local-span-recorder');
let api;
function getLocalSpanRecorder() {
    if ("TURBOPACK compile-time truthy", 1) {
        return globalThis[LOCAL_SPAN_RECORDER_KEY];
    } else //TURBOPACK unreachable
    ;
}
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    try {
        api = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/index.cjs [api] (ecmascript)");
    } catch (err) {
        api = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js [api] (ecmascript)");
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super(), this.bubble = bubble, this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const recordSpanError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
            span.setAttribute('error.type', error.name);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
};
const closeSpanWithError = (span, error, endTime)=>{
    recordSpanError(span, error);
    span.end(endTime);
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', "16.4.3");
    }
    isOpenTelemetryEnabled() {
        var _tracerProvider_getDelegate_constructor, _tracerProvider_getDelegate;
        const activeSpan = trace.getSpan(context.active());
        if (activeSpan == null ? void 0 : activeSpan.isRecording()) {
            return true;
        }
        const tracerProvider = trace.getTracerProvider();
        if (!('getDelegate' in tracerProvider)) {
            return true;
        }
        return (tracerProvider.getDelegate == null ? void 0 : (_tracerProvider_getDelegate = tracerProvider.getDelegate.call(tracerProvider)) == null ? void 0 : (_tracerProvider_getDelegate_constructor = _tracerProvider_getDelegate.constructor) == null ? void 0 : _tracerProvider_getDelegate_constructor.name) !== 'NoopTracerProvider';
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getTraceContextHeaders() {
        const activeContext = context.active();
        if (!trace.getSpanContext(activeContext) || !this.isOpenTelemetryEnabled()) {
            return undefined;
        }
        const carrier = {};
        propagation.inject(activeContext, carrier);
        const { traceparent, tracestate } = carrier;
        if (!traceparent) {
            return undefined;
        }
        return {
            traceparent,
            tracestate
        };
    }
    hasActiveSpanContext() {
        const spanContext = trace.getSpanContext(context.active());
        return Boolean(spanContext && trace.isSpanContextValid(spanContext));
    }
    getActiveScopeSpan() {
        const localSpanRecorder = getLocalSpanRecorder();
        const activeLocalSpan = localSpanRecorder == null ? void 0 : localSpanRecorder.getActiveLocalSpan();
        if (activeLocalSpan && (localSpanRecorder == null ? void 0 : localSpanRecorder.isOpenTelemetryIsolatedSpan(activeLocalSpan))) {
            return activeLocalSpan;
        }
        const activeSpan = trace.getSpan(context.active());
        if (activeSpan || !("TURBOPACK compile-time value", "1")) {
            return activeSpan;
        }
        return activeLocalSpan;
    }
    withPropagatedContext(carrier, fn, getter, force = false) {
        const activeContext = context.active();
        if (!NEXT_OTEL_PERFORMANCE_PREFIX && !this.isOpenTelemetryEnabled() && !trace.getSpanContext(activeContext)) {
            return fn();
        }
        if (force) {
            const remoteContext = propagation.extract(ROOT_CONTEXT, carrier, getter);
            if (trace.getSpanContext(remoteContext)) {
                return context.with(remoteContext, fn);
            }
            // Preserve the current active span while still merging any extracted
            // baggage/context values from the carrier.
            const mergedContext = propagation.extract(activeContext, carrier, getter);
            return context.with(mergedContext, fn);
        }
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        const [type, fnOrOptions, fnOrEmpty] = args;
        const tracingEnabled = Boolean(NEXT_OTEL_PERFORMANCE_PREFIX) || this.isOpenTelemetryEnabled();
        const localSpanRecorder = getLocalSpanRecorder();
        const localSpanRecordingEnabled = (localSpanRecorder == null ? void 0 : localSpanRecorder.isLocalSpanRecordingEnabled()) ?? false;
        if (!tracingEnabled && !localSpanRecordingEnabled) {
            return typeof fnOrOptions === 'function' ? fnOrOptions() : fnOrEmpty();
        }
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        const parentSpan = options.parentSpan ?? this.getActiveScopeSpan();
        const isolatedParentSpan = parentSpan && (localSpanRecorder == null ? void 0 : localSpanRecorder.isOpenTelemetryIsolatedSpan(parentSpan)) ? parentSpan : undefined;
        const shouldDelegateSpan = !isolatedParentSpan && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].has(type) || process.env.NEXT_OTEL_VERBOSE === '1');
        const shouldTraceSpan = shouldDelegateSpan || ((localSpanRecorder == null ? void 0 : localSpanRecorder.isRequestInsightsEnabled()) ?? false);
        if (!shouldTraceSpan || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = isolatedParentSpan ? context.active() : this.getSpanContext(parentSpan);
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
        }
        // Check if there's already a root span in the store for this trace
        // We are intentionally not checking whether there is an active context
        // from outside of nextjs to ensure that we can provide the same level
        // of telemetry when using a custom server
        const existingRootSpanId = spanContext.getValue(rootSpanIdKey);
        const isRootSpan = typeof existingRootSpanId !== 'number' || !rootSpanAttributesStore.has(existingRootSpanId);
        const spanId = getSpanId();
        options.attributes = {
            'next.span_category': 'nextjs',
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.runWithActiveSpan(spanName, options, spanContext, tracingEnabled && shouldDelegateSpan, localSpanRecordingEnabled, isolatedParentSpan, (span)=>{
                let startTime;
                if (NEXT_OTEL_PERFORMANCE_PREFIX && type && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__["LogSpanAllowList"].has(type)) {
                    startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                }
                let cleanedUp = false;
                const onCleanup = ()=>{
                    if (cleanedUp) return;
                    cleanedUp = true;
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime) {
                        performance.measure(`${NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                if (fn.length > 1) {
                    try {
                        return fn(span, (err)=>{
                            if (err) {
                                closeSpanWithError(span, err, options.endTime);
                            } else {
                                span.end(options.endTime);
                            }
                        });
                    } catch (err) {
                        closeSpanWithError(span, err, options.endTime);
                        throw err;
                    } finally{
                        onCleanup();
                    }
                }
                try {
                    const result = fn(span);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$api$5d$__$28$ecmascript$29$__["isThenable"])(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end(options.endTime);
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err, options.endTime);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end(options.endTime);
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err, options.endTime);
                    onCleanup();
                    throw err;
                }
            }));
    }
    runWithActiveSpan(spanName, options, parentContext, tracingEnabled, localSpanRecordingEnabled, isolatedParentSpan, fn) {
        if (tracingEnabled) {
            return this.getTracerInstance().startActiveSpan(spanName, options, (span)=>fn(localSpanRecordingEnabled ? this.createLocalRecordingSpan(spanName, options, parentContext, span, isolatedParentSpan) : span));
        }
        const span = this.createLocalRecordingSpan(spanName, options, parentContext, undefined, isolatedParentSpan);
        const localSpanRecorder = getLocalSpanRecorder();
        return localSpanRecorder.withLocalSpan(span, ()=>localSpanRecorder.isOpenTelemetryIsolatedSpan(span) ? fn(span) : context.with(trace.setSpan(context.active(), span), fn, undefined, span));
    }
    createLocalRecordingSpan(name, options, parentContext, delegateSpan, isolatedParentSpan) {
        const parentSpanContext = (isolatedParentSpan == null ? void 0 : isolatedParentSpan.spanContext()) ?? trace.getSpanContext(parentContext);
        const delegateSpanContext = delegateSpan == null ? void 0 : delegateSpan.spanContext();
        return getLocalSpanRecorder().createLocalSpan({
            name,
            attributes: options.attributes,
            links: options.links,
            startTime: options.startTime,
            delegateSpan,
            traceId: (delegateSpanContext == null ? void 0 : delegateSpanContext.traceId) ?? (parentSpanContext == null ? void 0 : parentSpanContext.traceId),
            spanId: delegateSpanContext == null ? void 0 : delegateSpanContext.spanId,
            parentSpanId: parentSpanContext == null ? void 0 : parentSpanContext.spanId,
            isolateOpenTelemetry: isolatedParentSpan !== undefined
        });
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$api$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].has(name) && process.env.NEXT_OTEL_VERBOSE !== '1' && !("TURBOPACK compile-time value", "1")) //TURBOPACK unreachable
        ;
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, passedOptions] = args;
        const options = passedOptions ? {
            ...passedOptions,
            attributes: {
                'next.span_category': 'nextjs',
                ...passedOptions.attributes
            }
        } : {
            attributes: {
                'next.span_category': 'nextjs'
            }
        };
        const localSpanRecorder = getLocalSpanRecorder();
        const parentSpan = options.parentSpan ?? this.getActiveScopeSpan();
        const isolatedParentSpan = parentSpan && (localSpanRecorder == null ? void 0 : localSpanRecorder.isOpenTelemetryIsolatedSpan(parentSpan)) ? parentSpan : undefined;
        const parentContext = (isolatedParentSpan ? undefined : this.getSpanContext(parentSpan)) ?? context.active();
        const localSpanRecordingEnabled = (localSpanRecorder == null ? void 0 : localSpanRecorder.isLocalSpanRecordingEnabled()) ?? false;
        if (!localSpanRecordingEnabled) {
            return this.getTracerInstance().startSpan(type, options, parentContext);
        }
        const delegateSpan = !isolatedParentSpan && this.isOpenTelemetryEnabled() ? this.getTracerInstance().startSpan(type, options, parentContext) : undefined;
        return this.createLocalRecordingSpan(type, options, parentContext, delegateSpan, isolatedParentSpan);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes && !attributes.has(key)) {
            attributes.set(key, value);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            var _getLocalSpanRecorder;
            const localSpan = (_getLocalSpanRecorder = getLocalSpanRecorder()) == null ? void 0 : _getLocalSpanRecorder.getActiveLocalSpan();
            if (localSpan) {
                localSpan.setAttribute(key, value);
            }
        }
    }
    withSpan(span, fn) {
        const recorder = getLocalSpanRecorder();
        if (recorder == null ? void 0 : recorder.isLocalRecordingSpan(span)) {
            return recorder.withLocalSpan(span, ()=>recorder.isOpenTelemetryIsolatedSpan(span) ? fn() : context.with(trace.setSpan(context.active(), span), fn));
        }
        return context.with(trace.setSpan(context.active(), span), fn);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
}),
"[project]/node_modules/next/dist/esm/server/request-meta.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// FIXME: (wyattjoh) this is a temporary solution to allow us to pass data between bundled modules
__turbopack_context__.s([
    "NEXT_REQUEST_META",
    ()=>NEXT_REQUEST_META,
    "addRequestMeta",
    ()=>addRequestMeta,
    "getRequestMeta",
    ()=>getRequestMeta,
    "removeRequestMeta",
    ()=>removeRequestMeta,
    "setRequestMeta",
    ()=>setRequestMeta
]);
const NEXT_REQUEST_META = Symbol.for('NextInternalRequestMeta');
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === 'string' ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return meta;
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function removeRequestMeta(request, key) {
    const meta = getRequestMeta(request);
    delete meta[key];
    return setRequestMeta(request, meta);
}
}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteKind",
    ()=>RouteKind
]);
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({});
}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [api] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
/**
 * Builds the read methods for a sealed view that exposes all of `target`.
 */ function createPassThroughMethods(target, sealed) {
    return {
        get: target.get.bind(target),
        has: target.has.bind(target),
        getSetCookie: target.getSetCookie.bind(target),
        keys: target.keys.bind(target),
        values: target.values.bind(target),
        entries: target.entries.bind(target),
        [Symbol.iterator]: target[Symbol.iterator].bind(target),
        // The native method passes the unsealed target as the callback's `parent`
        // argument. That is a mutable handle on the underlying headers. Pass the
        // sealed view instead.
        forEach (callbackfn, thisArg) {
            for (const [name, value] of target.entries()){
                callbackfn.call(thisArg, value, name, sealed);
            }
        }
    };
}
/**
 * Builds the read methods for a sealed view that omits the header names matched
 * by `isHidden`.
 */ function createHidingMethods(target, sealed, isHidden) {
    function* entries() {
        for (const entry of target.entries()){
            if (!isHidden(entry[0])) {
                yield entry;
            }
        }
    }
    return {
        entries,
        [Symbol.iterator]: entries,
        get: (name)=>isHidden(name) ? null : target.get(name),
        has: (name)=>isHidden(name) ? false : target.has(name),
        getSetCookie: ()=>isHidden('set-cookie') ? [] : target.getSetCookie(),
        *keys () {
            for (const name of target.keys()){
                if (!isHidden(name)) {
                    yield name;
                }
            }
        },
        *values () {
            for (const [, value] of entries()){
                yield value;
            }
        },
        // The native method passes the unsealed target as the callback's `parent`
        // argument. That is a mutable handle on the underlying headers. Pass the
        // sealed view instead.
        forEach (callbackfn, thisArg) {
            for (const [name, value] of entries()){
                callbackfn.call(thisArg, value, name, sealed);
            }
        }
    };
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   *
   * The sealed view stays live. Later writes to `headers` remain visible
   * through it.
   *
   * `hidden` omits the given header names from every read operation (`get`,
   * `has`, `getSetCookie`, `forEach`, and iteration). The names must be
   * lowercase. The underlying headers are neither copied nor mutated, so hidden
   * headers remain available to the framework.
   */ static seal(headers, hidden) {
        const isHidden = hidden && hidden.size > 0 ? (name)=>hidden.has(name.toLowerCase()) : null;
        // The methods are built once per sealed view and reused, so repeated access
        // returns the same function instead of a fresh closure. They are assigned
        // after the proxy exists because `forEach` hands the proxy to its callback.
        // Creating the proxy runs no trap, so nothing can read them before then.
        let methods;
        const sealed = new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    case Symbol.iterator:
                        return methods[Symbol.iterator];
                    case 'get':
                    case 'has':
                    case 'getSetCookie':
                    case 'keys':
                    case 'values':
                    case 'entries':
                    case 'forEach':
                        return methods[prop];
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
        methods = isHidden ? createHidingMethods(headers, sealed, isHidden) : createPassThroughMethods(headers, sealed);
        return sealed;
    }
    /**
   * @param headers
   * @returns A fresh object identity backed by the original value
   */ static fresh(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReflectAdapter",
    ()=>ReflectAdapter
]);
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/node_modules/next/dist/esm/shared/lib/is-thenable.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ __turbopack_context__.s([
    "isThenable",
    ()=>isThenable
]);
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
}
}),
]})(),
"[externals]/pdf-parse [external] (pdf-parse, cjs, [project]/node_modules/pdf-parse)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("pdf-parse-08f4573089f02674", () => require("pdf-parse-08f4573089f02674"));

module.exports = mod;
}),
"[project]/node_modules/@opentelemetry/api/dist/api/context.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_global_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/internal/global-utils.cjs [api] (ecmascript)");
const require_diag = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/diag.cjs [api] (ecmascript)");
const require_NoopContextManager = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/context/NoopContextManager.cjs [api] (ecmascript)");
//#region src/api/context.ts
const API_NAME = "context";
const NOOP_CONTEXT_MANAGER = new require_NoopContextManager.NoopContextManager();
const NOOP_TOKEN = Object.freeze({
    dispose: ()=>{}
});
/**
* Singleton object which represents the entry point to the OpenTelemetry Context API
*
* @since 1.0.0
*/ var ContextAPI = class ContextAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ constructor(){
        this._attachUnsupportedWarned = false;
    }
    /** Get the singleton instance of the Context API */ static getInstance() {
        if (!this._instance) this._instance = new ContextAPI();
        return this._instance;
    }
    /**
	* Set the current context manager.
	*
	* @returns true if the context manager was successfully registered, else false
	*/ setGlobalContextManager(contextManager) {
        return require_global_utils.registerGlobal(API_NAME, contextManager, require_diag.DiagAPI.instance());
    }
    /**
	* Get the currently active context
	*/ active() {
        return this._getContextManager().active();
    }
    /**
	* Execute a function with an active context
	*
	* @param context context to be active during function execution
	* @param fn function to execute in a context
	* @param thisArg optional receiver to be used for calling fn
	* @param args optional arguments forwarded to fn
	*/ with(context, fn, thisArg, ...args) {
        return this._getContextManager().with(context, fn, thisArg, ...args);
    }
    /**
	* Bind a context to a target function or event emitter
	*
	* @param context context to bind to the event emitter or function. Defaults to the currently active context
	* @param target function or event emitter to bind
	*/ bind(context, target) {
        return this._getContextManager().bind(context, target);
    }
    /**
	* Imperatively sets `context` as active, returning a {@link ContextManagementToken} whose
	* {@link ContextManagementToken.dispose} restores the previous context.
	*
	* This is a delicate, low-level API - prefer {@link with}/{@link bind}, which
	* restore context automatically. Use `attach` only to bridge callback
	* boundaries that `with` cannot wrap. Call `token.dispose()` when the
	* operation is done.
	*
	* **Caveat for async functions:** If called inside an async function before
	* the first `await`, the context change may leak into the caller's context
	* and remain active there. Prefer {@link with} for async code.
	*
	* Support is best-effort and varies by the active ContextManager (see
	* {@link ContextManager.attach}); if it does not implement `attach`, this logs
	* a warning and returns a no-op token.
	*
	* @param context The Context to attach
	* @returns A {@link ContextManagementToken} whose dispose() restores the previous Context
	* @since 1.10.0
	* @experimental This API is experimental and may change in minor releases without prior notice.
	*/ attach(context) {
        const contextManager = this._getContextManager();
        if (contextManager.attach) return contextManager.attach(context);
        if (!this._attachUnsupportedWarned) {
            this._attachUnsupportedWarned = true;
            require_diag.DiagAPI.instance().warn("The current ContextManager does not implement attach(). The context will not be attached. Use a ContextManager that supports attach() (e.g. AsyncLocalStorageContextManager) or use with()/bind() instead.");
        }
        return NOOP_TOKEN;
    }
    _getContextManager() {
        return require_global_utils.getGlobal(API_NAME) || NOOP_CONTEXT_MANAGER;
    }
    /** Disable and remove the global context manager */ disable() {
        this._getContextManager().disable();
        require_global_utils.unregisterGlobal(API_NAME, require_diag.DiagAPI.instance());
    }
};
//#endregion
exports.ContextAPI = ContextAPI;
}),
"[project]/node_modules/@opentelemetry/api/dist/api/diag.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_global_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/internal/global-utils.cjs [api] (ecmascript)");
const require_ComponentLogger = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/diag/ComponentLogger.cjs [api] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/diag/types.cjs [api] (ecmascript)");
const require_logLevelLogger = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/diag/internal/logLevelLogger.cjs [api] (ecmascript)");
//#region src/api/diag.ts
const API_NAME = "diag";
/**
* Singleton object which represents the entry point to the OpenTelemetry internal
* diagnostic API
*
* @since 1.0.0
*/ var DiagAPI = class DiagAPI {
    /** Get the singleton instance of the DiagAPI API */ static instance() {
        if (!this._instance) this._instance = new DiagAPI();
        return this._instance;
    }
    /**
	* Private internal constructor
	* @private
	*/ constructor(){
        function _logProxy(funcName) {
            return function(...args) {
                const logger = require_global_utils.getGlobal("diag");
                if (!logger) return;
                return logger[funcName](...args);
            };
        }
        const self = this;
        const setLogger = (logger, optionsOrLogLevel = {
            logLevel: 60
        })=>{
            var _optionsOrLogLevel$lo;
            if (logger === self) {
                var _err$stack;
                const err = /* @__PURE__ */ new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                self.error((_err$stack = err.stack) !== null && _err$stack !== void 0 ? _err$stack : err.message);
                return false;
            }
            if (typeof optionsOrLogLevel === "number") optionsOrLogLevel = {
                logLevel: optionsOrLogLevel
            };
            const oldLogger = require_global_utils.getGlobal("diag");
            const newLogger = require_logLevelLogger.createLogLevelDiagLogger((_optionsOrLogLevel$lo = optionsOrLogLevel.logLevel) !== null && _optionsOrLogLevel$lo !== void 0 ? _optionsOrLogLevel$lo : 60, logger);
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
                var _Error$stack;
                const stack = (_Error$stack = /* @__PURE__ */ new Error().stack) !== null && _Error$stack !== void 0 ? _Error$stack : "<failed to generate stacktrace>";
                oldLogger.warn(`Current logger will be overwritten from ${stack}`);
                newLogger.warn(`Current logger will overwrite one already registered from ${stack}`);
            }
            return require_global_utils.registerGlobal("diag", newLogger, self, true);
        };
        self.setLogger = setLogger;
        self.disable = ()=>{
            require_global_utils.unregisterGlobal(API_NAME, self);
        };
        self.createComponentLogger = (options)=>{
            return new require_ComponentLogger.DiagComponentLogger(options);
        };
        self.verbose = _logProxy("verbose");
        self.debug = _logProxy("debug");
        self.info = _logProxy("info");
        self.warn = _logProxy("warn");
        self.error = _logProxy("error");
    }
};
//#endregion
exports.DiagAPI = DiagAPI;
}),
"[project]/node_modules/@opentelemetry/api/dist/api/logs.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_global_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/internal/global-utils.cjs [api] (ecmascript)");
const require_diag = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/diag.cjs [api] (ecmascript)");
const require_ProxyLoggerProvider = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/logs/ProxyLoggerProvider.cjs [api] (ecmascript)");
//#region src/api/logs.ts
const API_NAME = "logs";
/**
* Singleton object which represents the entry point to the OpenTelemetry Logs API
*
* @since 1.10.0
*/ var LogsAPI = class LogsAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ constructor(){
        this._proxyLoggerProvider = new require_ProxyLoggerProvider.ProxyLoggerProvider();
    }
    /** Get the singleton instance of the Logs API */ static getInstance() {
        if (!this._instance) this._instance = new LogsAPI();
        return this._instance;
    }
    setGlobalLoggerProvider(provider) {
        const success = require_global_utils.registerGlobal(API_NAME, provider, require_diag.DiagAPI.instance());
        if (success) this._proxyLoggerProvider._setDelegate(provider);
        return success;
    }
    /**
	* Returns the global logger provider.
	*
	* @returns LoggerProvider
	*/ getLoggerProvider() {
        return require_global_utils.getGlobal(API_NAME) || this._proxyLoggerProvider;
    }
    /**
	* Returns a Logger, creating one if one with the given name, version,
	* schemaUrl, and attributes is not already created.
	*
	* Getting a Logger may be expensive, especially when `attributes` are
	* provided. Reuse Logger instances where possible instead of calling
	* `getLogger()` on hot paths.
	*
	* @param name The name of the logger or instrumentation library.
	* @param version The version of the logger or instrumentation library.
	* @param options The options of the logger or instrumentation library.
	* @returns {@link Logger}
	*/ getLogger(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    }
    /** Remove the global logger provider */ disable() {
        require_global_utils.unregisterGlobal(API_NAME, require_diag.DiagAPI.instance());
        this._proxyLoggerProvider = new require_ProxyLoggerProvider.ProxyLoggerProvider();
    }
};
//#endregion
exports.LogsAPI = LogsAPI;
}),
"[project]/node_modules/@opentelemetry/api/dist/api/metrics.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_global_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/internal/global-utils.cjs [api] (ecmascript)");
const require_diag = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/diag.cjs [api] (ecmascript)");
const require_NoopMeterProvider = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/metrics/NoopMeterProvider.cjs [api] (ecmascript)");
//#region src/api/metrics.ts
const API_NAME = "metrics";
/**
* Singleton object which represents the entry point to the OpenTelemetry Metrics API
*
* @since 1.4.1
*/ var MetricsAPI = class MetricsAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ constructor(){}
    /** Get the singleton instance of the Metrics API */ static getInstance() {
        if (!this._instance) this._instance = new MetricsAPI();
        return this._instance;
    }
    /**
	* Set the current global meter provider.
	* Returns true if the meter provider was successfully registered, else false.
	*/ setGlobalMeterProvider(provider) {
        return require_global_utils.registerGlobal(API_NAME, provider, require_diag.DiagAPI.instance());
    }
    /**
	* Returns the global meter provider.
	*/ getMeterProvider() {
        return require_global_utils.getGlobal(API_NAME) || require_NoopMeterProvider.NOOP_METER_PROVIDER;
    }
    /**
	* Returns a meter from the global meter provider.
	*/ getMeter(name, version, options) {
        return this.getMeterProvider().getMeter(name, version, options);
    }
    /** Remove the global meter provider */ disable() {
        require_global_utils.unregisterGlobal(API_NAME, require_diag.DiagAPI.instance());
    }
};
//#endregion
exports.MetricsAPI = MetricsAPI;
}),
"[project]/node_modules/@opentelemetry/api/dist/api/propagation.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_global_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/internal/global-utils.cjs [api] (ecmascript)");
const require_diag = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/diag.cjs [api] (ecmascript)");
const require_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/baggage/utils.cjs [api] (ecmascript)");
const require_TextMapPropagator = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/propagation/TextMapPropagator.cjs [api] (ecmascript)");
const require_NoopTextMapPropagator = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/propagation/NoopTextMapPropagator.cjs [api] (ecmascript)");
const require_context_helpers = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/baggage/context-helpers.cjs [api] (ecmascript)");
//#region src/api/propagation.ts
const API_NAME = "propagation";
const NOOP_TEXT_MAP_PROPAGATOR = new require_NoopTextMapPropagator.NoopTextMapPropagator();
/**
* Singleton object which represents the entry point to the OpenTelemetry Propagation API
*
* @since 1.0.0
*/ var PropagationAPI = class PropagationAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ constructor(){
        this.createBaggage = require_utils.createBaggage;
        this.getBaggage = require_context_helpers.getBaggage;
        this.getActiveBaggage = require_context_helpers.getActiveBaggage;
        this.setBaggage = require_context_helpers.setBaggage;
        this.deleteBaggage = require_context_helpers.deleteBaggage;
    }
    /** Get the singleton instance of the Propagator API */ static getInstance() {
        if (!this._instance) this._instance = new PropagationAPI();
        return this._instance;
    }
    /**
	* Set the current propagator.
	*
	* @returns true if the propagator was successfully registered, else false
	*/ setGlobalPropagator(propagator) {
        return require_global_utils.registerGlobal(API_NAME, propagator, require_diag.DiagAPI.instance());
    }
    /**
	* Inject context into a carrier to be propagated inter-process
	*
	* @param context Context carrying tracing data to inject
	* @param carrier carrier to inject context into
	* @param setter Function used to set values on the carrier
	*/ inject(context, carrier, setter = require_TextMapPropagator.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(context, carrier, setter);
    }
    /**
	* Extract context from a carrier
	*
	* @param context Context which the newly created context will inherit from
	* @param carrier Carrier to extract context from
	* @param getter Function used to extract keys from a carrier
	*/ extract(context, carrier, getter = require_TextMapPropagator.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(context, carrier, getter);
    }
    /**
	* Return a list of all fields which may be used by the propagator.
	*/ fields() {
        return this._getGlobalPropagator().fields();
    }
    /** Remove the global propagator */ disable() {
        require_global_utils.unregisterGlobal(API_NAME, require_diag.DiagAPI.instance());
    }
    _getGlobalPropagator() {
        return require_global_utils.getGlobal(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    }
};
//#endregion
exports.PropagationAPI = PropagationAPI;
}),
"[project]/node_modules/@opentelemetry/api/dist/api/trace.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_global_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/internal/global-utils.cjs [api] (ecmascript)");
const require_diag = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/diag.cjs [api] (ecmascript)");
const require_context_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/context-utils.cjs [api] (ecmascript)");
const require_spancontext_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/spancontext-utils.cjs [api] (ecmascript)");
const require_ProxyTracerProvider = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/ProxyTracerProvider.cjs [api] (ecmascript)");
//#region src/api/trace.ts
const API_NAME = "trace";
/**
* Singleton object which represents the entry point to the OpenTelemetry Tracing API
*
* @since 1.0.0
*/ var TraceAPI = class TraceAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ constructor(){
        this._proxyTracerProvider = new require_ProxyTracerProvider.ProxyTracerProvider();
        this.wrapSpanContext = require_spancontext_utils.wrapSpanContext;
        this.isSpanContextValid = require_spancontext_utils.isSpanContextValid;
        this.deleteSpan = require_context_utils.deleteSpan;
        this.getSpan = require_context_utils.getSpan;
        this.getActiveSpan = require_context_utils.getActiveSpan;
        this.getSpanContext = require_context_utils.getSpanContext;
        this.setSpan = require_context_utils.setSpan;
        this.setSpanContext = require_context_utils.setSpanContext;
    }
    /** Get the singleton instance of the Trace API */ static getInstance() {
        if (!this._instance) this._instance = new TraceAPI();
        return this._instance;
    }
    /**
	* Set the current global tracer.
	*
	* @returns true if the tracer provider was successfully registered, else false
	*/ setGlobalTracerProvider(provider) {
        const success = require_global_utils.registerGlobal(API_NAME, this._proxyTracerProvider, require_diag.DiagAPI.instance());
        if (success) this._proxyTracerProvider.setDelegate(provider);
        return success;
    }
    /**
	* Returns the global tracer provider.
	*/ getTracerProvider() {
        return require_global_utils.getGlobal(API_NAME) || this._proxyTracerProvider;
    }
    /**
	* Returns a tracer from the global tracer provider.
	*/ getTracer(name, version) {
        return this.getTracerProvider().getTracer(name, version);
    }
    /** Remove the global tracer provider */ disable() {
        require_global_utils.unregisterGlobal(API_NAME, require_diag.DiagAPI.instance());
        this._proxyTracerProvider = new require_ProxyTracerProvider.ProxyTracerProvider();
    }
};
//#endregion
exports.TraceAPI = TraceAPI;
}),
"[project]/node_modules/@opentelemetry/api/dist/baggage/context-helpers.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_context = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/context/context.cjs [api] (ecmascript)");
const require_context$1 = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/context.cjs [api] (ecmascript)");
//#region src/baggage/context-helpers.ts
/**
* Baggage key
*/ const BAGGAGE_KEY = require_context.createContextKey("OpenTelemetry Baggage Key");
/**
* Retrieve the current baggage from the given context
*
* @param {Context} Context that manage all context values
* @returns {Baggage} Extracted baggage from the context
*/ function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || void 0;
}
/**
* Retrieve the current baggage from the active/current context
*
* @returns {Baggage} Extracted baggage from the context
*/ function getActiveBaggage() {
    return getBaggage(require_context$1.ContextAPI.getInstance().active());
}
/**
* Store a baggage in the given context
*
* @param {Context} Context that manage all context values
* @param {Baggage} baggage that will be set in the actual context
*/ function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
/**
* Delete the baggage stored in the given context
*
* @param {Context} Context that manage all context values
*/ function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}
//#endregion
exports.deleteBaggage = deleteBaggage;
exports.getActiveBaggage = getActiveBaggage;
exports.getBaggage = getBaggage;
exports.setBaggage = setBaggage;
}),
"[project]/node_modules/@opentelemetry/api/dist/baggage/internal/baggage-impl.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/baggage/internal/baggage-impl.ts
var BaggageImpl = class BaggageImpl {
    constructor(entries){
        this._entries = entries ? new Map(entries) : /* @__PURE__ */ new Map();
    }
    getEntry(key) {
        const entry = this._entries.get(key);
        if (!entry) return;
        return Object.assign({}, entry);
    }
    getAllEntries() {
        return Array.from(this._entries.entries());
    }
    setEntry(key, entry) {
        const newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    }
    removeEntry(key) {
        const newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    }
    removeEntries(...keys) {
        const newBaggage = new BaggageImpl(this._entries);
        for (const key of keys)newBaggage._entries.delete(key);
        return newBaggage;
    }
    clear() {
        return new BaggageImpl();
    }
};
//#endregion
exports.BaggageImpl = BaggageImpl;
}),
"[project]/node_modules/@opentelemetry/api/dist/baggage/internal/symbol.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/baggage/internal/symbol.ts
/**
* Symbol used to make BaggageEntryMetadata an opaque type
*/ const baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
//#endregion
exports.baggageEntryMetadataSymbol = baggageEntryMetadataSymbol;
}),
"[project]/node_modules/@opentelemetry/api/dist/baggage/utils.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_diag = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/diag.cjs [api] (ecmascript)");
const require_baggage_impl = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/baggage/internal/baggage-impl.cjs [api] (ecmascript)");
const require_symbol = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/baggage/internal/symbol.cjs [api] (ecmascript)");
//#region src/baggage/utils.ts
const diag = require_diag.DiagAPI.instance();
/**
* Create a new Baggage with optional entries
*
* @param entries An array of baggage entries the new baggage should contain
*/ function createBaggage(entries = {}) {
    return new require_baggage_impl.BaggageImpl(new Map(Object.entries(entries)));
}
/**
* Create a serializable BaggageEntryMetadata object from a string.
*
* @param str string metadata. Format is currently not defined by the spec and has no special meaning.
*
* @since 1.0.0
*/ function baggageEntryMetadataFromString(str) {
    if (typeof str !== "string") {
        diag.error(`Cannot create baggage metadata from unknown type: ${typeof str}`);
        str = "";
    }
    return {
        __TYPE__: require_symbol.baggageEntryMetadataSymbol,
        toString () {
            return str;
        }
    };
}
//#endregion
exports.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
exports.createBaggage = createBaggage;
}),
"[project]/node_modules/@opentelemetry/api/dist/context-api.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/context-api.ts
/**
* Entrypoint for context API
* @since 1.0.0
*/ const context = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/context.cjs [api] (ecmascript)").ContextAPI.getInstance();
//#endregion
exports.context = context;
}),
"[project]/node_modules/@opentelemetry/api/dist/context/NoopContextManager.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_context = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/context/context.cjs [api] (ecmascript)");
//#region src/context/NoopContextManager.ts
var NoopContextManager = class {
    active() {
        return require_context.ROOT_CONTEXT;
    }
    with(_context, fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
    }
    bind(_context, target) {
        return target;
    }
    enable() {
        return this;
    }
    disable() {
        return this;
    }
    /** @experimental This API is experimental and may change in minor releases without prior notice. */ attach(_context) {
        return {
            dispose () {}
        };
    }
};
//#endregion
exports.NoopContextManager = NoopContextManager;
}),
"[project]/node_modules/@opentelemetry/api/dist/context/context.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/context/context.ts
/**
* Get a key to uniquely identify a context value
*
* @since 1.0.0
*/ function createContextKey(description) {
    return Symbol.for(description);
}
/**
* The root context is used as the default parent context when there is no active context
*
* @since 1.0.0
*/ const ROOT_CONTEXT = new class BaseContext {
    /**
	* Construct a new context which inherits values from an optional parent context.
	*
	* @param parentContext a context from which to inherit values
	*/ constructor(parentContext){
        const self = this;
        self._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
        self.getValue = (key)=>self._currentContext.get(key);
        self.setValue = (key, value)=>{
            const context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = (key)=>{
            const context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
}();
//#endregion
exports.ROOT_CONTEXT = ROOT_CONTEXT;
exports.createContextKey = createContextKey;
}),
"[project]/node_modules/@opentelemetry/api/dist/diag-api.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/diag-api.ts
/**
* Entrypoint for Diag API.
* Defines Diagnostic handler used for internal diagnostic logging operations.
* The default provides a Noop DiagLogger implementation which may be changed via the
* diag.setLogger(logger: DiagLogger) function.
*
* @since 1.0.0
*/ const diag = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/diag.cjs [api] (ecmascript)").DiagAPI.instance();
//#endregion
exports.diag = diag;
}),
"[project]/node_modules/@opentelemetry/api/dist/diag/ComponentLogger.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_global_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/internal/global-utils.cjs [api] (ecmascript)");
//#region src/diag/ComponentLogger.ts
/**
* Component Logger which is meant to be used as part of any component which
* will add automatically additional namespace in front of the log message.
* It will then forward all message to global diag logger
* @example
* const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
* cLogger.debug('test');
* // @opentelemetry/instrumentation-http test
*/ var DiagComponentLogger = class {
    constructor(props){
        this._namespace = props.namespace || "DiagComponentLogger";
    }
    debug(...args) {
        return logProxy("debug", this._namespace, args);
    }
    error(...args) {
        return logProxy("error", this._namespace, args);
    }
    info(...args) {
        return logProxy("info", this._namespace, args);
    }
    warn(...args) {
        return logProxy("warn", this._namespace, args);
    }
    verbose(...args) {
        return logProxy("verbose", this._namespace, args);
    }
};
function logProxy(funcName, namespace, args) {
    const logger = require_global_utils.getGlobal("diag");
    if (!logger) return;
    return logger[funcName](namespace, ...args);
}
//#endregion
exports.DiagComponentLogger = DiagComponentLogger;
}),
"[project]/node_modules/@opentelemetry/api/dist/diag/consoleLogger.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/diag/consoleLogger.ts
const consoleMap = [
    {
        n: "error",
        c: "error"
    },
    {
        n: "warn",
        c: "warn"
    },
    {
        n: "info",
        c: "info"
    },
    {
        n: "debug",
        c: "debug"
    },
    {
        n: "verbose",
        c: "trace"
    }
];
const _originalConsoleMethods = {};
if (typeof console !== "undefined") {
    for (const key of [
        "error",
        "warn",
        "info",
        "debug",
        "trace",
        "log"
    ])if (typeof console[key] === "function") _originalConsoleMethods[key] = console[key];
}
/**
* A simple Immutable Console based diagnostic logger which will output any messages to the Console.
* If you want to limit the amount of logging to a specific level or lower use the
* {@link createLogLevelDiagLogger}
*
* @since 1.0.0
*/ var DiagConsoleLogger = class {
    constructor(){
        function _consoleFunc(funcName) {
            return function(...args) {
                let theFunc = _originalConsoleMethods[funcName];
                if (typeof theFunc !== "function") theFunc = _originalConsoleMethods["log"];
                if (typeof theFunc !== "function" && console) {
                    theFunc = console[funcName];
                    if (typeof theFunc !== "function") theFunc = console.log;
                }
                if (typeof theFunc === "function") return theFunc.apply(console, args);
            };
        }
        for(let i = 0; i < consoleMap.length; i++)this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
    }
};
//#endregion
exports.DiagConsoleLogger = DiagConsoleLogger;
exports._originalConsoleMethods = _originalConsoleMethods;
}),
"[project]/node_modules/@opentelemetry/api/dist/diag/internal/logLevelLogger.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/diag/types.cjs [api] (ecmascript)");
//#region src/diag/internal/logLevelLogger.ts
function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < 0) maxLevel = 0;
    else if (maxLevel > 9999) maxLevel = 9999;
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        const theFunc = logger[funcName];
        if (typeof theFunc === "function" && maxLevel >= theLevel) return theFunc.bind(logger);
        return function() {};
    }
    return {
        error: _filterFunc("error", 30),
        warn: _filterFunc("warn", 50),
        info: _filterFunc("info", 60),
        debug: _filterFunc("debug", 70),
        verbose: _filterFunc("verbose", 80)
    };
}
//#endregion
exports.createLogLevelDiagLogger = createLogLevelDiagLogger;
}),
"[project]/node_modules/@opentelemetry/api/dist/diag/types.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/diag/types.ts
/**
* Defines the available internal logging levels for the diagnostic logger, the numeric values
* of the levels are defined to match the original values from the initial LogLevel to avoid
* compatibility/migration issues for any implementation that assume the numeric ordering.
*
* @since 1.0.0
*/ let DiagLogLevel = /* @__PURE__ */ function(DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */ DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */ DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */ DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */ DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */ DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
	* Detailed trace level logging should only be used for development, should only be set
	* in a development environment.
	*/ DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */ DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
    return DiagLogLevel;
}({});
//#endregion
exports.DiagLogLevel = DiagLogLevel;
}),
"[project]/node_modules/@opentelemetry/api/dist/index.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperties(exports, {
    __esModule: {
        value: true
    },
    [Symbol.toStringTag]: {
        value: "Module"
    }
});
const require_types = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/diag/types.cjs [api] (ecmascript)");
const require_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/baggage/utils.cjs [api] (ecmascript)");
const require_context = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/context/context.cjs [api] (ecmascript)");
const require_consoleLogger = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/diag/consoleLogger.cjs [api] (ecmascript)");
const require_NoopMeter = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/metrics/NoopMeter.cjs [api] (ecmascript)");
const require_Metric = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/metrics/Metric.cjs [api] (ecmascript)");
const require_NoopLogger = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/logs/NoopLogger.cjs [api] (ecmascript)");
const require_LogRecord = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/logs/LogRecord.cjs [api] (ecmascript)");
const require_TextMapPropagator = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/propagation/TextMapPropagator.cjs [api] (ecmascript)");
const require_trace_flags = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/trace_flags.cjs [api] (ecmascript)");
const require_invalid_span_constants = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/invalid-span-constants.cjs [api] (ecmascript)");
const require_spancontext_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/spancontext-utils.cjs [api] (ecmascript)");
const require_ProxyTracer = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/ProxyTracer.cjs [api] (ecmascript)");
const require_span_kind = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/span_kind.cjs [api] (ecmascript)");
const require_status = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/status.cjs [api] (ecmascript)");
const require_utils$1 = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/internal/utils.cjs [api] (ecmascript)");
const require_ProxyTracerProvider = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/ProxyTracerProvider.cjs [api] (ecmascript)");
const require_SamplingResult = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/SamplingResult.cjs [api] (ecmascript)");
const require_context_api = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/context-api.cjs [api] (ecmascript)");
const require_diag_api = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/diag-api.cjs [api] (ecmascript)");
const require_logs_api = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/logs-api.cjs [api] (ecmascript)");
const require_metrics_api = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/metrics-api.cjs [api] (ecmascript)");
const require_propagation_api = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/propagation-api.cjs [api] (ecmascript)");
const require_trace_api = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace-api.cjs [api] (ecmascript)");
//#region src/index.ts
var src_default = {
    context: require_context_api.context,
    diag: require_diag_api.diag,
    logs: require_logs_api.logs,
    metrics: require_metrics_api.metrics,
    propagation: require_propagation_api.propagation,
    trace: require_trace_api.trace
};
//#endregion
exports.DiagConsoleLogger = require_consoleLogger.DiagConsoleLogger;
exports.DiagLogLevel = require_types.DiagLogLevel;
exports.INVALID_SPANID = require_invalid_span_constants.INVALID_SPANID;
exports.INVALID_SPAN_CONTEXT = require_invalid_span_constants.INVALID_SPAN_CONTEXT;
exports.INVALID_TRACEID = require_invalid_span_constants.INVALID_TRACEID;
exports.ProxyTracer = require_ProxyTracer.ProxyTracer;
exports.ProxyTracerProvider = require_ProxyTracerProvider.ProxyTracerProvider;
exports.ROOT_CONTEXT = require_context.ROOT_CONTEXT;
exports.SamplingDecision = require_SamplingResult.SamplingDecision;
exports.SeverityNumber = require_LogRecord.SeverityNumber;
exports.SpanKind = require_span_kind.SpanKind;
exports.SpanStatusCode = require_status.SpanStatusCode;
exports.TraceFlags = require_trace_flags.TraceFlags;
exports.ValueType = require_Metric.ValueType;
exports.baggageEntryMetadataFromString = require_utils.baggageEntryMetadataFromString;
exports.context = require_context_api.context;
exports.createContextKey = require_context.createContextKey;
exports.createNoopLogger = require_NoopLogger.createNoopLogger;
exports.createNoopMeter = require_NoopMeter.createNoopMeter;
exports.createTraceState = require_utils$1.createTraceState;
exports.default = src_default;
exports.defaultTextMapGetter = require_TextMapPropagator.defaultTextMapGetter;
exports.defaultTextMapSetter = require_TextMapPropagator.defaultTextMapSetter;
exports.diag = require_diag_api.diag;
exports.isSpanContextValid = require_spancontext_utils.isSpanContextValid;
exports.isValidSpanId = require_spancontext_utils.isValidSpanId;
exports.isValidTraceId = require_spancontext_utils.isValidTraceId;
exports.logs = require_logs_api.logs;
exports.metrics = require_metrics_api.metrics;
exports.propagation = require_propagation_api.propagation;
exports.trace = require_trace_api.trace;
}),
"[project]/node_modules/@opentelemetry/api/dist/internal/global-utils.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_version = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/version.cjs [api] (ecmascript)");
const require_semver = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/internal/semver.cjs [api] (ecmascript)");
//#region src/internal/global-utils.ts
const major = require_version.VERSION.split(".")[0];
const GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for(`opentelemetry.js.api.${major}`);
const _global = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
function _makeGlobalApi() {
    return Object.defineProperty({}, "version", {
        value: require_version.VERSION,
        enumerable: true,
        writable: false,
        configurable: false
    });
}
function registerGlobal(type, instance, diag, allowOverride = false) {
    var _global$GLOBAL_OPENTE;
    const api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_global$GLOBAL_OPENTE = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _global$GLOBAL_OPENTE !== void 0 ? _global$GLOBAL_OPENTE : _makeGlobalApi();
    if (!allowOverride && api[type]) {
        const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${type}`);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== "1.10.0") {
        const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Registration of version v${api.version} for ${type} does not match previously registered API v${require_version.VERSION}`);
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug(`@opentelemetry/api: Registered a global for ${type} v${require_version.VERSION}.`);
    return true;
}
let _compatibleGlobalApi;
function getGlobal(type) {
    const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api == null) return;
    if (api !== _compatibleGlobalApi) {
        if (!api.version || !require_semver.isCompatible(api.version)) return;
        _compatibleGlobalApi = api;
    }
    return api[type];
}
function unregisterGlobal(type, diag) {
    diag.debug(`@opentelemetry/api: Unregistering a global for ${type} v${require_version.VERSION}.`);
    const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) delete api[type];
}
//#endregion
exports.getGlobal = getGlobal;
exports.registerGlobal = registerGlobal;
exports.unregisterGlobal = unregisterGlobal;
}),
"[project]/node_modules/@opentelemetry/api/dist/internal/semver.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_version = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/version.cjs [api] (ecmascript)");
//#region src/internal/semver.ts
const re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
/**
* Create a function to test an API version to see if it is compatible with the provided ownVersion.
*
* The returned function has the following semantics:
* - Exact match is always compatible
* - Major versions must match exactly
*    - 1.x package cannot use global 2.x package
*    - 2.x package cannot use global 1.x package
* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
* - Patch and build tag differences are not considered at this time
*
* @param ownVersion version which should be checked against
*/ function _makeCompatibilityCheck(ownVersion) {
    const acceptedVersions = /* @__PURE__ */ new Set([
        ownVersion
    ]);
    const rejectedVersions = /* @__PURE__ */ new Set();
    const myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) return ()=>false;
    const ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4]
    };
    if (ownVersionParsed.prerelease != null) return function isExactmatch(globalVersion) {
        return globalVersion === ownVersion;
    };
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) return true;
        if (rejectedVersions.has(globalVersion)) return false;
        const globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) return _reject(globalVersion);
        const globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4]
        };
        if (globalVersionParsed.prerelease != null) return _reject(globalVersion);
        if (ownVersionParsed.major !== globalVersionParsed.major) return _reject(globalVersion);
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) return _accept(globalVersion);
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) return _accept(globalVersion);
        return _reject(globalVersion);
    };
}
/**
* Test an API version to see if it is compatible with this API.
*
* - Exact match is always compatible
* - Major versions must match exactly
*    - 1.x package cannot use global 2.x package
*    - 2.x package cannot use global 1.x package
* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
* - Patch and build tag differences are not considered at this time
*
* @param version version of the API requesting an instance of the global API
*/ const isCompatible = _makeCompatibilityCheck(require_version.VERSION);
//#endregion
exports._makeCompatibilityCheck = _makeCompatibilityCheck;
exports.isCompatible = isCompatible;
}),
"[project]/node_modules/@opentelemetry/api/dist/logs-api.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/logs-api.ts
/**
* Entrypoint for logs API
*
* @since 1.10.0
*/ const logs = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/logs.cjs [api] (ecmascript)").LogsAPI.getInstance();
//#endregion
exports.logs = logs;
}),
"[project]/node_modules/@opentelemetry/api/dist/logs/LogRecord.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/logs/LogRecord.ts
let SeverityNumber = /* @__PURE__ */ function(SeverityNumber) {
    SeverityNumber[SeverityNumber["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SeverityNumber[SeverityNumber["TRACE"] = 1] = "TRACE";
    SeverityNumber[SeverityNumber["TRACE2"] = 2] = "TRACE2";
    SeverityNumber[SeverityNumber["TRACE3"] = 3] = "TRACE3";
    SeverityNumber[SeverityNumber["TRACE4"] = 4] = "TRACE4";
    SeverityNumber[SeverityNumber["DEBUG"] = 5] = "DEBUG";
    SeverityNumber[SeverityNumber["DEBUG2"] = 6] = "DEBUG2";
    SeverityNumber[SeverityNumber["DEBUG3"] = 7] = "DEBUG3";
    SeverityNumber[SeverityNumber["DEBUG4"] = 8] = "DEBUG4";
    SeverityNumber[SeverityNumber["INFO"] = 9] = "INFO";
    SeverityNumber[SeverityNumber["INFO2"] = 10] = "INFO2";
    SeverityNumber[SeverityNumber["INFO3"] = 11] = "INFO3";
    SeverityNumber[SeverityNumber["INFO4"] = 12] = "INFO4";
    SeverityNumber[SeverityNumber["WARN"] = 13] = "WARN";
    SeverityNumber[SeverityNumber["WARN2"] = 14] = "WARN2";
    SeverityNumber[SeverityNumber["WARN3"] = 15] = "WARN3";
    SeverityNumber[SeverityNumber["WARN4"] = 16] = "WARN4";
    SeverityNumber[SeverityNumber["ERROR"] = 17] = "ERROR";
    SeverityNumber[SeverityNumber["ERROR2"] = 18] = "ERROR2";
    SeverityNumber[SeverityNumber["ERROR3"] = 19] = "ERROR3";
    SeverityNumber[SeverityNumber["ERROR4"] = 20] = "ERROR4";
    SeverityNumber[SeverityNumber["FATAL"] = 21] = "FATAL";
    SeverityNumber[SeverityNumber["FATAL2"] = 22] = "FATAL2";
    SeverityNumber[SeverityNumber["FATAL3"] = 23] = "FATAL3";
    SeverityNumber[SeverityNumber["FATAL4"] = 24] = "FATAL4";
    return SeverityNumber;
}({});
//#endregion
exports.SeverityNumber = SeverityNumber;
}),
"[project]/node_modules/@opentelemetry/api/dist/logs/NoopLogger.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/logs/NoopLogger.ts
var NoopLogger = class {
    emit(_logRecord) {}
    enabled() {
        return false;
    }
};
const NOOP_LOGGER = new NoopLogger();
/**
* Create a no-op Logger
*/ function createNoopLogger() {
    return NOOP_LOGGER;
}
//#endregion
exports.NOOP_LOGGER = NOOP_LOGGER;
exports.NoopLogger = NoopLogger;
exports.createNoopLogger = createNoopLogger;
}),
"[project]/node_modules/@opentelemetry/api/dist/logs/NoopLoggerProvider.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_NoopLogger = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/logs/NoopLogger.cjs [api] (ecmascript)");
//#region src/logs/NoopLoggerProvider.ts
var NoopLoggerProvider = class {
    getLogger(_name, _version, _options) {
        return new require_NoopLogger.NoopLogger();
    }
};
const NOOP_LOGGER_PROVIDER = new NoopLoggerProvider();
//#endregion
exports.NOOP_LOGGER_PROVIDER = NOOP_LOGGER_PROVIDER;
exports.NoopLoggerProvider = NoopLoggerProvider;
}),
"[project]/node_modules/@opentelemetry/api/dist/logs/ProxyLogger.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_NoopLogger = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/logs/NoopLogger.cjs [api] (ecmascript)");
//#region src/logs/ProxyLogger.ts
var ProxyLogger = class {
    constructor(provider, name, version, options){
        this._provider = provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
	* Emit a log record. This method should only be used by log appenders.
	*
	* @param logRecord
	*/ emit(logRecord) {
        this._getLogger().emit(logRecord);
    }
    enabled(options) {
        return this._getLogger().enabled(options);
    }
    /**
	* Try to get a logger from the proxy logger provider.
	* If the proxy logger provider has no delegate, return a noop logger.
	*/ _getLogger() {
        if (this._delegate) return this._delegate;
        const logger = this._provider._getDelegateLogger(this.name, this.version, this.options);
        if (!logger) return require_NoopLogger.NOOP_LOGGER;
        this._delegate = logger;
        return this._delegate;
    }
};
//#endregion
exports.ProxyLogger = ProxyLogger;
}),
"[project]/node_modules/@opentelemetry/api/dist/logs/ProxyLoggerProvider.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_NoopLoggerProvider = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/logs/NoopLoggerProvider.cjs [api] (ecmascript)");
const require_ProxyLogger = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/logs/ProxyLogger.cjs [api] (ecmascript)");
//#region src/logs/ProxyLoggerProvider.ts
var ProxyLoggerProvider = class {
    getLogger(name, version, options) {
        var _this$_getDelegateLog;
        return (_this$_getDelegateLog = this._getDelegateLogger(name, version, options)) !== null && _this$_getDelegateLog !== void 0 ? _this$_getDelegateLog : new require_ProxyLogger.ProxyLogger(this, name, version, options);
    }
    /**
	* Get the delegate logger provider.
	* Used by tests only.
	* @internal
	*/ _getDelegate() {
        var _this$_delegate;
        return (_this$_delegate = this._delegate) !== null && _this$_delegate !== void 0 ? _this$_delegate : require_NoopLoggerProvider.NOOP_LOGGER_PROVIDER;
    }
    /**
	* Set the delegate logger provider
	* @internal
	*/ _setDelegate(delegate) {
        this._delegate = delegate;
    }
    /**
	* @internal
	*/ _getDelegateLogger(name, version, options) {
        var _this$_delegate2;
        return (_this$_delegate2 = this._delegate) === null || _this$_delegate2 === void 0 ? void 0 : _this$_delegate2.getLogger(name, version, options);
    }
};
//#endregion
exports.ProxyLoggerProvider = ProxyLoggerProvider;
}),
"[project]/node_modules/@opentelemetry/api/dist/metrics-api.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/metrics-api.ts
/**
* Entrypoint for metrics API
*
* @since 1.3.0
*/ const metrics = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/metrics.cjs [api] (ecmascript)").MetricsAPI.getInstance();
//#endregion
exports.metrics = metrics;
}),
"[project]/node_modules/@opentelemetry/api/dist/metrics/Metric.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/metrics/Metric.ts
/**
* The Type of value. It describes how the data is reported.
*
* @since 1.3.0
*/ let ValueType = /* @__PURE__ */ function(ValueType) {
    ValueType[ValueType["INT"] = 0] = "INT";
    ValueType[ValueType["DOUBLE"] = 1] = "DOUBLE";
    return ValueType;
}({});
//#endregion
exports.ValueType = ValueType;
}),
"[project]/node_modules/@opentelemetry/api/dist/metrics/NoopMeter.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/metrics/NoopMeter.ts
/**
* NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
* constant NoopMetrics for all of its methods.
*/ var NoopMeter = class {
    constructor(){}
    /**
	* @see {@link Meter.createGauge}
	*/ createGauge(_name, _options) {
        return NOOP_GAUGE_METRIC;
    }
    /**
	* @see {@link Meter.createHistogram}
	*/ createHistogram(_name, _options) {
        return NOOP_HISTOGRAM_METRIC;
    }
    /**
	* @see {@link Meter.createCounter}
	*/ createCounter(_name, _options) {
        return NOOP_COUNTER_METRIC;
    }
    /**
	* @see {@link Meter.createUpDownCounter}
	*/ createUpDownCounter(_name, _options) {
        return NOOP_UP_DOWN_COUNTER_METRIC;
    }
    /**
	* @see {@link Meter.createObservableGauge}
	*/ createObservableGauge(_name, _options) {
        return NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    /**
	* @see {@link Meter.createObservableCounter}
	*/ createObservableCounter(_name, _options) {
        return NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    /**
	* @see {@link Meter.createObservableUpDownCounter}
	*/ createObservableUpDownCounter(_name, _options) {
        return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    /**
	* @see {@link Meter.addBatchObservableCallback}
	*/ addBatchObservableCallback(_callback, _observables) {}
    /**
	* @see {@link Meter.removeBatchObservableCallback}
	*/ removeBatchObservableCallback(_callback) {}
};
var NoopMetric = class {
};
var NoopCounterMetric = class extends NoopMetric {
    add(_value, _attributes) {}
};
var NoopUpDownCounterMetric = class extends NoopMetric {
    add(_value, _attributes) {}
};
var NoopGaugeMetric = class extends NoopMetric {
    record(_value, _attributes) {}
};
var NoopHistogramMetric = class extends NoopMetric {
    record(_value, _attributes) {}
};
var NoopObservableMetric = class {
    addCallback(_callback) {}
    removeCallback(_callback) {}
};
var NoopObservableCounterMetric = class extends NoopObservableMetric {
};
var NoopObservableGaugeMetric = class extends NoopObservableMetric {
};
var NoopObservableUpDownCounterMetric = class extends NoopObservableMetric {
};
const NOOP_METER = new NoopMeter();
const NOOP_COUNTER_METRIC = new NoopCounterMetric();
const NOOP_GAUGE_METRIC = new NoopGaugeMetric();
const NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
const NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
const NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
const NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
const NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
/**
* Create a no-op Meter
*
* @since 1.3.0
*/ function createNoopMeter() {
    return NOOP_METER;
}
//#endregion
exports.NOOP_COUNTER_METRIC = NOOP_COUNTER_METRIC;
exports.NOOP_GAUGE_METRIC = NOOP_GAUGE_METRIC;
exports.NOOP_HISTOGRAM_METRIC = NOOP_HISTOGRAM_METRIC;
exports.NOOP_METER = NOOP_METER;
exports.NOOP_OBSERVABLE_COUNTER_METRIC = NOOP_OBSERVABLE_COUNTER_METRIC;
exports.NOOP_OBSERVABLE_GAUGE_METRIC = NOOP_OBSERVABLE_GAUGE_METRIC;
exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
exports.NOOP_UP_DOWN_COUNTER_METRIC = NOOP_UP_DOWN_COUNTER_METRIC;
exports.NoopCounterMetric = NoopCounterMetric;
exports.NoopGaugeMetric = NoopGaugeMetric;
exports.NoopHistogramMetric = NoopHistogramMetric;
exports.NoopMeter = NoopMeter;
exports.NoopMetric = NoopMetric;
exports.NoopObservableCounterMetric = NoopObservableCounterMetric;
exports.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
exports.NoopObservableMetric = NoopObservableMetric;
exports.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
exports.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
exports.createNoopMeter = createNoopMeter;
}),
"[project]/node_modules/@opentelemetry/api/dist/metrics/NoopMeterProvider.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_NoopMeter = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/metrics/NoopMeter.cjs [api] (ecmascript)");
//#region src/metrics/NoopMeterProvider.ts
/**
* An implementation of the {@link MeterProvider} which returns an impotent Meter
* for all calls to `getMeter`
*/ var NoopMeterProvider = class {
    getMeter(_name, _version, _options) {
        return require_NoopMeter.NOOP_METER;
    }
};
const NOOP_METER_PROVIDER = new NoopMeterProvider();
//#endregion
exports.NOOP_METER_PROVIDER = NOOP_METER_PROVIDER;
exports.NoopMeterProvider = NoopMeterProvider;
}),
"[project]/node_modules/@opentelemetry/api/dist/propagation-api.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/propagation-api.ts
/**
* Entrypoint for propagation API
*
* @since 1.0.0
*/ const propagation = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/propagation.cjs [api] (ecmascript)").PropagationAPI.getInstance();
//#endregion
exports.propagation = propagation;
}),
"[project]/node_modules/@opentelemetry/api/dist/propagation/NoopTextMapPropagator.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/propagation/NoopTextMapPropagator.ts
/**
* No-op implementations of {@link TextMapPropagator}.
*/ var NoopTextMapPropagator = class {
    /** Noop inject function does nothing */ inject(_context, _carrier) {}
    /** Noop extract function does nothing and returns the input context */ extract(context, _carrier) {
        return context;
    }
    fields() {
        return [];
    }
};
//#endregion
exports.NoopTextMapPropagator = NoopTextMapPropagator;
}),
"[project]/node_modules/@opentelemetry/api/dist/propagation/TextMapPropagator.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/propagation/TextMapPropagator.ts
/**
* @since 1.0.0
*/ const defaultTextMapGetter = {
    get (carrier, key) {
        if (carrier == null) return;
        return carrier[key];
    },
    keys (carrier) {
        if (carrier == null) return [];
        return Object.keys(carrier);
    }
};
/**
* @since 1.0.0
*/ const defaultTextMapSetter = {
    set (carrier, key, value) {
        if (carrier == null) return;
        carrier[key] = value;
    }
};
//#endregion
exports.defaultTextMapGetter = defaultTextMapGetter;
exports.defaultTextMapSetter = defaultTextMapSetter;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace-api.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/trace-api.ts
/**
* Entrypoint for trace API
*
* @since 1.0.0
*/ const trace = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/trace.cjs [api] (ecmascript)").TraceAPI.getInstance();
//#endregion
exports.trace = trace;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/NonRecordingSpan.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_invalid_span_constants = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/invalid-span-constants.cjs [api] (ecmascript)");
//#region src/trace/NonRecordingSpan.ts
/**
* The NonRecordingSpan is the default {@link Span} that is used when no Span
* implementation is available. All operations are no-op including context
* propagation.
*/ var NonRecordingSpan = class {
    constructor(spanContext = require_invalid_span_constants.INVALID_SPAN_CONTEXT){
        this._spanContext = spanContext;
    }
    spanContext() {
        return this._spanContext;
    }
    setAttribute(_key, _value) {
        return this;
    }
    setAttributes(_attributes) {
        return this;
    }
    addEvent(_name, _attributes) {
        return this;
    }
    addLink(_link) {
        return this;
    }
    addLinks(_links) {
        return this;
    }
    setStatus(_status) {
        return this;
    }
    updateName(_name) {
        return this;
    }
    end(_endTime) {}
    isRecording() {
        return false;
    }
    recordException(_exception, _time) {}
};
//#endregion
exports.NonRecordingSpan = NonRecordingSpan;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/NoopTracer.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_context = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/context.cjs [api] (ecmascript)");
const require_NonRecordingSpan = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/NonRecordingSpan.cjs [api] (ecmascript)");
const require_context_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/context-utils.cjs [api] (ecmascript)");
const require_spancontext_utils = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/spancontext-utils.cjs [api] (ecmascript)");
//#region src/trace/NoopTracer.ts
const contextApi = require_context.ContextAPI.getInstance();
/**
* No-op implementations of {@link Tracer}.
*/ var NoopTracer = class {
    startSpan(name, options, context = contextApi.active()) {
        if (Boolean(options === null || options === void 0 ? void 0 : options.root)) return new require_NonRecordingSpan.NonRecordingSpan();
        const parentFromContext = context && require_context_utils.getSpanContext(context);
        if (isSpanContext(parentFromContext) && require_spancontext_utils.isSpanContextValid(parentFromContext)) return new require_NonRecordingSpan.NonRecordingSpan(parentFromContext);
        else return new require_NonRecordingSpan.NonRecordingSpan();
    }
    startActiveSpan(name, arg2, arg3, arg4) {
        var _ctx;
        let opts;
        let ctx;
        let fn;
        if (arguments.length < 2) return;
        else if (arguments.length === 2) fn = arg2;
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        const parentContext = (_ctx = ctx) !== null && _ctx !== void 0 ? _ctx : contextApi.active();
        const span = this.startSpan(name, opts, parentContext);
        const contextWithSpanSet = require_context_utils.setSpan(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, void 0, span);
    }
};
function isSpanContext(spanContext) {
    return spanContext !== null && typeof spanContext === "object" && "spanId" in spanContext && typeof spanContext["spanId"] === "string" && "traceId" in spanContext && typeof spanContext["traceId"] === "string" && "traceFlags" in spanContext && typeof spanContext["traceFlags"] === "number";
}
//#endregion
exports.NoopTracer = NoopTracer;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/NoopTracerProvider.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_NoopTracer = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/NoopTracer.cjs [api] (ecmascript)");
//#region src/trace/NoopTracerProvider.ts
/**
* An implementation of the {@link TracerProvider} which returns an impotent
* Tracer for all calls to `getTracer`.
*
* All operations are no-op.
*/ var NoopTracerProvider = class {
    getTracer(_name, _version, _options) {
        return new require_NoopTracer.NoopTracer();
    }
};
//#endregion
exports.NoopTracerProvider = NoopTracerProvider;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/ProxyTracer.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/trace/ProxyTracer.ts
const NOOP_TRACER = new (__turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/NoopTracer.cjs [api] (ecmascript)")).NoopTracer();
/**
* Proxy tracer provided by the proxy tracer provider
*
* @since 1.0.0
*/ var ProxyTracer = class {
    constructor(provider, name, version, options){
        this._provider = provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    startSpan(name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    }
    startActiveSpan(_name, _options, _context, _fn) {
        const tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    }
    /**
	* Try to get a tracer from the proxy tracer provider.
	* If the proxy tracer provider has no delegate, return a noop tracer.
	*/ _getTracer() {
        if (this._delegate) return this._delegate;
        const tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) return NOOP_TRACER;
        this._delegate = tracer;
        return this._delegate;
    }
};
//#endregion
exports.ProxyTracer = ProxyTracer;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/ProxyTracerProvider.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_ProxyTracer = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/ProxyTracer.cjs [api] (ecmascript)");
//#region src/trace/ProxyTracerProvider.ts
const NOOP_TRACER_PROVIDER = new (__turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/NoopTracerProvider.cjs [api] (ecmascript)")).NoopTracerProvider();
/**
* Tracer provider which provides {@link ProxyTracer}s.
*
* Before a delegate is set, tracers provided are NoOp.
*   When a delegate is set, traces are provided from the delegate.
*   When a delegate is set after tracers have already been provided,
*   all tracers already provided will use the provided delegate implementation.
*
* @deprecated This will be removed in the next major version.
* @since 1.0.0
*/ var ProxyTracerProvider = class {
    /**
	* Get a {@link ProxyTracer}
	*/ getTracer(name, version, options) {
        var _this$getDelegateTrac;
        return (_this$getDelegateTrac = this.getDelegateTracer(name, version, options)) !== null && _this$getDelegateTrac !== void 0 ? _this$getDelegateTrac : new require_ProxyTracer.ProxyTracer(this, name, version, options);
    }
    getDelegate() {
        var _this$_delegate;
        return (_this$_delegate = this._delegate) !== null && _this$_delegate !== void 0 ? _this$_delegate : NOOP_TRACER_PROVIDER;
    }
    /**
	* Set the delegate tracer provider
	*/ setDelegate(delegate) {
        this._delegate = delegate;
    }
    getDelegateTracer(name, version, options) {
        var _this$_delegate2;
        return (_this$_delegate2 = this._delegate) === null || _this$_delegate2 === void 0 ? void 0 : _this$_delegate2.getTracer(name, version, options);
    }
};
//#endregion
exports.ProxyTracerProvider = ProxyTracerProvider;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/SamplingResult.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/trace/SamplingResult.ts
/**
* @deprecated use the one declared in @opentelemetry/sdk-trace instead.
* A sampling decision that determines how a {@link Span} will be recorded
* and collected.
*
* @since 1.0.0
*/ let SamplingDecision = /* @__PURE__ */ function(SamplingDecision) {
    /**
	* `Span.isRecording() === false`, span will not be recorded and all events
	* and attributes will be dropped.
	*/ SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
	* `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
	* MUST NOT be set.
	*/ SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
	* `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
	* MUST be set.
	*/ SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
    return SamplingDecision;
}({});
//#endregion
exports.SamplingDecision = SamplingDecision;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/context-utils.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_context = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/context/context.cjs [api] (ecmascript)");
const require_context$1 = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/api/context.cjs [api] (ecmascript)");
const require_NonRecordingSpan = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/NonRecordingSpan.cjs [api] (ecmascript)");
//#region src/trace/context-utils.ts
/**
* span key
*/ const SPAN_KEY = require_context.createContextKey("OpenTelemetry Context Key SPAN");
/**
* Return the span if one exists
*
* @param context context to get span from
*/ function getSpan(context) {
    return context.getValue(SPAN_KEY) || void 0;
}
/**
* Gets the span from the current context, if one exists.
*/ function getActiveSpan() {
    return getSpan(require_context$1.ContextAPI.getInstance().active());
}
/**
* Set the span on a context
*
* @param context context to use as parent
* @param span span to set active
*/ function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
/**
* Remove current span stored in the context
*
* @param context context to delete span from
*/ function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
/**
* Wrap span context in a NoopSpan and set as span in a new
* context
*
* @param context context to set active span on
* @param spanContext span context to be wrapped
*/ function setSpanContext(context, spanContext) {
    return setSpan(context, new require_NonRecordingSpan.NonRecordingSpan(spanContext));
}
/**
* Get the span context of the span if it exists.
*
* @param context context to get values from
*/ function getSpanContext(context) {
    var _getSpan;
    return (_getSpan = getSpan(context)) === null || _getSpan === void 0 ? void 0 : _getSpan.spanContext();
}
//#endregion
exports.deleteSpan = deleteSpan;
exports.getActiveSpan = getActiveSpan;
exports.getSpan = getSpan;
exports.getSpanContext = getSpanContext;
exports.setSpan = setSpan;
exports.setSpanContext = setSpanContext;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/internal/tracestate-impl.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_tracestate_validators = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/internal/tracestate-validators.cjs [api] (ecmascript)");
//#region src/trace/internal/tracestate-impl.ts
const MAX_TRACE_STATE_ITEMS = 32;
const MAX_TRACE_STATE_LEN = 512;
const LIST_MEMBERS_SEPARATOR = ",";
const LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
/**
* TraceState must be a class and not a simple object type because of the spec
* requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
*
* Here is the list of allowed mutations:
* - New key-value pair should be added into the beginning of the list
* - The value of any key can be updated. Modified keys MUST be moved to the
* beginning of the list.
*
* @deprecated Use TraceState from "@opentelemetry/core". This will be removed in the next major version.
*/ var TraceStateImpl = class TraceStateImpl {
    constructor(rawTraceState){
        this._internalState = /* @__PURE__ */ new Map();
        if (rawTraceState) this._parse(rawTraceState);
    }
    set(key, value) {
        const currValue = this._internalState.get(key);
        let newLength = this.serialize().length;
        if (typeof currValue === "string") newLength += value.length - currValue.length;
        else {
            if (this._internalState.size >= MAX_TRACE_STATE_ITEMS) return this;
            newLength += key.length + value.length + (this._internalState.size > 0 ? 2 : 1);
        }
        if (newLength > MAX_TRACE_STATE_LEN) return this;
        const traceState = this._clone();
        if (traceState._internalState.has(key)) traceState._internalState.delete(key);
        traceState._internalState.set(key, value);
        return traceState;
    }
    unset(key) {
        const traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    }
    get(key) {
        return this._internalState.get(key);
    }
    serialize() {
        return Array.from(this._internalState.keys()).reduceRight((agg, key)=>{
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + this.get(key));
            return agg;
        }, []).join(LIST_MEMBERS_SEPARATOR);
    }
    _parse(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN) return;
        this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reduceRight((agg, part)=>{
            const listMember = part.trim();
            const i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                const key = listMember.slice(0, i);
                const value = listMember.slice(i + 1, part.length);
                if (require_tracestate_validators.validateKey(key) && require_tracestate_validators.validateValue(value)) agg.set(key, value);
            }
            return agg;
        }, /* @__PURE__ */ new Map());
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS));
    }
    _keys() {
        return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
        const traceState = new TraceStateImpl();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    }
};
//#endregion
exports.TraceStateImpl = TraceStateImpl;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/internal/tracestate-validators.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/trace/internal/tracestate-validators.ts
const VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
const VALID_KEY_REGEX = new RegExp(`^(?:${`[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`}|${`[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`})$`);
const VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
const INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
/**
* Key is opaque string up to 256 characters printable. It MUST begin with a
* lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
* underscores _, dashes -, asterisks *, and forward slashes /.
* For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
* vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
* see https://www.w3.org/TR/trace-context/#key
*/ function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
/**
* Value is opaque string up to 256 characters printable ASCII RFC0020
* characters (i.e., the range 0x20 to 0x7E) except comma , and =.
*/ function validateValue(value) {
    return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}
//#endregion
exports.validateKey = validateKey;
exports.validateValue = validateValue;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/internal/utils.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const require_tracestate_impl = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/internal/tracestate-impl.cjs [api] (ecmascript)");
//#region src/trace/internal/utils.ts
/**
* @deprecated Use TraceState from "@opentelemetry/core". This will be removed in the next major version.
* @since 1.1.0
*/ function createTraceState(rawTraceState) {
    return new require_tracestate_impl.TraceStateImpl(rawTraceState);
}
//#endregion
exports.createTraceState = createTraceState;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/invalid-span-constants.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/trace_flags.cjs [api] (ecmascript)");
//#region src/trace/invalid-span-constants.ts
/**
* @since 1.0.0
*/ const INVALID_SPANID = "0000000000000000";
/**
* @since 1.0.0
*/ const INVALID_TRACEID = "00000000000000000000000000000000";
/**
* @since 1.0.0
*/ const INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: 0
};
//#endregion
exports.INVALID_SPANID = INVALID_SPANID;
exports.INVALID_SPAN_CONTEXT = INVALID_SPAN_CONTEXT;
exports.INVALID_TRACEID = INVALID_TRACEID;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/span_kind.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/trace/span_kind.ts
/**
* @since 1.0.0
*/ let SpanKind = /* @__PURE__ */ function(SpanKind) {
    /** Default value. Indicates that the span is used internally. */ SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
	* Indicates that the span covers server-side handling of an RPC or other
	* remote request.
	*/ SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
	* Indicates that the span covers the client-side wrapper around an RPC or
	* other remote request.
	*/ SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
	* Indicates that the span describes producer sending a message to a
	* broker. Unlike client and server, there is no direct critical path latency
	* relationship between producer and consumer spans.
	*/ SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
	* Indicates that the span describes consumer receiving a message from a
	* broker. Unlike client and server, there is no direct critical path latency
	* relationship between producer and consumer spans.
	*/ SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
    return SpanKind;
}({});
//#endregion
exports.SpanKind = SpanKind;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/spancontext-utils.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/invalid-span-constants.cjs [api] (ecmascript)");
const require_NonRecordingSpan = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/dist/trace/NonRecordingSpan.cjs [api] (ecmascript)");
//#region src/trace/spancontext-utils.ts
const isHex = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1
]);
function isValidHex(id, length) {
    if (typeof id !== "string" || id.length !== length) return false;
    let r = 0;
    for(let i = 0; i < id.length; i += 4)r += (isHex[id.charCodeAt(i)] | 0) + (isHex[id.charCodeAt(i + 1)] | 0) + (isHex[id.charCodeAt(i + 2)] | 0) + (isHex[id.charCodeAt(i + 3)] | 0);
    return r === length;
}
/**
* @since 1.0.0
*/ function isValidTraceId(traceId) {
    return isValidHex(traceId, 32) && traceId !== "00000000000000000000000000000000";
}
/**
* @since 1.0.0
*/ function isValidSpanId(spanId) {
    return isValidHex(spanId, 16) && spanId !== "0000000000000000";
}
/**
* Returns true if this {@link SpanContext} is valid.
* @return true if this {@link SpanContext} is valid.
*
* @since 1.0.0
*/ function isSpanContextValid(spanContext) {
    return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
/**
* Wrap the given {@link SpanContext} in a new non-recording {@link Span}
*
* @param spanContext span context to be wrapped
* @returns a new non-recording {@link Span} with the provided context
*/ function wrapSpanContext(spanContext) {
    return new require_NonRecordingSpan.NonRecordingSpan(spanContext);
}
//#endregion
exports.isSpanContextValid = isSpanContextValid;
exports.isValidSpanId = isValidSpanId;
exports.isValidTraceId = isValidTraceId;
exports.wrapSpanContext = wrapSpanContext;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/status.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/trace/status.ts
/**
* An enumeration of status codes.
*
* @since 1.0.0
*/ let SpanStatusCode = /* @__PURE__ */ function(SpanStatusCode) {
    /**
	* The default status.
	*/ SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
	* The operation has been validated by an Application developer or
	* Operator to have completed successfully.
	*/ SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
	* The operation contains an error.
	*/ SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
    return SpanStatusCode;
}({});
//#endregion
exports.SpanStatusCode = SpanStatusCode;
}),
"[project]/node_modules/@opentelemetry/api/dist/trace/trace_flags.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/trace/trace_flags.ts
/**
* @since 1.0.0
*/ let TraceFlags = /* @__PURE__ */ function(TraceFlags) {
    /** Represents no flag set. */ TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */ TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
    return TraceFlags;
}({});
//#endregion
exports.TraceFlags = TraceFlags;
}),
"[project]/node_modules/@opentelemetry/api/dist/version.cjs [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region src/version.ts
const VERSION = "1.10.0";
//#endregion
exports.VERSION = VERSION;
}),
"[project]/node_modules/next/dist/compiled/@opentelemetry/api/index.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(108);
            const a = r(221);
            const o = r(44);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        44: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(757);
            const a = r(412);
            const o = r(711);
            const i = r(221);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        262: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(586);
            const a = r(221);
            const o = r(44);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        25: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(221);
            const a = r(19);
            const o = r(92);
            const i = r(398);
            const c = r(504);
            const s = r(44);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        397: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(221);
            const a = r(498);
            const o = r(477);
            const i = r(793);
            const c = r(44);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        398: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(912);
            const a = r(23);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        152: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        647: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        504: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(44);
            const a = r(152);
            const o = r(647);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        778: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(912);
            t.context = n.ContextAPI.getInstance();
        },
        108: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(23);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        23: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        304: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(44);
            t.diag = n.DiagAPI.instance();
        },
        757: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(221);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        83: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        412: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(711);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        711: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        221: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(678);
            const a = r(652);
            const o = r(662);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        662: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(652);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        120: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(262);
            t.metrics = n.MetricsAPI.getInstance();
        },
        532: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        440: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        586: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(440);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        678: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(59), t);
        },
        460: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : /*TURBOPACK member replacement*/ __turbopack_context__.g;
        },
        59: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(460), t);
        },
        27: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(25);
            t.propagation = n.PropagationAPI.getInstance();
        },
        19: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        92: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        816: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(397);
            t.trace = n.TraceAPI.getInstance();
        },
        374: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(546);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        637: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(912);
            const a = r(793);
            const o = r(374);
            const i = r(477);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        76: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(637);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        779: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(637);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        498: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(779);
            const a = r(76);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        312: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        793: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(23);
            const a = r(374);
            const o = r(912);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        285: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(240);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        240: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        87: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(285);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        546: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(731);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        613: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        477: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(546);
            const a = r(374);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        854: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        731: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        652: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/next/dist/compiled/@opentelemetry/api") + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(504);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(23);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(83);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(711);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(440);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(532);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(92);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(779);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(498);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(312);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(613);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(854);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(731);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(87);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(477);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(546);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(778);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(304);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(120);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(27);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(816);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();
}),
"[project]/node_modules/next/dist/compiled/cookie/index.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/next/dist/compiled/cookie") + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)");
        } else //TURBOPACK unreachable
        ;
    } else //TURBOPACK unreachable
    ;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0izu9r2s0-om9._.js.map