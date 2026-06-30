import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as chauffer_default } from "./chauffer-D77okBZf.mjs";
import { t as show_around_default } from "./show around-Cywf-tFa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chauffeur-Cno59E-5.js
var import_jsx_runtime = require_jsx_runtime();
var fleet = [
	{
		name: "Solo Traveller Transfer",
		desc: "A comfortable private car with confirmed pick-up details",
		pax: "Up to 3 passengers"
	},
	{
		name: "Family Transfer",
		desc: "Room for luggage, children and a calmer airport handover",
		pax: "Up to 4 passengers"
	},
	{
		name: "Group Transfer",
		desc: "Coordinated arrivals for teams, guests and event groups",
		pax: "Up to 6 passengers"
	},
	{
		name: "Hotel Transfer",
		desc: "Direct airport-to-hotel movement with driver updates",
		pax: "Flexible options"
	}
];
function Chauffeur() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Transfers",
			title: "A safe ride waiting when you arrive.",
			subtitle: "Professional drivers, clear pick-up instructions and a careful handover from the airport officer to your vehicle.",
			image: chauffer_default,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/booking",
				className: "btn-gold",
				children: "Book a Transfer"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20",
						children: [
							"Airport Pick-up",
							"Hotel Transfers",
							"Family Travel",
							"Event Transport"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "card-luxe text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold",
								children: s
							})
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "Transfer Options"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-semibold mb-12",
						children: "The right transfer for your trip."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 md:grid-cols-2",
						children: fleet.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden h-[360px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: i % 2 ? show_around_default : chauffer_default,
									alt: v.name,
									loading: "lazy",
									className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-[color:var(--navy)]/30 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-0 p-8 text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-display font-semibold",
											children: v.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-white/70 text-sm mt-1",
											children: v.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[color:var(--gold)] text-xs uppercase tracking-[0.2em] mt-3",
											children: v.pax
										})
									]
								})
							]
						}, v.name))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-secondary text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-display font-semibold",
					children: "Reserve your airport transfer"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/booking",
					className: "btn-gold mt-8",
					children: "Book Now"
				})]
			})
		})
	] });
}
//#endregion
export { Chauffeur as component };
