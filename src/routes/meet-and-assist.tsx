import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Plane, PlaneLanding, PlaneTakeoff, Repeat, Crown, Users, Shield } from "lucide-react";
import heroImg from "@/assets/hero-arrival.jpg";

export const Route = createFileRoute("/meet-and-assist")({
  head: () => ({
    meta: [
      { title: "Airport Meet & Assist — VIP Fast Track | ACS" },
      { name: "description", content: "Arrival, departure and transit assistance with VIP fast track immigration across Nairobi, Accra and Lagos airports." },
      { property: "og:title", content: "Airport Meet & Assist — Altitude Concierge" },
      { property: "og:description", content: "VIP arrival, departure, transit and fast track services across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: MeetAssist,
});

const items = [
  { icon: PlaneLanding, title: "Arrival Assistance", desc: "We greet you at the aircraft door, escort you through priority immigration, collect your baggage and guide you to your transport." },
  { icon: PlaneTakeoff, title: "Departure Assistance", desc: "Curbside greeting, expedited check-in, fast track security and personal escort to the lounge or gate." },
  { icon: Repeat, title: "Transit Assistance", desc: "Seamless connection handling, lounge access during layovers and gate-to-gate escort." },
  { icon: Crown, title: "VIP Fast Track", desc: "Skip the queues. Fast lane immigration and security at every step of your journey." },
  { icon: Users, title: "Family Travel Support", desc: "Dedicated assistance for families travelling with children, elderly or special requirements." },
  { icon: Shield, title: "Diplomatic Assistance", desc: "Protocol-level handling for diplomatic, governmental and high-profile travellers." },
];

function MeetAssist() {
  return (
    <>
      <PageHero
        eyebrow="Meet & Assist"
        title="The terminal, made effortless."
        subtitle="Our protocol officers handle every checkpoint so you can focus on what matters."
        image={heroImg}
      >
        <Link to="/booking" className="btn-gold">Book Meet & Assist</Link>
      </PageHero>

      <section className="py-24">
        <div className="container-luxe grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="bg-background p-10">
              <it.icon className="text-[color:var(--gold)] mb-5" size={32} strokeWidth={1.2} />
              <h3 className="font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary text-center">
        <div className="container-luxe max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Reserve your concierge officer</h2>
          <p className="mt-4 text-muted-foreground">Available 24/7 across NBO, ACC and LOS.</p>
          <Link to="/booking" className="btn-gold mt-8">Make a Booking</Link>
        </div>
      </section>
    </>
  );
}
