import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import loungeImg from "@/assets/lounge.jpg";
import chauffeurImg from "@/assets/chauffeur.jpg";
import conciergeImg from "@/assets/concierge.jpg";
import airportImg from "@/assets/airport-aerial.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Altitude Journal — Travel & Concierge Insights" },
      { name: "description", content: "Travel tips, airport guides, executive travel and concierge insights for the discerning African traveller." },
      { property: "og:title", content: "The Altitude Journal" },
      { property: "og:description", content: "Insights on premium travel across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Blog,
});

const posts = [
  { cat: "Airport Guides", title: "Navigating Jomo Kenyatta: A Premium Traveller's Guide", img: airportImg, date: "Jun 2026" },
  { cat: "Executive Travel", title: "Why Fast-Track Pays for Itself on Every Business Trip", img: loungeImg, date: "May 2026" },
  { cat: "Concierge Insights", title: "The Quiet Art of Discretion in Luxury Service", img: conciergeImg, date: "May 2026" },
  { cat: "Travel Tips", title: "Five Things Diplomats Always Pack — and Why", img: chauffeurImg, date: "Apr 2026" },
  { cat: "Airport Guides", title: "Lagos Airport: What VIP Travellers Need to Know", img: airportImg, date: "Apr 2026" },
  { cat: "Business Travel", title: "Building a Corporate Travel Programme that Actually Works", img: loungeImg, date: "Mar 2026" },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="The Altitude Journal"
        title="Insights from the world of premium travel."
        image={loungeImg}
      />
      <section className="py-24">
        <div className="container-luxe grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="relative h-[280px] overflow-hidden mb-6">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                <span className="text-[color:var(--gold)]">{p.cat}</span>
                <span>·</span>
                <span>{p.date}</span>
              </div>
              <h3 className="text-xl font-display font-semibold group-hover:text-[color:var(--gold)] transition-colors leading-tight">
                {p.title}
              </h3>
              <span className="link-gold mt-5">Read article <ArrowRight size={14} /></span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
