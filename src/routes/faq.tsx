import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import heroImg from "@/assets/Welcome to lagos.png";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ - Altitude Concierge Services" },
      { name: "description", content: "Common questions about pricing, airport assistance, meet & greet, cancellations and corporate accounts." },
      { property: "og:title", content: "Frequently Asked Questions - ACS" },
      { property: "og:description", content: "Answers about ACS concierge and meet & assist services." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "How is pricing structured?", a: "Each service is priced based on the airport, level of assistance and number of passengers. We provide clear per-service quotes and corporate rates for accounts." },
  { q: "How will I identify my airport officer?", a: "Your officer will be clearly identified and will confirm the agreed meeting point, name sign or placard details before your arrival." },
  { q: "What does Meet & Assist include?", a: "Meet & Assist can include a welcome at arrivals, terminal guidance, baggage support, transfer handover and help with departure or transit steps." },
  { q: "What if my flight is delayed?", a: "Our team monitors flights in real time and adjusts officer scheduling. There is no additional fee for normal delays." },
  { q: "What is your cancellation policy?", a: "Cancellations made more than 12 hours before service are fully refundable. Within 12 hours, a 50% fee may apply." },
  { q: "How do I open a corporate account?", a: "Visit our Corporate page or contact us directly. Onboarding typically takes 2-3 business days and includes a dedicated coordinator." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions." image={heroImg} />
      <section className="py-24">
        <div className="container-luxe max-w-3xl">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="font-display font-semibold text-lg">{f.q}</span>
                {open === i ? <Minus className="text-[color:var(--gold)]" /> : <Plus className="text-[color:var(--gold)]" />}
              </button>
              {open === i && (
                <p className="pb-6 text-muted-foreground leading-relaxed animate-fade-up">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
