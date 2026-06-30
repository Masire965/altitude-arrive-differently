import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Plane } from "lucide-react";
import airportImg from "@/assets/Arrivees.png";

export const Route = createFileRoute("/coverage")({
  head: () => ({
    meta: [
      { title: "Airport Coverage - Kenya, Ghana, Nigeria | ACS" },
      { name: "description", content: "Safe airport meet & assist services in Nairobi (NBO), Accra (ACC) and Lagos (LOS)." },
      { property: "og:title", content: "Airport Coverage - Altitude Concierge" },
      { property: "og:description", content: "Nairobi, Accra and Lagos airport meet & assist coverage." },
    ],
  }),
  component: Coverage,
});

const countries = [
  {
    country: "Kenya",
    flag: "KE",
    airport: "Jomo Kenyatta International Airport (NBO)",
    city: "Nairobi",
    blurb: "Meet & assist, guided arrivals and reliable transfers at Kenya's largest international gateway.",
    keywords: ["Airport Meet and Assist Nairobi", "Nairobi Airport Concierge", "Safe Airport Support Kenya"],
  },
  {
    country: "Ghana",
    flag: "GH",
    airport: "Kotoka International Airport (ACC)",
    city: "Accra",
    blurb: "Friendly airport guidance, family support and transfer coordination at one of West Africa's most welcoming hubs.",
    keywords: ["Airport Concierge Accra", "Airport Concierge Ghana", "Airport Meet and Assist Ghana"],
  },
  {
    country: "Nigeria",
    flag: "NG",
    airport: "Murtala Muhammed International Airport (LOS)",
    city: "Lagos",
    blurb: "Reliable airport support in one of Africa's busiest airports, designed to make arrivals and departures feel safer.",
    keywords: ["Airport Concierge Lagos", "Airport Concierge Nigeria", "Airport Meet and Assist Lagos"],
  },
];

function Coverage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Three countries. One careful welcome."
        subtitle="Operating across East and West Africa's important international gateways."
        image={airportImg}
      />

      <section className="py-24 space-y-24">
        {countries.map((c, i) => (
          <div key={c.country} className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-display text-[color:var(--gold)] text-xs tracking-[0.3em]">{c.flag}</span>
                <span className="gold-rule" />
                <p className="eyebrow">{c.country}</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-2">{c.city}</h2>
              <p className="text-muted-foreground mb-6">{c.airport}</p>
              <p className="text-foreground leading-relaxed">{c.blurb}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {c.keywords.map((k) => (
                  <span key={k} className="text-xs px-3 py-1.5 bg-secondary text-muted-foreground">{k}</span>
                ))}
              </div>
              <Link to="/booking" className="link-gold mt-8 inline-flex">Book in {c.city}</Link>
            </div>
            <div className="relative h-[420px]">
              <img src={airportImg} alt={c.airport} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[color:var(--navy)]/30" />
              <div className="absolute bottom-6 left-6 glass-dark p-5 text-white flex items-center gap-3">
                <Plane className="text-[color:var(--gold)]" size={20} />
                <div>
                  <div className="font-display font-semibold">{c.city}</div>
                  <div className="text-xs text-white/70 uppercase tracking-[0.2em]">{c.country}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
