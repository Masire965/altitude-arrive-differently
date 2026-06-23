import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Utensils, Hotel, Calendar, Sparkles, MapPin, UserCheck } from "lucide-react";
import conciergeImg from "@/assets/concierge.jpg";

export const Route = createFileRoute("/concierge")({
  head: () => ({
    meta: [
      { title: "Concierge Services — ACS" },
      { name: "description", content: "Restaurant reservations, hotel bookings, event planning, VIP experiences and personal assistance." },
      { property: "og:title", content: "Concierge Services — Altitude Concierge" },
      { property: "og:description", content: "Lifestyle concierge and personal assistance across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Concierge,
});

const items = [
  { icon: Utensils, title: "Restaurant Reservations", desc: "Tables at sought-after establishments — even when fully booked." },
  { icon: Hotel, title: "Hotel Bookings", desc: "Preferred rates and upgrades at premium properties." },
  { icon: MapPin, title: "Travel Coordination", desc: "End-to-end itinerary planning and logistics." },
  { icon: Calendar, title: "Event Planning Support", desc: "From intimate dinners to corporate gatherings." },
  { icon: Sparkles, title: "VIP Experiences", desc: "Curated cultural, culinary and bespoke experiences." },
  { icon: UserCheck, title: "Personal Assistance", desc: "Discreet, on-demand support for any request." },
];

function Concierge() {
  return (
    <>
      <PageHero
        eyebrow="Concierge"
        title="The art of getting things done — quietly."
        subtitle="From a last-minute reservation to a fully orchestrated week, our concierge desk is at your service."
        image={conciergeImg}
      >
        <Link to="/contact" className="btn-gold">Request a Service</Link>
      </PageHero>

      <section className="py-24">
        <div className="container-luxe grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="bg-background p-10">
              <it.icon className="text-[color:var(--gold)] mb-5" size={28} strokeWidth={1.2} />
              <h3 className="font-display font-semibold text-lg">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
