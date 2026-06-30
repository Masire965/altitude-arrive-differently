import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/ARRIVAL IMG.png";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Airport Meet & Assist - ACS" },
      { name: "description", content: "Book safe airport meet & assist, guided arrivals, transfers and travel support in under two minutes." },
      { property: "og:title", content: "Book Airport Meet & Assist - Altitude" },
      { property: "og:description", content: "Reserve safe airport assistance across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Booking,
});

function Booking() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <>
        <PageHero eyebrow="Confirmed" title="Your request is received." image={heroImg} />
        <section className="py-24">
          <div className="container-luxe max-w-xl text-center card-luxe">
            <CheckCircle2 className="text-[color:var(--gold)] mx-auto mb-6" size={48} strokeWidth={1.2} />
            <p className="eyebrow mb-3">Booking Reference</p>
            <p className="font-display text-3xl font-semibold tracking-widest">{submitted}</p>
            <p className="mt-6 text-muted-foreground">
              A member of our team will be in touch shortly to confirm every detail.
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
        title="Confirm your travel support."
        subtitle="Tell us about your travel and we will prepare the safest, clearest arrival plan."
        image={heroImg}
      />

      <section className="py-24">
        <div className="container-luxe max-w-3xl">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              setIsSubmitting(true);

              try {
                const form = e.currentTarget;
                const formData = new FormData(form);
                const { submitBookingRequest } = await import("@/lib/supabase/forms");

                const result = await submitBookingRequest({
                  data: {
                    fullName: String(formData.get("name") ?? ""),
                    email: String(formData.get("email") ?? ""),
                    phone: String(formData.get("phone") ?? ""),
                    nationality: String(formData.get("nationality") ?? ""),
                    airline: String(formData.get("airline") ?? ""),
                    flightNumber: String(formData.get("flight") ?? ""),
                    arrivalAirport: String(formData.get("arrival") ?? ""),
                    departureAirport: String(formData.get("departure") ?? ""),
                    travelDate: String(formData.get("date") ?? ""),
                    travelTime: String(formData.get("time") ?? ""),
                    serviceType: String(formData.get("service") ?? ""),
                    additionalNotes: String(formData.get("notes") ?? ""),
                    sourcePath: window.location.pathname,
                    referrer: document.referrer,
                  },
                });

                setSubmitted(result.reference);
                window.scrollTo({ top: 0, behavior: "smooth" });
              } catch (submissionError) {
                setError(submissionError instanceof Error ? submissionError.message : "Unable to submit your request.");
              } finally {
                setIsSubmitting(false);
              }
            }}
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
                options={["Arrival Assistance", "Departure Assistance", "Transit Assistance", "Airport Transfer", "Concierge", "Corporate"]}
              />
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-display">Additional Notes</label>
                <textarea name="notes" rows={4} className="w-full bg-background border border-border focus:border-[color:var(--gold)] outline-none px-4 py-3" />
              </div>
            </Section>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <button type="submit" className="btn-gold w-full md:w-auto" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Confirm Request"}
            </button>
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
