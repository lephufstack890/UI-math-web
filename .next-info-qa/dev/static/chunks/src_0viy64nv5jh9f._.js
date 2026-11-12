(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AuthPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$provinces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo-provinces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AuthPage({ mode, onNavigate, onHome }) {
    _s();
    const register = mode === 'register';
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [province, setProvince] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [school, setSchool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    function preview() {
        if (register && (!role || !province)) {
            setNotice('selection');
            document.getElementById(!role ? 'auth-role' : 'auth-province')?.focus();
            return;
        }
        setNotice('preview');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `auth-page ${register ? 'auth-register' : 'auth-login'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "auth-back",
                onClick: onHome,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthPage.tsx",
                        lineNumber: 8,
                        columnNumber: 126
                    }, this),
                    " Về trang chủ"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AuthPage.tsx",
                lineNumber: 8,
                columnNumber: 79
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "auth-shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "auth-visual",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "TOÁN ÔN THI 360"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 229
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: register ? 'Cùng bắt đầu hành trình học Toán' : 'Chào mừng bạn trở lại'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 277
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Không gian kết nối học sinh, gia đình và thầy cô trên từng bước tiến."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 355
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: register ? '/assets/toan/foundation-v6.png' : '/assets/toan/family-v3.webp',
                                alt: register ? 'Minh họa học sinh sẵn sàng học Toán' : 'Minh họa phụ huynh đồng hành cùng học sinh'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 431
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "auth-benefits",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 650
                                            }, this),
                                            " Học theo mục tiêu"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 644
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 706
                                            }, this),
                                            " Đồng hành mỗi ngày"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 700
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 613
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AuthPage.tsx",
                        lineNumber: 8,
                        columnNumber: 198
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "auth-form-panel",
                        "aria-labelledby": "auth-form-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "auth-title-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AuthPage.tsx",
                                    lineNumber: 8,
                                    columnNumber: 875
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 842
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "auth-form-title",
                                children: register ? 'Tạo tài khoản' : 'Đăng nhập'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 905
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "auth-intro",
                                children: register ? 'Thông tin tạo tài khoản trong bản thiết kế.' : 'Tiếp tục hành trình học tập và làm việc của bạn.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 973
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "auth-demo",
                                role: "note",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        size: 19
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 1149
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Giao diện thử nghiệm, chưa kết nối xác thực."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 1169
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 1230
                                            }, this),
                                            register ? 'Chỉ thử vai trò, tỉnh/thành mẫu và tên trường giả định; không gửi hoặc lưu.' : 'Các ô thông tin đang khóa. Không nhập mật khẩu hay thông tin cá nhân thật.'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 1166
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 1110
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    preview();
                                },
                                noValidate: true,
                                children: [
                                    register && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "auth-choice-grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "auth-role",
                                                                children: [
                                                                    "Vai trò ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "aria-hidden": "true",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AuthPage.tsx",
                                                                        lineNumber: 8,
                                                                        columnNumber: 1559
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                                lineNumber: 8,
                                                                columnNumber: 1524
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                id: "auth-role",
                                                                value: role,
                                                                onChange: (e)=>setRole(e.target.value),
                                                                "aria-invalid": notice === 'selection' && !role,
                                                                "aria-describedby": "auth-choice-note",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Chọn vai trò (mẫu)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AuthPage.tsx",
                                                                        lineNumber: 8,
                                                                        columnNumber: 1753
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "student",
                                                                        children: "Học sinh"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AuthPage.tsx",
                                                                        lineNumber: 8,
                                                                        columnNumber: 1797
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "parent",
                                                                        children: "Phụ huynh"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AuthPage.tsx",
                                                                        lineNumber: 8,
                                                                        columnNumber: 1838
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "teacher",
                                                                        children: "Giáo viên"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AuthPage.tsx",
                                                                        lineNumber: 8,
                                                                        columnNumber: 1879
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                                lineNumber: 8,
                                                                columnNumber: 1600
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AuthPage.tsx",
                                                        lineNumber: 8,
                                                        columnNumber: 1519
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "auth-province",
                                                                children: [
                                                                    "Tỉnh/thành ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "aria-hidden": "true",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AuthPage.tsx",
                                                                        lineNumber: 8,
                                                                        columnNumber: 1983
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                                lineNumber: 8,
                                                                columnNumber: 1941
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                id: "auth-province",
                                                                value: province,
                                                                onChange: (e)=>setProvince(e.target.value),
                                                                "aria-invalid": notice === 'selection' && !province,
                                                                "aria-describedby": "auth-choice-note",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "Chọn tỉnh/thành mẫu"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AuthPage.tsx",
                                                                        lineNumber: 8,
                                                                        columnNumber: 2193
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$provinces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoProvinces"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: p.value,
                                                                            children: p.label
                                                                        }, p.value, false, {
                                                                            fileName: "[project]/src/components/AuthPage.tsx",
                                                                            lineNumber: 8,
                                                                            columnNumber: 2260
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                                lineNumber: 8,
                                                                columnNumber: 2024
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AuthPage.tsx",
                                                        lineNumber: 8,
                                                        columnNumber: 1936
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 1485
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                id: "auth-choice-note",
                                                className: "auth-choice-note",
                                                children: "Tỉnh/thành A/B/C là mẫu; vai trò không cấp quyền thật."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 2339
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "auth-school",
                                                children: "Tên trường (nhập thử)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 2451
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "auth-school",
                                                value: school,
                                                onChange: (e)=>setSchool(e.target.value),
                                                placeholder: "Ví dụ: Trường minh họa A",
                                                maxLength: 120,
                                                autoComplete: "off",
                                                "aria-describedby": "auth-school-note"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 2509
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                id: "auth-school-note",
                                                className: "auth-choice-note",
                                                children: "Chỉ nhập tên giả định; không gửi hoặc lưu."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 2699
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "auth-name",
                                                children: "Họ và tên"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 2799
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "auth-name",
                                                disabled: true,
                                                placeholder: "Chưa mở nhập thông tin",
                                                autoComplete: "off"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 2843
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 1483
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "auth-email",
                                        children: register ? 'Email' : 'Email hoặc tên đăng nhập'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 2935
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "auth-email",
                                        type: register ? 'email' : 'text',
                                        disabled: true,
                                        placeholder: "Chưa mở nhập tài khoản",
                                        autoComplete: "off"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 3016
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "auth-password",
                                        children: "Mật khẩu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 3136
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "auth-password",
                                        type: "password",
                                        disabled: true,
                                        placeholder: "Chưa mở nhập mật khẩu",
                                        autoComplete: "off"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 3183
                                    }, this),
                                    register ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "auth-confirm",
                                                children: "Nhập lại mật khẩu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 3302
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "auth-confirm",
                                                type: "password",
                                                disabled: true,
                                                placeholder: "Chưa mở xác nhận mật khẩu",
                                                autoComplete: "off"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 3357
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "auth-legal",
                                                children: "Bản xem trước không tạo tài khoản hoặc ghi nhận chấp thuận."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 3467
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 3300
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "auth-forgot",
                                        onClick: ()=>setNotice('forgot'),
                                        children: "Quên mật khẩu?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 3560
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "button primary auth-submit",
                                        children: [
                                            register ? 'Xem trước đăng ký' : 'Xem trước đăng nhập',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AuthPage.tsx",
                                                lineNumber: 8,
                                                columnNumber: 3777
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 3664
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 1410
                            }, this),
                            notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "auth-status",
                                role: "status",
                                children: notice === 'selection' ? 'Hãy chọn vai trò và tỉnh/thành mẫu để xem trước đăng ký. Không nhập thông tin thật.' : notice === 'forgot' ? 'Chưa mở khôi phục mật khẩu. Không có email hoặc mã xác nhận nào được gửi.' : 'Chưa kết nối hệ thống xác thực. Không có thông tin nào được gửi và chưa có tài khoản hay phiên đăng nhập được tạo.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 3825
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "auth-switch",
                                children: [
                                    register ? 'Đã có tài khoản?' : 'Chưa có tài khoản?',
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setNotice(null);
                                            setSchool('');
                                            onNavigate(register ? 'login' : 'register');
                                        },
                                        children: register ? 'Đăng nhập' : 'Đăng ký'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 4268
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 4190
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "auth-safety",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AuthPage.tsx",
                                        lineNumber: 8,
                                        columnNumber: 4434
                                    }, this),
                                    " Không thu thập thông tin trong bản xem trước"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AuthPage.tsx",
                                lineNumber: 8,
                                columnNumber: 4407
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AuthPage.tsx",
                        lineNumber: 8,
                        columnNumber: 771
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AuthPage.tsx",
                lineNumber: 8,
                columnNumber: 170
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AuthPage.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_s(AuthPage, "Lkpd88jSOYKUR8P5XpuvVasvESQ=");
_c = AuthPage;
var _c;
__turbopack_context__.k.register(_c, "AuthPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CatalogMetadata.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
;
function CatalogMetadata({ tab, index }) {
    if (![
        'classes',
        'materials',
        'practice'
    ].includes(tab)) return null;
    const code = String(index + 1).padStart(2, '0');
    const province = `Tỉnh/thành mẫu ${[
        'A',
        'B',
        'C'
    ][index % 3]}`;
    const fields = {
        classes: [
            [
                'Tỉnh/thành',
                province
            ],
            [
                'Hình thức học',
                [
                    'Trực tuyến',
                    'Trực tiếp',
                    'Kết hợp'
                ][index % 3]
            ],
            [
                'GV đứng lớp',
                `Giáo viên mẫu ${code}`
            ],
            [
                'Trung tâm quản lý',
                `Trung tâm mẫu ${[
                    'A',
                    'B',
                    'C'
                ][index % 3]}`
            ],
            [
                'GV đồng hành',
                [
                    `GV hỗ trợ mẫu ${code}A`,
                    `GV hỗ trợ mẫu ${code}B`
                ]
            ]
        ],
        materials: [
            [
                'Phạm vi áp dụng',
                index % 3 === 1 ? province : 'Toàn quốc (mẫu)'
            ],
            [
                'Tác giả / biên soạn',
                `Tác giả mẫu ${code}`
            ],
            [
                'Đơn vị quản lý',
                `Đơn vị học liệu mẫu ${[
                    'A',
                    'B',
                    'C'
                ][index % 3]}`
            ],
            [
                'Định dạng',
                [
                    'PDF (dự kiến)',
                    'Phiếu bài tập PDF',
                    'Sơ đồ kiến thức PDF'
                ][index % 3]
            ]
        ],
        practice: [
            [
                'Phạm vi áp dụng',
                index % 3 === 1 ? province : 'Toàn quốc (mẫu)'
            ],
            [
                'GV biên soạn',
                `Giáo viên mẫu ${code}`
            ],
            [
                'Đơn vị quản lý',
                `Đơn vị luyện đề mẫu ${[
                    'A',
                    'B',
                    'C'
                ][index % 3]}`
            ],
            [
                'Hình thức luyện',
                'Trực tuyến (dự kiến)'
            ],
            [
                'GV hỗ trợ',
                `GV hỗ trợ mẫu ${code}`
            ]
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "catalog-metadata",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "metadata-sample",
                children: "Thông tin minh họa"
            }, void 0, false, {
                fileName: "[project]/src/components/CatalogMetadata.tsx",
                lineNumber: 11,
                columnNumber: 43
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                children: fields[tab].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/CatalogMetadata.tsx",
                                lineNumber: 11,
                                columnNumber: 157
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                children: Array.isArray(value) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "companion-teacher-list",
                                    children: value.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: name
                                        }, name, false, {
                                            fileName: "[project]/src/components/CatalogMetadata.tsx",
                                            lineNumber: 11,
                                            columnNumber: 255
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CatalogMetadata.tsx",
                                    lineNumber: 11,
                                    columnNumber: 199
                                }, this) : value
                            }, void 0, false, {
                                fileName: "[project]/src/components/CatalogMetadata.tsx",
                                lineNumber: 11,
                                columnNumber: 173
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/src/components/CatalogMetadata.tsx",
                        lineNumber: 11,
                        columnNumber: 140
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/CatalogMetadata.tsx",
                lineNumber: 11,
                columnNumber: 102
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "catalog-rating",
                "aria-label": "Xếp hạng sao: chưa có đánh giá",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: [
                            0,
                            1,
                            2,
                            3,
                            4
                        ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                size: 12
                            }, n, false, {
                                fileName: "[project]/src/components/CatalogMetadata.tsx",
                                lineNumber: 11,
                                columnNumber: 434
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CatalogMetadata.tsx",
                        lineNumber: 11,
                        columnNumber: 389
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "Chưa có đánh giá"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CatalogMetadata.tsx",
                        lineNumber: 11,
                        columnNumber: 468
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CatalogMetadata.tsx",
                lineNumber: 11,
                columnNumber: 313
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CatalogMetadata.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = CatalogMetadata;
var _c;
__turbopack_context__.k.register(_c, "CatalogMetadata");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CompanionStories.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanionStories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
'use client';
;
;
const stories = [
    {
        image: '/assets/toan/foundation-v6.png',
        alt: 'Minh họa học sinh học Toán cùng sách vở',
        role: 'Góc nhìn học sinh',
        theme: 'student',
        quote: 'Khi biết bắt đầu từ đâu và hiểu từng bước, em thấy học Toán bớt khó hơn. Mỗi bài làm được là một niềm vui nhỏ.',
        initial: 'HS'
    },
    {
        image: '/assets/toan/family-v3.webp',
        alt: 'Minh họa phụ huynh đồng hành cùng con học Toán',
        role: 'Góc nhìn phụ huynh',
        theme: 'parent',
        quote: 'Điều tôi mong không chỉ là một đáp án đúng, mà là được nghe con tự tin giải thích cách nghĩ của mình.',
        initial: 'PH'
    },
    {
        image: '/assets/toan/educator-v3.webp',
        alt: 'Minh họa giáo viên hướng dẫn học sinh môn Toán',
        role: 'Góc nhìn giáo viên',
        theme: 'teacher',
        quote: 'Một câu hỏi vừa sức, một gợi ý đúng lúc có thể giúp học sinh tự tìm ra lời giải và muốn thử thêm lần nữa.',
        initial: 'GV'
    }
];
const extraStories = [
    {
        image: '/assets/toan/exam-v3.webp',
        alt: 'Học sinh ôn tập minh họa',
        role: 'Một buổi tự ôn tập',
        theme: 'student',
        quote: 'Hôm nay em chọn xem lại một lỗi sai, làm chậm từng bước và ghi điều cần hỏi thầy cô.',
        initial: 'HS'
    },
    {
        image: '/assets/toan/family-v3.webp',
        alt: 'Gia đình trò chuyện về việc học minh họa',
        role: 'Lắng nghe cách con nghĩ',
        theme: 'parent',
        quote: 'Gia đình dành ít phút để con kể cách giải, rồi cùng chọn một mục tiêu nhỏ cho ngày mai.',
        initial: 'PH'
    },
    {
        image: '/assets/toan/educator-v3.webp',
        alt: 'Giáo viên gợi mở bài học minh họa',
        role: 'Một câu hỏi gợi mở',
        theme: 'teacher',
        quote: 'Thầy cô gợi một câu hỏi vừa sức để học sinh thử lại và tự nói ra điều mình vừa hiểu.',
        initial: 'GV'
    }
];
function CompanionStories({ catalog = false, page = 1, onMore }) {
    const visibleStories = catalog ? [
        ...stories,
        ...extraStories
    ].slice((page - 1) * 4, page * 4) : stories;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "companion-stories",
        "aria-labelledby": "companion-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "stories-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "stories-kicker",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/CompanionStories.tsx",
                                lineNumber: 41,
                                columnNumber: 42
                            }, this),
                            " CÙNG NHAU TIẾN BỘ"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CompanionStories.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "companion-title",
                        children: "Câu chuyện đồng hành"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CompanionStories.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Những góc nhìn gần gũi, nuôi dưỡng cảm hứng học Toán."
                    }, void 0, false, {
                        fileName: "[project]/src/components/CompanionStories.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "stories-demo",
                        children: "Nội dung minh họa, chưa phải lời chứng thực"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CompanionStories.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CompanionStories.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stories-grid",
                id: "home-stories-list",
                children: visibleStories.map((story)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: `story-card story-${story.theme}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "story-image",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: story.image,
                                        alt: story.alt
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CompanionStories.tsx",
                                        lineNumber: 49,
                                        columnNumber: 42
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tình huống minh họa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CompanionStories.tsx",
                                        lineNumber: 49,
                                        columnNumber: 82
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CompanionStories.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "story-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                        className: "story-quote-icon",
                                        size: 22,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CompanionStories.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "story-quote",
                                        children: [
                                            "“",
                                            story.quote,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CompanionStories.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "story-stars",
                                        "aria-hidden": "true",
                                        children: [
                                            0,
                                            1,
                                            2,
                                            3,
                                            4
                                        ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                size: 14
                                            }, n, false, {
                                                fileName: "[project]/src/components/CompanionStories.tsx",
                                                lineNumber: 53,
                                                columnNumber: 85
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CompanionStories.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "story-person",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "story-avatar",
                                                "aria-hidden": "true",
                                                children: story.initial
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CompanionStories.tsx",
                                                lineNumber: 54,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: story.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CompanionStories.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 122
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Nhân vật minh họa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CompanionStories.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 143
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CompanionStories.tsx",
                                                lineNumber: 54,
                                                columnNumber: 117
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CompanionStories.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CompanionStories.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, story.role, true, {
                        fileName: "[project]/src/components/CompanionStories.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/CompanionStories.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            !catalog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-list-actions",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button soft",
                    onClick: onMore,
                    children: "Xem thêm câu chuyện đồng hành"
                }, void 0, false, {
                    fileName: "[project]/src/components/CompanionStories.tsx",
                    lineNumber: 59,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CompanionStories.tsx",
                lineNumber: 59,
                columnNumber: 18
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stories-together",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "together-art",
                        src: "/assets/toan/together-full-v7.png",
                        alt: "Minh họa cô giáo và hai học sinh cùng học Toán dưới sân trường"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CompanionStories.tsx",
                        lineNumber: 60,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Mỗi bước tiến đều có người đồng hành"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CompanionStories.tsx",
                                lineNumber: 60,
                                columnNumber: 186
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Học sinh chủ động · Gia đình thấu hiểu · Thầy cô dẫn dắt"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CompanionStories.tsx",
                                lineNumber: 60,
                                columnNumber: 239
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CompanionStories.tsx",
                        lineNumber: 60,
                        columnNumber: 181
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CompanionStories.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CompanionStories.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = CompanionStories;
var _c;
__turbopack_context__.k.register(_c, "CompanionStories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContinuousTicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContinuousTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ContinuousTicker({ children, paused }) {
    _s();
    const first = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContinuousTicker.useEffect": ()=>{
            const el = first.current;
            if (!el) return;
            const measure = {
                "ContinuousTicker.useEffect.measure": ()=>setSeconds(el.getBoundingClientRect().width / 20)
            }["ContinuousTicker.useEffect.measure"];
            const observer = new ResizeObserver(measure);
            observer.observe(el);
            measure();
            return ({
                "ContinuousTicker.useEffect": ()=>observer.disconnect()
            })["ContinuousTicker.useEffect"];
        }
    }["ContinuousTicker.useEffect"], [
        children
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `ticker continuous-ticker${paused ? ' paused' : ''}`,
        style: {
            '--ticker-duration': `${seconds}s`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: first,
                className: "ticker-copy",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ContinuousTicker.tsx",
                lineNumber: 6,
                columnNumber: 134
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ticker-copy ticker-duplicate",
                "aria-hidden": "true",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ContinuousTicker.tsx",
                lineNumber: 6,
                columnNumber: 193
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContinuousTicker.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
_s(ContinuousTicker, "+nKKHrYD8Aw1ESLQxyplPyjLevw=");
_c = ContinuousTicker;
var _c;
__turbopack_context__.k.register(_c, "ContinuousTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DetailPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search-x.js [app-client] (ecmascript) <export default as SearchX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/details.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CatalogMetadata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CatalogMetadata.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function DetailPage({ route, grade, onBack, onNavigate }) {
    _s();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDetailContent"])(route.kind, route.id, grade);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailPage.useEffect": ()=>{
            titleRef.current?.focus({
                preventScroll: true
            });
        }
    }["DetailPage.useEffect"], [
        route.kind,
        route.id,
        grade
    ]);
    if (!content) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "detail-page detail-not-found",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchX$3e$__["SearchX"], {
                size: 42,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/DetailPage.tsx",
                lineNumber: 11,
                columnNumber: 71
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "eyebrow",
                children: "NỘI DUNG KHÔNG KHẢ DỤNG"
            }, void 0, false, {
                fileName: "[project]/src/components/DetailPage.tsx",
                lineNumber: 11,
                columnNumber: 110
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                ref: titleRef,
                tabIndex: -1,
                children: "Không tìm thấy nội dung"
            }, void 0, false, {
                fileName: "[project]/src/components/DetailPage.tsx",
                lineNumber: 11,
                columnNumber: 166
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Đường dẫn này không khớp với một nội dung hiện có hoặc lớp đang chọn. Hãy quay lại danh sách để chọn lại."
            }, void 0, false, {
                fileName: "[project]/src/components/DetailPage.tsx",
                lineNumber: 11,
                columnNumber: 227
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button soft",
                        onClick: onBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 11,
                                columnNumber: 420
                            }, this),
                            "Quay lại ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sourceLabels"][route.source]?.toLowerCase() ?? 'trang chủ'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 11,
                        columnNumber: 371
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button primary",
                        onClick: ()=>onNavigate('roadmaps'),
                        children: [
                            "Xem lộ trình",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 11,
                                columnNumber: 600
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 11,
                        columnNumber: 516
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailPage.tsx",
                lineNumber: 11,
                columnNumber: 339
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DetailPage.tsx",
        lineNumber: 11,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `detail-page detail-${route.kind}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "detail-breadcrumb",
                "aria-label": "Đường dẫn nội dung",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate('home'),
                        children: "Trang chủ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 13,
                        columnNumber: 70
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 13,
                        columnNumber: 129
                    }, this),
                    route.source !== 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sourceLabels"][route.source]
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 13,
                                columnNumber: 188
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 13,
                                columnNumber: 250
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 13,
                        columnNumber: 186
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-current": "page",
                        children: content.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 13,
                        columnNumber: 287
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailPage.tsx",
                lineNumber: 13,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 14,
                                columnNumber: 41
                            }, this),
                            content.context
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 14,
                        columnNumber: 35
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button soft",
                        onClick: onBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 14,
                                columnNumber: 134
                            }, this),
                            "Quay lại ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sourceLabels"][route.source]?.toLowerCase() ?? 'trang chủ'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 14,
                        columnNumber: 85
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailPage.tsx",
                lineNumber: 14,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "detail-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-hero-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: content.eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 15,
                                columnNumber: 69
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                ref: titleRef,
                                tabIndex: -1,
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 15,
                                columnNumber: 119
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: content.summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 15,
                                columnNumber: 172
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "detail-state",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 15,
                                        columnNumber: 227
                                    }, this),
                                    "Bản xem trước · Chưa phát hành"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 15,
                                columnNumber: 196
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 15,
                        columnNumber: 35
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "detail-hero-art",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: content.image,
                                alt: content.imageAlt
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 15,
                                columnNumber: 332
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                children: route.kind === 'teachers' ? 'Ảnh minh họa, không phải chân dung thật' : 'Hình minh họa cho nội dung học tập'
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 15,
                                columnNumber: 381
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 15,
                        columnNumber: 296
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailPage.tsx",
                lineNumber: 15,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-notice",
                role: "note",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 16,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: content.notice
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 16,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailPage.tsx",
                lineNumber: 16,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-content",
                        children: [
                            content.steps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "detail-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "detail-section-heading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                lineNumber: 18,
                                                columnNumber: 96
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: content.stepTitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                lineNumber: 18,
                                                columnNumber: 117
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 18,
                                        columnNumber: 56
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "detail-section-intro",
                                        children: "Khung tham khảo để hình dung nội dung, không phải danh sách bài học đã phát hành."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 18,
                                        columnNumber: 151
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "detail-timeline",
                                        children: content.steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "detail-step-number",
                                                        "aria-hidden": "true",
                                                        children: String(i + 1).padStart(2, '0')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailPage.tsx",
                                                        lineNumber: 18,
                                                        columnNumber: 348
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: step
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                                lineNumber: 18,
                                                                columnNumber: 445
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    'Làm rõ kiến thức và điều cần tìm hiểu trước khi thực hành.',
                                                                    'Phân tích cách làm, thử vận dụng và tự giải thích từng bước.',
                                                                    'Nhìn lại điều đã hiểu, ghi câu hỏi và chọn phần cần ôn tiếp.'
                                                                ][i % 3]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                                lineNumber: 18,
                                                                columnNumber: 460
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailPage.tsx",
                                                        lineNumber: 18,
                                                        columnNumber: 440
                                                    }, this)
                                                ]
                                            }, step, true, {
                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                lineNumber: 18,
                                                columnNumber: 333
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 18,
                                        columnNumber: 272
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 18,
                                columnNumber: 20
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "detail-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: route.kind === 'teachers' ? 'Hồ sơ và thông tin công bố' : 'Thông tin cần biết'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 19,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "detail-information-grid",
                                        children: content.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "detail-info-block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: section.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailPage.tsx",
                                                        lineNumber: 19,
                                                        columnNumber: 255
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: section.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailPage.tsx",
                                                        lineNumber: 19,
                                                        columnNumber: 279
                                                    }, this)
                                                ]
                                            }, section.title, true, {
                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                lineNumber: 19,
                                                columnNumber: 196
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 19,
                                        columnNumber: 124
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 19,
                                columnNumber: 4
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 17,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "detail-sidebar",
                        "aria-label": "Thông tin bổ sung",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "detail-summary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "TRƯỚC KHI BẮT ĐẦU"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 20,
                                        columnNumber: 110
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: content.catalogIndex !== undefined ? 'Thông tin tổ chức mẫu' : 'Trạng thái nội dung'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 20,
                                        columnNumber: 160
                                    }, this),
                                    content.catalogIndex !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CatalogMetadata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        tab: route.kind,
                                        index: content.catalogIndex
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 20,
                                        columnNumber: 283
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: "Phạm vi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailPage.tsx",
                                                        lineNumber: 20,
                                                        columnNumber: 357
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: content.context
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailPage.tsx",
                                                        lineNumber: 20,
                                                        columnNumber: 373
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                lineNumber: 20,
                                                columnNumber: 352
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: "Học liệu và dịch vụ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailPage.tsx",
                                                        lineNumber: 20,
                                                        columnNumber: 410
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: "Chưa phát hành"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailPage.tsx",
                                                        lineNumber: 20,
                                                        columnNumber: 438
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                lineNumber: 20,
                                                columnNumber: 405
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        children: "Tài khoản và dữ liệu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailPage.tsx",
                                                        lineNumber: 20,
                                                        columnNumber: 472
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        children: "Chưa kết nối hệ thống thật"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailPage.tsx",
                                                        lineNumber: 20,
                                                        columnNumber: 501
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                lineNumber: 20,
                                                columnNumber: 467
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 20,
                                        columnNumber: 348
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "detail-sidebar-note",
                                        children: "Không có đăng ký, tải tệp, làm bài, thanh toán hoặc gửi yêu cầu thật từ trang chi tiết."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 20,
                                        columnNumber: 548
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 20,
                                columnNumber: 74
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "detail-next",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Tiếp tục khám phá"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 20,
                                        columnNumber: 717
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Tham khảo các nội dung khác trong bản xem trước."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 20,
                                        columnNumber: 743
                                    }, this),
                                    content.externalUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "button primary",
                                        href: content.externalUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Khám phá Tiếng Anh, mở website ngoài trong tab mới",
                                        children: [
                                            "Khám phá Tiếng Anh",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                lineNumber: 20,
                                                columnNumber: 1001
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 20,
                                        columnNumber: 820
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button primary",
                                        onClick: ()=>onNavigate(content.destination),
                                        children: [
                                            content.destinationLabel,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                lineNumber: 20,
                                                columnNumber: 1138
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 20,
                                        columnNumber: 1031
                                    }, this),
                                    content.destination !== 'contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "detail-text-link",
                                        onClick: ()=>onNavigate('contact'),
                                        children: [
                                            "Thông tin liên hệ và hỗ trợ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailPage.tsx",
                                                lineNumber: 20,
                                                columnNumber: 1304
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailPage.tsx",
                                        lineNumber: 20,
                                        columnNumber: 1204
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailPage.tsx",
                                lineNumber: 20,
                                columnNumber: 684
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailPage.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailPage.tsx",
                lineNumber: 17,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DetailPage.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_s(DetailPage, "5158MNnKrLHubdR68HBro4P03NI=");
_c = DetailPage;
var _c;
__turbopack_context__.k.register(_c, "DetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DiscoveryPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiscoveryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/roadmaps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CompanionStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CompanionStories.tsx [app-client] (ecmascript)");
;
;
;
;
function DiscoveryPage({ tab, grade, page, onGrade, onPage, onHome, onRoadmap }) {
    const isRoadmap = tab === 'roadmaps';
    const current = page === 2 ? 2 : 1;
    const all = [
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoadmaps"])(grade),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtraRoadmaps"])(grade)
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "member-page discovery-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "member-heading member-heading-compact",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: isRoadmap ? `Lộ trình học Toán lớp ${grade}` : 'Câu chuyện đồng hành'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                        lineNumber: 4,
                        columnNumber: 450
                    }, this),
                    isRoadmap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "member-toolbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "discovery-grade",
                                children: "Lớp đang chọn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                lineNumber: 4,
                                columnNumber: 570
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "discovery-grade",
                                value: grade,
                                onChange: (e)=>onGrade(Number(e.target.value)),
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeOptions"].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: g,
                                        children: [
                                            "Lớp ",
                                            g
                                        ]
                                    }, g, true, {
                                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                                        lineNumber: 4,
                                        columnNumber: 734
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                lineNumber: 4,
                                columnNumber: 624
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                        lineNumber: 4,
                        columnNumber: 538
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button soft",
                        onClick: onHome,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                lineNumber: 4,
                                columnNumber: 843
                            }, this),
                            "Về trang chủ"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                        lineNumber: 4,
                        columnNumber: 794
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiscoveryPage.tsx",
                lineNumber: 4,
                columnNumber: 392
            }, this),
            isRoadmap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sidebar-note",
                        children: "6 lộ trình mẫu, chờ giáo viên thẩm định trước khi phát hành."
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                        lineNumber: 4,
                        columnNumber: 908
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-card-grid",
                        children: all.slice((current - 1) * 4, current * 4).map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "section-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-card-heading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sample-badge",
                                                children: "LỘ TRÌNH MINH HỌA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1165
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: r.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1220
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: r.summary
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1238
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1127
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-card-image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: [
                                                '/assets/toan/foundation-v6.png',
                                                '/assets/toan/geometry-v3.webp',
                                                '/assets/toan/exam-v3.webp'
                                            ][i % 3],
                                            alt: "Minh họa lộ trình học Toán"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscoveryPage.tsx",
                                            lineNumber: 4,
                                            columnNumber: 1298
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1262
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-card-body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                children: r.steps.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: s
                                                    }, s, false, {
                                                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 1504
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1484
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button primary",
                                                onClick: ()=>onRoadmap(r),
                                                children: [
                                                    "Xem chi tiết",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                                                        lineNumber: 4,
                                                        columnNumber: 1605
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1531
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1449
                                    }, this)
                                ]
                            }, r.id, true, {
                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                lineNumber: 4,
                                columnNumber: 1082
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                        lineNumber: 4,
                        columnNumber: 1000
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiscoveryPage.tsx",
                lineNumber: 4,
                columnNumber: 906
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CompanionStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                catalog: true,
                page: current
            }, void 0, false, {
                fileName: "[project]/src/components/DiscoveryPage.tsx",
                lineNumber: 4,
                columnNumber: 1665
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "catalog-pagination",
                "aria-label": `Phân trang ${isRoadmap ? 'lộ trình' : 'câu chuyện'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Trang ",
                            current,
                            "/2 · 4 mục mỗi trang · Dữ liệu mẫu"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                        lineNumber: 4,
                        columnNumber: 1807
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onPage(1),
                                disabled: current === 1,
                                "aria-label": "Trang trước",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                lineNumber: 4,
                                columnNumber: 1874
                            }, this),
                            [
                                1,
                                2
                            ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPage(n),
                                    "aria-current": current === n ? 'page' : undefined,
                                    "aria-label": `Trang ${n}`,
                                    children: n
                                }, n, false, {
                                    fileName: "[project]/src/components/DiscoveryPage.tsx",
                                    lineNumber: 4,
                                    columnNumber: 1978
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onPage(2),
                                disabled: current === 2,
                                "aria-label": "Trang sau",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscoveryPage.tsx",
                                lineNumber: 4,
                                columnNumber: 2102
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiscoveryPage.tsx",
                        lineNumber: 4,
                        columnNumber: 1869
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiscoveryPage.tsx",
                lineNumber: 4,
                columnNumber: 1708
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DiscoveryPage.tsx",
        lineNumber: 4,
        columnNumber: 348
    }, this);
}
_c = DiscoveryPage;
var _c;
__turbopack_context__.k.register(_c, "DiscoveryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DetailPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/details.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InformationPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InformationPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContinuousTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContinuousTicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DiscoveryPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DiscoveryPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CompanionStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CompanionStories.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MemberPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MemberPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AuthPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AuthPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RightSidebarPanels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RightSidebarPanels.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeoHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SeoHead.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shapes.js [app-client] (ecmascript) <export default as Shapes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LibraryBig$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/library-big.js [app-client] (ecmascript) <export default as LibraryBig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as CircleHelp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/roadmaps.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const nav = [
    [
        'Trang chủ',
        'home'
    ],
    [
        'Lớp học Toán',
        'classes'
    ],
    [
        'Tài liệu',
        'materials'
    ],
    [
        'Luyện đề',
        'practice'
    ],
    [
        'Giáo viên đồng hành',
        'teachers'
    ],
    [
        'Bảng vàng thành tích',
        'honors'
    ]
];
const faqs = [
    [
        'Con nên bắt đầu từ lộ trình nào?',
        'Hãy chọn lớp con đang học, xem mục tiêu và các bước của từng lộ trình. Có thể bắt đầu từ phần củng cố nền tảng trước khi luyện các nội dung nâng cao.'
    ],
    [
        'Lộ trình có thay đổi theo lớp học không?',
        'Có. Khi chọn một lớp ở bên trái, tiêu đề, các thẻ lộ trình và nội dung chi tiết sẽ cùng thay đổi theo lớp được chọn.'
    ],
    [
        'Phụ huynh có thể theo dõi việc học của con không?',
        'Không gian phụ huynh được thiết kế để theo dõi lộ trình, lịch học và phản hồi của giáo viên sau khi tài khoản được liên kết hợp lệ. Bản này đang là giao diện minh họa.'
    ],
    [
        'Tôi có thể sử dụng tài liệu và làm bài ngay không?',
        'Đây là bản xem trước giao diện. Học liệu, tài khoản và chức năng chấm bài cần kết nối hệ thống thật trước khi đưa vào sử dụng.'
    ]
];
function Brand() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "brand",
        href: "/",
        "aria-label": "Toán Ôn Thi 360, trang chủ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "brand-line",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                        size: 42,
                        strokeWidth: 1.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 17,
                        columnNumber: 124
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "brand-wordmark",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-subject",
                                children: "TOÁN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 17,
                                columnNumber: 201
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    "ÔNTHI",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "360"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 17,
                                        columnNumber: 252
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 17,
                                columnNumber: 244
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 17,
                        columnNumber: 168
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 17,
                columnNumber: 95
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "TT Bồi dưỡng HSG Nguyễn Viết Xuân"
            }, void 0, false, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 17,
                columnNumber: 286
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Home.tsx",
        lineNumber: 17,
        columnNumber: 25
    }, this);
}
_c = Brand;
function Home() {
    _s();
    const [grade, setGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(9), [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home'), [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1), [region, setRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Toàn quốc'), [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        kind: '',
        id: '',
        source: 'home',
        sourcePage: 1
    });
    const roadmaps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoadmaps"])(grade);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const sync = {
                "Home.useEffect.sync": ()=>{
                    const params = new URLSearchParams(window.location.search);
                    setGrade((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseGrade"])(params.get('lop')));
                    setPage(params.get('page') === '2' ? 2 : 1);
                    setDetail((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readDetailRoute"])(params));
                    const view = params.get('muc') ?? 'home';
                    setTab(nav.some({
                        "Home.useEffect.sync": (n)=>n[1] === view
                    }["Home.useEffect.sync"]) || [
                        'login',
                        'register',
                        'roadmaps',
                        'stories',
                        'detail'
                    ].includes(view) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InformationPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["informationPages"].some({
                        "Home.useEffect.sync": (p)=>p[0] === view
                    }["Home.useEffect.sync"]) ? view : 'not-found');
                    setMobile(false);
                }
            }["Home.useEffect.sync"];
            sync();
            window.addEventListener('popstate', sync);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('popstate', sync)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    function update(nextGrade, nextTab = tab, nextPage = 1) {
        setPage(nextPage);
        setGrade(nextGrade);
        setTab(nextTab);
        setMobile(false);
        setDetail({
            kind: '',
            id: '',
            source: 'home',
            sourcePage: 1
        });
        const url = new URL(window.location.href);
        url.search = '';
        url.hash = '';
        url.searchParams.set('lop', String(nextGrade));
        if (nextPage > 1) url.searchParams.set('page', String(nextPage));
        if (nextTab !== 'home') url.searchParams.set('muc', nextTab);
        window.history.pushState({
            ...window.history.state,
            detailReturnQuery: null
        }, '', url);
        if (nextTab !== tab || nextPage !== page) window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }
    function openDetail(kind, id) {
        const next = {
            kind,
            id,
            source: tab,
            sourcePage: page
        };
        setDetail(next);
        setTab('detail');
        setMobile(false);
        const url = new URL(window.location.href);
        url.search = '';
        url.hash = '';
        url.searchParams.set('muc', 'detail');
        url.searchParams.set('loai', kind);
        url.searchParams.set('id', id);
        url.searchParams.set('lop', String(grade));
        url.searchParams.set('tu', tab);
        if (page > 1) url.searchParams.set('trang', String(page));
        window.history.pushState({
            ...window.history.state,
            detailReturnQuery: url.search
        }, '', url);
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }
    function backFromDetail() {
        if (window.history.state?.detailReturnQuery === window.location.search) window.history.back();
        else update(grade, detail.source, detail.sourcePage);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeoHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tab: tab,
                grade: grade,
                page: page,
                detail: detail
            }, void 0, false, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 25,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "site-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Brand, {}, void 0, false, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 25,
                            columnNumber: 135
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "mobile-toggle icon-button",
                            onClick: ()=>setMobile(!mobile),
                            "aria-expanded": mobile,
                            "aria-label": "Mở menu",
                            children: mobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 25,
                                columnNumber: 274
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 25,
                                columnNumber: 279
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 25,
                            columnNumber: 143
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: mobile ? 'main-nav open' : 'main-nav',
                            "aria-label": "Điều hướng chính",
                            children: nav.map(([label, key], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: tab === key ? 'active' : '',
                                    onClick: ()=>update(grade, key),
                                    children: [
                                        i === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 25,
                                            columnNumber: 494
                                        }, this) : i === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 25,
                                            columnNumber: 521
                                        }, this) : i === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LibraryBig$3e$__["LibraryBig"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 25,
                                            columnNumber: 549
                                        }, this) : i === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 25,
                                            columnNumber: 579
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: key === 'honors' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 25,
                                                columnNumber: 619
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 25,
                                                columnNumber: 639
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 25,
                                            columnNumber: 601
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 25,
                                            columnNumber: 662
                                        }, this)
                                    ]
                                }, key, true, {
                                    fileName: "[project]/src/components/Home.tsx",
                                    lineNumber: 25,
                                    columnNumber: 403
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 25,
                            columnNumber: 296
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "button primary login",
                            onClick: ()=>update(grade, 'login'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Home.tsx",
                                    lineNumber: 25,
                                    columnNumber: 776
                                }, this),
                                " Đăng nhập"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 25,
                            columnNumber: 699
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Home.tsx",
                    lineNumber: 25,
                    columnNumber: 105
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 25,
                columnNumber: 73
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container",
                children: [
                    tab === 'home' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "notice",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 26,
                                        columnNumber: 70
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Chào mừng đến Toán Ôn Thi 360"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 26,
                                        columnNumber: 87
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Học có lộ trình · Hiểu sâu kiến thức · Tự tin tiến bộ mỗi ngày"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 26,
                                        columnNumber: 133
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#roadmaps",
                                        children: [
                                            "Khám phá ngay ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 26,
                                                columnNumber: 242
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 26,
                                        columnNumber: 208
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 26,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "region-bar",
                                "aria-label": "Thông tin theo khu vực",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "region-label",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 27,
                                                columnNumber: 100
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "region",
                                                children: "Khu vực"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 27,
                                                columnNumber: 119
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "region",
                                                value: region,
                                                onChange: (e)=>setRegion(e.target.value),
                                                children: [
                                                    'Toàn quốc',
                                                    'Thái Bình',
                                                    'Hưng Yên',
                                                    'Hà Nội'
                                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: r
                                                    }, r, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 27,
                                                        columnNumber: 287
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 27,
                                                columnNumber: 158
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 27,
                                        columnNumber: 70
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ticker-window",
                                        tabIndex: 0,
                                        "aria-label": "Nội dung thông tin khu vực",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContinuousTicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            paused: paused,
                                            children: region === 'Thái Bình' ? 'Quảng cáo minh họa tại Thái Bình: Trung tâm mẫu A giới thiệu lớp Toán nhóm nhỏ, luyện kiến thức nền và cách trình bày lời giải. Đây là ví dụ giả định, không phải đơn vị hoặc lịch học thật.' : region === 'Hà Nội' ? 'Quảng cáo minh họa tại Hà Nội: Đơn vị mẫu B giới thiệu chuyên đề tư duy Toán, cùng học sinh khám phá nhiều cách giải. Đây là ví dụ giả định, chưa có thông tin liên hệ được xác minh.' : region === 'Hưng Yên' ? 'Minh họa trạng thái tại Hưng Yên: chưa có thông tin đơn vị phù hợp. Chọn khu vực khác để xem ví dụ; không tự thay bằng quảng cáo của địa phương khác.' : 'Thông tin khu vực · Nội dung minh họa: chọn Thái Bình hoặc Hà Nội để xem ví dụ giới thiệu lớp học, chuyên đề Toán của đơn vị mẫu. Chưa kết nối quảng cáo thật; không tự định vị.'
                                        }, region, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 27,
                                            columnNumber: 416
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 27,
                                        columnNumber: 332
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "icon-button",
                                        onClick: ()=>setPaused(!paused),
                                        "aria-label": paused ? 'Chạy thông tin' : 'Tạm dừng thông tin',
                                        children: paused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 27,
                                            columnNumber: 1385
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 27,
                                            columnNumber: 1403
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 27,
                                        columnNumber: 1254
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 27,
                                columnNumber: 2
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "main-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                        className: "left-sidebar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "panel grade-panel",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 28,
                                                                columnNumber: 104
                                                            }, this),
                                                            " Chọn lớp học"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 100
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grade-grid",
                                                        "aria-label": "Chọn lớp để xem lộ trình",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeOptions"].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>update(g),
                                                                "aria-pressed": g === grade,
                                                                className: g === grade ? 'selected' : '',
                                                                children: [
                                                                    "Lớp ",
                                                                    g,
                                                                    g === grade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 28,
                                                                        columnNumber: 339
                                                                    }, this)
                                                                ]
                                                            }, g, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 28,
                                                                columnNumber: 219
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 132
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "grade-illustration",
                                                        src: "/assets/toan/foundation-v6.png",
                                                        alt: "Học sinh cùng sách vở"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 375
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "side-note",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 28,
                                                                columnNumber: 504
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Một mục tiêu rõ ràng.",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 28,
                                                                        columnNumber: 552
                                                                    }, this),
                                                                    "Một hành trình phù hợp."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 28,
                                                                columnNumber: 525
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 477
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 28,
                                                columnNumber: 61
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "panel topic-panel",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__["Shapes"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 28,
                                                                columnNumber: 646
                                                            }, this),
                                                            " Chuyên đề Toán"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 642
                                                    }, this),
                                                    [
                                                        'Số và Đại số',
                                                        'Hình học và Đo lường',
                                                        'Thống kê và Xác suất',
                                                        'Toán trong cuộc sống'
                                                    ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openDetail('topic', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topicIds"][i]),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `topic-dot t${i}`,
                                                                    children: [
                                                                        'π',
                                                                        '△',
                                                                        '%',
                                                                        '∞'
                                                                    ][i]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 28,
                                                                    columnNumber: 835
                                                                }, this),
                                                                t,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 28,
                                                                    columnNumber: 903
                                                                }, this)
                                                            ]
                                                        }, t, true, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 28,
                                                            columnNumber: 773
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 28,
                                                columnNumber: 603
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "side-art",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/assets/toan/books-detail.webp",
                                                    alt: "Sách và dụng cụ học Toán"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Home.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 975
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 28,
                                                columnNumber: 949
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "panel teacher-directory",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 28,
                                                                columnNumber: 1104
                                                            }, this),
                                                            " Giáo viên nổi bật"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 1100
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sidebar-note",
                                                        children: "Đang chuẩn bị hồ sơ giáo viên."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 1145
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "teacher-list",
                                                        children: [
                                                            'Toán tiểu học',
                                                            'Toán THCS',
                                                            'Toán THPT'
                                                        ].map((stage, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "teacher-preview",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `teacher-avatar avatar-${i}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                                            size: 20
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 28,
                                                                            columnNumber: 1387
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 28,
                                                                        columnNumber: 1340
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: stage
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Home.tsx",
                                                                                lineNumber: 28,
                                                                                columnNumber: 1426
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                children: "Hồ sơ chưa công bố"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Home.tsx",
                                                                                lineNumber: 28,
                                                                                columnNumber: 1450
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 28,
                                                                        columnNumber: 1420
                                                                    }, this)
                                                                ]
                                                            }, stage, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 28,
                                                                columnNumber: 1295
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 1207
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button soft full",
                                                        onClick: ()=>update(grade, 'teachers'),
                                                        children: [
                                                            "Xem giáo viên ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 28,
                                                                columnNumber: 1594
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 1504
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "demo-note",
                                                        children: "Vị trí minh họa, chưa phải hồ sơ thực."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 1626
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 28,
                                                columnNumber: 1055
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RightSidebarPanels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeacherInspiration"], {}, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 28,
                                                columnNumber: 1703
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 28,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "main-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "hero",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "hero-art",
                                                        src: "/assets/toan/hero-v4.webp",
                                                        alt: "Học sinh, giáo viên cùng khám phá Toán học"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 58
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hero-shade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 166
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hero-copy",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pill",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 29,
                                                                        columnNumber: 244
                                                                    }, this),
                                                                    " CÙNG EM MỖI NGÀY"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 29,
                                                                columnNumber: 222
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                children: [
                                                                    "Học Toán vững vàng,",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 29,
                                                                        columnNumber: 311
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                        children: "tự tin chinh phục."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 29,
                                                                        columnNumber: 316
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 29,
                                                                columnNumber: 288
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Một lộ trình phù hợp. Từng bước tiến bộ.",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 29,
                                                                        columnNumber: 391
                                                                    }, this),
                                                                    "Cùng thầy cô và gia đình nuôi dưỡng niềm vui học Toán."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 29,
                                                                columnNumber: 348
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                className: "button yellow",
                                                                href: "#roadmaps",
                                                                children: [
                                                                    "Tìm lộ trình của em ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        size: 17
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 29,
                                                                        columnNumber: 520
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 29,
                                                                columnNumber: 454
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "hero-benefits",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                                                                fileName: "[project]/src/components/Home.tsx",
                                                                                lineNumber: 29,
                                                                                columnNumber: 584
                                                                            }, this),
                                                                            " Dễ hiểu"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 29,
                                                                        columnNumber: 578
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                                                                fileName: "[project]/src/components/Home.tsx",
                                                                                lineNumber: 29,
                                                                                columnNumber: 620
                                                                            }, this),
                                                                            " Đúng mục tiêu"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 29,
                                                                        columnNumber: 614
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                                                                fileName: "[project]/src/components/Home.tsx",
                                                                                lineNumber: 29,
                                                                                columnNumber: 662
                                                                            }, this),
                                                                            " Có người đồng hành"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 29,
                                                                        columnNumber: 656
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 29,
                                                                columnNumber: 547
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 195
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 29,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                id: "roadmaps",
                                                className: "roadmap-section",
                                                "aria-live": "polite",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "section-heading",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "eyebrow",
                                                                        children: "HỌC CÓ ĐỊNH HƯỚNG"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 30,
                                                                        columnNumber: 110
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        children: [
                                                                            "Lộ trình học Toán dành cho học sinh lớp ",
                                                                            grade
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 30,
                                                                        columnNumber: 160
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 105
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "grade-tag",
                                                                children: [
                                                                    "Lớp ",
                                                                    grade
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 222
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 72
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "section-desc",
                                                        children: "Chọn mục tiêu phù hợp để khám phá từng bước trên hành trình học tập."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 274
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "roadmap-grid",
                                                        id: "home-roadmap-list",
                                                        children: roadmaps.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                                className: `roadmap-card ${r.theme}`,
                                                                "data-testid": "roadmap-card",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "roadmap-body",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "mini-label",
                                                                            children: [
                                                                                "LỘ TRÌNH · LỚP ",
                                                                                grade
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 30,
                                                                            columnNumber: 563
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            children: r.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 30,
                                                                            columnNumber: 621
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: r.summary
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 30,
                                                                            columnNumber: 639
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "roadmap-picture",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: i === 0 ? "/assets/toan/foundation-v6.png" : i === 1 ? "/assets/toan/geometry-v3.webp" : "/assets/toan/exam-v3.webp",
                                                                                alt: "Minh họa hành trình học Toán"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Home.tsx",
                                                                                lineNumber: 30,
                                                                                columnNumber: 690
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 30,
                                                                            columnNumber: 657
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                                            children: r.steps.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: s
                                                                                }, s, false, {
                                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                                    lineNumber: 30,
                                                                                    columnNumber: 868
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 30,
                                                                            columnNumber: 848
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>openDetail('roadmap', r.id),
                                                                            children: [
                                                                                "Xem lộ trình ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                    size: 16
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                                    lineNumber: 30,
                                                                                    columnNumber: 957
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 30,
                                                                            columnNumber: 895
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 30,
                                                                    columnNumber: 533
                                                                }, this)
                                                            }, r.id, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 448
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 374
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "home-list-actions",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "button soft",
                                                            onClick: ()=>update(grade, 'roadmaps'),
                                                            children: [
                                                                "Xem thêm lộ trình lớp ",
                                                                grade,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 30,
                                                                    columnNumber: 1148
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 30,
                                                            columnNumber: 1048
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 1013
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "demo-note",
                                                        children: "Nội dung lộ trình minh họa, chờ giáo viên thẩm định trước khi phát hành."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 1186
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 30,
                                                columnNumber: 2
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "parent-banner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "banner-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 31,
                                                            columnNumber: 66
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "eyebrow",
                                                                children: "DÀNH CHO PHỤ HUYNH"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 31,
                                                                columnNumber: 85
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: "Hiểu con học gì. Cùng con tiến bộ."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 31,
                                                                columnNumber: 136
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Đồng hành đúng lúc, nuôi dưỡng sự tự tin mỗi ngày."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 31,
                                                                columnNumber: 179
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 80
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button soft",
                                                        onClick: ()=>openDetail('guide', 'companion'),
                                                        children: [
                                                            "Tìm hiểu ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 31,
                                                                columnNumber: 329
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 242
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 31,
                                                columnNumber: 2
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "audience-grid",
                                                children: [
                                                    [
                                                        'toan/foundation-v6.png',
                                                        'Học sinh',
                                                        'Chủ động khám phá'
                                                    ],
                                                    [
                                                        'toan/family-v3.webp',
                                                        'Phụ huynh',
                                                        'An tâm đồng hành'
                                                    ],
                                                    [
                                                        'toan/educator-v3.webp',
                                                        'Giáo viên',
                                                        'Tận tâm dẫn dắt'
                                                    ]
                                                ].map(([img, label, desc])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: `/assets/${img}`,
                                                                alt: `Minh họa ${label.toLowerCase()}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 32,
                                                                columnNumber: 250
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 32,
                                                                        columnNumber: 324
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 32,
                                                                        columnNumber: 348
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 32,
                                                                columnNumber: 319
                                                            }, this)
                                                        ]
                                                    }, label, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 229
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 32,
                                                columnNumber: 2
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "shortcut chocon",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shortcut-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 71
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 39
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: [
                                                                    "chocon ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "· Kết nối cùng chocon"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 33,
                                                                        columnNumber: 104
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 33,
                                                                columnNumber: 93
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Hệ thống quản lý, giám sát, giáo dục con sử dụng máy tính và bảo vệ con trên môi trường mạng."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 33,
                                                                columnNumber: 143
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 88
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button soft",
                                                        onClick: ()=>openDetail('guide', 'chocon'),
                                                        children: [
                                                            "Khám phá ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 33,
                                                                columnNumber: 333
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 249
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 33,
                                                columnNumber: 2
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CompanionStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                onMore: ()=>update(grade, 'stories')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 34,
                                                columnNumber: 2
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "shortcut sat",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shortcut-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 35,
                                                            columnNumber: 68
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "eyebrow",
                                                                children: "MỞ RỘNG CƠ HỘI"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 35,
                                                                columnNumber: 89
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: "Ôn luyện Tiếng Anh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 35,
                                                                columnNumber: 136
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Mở ra cơ hội giao tiếp quốc tế và ôn thi chuyên."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 35,
                                                                columnNumber: 163
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 84
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "button soft",
                                                        href: "https://tienganh.onthi360.vn",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        "aria-label": "Khám phá Tiếng Anh, mở website ngoài trong tab mới",
                                                        children: [
                                                            "Khám phá Tiếng Anh ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 35,
                                                                columnNumber: 412
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 224
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 35,
                                                columnNumber: 2
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 29,
                                        columnNumber: 2
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                        className: "right-sidebar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "panel workspace",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "workspace-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 36,
                                                            columnNumber: 110
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 78
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: [
                                                            "Không gian học tập",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 148
                                                            }, this),
                                                            "và làm việc"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 126
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Hành trình của em, sự đồng hành của gia đình và thầy cô."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 169
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "workspace-options",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 36,
                                                                        columnNumber: 273
                                                                    }, this),
                                                                    " Lộ trình và tiến độ"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 267
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 36,
                                                                        columnNumber: 321
                                                                    }, this),
                                                                    " Lịch học và nhiệm vụ"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 315
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 36,
                                                                        columnNumber: 370
                                                                    }, this),
                                                                    " Nhận xét và kết quả"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 364
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 232
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button primary",
                                                        onClick: ()=>update(grade, 'login'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 489
                                                            }, this),
                                                            " Đăng nhập ngay"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 418
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "Dành cho học sinh · Phụ huynh · Giáo viên"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 537
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "workspace-art",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "workspace-orbit orbit-one",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 643
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "workspace-orbit orbit-two",
                                                                children: "π"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 695
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "workspace-screen",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                                                        size: 106,
                                                                        strokeWidth: 1.3
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 36,
                                                                        columnNumber: 782
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Toán 360"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 36,
                                                                        columnNumber: 821
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 747
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                className: "workspace-book",
                                                                size: 48,
                                                                strokeWidth: 1.5
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 849
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 593
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 36,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RightSidebarPanels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemStats"], {}, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 36,
                                                columnNumber: 931
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "panel achievements",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 989
                                                            }, this),
                                                            " Thành tích nổi bật"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 985
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "sidebar-note",
                                                        children: "Kết quả sẽ được cập nhật từ dữ liệu đã xác minh."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 1032
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "achievement-list",
                                                        children: [
                                                            [
                                                                'Kết quả học tập',
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
                                                            ],
                                                            [
                                                                'Mục tiêu hoàn thành',
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"]
                                                            ],
                                                            [
                                                                'Tiến bộ theo tháng',
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
                                                            ]
                                                        ].map(([label, Icon])=>{
                                                            const Symbol = Icon;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "achievement-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Symbol, {
                                                                        size: 19
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 36,
                                                                        columnNumber: 1363
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: String(label)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 36,
                                                                        columnNumber: 1382
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        "aria-label": "Chưa có dữ liệu",
                                                                        children: "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 36,
                                                                        columnNumber: 1410
                                                                    }, this)
                                                                ]
                                                            }, String(label), true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 1310
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 1112
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: "demo-note",
                                                        children: "Chưa có số liệu công bố."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 1462
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 36,
                                                columnNumber: 945
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "panel resources",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LibraryBig$3e$__["LibraryBig"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 1574
                                                            }, this),
                                                            " Tài liệu nổi bật"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 1570
                                                    }, this),
                                                    [
                                                        [
                                                            'Kiến thức trọng tâm',
                                                            `Hệ thống kiến thức Toán lớp ${grade}`
                                                        ],
                                                        [
                                                            'Phương pháp giải toán',
                                                            'Từng bước phân tích và trình bày'
                                                        ],
                                                        [
                                                            'Bài tập theo chủ đề',
                                                            'Củng cố kiến thức sau mỗi bài'
                                                        ]
                                                    ].map(([name, desc])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>update(grade, 'materials'),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "file-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 36,
                                                                        columnNumber: 1898
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 36,
                                                                    columnNumber: 1870
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 36,
                                                                            columnNumber: 1922
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                            children: desc
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Home.tsx",
                                                                            lineNumber: 36,
                                                                            columnNumber: 1945
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 36,
                                                                    columnNumber: 1916
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 36,
                                                                    columnNumber: 1973
                                                                }, this)
                                                            ]
                                                        }, name, true, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 36,
                                                            columnNumber: 1811
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button soft full",
                                                        onClick: ()=>update(grade, 'materials'),
                                                        children: [
                                                            "Khám phá tài liệu ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 2104
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 2009
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "demo-note",
                                                        children: "Danh mục minh họa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 2136
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "resource-art",
                                                        src: "/assets/toan/books-detail.webp",
                                                        alt: "Sách và dụng cụ học Toán"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 2182
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 36,
                                                columnNumber: 1533
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "panel learning-tip",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tip-heading",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "tip-icon",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 36,
                                                                    columnNumber: 2387
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 2360
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "eyebrow",
                                                                children: "MẸO HỌC MỖI NGÀY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 2415
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 2331
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: [
                                                            "Hiểu cách làm,",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 2488
                                                            }, this),
                                                            "nhớ lâu hơn."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 2470
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Thử giải thích lời giải bằng lời của mình, rồi tìm thêm một cách giải khác."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 2510
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tip-practice",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__["Shapes"], {
                                                                size: 17
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 2622
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Mỗi ngày một cách nghĩ mới"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 2641
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 2592
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 36,
                                                columnNumber: 2291
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 36,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 28,
                                columnNumber: 2
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "help-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel faq",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-heading",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "heading-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__["CircleHelp"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 123
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 93
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                children: "Câu hỏi thường gặp"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 147
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Giải đáp để hành trình bắt đầu dễ dàng hơn."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 174
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 142
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 37,
                                                columnNumber: 60
                                            }, this),
                                            faqs.map(([q, a])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            children: [
                                                                q,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Home.tsx",
                                                                    lineNumber: 37,
                                                                    columnNumber: 284
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 272
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: a
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Home.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 318
                                                        }, this)
                                                    ]
                                                }, q, true, {
                                                    fileName: "[project]/src/components/Home.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 255
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 37,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel support",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/toan/consultation-v3.webp",
                                                alt: "Tư vấn viên hỗ trợ học sinh và phụ huynh học Toán"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 37,
                                                columnNumber: 377
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "support-copy",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "eyebrow",
                                                        children: "LUÔN LẮNG NGHE, LUÔN ĐỒNG HÀNH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 509
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: "Tư vấn viên"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 572
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Cùng thầy cô tìm hướng đi phù hợp cho con."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 592
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 37,
                                                                        columnNumber: 649
                                                                    }, this),
                                                                    " Tư vấn lộ trình phù hợp"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 645
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 37,
                                                                        columnNumber: 697
                                                                    }, this),
                                                                    " Giải đáp thắc mắc học tập"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 693
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                                                        fileName: "[project]/src/components/Home.tsx",
                                                                        lineNumber: 37,
                                                                        columnNumber: 747
                                                                    }, this),
                                                                    " Hỗ trợ học sinh và phụ huynh"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 743
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 641
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "button primary",
                                                        onClick: ()=>openDetail('guide', 'consultation'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                                                size: 17
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 885
                                                            }, this),
                                                            " Nhận tư vấn"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 801
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 37,
                                                columnNumber: 479
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 37,
                                        columnNumber: 346
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 37,
                                columnNumber: 2
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 26,
                        columnNumber: 44
                    }, this) : tab === 'detail' || tab === 'not-found' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        route: tab === 'not-found' ? {
                            kind: '',
                            id: '',
                            source: 'home',
                            sourcePage: 1
                        } : detail,
                        grade: grade,
                        onBack: backFromDetail,
                        onNavigate: (t)=>update(grade, t)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 38,
                        columnNumber: 40
                    }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InformationPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["informationPages"].some((p)=>p[0] === tab) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InformationPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tab: tab,
                        onNavigate: (t)=>update(grade, t),
                        onHome: ()=>update(grade, 'home')
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 38,
                        columnNumber: 237
                    }, this) : tab === 'roadmaps' || tab === 'stories' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DiscoveryPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tab: tab,
                        grade: grade,
                        page: page,
                        onPage: (p)=>update(grade, tab, p),
                        onGrade: (g)=>update(g),
                        onHome: ()=>update(grade, 'home'),
                        onRoadmap: (r)=>openDetail('roadmap', r.id)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 38,
                        columnNumber: 366
                    }, this) : tab === 'login' || tab === 'register' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AuthPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        mode: tab,
                        onNavigate: (mode)=>update(grade, mode),
                        onHome: ()=>update(grade, 'home')
                    }, tab, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 38,
                        columnNumber: 582
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MemberPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        page: page,
                        onPage: (p)=>update(grade, tab, p),
                        tab: tab,
                        title: nav.find((n)=>n[1] === tab)?.[0] ?? 'Nội dung',
                        grade: grade,
                        onPreview: openDetail,
                        onGrade: (g)=>update(g),
                        onHome: ()=>update(grade, 'home')
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 38,
                        columnNumber: 687
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "preview-label",
                        children: "Bản xem trước giao diện · Học liệu và thông tin dịch vụ chưa được phát hành"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 39,
                        columnNumber: 2
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 26,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "site-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container footer-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Brand, {}, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 40,
                                        columnNumber: 78
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Lộ trình rõ ràng – Vững vàng tri thức.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 40,
                                                columnNumber: 127
                                            }, this),
                                            "Cùng học sinh, gia đình và thầy cô",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 40,
                                                columnNumber: 166
                                            }, this),
                                            "xây dựng niềm vui học Toán mỗi ngày."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 40,
                                        columnNumber: 86
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 40,
                                columnNumber: 73
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Học tập"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 40,
                                        columnNumber: 222
                                    }, this),
                                    nav.slice(1, 4).map(([label, key])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                update(grade, key);
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            },
                                            children: label
                                        }, key, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 40,
                                            columnNumber: 273
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 40,
                                columnNumber: 217
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Đồng hành"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 40,
                                        columnNumber: 397
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "footer-audience-list",
                                        children: [
                                            'Học sinh',
                                            'Phụ huynh',
                                            'Giáo viên',
                                            'Đơn vị giáo dục'
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 40,
                                                columnNumber: 515
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 40,
                                        columnNumber: 415
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 40,
                                columnNumber: 392
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Thông tin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 40,
                                        columnNumber: 553
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InformationPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["informationPages"].map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>update(grade, key),
                                            children: label
                                        }, key, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 40,
                                            columnNumber: 608
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 40,
                                columnNumber: 548
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 40,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container footer-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "© 2026 Toán Ôn Thi 360"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 40,
                                columnNumber: 729
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Cty TNHH GD&ĐT Nguyễn Viết Xuân"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 40,
                                columnNumber: 764
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 40,
                        columnNumber: 688
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "footer-scene",
                        src: "/assets/toan/footer-v4.webp",
                        alt: "",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 40,
                        columnNumber: 818
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 40,
                columnNumber: 2
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Home.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(Home, "60Ckc+S+dgmCX9jefGfONCY1fmk=");
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "Brand");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InformationPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InformationPage,
    "informationPages",
    ()=>informationPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
;
;
;
const informationPages = [
    [
        'about',
        'Về Toán Ôn Thi 360'
    ],
    [
        'terms',
        'Điều khoản sử dụng'
    ],
    [
        'privacy',
        'Chính sách bảo mật'
    ],
    [
        'contact',
        'Liên hệ và hỗ trợ'
    ]
];
const content = {
    about: {
        eyebrow: 'CÙNG HIỂU TOÁN, CÙNG TIẾN BỘ',
        intro: 'Một không gian kết nối lộ trình học, học liệu và sự đồng hành của gia đình, thầy cô. Bắt đầu từ điều học sinh cần hiểu, rồi từng bước xây dựng sự tự tin.',
        image: 'info-about-v1.webp',
        sections: [
            [
                'Học có lộ trình',
                'Chọn lớp và mục tiêu để khám phá các bước học từ nền tảng đến vận dụng. Các lộ trình hiện là đề xuất minh họa, cần thẩm định trước khi dùng.'
            ],
            [
                'Hiểu cách làm',
                'Định hướng học liệu có giải thích, ví dụ và luyện tập theo chuyên đề; ưu tiên khả năng diễn đạt cách nghĩ thay vì chỉ ghi nhớ đáp án.'
            ],
            [
                'Có người đồng hành',
                'Thiết kế hướng tới học sinh, phụ huynh, giáo viên và đơn vị giáo dục. Kết nối tài khoản, lớp và phản hồi sẽ cần triển khai nghiệp vụ riêng.'
            ]
        ]
    },
    terms: {
        eyebrow: 'RÕ RÀNG TRƯỚC KHI BẮT ĐẦU',
        intro: 'Dự thảo khung điều khoản để đơn vị vận hành rà soát. Đây chưa phải thỏa thuận có hiệu lực và không có thao tác chấp nhận điều khoản tại trang này.',
        image: 'info-terms-v1.webp',
        sections: [
            [
                '01 · Phạm vi sử dụng',
                'Website hiện là bản xem trước giao diện. Danh mục, hồ sơ, kết quả và dịch vụ được gắn nhãn minh họa chưa phải nội dung được cung cấp chính thức.'
            ],
            [
                '02 · Tài khoản và người học nhỏ tuổi',
                'Cần xác nhận độ tuổi sử dụng, cơ chế giám hộ, quyền từng vai trò và điều kiện tạo tài khoản trước khi vận hành. Bản hiện tại chưa có xác thực tài khoản.'
            ],
            [
                '03 · Học liệu và quyền sử dụng',
                'Cần làm rõ chủ sở hữu, giấy phép, phạm vi tải/chia sẻ và quy trình tiếp nhận phản ánh về học liệu. Không suy từ bản minh họa rằng tài nguyên được phép tái phân phối.'
            ],
            [
                '04 · Ứng xử và nội dung',
                'Đề xuất yêu cầu tôn trọng người học, không giả mạo và không chia sẻ thông tin riêng tư của người khác. Tiêu chí kiểm duyệt, xử lý vi phạm và khiếu nại cần được duyệt.'
            ],
            [
                '05 · Phí, hủy và hoàn tiền',
                'Chưa có dịch vụ trả phí hoặc giao dịch tại bản xem trước. Giá, điều kiện đăng ký, hủy, hoàn tiền và trách nhiệm các bên phải được xác nhận riêng nếu triển khai.'
            ],
            [
                '06 · Hiệu lực và giải quyết tranh chấp',
                'Đơn vị ký kết, địa chỉ pháp lý, ngày hiệu lực, luật áp dụng và đầu mối giải quyết chưa được xác nhận. Không dùng dự thảo này thay cho văn bản được rà soát pháp lý.'
            ]
        ]
    },
    privacy: {
        eyebrow: 'TÔN TRỌNG THÔNG TIN CÁ NHÂN',
        intro: 'Khung chính sách bảo mật đang chờ xác minh hệ thống thực tế. Nội dung mô tả những vấn đề cần làm rõ, không phải chứng nhận hay cam kết bảo mật đã triển khai.',
        image: 'info-privacy-v1.webp',
        sections: [
            [
                '01 · Dữ liệu và mục đích',
                'Cần lập danh mục dữ liệu tài khoản, học tập, liên hệ và nhật ký kỹ thuật; nêu mục đích và căn cứ xử lý cho từng nhóm trước khi thu thập.'
            ],
            [
                '02 · Dữ liệu học sinh',
                'Cần xác định cơ chế giám hộ và đồng ý phù hợp, giới hạn công bố ảnh/điểm/thành tích và quyền xem theo lớp, đơn vị. Hồ sơ hiện hiển thị là dữ liệu minh họa.'
            ],
            [
                '03 · Bên nhận và lưu trữ',
                'Nhà cung cấp dịch vụ, phạm vi chia sẻ, vị trí lưu trữ, thời hạn giữ và quy trình xóa dữ liệu chưa được xác nhận. Không đưa ra thời hạn hoặc danh sách bên nhận khi chưa kiểm kê.'
            ],
            [
                '04 · Cookie và công nghệ theo dõi',
                'Cần kiểm kê cookie, lưu trữ trình duyệt, phân tích truy cập và công cụ bên thứ ba của bản triển khai thật. Không mặc định website không theo dõi chỉ vì chưa có form hoạt động.'
            ],
            [
                '05 · Quyền và yêu cầu của người dùng',
                'Đề xuất quy trình yêu cầu xem, sửa hoặc xóa dữ liệu, xác minh người yêu cầu và xử lý theo quy định áp dụng. Kênh tiếp nhận và thời hạn xử lý đang chờ xác nhận.'
            ],
            [
                '06 · An toàn và thay đổi chính sách',
                'Cần thẩm định kiểm soát truy cập, lưu trữ, sao lưu, xử lý sự cố và cơ chế thông báo thay đổi. Không có bảo đảm an toàn tuyệt đối hoặc chứng nhận tuân thủ từ bản thiết kế.'
            ]
        ]
    },
    contact: {
        eyebrow: 'BẮT ĐẦU TỪ MỘT CÂU HỎI',
        intro: 'Tìm đúng nhóm vấn đề để chuẩn bị yêu cầu rõ ràng. Các kênh hỗ trợ chính thức chưa được cấu hình; trang này chưa nhận hay gửi thông tin liên hệ.',
        image: 'info-contact-v1.webp',
        sections: [
            [
                'Tư vấn học tập',
                'Chuẩn bị lớp đang học, mục tiêu và nội dung còn vướng. Chưa cần cung cấp họ tên, số điện thoại hoặc kết quả học tập cá nhân trong bản xem trước.'
            ],
            [
                'Hỗ trợ sử dụng',
                'Ghi lại tên trang, thao tác và thông báo lỗi. Nếu chụp màn hình, hãy che thông tin riêng tư; không gửi mật khẩu hoặc mã xác thực.'
            ],
            [
                'Hợp tác giáo dục',
                'Chuẩn bị nội dung đề xuất, phạm vi chuyên môn và khu vực hoạt động. Chưa có biểu mẫu tiếp nhận hoặc thỏa thuận hợp tác tại đây.'
            ]
        ]
    }
};
function InformationPage({ tab, onNavigate, onHome }) {
    const data = content[tab] || content.about;
    const title = informationPages.find((p)=>p[0] === tab)?.[1];
    const legal = tab === 'terms' || tab === 'privacy';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `info-page info-${tab}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "info-breadcrumb",
                "aria-label": "Đường dẫn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onHome,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 12,
                                columnNumber: 135
                            }, this),
                            " Trang chủ"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 12,
                        columnNumber: 110
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 12,
                        columnNumber: 176
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 12,
                        columnNumber: 190
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InformationPage.tsx",
                lineNumber: 12,
                columnNumber: 54
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "info-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: data.eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 13,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 13,
                                columnNumber: 85
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: data.intro
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 13,
                                columnNumber: 101
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "info-status",
                                children: legal ? 'Dự thảo · Chưa có hiệu lực' : 'Bản giới thiệu minh họa'
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 13,
                                columnNumber: 120
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 13,
                        columnNumber: 33
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `/assets/toan/${data.image}`,
                        alt: tab === 'about' ? 'Minh họa cô giáo đồng hành cùng học sinh' : tab === 'contact' ? 'Minh họa tư vấn học tập' : tab === 'privacy' ? 'Minh họa học sinh và bảo vệ thông tin' : 'Minh họa trao đổi các nguyên tắc học tập'
                    }, void 0, false, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 13,
                        columnNumber: 225
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InformationPage.tsx",
                lineNumber: 13,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "info-tabs",
                "aria-label": "Các trang thông tin",
                children: informationPages.map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-current": key === tab ? 'page' : undefined,
                        onClick: ()=>onNavigate(key),
                        children: label
                    }, key, false, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 14,
                        columnNumber: 99
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/InformationPage.tsx",
                lineNumber: 14,
                columnNumber: 2
            }, this),
            legal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "info-draft",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                        size: 23
                    }, void 0, false, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 15,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Cần đơn vị vận hành và người phụ trách pháp lý xác nhận"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 15,
                                columnNumber: 69
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Chưa xác nhận chủ thể pháp lý, thông tin liên hệ và ngày hiệu lực. Các mục dưới đây là nội dung soạn thảo để hoàn thiện, không phải chính sách đã được thông qua."
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 15,
                                columnNumber: 141
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 15,
                        columnNumber: 64
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InformationPage.tsx",
                lineNumber: 15,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: legal ? 'info-document-layout' : 'info-content-layout',
                children: [
                    legal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "info-toc",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Nội dung trang"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 16,
                                columnNumber: 106
                            }, this),
                            data.sections.map(([heading], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${tab}-${i}`,
                                    children: heading
                                }, heading, false, {
                                    fileName: "[project]/src/components/InformationPage.tsx",
                                    lineNumber: 16,
                                    columnNumber: 163
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: [
                                    "Bản dự thảo 09/11/2026",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/InformationPage.tsx",
                                        lineNumber: 16,
                                        columnNumber: 246
                                    }, this),
                                    "Chưa có ngày hiệu lực"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 16,
                                columnNumber: 217
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 16,
                        columnNumber: 78
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: legal ? 'info-sections' : 'info-cards',
                        children: data.sections.map(([heading, body], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: `${tab}-${i}`,
                                className: "info-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "info-card-icon",
                                        children: legal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            size: 22
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InformationPage.tsx",
                                            lineNumber: 17,
                                            columnNumber: 197
                                        }, this) : i === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                            size: 23
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InformationPage.tsx",
                                            lineNumber: 17,
                                            columnNumber: 225
                                        }, this) : i === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            size: 23
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InformationPage.tsx",
                                            lineNumber: 17,
                                            columnNumber: 252
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            size: 23
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InformationPage.tsx",
                                            lineNumber: 17,
                                            columnNumber: 274
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InformationPage.tsx",
                                        lineNumber: 17,
                                        columnNumber: 157
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: heading
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InformationPage.tsx",
                                        lineNumber: 17,
                                        columnNumber: 300
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: body
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InformationPage.tsx",
                                        lineNumber: 17,
                                        columnNumber: 318
                                    }, this)
                                ]
                            }, heading, true, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 17,
                                columnNumber: 93
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 17,
                        columnNumber: 2
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InformationPage.tsx",
                lineNumber: 16,
                columnNumber: 2
            }, this),
            tab === 'about' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "info-feature",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "info-journey-art",
                        "aria-label": "Ba bước học tập gợi ý",
                        children: [
                            [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
                                "Chọn mục tiêu"
                            ],
                            [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                                "Học và luyện tập"
                            ],
                            [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                "Cùng nhìn lại"
                            ]
                        ].map(([Icon, label], i)=>{
                            const Symbol = Icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "0",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InformationPage.tsx",
                                        lineNumber: 18,
                                        columnNumber: 295
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Symbol, {
                                        size: 35
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InformationPage.tsx",
                                        lineNumber: 18,
                                        columnNumber: 314
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: String(label)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InformationPage.tsx",
                                        lineNumber: 18,
                                        columnNumber: 333
                                    }, this)
                                ]
                            }, String(label), true, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 18,
                                columnNumber: 270
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 18,
                        columnNumber: 52
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "MỖI NGƯỜI MỘT VAI TRÒ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 18,
                                columnNumber: 385
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Học sinh chủ động. Gia đình thấu hiểu. Thầy cô dẫn dắt."
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 18,
                                columnNumber: 439
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Giao diện kết nối lớp học, tài liệu, luyện đề và giáo viên đồng hành trong cùng một hành trình. Thông tin hồ sơ và kết quả cần được xác minh trước khi công bố."
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 18,
                                columnNumber: 503
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button primary",
                                onClick: ()=>onNavigate('roadmaps'),
                                children: [
                                    "Khám phá lộ trình ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InformationPage.tsx",
                                        lineNumber: 18,
                                        columnNumber: 759
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 18,
                                columnNumber: 669
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 18,
                        columnNumber: 380
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InformationPage.tsx",
                lineNumber: 18,
                columnNumber: 18
            }, this),
            tab === 'contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "info-contact-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                size: 30
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 19,
                                columnNumber: 65
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Kênh liên hệ chính thức"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 19,
                                columnNumber: 88
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Đang chờ đơn vị quản lý cung cấp và xác minh."
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 19,
                                columnNumber: 120
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                children: [
                                    'Email hỗ trợ',
                                    'Số điện thoại',
                                    'Địa chỉ tiếp nhận',
                                    'Thời gian hỗ trợ'
                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: x
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InformationPage.tsx",
                                                lineNumber: 19,
                                                columnNumber: 269
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: "Chưa công bố"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InformationPage.tsx",
                                                lineNumber: 19,
                                                columnNumber: 281
                                            }, this)
                                        ]
                                    }, x, true, {
                                        fileName: "[project]/src/components/InformationPage.tsx",
                                        lineNumber: 19,
                                        columnNumber: 256
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 19,
                                columnNumber: 172
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 19,
                        columnNumber: 60
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "info-help",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Trước khi liên hệ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 19,
                                columnNumber: 348
                            }, this),
                            [
                                [
                                    'Có thể đăng ký học ngay không?',
                                    'Chưa. Đây là giao diện thử nghiệm, chưa có dịch vụ đăng ký học hoạt động.'
                                ],
                                [
                                    'Trang này có nhận yêu cầu không?',
                                    'Không có biểu mẫu gửi và không có yêu cầu nào được tạo từ trang này.'
                                ],
                                [
                                    'Làm sao tìm đúng lộ trình?',
                                    'Chọn lớp ở trang lộ trình, xem mục tiêu và nội dung minh họa trước khi trao đổi với giáo viên.'
                                ]
                            ].map(([q, a])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            children: q
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InformationPage.tsx",
                                            lineNumber: 19,
                                            columnNumber: 754
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: a
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InformationPage.tsx",
                                            lineNumber: 19,
                                            columnNumber: 776
                                        }, this)
                                    ]
                                }, q, true, {
                                    fileName: "[project]/src/components/InformationPage.tsx",
                                    lineNumber: 19,
                                    columnNumber: 737
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 19,
                        columnNumber: 321
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InformationPage.tsx",
                lineNumber: 19,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "info-next",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 20,
                        columnNumber: 33
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: legal ? 'Minh bạch từ bản thiết kế' : 'Cùng khám phá bước học tiếp theo'
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 20,
                                columnNumber: 63
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: legal ? 'Thông tin chính thức sẽ được cập nhật sau khi xác minh và phê duyệt.' : 'Tìm hiểu lộ trình và học liệu mẫu, không cần nhập thông tin cá nhân.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 20,
                                columnNumber: 142
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 20,
                        columnNumber: 58
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button soft",
                        onClick: legal ? ()=>onNavigate('contact') : onHome,
                        children: [
                            legal ? 'Liên hệ và hỗ trợ' : 'Về trang chủ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/InformationPage.tsx",
                                lineNumber: 20,
                                columnNumber: 427
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InformationPage.tsx",
                        lineNumber: 20,
                        columnNumber: 304
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InformationPage.tsx",
                lineNumber: 20,
                columnNumber: 2
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InformationPage.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = InformationPage;
var _c;
__turbopack_context__.k.register(_c, "InformationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MemberPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemberPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$provinces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/demo-provinces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionCatalog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionCatalog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/roadmaps.ts [app-client] (ecmascript)");
;
;
;
;
;
const sampleResults = [
    {
        id: 'MH-001',
        name: 'Học sinh minh họa 01',
        achievement: 'Hoàn thành lộ trình nền tảng',
        score: '96/100',
        badge: 'Nỗ lực nổi bật'
    },
    {
        id: 'MH-002',
        name: 'Học sinh minh họa 02',
        achievement: 'Luyện tập theo chuyên đề',
        score: '94/100',
        badge: 'Học tập chủ động'
    },
    {
        id: 'MH-003',
        name: 'Học sinh minh họa 03',
        achievement: 'Hoàn thành bài đánh giá',
        score: '92/100',
        badge: 'Tiến bộ tích cực'
    },
    {
        id: 'MH-004',
        name: 'Học sinh minh họa 04',
        achievement: 'Hoàn thành lộ trình nền tảng',
        score: '90/100',
        badge: 'Kiên trì học tập'
    },
    {
        id: 'MH-005',
        name: 'Học sinh minh họa 05',
        achievement: 'Luyện tập theo chuyên đề',
        score: '88/100',
        badge: 'Vững kiến thức'
    },
    {
        id: 'MH-006',
        name: 'Học sinh minh họa 06',
        achievement: 'Hoàn thành bài đánh giá',
        score: '86/100',
        badge: 'Chủ động luyện tập'
    },
    {
        id: 'MH-007',
        name: 'Học sinh minh họa 07',
        achievement: 'Ôn tập theo chương',
        score: '84/100',
        badge: 'Nỗ lực đều đặn'
    },
    {
        id: 'MH-008',
        name: 'Học sinh minh họa 08',
        achievement: 'Luyện tập theo chuyên đề',
        score: '82/100',
        badge: 'Tiến bộ từng bước'
    },
    {
        id: 'MH-009',
        name: 'Học sinh minh họa 09',
        achievement: 'Hoàn thành bài đánh giá',
        score: '80/100',
        badge: 'Tự tin học tập'
    },
    {
        id: 'MH-010',
        name: 'Học sinh minh họa 10',
        achievement: 'Ôn tập theo chương',
        score: '78/100',
        badge: 'Kiên trì rèn luyện'
    }
].map((item, index)=>({
        ...item,
        province: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$demo$2d$provinces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoProvinces"][index % 3].label,
        avatar: [
            '/assets/toan/foundation-v6.png',
            '/assets/toan/exam-v3.webp',
            '/assets/toan/geometry-v3.webp'
        ][index % 3]
    }));
function MemberPage({ page, onPage, tab, title, grade, onGrade, onHome, onPreview }) {
    const honors = tab === 'honors';
    const tablePage = Math.min(Math.max(page, 1), 2);
    const tableStart = (tablePage - 1) * 5;
    const visibleResults = sampleResults.slice(tableStart, tableStart + 5);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "member-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "member-heading member-heading-compact",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        id: "member-title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/MemberPage.tsx",
                        lineNumber: 23,
                        columnNumber: 61
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "member-toolbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "member-grade",
                                children: honors ? 'Xem bảng mẫu cho' : 'Lớp đang chọn'
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemberPage.tsx",
                                lineNumber: 23,
                                columnNumber: 127
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "member-grade",
                                value: grade,
                                onChange: (e)=>onGrade(Number(e.target.value)),
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeOptions"].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: g,
                                        children: [
                                            "Lớp ",
                                            g
                                        ]
                                    }, g, true, {
                                        fileName: "[project]/src/components/MemberPage.tsx",
                                        lineNumber: 23,
                                        columnNumber: 315
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemberPage.tsx",
                                lineNumber: 23,
                                columnNumber: 208
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MemberPage.tsx",
                        lineNumber: 23,
                        columnNumber: 95
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button soft",
                        onClick: onHome,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemberPage.tsx",
                                lineNumber: 23,
                                columnNumber: 423
                            }, this),
                            " Về trang chủ"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MemberPage.tsx",
                        lineNumber: 23,
                        columnNumber: 374
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MemberPage.tsx",
                lineNumber: 23,
                columnNumber: 3
            }, this),
            honors ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "honors-panel",
                "aria-labelledby": "honors-table-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "honors-demo",
                        role: "note",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                size: 21
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemberPage.tsx",
                                lineNumber: 25,
                                columnNumber: 46
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Dữ liệu minh họa hoàn toàn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemberPage.tsx",
                                        lineNumber: 25,
                                        columnNumber: 68
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Ảnh đại diện, tên, tỉnh/thành, thứ hạng, điểm số và danh hiệu dưới đây đều được tạo để xem bố cục. Không đại diện cho học sinh, kết quả hoặc thành tích thật."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemberPage.tsx",
                                        lineNumber: 25,
                                        columnNumber: 111
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MemberPage.tsx",
                                lineNumber: 25,
                                columnNumber: 63
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MemberPage.tsx",
                        lineNumber: 25,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "honors-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "honors-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MemberPage.tsx",
                                    lineNumber: 26,
                                    columnNumber: 65
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemberPage.tsx",
                                lineNumber: 26,
                                columnNumber: 35
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "honors-table-title",
                                        children: [
                                            "Bảng vàng lớp ",
                                            grade
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MemberPage.tsx",
                                        lineNumber: 26,
                                        columnNumber: 96
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Bảng mẫu · 10 hồ sơ minh họa · Chưa có dữ liệu thực được công bố"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemberPage.tsx",
                                        lineNumber: 26,
                                        columnNumber: 150
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MemberPage.tsx",
                                lineNumber: 26,
                                columnNumber: 91
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sample-badge",
                                children: "MINH HỌA"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemberPage.tsx",
                                lineNumber: 26,
                                columnNumber: 227
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MemberPage.tsx",
                        lineNumber: 26,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "honors-scroll-hint",
                        children: "Vuốt ngang bảng để xem tỉnh/thành, điểm và ghi nhận mẫu."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MemberPage.tsx",
                        lineNumber: 27,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "honors-table-scroll",
                        role: "region",
                        "aria-label": "Bảng dữ liệu thành tích minh họa",
                        tabIndex: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "honors-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                    children: [
                                        "Bảng dữ liệu mẫu lớp ",
                                        grade,
                                        ", không phải bảng xếp hạng thực tế."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MemberPage.tsx",
                                    lineNumber: 28,
                                    columnNumber: 147
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Thứ hạng mẫu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MemberPage.tsx",
                                                lineNumber: 28,
                                                columnNumber: 240
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Học sinh minh họa"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MemberPage.tsx",
                                                lineNumber: 28,
                                                columnNumber: 273
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Lớp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MemberPage.tsx",
                                                lineNumber: 28,
                                                columnNumber: 311
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Tỉnh/thành"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MemberPage.tsx",
                                                lineNumber: 28,
                                                columnNumber: 335
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Hoạt động mẫu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MemberPage.tsx",
                                                lineNumber: 28,
                                                columnNumber: 366
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Điểm mẫu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MemberPage.tsx",
                                                lineNumber: 28,
                                                columnNumber: 400
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Ghi nhận mẫu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MemberPage.tsx",
                                                lineNumber: 28,
                                                columnNumber: 429
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MemberPage.tsx",
                                        lineNumber: 28,
                                        columnNumber: 236
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MemberPage.tsx",
                                    lineNumber: 28,
                                    columnNumber: 229
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: visibleResults.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `honors-rank rank-${tableStart + index + 1}`,
                                                        children: tableStart + index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemberPage.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 538
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MemberPage.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 534
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "row",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "honors-student",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                className: "honors-avatar",
                                                                src: item.avatar,
                                                                alt: "Ảnh đại diện học sinh minh họa"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MemberPage.tsx",
                                                                lineNumber: 28,
                                                                columnNumber: 677
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/MemberPage.tsx",
                                                                        lineNumber: 28,
                                                                        columnNumber: 769
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: [
                                                                            item.id,
                                                                            " · Nhân vật giả định"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/MemberPage.tsx",
                                                                        lineNumber: 28,
                                                                        columnNumber: 797
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/MemberPage.tsx",
                                                                lineNumber: 28,
                                                                columnNumber: 764
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MemberPage.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 645
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MemberPage.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 629
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        "Lớp ",
                                                        grade
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MemberPage.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 858
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "honors-province",
                                                    children: item.province
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MemberPage.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 878
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: item.achievement
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MemberPage.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 930
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "sample-score",
                                                        children: item.score
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemberPage.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 961
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MemberPage.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 957
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "honors-badge",
                                                        children: item.badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemberPage.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 1024
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MemberPage.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 1020
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/components/MemberPage.tsx",
                                            lineNumber: 28,
                                            columnNumber: 516
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MemberPage.tsx",
                                    lineNumber: 28,
                                    columnNumber: 475
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MemberPage.tsx",
                            lineNumber: 28,
                            columnNumber: 115
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MemberPage.tsx",
                        lineNumber: 28,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "honors-pagination",
                        "aria-label": "Phân trang Bảng vàng",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    tableStart + 1,
                                    "–",
                                    tableStart + visibleResults.length,
                                    " / ",
                                    sampleResults.length,
                                    " hồ sơ mẫu · 5 dòng mỗi trang"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MemberPage.tsx",
                                lineNumber: 29,
                                columnNumber: 74
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Trang trước",
                                        disabled: tablePage === 1,
                                        onClick: ()=>onPage(tablePage - 1),
                                        children: "‹"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemberPage.tsx",
                                        lineNumber: 29,
                                        columnNumber: 195
                                    }, this),
                                    [
                                        1,
                                        2
                                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": `Trang ${n}`,
                                            "aria-current": n === tablePage ? 'page' : undefined,
                                            onClick: ()=>onPage(n),
                                            children: n
                                        }, n, false, {
                                            fileName: "[project]/src/components/MemberPage.tsx",
                                            lineNumber: 29,
                                            columnNumber: 311
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Trang sau",
                                        disabled: tablePage === 2,
                                        onClick: ()=>onPage(tablePage + 1),
                                        children: "›"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemberPage.tsx",
                                        lineNumber: 29,
                                        columnNumber: 437
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MemberPage.tsx",
                                lineNumber: 29,
                                columnNumber: 190
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MemberPage.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "honors-footnote",
                        children: "Khi kết nối hệ thống thật, chỉ công bố kết quả đã xác minh và được phép chia sẻ. Bộ lọc hiện chỉ thay lớp của bảng mẫu."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MemberPage.tsx",
                        lineNumber: 29,
                        columnNumber: 549
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MemberPage.tsx",
                lineNumber: 24,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionCatalog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                page: page,
                onPage: onPage,
                tab: tab,
                title: title,
                grade: grade,
                onPreview: onPreview,
                onHome: onHome
            }, void 0, false, {
                fileName: "[project]/src/components/MemberPage.tsx",
                lineNumber: 30,
                columnNumber: 14
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MemberPage.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_c = MemberPage;
var _c;
__turbopack_context__.k.register(_c, "MemberPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RightSidebarPanels.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemStats",
    ()=>SystemStats,
    "TeacherInspiration",
    ()=>TeacherInspiration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$combined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartNoAxesCombined$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-combined.js [app-client] (ecmascript) <export default as ChartNoAxesCombined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
;
function SystemStats() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel system-stats",
        "aria-labelledby": "system-stats-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "system-stats-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 114
                    }, this),
                    " Thống kê hệ thống"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                lineNumber: 4,
                columnNumber: 86
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sidebar-note",
                children: "Chờ kết nối dữ liệu hệ thống."
            }, void 0, false, {
                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                lineNumber: 4,
                columnNumber: 157
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats-total",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                size: 19
                            }, void 0, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 4,
                                columnNumber: 253
                            }, this),
                            " Thành viên"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 247
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        "aria-label": "Chưa có số liệu",
                        children: "—"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 289
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                lineNumber: 4,
                columnNumber: 218
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats-role-list",
                children: [
                    [
                        'Học sinh',
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
                    ],
                    [
                        'Phụ huynh',
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"]
                    ],
                    [
                        'Giáo viên',
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
                    ]
                ].map(([label, Icon])=>{
                    const Symbol = Icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Symbol, {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 4,
                                columnNumber: 544
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: String(label)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 4,
                                columnNumber: 563
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                "aria-label": "Chưa có số liệu",
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 4,
                                columnNumber: 591
                            }, this)
                        ]
                    }, String(label), true, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 519
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                lineNumber: 4,
                columnNumber: 342
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats-resource-grid",
                children: [
                    [
                        'Đề thi',
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
                    ],
                    [
                        'Bài tập',
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
                    ]
                ].map(([label, Icon])=>{
                    const Symbol = Icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Symbol, {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 4,
                                columnNumber: 811
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                "aria-label": "Chưa có số liệu",
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 4,
                                columnNumber: 830
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: String(label)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 4,
                                columnNumber: 877
                            }, this)
                        ]
                    }, String(label), true, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 786
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                lineNumber: 4,
                columnNumber: 643
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats-today",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Lượt làm bài hôm nay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 949
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        "aria-label": "Chưa có số liệu",
                        children: "—"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 982
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                lineNumber: 4,
                columnNumber: 920
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: "stats-week",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$combined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartNoAxesCombined$3e$__["ChartNoAxesCombined"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 4,
                                columnNumber: 1078
                            }, this),
                            " Hoạt động 7 ngày"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 1066
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stats-chart-placeholder",
                        role: "img",
                        "aria-label": "Biểu đồ 7 ngày đang chờ dữ liệu; chưa có điểm hoặc cột thống kê",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Chờ dữ liệu 7 ngày"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RightSidebarPanels.tsx",
                            lineNumber: 4,
                            columnNumber: 1269
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 1140
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stats-chart-days",
                        "aria-hidden": "true",
                        children: [
                            '−6',
                            '−5',
                            '−4',
                            '−3',
                            '−2',
                            '−1',
                            'Hôm nay'
                        ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: day
                            }, day, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 4,
                                columnNumber: 1411
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 1306
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                lineNumber: 4,
                columnNumber: 1035
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "stats-status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 4,
                        columnNumber: 1484
                    }, this),
                    " Chưa có số liệu trực tiếp"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                lineNumber: 4,
                columnNumber: 1456
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RightSidebarPanels.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
_c = SystemStats;
function TeacherInspiration() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "panel teacher-inspiration",
        "aria-labelledby": "inspiration-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inspiration-cover",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/assets/toan/footer-v4.webp",
                        alt: "Cảnh trường học minh họa"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 8,
                        columnNumber: 127
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Hình minh họa"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 8,
                        columnNumber: 198
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                lineNumber: 8,
                columnNumber: 92
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inspiration-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspiration-avatar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/toan/educator-v3.webp",
                            alt: "Giáo viên minh họa, không phải chân dung cô Nguyễn Thị Diện"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RightSidebarPanels.tsx",
                            lineNumber: 8,
                            columnNumber: 300
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 8,
                        columnNumber: 264
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inspiration-portrait-label",
                        children: "Ảnh người minh họa"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 8,
                        columnNumber: 414
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "GÓC TRUYỀN CẢM HỨNG"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 8,
                        columnNumber: 484
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "inspiration-title",
                        children: "Cô Nguyễn Thị Diện"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 8,
                        columnNumber: 536
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "inspiration-role",
                        children: "Đồng hành cùng giáo dục"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 8,
                        columnNumber: 586
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inspiration-quote-placeholder",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                size: 21,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 8,
                                columnNumber: 692
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Lời chia sẻ đang chờ cập nhật."
                            }, void 0, false, {
                                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                                lineNumber: 8,
                                columnNumber: 729
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 8,
                        columnNumber: 645
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "inspiration-note",
                        children: "Chờ thông tin giới thiệu được xác nhận. Chưa có chân dung hoặc lời trích dẫn được cung cấp."
                    }, void 0, false, {
                        fileName: "[project]/src/components/RightSidebarPanels.tsx",
                        lineNumber: 8,
                        columnNumber: 772
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RightSidebarPanels.tsx",
                lineNumber: 8,
                columnNumber: 230
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RightSidebarPanels.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c1 = TeacherInspiration;
var _c, _c1;
__turbopack_context__.k.register(_c, "SystemStats");
__turbopack_context__.k.register(_c1, "TeacherInspiration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SectionCatalog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionCatalog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeacherDirectory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TeacherDirectory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CatalogMetadata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CatalogMetadata.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers3>");
;
;
;
;
;
function SectionCatalog({ tab, title, grade, page, onPage, onPreview, onHome }) {
    if (tab === 'teachers') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeacherDirectory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        page: page,
        onPage: onPage,
        onPreview: onPreview
    }, void 0, false, {
        fileName: "[project]/src/components/SectionCatalog.tsx",
        lineNumber: 7,
        columnNumber: 29
    }, this);
    const all = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCatalogCards"])(tab, grade);
    const pageSize = 4;
    const totalPages = Math.ceil(all.length / pageSize);
    const current = Math.min(Math.max(page, 1), totalPages);
    const start = (current - 1) * pageSize;
    const cards = all.slice(start, start + pageSize);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-catalog",
        "aria-labelledby": "member-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "catalog-intro catalog-intro-compact",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sample-badge",
                        children: "DỮ LIỆU MẪU"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionCatalog.tsx",
                        lineNumber: 9,
                        columnNumber: 130
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Minh họa nội dung, chưa phát hành dịch vụ hoặc học liệu thực."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionCatalog.tsx",
                        lineNumber: 9,
                        columnNumber: 179
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "catalog-count",
                        children: [
                            start + 1,
                            "–",
                            Math.min(start + pageSize, all.length),
                            " / ",
                            all.length,
                            " mục"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SectionCatalog.tsx",
                        lineNumber: 9,
                        columnNumber: 247
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SectionCatalog.tsx",
                lineNumber: 9,
                columnNumber: 77
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-card-grid",
                "aria-live": "polite",
                children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "section-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-card-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mini-label",
                                        children: card.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SectionCatalog.tsx",
                                        lineNumber: 9,
                                        columnNumber: 526
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SectionCatalog.tsx",
                                        lineNumber: 9,
                                        columnNumber: 574
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: card.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SectionCatalog.tsx",
                                        lineNumber: 9,
                                        columnNumber: 595
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SectionCatalog.tsx",
                                lineNumber: 9,
                                columnNumber: 488
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-card-image",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: card.image,
                                        alt: `Minh họa ${card.title.toLowerCase()}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SectionCatalog.tsx",
                                        lineNumber: 9,
                                        columnNumber: 658
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Minh họa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SectionCatalog.tsx",
                                        lineNumber: 9,
                                        columnNumber: 726
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SectionCatalog.tsx",
                                lineNumber: 9,
                                columnNumber: 622
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-card-body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CatalogMetadata$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        tab: tab,
                                        index: start + index
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SectionCatalog.tsx",
                                        lineNumber: 9,
                                        columnNumber: 788
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: card.points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SectionCatalog.tsx",
                                                        lineNumber: 9,
                                                        columnNumber: 880
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: point
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SectionCatalog.tsx",
                                                        lineNumber: 9,
                                                        columnNumber: 905
                                                    }, this)
                                                ]
                                            }, point, true, {
                                                fileName: "[project]/src/components/SectionCatalog.tsx",
                                                lineNumber: 9,
                                                columnNumber: 864
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SectionCatalog.tsx",
                                        lineNumber: 9,
                                        columnNumber: 836
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button primary",
                                        onClick: ()=>onPreview(tab, card.id),
                                        children: [
                                            card.cta,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SectionCatalog.tsx",
                                                lineNumber: 9,
                                                columnNumber: 1019
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SectionCatalog.tsx",
                                        lineNumber: 9,
                                        columnNumber: 937
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SectionCatalog.tsx",
                                lineNumber: 9,
                                columnNumber: 753
                            }, this)
                        ]
                    }, card.title, true, {
                        fileName: "[project]/src/components/SectionCatalog.tsx",
                        lineNumber: 9,
                        columnNumber: 437
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/SectionCatalog.tsx",
                lineNumber: 9,
                columnNumber: 358
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "catalog-pagination",
                "aria-label": `Phân trang ${title}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Trang ",
                            current,
                            "/",
                            totalPages,
                            " · 4 mục mỗi trang"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SectionCatalog.tsx",
                        lineNumber: 9,
                        columnNumber: 1146
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onPage(current - 1),
                                disabled: current === 1,
                                "aria-label": "Trang trước",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SectionCatalog.tsx",
                                lineNumber: 9,
                                columnNumber: 1210
                            }, this),
                            Array.from({
                                length: totalPages
                            }, (_, i)=>i + 1).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPage(n),
                                    "aria-label": `Trang ${n}`,
                                    "aria-current": n === current ? 'page' : undefined,
                                    children: n
                                }, n, false, {
                                    fileName: "[project]/src/components/SectionCatalog.tsx",
                                    lineNumber: 9,
                                    columnNumber: 1359
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onPage(current + 1),
                                disabled: current === totalPages,
                                "aria-label": "Trang sau",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SectionCatalog.tsx",
                                lineNumber: 9,
                                columnNumber: 1483
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SectionCatalog.tsx",
                        lineNumber: 9,
                        columnNumber: 1205
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SectionCatalog.tsx",
                lineNumber: 9,
                columnNumber: 1075
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "catalog-back",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"], {
                        size: 19
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionCatalog.tsx",
                        lineNumber: 9,
                        columnNumber: 1630
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Muốn chọn mục tiêu học tập trước?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionCatalog.tsx",
                        lineNumber: 9,
                        columnNumber: 1650
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onHome,
                        children: [
                            "Khám phá lộ trình ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/SectionCatalog.tsx",
                                lineNumber: 9,
                                columnNumber: 1739
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SectionCatalog.tsx",
                        lineNumber: 9,
                        columnNumber: 1696
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SectionCatalog.tsx",
                lineNumber: 9,
                columnNumber: 1600
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SectionCatalog.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = SectionCatalog;
var _c;
__turbopack_context__.k.register(_c, "SectionCatalog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SeoHead.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeoHead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SeoHead({ tab, grade, page, detail }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeoHead.useEffect": ()=>{
            const seo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seoFor"])(tab, grade, page, detail);
            const set = {
                "SeoHead.useEffect.set": (key, content, property = false)=>{
                    const attr = property ? 'property' : 'name';
                    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
                    if (!el) {
                        el = document.createElement('meta');
                        el.setAttribute(attr, key);
                        document.head.appendChild(el);
                    }
                    if (el.content !== content) el.content = content;
                }
            }["SeoHead.useEffect.set"];
            const sync = {
                "SeoHead.useEffect.sync": ()=>{
                    if (document.title !== seo.title) document.title = seo.title;
                    set('description', seo.description);
                    set('robots', 'noindex, nofollow');
                    set('og:title', seo.title, true);
                    set('og:description', seo.description, true);
                    set('twitter:title', seo.title);
                    set('twitter:description', seo.description);
                }
            }["SeoHead.useEffect.sync"];
            sync();
            // Native history keeps this single-page prototype on /. Next may restore the
            // previous server head after Back; keep its late update aligned with the view.
            const observer = new MutationObserver(sync);
            observer.observe(document.head, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true,
                attributeFilter: [
                    'content'
                ]
            });
            return ({
                "SeoHead.useEffect": ()=>observer.disconnect()
            })["SeoHead.useEffect"];
        }
    }["SeoHead.useEffect"], [
        tab,
        grade,
        page,
        detail
    ]);
    return null;
}
_s(SeoHead, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SeoHead;
var _c;
__turbopack_context__.k.register(_c, "SeoHead");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TeacherDirectory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeacherDirectory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$teachers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/teachers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
;
;
;
function TeacherDirectory({ page, onPage, onPreview }) {
    const current = page === 2 ? 2 : 1;
    const cards = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$teachers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teachers"].slice((current - 1) * 4, current * 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-catalog teacher-directory-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "catalog-intro catalog-intro-compact",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sample-badge",
                        children: "HỒ SƠ ĐANG HOÀN THIỆN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeacherDirectory.tsx",
                        lineNumber: 5,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Thông tin cô Diện do chủ hệ thống cung cấp; các hồ sơ còn lại là minh họa. Ảnh không phải chân dung thật."
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeacherDirectory.tsx",
                        lineNumber: 5,
                        columnNumber: 181
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TeacherDirectory.tsx",
                lineNumber: 5,
                columnNumber: 69
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-card-grid",
                children: cards.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "section-card teacher-profile-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "teacher-profile-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "teacher-profile-top",
                                    children: [
                                        t.expert ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "teacher-expert",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 534
                                                }, this),
                                                " CHUYÊN GIA"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 501
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "teacher-demo-badge",
                                            children: "HỒ SƠ MẪU"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 571
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "catalog-rating",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    children: [
                                                        0,
                                                        1,
                                                        2,
                                                        3,
                                                        4
                                                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 12
                                                        }, n, false, {
                                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                                            lineNumber: 5,
                                                            columnNumber: 702
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 657
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Chưa có đánh giá"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 736
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 625
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                    lineNumber: 5,
                                    columnNumber: 454
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "teacher-profile-identity",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "teacher-profile-avatar",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/assets/toan/educator-v3.webp",
                                                    alt: "Giáo viên minh họa, không phải chân dung người trong hồ sơ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 861
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Minh họa"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 968
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 821
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: t.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 1000
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "teacher-profile-role",
                                                    children: t.role
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 1017
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 995
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                    lineNumber: 5,
                                    columnNumber: 779
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "teacher-profile-unit",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 1113
                                        }, this),
                                        t.unit
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                    lineNumber: 5,
                                    columnNumber: 1077
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "teacher-profile-summary",
                                    children: t.sample ? 'Hồ sơ minh họa cách giới thiệu giáo viên đồng hành trong môn Toán.' : 'Thông tin chuyên gia và đơn vị do chủ hệ thống cung cấp.'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                    lineNumber: 5,
                                    columnNumber: 1151
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "teacher-profile-achievements",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Thành tích"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 1378
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Chờ cập nhật thông tin được xác minh."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 1405
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                    lineNumber: 5,
                                    columnNumber: 1332
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "teacher-profile-region",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 1493
                                        }, this),
                                        "Tỉnh/khu vực: chờ cập nhật"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                    lineNumber: 5,
                                    columnNumber: 1455
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "teacher-profile-stats",
                                    children: [
                                        'Lớp phụ trách',
                                        'Học sinh',
                                        'Kinh nghiệm'
                                    ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 1653
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                                    lineNumber: 5,
                                                    columnNumber: 1661
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 1636
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                    lineNumber: 5,
                                    columnNumber: 1542
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "teacher-profile-note",
                                    children: "Các chỉ số chưa có dữ liệu xác minh."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                    lineNumber: 5,
                                    columnNumber: 1695
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button primary",
                                    onClick: ()=>onPreview('teachers', t.id),
                                    children: [
                                        "Hồ sơ & lớp phụ trách ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                                            lineNumber: 5,
                                            columnNumber: 1869
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                    lineNumber: 5,
                                    columnNumber: 1771
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TeacherDirectory.tsx",
                            lineNumber: 5,
                            columnNumber: 416
                        }, this)
                    }, t.name, false, {
                        fileName: "[project]/src/components/TeacherDirectory.tsx",
                        lineNumber: 5,
                        columnNumber: 348
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/TeacherDirectory.tsx",
                lineNumber: 5,
                columnNumber: 299
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "catalog-pagination",
                "aria-label": "Phân trang giáo viên",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Trang ",
                            current,
                            "/2 · 4 hồ sơ mỗi trang"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TeacherDirectory.tsx",
                        lineNumber: 5,
                        columnNumber: 1995
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: current === 1,
                                onClick: ()=>onPage(1),
                                "aria-label": "Trang trước",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TeacherDirectory.tsx",
                                lineNumber: 5,
                                columnNumber: 2050
                            }, this),
                            [
                                1,
                                2
                            ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPage(n),
                                    "aria-current": current === n ? 'page' : undefined,
                                    "aria-label": `Trang ${n}`,
                                    children: n
                                }, n, false, {
                                    fileName: "[project]/src/components/TeacherDirectory.tsx",
                                    lineNumber: 5,
                                    columnNumber: 2154
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: current === 2,
                                onClick: ()=>onPage(2),
                                "aria-label": "Trang sau",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TeacherDirectory.tsx",
                                lineNumber: 5,
                                columnNumber: 2278
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TeacherDirectory.tsx",
                        lineNumber: 5,
                        columnNumber: 2045
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TeacherDirectory.tsx",
                lineNumber: 5,
                columnNumber: 1925
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TeacherDirectory.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = TeacherDirectory;
var _c;
__turbopack_context__.k.register(_c, "TeacherDirectory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/catalog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCatalogCards",
    ()=>getCatalogCards
]);
const art = {
    student: '/assets/toan/foundation-v6.png',
    geometry: '/assets/toan/geometry-v3.webp',
    exam: '/assets/toan/exam-v3.webp',
    teacher: '/assets/toan/educator-v3.webp'
};
function getCards(tab, grade) {
    if (tab === 'classes') return [
        {
            label: 'LỚP HỌC · NỀN TẢNG',
            title: `Nắm vững Toán lớp ${grade}`,
            summary: 'Củng cố kiến thức trọng tâm qua giải thích từng bước và luyện tập có hướng dẫn.',
            image: art.student,
            points: [
                'Hệ thống kiến thức theo chương',
                'Bài học và ví dụ có hướng dẫn',
                'Ôn tập sau từng chủ đề'
            ],
            cta: 'Xem lớp học mẫu',
            detail: 'Khung lớp học nền tảng gồm bài học, ví dụ và hoạt động ôn tập. Chưa có lịch học, giáo viên hoặc học phí được công bố.'
        },
        {
            label: 'LỚP HỌC · CHUYÊN ĐỀ',
            title: 'Học sâu theo chủ đề',
            summary: 'Tập trung vào một nhóm kiến thức để hiểu rõ cách vận dụng và trình bày.',
            image: art.geometry,
            points: [
                'Chủ đề phù hợp với lớp đang chọn',
                'Phân tích các dạng bài điển hình',
                'Thực hành và tự đánh giá'
            ],
            cta: 'Xem lớp chuyên đề',
            detail: 'Đây là cấu trúc minh họa cho lớp chuyên đề. Danh sách buổi học và điều kiện tham gia sẽ được bổ sung sau khi chuyên môn duyệt.'
        },
        {
            label: 'LỚP HỌC · TƯ DUY',
            title: 'Khơi mở tư duy Toán',
            summary: 'Rèn cách đặt câu hỏi, thử nhiều hướng giải và diễn đạt suy nghĩ rõ ràng.',
            image: art.exam,
            points: [
                'Khám phá bài toán mở rộng',
                'Trao đổi các cách giải khác nhau',
                'Rèn lập luận và diễn đạt'
            ],
            cta: 'Khám phá lớp mẫu',
            detail: 'Nội dung minh họa cho hoạt động phát triển tư duy. Chưa mở đăng ký hoặc thu học phí trong bản xem trước.'
        }
    ];
    if (tab === 'materials') return [
        {
            label: 'TÀI LIỆU · KIẾN THỨC',
            title: `Sổ tay Toán lớp ${grade}`,
            summary: 'Tổng hợp khái niệm, công thức và lưu ý để tra cứu trong quá trình học.',
            image: art.student,
            points: [
                'Kiến thức theo từng chương',
                'Ví dụ minh họa ngắn gọn',
                'Lưu ý những nhầm lẫn thường gặp'
            ],
            cta: 'Xem tài liệu mẫu',
            detail: 'Thẻ minh họa tài liệu hệ thống kiến thức. Chưa có tệp tải xuống; nội dung sẽ được giáo viên thẩm định trước khi phát hành.'
        },
        {
            label: 'TÀI LIỆU · BÀI TẬP',
            title: 'Phiếu luyện theo chủ đề',
            summary: 'Khung bài tập phân nhóm để tự luyện và đối chiếu mức độ hiểu bài.',
            image: art.geometry,
            points: [
                'Bài tập theo nhóm kiến thức',
                'Gợi ý phân tích yêu cầu',
                'Phần tự kiểm tra sau khi làm'
            ],
            cta: 'Xem cấu trúc phiếu',
            detail: 'Phiếu minh họa gồm phần yêu cầu, nhóm bài tập và phần tự kiểm tra. Chưa có bộ bài tập hoặc đáp án thực để tải.'
        },
        {
            label: 'TÀI LIỆU · PHƯƠNG PHÁP',
            title: 'Trình bày lời giải rõ ràng',
            summary: 'Hướng dẫn xây dựng các bước giải và diễn đạt lập luận mạch lạc.',
            image: art.exam,
            points: [
                'Đọc đề và xác định dữ kiện',
                'Sắp xếp các bước lập luận',
                'Kiểm tra và kết luận'
            ],
            cta: 'Xem hướng dẫn mẫu',
            detail: 'Khung hướng dẫn minh họa về phương pháp trình bày. Không phải tài liệu đã phát hành và chưa có tệp đính kèm.'
        }
    ];
    if (tab === 'practice') return [
        {
            label: 'LUYỆN ĐỀ · THEO CHƯƠNG',
            title: 'Ôn tập từng chương',
            summary: 'Làm quen cấu trúc bài ôn tập để củng cố kiến thức sau mỗi chương.',
            image: art.student,
            points: [
                'Câu hỏi theo kiến thức đã học',
                'Bài tập vận dụng theo mức độ',
                'Phần tự nhìn lại cách làm'
            ],
            cta: 'Xem cấu trúc đề',
            detail: 'Đề minh họa theo chương. Chưa kết nối ngân hàng câu hỏi, thời gian làm bài hoặc hệ thống chấm điểm.'
        },
        {
            label: 'LUYỆN ĐỀ · TỔNG HỢP',
            title: `Tự đánh giá Toán lớp ${grade}`,
            summary: 'Xem bố cục đề tổng hợp và cách phân chia nội dung cần ôn luyện.',
            image: art.exam,
            points: [
                'Nhóm kiến thức trọng tâm',
                'Bài toán kết hợp nhiều nội dung',
                'Gợi ý kế hoạch ôn tập tiếp theo'
            ],
            cta: 'Xem đề mẫu',
            detail: 'Chỉ minh họa danh mục đề tổng hợp; chưa thể bắt đầu thi, nộp bài hoặc nhận điểm thật.'
        },
        {
            label: 'LUYỆN ĐỀ · TƯ DUY',
            title: 'Thử sức bài toán suy luận',
            summary: 'Khám phá cách tiếp cận bài toán cần quan sát, liên hệ và lập luận.',
            image: art.geometry,
            points: [
                'Quan sát và tìm quy luật',
                'Giải thích lựa chọn của mình',
                'So sánh các cách tiếp cận'
            ],
            cta: 'Xem nhóm bài mẫu',
            detail: 'Khung bài toán tư duy mang tính minh họa. Các câu hỏi và tiêu chí đánh giá cần được biên tập và duyệt trước khi sử dụng.'
        }
    ];
    return [
        {
            label: 'GIÁO VIÊN · NỀN TẢNG',
            title: 'Đồng hành cùng kiến thức',
            summary: 'Mẫu hồ sơ dành cho giáo viên hướng dẫn học sinh xây dựng nền tảng Toán.',
            image: art.teacher,
            points: [
                `Phạm vi minh họa: Toán lớp ${grade}`,
                'Hướng dẫn từng bước, rõ ràng',
                'Hỗ trợ hình thành thói quen học'
            ],
            cta: 'Xem hồ sơ mẫu',
            detail: 'Đây là vị trí hồ sơ giả định, không đại diện cho giáo viên thật. Tên, bằng cấp, kinh nghiệm và lịch dạy chưa được công bố.'
        },
        {
            label: 'GIÁO VIÊN · CHUYÊN ĐỀ',
            title: 'Dẫn dắt học theo chủ đề',
            summary: 'Mẫu hồ sơ cho cách dạy tập trung vào từng nhóm bài và phương pháp giải.',
            image: art.teacher,
            points: [
                'Phân tích kiến thức theo chủ đề',
                'Làm rõ các bước suy luận',
                'Phản hồi quá trình luyện tập'
            ],
            cta: 'Xem hồ sơ mẫu',
            detail: 'Mẫu trình bày hồ sơ chuyên đề. Chưa có giáo viên được xác minh hoặc lịch hẹn có thể đăng ký.'
        },
        {
            label: 'GIÁO VIÊN · TƯ DUY',
            title: 'Khơi gợi cách nghĩ mới',
            summary: 'Mẫu hồ sơ cho hoạt động rèn tư duy, trao đổi và trình bày lời giải.',
            image: art.teacher,
            points: [
                'Khuyến khích đặt câu hỏi',
                'Gợi mở nhiều cách giải',
                'Rèn diễn đạt và phản biện'
            ],
            cta: 'Xem hồ sơ mẫu',
            detail: 'Hồ sơ minh họa vai trò giáo viên phát triển tư duy. Chưa có danh tính, thông tin liên hệ hoặc dịch vụ thực.'
        }
    ];
}
function extraCards(tab, grade) {
    const content = {
        classes: [
            {
                title: 'Luyện cách học độc lập',
                summary: 'Mẫu lớp giúp học sinh xây dựng cách tự học và tự kiểm tra kiến thức.',
                points: [
                    'Lập mục tiêu cho từng buổi',
                    'Tự ghi chép và đặt câu hỏi',
                    'Nhìn lại nội dung chưa vững'
                ]
            },
            {
                title: 'Toán trong cuộc sống',
                summary: 'Khám phá mối liên hệ giữa kiến thức đang học và những tình huống gần gũi.',
                points: [
                    'Quan sát tình huống thực tế',
                    'Mô tả bằng kiến thức Toán',
                    'Giải thích kết quả tìm được'
                ]
            },
            {
                title: 'Cùng ôn tập hiệu quả',
                summary: 'Mẫu lớp tổng kết kiến thức và chuẩn bị kế hoạch ôn tập phù hợp.',
                points: [
                    'Sắp xếp nội dung cần ôn',
                    'Thực hành từng nhóm kiến thức',
                    'Điều chỉnh cách học tiếp theo'
                ]
            }
        ],
        materials: [
            {
                title: 'Mẫu ghi chép bài học',
                summary: 'Khung ghi chép để kết nối ý chính, ví dụ và câu hỏi sau mỗi bài.',
                points: [
                    'Tóm tắt ý chính của bài',
                    'Ghi ví dụ và các bước giải',
                    'Đánh dấu điều cần hỏi thêm'
                ]
            },
            {
                title: 'Bản đồ kiến thức',
                summary: 'Mẫu sơ đồ kết nối các khái niệm theo mạch kiến thức của lớp học.',
                points: [
                    'Nhận diện các nhóm kiến thức',
                    'Liên hệ khái niệm liên quan',
                    'Tự bổ sung ví dụ minh họa'
                ]
            },
            {
                title: 'Phiếu tự ôn tập',
                summary: 'Khung tài liệu hỗ trợ nhìn lại kiến thức và kế hoạch luyện tập.',
                points: [
                    'Đánh dấu nội dung đã hiểu',
                    'Ghi câu hỏi còn vướng mắc',
                    'Chọn việc cần luyện tiếp'
                ]
            }
        ],
        practice: [
            {
                title: 'Luyện đọc và phân tích đề',
                summary: 'Nhóm bài mẫu tập trung vào cách hiểu yêu cầu trước khi giải.',
                points: [
                    'Tìm dữ kiện quan trọng',
                    'Xác định điều cần chứng minh',
                    'Chọn hướng tiếp cận phù hợp'
                ]
            },
            {
                title: 'Ôn tập bài toán vận dụng',
                summary: 'Mẫu nhóm bài liên hệ nhiều kiến thức trong phạm vi lớp đang chọn.',
                points: [
                    'Kết nối kiến thức đã học',
                    'Trình bày lập luận có cơ sở',
                    'Kiểm tra tính hợp lý của kết quả'
                ]
            },
            {
                title: 'Tự rà soát lời giải',
                summary: 'Mẫu hoạt động nhận diện sai sót và sửa cách trình bày lời giải.',
                points: [
                    'Kiểm tra từng bước suy luận',
                    'Phát hiện chỗ thiếu dữ kiện',
                    'Hoàn thiện kết luận của bài'
                ]
            }
        ],
        teachers: [
            {
                title: 'Hỗ trợ cách tự học',
                summary: 'Mẫu hồ sơ dành cho định hướng xây dựng thói quen học Toán độc lập.',
                points: [
                    'Hướng dẫn lập kế hoạch học',
                    'Gợi mở cách tự kiểm tra',
                    'Theo dõi câu hỏi còn vướng'
                ]
            },
            {
                title: 'Kết nối Toán với thực tế',
                summary: 'Mẫu hồ sơ cho hoạt động khám phá và ứng dụng kiến thức Toán.',
                points: [
                    'Xây dựng tình huống gần gũi',
                    'Hướng dẫn mô tả bằng Toán học',
                    'Khuyến khích giải thích kết quả'
                ]
            },
            {
                title: 'Đồng hành khi ôn tập',
                summary: 'Mẫu hồ sơ hỗ trợ hệ thống kiến thức và rèn cách giải bài.',
                points: [
                    'Xác định nội dung cần củng cố',
                    'Phân tích lỗi thường gặp',
                    'Gợi ý bước ôn tập tiếp theo'
                ]
            }
        ]
    };
    const labels = {
        classes: 'LỚP HỌC',
        materials: 'TÀI LIỆU',
        practice: 'LUYỆN ĐỀ',
        teachers: 'GIÁO VIÊN'
    };
    return (content[tab] ?? content.teachers).map((item)=>({
            ...item,
            label: `${labels[tab] ?? 'GIÁO VIÊN'} · LỚP ${grade}`,
            image: art.student,
            cta: tab === 'teachers' ? 'Xem hồ sơ mẫu' : 'Xem nội dung mẫu',
            detail: `${item.summary} Đây chỉ là nội dung minh họa cho lớp ${grade}; chưa có học liệu, dịch vụ hoặc hồ sơ thực được công bố.`
        }));
}
function illustrationFor(tab, index) {
    return `/assets/toan/catalog-${[
        'classes',
        'materials',
        'practice',
        'teachers'
    ].includes(tab) ? tab : 'teachers'}-v5.webp`;
}
const ids = {
    classes: [
        'nen-tang',
        'chuyen-de',
        'tu-duy',
        'tu-hoc',
        'thuc-te',
        'on-tap'
    ],
    materials: [
        'so-tay',
        'phieu-chu-de',
        'loi-giai',
        'ghi-chep',
        'ban-do',
        'tu-on-tap'
    ],
    practice: [
        'theo-chuong',
        'tong-hop',
        'suy-luan',
        'phan-tich-de',
        'van-dung',
        'ra-soat'
    ]
};
function getCatalogCards(tab, grade) {
    if (!ids[tab]) return [];
    return [
        ...getCards(tab, grade),
        ...extraCards(tab, grade)
    ].map((card, index)=>({
            ...card,
            id: ids[tab][index],
            index,
            image: illustrationFor(tab, index)
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/demo-provinces.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "demoProvinces",
    ()=>demoProvinces
]);
const demoProvinces = [
    {
        value: 'demo-a',
        label: 'Tỉnh/thành mẫu A'
    },
    {
        value: 'demo-b',
        label: 'Tỉnh/thành mẫu B'
    },
    {
        value: 'demo-c',
        label: 'Tỉnh/thành mẫu C'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/details.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDetailContent",
    ()=>getDetailContent,
    "readDetailRoute",
    ()=>readDetailRoute,
    "sourceLabels",
    ()=>sourceLabels,
    "topicIds",
    ()=>topicIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/roadmaps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$teachers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/teachers.ts [app-client] (ecmascript)");
;
;
;
const sourceLabels = {
    home: 'Trang chủ',
    roadmaps: 'Danh sách lộ trình',
    classes: 'Lớp học Toán',
    materials: 'Tài liệu',
    practice: 'Luyện đề',
    teachers: 'Giáo viên đồng hành'
};
function readDetailRoute(params) {
    return {
        kind: params.get('loai') ?? '',
        id: params.get('id') ?? '',
        source: Object.hasOwn(sourceLabels, params.get('tu') ?? '') ? params.get('tu') : 'home',
        sourcePage: params.get('trang') === '2' ? 2 : 1
    };
}
const topicIds = [
    'so-dai-so',
    'hinh-hoc',
    'thong-ke-xac-suat',
    'toan-cuoc-song'
];
const topicNames = [
    'Số và Đại số',
    'Hình học và Đo lường',
    'Thống kê và Xác suất',
    'Toán trong cuộc sống'
];
const previewNotice = 'Nội dung minh họa, chờ giáo viên thẩm định. Chưa có học liệu, đăng ký hoặc hoạt động học tập thật trên trang này.';
const serviceDetails = {
    chocon: {
        title: 'Kết nối cùng chocon',
        eyebrow: 'KHÁM PHÁ HỆ SINH THÁI',
        summary: 'Hệ thống quản lý, giám sát, giáo dục con sử dụng máy tính và bảo vệ con trên môi trường mạng.',
        image: '/assets/toan/family-v3.webp',
        imageAlt: 'Minh họa gia đình cùng tìm hiểu việc học',
        notice: 'Chưa có đường dẫn chocon chính thức được xác nhận. Trang này không chuyển tới website ngoài, không đăng nhập và không chia sẻ dữ liệu.',
        sections: [
            {
                title: 'Trạng thái liên kết',
                body: 'Lối tắt chocon đã có trong bố cục. Quản trị viên cần cung cấp và xác minh địa chỉ chính thức trước khi bật điều hướng.'
            },
            {
                title: 'Định hướng đồng hành cùng gia đình',
                body: 'Theo mô tả do chủ hệ thống cung cấp, chocon hướng đến việc quản lý, giám sát, giáo dục con sử dụng máy tính và bảo vệ con trên môi trường mạng. Việc tích hợp, quyền truy cập và cách vận hành thực tế chưa được kiểm chứng trong bản xem trước.'
            }
        ],
        destination: 'roadmaps',
        destinationLabel: 'Khám phá lộ trình Toán'
    },
    sat: {
        title: 'Ôn luyện Tiếng Anh',
        eyebrow: 'MỞ RỘNG CƠ HỘI',
        summary: 'Mở ra cơ hội giao tiếp quốc tế và ôn thi chuyên.',
        image: '/assets/toan/exam-v3.webp',
        imageAlt: 'Minh họa học sinh ôn tập và mở rộng cơ hội học tập',
        notice: 'Mục SAT trước đây đã được thay bằng Ôn luyện Tiếng Anh. Liên kết chính thức do chủ hệ thống cung cấp; tính năng và chương trình trên website ngoài chưa được kiểm chứng từ trang này.',
        sections: [
            {
                title: 'Hướng học tập mở rộng',
                body: 'Tìm hiểu định hướng ôn luyện Tiếng Anh cho giao tiếp quốc tế và ôn thi chuyên tại website Tiếng Anh Ôn Thi 360.'
            },
            {
                title: 'Trước khi chuyển website',
                body: 'Liên kết mở trong tab mới. Trang Toán không tự đăng nhập, gửi thông tin cá nhân hoặc đăng ký dịch vụ ở website Tiếng Anh.'
            }
        ],
        externalUrl: 'https://tienganh.onthi360.vn',
        destination: 'roadmaps',
        destinationLabel: 'Xem lộ trình Toán'
    },
    companion: {
        title: 'Đồng hành cùng con học Toán',
        eyebrow: 'DÀNH CHO PHỤ HUYNH',
        summary: 'Lắng nghe cách con nghĩ, cùng chọn một mục tiêu nhỏ và ghi nhận nỗ lực mỗi ngày.',
        image: '/assets/toan/family-v3.webp',
        imageAlt: 'Minh họa phụ huynh cùng con học Toán',
        notice: 'Các gợi ý dưới đây chỉ là nội dung tham khảo. Không gian phụ huynh chưa kết nối tài khoản, lịch học hay dữ liệu học sinh thật.',
        sections: [
            {
                title: 'Bắt đầu từ một cuộc trò chuyện',
                body: 'Có thể hỏi con đang học chủ đề nào, phần nào con thấy dễ và điều gì con muốn được giải thích thêm. Đây là gợi ý đồng hành, không phải đánh giá năng lực.'
            },
            {
                title: 'Chọn mục tiêu vừa sức',
                body: 'Cùng xem một lộ trình theo lớp hiện tại, chọn một bước để tìm hiểu và dành thời gian nghe con tự giải thích cách làm.'
            },
            {
                title: 'Không gian phụ huynh đang chuẩn bị',
                body: 'Mục tiêu học tập, lịch học và phản hồi chỉ có thể hiển thị khi có dữ liệu thật và liên kết giám hộ hợp lệ. Bản xem trước không thực hiện liên kết này.'
            }
        ],
        destination: 'roadmaps',
        destinationLabel: 'Cùng con xem lộ trình'
    },
    consultation: {
        title: 'Chuẩn bị kết nối tư vấn',
        eyebrow: 'LẮNG NGHE VÀ ĐỊNH HƯỚNG',
        summary: 'Tìm hiểu thông tin cần chuẩn bị trước khi trao đổi về lộ trình học Toán.',
        image: '/assets/toan/consultation-v3.webp',
        imageAlt: 'Minh họa tư vấn viên hỗ trợ định hướng học tập',
        notice: 'Kênh tư vấn chính thức chưa được cấu hình. Trang này không nhận yêu cầu, không thu thập thông tin cá nhân và không gửi tin nhắn.',
        sections: [
            {
                title: 'Điều bạn muốn được giải đáp',
                body: 'Có thể chuẩn bị lớp đang học, chủ đề cần tìm hiểu và mục tiêu học tập. Không nhập hoặc gửi thông tin cá nhân thật vào bản xem trước.'
            },
            {
                title: 'Các kênh liên hệ',
                body: 'Điện thoại, email, địa chỉ và giờ hỗ trợ đang chờ xác minh. Trang Liên hệ hiển thị trạng thái hiện tại, không cung cấp kênh liên hệ giả.'
            },
            {
                title: 'Trong thời gian chờ',
                body: 'Bạn có thể xem lộ trình và các danh mục minh họa để hình dung cấu trúc học tập. Những nội dung này chưa thay thế tư vấn chuyên môn hoặc dịch vụ đã phát hành.'
            }
        ],
        destination: 'contact',
        destinationLabel: 'Xem thông tin liên hệ'
    }
};
function getDetailContent(kind, id, grade) {
    if (kind === 'roadmap') {
        const roadmap = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoadmaps"])(grade),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtraRoadmaps"])(grade)
        ].find((r)=>r.id === id);
        if (!roadmap) return null;
        return {
            title: roadmap.title,
            eyebrow: 'LỘ TRÌNH HỌC TOÁN',
            summary: roadmap.summary,
            image: roadmap.icon === 'shapes' ? '/assets/toan/geometry-v3.webp' : roadmap.icon === 'target' ? '/assets/toan/exam-v3.webp' : '/assets/toan/foundation-v6.png',
            imageAlt: 'Minh họa hành trình khám phá và học Toán',
            notice: previewNotice,
            steps: roadmap.steps,
            stepTitle: 'Từng bước trên hành trình',
            sections: [
                {
                    title: 'Cách tham khảo lộ trình',
                    body: 'Đọc mục tiêu và các bước bên dưới, đối chiếu với nội dung đang học. Có thể trao đổi với giáo viên để lựa chọn điểm bắt đầu phù hợp.'
                },
                {
                    title: 'Học liệu và tiến độ',
                    body: 'Bài học, bài tập, thời lượng và tiêu chí hoàn thành chưa được công bố. Trang không ghi nhận tiến độ hoặc kết quả học tập.'
                }
            ],
            destination: 'roadmaps',
            destinationLabel: 'Xem tất cả lộ trình',
            context: `Lớp ${grade} · Lộ trình minh họa`
        };
    }
    if ([
        'classes',
        'materials',
        'practice'
    ].includes(kind)) {
        const card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCatalogCards"])(kind, grade).find((c)=>c.id === id);
        if (!card) return null;
        const destinationLabel = {
            classes: 'Xem các lớp học mẫu',
            materials: 'Xem danh mục tài liệu',
            practice: 'Xem danh mục luyện đề'
        }[kind];
        return {
            title: card.title,
            eyebrow: card.label,
            summary: card.summary,
            image: card.image,
            imageAlt: `Minh họa ${kind === 'classes' ? 'lớp học' : kind === 'materials' ? 'tài liệu' : 'luyện đề'} Toán`,
            notice: card.detail,
            steps: card.points,
            stepTitle: 'Cấu trúc nội dung minh họa',
            sections: [
                {
                    title: 'Phạm vi bản xem trước',
                    body: card.detail
                },
                {
                    title: 'Trước khi đưa vào sử dụng',
                    body: 'Nội dung chuyên môn, người phụ trách, điều kiện sử dụng và học liệu cần được xác minh và phê duyệt. Các thông tin tổ chức bên cạnh chỉ là dữ liệu mẫu, không phải dịch vụ đang cung cấp.'
                }
            ],
            catalogIndex: card.index,
            destination: kind,
            destinationLabel,
            context: `Lớp ${grade} · Dữ liệu mẫu`
        };
    }
    if (kind === 'teachers') {
        const teacher = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$teachers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teachers"].find((t)=>t.id === id);
        if (!teacher) return null;
        return {
            title: teacher.name,
            eyebrow: teacher.sample ? 'HỒ SƠ GIÁO VIÊN MINH HỌA' : 'GIÁO VIÊN ĐỒNG HÀNH',
            summary: teacher.role,
            image: '/assets/toan/educator-v3.webp',
            imageAlt: 'Hình giáo viên minh họa, không phải chân dung người trong hồ sơ',
            notice: teacher.sample ? 'Hồ sơ giả định để xem bố cục, không đại diện cho giáo viên thật. Ảnh không phải chân dung người trong hồ sơ.' : 'Tên, vai trò và đơn vị do chủ hệ thống cung cấp. Ảnh chỉ là minh họa, không phải chân dung cô Nguyễn Thị Diện.',
            sections: [
                {
                    title: 'Đơn vị quản lý',
                    body: teacher.unit
                },
                {
                    title: 'Thông tin hồ sơ',
                    body: teacher.sample ? 'Đây là ví dụ minh họa cách giới thiệu giáo viên đồng hành. Danh tính, bằng cấp, kinh nghiệm và thông tin liên hệ thực chưa được công bố.' : 'Cô Nguyễn Thị Diện là chuyên gia, chủ Trung tâm Bồi dưỡng học sinh giỏi Vĩnh Xuân theo thông tin chủ hệ thống cung cấp. Tiểu sử chi tiết, bằng cấp và kinh nghiệm chờ xác minh trước khi công bố.'
                },
                {
                    title: 'Lớp phụ trách',
                    body: 'Chưa có danh sách lớp đã xác minh gắn với hồ sơ này. Các lớp trong danh mục chung là minh họa, không phải lớp của giáo viên trong hồ sơ.'
                },
                {
                    title: 'Thành tích và đánh giá',
                    body: 'Chưa có dữ liệu được xác minh. Không hiển thị số năm kinh nghiệm, số học sinh, kết quả hoặc đánh giá giả.'
                }
            ],
            destination: 'teachers',
            destinationLabel: 'Xem danh sách giáo viên',
            context: 'Hồ sơ đang hoàn thiện'
        };
    }
    if (kind === 'topic') {
        const i = topicIds.indexOf(id);
        if (i < 0) return null;
        return {
            title: topicNames[i],
            eyebrow: 'CHUYÊN ĐỀ TOÁN',
            summary: `Tìm hiểu mạch nội dung ${topicNames[i].toLowerCase()} trong ngữ cảnh lớp ${grade}.`,
            image: i === 1 ? '/assets/toan/geometry-v3.webp' : '/assets/toan/books-detail.webp',
            imageAlt: 'Minh họa sách và kiến thức Toán học',
            notice: previewNotice,
            sections: [
                {
                    title: 'Nội dung theo lớp đang chọn',
                    body: `Các học liệu ${topicNames[i].toLowerCase()} cần được biên tập và lọc theo chương trình lớp ${grade}. Bản xem trước chưa có danh sách bài học thật.`
                },
                {
                    title: 'Chọn bước tiếp theo',
                    body: 'Tham khảo các lộ trình theo lớp để hình dung mục tiêu và trình tự. Không coi danh mục minh họa là chương trình học đã được phê duyệt.'
                }
            ],
            destination: 'roadmaps',
            destinationLabel: 'Xem lộ trình theo lớp',
            context: `Lớp ${grade} · Chuyên đề minh họa`
        };
    }
    if (kind === 'guide' && Object.hasOwn(serviceDetails, id)) return {
        ...serviceDetails[id],
        context: 'Thông tin đang chuẩn bị'
    };
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/roadmaps.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExtraRoadmaps",
    ()=>getExtraRoadmaps,
    "getRoadmaps",
    ()=>getRoadmaps,
    "gradeOptions",
    ()=>gradeOptions,
    "parseGrade",
    ()=>parseGrade
]);
const topics = {
    1: [
        'Làm quen với số và phép tính',
        'Quan sát hình và đo độ dài',
        'Giải toán qua tình huống gần gũi'
    ],
    2: [
        'Cộng trừ, nhân chia cơ bản',
        'Đo lường và hình học trực quan',
        'Rèn giải toán có lời văn'
    ],
    3: [
        'Nhân chia và các số tự nhiên',
        'Phân số qua hình ảnh',
        'Giải toán qua từng bước'
    ],
    4: [
        'Số tự nhiên và phân số',
        'Đo lường, hình học và thống kê',
        'Rèn tư duy giải toán lớp 4'
    ],
    5: [
        'Phân số và số thập phân',
        'Giải toán có lời văn',
        'Ôn tập kiến thức Toán lớp 5'
    ],
    6: [
        'Số tự nhiên và số nguyên',
        'Phân số, số thập phân và tỉ số',
        'Hình học trực quan lớp 6'
    ],
    7: [
        'Số hữu tỉ và số thực',
        'Biểu thức đại số và tỉ lệ thức',
        'Hình học và suy luận lớp 7'
    ],
    8: [
        'Đa thức và phân thức đại số',
        'Hình học và lập luận chứng minh',
        'Phương trình và bài toán thực tế'
    ],
    9: [
        'Củng cố nền tảng Toán lớp 9',
        'Rèn kỹ năng hình học lớp 9',
        'Ôn thi vào lớp 10'
    ],
    10: [
        'Mệnh đề, tập hợp và hàm số',
        'Vectơ và hình học tọa độ',
        'Thống kê, xác suất lớp 10'
    ],
    11: [
        'Lượng giác, dãy số và giới hạn',
        'Hình học không gian lớp 11',
        'Đạo hàm và bài toán ứng dụng'
    ],
    12: [
        'Hàm số, đạo hàm và tích phân',
        'Hình học tọa độ trong không gian',
        'Ôn thi tốt nghiệp THPT'
    ]
};
const gradeSteps = {
    5: [
        [
            'Ôn phân số',
            'Tính toán với số thập phân',
            'Vận dụng và tự đánh giá'
        ],
        [
            'Đọc hiểu đề toán',
            'Lập sơ đồ và chọn cách giải',
            'Kiểm tra kết quả'
        ],
        [
            'Hệ thống kiến thức',
            'Luyện theo chủ đề',
            'Tự đánh giá và ôn lại'
        ]
    ],
    9: [
        [
            'Căn thức và biến đổi',
            'Phương trình, hệ phương trình',
            'Hàm số và bài toán vận dụng'
        ],
        [
            'Hệ thức lượng trong tam giác',
            'Đường tròn và góc',
            'Lập luận và trình bày lời giải'
        ],
        [
            'Rà soát kiến thức trọng tâm',
            'Luyện dạng bài theo mục tiêu',
            'Luyện đề và phân tích lỗi sai'
        ]
    ]
};
function getRoadmaps(grade) {
    if (!topics[grade]) return [];
    return topics[grade].map((title, i)=>({
            id: `lop-${grade}-${i + 1}`,
            grade,
            title,
            summary: [
                'Nắm chắc kiến thức, học từng bước và hiểu bản chất.',
                'Kết nối kiến thức, luyện tư duy qua các dạng bài.',
                'Củng cố có hệ thống, tự tin với mục tiêu tiếp theo.'
            ][i],
            steps: gradeSteps[grade]?.[i] ?? [
                'Khởi động và ôn kiến thức',
                'Học chủ đề và luyện kỹ năng',
                'Vận dụng, tự đánh giá và ôn lại'
            ],
            theme: [
                'blue',
                'mint',
                'amber'
            ][i],
            icon: [
                'book',
                'shapes',
                'target'
            ][i]
        }));
}
const gradeOptions = Array.from({
    length: 12
}, (_, i)=>i + 1);
function parseGrade(value) {
    const grade = Number(value);
    return Number.isInteger(grade) && grade >= 1 && grade <= 12 ? grade : 9;
}
function getExtraRoadmaps(grade) {
    const base = getRoadmaps(grade);
    if (!base.length) return [];
    return [
        {
            id: `lop-${grade}-practice`,
            grade,
            title: `Luyện tập chủ động lớp ${grade}`,
            summary: 'Lộ trình mẫu bổ trợ để luyện đều, nhận ra phần chưa vững và ôn lại đúng chỗ.',
            steps: [
                `Chọn chủ đề: ${base[0].title}`,
                'Luyện một nhóm bài vừa sức',
                'Tự giải thích và ghi lại lỗi cần sửa'
            ],
            theme: 'blue',
            icon: 'book'
        },
        {
            id: `lop-${grade}-reasoning`,
            grade,
            title: `Diễn đạt lời giải lớp ${grade}`,
            summary: 'Lộ trình mẫu rèn cách trình bày suy nghĩ và giải thích từng bước rõ ràng.',
            steps: [
                `Quan sát bài học: ${base[1].title}`,
                'Nêu dữ kiện và ý tưởng bằng lời',
                'Viết các bước giải và kiểm tra kết luận'
            ],
            theme: 'mint',
            icon: 'shapes'
        },
        {
            id: `lop-${grade}-review`,
            grade,
            title: `Tự ôn tập Toán lớp ${grade}`,
            summary: 'Lộ trình mẫu giúp sắp xếp nội dung đã học thành kế hoạch ôn tập ngắn.',
            steps: [
                `Rà soát mục tiêu: ${base[2].title}`,
                'Chia nội dung thành từng buổi nhỏ',
                'Tự đánh giá và điều chỉnh buổi tiếp theo'
            ],
            theme: 'amber',
            icon: 'target'
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/seo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seoFor",
    ()=>seoFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/details.ts [app-client] (ecmascript)");
;
function seoFor(tab = 'home', grade = 9, page = 1, detail) {
    if (tab === 'detail' || tab === 'not-found') {
        const content = detail && tab === 'detail' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDetailContent"])(detail.kind, detail.id, grade) : null;
        return {
            title: `${content?.title ?? 'Không tìm thấy nội dung'} | Toán Ôn Thi 360`,
            description: content ? `${content.summary} ${content.notice}` : 'Đường dẫn không khớp với nội dung hiện có. Bản xem trước chưa phát hành dịch vụ.'
        };
    }
    const sections = {
        about: [
            'Về Toán Ôn Thi 360',
            'Định hướng học Toán có lộ trình, kết nối học sinh, gia đình và giáo viên.'
        ],
        terms: [
            'Điều khoản sử dụng',
            'Dự thảo khung điều khoản, chưa có hiệu lực; cần xác minh và phê duyệt.'
        ],
        privacy: [
            'Chính sách bảo mật',
            'Khung chính sách đang chờ xác minh hệ thống thực tế, chưa có hiệu lực.'
        ],
        contact: [
            'Liên hệ và hỗ trợ',
            'Hướng dẫn chuẩn bị câu hỏi; kênh hỗ trợ chính thức chưa được cấu hình.'
        ],
        roadmaps: [
            'Danh sách lộ trình Toán',
            'Khám phá các lộ trình học Toán minh họa theo lớp và mục tiêu.'
        ],
        stories: [
            'Câu chuyện đồng hành',
            'Các tình huống minh họa về học sinh, gia đình và giáo viên cùng học Toán.'
        ],
        home: [
            'Lộ trình học Toán',
            'Khám phá lộ trình học Toán, tài liệu và luyện đề cho học sinh, phụ huynh và giáo viên.'
        ],
        classes: [
            'Lớp học Toán',
            'Tìm hiểu các lớp Toán nền tảng, chuyên đề và tư duy theo lớp học.'
        ],
        materials: [
            'Tài liệu Toán',
            'Khám phá sổ tay kiến thức, phiếu bài tập và hướng dẫn học Toán.'
        ],
        practice: [
            'Luyện đề Toán',
            'Khám phá các nhóm đề ôn tập theo chương, tổng hợp và tư duy.'
        ],
        teachers: [
            'Giáo viên đồng hành',
            'Tìm hiểu không gian giáo viên đồng hành cùng học sinh học Toán.'
        ],
        honors: [
            'Bảng vàng thành tích',
            'Xem bố cục bảng vàng theo lớp và tỉnh/thành với dữ liệu minh họa.'
        ],
        login: [
            'Đăng nhập',
            'Giao diện đăng nhập thử nghiệm, chưa kết nối xác thực.'
        ],
        register: [
            'Đăng ký',
            'Giao diện đăng ký thử nghiệm, chưa tạo tài khoản thật.'
        ]
    };
    const entry = sections[tab] ?? sections.home;
    const account = [
        'login',
        'register'
    ].includes(tab);
    const generic = account || [
        'about',
        'terms',
        'privacy',
        'contact'
    ].includes(tab);
    return {
        title: `${entry[0]}${generic ? '' : ` lớp ${grade}`}${page > 1 ? ` · Trang ${page}` : ''} | Toán Ôn Thi 360`,
        description: `${entry[1]} ${account ? 'Không nhập thông tin cá nhân thật.' : 'Bản xem trước minh họa, chưa phát hành dịch vụ.'}`
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/teachers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "teachers",
    ()=>teachers
]);
const teachers = [
    {
        id: 'nguyen-thi-dien',
        name: 'Cô Nguyễn Thị Diện',
        role: 'Chuyên gia · Chủ trung tâm',
        unit: 'Trung tâm Bồi dưỡng học sinh giỏi Vĩnh Xuân',
        expert: true,
        sample: false
    },
    ...Array.from({
        length: 5
    }, (_, i)=>({
            id: `minh-hoa-${String(i + 1).padStart(2, '0')}`,
            name: `Giáo viên minh họa ${String(i + 1).padStart(2, '0')}`,
            role: 'Giáo viên Toán · Hồ sơ mẫu',
            unit: 'Đơn vị quản lý mẫu',
            expert: false,
            sample: true
        }))
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0viy64nv5jh9f._.js.map