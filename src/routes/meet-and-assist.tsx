import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PlaneLanding, PlaneTakeoff, Repeat, Users, Shield, Handshake } from "lucide-react";
import heroImg from "@/assets/Welcome to lagos.png";

export const Route = createFileRoute("/meet-and-assist")({
  head: () => ({
    meta: [
      { title: "Airport Meet & Assist - Safe Arrival Support | ACS" },
      { name: "description", content: "Safe arrival, departure and transit assistance across Nairobi, Accra and Lagos airports." },
      { property: "og:title", content: "Airport Meet & Assist - Altitude Concierge" },
      { property: "og:description", content: "Friendly airport arrival, departure and transit support across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: MeetAssist,
});

const items = [
  { icon: PlaneLanding, title: "Arrival Assistance", desc: "Your officer meets you at arrivals, helps with baggage and guides you to your driver or host." },
  { icon: PlaneTakeoff, title: "Departure Assistance", desc: "Clear guidance from terminal entrance through check-in, security and the right gate." },
  { icon: Repeat, title: "Transit Assistance", desc: "Support between flights so connections feel calm, clear and on time." },
  { icon: Handshake, title: "Meet & Greet", desc: "A visible, friendly welcome with your name or a placard so you know exactly who is there for you." },
  { icon: Users, title: "Family Travel Support", desc: "Dedicated assistance for families travelling with children, elderly travellers or special requirements." },
  { icon: Shield, title: "Solo Traveller Support", desc: "Extra reassurance for anyone arriving alone, with careful handover to the next trusted contact." },
];

function MeetAssist() {
  return (
    <>
      <PageHero
        eyebrow="Meet & Assist"
        title="A safer, calmer airport arrival."
        subtitle="Our airport officers welcome you, guide you through the terminal and stay with you until the next step is clear."
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
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Reserve your airport officer</h2>
          <p className="mt-4 text-muted-foreground">Available 24/7 across NBO, ACC and LOS.</p>
          <Link to="/booking" className="btn-gold mt-8">Make a Booking</Link>
        </div>
      </section>
    </>
  );
}
