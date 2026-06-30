import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plane,
  ShieldCheck,
  Sparkles,
  Clock,
  Briefcase,
  Globe2,
  ArrowRight,
  Star,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/ARRIVAL IMG.png";
import meetGreetImg from "@/assets/Welcome to lagos.png";
import guideImg from "@/assets/show around.png";
import airportImg from "@/assets/Arrivees.png";
import transferImg from "@/assets/chauffer.png";
import conciergeImg from "@/assets/concierge-services.png";
import corporateImg from "@/assets/corporate-services.png";
import { subscribeNewsletter } from "@/lib/supabase/forms";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Altitude Concierge Services - Safe Airport Meet & Assist | Kenya, Ghana, Nigeria" },
      { name: "description", content: "Safe, friendly airport meet & assist, guided arrivals, family support and reliable transfers across Nairobi, Accra and Lagos." },
      { property: "og:title", content: "Altitude Concierge Services - Safe Airport Meet & Assist" },
      { property: "og:description", content: "Friendly airport meet & assist and reliable travel support across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: HeartHandshake, title: "A Friendly Welcome", desc: "A trained officer meets you at the airport and stays with you through each step." },
  { icon: ShieldCheck, title: "Safety First", desc: "Clear communication, visible identification and careful handover to your next point." },
  { icon: Plane, title: "Airport Guidance", desc: "Help with arrivals, departures, transit, baggage and airport directions." },
  { icon: Clock, title: "Here When You Land", desc: "Flight monitoring and support for delays, early arrivals and late-night travel." },
  { icon: Briefcase, title: "For Everyday Travel", desc: "Support for solo travellers, families, first-time visitors and business trips." },
  { icon: Globe2, title: "Regional Coverage", desc: "Reliable service across Kenya, Ghana and Nigeria." },
];

const services = [
  { title: "Airport Meet & Assist", desc: "Arrival, departure and transit support with a friendly airport officer.", to: "/meet-and-assist", img: meetGreetImg },
  { title: "Concierge Services", desc: "Reservations, bookings, travel coordination and personal assistance.", to: "/concierge", img: conciergeImg },
  { title: "Airport Transfers", desc: "Reliable private transfers with professional drivers and clear pick-up details.", to: "/chauffeur", img: transferImg },
  { title: "Corporate Services", desc: "Account-managed travel programs for organisations, teams and embassies.", to: "/corporate", img: corporateImg },
  { title: "Airport Guidance", desc: "Step-by-step help through the terminal, from baggage to onward transport.", to: "/services", img: guideImg },
  { title: "Group & Family Support", desc: "Calm, organised handling for families, teams, guests and special arrivals.", to: "/corporate", img: airportImg },
];

const airports = [
  { country: "Kenya", code: "NBO", name: "Jomo Kenyatta International", city: "Nairobi" },
  { country: "Ghana", code: "ACC", name: "Kotoka International", city: "Accra" },
  { country: "Nigeria", code: "LOS", name: "Murtala Muhammed International", city: "Lagos" },
];

const testimonials = [
  { name: "Amara Okafor", role: "Solo Traveller", quote: "I felt calm as soon as I saw my name at arrivals. The officer stayed with me until my driver arrived." },
  { name: "Daniel Mensah", role: "Frequent Traveller", quote: "Simple, clear and reliable. They made a busy airport feel manageable after a long flight." },
  { name: "Njeri W.", role: "Family Trip", quote: "Travelling with children was much easier. We had someone kind guiding us through each step." },
];

function Home() {
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Smiling Black woman arriving safely at a busy African airport"
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
              <p className="eyebrow !text-white/80">Safe Airport Meet &amp; Assist</p>
            </div>
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-semibold leading-[0.98] tracking-tight">
              Arrive<br />
              <span className="italic font-light text-[color:var(--gold)]">Safely.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed font-light">
              Friendly airport meet &amp; assist and reliable travel support across Kenya, Ghana
              and Nigeria, made for everyday travellers who want to feel safe and looked after.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/booking" className="btn-gold">Book Meet &amp; Assist</Link>
              <Link to="/contact" className="btn-outline-light">Talk to Us</Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 text-white/70">
              {[
                { v: "3", l: "Countries" },
                { v: "24/7", l: "Travel Support" },
                { v: "Safe", l: "Meet & Greet" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-[color:var(--gold)] font-semibold">{s.v}</div>
                  <div className="text-xs uppercase tracking-[0.24em] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" /><p className="eyebrow">Why Altitude</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight">
              Travel support that feels calm, clear and safe.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We help everyday travellers move through busy airports with confidence, especially
              solo travellers, women, families and first-time visitors.
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

      <section className="py-24 md:py-32 bg-[color:var(--navy)] text-white">
        <div className="container-luxe">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="gold-rule" /><p className="eyebrow">Featured Services</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight">
                Practical help for the moments that matter.
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

      <section className="py-24 md:py-32">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" /><p className="eyebrow">Countries Covered</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight">
              Three nations.<br />One standard of care.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Wherever your journey takes you across our network, you can expect warm guidance,
              clear communication and trained airport officers who stay close.
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
            <img src={airportImg} alt="Busy African airport arrivals terminal" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--navy)]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 glass-dark p-6 text-white">
              <p className="eyebrow !text-[color:var(--gold)]">Airport Network</p>
              <p className="mt-2 font-display text-xl">Nairobi, Accra, Lagos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-luxe">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="gold-rule" /><p className="eyebrow">Traveller Stories</p><span className="gold-rule" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              Trusted by people who want a smoother arrival.
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

      <section className="py-24 md:py-32 relative overflow-hidden bg-[color:var(--navy)] text-white">
        <img src={guideImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)] via-[color:var(--navy)]/80 to-[color:var(--navy)]/30" />
        <div className="container-luxe relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" /><p className="eyebrow !text-white/70">Corporate Accounts</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight">
            Built for organisations that want guests to arrive safely and calmly.
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Dedicated coordinators, consolidated monthly billing, priority bookings and clear
            reporting for corporations, embassies, NGOs and event organisers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/corporate" className="btn-gold">Open a Corporate Account</Link>
            <Link to="/contact" className="btn-outline-light">Speak to Sales</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-luxe max-w-2xl text-center">
          <Sparkles className="text-[color:var(--gold)] mx-auto mb-5" size={28} strokeWidth={1.2} />
          <h2 className="text-3xl md:text-4xl font-display font-semibold">The Altitude Letter</h2>
          <p className="mt-3 text-muted-foreground">
            Practical airport tips, safety notes and travel updates across our African network.
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              setIsSubmitting(true);

              try {
                const form = e.currentTarget;
                const formData = new FormData(form);
                await subscribeNewsletter({
                  data: {
                    email: String(formData.get("email") ?? ""),
                    sourcePath: window.location.pathname,
                    referrer: document.referrer,
                  },
                });
                setSubscribed(true);
              } catch (submissionError) {
                setError(submissionError instanceof Error ? submissionError.message : "Unable to subscribe right now.");
              } finally {
                setIsSubmitting(false);
              }
            }}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 bg-background border border-border focus:border-[color:var(--gold)] outline-none text-sm"
            />
            <button type="submit" className="btn-gold !px-6" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {subscribed ? <p className="mt-4 text-sm text-[color:var(--gold)]">You're on the list.</p> : null}
          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
        </div>
      </section>
    </>
  );
}
