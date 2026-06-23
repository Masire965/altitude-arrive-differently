import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as Crown, l as Repeat, m as PlaneLanding, p as PlaneTakeoff, r as Users, s as Shield } from "../_libs/lucide-react.mjs";
import { t as hero_arrival_default } from "./hero-arrival-Cim9cyKJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/meet-and-assist-C5SXmMmO.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		icon: PlaneLanding,
		title: "Arrival Assistance",
		desc: "We greet you at the aircraft door, escort you through priority immigration, collect your baggage and guide you to your transport."
	},
	{
		icon: PlaneTakeoff,
		title: "Departure Assistance",
		desc: "Curbside greeting, expedited check-in, fast track security and personal escort to the lounge or gate."
	},
	{
		icon: Repeat,
		title: "Transit Assistance",
		desc: "Seamless connection handling, lounge access during layovers and gate-to-gate escort."
	},
	{
		icon: Crown,
		title: "VIP Fast Track",
		desc: "Skip the queues. Fast lane immigration and security at every step of your journey."
	},
	{
		icon: Users,
		title: "Family Travel Support",
		desc: "Dedicated assistance for families travelling with children, elderly or special requirements."
	},
	{
		icon: Shield,
		title: "Diplomatic Assistance",
		desc: "Protocol-level handling for diplomatic, governmental and high-profile travellers."
	}
];
function MeetAssist() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Meet & Assist",
			title: "The terminal, made effortless.",
			subtitle: "Our protocol officers handle every checkpoint so you can focus on what matters.",
			image: hero_arrival_default,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/booking",
				className: "btn-gold",
				children: "Book Meet & Assist"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-luxe grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
							className: "text-[color:var(--gold)] mb-5",
							size: 32,
							strokeWidth: 1.2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: it.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground text-sm leading-relaxed",
							children: it.desc
						})
					]
				}, it.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-secondary text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-semibold",
						children: "Reserve your concierge officer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Available 24/7 across NBO, ACC and LOS."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/booking",
						className: "btn-gold mt-8",
						children: "Make a Booking"
					})
				]
			})
		})
	] });
}
//#endregion
export { MeetAssist as component };
