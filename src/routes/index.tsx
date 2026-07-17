import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { artworks } from "@/data/artworks";

const SITE_URL = "https://a13517358135939.lovable.app";
const HERO_PATH = "/hero-across-the-garden-state.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Benjamin Lydford | Australian Abstract Expressionist Painter" },
      {
        name: "description",
        content:
          "Official site of Benjamin Lydford, Australian abstract expressionist painter working in acrylic, oil and charcoal on canvas. View available paintings, sold archive and studio enquiries.",
      },
      { property: "og:title", content: "Benjamin Lydford | Australian Abstract Expressionist Painter" },
      {
        property: "og:description",
        content:
          "Official site of Australian abstract painter Benjamin Lydford. Available work, archive and studio enquiries.",
      },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: SITE_URL + HERO_PATH },
      { name: "twitter:image", content: SITE_URL + HERO_PATH },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Benjamin Lydford",
          url: SITE_URL + "/",
          author: { "@type": "Person", name: "Benjamin Lydford" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const headline = ["Earth,", "memory", "and", "quiet", "weather,", "held", "in", "paint."];
  return (
    <SiteLayout>
      <section className="relative">
        <div className="relative h-[calc(100vh-5rem)] min-h-[560px] w-full overflow-hidden bg-muted grain">
          <img
            src={heroAsset.url}
            alt="Across the Garden State — abstract expressionist painting by Benjamin Lydford, Australian artist"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover animate-hero-zoom animate-drift"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/70" />

          {/* floating monogram */}
          <div className="pointer-events-none absolute top-8 right-8 md:top-12 md:right-12 text-background/60 text-[11px] uppercase tracking-[0.4em] animate-fade-in delay-500">
            <span className="inline-block mr-3 h-px w-8 align-middle bg-background/50" />
            BL / 2025
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 pb-10 md:pb-16">
            <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-background/80 animate-fade-up delay-300">
                  <span className="inline-block mr-3 h-px w-8 align-middle bg-background/60" />
                  Benjamin Lydford — Abstract Painter
                </p>
                <h1 className="font-display text-4xl md:text-6xl text-background mt-4 max-w-3xl leading-[1.05] kinetic cursor-default">
                  {headline.map((w, i) => (
                    <span
                      key={i}
                      className="kinetic-word animate-fade-up"
                      style={{ animationDelay: `${400 + i * 90}ms`, marginRight: "0.28em" }}
                    >
                      {w}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="flex gap-4 text-xs uppercase tracking-[0.2em] animate-fade-up delay-900">
                <Link
                  to="/available"
                  className="border border-background/70 text-background px-5 py-2.5 hover:bg-background hover:text-foreground btn-lift"
                >
                  Available Work
                </Link>
                <Link
                  to="/archive"
                  className="text-background/90 px-1 py-2.5 border-b border-background/40 hover:border-background transition-colors link-underline"
                >
                  Archive
                </Link>
              </div>
            </div>
          </div>

          {/* scroll cue */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-4 flex flex-col items-center gap-2 text-background/70 animate-fade-in delay-900">
            <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
            <span className="h-8 w-px text-background/60 scroll-cue-line" />
          </div>
        </div>
      </section>

      {/* marquee strip */}
      <section aria-hidden className="border-y border-border/60 py-5 overflow-hidden bg-background/60">
        <div className="marquee-track animate-marquee">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            artworks.map((a) => (
              <span
                key={`${k}-${a.slug}`}
                className="font-display italic text-2xl md:text-3xl px-8 md:px-12 text-foreground/70 whitespace-nowrap"
              >
                {a.title}
                <span className="mx-6 text-accent">◆</span>
              </span>
            )),
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 reveal">
        <div className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="inline-block mr-3 h-px w-8 align-middle bg-muted-foreground/60" />
            Studio Note
          </p>
        </div>
        <div className="md:col-span-7">
          <p className="font-display text-2xl md:text-3xl leading-[1.35] text-foreground">
            An Australian abstract expressionist working in acrylic, oil and
            charcoal. The paintings gather earthy tones, weathered marks and slow
            gestures — records of landscape and thought.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="text-xs uppercase tracking-[0.2em] link-underline"
            >
              About the artist →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="flex items-end justify-between mb-8 reveal">
          <h2 className="font-display text-2xl md:text-3xl">Selected works</h2>
          <Link
            to="/archive"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground link-underline"
          >
            View archive →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {artworks.slice(0, 6).map((a, i) => (
            <Link
              key={a.slug}
              to="/archive/$slug"
              params={{ slug: a.slug }}
              className="group block artwork-card reveal-scale"
              style={{
                animationDelay: `${i * 80}ms`,
                transform: i % 2 === 1 ? "translateY(28px)" : undefined,
              }}
            >
              <div className="bg-muted aspect-[4/5] overflow-hidden">
                <img
                  src={a.images[0]}
                  alt={`${a.title} — ${a.medium} abstract painting by Australian artist Benjamin Lydford`}
                  loading="lazy"
                  className="artwork-img h-full w-full object-cover"
                />
              </div>
              <div className="artwork-meta mt-3">
                <p className="font-display text-lg italic">{a.title}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                  {a.medium.split(",")[0]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

