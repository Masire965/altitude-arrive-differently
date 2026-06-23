import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { _ as MessageCircle, b as Mail, h as Phone, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as lounge_default } from "./lounge-DhB-lhZi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DabPho3c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Speak with our concierge desk.",
			subtitle: "We respond within minutes — at any hour, in any time zone.",
			image: lounge_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe grid lg:grid-cols-3 gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-1 space-y-8",
					children: [
						{
							icon: Phone,
							label: "Phone",
							value: "+254 700 000 000"
						},
						{
							icon: Mail,
							label: "Email",
							value: "concierge@altitudeacs.com"
						},
						{
							icon: MessageCircle,
							label: "WhatsApp",
							value: "+254 700 000 000"
						},
						{
							icon: MapPin,
							label: "Hubs",
							value: "Nairobi · Accra · Lagos"
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-11 w-11 items-center justify-center border border-[color:var(--gold)]/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
								className: "text-[color:var(--gold)]",
								size: 18
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display",
							children: c.value
						})] })]
					}, c.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-luxe text-center py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-3",
								children: "Thank you"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-display font-semibold",
								children: "Your message has been received."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground",
								children: "A senior concierge will respond shortly."
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
								const { submitContactInquiry } = await import("./forms-DsoBKP9-.mjs");
								await submitContactInquiry({ data: {
									fullName: String(formData.get("name") ?? ""),
									email: String(formData.get("email") ?? ""),
									phone: String(formData.get("phone") ?? ""),
									subject: String(formData.get("subject") ?? ""),
									message: String(formData.get("message") ?? ""),
									sourcePath: window.location.pathname,
									referrer: document.referrer
								} });
								setSent(true);
							} catch (submissionError) {
								setError(submissionError instanceof Error ? submissionError.message : "Unable to send your message.");
							} finally {
								setIsSubmitting(false);
							}
						},
						className: "grid gap-5 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								name: "phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Subject",
								name: "subject"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-display",
									children: "Message *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									rows: 6,
									required: true,
									className: "w-full bg-background border border-border focus:border-[color:var(--gold)] outline-none px-4 py-3"
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-red-600 md:col-span-2",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "btn-gold md:col-span-2 justify-self-start",
								disabled: isSubmitting,
								children: isSubmitting ? "Sending..." : "Send Message"
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "h-[400px] relative bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Office Location",
				className: "absolute inset-0 h-full w-full grayscale contrast-110",
				src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.30015534118!2d36.7820745!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNairobi!5e0!3m2!1sen!2sus!4v1700000000000",
				loading: "lazy"
			})
		})
	] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-display",
		children: [label, required && " *"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "w-full bg-background border border-border focus:border-[color:var(--gold)] outline-none px-4 py-3"
	})] });
}
//#endregion
export { Contact as component };
