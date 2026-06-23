import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Star, Quote } from "lucide-react";
import conciergeImg from "@/assets/concierge.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Altitude Concierge" },
      { name: "description", content: "What diplomats, executives and frequent travellers say about Altitude Concierge Services." },
      { property: "og:title", content: "Testimonials — ACS Clients" },
      { property: "og:description", content: "Reviews from diplomats, CEOs and high-net-worth travellers." },
    ],
  }),
  component: Testimonials,
});

const t = [
  { name: "H.E. Aminata Diallo", role: "Diplomatic Mission", co: "Permanent Mission", q: "From the moment I landed in Nairobi until my departure, every detail was handled with grace. Truly world-class service." },
  { name: "James Okafor", role: "CEO", co: "Meridian Capital", q: "Altitude has become our standard for executive travel across West Africa. Reliability and discretion in equal measure." },
  { name: "Sofia Rahman", role: "International Counsel", co: "Bennett & Vale LLP", q: "I have used premium services in 40+ countries. ACS is among the very best — unobtrusive, exact, exceptional." },
  { name: "Dr. Kwame Mensah", role: "Board Chair", co: "Pan-African Health Initiative", q: "Our delegation moved through three cities in five days without a single hiccup. That is rare anywhere in the world." },
  { name: "Ana Costa", role: "Managing Partner", co: "Atlantic Ventures", q: "The chauffeur arrived three minutes early, every single time. That, alone, is worth it." },
  { name: "Tariq Hassan", role: "Family Office", co: "Private", q: "We trust them with our family. There is no higher compliment we can pay." },
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="In the words of those we serve."
        image={conciergeImg}
      />
      <section className="py-24">
        <div className="container-luxe grid gap-8 md:grid-cols-2">
          {t.map((c) => (
            <figure key={c.name} className="card-luxe relative">
              <Quote className="text-[color:var(--gold)]/20 absolute top-6 right-6" size={48} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[color:var(--gold)] text-[color:var(--gold)]" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed font-light">"{c.q}"</blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-display font-semibold">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.role}, {c.co}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
