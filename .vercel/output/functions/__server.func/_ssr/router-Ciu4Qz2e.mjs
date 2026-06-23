import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as MessageCircle, b as Mail, h as Phone, t as X, v as Menu, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Ciu4Qz2e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-MTy36xrr.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/meet-and-assist",
		label: "Meet & Assist"
	},
	{
		to: "/corporate",
		label: "Corporate"
	},
	{
		to: "/chauffeur",
		label: "Chauffeur"
	},
	{
		to: "/coverage",
		label: "Coverage"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[color:var(--navy)]/95 backdrop-blur-xl py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]" : "bg-transparent py-5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 items-center justify-center border border-[color:var(--gold)]/60 group-hover:border-[color:var(--gold)] transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[color:var(--gold)] text-lg font-bold tracking-tight",
							children: "A"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-bold text-white text-sm tracking-[0.18em]",
							children: "ALTITUDE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] tracking-[0.3em] text-[color:var(--gold)] uppercase",
							children: "Concierge"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-[12px] uppercase tracking-[0.18em] font-medium text-white/80 hover:text-[color:var(--gold)] transition-colors font-display",
						activeProps: { className: "text-[color:var(--gold)]" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/booking",
						className: "btn-gold !py-3 !px-6 !text-xs",
						children: "Book Now"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden text-white p-2",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 24 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden bg-[color:var(--navy)] border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe py-6 flex flex-col gap-4",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "text-sm uppercase tracking-[0.18em] text-white/90 font-display py-2",
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/booking",
					onClick: () => setOpen(false),
					className: "btn-gold mt-2 self-start",
					children: "Book Now"
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[color:var(--navy)] text-white/80 pt-20 pb-10 mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe grid gap-12 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center border border-[color:var(--gold)]/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[color:var(--gold)] text-lg font-bold",
								children: "A"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display font-bold text-white text-sm tracking-[0.18em]",
								children: "ALTITUDE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] tracking-[0.3em] text-[color:var(--gold)] uppercase",
								children: "Concierge"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-white/60 max-w-xs",
						children: "Premium airport meet & assist, concierge and executive travel across Kenya, Ghana and Nigeria."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs tracking-[0.3em] uppercase text-[color:var(--gold)]",
						children: "Arrive Differently."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-xs uppercase tracking-[0.24em] text-white mb-5",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/meet-and-assist",
							className: "hover:text-[color:var(--gold)] transition",
							children: "Meet & Assist"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/concierge",
							className: "hover:text-[color:var(--gold)] transition",
							children: "Concierge"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/chauffeur",
							className: "hover:text-[color:var(--gold)] transition",
							children: "Chauffeur & Transfers"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/corporate",
							className: "hover:text-[color:var(--gold)] transition",
							children: "Corporate"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-[color:var(--gold)] transition",
							children: "Airport Protocol"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-xs uppercase tracking-[0.24em] text-white mb-5",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-[color:var(--gold)] transition",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/coverage",
							className: "hover:text-[color:var(--gold)] transition",
							children: "Coverage"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/testimonials",
							className: "hover:text-[color:var(--gold)] transition",
							children: "Testimonials"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "hover:text-[color:var(--gold)] transition",
							children: "Blog"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "hover:text-[color:var(--gold)] transition",
							children: "FAQ"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-xs uppercase tracking-[0.24em] text-white mb-5",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 16,
								className: "text-[color:var(--gold)] mt-0.5"
							}), " +254 700 000 000"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 16,
								className: "text-[color:var(--gold)] mt-0.5"
							}), " concierge@altitudeacs.com"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 16,
								className: "text-[color:var(--gold)] mt-0.5"
							}), " Nairobi · Accra · Lagos"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Altitude Concierge Services. All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "tracking-[0.2em] uppercase",
				children: "Kenya · Ghana · Nigeria"
			})]
		})]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: `https://wa.me/254746890852?text=Hello%20Altitude%20Concierge%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.`,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "WhatsApp Concierge",
		className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 26 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" })]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-display font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you're looking for has departed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-gold",
						children: "Return Home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-gold",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-outline-navy",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Altitude Concierge Services — Arrive Differently" },
			{
				name: "description",
				content: "Premium airport meet & assist, concierge and executive travel support across Kenya, Ghana & Nigeria."
			},
			{
				name: "author",
				content: "Altitude Concierge Services"
			},
			{
				property: "og:title",
				content: "Altitude Concierge Services — Arrive Differently"
			},
			{
				property: "og:description",
				content: "Premium airport meet & assist, concierge and executive travel support across Kenya, Ghana & Nigeria."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Altitude Concierge Services — Arrive Differently"
			},
			{
				name: "twitter:description",
				content: "Premium airport meet & assist, concierge and executive travel support across Kenya, Ghana & Nigeria."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bc494861-eed1-4035-8247-59ffc3853380/id-preview-245c0047--4e4b42ad-f643-4e5e-89c6-7cc3bbbd18af.lovable.app-1782190263730.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bc494861-eed1-4035-8247-59ffc3853380/id-preview-245c0047--4e4b42ad-f643-4e5e-89c6-7cc3bbbd18af.lovable.app-1782190263730.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
var $$splitComponentImporter$12 = () => import("./testimonials-DjGq5BBH.mjs");
var Route$13 = createFileRoute("/testimonials")({
	head: () => ({ meta: [
		{ title: "Testimonials — Altitude Concierge" },
		{
			name: "description",
			content: "What diplomats, executives and frequent travellers say about Altitude Concierge Services."
		},
		{
			property: "og:title",
			content: "Testimonials — ACS Clients"
		},
		{
			property: "og:description",
			content: "Reviews from diplomats, CEOs and high-net-worth travellers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var BASE_URL = "";
var Route$12 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/services",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/meet-and-assist",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/corporate",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/chauffeur",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/concierge",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/coverage",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/booking",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/faq",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/testimonials",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/blog",
				changefreq: "weekly",
				priority: "0.7"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.7"
			}
		].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$11 = () => import("./services-BlrtyEDL.mjs");
var Route$11 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Altitude Concierge Services" },
		{
			name: "description",
			content: "Airport meet & assist, fast track, concierge, chauffeur, corporate travel and executive support across Kenya, Ghana and Nigeria."
		},
		{
			property: "og:title",
			content: "Services — Altitude Concierge Services"
		},
		{
			property: "og:description",
			content: "A complete suite of premium airport and concierge services."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./meet-and-assist-C5SXmMmO.mjs");
var Route$10 = createFileRoute("/meet-and-assist")({
	head: () => ({ meta: [
		{ title: "Airport Meet & Assist — VIP Fast Track | ACS" },
		{
			name: "description",
			content: "Arrival, departure and transit assistance with VIP fast track immigration across Nairobi, Accra and Lagos airports."
		},
		{
			property: "og:title",
			content: "Airport Meet & Assist — Altitude Concierge"
		},
		{
			property: "og:description",
			content: "VIP arrival, departure, transit and fast track services across Kenya, Ghana and Nigeria."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./faq-BpPim0Wq.mjs");
var Route$9 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ — Altitude Concierge Services" },
		{
			name: "description",
			content: "Common questions about pricing, airport access, fast track, cancellations and corporate accounts."
		},
		{
			property: "og:title",
			content: "Frequently Asked Questions — ACS"
		},
		{
			property: "og:description",
			content: "Answers about ACS concierge and meet & assist services."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./coverage-YE82WiuT.mjs");
var Route$8 = createFileRoute("/coverage")({
	head: () => ({ meta: [
		{ title: "Airport Coverage — Kenya, Ghana, Nigeria | ACS" },
		{
			name: "description",
			content: "Premium airport concierge services in Nairobi (NBO), Accra (ACC) and Lagos (LOS)."
		},
		{
			property: "og:title",
			content: "Airport Coverage — Altitude Concierge"
		},
		{
			property: "og:description",
			content: "Nairobi, Accra and Lagos — premium meet & assist coverage."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./corporate-DFgZsu-Q.mjs");
var Route$7 = createFileRoute("/corporate")({
	head: () => ({ meta: [
		{ title: "Corporate Services & Accounts — ACS" },
		{
			name: "description",
			content: "Corporate travel management, dedicated concierge managers and monthly billing for corporations, embassies and NGOs."
		},
		{
			property: "og:title",
			content: "Corporate Services — Altitude Concierge"
		},
		{
			property: "og:description",
			content: "Account-managed premium travel programs across Kenya, Ghana and Nigeria."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-DabPho3c.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Altitude Concierge Services" },
		{
			name: "description",
			content: "Reach our concierge desk by phone, email or WhatsApp — 24/7 across Kenya, Ghana and Nigeria."
		},
		{
			property: "og:title",
			content: "Contact Altitude Concierge"
		},
		{
			property: "og:description",
			content: "Reach our concierge desk — 24/7 across Kenya, Ghana and Nigeria."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./concierge-Bs0mroqK.mjs");
var Route$5 = createFileRoute("/concierge")({
	head: () => ({ meta: [
		{ title: "Concierge Services — ACS" },
		{
			name: "description",
			content: "Restaurant reservations, hotel bookings, event planning, VIP experiences and personal assistance."
		},
		{
			property: "og:title",
			content: "Concierge Services — Altitude Concierge"
		},
		{
			property: "og:description",
			content: "Lifestyle concierge and personal assistance across Kenya, Ghana and Nigeria."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./chauffeur-CsGhCXZ-.mjs");
var Route$4 = createFileRoute("/chauffeur")({
	head: () => ({ meta: [
		{ title: "Chauffeur & Executive Transfers — ACS" },
		{
			name: "description",
			content: "Premium chauffeur services, executive vehicles, airport and hotel transfers across Nairobi, Accra and Lagos."
		},
		{
			property: "og:title",
			content: "Chauffeur & Transfers — Altitude Concierge"
		},
		{
			property: "og:description",
			content: "Executive vehicles and professional chauffeurs across Kenya, Ghana and Nigeria."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./booking-C0tikje2.mjs");
var Route$3 = createFileRoute("/booking")({
	head: () => ({ meta: [
		{ title: "Book Concierge Service — ACS" },
		{
			name: "description",
			content: "Book VIP airport meet & assist, chauffeur transfers and concierge services in under two minutes."
		},
		{
			property: "og:title",
			content: "Book a Concierge Service — Altitude"
		},
		{
			property: "og:description",
			content: "Reserve premium airport assistance across Kenya, Ghana and Nigeria."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./blog-DmB8scNQ.mjs");
var Route$2 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "The Altitude Journal — Travel & Concierge Insights" },
		{
			name: "description",
			content: "Travel tips, airport guides, executive travel and concierge insights for the discerning African traveller."
		},
		{
			property: "og:title",
			content: "The Altitude Journal"
		},
		{
			property: "og:description",
			content: "Insights on premium travel across Kenya, Ghana and Nigeria."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-CXYj62CK.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Altitude Concierge Services" },
		{
			name: "description",
			content: "Africa's premier airport concierge — our story, mission, vision and values."
		},
		{
			property: "og:title",
			content: "About Altitude Concierge Services"
		},
		{
			property: "og:description",
			content: "Africa's premier airport concierge — our story, mission, vision and values."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-CqiT5paH.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Altitude Concierge Services — Arrive Differently | Kenya · Ghana · Nigeria" },
		{
			name: "description",
			content: "Premium VIP airport meet & assist, fast-track protocol, chauffeur transfers and concierge services across Nairobi, Accra and Lagos."
		},
		{
			property: "og:title",
			content: "Altitude Concierge Services — Arrive Differently"
		},
		{
			property: "og:description",
			content: "Premium VIP airport meet & assist, fast-track protocol and concierge services across Kenya, Ghana & Nigeria."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TestimonialsRoute = Route$13.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$14
});
var SitemapDotxmlRoute = Route$12.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$14
});
var ServicesRoute = Route$11.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$14
});
var MeetAndAssistRoute = Route$10.update({
	id: "/meet-and-assist",
	path: "/meet-and-assist",
	getParentRoute: () => Route$14
});
var FaqRoute = Route$9.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$14
});
var CoverageRoute = Route$8.update({
	id: "/coverage",
	path: "/coverage",
	getParentRoute: () => Route$14
});
var CorporateRoute = Route$7.update({
	id: "/corporate",
	path: "/corporate",
	getParentRoute: () => Route$14
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$14
});
var ConciergeRoute = Route$5.update({
	id: "/concierge",
	path: "/concierge",
	getParentRoute: () => Route$14
});
var ChauffeurRoute = Route$4.update({
	id: "/chauffeur",
	path: "/chauffeur",
	getParentRoute: () => Route$14
});
var BookingRoute = Route$3.update({
	id: "/booking",
	path: "/booking",
	getParentRoute: () => Route$14
});
var BlogRoute = Route$2.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$14
	}),
	AboutRoute,
	BlogRoute,
	BookingRoute,
	ChauffeurRoute,
	ConciergeRoute,
	ContactRoute,
	CorporateRoute,
	CoverageRoute,
	FaqRoute,
	MeetAndAssistRoute,
	ServicesRoute,
	SitemapDotxmlRoute,
	TestimonialsRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
