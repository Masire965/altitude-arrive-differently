import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import meetGreetImg from "@/assets/Welcome to lagos.png";
import transferImg from "@/assets/chauffer.png";
import guideImg from "@/assets/show around.png";
import airportImg from "@/assets/Arrivees.png";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Altitude Journal - Airport Safety & Travel Tips" },
      { name: "description", content: "Airport safety tips, arrival guides and practical travel support across Kenya, Ghana and Nigeria." },
      { property: "og:title", content: "The Altitude Journal" },
      { property: "og:description", content: "Practical airport and travel guidance across Kenya, Ghana and Nigeria." },
    ],
  }),
  component: Blog,
});

const posts = [
  { cat: "Airport Guides", title: "Navigating Jomo Kenyatta with Confidence", img: airportImg, date: "Jun 2026" },
  { cat: "Arrival Tips", title: "What to Expect When Someone Meets You at Arrivals", img: meetGreetImg, date: "May 2026" },
  { cat: "Travel Safety", title: "How Solo Travellers Can Feel Safer After Landing", img: guideImg, date: "May 2026" },
  { cat: "Transfers", title: "Choosing a Reliable Airport Pick-up", img: transferImg, date: "Apr 2026" },
  { cat: "Airport Guides", title: "Lagos Airport: Arrival Tips for Everyday Travellers", img: airportImg, date: "Apr 2026" },
  { cat: "Business Travel", title: "Building a Travel Program People Can Trust", img: guideImg, date: "Mar 2026" },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="The Altitude Journal"
        title="Practical guidance for safer travel."
        image={guideImg}
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
                <span>|</span>
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
