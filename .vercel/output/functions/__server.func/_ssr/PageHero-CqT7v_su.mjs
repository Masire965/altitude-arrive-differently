import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-CqT7v_su.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, subtitle, image, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[color:var(--navy)]",
		children: [image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: "",
			className: "absolute inset-0 h-full w-full object-cover opacity-30"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[color:var(--navy)]/80 via-[color:var(--navy)]/70 to-[color:var(--navy)]" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe relative z-10 max-w-4xl",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow !text-white/70",
						children: eyebrow
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-white text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.05]",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed",
					children: subtitle
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children
				})
			]
		})]
	});
}
//#endregion
export { PageHero as t };
