import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { artworks } from "@/data/artworks";

const SITE_URL = "https://a13517358135939.lovable.app";

export const Route = createFileRoute("/archive/")({
  head: () => ({
    meta: [
      { title: "Archive | Sold Paintings by Benjamin Lydford" },
      {
        name: "description",
        content:
          "Archive of sold and previously exhibited abstract paintings by Australian artist Benjamin Lydford. Acrylic, oil and charcoal on canvas.",
      },
      { property: "og:title", content: "Archive | Sold Paintings by Benjamin Lydford" },
      {
        property: "og:description",
        content: "Sold and previously exhibited paintings by Benjamin Lydford.",
      },
      { property: "og:url", content: SITE_URL + "/archive" },
      { property: "og:image", content: artworks[0].images[0] },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/archive" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Archive — Paintings by Benjamin Lydford",
          url: SITE_URL + "/archive",
          about: { "@type": "Person", name: "Benjamin Lydford" },
          hasPart: artworks.map((a) => ({
            "@type": "VisualArtwork",
            name: a.title,
            artMedium: a.medium,
            artform: "Painting",
            artworkSurface: "Canvas",
            image: a.images[0],
            url: `${SITE_URL}/archive/${a.slug}`,
            creator: { "@type": "Person", name: "Benjamin Lydford" },
          })),
        }),
      },
    ],
  }),
  component: Archive,
});

function Archive() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground animate-fade-up">
          Sold & Past Works
        </p>
        <h1 className="font-display text-4xl md:text-5xl mt-4 animate-fade-up delay-100">
          Archive
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground animate-fade-up delay-200">
          A record of paintings from previous collections and exhibitions.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-14 md:gap-y-20">
          {artworks.map((a, i) => (
            <Link
              key={a.slug}
              to="/archive/$slug"
              params={{ slug: a.slug }}
              className="group block artwork-card animate-fade-up"
              style={{ animationDelay: `${120 + i * 70}ms` }}
            >
              <div className="bg-muted aspect-[4/5] overflow-hidden">
                <img
                  src={a.images[0]}
                  alt={`${a.title} — ${a.medium}, ${a.dimensions.split(" / ")[0]}. Abstract painting by Benjamin Lydford.`}
                  loading="lazy"
                  className="artwork-img h-full w-full object-cover"
                />
              </div>
              <div className="artwork-meta mt-4">
                <p className="font-display text-xl italic">{a.title}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  {a.medium}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80 mt-2">
                  Sold
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
