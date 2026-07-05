import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { artworks } from "@/data/artworks";

export const Route = createFileRoute("/archive/$slug")({
  loader: ({ params }) => {
    const artwork = artworks.find((a) => a.slug === params.slug);
    if (!artwork) throw notFound();
    return { artwork };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found | Benjamin Lydford" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const a = loaderData.artwork;
    const title = `${a.title} | Benjamin Lydford`;
    const desc = `${a.title} — ${a.medium}. ${a.dimensions}. Painting by Australian abstract artist Benjamin Lydford.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:image", content: a.images[0] },
        { property: "og:url", content: `/archive/${params.slug}` },
        { name: "twitter:image", content: a.images[0] },
      ],
      links: [{ rel: "canonical", href: `/archive/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VisualArtwork",
            name: a.title,
            artMedium: a.medium,
            artform: "Painting",
            artworkSurface: "Canvas",
            creator: { "@type": "Person", name: "Benjamin Lydford" },
            image: a.images[0],
            description: desc,
          }),
        },
      ],
    };
  },
  component: ArtworkPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-32 text-center">
        <h1 className="font-display text-3xl">Painting not found</h1>
        <Link
          to="/archive"
          className="mt-8 inline-block text-xs uppercase tracking-[0.2em] border-b border-foreground pb-1"
        >
          Back to archive
        </Link>
      </div>
    </SiteLayout>
  ),
});

function ArtworkPage() {
  const { artwork } = Route.useLoaderData();
  return (
    <SiteLayout>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10">
        <Link
          to="/archive"
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
        >
          ← Archive
        </Link>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-8 pb-16 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-8">
          <div className="bg-muted">
            <img
              src={artwork.images[0]}
              alt={`${artwork.title} — painting by Benjamin Lydford`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <aside className="md:col-span-4 md:pt-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Benjamin Lydford
          </p>
          <h1 className="font-display text-3xl md:text-4xl italic mt-3">
            {artwork.title}
          </h1>

          <dl className="mt-10 space-y-5 text-sm">
            {artwork.style && (
              <Row label="Style" value={artwork.style} />
            )}
            {artwork.medium && <Row label="Medium" value={artwork.medium} />}
            {artwork.framing && <Row label="Framing" value={artwork.framing} />}
            {artwork.dimensions && (
              <Row label="Dimensions" value={artwork.dimensions} />
            )}
            <Row label="Status" value="Sold" />
          </dl>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block border border-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
            >
              Enquire about similar work
            </Link>
          </div>
        </aside>
      </section>

      {artwork.images.length > 1 && (
        <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {artwork.images.slice(1).map((src, i) => (
              <div key={src} className="bg-muted">
                <img
                  src={src}
                  alt={`${artwork.title} — view ${i + 2}`}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 border-b border-border pb-4">
      <dt className="col-span-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground pt-0.5">
        {label}
      </dt>
      <dd className="col-span-2 text-foreground leading-relaxed">{value}</dd>
    </div>
  );
}
