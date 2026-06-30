import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { a as Star, u as Quote } from "../_libs/lucide-react.mjs";
import { t as ARRIVAL_IMG_default } from "./ARRIVAL IMG-qZj4EvCr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-D-PBleW3.js
var import_jsx_runtime = require_jsx_runtime();
var t = [
	{
		name: "Amara Okafor",
		role: "Solo Traveller",
		co: "Lagos Arrival",
		q: "I felt calm as soon as I saw my name at arrivals. The officer stayed with me until my driver arrived."
	},
	{
		name: "Njeri W.",
		role: "Parent",
		co: "Family Trip",
		q: "Travelling with children was much easier. We had someone kind guiding us through each step."
	},
	{
		name: "Daniel Mensah",
		role: "Frequent Traveller",
		co: "Business Trip",
		q: "Simple, clear and reliable. They made a busy airport feel manageable after a long flight."
	},
	{
		name: "Aisha B.",
		role: "First-time Visitor",
		co: "Accra Arrival",
		q: "I knew exactly who was meeting me and where I was going next. That made all the difference."
	},
	{
		name: "Kofi A.",
		role: "Event Guest",
		co: "Group Travel",
		q: "Our group was received and directed quickly. It felt organised without being stressful."
	},
	{
		name: "Miriam S.",
		role: "Solo Traveller",
		co: "Nairobi Arrival",
		q: "The WhatsApp updates and airport handover helped me feel safe from landing to pick-up."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Testimonials",
		title: "In the words of travellers we support.",
		image: ARRIVAL_IMG_default
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
