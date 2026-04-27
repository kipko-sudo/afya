module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/projects/afya/lib/afya-client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "afyaClient",
    ()=>afyaClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$15$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/afya/node_modules/.pnpm/axios@1.15.2/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const afyaClient = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$15$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'https://staging.collabmed.net/api/external',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
}),
"[project]/projects/afya/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00f135287bd9e12b6156213485982dc2dde6bbe9af":{"name":"initiateHandshake"},"4083fd7c9c00d50e4823734531161c7cdf87e362d3":{"name":"completeHandshake"}},"projects/afya/app/actions.ts",""] */ __turbopack_context__.s([
    "completeHandshake",
    ()=>completeHandshake,
    "initiateHandshake",
    ()=>initiateHandshake
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/afya/node_modules/.pnpm/next@16.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$lib$2f$afya$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/afya/lib/afya-client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/afya/node_modules/.pnpm/next@16.2.4_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function initiateHandshake() {
    try {
        const platformName = process.env.AFYA_PLATFORM_NAME;
        const platformKey = process.env.AFYA_PLATFORM_KEY;
        const platformSecret = process.env.AFYA_PLATFORM_SECRET;
        if (!platformName || !platformKey || !platformSecret) {
            throw new Error('Missing required environment variables');
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$lib$2f$afya$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afyaClient"].post('/initiate-handshake', {
            platform_name: platformName,
            platform_key: platformKey,
            platform_secret: platformSecret,
            callback_url: 'http://localhost:3000/callback'
        });
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to initiate handshake';
        console.error('Initiate handshake error:', error);
        return {
            success: false,
            error: errorMessage
        };
    }
}
async function completeHandshake(handshakeToken) {
    try {
        const platformKey = process.env.AFYA_PLATFORM_KEY;
        const platformSecret = process.env.AFYA_PLATFORM_SECRET;
        if (!platformKey || !platformSecret) {
            throw new Error('Missing required environment variables');
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$lib$2f$afya$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["afyaClient"].post('/complete-handshake', {
            handshake_token: handshakeToken,
            platform_key: platformKey,
            platform_secret: platformSecret
        });
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to complete handshake';
        console.error('Complete handshake error:', error);
        return {
            success: false,
            error: errorMessage
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    initiateHandshake,
    completeHandshake
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(initiateHandshake, "00f135287bd9e12b6156213485982dc2dde6bbe9af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(completeHandshake, "4083fd7c9c00d50e4823734531161c7cdf87e362d3", null);
}),
"[project]/projects/afya/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/projects/afya/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/afya/app/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/projects/afya/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/projects/afya/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00f135287bd9e12b6156213485982dc2dde6bbe9af",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initiateHandshake"],
    "4083fd7c9c00d50e4823734531161c7cdf87e362d3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["completeHandshake"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$projects$2f$afya$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/projects/afya/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/projects/afya/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$afya$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/afya/app/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0pd6xsj._.js.map