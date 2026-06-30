import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/show around.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Airport Meet & Assist | Altitude Concierge Services" },
      { name: "description", content: "Airport meet & assist, safe arrivals, guided departures, transfers, family support and corporate travel help across Kenya, Ghana and Nigeria." },
      { property: "og:title", content: "Services - Altitude Concierge Services" },
      { property: "og:description", content: "Safe, friendly airport and travel support across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    title: "Airport Meet & Assist",
    items: ["Arrival Assistance", "Departure Assistance", "Transit Assistance", "Meet & Greet"],
    to: "/meet-and-assist",
  },
  {
    title: "Safe Airport Guidance",
    items: ["Terminal Directions", "Baggage Support", "Driver Handover", "Family Travel Support"],
    to: "/meet-and-assist",
  },
  {
    title: "Concierge Services",
    items: ["Restaurant Reservations", "Hotel Bookings", "Travel Coordination", "Personal Assistance"],
    to: "/concierge",
  },
  {
    title: "Corporate Travel Support",
    items: ["Corporate Accounts", "Guest Arrivals", "Monthly Billing", "Dedicated Coordinators"],
    to: "/corporate",
  },
  {
    title: "Airport Transfers",
    items: ["Private Transfers", "Airport Pick-up", "Hotel Transfers", "Event Transportation"],
    to: "/chauffeur",
  },
  {
    title: "Group & Guest Support",
    items: ["Delegation Handling", "Event Arrivals", "Group Transfers", "On-site Coordination"],
    to: "/corporate",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Clear help from landing to handover."
        subtitle="From the moment you share your itinerary, our team prepares the welcome, guidance and transfer details that make travel feel safer."
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
          <p className="mt-4 text-white/70">Send your travel details in under two minutes.</p>
          <Link to="/booking" className="btn-gold mt-8">Book Now</Link>
        </div>
      </section>
    </>
  );
}
