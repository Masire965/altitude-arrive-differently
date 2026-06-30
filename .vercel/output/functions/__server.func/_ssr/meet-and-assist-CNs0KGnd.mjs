import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { t as Welcome_to_lagos_default } from "./Welcome to lagos-BCf_uKlB.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Handshake, l as Repeat, m as PlaneLanding, p as PlaneTakeoff, r as Users, s as Shield } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/meet-and-assist-CNs0KGnd.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		icon: PlaneLanding,
		title: "Arrival Assistance",
		desc: "Your officer meets you at arrivals, helps with baggage and guides you to your driver or host."
	},
	{
		icon: PlaneTakeoff,
		title: "Departure Assistance",
		desc: "Clear guidance from terminal entrance through check-in, security and the right gate."
	},
	{
		icon: Repeat,
		title: "Transit Assistance",
		desc: "Support between flights so connections feel calm, clear and on time."
	},
	{
		icon: Handshake,
		title: "Meet & Greet",
		desc: "A visible, friendly welcome with your name or a placard so you know exactly who is there for you."
	},
	{
		icon: Users,
		title: "Family Travel Support",
		desc: "Dedicated assistance for families travelling with children, elderly travellers or special requirements."
	},
	{
		icon: Shield,
		title: "Solo Traveller Support",
		desc: "Extra reassurance for anyone arriving alone, with careful handover to the next trusted contact."
	}
];
function MeetAssist() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Meet & Assist",
			title: "A safer, calmer airport arrival.",
			subtitle: "Our airport officers welcome you, guide you through the terminal and stay with you until the next step is clear.",
			image: Welcome_to_lagos_default,
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
						children: "Reserve your airport officer"
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
