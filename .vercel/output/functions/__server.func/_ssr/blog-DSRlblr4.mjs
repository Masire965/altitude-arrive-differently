import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { t as Welcome_to_lagos_default } from "./Welcome to lagos-BCf_uKlB.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as chauffer_default } from "./chauffer-D77okBZf.mjs";
import { t as show_around_default } from "./show around-Cywf-tFa.mjs";
import { t as Arrivees_default } from "./Arrivees-8d82UAVC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-DSRlblr4.js
var import_jsx_runtime = require_jsx_runtime();
var posts = [
	{
		cat: "Airport Guides",
		title: "Navigating Jomo Kenyatta with Confidence",
		img: Arrivees_default,
		date: "Jun 2026"
	},
	{
		cat: "Arrival Tips",
		title: "What to Expect When Someone Meets You at Arrivals",
		img: Welcome_to_lagos_default,
		date: "May 2026"
	},
	{
		cat: "Travel Safety",
		title: "How Solo Travellers Can Feel Safer After Landing",
		img: show_around_default,
		date: "May 2026"
	},
	{
		cat: "Transfers",
		title: "Choosing a Reliable Airport Pick-up",
		img: chauffer_default,
		date: "Apr 2026"
	},
	{
		cat: "Airport Guides",
		title: "Lagos Airport: Arrival Tips for Everyday Travellers",
		img: Arrivees_default,
		date: "Apr 2026"
	},
	{
		cat: "Business Travel",
		title: "Building a Travel Program People Can Trust",
		img: show_around_default,
		date: "Mar 2026"
	}
];
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "The Altitude Journal",
		title: "Practical guidance for safer travel.",
		image: show_around_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe grid gap-10 md:grid-cols-2 lg:grid-cols-3",
			children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group cursor-pointer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-[280px] overflow-hidden mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.title,
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[color:var(--gold)]",
								children: p.cat
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "|" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.date })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-display font-semibold group-hover:text-[color:var(--gold)] transition-colors leading-tight",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "link-gold mt-5",
						children: ["Read article ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})
				]
			}, p.title))
		})
	})] });
}
//#endregion
export { Blog as component };
