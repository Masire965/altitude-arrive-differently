import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Star, Quote } from "lucide-react";
import storyImg from "@/assets/ARRIVAL IMG.png";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials - Altitude Concierge" },
      { name: "description", content: "What solo travellers, families and frequent travellers say about Altitude Concierge Services." },
      { property: "og:title", content: "Testimonials - ACS Travellers" },
      { property: "og:description", content: "Reviews from travellers who use airport meet & assist and transfer support." },
    ],
  }),
  component: Testimonials,
});

const t = [
  { name: "Amara Okafor", role: "Solo Traveller", co: "Lagos Arrival", q: "I felt calm as soon as I saw my name at arrivals. The officer stayed with me until my driver arrived." },
  { name: "Njeri W.", role: "Parent", co: "Family Trip", q: "Travelling with children was much easier. We had someone kind guiding us through each step." },
  { name: "Daniel Mensah", role: "Frequent Traveller", co: "Business Trip", q: "Simple, clear and reliable. They made a busy airport feel manageable after a long flight." },
  { name: "Aisha B.", role: "First-time Visitor", co: "Accra Arrival", q: "I knew exactly who was meeting me and where I was going next. That made all the difference." },
  { name: "Kofi A.", role: "Event Guest", co: "Group Travel", q: "Our group was received and directed quickly. It felt organised without being stressful." },
  { name: "Miriam S.", role: "Solo Traveller", co: "Nairobi Arrival", q: "The WhatsApp updates and airport handover helped me feel safe from landing to pick-up." },
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="In the words of travellers we support."
        image={storyImg}
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
