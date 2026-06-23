import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { d as Plus, g as Minus } from "../_libs/lucide-react.mjs";
import { t as lounge_default } from "./lounge-DhB-lhZi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-BpPim0Wq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faqs = [
	{
		q: "How is pricing structured?",
		a: "Each service is priced based on the airport, level of assistance and number of passengers. We provide transparent per-service quotes and bespoke corporate rates for accounts."
	},
	{
		q: "How do you access restricted airport areas?",
		a: "Our protocol officers are accredited and badged for airside access at every airport we operate, allowing us to greet you at the aircraft door where permitted."
	},
	{
		q: "What does Fast Track include?",
		a: "Fast Track gives you expedited immigration, security and customs clearance through dedicated VIP lanes — saving an average of 45+ minutes."
	},
	{
		q: "What if my flight is delayed?",
		a: "Our concierge desk monitors flights in real time and adjusts officer scheduling. There is no additional fee for normal delays."
	},
	{
		q: "What is your cancellation policy?",
		a: "Cancellations made more than 12 hours before service are fully refundable. Within 12 hours, a 50% fee may apply."
	},
	{
		q: "How do I open a corporate account?",
		a: "Visit our Corporate page or contact us directly. Onboarding typically takes 2–3 business days and includes a dedicated account manager."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "FAQ",
		title: "Frequently asked questions.",
		image: lounge_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe max-w-3xl",
			children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(open === i ? null : i),
					className: "w-full flex items-center justify-between py-6 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-semibold text-lg",
						children: f.q
					}), open === i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "text-[color:var(--gold)]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "text-[color:var(--gold)]" })]
				}), open === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pb-6 text-muted-foreground leading-relaxed animate-fade-up",
					children: f.a
				})]
			}, f.q))
		})
	})] });
}
//#endregion
export { FAQ as component };
