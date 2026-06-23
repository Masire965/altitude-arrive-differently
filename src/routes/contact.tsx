import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";
import loungeImg from "@/assets/lounge.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Altitude Concierge Services" },
      { name: "description", content: "Reach our concierge desk by phone, email or WhatsApp — 24/7 across Kenya, Ghana and Nigeria." },
      { property: "og:title", content: "Contact Altitude Concierge" },
      { property: "og:description", content: "Reach our concierge desk — 24/7 across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with our concierge desk."
        subtitle="We respond within minutes — at any hour, in any time zone."
        image={loungeImg}
      />

      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            {[
              { icon: Phone, label: "Phone", value: "+254 700 000 000" },
              { icon: Mail, label: "Email", value: "concierge@altitudeacs.com" },
              { icon: MessageCircle, label: "WhatsApp", value: "+254 700 000 000" },
              { icon: MapPin, label: "Hubs", value: "Nairobi · Accra · Lagos" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center border border-[color:var(--gold)]/50">
                  <c.icon className="text-[color:var(--gold)]" size={18} />
                </div>
                <div>
                  <p className="eyebrow">{c.label}</p>
                  <p className="mt-1 font-display">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            {sent ? (
              <div className="card-luxe text-center py-16">
                <p className="eyebrow mb-3">Thank you</p>
                <h3 className="text-2xl font-display font-semibold">Your message has been received.</h3>
                <p className="mt-4 text-muted-foreground">A senior concierge will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <Field label="Subject" name="subject" />
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-display">Message *</label>
                  <textarea name="message" rows={6} required className="w-full bg-background border border-border focus:border-[color:var(--gold)] outline-none px-4 py-3" />
                </div>
                <button type="submit" className="btn-gold md:col-span-2 justify-self-start">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="h-[400px] relative bg-secondary">
        <iframe
          title="Office Location"
          className="absolute inset-0 h-full w-full grayscale contrast-110"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.30015534118!2d36.7820745!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNairobi!5e0!3m2!1sen!2sus!4v1700000000000"
          loading="lazy"
        />
      </section>
    </>
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
