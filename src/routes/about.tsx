import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

const SITE_URL = "https://a13517358135939.lovable.app";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Benjamin Lydford | Australian Abstract Painter" },
      {
        name: "description",
        content:
          "Biography and studio statement of Benjamin Lydford, Australian abstract expressionist painter based in Victoria, working in acrylic, oil and charcoal on canvas.",
      },
      { property: "og:title", content: "About Benjamin Lydford | Australian Abstract Painter" },
      {
        property: "og:description",
        content:
          "Biography and studio statement of Australian abstract expressionist painter Benjamin Lydford.",
      },
      { property: "og:url", content: SITE_URL + "/about" },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: SITE_URL + "/about",
          mainEntity: { "@type": "Person", name: "Benjamin Lydford" },
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      {/* Editorial masthead */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 pt-24 md:pt-36 pb-10">
        <div className="flex items-center gap-4 animate-fade-up">
          <span className="h-px w-12 bg-foreground/40" />
          <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            Biography — Vol. I
          </p>
        </div>
        <h1 className="font-display text-6xl md:text-[9rem] mt-8 leading-[0.9] tracking-tight kinetic cursor-default">
          {["Benjamin", "Lydford"].map((w, i) => (
            <span
              key={w}
              className="kinetic-word block animate-fade-up italic"
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              {w}
            </span>
          ))}
        </h1>
        <p className="mt-8 text-sm uppercase tracking-[0.28em] text-muted-foreground animate-fade-up delay-500">
          Abstract Expressionist Painter · Victoria, Australia
        </p>
      </section>

      {/* Editorial body */}
      <section className="mx-auto max-w-[900px] px-6 md:px-10 pt-8 pb-16">
        <p className="font-display text-3xl md:text-4xl leading-[1.25] text-foreground reveal dropcap">
          Benjamin Lydford is an Australian abstract painter working across
          acrylic, oil and charcoal on canvas — an ongoing study of surface,
          silence and the slow accumulation of gesture.
        </p>

        <div className="mt-16 space-y-8 text-[17px] md:text-[18px] leading-[1.8] text-foreground/90">
          <p className="reveal">
            His practice moves between the tactile and the atmospheric — earthy,
            muted tones layered with weathered marks, considered gestures and
            quiet erasures. Each painting is built slowly: addition, subtraction
            and time held in the surface.
          </p>
          <p className="reveal">
            Drawing on landscape, memory and the residue of everyday life,
            Lydford's work sits within a lineage of Australian abstract
            expressionism while carrying a distinctly personal restraint.
          </p>
        </div>

        {/* pull quote */}
        <figure className="my-20 reveal">
          <div className="border-l-2 border-accent pl-6 md:pl-10">
            <blockquote className="font-display italic text-2xl md:text-4xl leading-[1.3] text-foreground">
              "Addition, subtraction, and time — held in the surface."
            </blockquote>
            <figcaption className="mt-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              — Studio, 2025
            </figcaption>
          </div>
        </figure>

        <p className="text-muted-foreground italic text-sm reveal">
          A fuller biography and studio images will be added shortly.
        </p>
      </section>

      {/* Details grid */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 border-t border-border/60 reveal">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 text-sm">
          {[
            { k: "Based", v: "Victoria, Australia" },
            { k: "Medium", v: "Acrylic · Oil · Charcoal" },
            { k: "Surface", v: "Canvas" },
            { k: "Practice", v: "Since 2018" },
          ].map((d) => (
            <div key={d.k} className="group">
              <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {d.k}
              </dt>
              <dd className="mt-3 font-display text-xl md:text-2xl italic transition-transform duration-500 group-hover:translate-x-1">
                {d.v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10 pt-4 pb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 reveal">
        <p className="font-display italic text-3xl md:text-5xl leading-[1.1] max-w-xl">
          For studio enquiries, commissions or gallery representation.
        </p>
        <Link
          to="/contact"
          className="inline-block border border-foreground px-8 py-4 text-xs uppercase tracking-[0.28em] btn-lift hover:bg-foreground hover:text-background transition-colors"
        >
          Get in touch →
        </Link>
      </section>
    </SiteLayout>
  );
}
