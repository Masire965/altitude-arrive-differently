import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Welcome_to_lagos_default } from "./Welcome to lagos-BCf_uKlB.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, E as Clock, S as HeartHandshake, T as Earth, a as Star, c as ShieldCheck, f as Plane, k as Briefcase, o as Sparkles, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as chauffer_default } from "./chauffer-D77okBZf.mjs";
import { t as show_around_default } from "./show around-Cywf-tFa.mjs";
import { t as Arrivees_default } from "./Arrivees-8d82UAVC.mjs";
import { t as ARRIVAL_IMG_default } from "./ARRIVAL IMG-qZj4EvCr.mjs";
import { subscribeNewsletter } from "./forms-DsoBKP9-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-eMbHyy8I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var benefits = [
	{
		icon: HeartHandshake,
		title: "A Friendly Welcome",
		desc: "A trained officer meets you at the airport and stays with you through each step."
	},
	{
		icon: ShieldCheck,
		title: "Safety First",
		desc: "Clear communication, visible identification and careful handover to your next point."
	},
	{
		icon: Plane,
		title: "Airport Guidance",
		desc: "Help with arrivals, departures, transit, baggage and airport directions."
	},
	{
		icon: Clock,
		title: "Here When You Land",
		desc: "Flight monitoring and support for delays, early arrivals and late-night travel."
	},
	{
		icon: Briefcase,
		title: "For Everyday Travel",
		desc: "Support for solo travellers, families, first-time visitors and business trips."
	},
	{
		icon: Earth,
		title: "Regional Coverage",
		desc: "Reliable service across Kenya, Ghana and Nigeria."
	}
];
var services = [
	{
		title: "Airport Meet & Assist",
		desc: "Arrival, departure and transit support with a friendly airport officer.",
		to: "/meet-and-assist",
		img: Welcome_to_lagos_default
	},
	{
		title: "Concierge Services",
		desc: "Reservations, bookings, travel coordination and personal assistance.",
		to: "/concierge",
		img: Welcome_to_lagos_default
	},
	{
		title: "Airport Transfers",
		desc: "Reliable private transfers with professional drivers and clear pick-up details.",
		to: "/chauffeur",
		img: chauffer_default
	},
	{
		title: "Corporate Services",
		desc: "Account-managed travel programs for organisations, teams and embassies.",
		to: "/corporate",
		img: show_around_default
	},
	{
		title: "Airport Guidance",
		desc: "Step-by-step help through the terminal, from baggage to onward transport.",
		to: "/services",
		img: show_around_default
	},
	{
		title: "Group & Family Support",
		desc: "Calm, organised handling for families, teams, guests and special arrivals.",
		to: "/corporate",
		img: Arrivees_default
	}
];
var airports = [
	{
		country: "Kenya",
		code: "NBO",
		name: "Jomo Kenyatta International",
		city: "Nairobi"
	},
	{
		country: "Ghana",
		code: "ACC",
		name: "Kotoka International",
		city: "Accra"
	},
	{
		country: "Nigeria",
		code: "LOS",
		name: "Murtala Muhammed International",
		city: "Lagos"
	}
];
var testimonials = [
	{
		name: "Amara Okafor",
		role: "Solo Traveller",
		quote: "I felt calm as soon as I saw my name at arrivals. The officer stayed with me until my driver arrived."
	},
	{
		name: "Daniel Mensah",
		role: "Frequent Traveller",
		quote: "Simple, clear and reliable. They made a busy airport feel manageable after a long flight."
	},
	{
		name: "Njeri W.",
		role: "Family Trip",
		quote: "Travelling with children was much easier. We had someone kind guiding us through each step."
	}
];
function Home() {
	const [subscribed, setSubscribed] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[100svh] flex items-center overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ARRIVAL_IMG_default,
					alt: "Smiling Black woman arriving safely at a busy African airport",
					className: "absolute inset-0 h-full w-full object-cover",
					width: 1920,
					height: 1280
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[color:var(--navy)]/95 via-[color:var(--navy)]/70 to-[color:var(--navy)]/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-transparent to-[color:var(--navy)]/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-luxe relative z-10 pt-32 pb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl animate-fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow !text-white/80",
									children: "Safe Airport Meet & Assist"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-semibold leading-[0.98] tracking-tight",
								children: [
									"Arrive",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic font-light text-[color:var(--gold)]",
										children: "Safely."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed font-light",
								children: "Friendly airport meet & assist and reliable travel support across Kenya, Ghana and Nigeria, made for everyday travellers who want to feel safe and looked after."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/booking",
									className: "btn-gold",
									children: "Book Meet & Assist"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "btn-outline-light",
									children: "Talk to Us"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-16 flex flex-wrap gap-x-12 gap-y-6 text-white/70",
								children: [
									{
										v: "3",
										l: "Countries"
									},
									{
										v: "24/7",
										l: "Travel Support"
									},
									{
										v: "Safe",
										l: "Meet & Greet"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-3xl text-[color:var(--gold)] font-semibold",
									children: s.v
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.24em] mt-1",
									children: s.l
								})] }, s.l))
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Why Altitude"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl md:text-5xl font-display font-semibold leading-tight",
							children: "Travel support that feels calm, clear and safe."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground text-lg leading-relaxed",
							children: "We help everyday travellers move through busy airports with confidence, especially solo travellers, women, families and first-time visitors."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border",
					children: benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-10 group hover:bg-[color:var(--navy)] transition-all duration-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, {
								className: "text-[color:var(--gold)] mb-6",
								size: 32,
								strokeWidth: 1.2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-display font-semibold group-hover:text-white transition-colors",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground group-hover:text-white/70 transition-colors text-sm leading-relaxed",
								children: b.desc
							})
						]
					}, b.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32 bg-[color:var(--navy)] text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between flex-wrap gap-6 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Featured Services"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl md:text-5xl font-display font-semibold leading-tight",
							children: "Practical help for the moments that matter."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "link-gold",
						children: ["View all services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
					children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: s.to,
						className: "group block relative overflow-hidden h-[420px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: s.title,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-[color:var(--navy)]/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col justify-end p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-display font-semibold text-white",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-white/70 text-sm leading-relaxed",
										children: s.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "link-gold mt-5",
										children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
									})
								]
							})
						]
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe grid lg:grid-cols-2 gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Countries Covered"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl md:text-5xl font-display font-semibold leading-tight",
						children: [
							"Three nations.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"One standard of care."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground text-lg leading-relaxed",
						children: "Wherever your journey takes you across our network, you can expect warm guidance, clear communication and trained airport officers who stay close."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-px bg-border border border-border",
						children: airports.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-background p-6 flex items-center gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-3xl text-[color:var(--gold)] font-bold w-16",
									children: a.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display font-semibold",
										children: a.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-sm text-muted-foreground",
										children: [
											a.city,
											", ",
											a.country
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "text-[color:var(--gold)]",
									size: 20
								})
							]
						}, a.code))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/coverage",
						className: "link-gold mt-10 inline-flex",
						children: ["View full coverage ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[600px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Arrivees_default,
							alt: "Busy African airport arrivals terminal",
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-[color:var(--navy)]/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-8 left-8 right-8 glass-dark p-6 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow !text-[color:var(--gold)]",
								children: "Airport Network"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-xl",
								children: "Nairobi, Accra, Lagos"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32 bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl mx-auto text-center mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3 mb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Traveller Stories"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-5xl font-display font-semibold",
						children: "Trusted by people who want a smoother arrival."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 md:grid-cols-3",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "card-luxe flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 mb-5",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 14,
									className: "fill-[color:var(--gold)] text-[color:var(--gold)]"
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "text-lg leading-relaxed font-light text-foreground flex-1",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-8 pt-6 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: t.role
								})]
							})
						]
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-24 md:py-32 relative overflow-hidden bg-[color:var(--navy)] text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: show_around_default,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover opacity-25",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[color:var(--navy)] via-[color:var(--navy)]/80 to-[color:var(--navy)]/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-luxe relative z-10 max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow !text-white/70",
								children: "Corporate Accounts"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl md:text-5xl font-display font-semibold leading-tight",
							children: "Built for organisations that want guests to arrive safely and calmly."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-white/70 text-lg leading-relaxed",
							children: "Dedicated coordinators, consolidated monthly billing, priority bookings and clear reporting for corporations, embassies, NGOs and event organisers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/corporate",
								className: "btn-gold",
								children: "Open a Corporate Account"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "btn-outline-light",
								children: "Speak to Sales"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
						className: "text-[color:var(--gold)] mx-auto mb-5",
						size: 28,
						strokeWidth: 1.2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-semibold",
						children: "The Altitude Letter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Practical airport tips, safety notes and travel updates across our African network."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: async (e) => {
							e.preventDefault();
							setError(null);
							setIsSubmitting(true);
							try {
								const form = e.currentTarget;
								const formData = new FormData(form);
								await subscribeNewsletter({ data: {
									email: String(formData.get("email") ?? ""),
									sourcePath: window.location.pathname,
									referrer: document.referrer
								} });
								setSubscribed(true);
							} catch (submissionError) {
								setError(submissionError instanceof Error ? submissionError.message : "Unable to subscribe right now.");
							} finally {
								setIsSubmitting(false);
							}
						},
						className: "mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							required: true,
							placeholder: "your@email.com",
							className: "flex-1 px-5 py-3.5 bg-background border border-border focus:border-[color:var(--gold)] outline-none text-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-gold !px-6",
							disabled: isSubmitting,
							children: isSubmitting ? "Subscribing..." : "Subscribe"
						})]
					}),
					subscribed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-[color:var(--gold)]",
						children: "You're on the list."
					}) : null,
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-red-600",
						children: error
					}) : null
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
