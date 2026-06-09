module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/contact.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$resend__$5b$external$5d$__$28$resend$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$resend$29$__ = __turbopack_context__.i("[externals]/resend [external] (resend, esm_import, [project]/node_modules/resend)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$resend__$5b$external$5d$__$28$resend$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$resend$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$resend__$5b$external$5d$__$28$resend$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$resend$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const resend = new __TURBOPACK__imported__module__$5b$externals$5d2f$resend__$5b$external$5d$__$28$resend$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$resend$29$__["Resend"](process.env.RESEND_API_KEY);
async function handler(req, res) {
    if (req.method === 'GET') {
        return res.status(200).json({
            message: 'Contact API is running. Send a POST request to submit a message.'
        });
    }
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            error: 'Name, email, and message are required.'
        });
    }
    try {
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: email,
            subject: `New message from ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
        });
        return res.status(200).json({
            success: true,
            message: 'Email sent successfully.'
        });
    } catch (error) {
        console.error('Resend error:', error);
        return res.status(500).json({
            error: 'Failed to send email. Please try again later.'
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07n442r._.js.map