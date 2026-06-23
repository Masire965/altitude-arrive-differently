import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { t as concierge_default } from "./concierge-C-h4lVrU.mjs";
import { a as Star, u as Quote } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-DjGq5BBH.js
var import_jsx_runtime = require_jsx_runtime();
var t = [
	{
		name: "H.E. Aminata Diallo",
		role: "Diplomatic Mission",
		co: "Permanent Mission",
		q: "From the moment I landed in Nairobi until my departure, every detail was handled with grace. Truly world-class service."
	},
	{
		name: "James Okafor",
		role: "CEO",
		co: "Meridian Capital",
		q: "Altitude has become our standard for executive travel across West Africa. Reliability and discretion in equal measure."
	},
	{
		name: "Sofia Rahman",
		role: "International Counsel",
		co: "Bennett & Vale LLP",
		q: "I have used premium services in 40+ countries. ACS is among the very best — unobtrusive, exact, exceptional."
	},
	{
		name: "Dr. Kwame Mensah",
		role: "Board Chair",
		co: "Pan-African Health Initiative",
		q: "Our delegation moved through three cities in five days without a single hiccup. That is rare anywhere in the world."
	},
	{
		name: "Ana Costa",
		role: "Managing Partner",
		co: "Atlantic Ventures",
		q: "The chauffeur arrived three minutes early, every single time. That, alone, is worth it."
	},
	{
		name: "Tariq Hassan",
		role: "Family Office",
		co: "Private",
		q: "We trust them with our family. There is no higher compliment we can pay."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Testimonials",
		title: "In the words of those we serve.",
		image: concierge_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe grid gap-8 md:grid-cols-2",
			children: t.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "card-luxe relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
						className: "text-[color:var(--gold)]/20 absolute top-6 right-6",
						size: 48
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 mb-4",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
							size: 14,
							className: "fill-[color:var(--gold)] text-[color:var(--gold)]"
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "text-lg leading-relaxed font-light",
						children: [
							"\"",
							c.q,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-8 pt-6 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm text-muted-foreground",
							children: [
								c.role,
								", ",
								c.co
							]
						})]
					})
				]
			}, c.name))
		})
	})] });
}
//#endregion
export { Testimonials as component };
