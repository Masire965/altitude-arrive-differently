import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { t as concierge_default } from "./concierge-C-h4lVrU.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as Calendar, i as UserCheck, n as Utensils, o as Sparkles, x as Hotel, y as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/concierge-Bs0mroqK.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		icon: Utensils,
		title: "Restaurant Reservations",
		desc: "Tables at sought-after establishments — even when fully booked."
	},
	{
		icon: Hotel,
		title: "Hotel Bookings",
		desc: "Preferred rates and upgrades at premium properties."
	},
	{
		icon: MapPin,
		title: "Travel Coordination",
		desc: "End-to-end itinerary planning and logistics."
	},
	{
		icon: Calendar,
		title: "Event Planning Support",
		desc: "From intimate dinners to corporate gatherings."
	},
	{
		icon: Sparkles,
		title: "VIP Experiences",
		desc: "Curated cultural, culinary and bespoke experiences."
	},
	{
		icon: UserCheck,
		title: "Personal Assistance",
		desc: "Discreet, on-demand support for any request."
	}
];
function Concierge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Concierge",
		title: "The art of getting things done — quietly.",
		subtitle: "From a last-minute reservation to a fully orchestrated week, our concierge desk is at your service.",
		image: concierge_default,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/contact",
			className: "btn-gold",
			children: "Request a Service"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3",
			children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-background p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
						className: "text-[color:var(--gold)] mb-5",
						size: 28,
						strokeWidth: 1.2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold text-lg",
						children: it.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground leading-relaxed",
						children: it.desc
					})
				]
			}, it.title))
		})
	})] });
}
//#endregion
export { Concierge as component };
