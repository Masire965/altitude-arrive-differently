import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[color:var(--navy)] text-white/80 pt-20 pb-10 mt-24">
      <div className="container-luxe grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center border border-[color:var(--gold)]/60">
              <span className="font-display text-[color:var(--gold)] text-lg font-bold">A</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-white text-sm tracking-[0.18em]">ALTITUDE</div>
              <div className="text-[10px] tracking-[0.3em] text-[color:var(--gold)] uppercase">Concierge</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60 max-w-xs">
            Premium airport meet & assist, concierge and executive travel across Kenya, Ghana and Nigeria.
          </p>
          <p className="mt-6 text-xs tracking-[0.3em] uppercase text-[color:var(--gold)]">Arrive Differently.</p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.24em] text-white mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/meet-and-assist" className="hover:text-[color:var(--gold)] transition">Meet & Assist</Link></li>
            <li><Link to="/concierge" className="hover:text-[color:var(--gold)] transition">Concierge</Link></li>
            <li><Link to="/chauffeur" className="hover:text-[color:var(--gold)] transition">Chauffeur & Transfers</Link></li>
            <li><Link to="/corporate" className="hover:text-[color:var(--gold)] transition">Corporate</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--gold)] transition">Airport Protocol</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.24em] text-white mb-5">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-[color:var(--gold)] transition">About</Link></li>
            <li><Link to="/coverage" className="hover:text-[color:var(--gold)] transition">Coverage</Link></li>
            <li><Link to="/testimonials" className="hover:text-[color:var(--gold)] transition">Testimonials</Link></li>
            <li><Link to="/blog" className="hover:text-[color:var(--gold)] transition">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-[color:var(--gold)] transition">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.24em] text-white mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><Phone size={16} className="text-[color:var(--gold)] mt-0.5" /> +254 700 000 000</li>
            <li className="flex gap-3"><Mail size={16} className="text-[color:var(--gold)] mt-0.5" /> concierge@altitudeacs.com</li>
            <li className="flex gap-3"><MapPin size={16} className="text-[color:var(--gold)] mt-0.5" /> Nairobi · Accra · Lagos</li>
          </ul>
        </div>
      </div>

      <div className="container-luxe mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Altitude Concierge Services. All rights reserved.</p>
        <p className="tracking-[0.2em] uppercase">Kenya · Ghana · Nigeria</p>
      </div>
    </footer>
  );
}
