import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Crown, Eye, ShieldCheck, Star, HeartHandshake } from "lucide-react";
import conciergeImg from "@/assets/concierge.jpg";
import loungeImg from "@/assets/lounge.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Altitude Concierge Services" },
      { name: "description", content: "Africa's premier airport concierge — our story, mission, vision and values." },
      { property: "og:title", content: "About Altitude Concierge Services" },
      { property: "og:description", content: "Africa's premier airport concierge — our story, mission, vision and values." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Star, title: "Excellence", desc: "We pursue mastery in every detail of the travel experience." },
  { icon: Eye, title: "Discretion", desc: "Your privacy is protected with absolute confidentiality." },
  { icon: ShieldCheck, title: "Reliability", desc: "Consistency on every arrival, in every city, every time." },
  { icon: Crown, title: "Professionalism", desc: "Trained, vetted and uniformed protocol officers." },
  { icon: HeartHandshake, title: "Hospitality", desc: "Warmth is part of the standard, not an upgrade." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A new standard for premium travel in Africa."
        subtitle="Altitude Concierge Services was founded on a single conviction — that arriving and departing should feel as considered as the journey itself."
        image={conciergeImg}
      />

      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="eyebrow mb-4">Company Story</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Built by travellers, for travellers who expect more.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We launched Altitude to bring globally-benchmarked airport concierge standards to
              Kenya, Ghana and Nigeria — designed for diplomats, executives, families and the
              discerning international traveller.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, our network of trained protocol officers, lounge partners and chauffeur fleets
              spans three nations and three of Africa's most important international gateways.
            </p>
          </div>
          <div className="grid gap-8">
            <div className="card-luxe">
              <p className="eyebrow mb-3">Mission</p>
              <p className="text-lg leading-relaxed">
                Deliver seamless premium travel experiences — handled with discretion, executed with precision.
              </p>
            </div>
            <div className="card-luxe">
              <p className="eyebrow mb-3">Vision</p>
              <p className="text-lg leading-relaxed">
                To become Africa's leading concierge and airport assistance provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Core Values</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">The standards we hold ourselves to.</h2>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-3 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <v.icon className="text-[color:var(--gold)] mb-4" size={28} strokeWidth={1.2} />
                <h3 className="font-display font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxe">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Guided by experience.</h2>
            <p className="mt-4 text-muted-foreground">Our executive team brings decades of combined experience in hospitality, aviation and luxury services across Africa and beyond.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <div key={i} className="card-luxe">
                <div className="aspect-square bg-secondary mb-6" />
                <div className="font-display font-semibold text-lg">Executive Name</div>
                <div className="text-sm text-[color:var(--gold)] uppercase tracking-[0.18em] mt-1">Title</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Brief biography of leadership team member, their background and contribution to ACS.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--navy)] text-white text-center">
        <div className="container-luxe max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Experience the difference.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="btn-gold">Book a Service</Link>
            <Link to="/contact" className="btn-outline-light">Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
