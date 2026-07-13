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
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pt-20 md:pt-32 pb-20">
        <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Biography
        </p>
        <h1 className="font-display text-4xl md:text-6xl mt-6 max-w-3xl leading-[1.05]">
          Benjamin Lydford
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Abstract Expressionist Painter — Victoria, Australia
        </p>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] bg-muted flex items-center justify-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Portrait to come
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-[17px] leading-[1.7] text-foreground/90">
            <p className="font-display text-2xl md:text-[26px] leading-[1.4] text-foreground">
              Benjamin Lydford is an Australian abstract painter working across
              acrylic, oil and charcoal on canvas.
            </p>
            <p>
              His practice moves between the tactile and the atmospheric —
              earthy, muted tones layered with weathered marks, considered
              gestures and quiet erasures. Each painting is built slowly:
              addition, subtraction, and time held in the surface.
            </p>
            <p>
              Drawing on landscape, memory and the residue of everyday life,
              Lydford's work sits within a lineage of Australian abstract
              expressionism while carrying a distinctly personal restraint.
            </p>
            <p className="text-muted-foreground italic">
              A fuller biography and studio images will be added shortly.
            </p>

            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-block border border-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
              >
                Studio enquiries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
