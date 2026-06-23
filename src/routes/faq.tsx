import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import loungeImg from "@/assets/lounge.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Altitude Concierge Services" },
      { name: "description", content: "Common questions about pricing, airport access, fast track, cancellations and corporate accounts." },
      { property: "og:title", content: "Frequently Asked Questions — ACS" },
      { property: "og:description", content: "Answers about ACS concierge and meet & assist services." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "How is pricing structured?", a: "Each service is priced based on the airport, level of assistance and number of passengers. We provide transparent per-service quotes and bespoke corporate rates for accounts." },
  { q: "How do you access restricted airport areas?", a: "Our protocol officers are accredited and badged for airside access at every airport we operate, allowing us to greet you at the aircraft door where permitted." },
  { q: "What does Fast Track include?", a: "Fast Track gives you expedited immigration, security and customs clearance through dedicated VIP lanes — saving an average of 45+ minutes." },
  { q: "What if my flight is delayed?", a: "Our concierge desk monitors flights in real time and adjusts officer scheduling. There is no additional fee for normal delays." },
  { q: "What is your cancellation policy?", a: "Cancellations made more than 12 hours before service are fully refundable. Within 12 hours, a 50% fee may apply." },
  { q: "How do I open a corporate account?", a: "Visit our Corporate page or contact us directly. Onboarding typically takes 2–3 business days and includes a dedicated account manager." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions." image={loungeImg} />
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
