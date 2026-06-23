import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/meet-and-assist", label: "Meet & Assist" },
  { to: "/corporate", label: "Corporate" },
  { to: "/chauffeur", label: "Chauffeur" },
  { to: "/coverage", label: "Coverage" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--navy)]/95 backdrop-blur-xl py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center border border-[color:var(--gold)]/60 group-hover:border-[color:var(--gold)] transition-colors">
            <span className="font-display text-[color:var(--gold)] text-lg font-bold tracking-tight">A</span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-white text-sm tracking-[0.18em]">ALTITUDE</div>
            <div className="text-[10px] tracking-[0.3em] text-[color:var(--gold)] uppercase">Concierge</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[12px] uppercase tracking-[0.18em] font-medium text-white/80 hover:text-[color:var(--gold)] transition-colors font-display"
              activeProps={{ className: "text-[color:var(--gold)]" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/booking" className="btn-gold !py-3 !px-6 !text-xs">Book Now</Link>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[color:var(--navy)] border-t border-white/10">
          <div className="container-luxe py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-white/90 font-display py-2"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setOpen(false)} className="btn-gold mt-2 self-start">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
