import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Eye, ShieldCheck, Star, HeartHandshake, UserCheck } from "lucide-react";
import storyImg from "@/assets/Welcome to lagos.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Altitude Concierge Services" },
      { name: "description", content: "Airport meet & assist built around safety, trust and warm guidance across Kenya, Ghana and Nigeria." },
      { property: "og:title", content: "About Altitude Concierge Services" },
      { property: "og:description", content: "Airport meet & assist built around safety, trust and warm guidance." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Star, title: "Care", desc: "We pay attention to the small details that make travel feel easier." },
  { icon: Eye, title: "Privacy", desc: "Your travel details are handled carefully and respectfully." },
  { icon: ShieldCheck, title: "Reliability", desc: "Consistent support on every arrival, in every city, every time." },
  { icon: UserCheck, title: "Professionalism", desc: "Trained, vetted and identifiable airport officers." },
  { icon: HeartHandshake, title: "Hospitality", desc: "Warmth is part of the standard, not an upgrade." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Airport support built around safety."
        subtitle="Altitude Concierge Services was founded on a simple belief: arriving in a new city should feel clear, calm and cared for."
        image={storyImg}
      />

      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="eyebrow mb-4">Company Story</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Built by travellers, for travellers who want reassurance.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We launched Altitude to bring dependable airport assistance to Kenya, Ghana and Nigeria,
              designed for solo travellers, women, families, business visitors and first-time arrivals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, our network of trained airport officers and transfer partners supports travellers
              across three nations and three of Africa's most important international gateways.
            </p>
          </div>
          <div className="grid gap-8">
            <div className="card-luxe">
              <p className="eyebrow mb-3">Mission</p>
              <p className="text-lg leading-relaxed">
                Deliver safe, clear and human travel support from airport arrival to trusted handover.
              </p>
            </div>
            <div className="card-luxe">
              <p className="eyebrow mb-3">Vision</p>
              <p className="text-lg leading-relaxed">
                To become Africa's most trusted airport assistance provider.
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
            <p className="mt-4 text-muted-foreground">Our team brings experience in hospitality, aviation and airport operations across Africa.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-luxe">
                <div className="aspect-square bg-secondary mb-6" />
                <div className="font-display font-semibold text-lg">Team Member</div>
                <div className="text-sm text-[color:var(--gold)] uppercase tracking-[0.18em] mt-1">Title</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Brief biography of leadership team member, their background and contribution to ACS.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[color:var(--navy)] text-white text-center">
        <div className="container-luxe max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Travel with more confidence.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="btn-gold">Book a Service</Link>
            <Link to="/contact" className="btn-outline-light">Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
