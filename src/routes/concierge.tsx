import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Utensils, Hotel, Calendar, Sparkles, MapPin, UserCheck } from "lucide-react";
import conciergeImg from "@/assets/Welcome to lagos.png";

export const Route = createFileRoute("/concierge")({
  head: () => ({
    meta: [
      { title: "Concierge Services - ACS" },
      { name: "description", content: "Restaurant reservations, hotel bookings, event planning, local recommendations and personal assistance." },
      { property: "og:title", content: "Concierge Services - Altitude Concierge" },
      { property: "og:description", content: "Helpful concierge and personal assistance across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Concierge,
});

const items = [
  { icon: Utensils, title: "Restaurant Reservations", desc: "Tables that fit your plans, budget and location." },
  { icon: Hotel, title: "Hotel Bookings", desc: "Trusted hotel options and clear booking support." },
  { icon: MapPin, title: "Travel Coordination", desc: "Itinerary planning, directions and local movement support." },
  { icon: Calendar, title: "Event Planning Support", desc: "Help coordinating dinners, meetings and group plans." },
  { icon: Sparkles, title: "Local Experiences", desc: "Curated cultural, culinary and city experiences." },
  { icon: UserCheck, title: "Personal Assistance", desc: "Practical, respectful support for everyday requests." },
];

function Concierge() {
  return (
    <>
      <PageHero
        eyebrow="Concierge"
        title="Helpful support when plans need care."
        subtitle="From a reservation to a full travel day, our team helps you move with clarity and confidence."
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
