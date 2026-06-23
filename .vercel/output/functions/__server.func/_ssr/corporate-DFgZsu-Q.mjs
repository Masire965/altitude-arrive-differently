import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as lounge_default } from "./lounge-DhB-lhZi.mjs";
import { submitCorporateInquiry } from "./forms-DsoBKP9-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/corporate-DFgZsu-Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var targets = [
	"Corporations",
	"Embassies",
	"NGOs",
	"Event Organisers",
	"Hotels",
	"Law Firms"
];
var features = [
	"Dedicated Account Manager",
	"Faster Booking Channels",
	"Priority 24/7 Support",
	"Monthly Reporting",
	"Consolidated Billing",
	"Custom SLAs",
	"VIP Guest Handling",
	"Executive Travel Management"
];
function Corporate() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Corporate",
			title: "A travel partner your executives can rely on.",
			subtitle: "Programs designed for organisations that move people across borders — without compromising on service.",
			image: lounge_default,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "btn-gold",
				children: "Request Corporate Partnership"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-3 mb-16",
					children: targets.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-5 py-2 border border-border text-sm font-display uppercase tracking-[0.18em]",
						children: t
					}, t))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-16 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4",
							children: "Account Benefits"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-display font-semibold mb-6",
							children: "Everything your team needs, in one account."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed",
							children: "Open a corporate account and gain a single point of contact, transparent monthly billing, and a service standard your guests will remember."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid sm:grid-cols-2 gap-4",
						children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 p-5 bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "text-[color:var(--gold)] mt-0.5 shrink-0",
								size: 20
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: f
							})]
						}, f))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-[color:var(--navy)] text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-semibold",
						children: "Speak to our Corporate Desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/70",
						children: "A senior manager will be in touch within one business day."
					}),
					sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 rounded-none border border-white/10 bg-white/5 p-8 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-white/70 mb-3",
								children: "Thank you"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-display font-semibold",
								children: "Your corporate enquiry has been received."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-white/70",
								children: "A senior manager will be in touch shortly."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: async (e) => {
							e.preventDefault();
							setError(null);
							setIsSubmitting(true);
							try {
								const form = e.currentTarget;
								const formData = new FormData(form);
								await submitCorporateInquiry({ data: {
									companyName: String(formData.get("company") ?? ""),
									fullName: String(formData.get("name") ?? ""),
									email: String(formData.get("email") ?? ""),
									phone: String(formData.get("phone") ?? ""),
									requirements: String(formData.get("requirements") ?? ""),
									sourcePath: window.location.pathname,
									referrer: document.referrer
								} });
								setSent(true);
							} catch (submissionError) {
								setError(submissionError instanceof Error ? submissionError.message : "Unable to submit your enquiry.");
							} finally {
								setIsSubmitting(false);
							}
						},
						className: "mt-10 grid gap-4 md:grid-cols-2 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "company",
								required: true,
								placeholder: "Company",
								className: "bg-white/5 border border-white/10 px-5 py-3.5 outline-none focus:border-[color:var(--gold)]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								required: true,
								placeholder: "Full Name",
								className: "bg-white/5 border border-white/10 px-5 py-3.5 outline-none focus:border-[color:var(--gold)]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "email",
								required: true,
								type: "email",
								placeholder: "Work Email",
								className: "bg-white/5 border border-white/10 px-5 py-3.5 outline-none focus:border-[color:var(--gold)]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "phone",
								required: true,
								placeholder: "Phone",
								className: "bg-white/5 border border-white/10 px-5 py-3.5 outline-none focus:border-[color:var(--gold)]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "requirements",
								placeholder: "Tell us about your requirements",
								rows: 4,
								className: "md:col-span-2 bg-white/5 border border-white/10 px-5 py-3.5 outline-none focus:border-[color:var(--gold)]"
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-red-300 md:col-span-2",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "btn-gold md:col-span-2 justify-self-start",
								disabled: isSubmitting,
								children: isSubmitting ? "Submitting..." : "Submit Enquiry"
							})
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { Corporate as component };
