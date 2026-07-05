import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/available")({
  head: () => ({
    meta: [
      { title: "Available Work | Benjamin Lydford" },
      {
        name: "description",
        content:
          "Current paintings available for purchase by Australian abstract artist Benjamin Lydford.",
      },
      { property: "og:title", content: "Available Work | Benjamin Lydford" },
      {
        property: "og:description",
        content: "Current paintings available for purchase.",
      },
      { property: "og:url", content: "/available" },
    ],
    links: [{ rel: "canonical", href: "/available" }],
  }),
  component: Available,
});

function Available() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-10">
        <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Current Collection
        </p>
        <h1 className="font-display text-4xl md:text-5xl mt-4">Available Work</h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="border-t border-border pt-16 pb-24 text-center">
          <p className="font-display text-2xl md:text-3xl max-w-2xl mx-auto leading-[1.35]">
            New works are currently in the studio. A refreshed collection will
            be listed here shortly.
          </p>
          <p className="mt-6 text-sm text-muted-foreground max-w-md mx-auto">
            For a preview of available paintings, commissioned pieces or gallery
            enquiries, please get in touch.
          </p>
          <div className="mt-10 flex justify-center gap-4 text-xs uppercase tracking-[0.2em]">
            <Link
              to="/contact"
              className="border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              Enquire
            </Link>
            <Link
              to="/archive"
              className="px-6 py-3 border-b border-foreground/40 hover:border-foreground"
            >
              View Archive
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
