import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as lounge_default } from "./lounge-DhB-lhZi.mjs";
import { t as chauffeur_default } from "./chauffeur-fJWf6DzA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chauffeur-CsGhCXZ-.js
var import_jsx_runtime = require_jsx_runtime();
var fleet = [
	{
		name: "Executive Sedan",
		desc: "Mercedes-Benz E-Class or equivalent",
		pax: "Up to 3 passengers"
	},
	{
		name: "Luxury Sedan",
		desc: "Mercedes-Benz S-Class or equivalent",
		pax: "Up to 3 passengers"
	},
	{
		name: "Executive SUV",
		desc: "Range Rover, Lexus LX or equivalent",
		pax: "Up to 4 passengers"
	},
	{
		name: "Luxury Van",
		desc: "Mercedes-Benz V-Class or equivalent",
		pax: "Up to 6 passengers"
	}
];
function Chauffeur() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Chauffeur",
			title: "Drive arrangements, elevated.",
			subtitle: "Late-model executive vehicles, professionally trained chauffeurs, and a service standard you can set your watch by.",
			image: chauffeur_default,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/booking",
				className: "btn-gold",
				children: "Book a Chauffeur"
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
							"Airport Transfers",
							"Executive Vehicles",
							"Hotel Transfers",
							"Event Transportation"
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
						children: "Our Fleet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-semibold mb-12",
						children: "A vehicle for every occasion."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 md:grid-cols-2",
						children: fleet.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden h-[360px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: i % 2 ? lounge_default : chauffeur_default,
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
					children: "Reserve your chauffeur"
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
