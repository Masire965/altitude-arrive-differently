import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import chauffeurImg from "@/assets/chauffeur.jpg";
import loungeImg from "@/assets/lounge.jpg";
import heroImg from "@/assets/hero-arrival.jpg";

export const Route = createFileRoute("/chauffeur")({
  head: () => ({
    meta: [
      { title: "Chauffeur & Executive Transfers — ACS" },
      { name: "description", content: "Premium chauffeur services, executive vehicles, airport and hotel transfers across Nairobi, Accra and Lagos." },
      { property: "og:title", content: "Chauffeur & Transfers — Altitude Concierge" },
      { property: "og:description", content: "Executive vehicles and professional chauffeurs across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Chauffeur,
});

const fleet = [
  { name: "Executive Sedan", desc: "Mercedes-Benz E-Class or equivalent", pax: "Up to 3 passengers" },
  { name: "Luxury Sedan", desc: "Mercedes-Benz S-Class or equivalent", pax: "Up to 3 passengers" },
  { name: "Executive SUV", desc: "Range Rover, Lexus LX or equivalent", pax: "Up to 4 passengers" },
  { name: "Luxury Van", desc: "Mercedes-Benz V-Class or equivalent", pax: "Up to 6 passengers" },
];

function Chauffeur() {
  return (
    <>
      <PageHero
        eyebrow="Chauffeur"
        title="Drive arrangements, elevated."
        subtitle="Late-model executive vehicles, professionally trained chauffeurs, and a service standard you can set your watch by."
        image={chauffeurImg}
      >
        <Link to="/booking" className="btn-gold">Book a Chauffeur</Link>
      </PageHero>

      <section className="py-24">
        <div className="container-luxe">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
            {["Airport Transfers", "Executive Vehicles", "Hotel Transfers", "Event Transportation"].map((s) => (
              <div key={s} className="card-luxe text-center">
                <h3 className="font-display font-semibold">{s}</h3>
              </div>
            ))}
          </div>

          <p className="eyebrow mb-4">Our Fleet</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12">A vehicle for every occasion.</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {fleet.map((v, i) => (
              <div key={v.name} className="group relative overflow-hidden h-[360px]">
                <img src={i % 2 ? loungeImg : chauffeurImg} alt={v.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Reserve your chauffeur</h2>
          <Link to="/booking" className="btn-gold mt-8">Book Now</Link>
        </div>
      </section>
    </>
  );
}
