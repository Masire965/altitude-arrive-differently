import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import transferImg from "@/assets/chauffer.png";
import guideImg from "@/assets/show around.png";

export const Route = createFileRoute("/chauffeur")({
  head: () => ({
    meta: [
      { title: "Airport Transfers - Safe Private Pick-up | ACS" },
      { name: "description", content: "Reliable airport and hotel transfers with professional drivers across Nairobi, Accra and Lagos." },
      { property: "og:title", content: "Airport Transfers - Altitude Concierge" },
      { property: "og:description", content: "Safe, reliable airport transfers across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Chauffeur,
});

const fleet = [
  { name: "Solo Traveller Transfer", desc: "A comfortable private car with confirmed pick-up details", pax: "Up to 3 passengers" },
  { name: "Family Transfer", desc: "Room for luggage, children and a calmer airport handover", pax: "Up to 4 passengers" },
  { name: "Group Transfer", desc: "Coordinated arrivals for teams, guests and event groups", pax: "Up to 6 passengers" },
  { name: "Hotel Transfer", desc: "Direct airport-to-hotel movement with driver updates", pax: "Flexible options" },
];

function Chauffeur() {
  return (
    <>
      <PageHero
        eyebrow="Transfers"
        title="A safe ride waiting when you arrive."
        subtitle="Professional drivers, clear pick-up instructions and a careful handover from the airport officer to your vehicle."
        image={transferImg}
      >
        <Link to="/booking" className="btn-gold">Book a Transfer</Link>
      </PageHero>

      <section className="py-24">
        <div className="container-luxe">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
            {["Airport Pick-up", "Hotel Transfers", "Family Travel", "Event Transport"].map((s) => (
              <div key={s} className="card-luxe text-center">
                <h3 className="font-display font-semibold">{s}</h3>
              </div>
            ))}
          </div>

          <p className="eyebrow mb-4">Transfer Options</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12">The right transfer for your trip.</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {fleet.map((v, i) => (
              <div key={v.name} className="group relative overflow-hidden h-[360px]">
                <img src={i % 2 ? guideImg : transferImg} alt={v.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-[color:var(--navy)]/30 to-transparent" />
                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="text-2xl font-display font-semibold">{v.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{v.desc}</p>
                  <p className="text-[color:var(--gold)] text-xs uppercase tracking-[0.2em] mt-3">{v.pax}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-center">
        <div className="container-luxe max-w-xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Reserve your airport transfer</h2>
          <Link to="/booking" className="btn-gold mt-8">Book Now</Link>
        </div>
      </section>
    </>
  );
}
