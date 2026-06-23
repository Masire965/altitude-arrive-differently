import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-arrival.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Altitude Concierge Services" },
      { name: "description", content: "Airport meet & assist, fast track, concierge, chauffeur, corporate travel and executive support across Kenya, Ghana and Nigeria." },
      { property: "og:title", content: "Services — Altitude Concierge Services" },
      { property: "og:description", content: "A complete suite of premium airport and concierge services." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    title: "Airport Meet & Assist",
    items: ["Arrival Assistance", "Departure Assistance", "Transit Assistance", "VIP Fast Track"],
    to: "/meet-and-assist",
  },
  {
    title: "Airport Protocol",
    items: ["Diplomatic Protocol", "VIP Lane Access", "Lounge Coordination", "Family Travel Support"],
    to: "/meet-and-assist",
  },
  {
    title: "Concierge Services",
    items: ["Restaurant Reservations", "Hotel Bookings", "Travel Coordination", "Personal Assistance"],
    to: "/concierge",
  },
  {
    title: "Corporate Travel Support",
    items: ["Corporate Accounts", "Executive Travel Mgmt", "Monthly Billing", "Dedicated Concierge Managers"],
    to: "/corporate",
  },
  {
    title: "Chauffeur Services",
    items: ["Executive Transfers", "Airport Transfers", "Hotel Transfers", "Event Transportation"],
    to: "/chauffeur",
  },
  {
    title: "Event Guest Management",
    items: ["Delegation Handling", "Summit Coordination", "Group Transfers", "On-site Concierge"],
    to: "/corporate",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every detail. Every journey. Considered."
        subtitle="From the moment you confirm your itinerary to the moment you step into your destination — Altitude orchestrates every detail."
        image={heroImg}
      />

      <section className="py-24">
        <div className="container-luxe grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="card-luxe flex flex-col">
              <h3 className="text-xl font-display font-semibold mb-5">{g.title}</h3>
              <ul className="space-y-3 mb-8 flex-1">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="mt-1.5 h-1 w-3 bg-[color:var(--gold)]" />
                    {it}
                  </li>
                ))}
              </ul>
              <Link to={g.to} className="link-gold">Learn more <ArrowRight size={14} /></Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[color:var(--navy)] text-white text-center">
        <div className="container-luxe max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Ready to book?</h2>
          <p className="mt-4 text-white/70">Complete a concierge request in under two minutes.</p>
          <Link to="/booking" className="btn-gold mt-8">Book Now</Link>
        </div>
      </section>
    </>
  );
}
