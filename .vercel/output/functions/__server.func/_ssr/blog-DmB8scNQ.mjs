import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { t as concierge_default } from "./concierge-C-h4lVrU.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as lounge_default } from "./lounge-DhB-lhZi.mjs";
import { t as chauffeur_default } from "./chauffeur-fJWf6DzA.mjs";
import { t as airport_aerial_default } from "./airport-aerial-BSYlwTeo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-DmB8scNQ.js
var import_jsx_runtime = require_jsx_runtime();
var posts = [
	{
		cat: "Airport Guides",
		title: "Navigating Jomo Kenyatta: A Premium Traveller's Guide",
		img: airport_aerial_default,
		date: "Jun 2026"
	},
	{
		cat: "Executive Travel",
		title: "Why Fast-Track Pays for Itself on Every Business Trip",
		img: lounge_default,
		date: "May 2026"
	},
	{
		cat: "Concierge Insights",
		title: "The Quiet Art of Discretion in Luxury Service",
		img: concierge_default,
		date: "May 2026"
	},
	{
		cat: "Travel Tips",
		title: "Five Things Diplomats Always Pack — and Why",
		img: chauffeur_default,
		date: "Apr 2026"
	},
	{
		cat: "Airport Guides",
		title: "Lagos Airport: What VIP Travellers Need to Know",
		img: airport_aerial_default,
		date: "Apr 2026"
	},
	{
		cat: "Business Travel",
		title: "Building a Corporate Travel Programme that Actually Works",
		img: lounge_default,
		date: "Mar 2026"
	}
];
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "The Altitude Journal",
		title: "Insights from the world of premium travel.",
		image: lounge_default
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
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
