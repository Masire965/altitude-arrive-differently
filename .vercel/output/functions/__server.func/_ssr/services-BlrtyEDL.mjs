import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as hero_arrival_default } from "./hero-arrival-Cim9cyKJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BlrtyEDL.js
var import_jsx_runtime = require_jsx_runtime();
var groups = [
	{
		title: "Airport Meet & Assist",
		items: [
			"Arrival Assistance",
			"Departure Assistance",
			"Transit Assistance",
			"VIP Fast Track"
		],
		to: "/meet-and-assist"
	},
	{
		title: "Airport Protocol",
		items: [
			"Diplomatic Protocol",
			"VIP Lane Access",
			"Lounge Coordination",
			"Family Travel Support"
		],
		to: "/meet-and-assist"
	},
	{
		title: "Concierge Services",
		items: [
			"Restaurant Reservations",
			"Hotel Bookings",
			"Travel Coordination",
			"Personal Assistance"
		],
		to: "/concierge"
	},
	{
		title: "Corporate Travel Support",
		items: [
			"Corporate Accounts",
			"Executive Travel Mgmt",
			"Monthly Billing",
			"Dedicated Concierge Managers"
		],
		to: "/corporate"
	},
	{
		title: "Chauffeur Services",
		items: [
			"Executive Transfers",
			"Airport Transfers",
			"Hotel Transfers",
			"Event Transportation"
		],
		to: "/chauffeur"
	},
	{
		title: "Event Guest Management",
		items: [
			"Delegation Handling",
			"Summit Coordination",
			"Group Transfers",
			"On-site Concierge"
		],
		to: "/corporate"
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "Every detail. Every journey. Considered.",
			subtitle: "From the moment you confirm your itinerary to the moment you step into your destination — Altitude orchestrates every detail.",
			image: hero_arrival_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-luxe grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-luxe flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-display font-semibold mb-5",
							children: g.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 mb-8 flex-1",
							children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-sm text-muted-foreground flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1 w-3 bg-[color:var(--gold)]" }), it]
							}, it))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: g.to,
							className: "link-gold",
							children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						})
					]
				}, g.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-[color:var(--navy)] text-white text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-semibold",
						children: "Ready to book?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/70",
						children: "Complete a concierge request in under two minutes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/booking",
						className: "btn-gold mt-8",
						children: "Book Now"
					})
				]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
