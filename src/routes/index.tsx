import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plane, ShieldCheck, Sparkles, Clock, Briefcase, Globe2,
  ArrowRight, Star, MapPin, Crown
} from "lucide-react";
import heroImg from "@/assets/hero-arrival.jpg";
import chauffeurImg from "@/assets/chauffeur.jpg";
import conciergeImg from "@/assets/concierge.jpg";
import loungeImg from "@/assets/lounge.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Altitude Concierge Services — Arrive Differently | Kenya · Ghana · Nigeria" },
      { name: "description", content: "Premium VIP airport meet & assist, fast-track protocol, chauffeur transfers and concierge services across Nairobi, Accra and Lagos." },
      { property: "og:title", content: "Altitude Concierge Services — Arrive Differently" },
      { property: "og:description", content: "Premium VIP airport meet & assist, fast-track protocol and concierge services across Kenya, Ghana & Nigeria." },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: Crown, title: "VIP Treatment", desc: "Discreet, white-glove service from kerb to gate." },
  { icon: Plane, title: "Airport Fast Track", desc: "Expedited immigration, security and customs clearance." },
  { icon: Briefcase, title: "Executive Travel", desc: "Tailored support for diplomats, executives and HNW travellers." },
  { icon: Clock, title: "24/7 Concierge Desk", desc: "Always-on assistance across every time zone." },
  { icon: ShieldCheck, title: "Corporate Solutions", desc: "Dedicated managers, monthly billing, full reporting." },
  { icon: Globe2, title: "Multi-Country Coverage", desc: "Seamless service across Kenya, Ghana and Nigeria." },
];

const services = [
  { title: "Airport Meet & Assist", desc: "Arrival, departure and transit support with personal protocol officers.", to: "/meet-and-assist", img: heroImg },
  { title: "Concierge Services", desc: "Reservations, bookings, lifestyle and personal assistance.", to: "/concierge", img: conciergeImg },
  { title: "Chauffeur & Transfers", desc: "Executive vehicles, professional chauffeurs, on-demand luxury.", to: "/chauffeur", img: chauffeurImg },
  { title: "Corporate Services", desc: "Account-managed travel programs for organisations and embassies.", to: "/corporate", img: loungeImg },
  { title: "Airport Protocol", desc: "VIP lanes, lounge access and dedicated coordinators.", to: "/services", img: loungeImg },
  { title: "Event Delegation Support", desc: "End-to-end handling for delegations, summits and special events.", to: "/corporate", img: conciergeImg },
];

const airports = [
  { country: "Kenya", code: "NBO", name: "Jomo Kenyatta International", city: "Nairobi" },
  { country: "Ghana", code: "ACC", name: "Kotoka International", city: "Accra" },
  { country: "Nigeria", code: "LOS", name: "Murtala Muhammed International", city: "Lagos" },
];

const testimonials = [
  { name: "H.E. Aminata Diallo", role: "Diplomatic Mission", quote: "From the moment I landed in Nairobi until my departure, every detail was handled with grace. Truly world-class." },
  { name: "James Okafor", role: "CEO, Meridian Capital", quote: "Altitude has become our standard for executive travel across West Africa. Reliability and discretion in equal measure." },
  { name: "Sofia Rahman", role: "International Counsel", quote: "I have used premium services in 40+ countries. ACS is among the very best — unobtrusive, exact, exceptional." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury airport arrival"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)]/95 via-[color:var(--navy)]/70 to-[color:var(--navy)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-transparent to-[color:var(--navy)]/40" />

        <div className="container-luxe relative z-10 pt-32 pb-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <span className="gold-rule" />
              <p className="eyebrow !text-white/80">Premium Airport Concierge · Est. Africa</p>
            </div>
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-semibold leading-[0.98] tracking-tight">
              Arrive<br />
              <span className="italic font-light text-[color:var(--gold)]">Differently.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed font-light">
              Premium airport meet &amp; assist, concierge and executive travel support across
              Kenya, Ghana &amp; Nigeria — tailored for diplomats, executives and the discerning traveller.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/booking" className="btn-gold">Book Meet &amp; Assist</Link>
              <Link to="/contact" className="btn-outline-light">Request Quote</Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 text-white/70">
              {[
                { v: "3", l: "Countries" },
                { v: "24/7", l: "Concierge Desk" },
                { v: "100%", l: "Discretion" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-[color:var(--gold)] font-semibold">{s.v}</div>
                  <div className="text-xs uppercase tracking-[0.24em] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-[0.3em] animate-shimmer">
          Scroll
        </div>
      </section>

      {/* WHY ACS */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" /><p className="eyebrow">Why Altitude</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight">
              Travel, refined to the smallest detail.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We exist for travellers for whom time, privacy and presentation are non-negotiable.
            </p>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
            {benefits.map((b) => (
              <div key={b.title} className="bg-background p-10 group hover:bg-[color:var(--navy)] transition-all duration-500">
                <b.icon className="text-[color:var(--gold)] mb-6" size={32} strokeWidth={1.2} />
                <h3 className="text-xl font-display font-semibold group-hover:text-white transition-colors">{b.title}</h3>
                <p className="mt-3 text-muted-foreground group-hover:text-white/70 transition-colors text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-24 md:py-32 bg-[color:var(--navy)] text-white">
        <div className="container-luxe">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="gold-rule" /><p className="eyebrow">Featured Services</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight">
                A complete suite of premium services.
              </h2>
            </div>
            <Link to="/services" className="link-gold">View all services <ArrowRight size={16} /></Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="group block relative overflow-hidden h-[420px]">
                <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-[color:var(--navy)]/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-display font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
                  <span className="link-gold mt-5">Explore <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="py-24 md:py-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" /><p className="eyebrow">Countries Covered</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight">
              Three nations.<br />One standard of service.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Wherever your journey takes you across our network, you can expect the same uncompromising
              level of care from our trained protocol officers.
            </p>

            <div className="mt-10 space-y-px bg-border border border-border">
              {airports.map((a) => (
                <div key={a.code} className="bg-background p-6 flex items-center gap-6">
                  <div className="font-display text-3xl text-[color:var(--gold)] font-bold w-16">{a.code}</div>
                  <div className="flex-1">
                    <div className="font-display font-semibold">{a.name}</div>
                    <div className="text-sm text-muted-foreground">{a.city}, {a.country}</div>
                  </div>
                  <MapPin className="text-[color:var(--gold)]" size={20} />
                </div>
              ))}
            </div>

            <Link to="/coverage" className="link-gold mt-10 inline-flex">View full coverage <ArrowRight size={16} /></Link>
          </div>

          <div className="relative h-[600px]">
            <img src={loungeImg} alt="Luxury airport lounge" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--navy)]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 glass-dark p-6 text-white">
              <p className="eyebrow !text-[color:var(--gold)]">Hub Network</p>
              <p className="mt-2 font-display text-xl">Nairobi · Accra · Lagos</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-luxe">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="gold-rule" /><p className="eyebrow">Clientele</p><span className="gold-rule" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              Trusted by those who travel often.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-luxe flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[color:var(--gold)] text-[color:var(--gold)]" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed font-light text-foreground flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[color:var(--navy)] text-white">
        <img src={chauffeurImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)] via-[color:var(--navy)]/80 to-[color:var(--navy)]/30" />
        <div className="container-luxe relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" /><p className="eyebrow !text-white/70">Corporate Accounts</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight">
            Built for organisations who move executives — and care how they arrive.
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Dedicated account managers, consolidated monthly billing, priority bookings and
            tailored reporting — designed for corporations, embassies, NGOs and event organisers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/corporate" className="btn-gold">Open a Corporate Account</Link>
            <Link to="/contact" className="btn-outline-light">Speak to Sales</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 bg-background">
        <div className="container-luxe max-w-2xl text-center">
          <Sparkles className="text-[color:var(--gold)] mx-auto mb-5" size={28} strokeWidth={1.2} />
          <h2 className="text-3xl md:text-4xl font-display font-semibold">The Altitude Letter</h2>
          <p className="mt-3 text-muted-foreground">
            Quarterly insights on premium travel, airport intelligence and the art of arriving well.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you — you have been subscribed."); }}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 bg-background border border-border focus:border-[color:var(--gold)] outline-none text-sm"
            />
            <button type="submit" className="btn-gold !px-6">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
