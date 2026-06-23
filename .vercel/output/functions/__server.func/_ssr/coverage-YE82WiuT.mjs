import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Plane } from "../_libs/lucide-react.mjs";
import { t as airport_aerial_default } from "./airport-aerial-BSYlwTeo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coverage-YE82WiuT.js
var import_jsx_runtime = require_jsx_runtime();
var countries = [
	{
		country: "Kenya",
		flag: "KE",
		airport: "Jomo Kenyatta International Airport (NBO)",
		city: "Nairobi",
		blurb: "Premium meet & assist, fast-track immigration and chauffeur services at Kenya's largest international gateway — serving East Africa's commercial capital.",
		keywords: [
			"Airport Meet and Assist Nairobi",
			"Nairobi Airport Concierge",
			"VIP Airport Services Kenya"
		]
	},
	{
		country: "Ghana",
		flag: "GH",
		airport: "Kotoka International Airport (ACC)",
		city: "Accra",
		blurb: "VIP concierge handling at West Africa's most welcoming hub — protocol services, fast track and executive transfers tailored to diplomatic and corporate travellers.",
		keywords: [
			"Airport Concierge Accra",
			"Airport Concierge Ghana",
			"VIP Airport Services Ghana"
		]
	},
	{
		country: "Nigeria",
		flag: "NG",
		airport: "Murtala Muhammed International Airport (LOS)",
		city: "Lagos",
		blurb: "Reliable, discreet concierge support at one of Africa's busiest airports — designed to remove the friction from arrival and departure in Lagos.",
		keywords: [
			"Airport Concierge Lagos",
			"Airport Concierge Nigeria",
			"VIP Airport Services Nigeria"
		]
	}
];
function Coverage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Coverage",
		title: "Three nations. One uncompromising standard.",
		subtitle: "Operating across East and West Africa's most important international gateways.",
		image: airport_aerial_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 space-y-24",
		children: countries.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: i % 2 ? "lg:order-2" : "",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[color:var(--gold)] text-xs tracking-[0.3em]",
								children: c.flag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: c.country
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-semibold mb-2",
						children: c.city
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mb-6",
						children: c.airport
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground leading-relaxed",
						children: c.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: c.keywords.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs px-3 py-1.5 bg-secondary text-muted-foreground",
							children: k
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/booking",
						className: "link-gold mt-8 inline-flex",
						children: ["Book in ", c.city]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[420px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: airport_aerial_default,
						alt: c.airport,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[color:var(--navy)]/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-6 left-6 glass-dark p-5 text-white flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, {
							className: "text-[color:var(--gold)]",
							size: 20
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: c.city
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-white/70 uppercase tracking-[0.2em]",
							children: c.country
						})] })]
					})
				]
			})]
		}, c.country))
	})] });
}
//#endregion
export { Coverage as component };
