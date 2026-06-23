import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import loungeImg from "@/assets/lounge.jpg";
import { submitCorporateInquiry } from "@/lib/supabase/forms";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Services & Accounts — ACS" },
      { name: "description", content: "Corporate travel management, dedicated concierge managers and monthly billing for corporations, embassies and NGOs." },
      { property: "og:title", content: "Corporate Services — Altitude Concierge" },
      { property: "og:description", content: "Account-managed premium travel programs across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Corporate,
});

const targets = ["Corporations", "Embassies", "NGOs", "Event Organisers", "Hotels", "Law Firms"];
const features = [
  "Dedicated Account Manager",
  "Faster Booking Channels",
  "Priority 24/7 Support",
  "Monthly Reporting",
  "Consolidated Billing",
  "Custom SLAs",
  "VIP Guest Handling",
  "Executive Travel Management",
];

function Corporate() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Corporate"
        title="A travel partner your executives can rely on."
        subtitle="Programs designed for organisations that move people across borders — without compromising on service."
        image={loungeImg}
      >
        <Link to="/contact" className="btn-gold">Request Corporate Partnership</Link>
      </PageHero>

      <section className="py-24">
        <div className="container-luxe">
          <div className="flex flex-wrap gap-3 mb-16">
            {targets.map((t) => (
              <span key={t} className="px-5 py-2 border border-border text-sm font-display uppercase tracking-[0.18em]">{t}</span>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Account Benefits</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Everything your team needs, in one account.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Open a corporate account and gain a single point of contact, transparent monthly billing,
                and a service standard your guests will remember.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 p-5 bg-secondary">
                  <CheckCircle2 className="text-[color:var(--gold)] mt-0.5 shrink-0" size={20} />
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[color:var(--navy)] text-white">
        <div className="container-luxe max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Speak to our Corporate Desk</h2>
          <p className="mt-4 text-white/70">A senior manager will be in touch within one business day.</p>
          {sent ? (
            <div className="mt-10 rounded-none border border-white/10 bg-white/5 p-8 text-left">
              <p className="eyebrow text-white/70 mb-3">Thank you</p>
              <p className="text-lg font-display font-semibold">Your corporate enquiry has been received.</p>
              <p className="mt-2 text-white/70">A senior manager will be in touch shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setError(null);
                setIsSubmitting(true);

                try {
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  await submitCorporateInquiry({
                    data: {
                      companyName: String(formData.get("company") ?? ""),
                      fullName: String(formData.get("name") ?? ""),
                      email: String(formData.get("email") ?? ""),
                      phone: String(formData.get("phone") ?? ""),
                      requirements: String(formData.get("requirements") ?? ""),
                      sourcePath: window.location.pathname,
                      referrer: document.referrer,
                    },
                  });
                  setSent(true);
                } catch (submissionError) {
                  setError(submissionError instanceof Error ? submissionError.message : "Unable to submit your enquiry.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="mt-10 grid gap-4 md:grid-cols-2 text-left"
            >
              <input name="company" required placeholder="Company" className="bg-white/5 border border-white/10 px-5 py-3.5 outline-none focus:border-[color:var(--gold)]" />
              <input name="name" required placeholder="Full Name" className="bg-white/5 border border-white/10 px-5 py-3.5 outline-none focus:border-[color:var(--gold)]" />
              <input name="email" required type="email" placeholder="Work Email" className="bg-white/5 border border-white/10 px-5 py-3.5 outline-none focus:border-[color:var(--gold)]" />
              <input name="phone" required placeholder="Phone" className="bg-white/5 border border-white/10 px-5 py-3.5 outline-none focus:border-[color:var(--gold)]" />
              <textarea name="requirements" placeholder="Tell us about your requirements" rows={4} className="md:col-span-2 bg-white/5 border border-white/10 px-5 py-3.5 outline-none focus:border-[color:var(--gold)]" />
              {error ? <p className="text-sm text-red-300 md:col-span-2">{error}</p> : null}
              <button type="submit" className="btn-gold md:col-span-2 justify-self-start" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
