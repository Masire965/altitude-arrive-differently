import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as concierge_default } from "./concierge-C-h4lVrU.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, E as Clock, T as Crown, a as Star, c as ShieldCheck, f as Plane, k as Briefcase, o as Sparkles, w as Earth, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as lounge_default } from "./lounge-DhB-lhZi.mjs";
import { t as chauffeur_default } from "./chauffeur-fJWf6DzA.mjs";
import { t as hero_arrival_default } from "./hero-arrival-Cim9cyKJ.mjs";
import { subscribeNewsletter } from "./forms-DsoBKP9-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CqiT5paH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var benefits = [
	{
		icon: Crown,
		title: "VIP Treatment",
		desc: "Discreet, white-glove service from kerb to gate."
	},
	{
		icon: Plane,
		title: "Airport Fast Track",
		desc: "Expedited immigration, security and customs clearance."
	},
	{
		icon: Briefcase,
		title: "Executive Travel",
		desc: "Tailored support for diplomats, executives and HNW travellers."
	},
	{
		icon: Clock,
		title: "24/7 Concierge Desk",
		desc: "Always-on assistance across every time zone."
	},
	{
		icon: ShieldCheck,
		title: "Corporate Solutions",
		desc: "Dedicated managers, monthly billing, full reporting."
	},
	{
		icon: Earth,
		title: "Multi-Country Coverage",
		desc: "Seamless service across Kenya, Ghana and Nigeria."
	}
];
var services = [
	{
		title: "Airport Meet & Assist",
		desc: "Arrival, departure and transit support with personal protocol officers.",
		to: "/meet-and-assist",
		img: hero_arrival_default
	},
	{
		title: "Concierge Services",
		desc: "Reservations, bookings, lifestyle and personal assistance.",
		to: "/concierge",
		img: concierge_default
	},
	{
		title: "Chauffeur & Transfers",
		desc: "Executive vehicles, professional chauffeurs, on-demand luxury.",
		to: "/chauffeur",
		img: chauffeur_default
	},
	{
		title: "Corporate Services",
		desc: "Account-managed travel programs for organisations and embassies.",
		to: "/corporate",
		img: lounge_default
	},
	{
		title: "Airport Protocol",
		desc: "VIP lanes, lounge access and dedicated coordinators.",
		to: "/services",
		img: lounge_default
	},
	{
		title: "Event Delegation Support",
		desc: "End-to-end handling for delegations, summits and special events.",
		to: "/corporate",
		img: concierge_default
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
		name: "H.E. Aminata Diallo",
		role: "Diplomatic Mission",
		quote: "From the moment I landed in Nairobi until my departure, every detail was handled with grace. Truly world-class."
	},
	{
		name: "James Okafor",
		role: "CEO, Meridian Capital",
		quote: "Altitude has become our standard for executive travel across West Africa. Reliability and discretion in equal measure."
	},
	{
		name: "Sofia Rahman",
		role: "International Counsel",
		quote: "I have used premium services in 40+ countries. ACS is among the very best — unobtrusive, exact, exceptional."
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
					src: hero_arrival_default,
					alt: "Luxury airport arrival",
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
									children: "Premium Airport Concierge · Est. Africa"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-semibold leading-[0.98] tracking-tight",
								children: [
									"Arrive",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic font-light text-[color:var(--gold)]",
										children: "Differently."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed font-light",
								children: "Premium airport meet & assist, concierge and executive travel support across Kenya, Ghana & Nigeria — tailored for diplomats, executives and the discerning traveller."
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
									children: "Request Quote"
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
										l: "Concierge Desk"
									},
									{
										v: "100%",
										l: "Discretion"
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-[0.3em] animate-shimmer",
					children: "Scroll"
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
							children: "Travel, refined to the smallest detail."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground text-lg leading-relaxed",
							children: "We exist for travellers for whom time, privacy and presentation are non-negotiable."
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
							children: "A complete suite of premium services."
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
							"One standard of service."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground text-lg leading-relaxed",
						children: "Wherever your journey takes you across our network, you can expect the same uncompromising level of care from our trained protocol officers."
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
							src: lounge_default,
							alt: "Luxury airport lounge",
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-[color:var(--navy)]/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-8 left-8 right-8 glass-dark p-6 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow !text-[color:var(--gold)]",
								children: "Hub Network"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-xl",
								children: "Nairobi · Accra · Lagos"
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
								children: "Clientele"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-5xl font-display font-semibold",
						children: "Trusted by those who travel often."
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
					src: chauffeur_default,
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
							children: "Built for organisations who move executives — and care how they arrive."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-white/70 text-lg leading-relaxed",
							children: "Dedicated account managers, consolidated monthly billing, priority bookings and tailored reporting — designed for corporations, embassies, NGOs and event organisers."
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
						children: "Quarterly insights on premium travel, airport intelligence and the art of arriving well."
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
						children: "You’re on the list."
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
