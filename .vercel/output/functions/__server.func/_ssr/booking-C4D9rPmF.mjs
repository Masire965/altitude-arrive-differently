import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-CqT7v_su.mjs";
import { D as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as ARRIVAL_IMG_default } from "./ARRIVAL IMG-qZj4EvCr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-C4D9rPmF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Booking() {
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Confirmed",
		title: "Your request is received.",
		image: ARRIVAL_IMG_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe max-w-xl text-center card-luxe",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "text-[color:var(--gold)] mx-auto mb-6",
					size: 48,
					strokeWidth: 1.2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3",
					children: "Booking Reference"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-semibold tracking-widest",
					children: submitted
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted-foreground",
					children: "A member of our team will be in touch shortly to confirm every detail. You will also receive WhatsApp updates leading up to your service."
				})
			]
		})
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Book",
		title: "Confirm your travel support.",
		subtitle: "Tell us about your travel and we will prepare the safest, clearest arrival plan.",
		image: ARRIVAL_IMG_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: async (e) => {
					e.preventDefault();
					setError(null);
					setIsSubmitting(true);
					try {
						const form = e.currentTarget;
						const formData = new FormData(form);
						const { submitBookingRequest } = await import("./forms-DsoBKP9-.mjs");
						setSubmitted((await submitBookingRequest({ data: {
							fullName: String(formData.get("name") ?? ""),
							email: String(formData.get("email") ?? ""),
							phone: String(formData.get("phone") ?? ""),
							nationality: String(formData.get("nationality") ?? ""),
							airline: String(formData.get("airline") ?? ""),
							flightNumber: String(formData.get("flight") ?? ""),
							arrivalAirport: String(formData.get("arrival") ?? ""),
							departureAirport: String(formData.get("departure") ?? ""),
							travelDate: String(formData.get("date") ?? ""),
							travelTime: String(formData.get("time") ?? ""),
							serviceType: String(formData.get("service") ?? ""),
							additionalNotes: String(formData.get("notes") ?? ""),
							sourcePath: window.location.pathname,
							referrer: document.referrer
						} })).reference);
						window.scrollTo({
							top: 0,
							behavior: "smooth"
						});
					} catch (submissionError) {
						setError(submissionError instanceof Error ? submissionError.message : "Unable to submit your request.");
					} finally {
						setIsSubmitting(false);
					}
				},
				className: "space-y-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Passenger Information",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full Name",
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
								label: "Phone (with country code)",
								name: "phone",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Nationality",
								name: "nationality"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Flight Information",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Airline",
								name: "airline",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Flight Number",
								name: "flight",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								label: "Arrival Airport",
								name: "arrival",
								options: [
									"Nairobi (NBO)",
									"Accra (ACC)",
									"Lagos (LOS)"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								label: "Departure Airport",
								name: "departure",
								options: [
									"Nairobi (NBO)",
									"Accra (ACC)",
									"Lagos (LOS)",
									"Other"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Date",
								name: "date",
								type: "date",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Time",
								name: "time",
								type: "time",
								required: true
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Service Required",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: "Service Type",
							name: "service",
							options: [
								"Arrival Assistance",
								"Departure Assistance",
								"Transit Assistance",
								"Airport Transfer",
								"Concierge",
								"Corporate"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-display",
								children: "Additional Notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "notes",
								rows: 4,
								className: "w-full bg-background border border-border focus:border-[color:var(--gold)] outline-none px-4 py-3"
							})]
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-red-600",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "btn-gold w-full md:w-auto",
						disabled: isSubmitting,
						children: isSubmitting ? "Submitting..." : "Confirm Request"
					})
				]
			})
		})
	})] });
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "eyebrow mb-2",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-t border-border pt-6 grid md:grid-cols-2 gap-5",
		children
	})] });
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
function Select({ label, name, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-display",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		name,
		className: "w-full bg-background border border-border focus:border-[color:var(--gold)] outline-none px-4 py-3",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
	})] });
}
//#endregion
export { Booking as component };
