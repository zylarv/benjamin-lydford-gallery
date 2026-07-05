import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { artworks } from "@/data/artworks";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const hero = artworks[0];
  return (
    <SiteLayout>
      <section className="relative">
        <div className="relative h-[calc(100vh-5rem)] min-h-[560px] w-full overflow-hidden bg-muted">
          <img
            src={hero.images[0]}
            alt={`${hero.title} — painting by Benjamin Lydford`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/50" />
          <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 pb-10 md:pb-16">
            <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-background/80">
                  Benjamin Lydford — Abstract Painter
                </p>
                <h1 className="font-display text-4xl md:text-6xl text-background mt-4 max-w-3xl leading-[1.05]">
                  Earth, memory and quiet weather, held in paint.
                </h1>
              </div>
              <div className="flex gap-4 text-xs uppercase tracking-[0.2em]">
                <Link
                  to="/available"
                  className="border border-background/70 text-background px-5 py-2.5 hover:bg-background hover:text-foreground transition-colors"
                >
                  Available Work
                </Link>
                <Link
                  to="/archive"
                  className="text-background/90 px-1 py-2.5 border-b border-background/40 hover:border-background transition-colors"
                >
                  Archive
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
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
              className="text-xs uppercase tracking-[0.2em] border-b border-foreground pb-1"
            >
              About the artist
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl">Selected works</h2>
          <Link
            to="/archive"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            View archive →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {artworks.slice(0, 6).map((a) => (
            <Link
              key={a.slug}
              to="/archive/$slug"
              params={{ slug: a.slug }}
              className="group block"
            >
              <div className="bg-muted aspect-[4/5] overflow-hidden">
                <img
                  src={a.images[0]}
                  alt={`${a.title} — painting by Benjamin Lydford`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3">
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
