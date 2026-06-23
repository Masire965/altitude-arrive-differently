import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-arrival.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Concierge Service — ACS" },
      { name: "description", content: "Book VIP airport meet & assist, chauffeur transfers and concierge services in under two minutes." },
      { property: "og:title", content: "Book a Concierge Service — Altitude" },
      { property: "og:description", content: "Reserve premium airport assistance across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Booking,
});

function generateRef() {
  return "ACS-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function Booking() {
  const [submitted, setSubmitted] = useState<string | null>(null);

  if (submitted) {
    return (
      <>
        <PageHero eyebrow="Confirmed" title="Your concierge request is received." image={heroImg} />
        <section className="py-24">
          <div className="container-luxe max-w-xl text-center card-luxe">
            <CheckCircle2 className="text-[color:var(--gold)] mx-auto mb-6" size={48} strokeWidth={1.2} />
            <p className="eyebrow mb-3">Booking Reference</p>
            <p className="font-display text-3xl font-semibold tracking-widest">{submitted}</p>
            <p className="mt-6 text-muted-foreground">
              A senior concierge will be in touch shortly to confirm every detail.
              You will also receive WhatsApp updates leading up to your service.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Book"
        title="Confirm your concierge request."
        subtitle="Tell us about your travel — we'll take care of the rest."
        image={heroImg}
      />

      <section className="py-24">
        <div className="container-luxe max-w-3xl">
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(generateRef()); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="space-y-12"
          >
            <Section title="Passenger Information">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone (with country code)" name="phone" required />
              <Field label="Nationality" name="nationality" />
            </Section>

            <Section title="Flight Information">
              <Field label="Airline" name="airline" required />
              <Field label="Flight Number" name="flight" required />
              <Select label="Arrival Airport" name="arrival" options={["Nairobi (NBO)", "Accra (ACC)", "Lagos (LOS)"]} />
              <Select label="Departure Airport" name="departure" options={["Nairobi (NBO)", "Accra (ACC)", "Lagos (LOS)", "Other"]} />
              <Field label="Date" name="date" type="date" required />
              <Field label="Time" name="time" type="time" required />
            </Section>

            <Section title="Service Required">
              <Select
                label="Service Type"
                name="service"
                options={["Arrival Assistance", "Departure Assistance", "Transit Assistance", "Concierge", "Chauffeur", "Corporate"]}
              />
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-display">Additional Notes</label>
                <textarea name="notes" rows={4} className="w-full bg-background border border-border focus:border-[color:var(--gold)] outline-none px-4 py-3" />
              </div>
            </Section>

            <button type="submit" className="btn-gold w-full md:w-auto">Confirm Concierge Request</button>
          </form>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-2">{title}</p>
      <div className="border-t border-border pt-6 grid md:grid-cols-2 gap-5">{children}</div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-display">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} className="w-full bg-background border border-border focus:border-[color:var(--gold)] outline-none px-4 py-3" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-display">{label}</label>
      <select name={name} className="w-full bg-background border border-border focus:border-[color:var(--gold)] outline-none px-4 py-3">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
