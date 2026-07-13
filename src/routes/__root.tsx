import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-6xl text-foreground">404</p>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-foreground px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Please try again or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-foreground px-6 py-2 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-border px-6 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Benjamin Lydford | Abstract Artist" },
      {
        name: "description",
        content:
          "Benjamin Lydford is an Australian abstract expressionist painter working in acrylic, oil and charcoal. Explore available works, archive and studio enquiries.",
      },
      { name: "author", content: "Benjamin Lydford" },
      {
        name: "keywords",
        content:
          "Benjamin Lydford, Ben Lydford, Benjamin Lydford Art, Australian abstract art, Abstract artist, Abstract painter, Australian painter",
      },
      { property: "og:title", content: "Benjamin Lydford | Abstract Artist" },
      {
        property: "og:description",
        content:
          "Benjamin Lydford is an Australian abstract expressionist painter working in acrylic, oil and charcoal. Explore available works, archive and studio enquiries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Benjamin Lydford" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Benjamin Lydford | Abstract Artist" },
      {
        name: "twitter:description",
        content: "Benjamin Lydford is an Australian abstract expressionist painter working in acrylic, oil and charcoal. Explore available works, archive and studio enquiries.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b7bc0e1e-e026-442c-a588-fbe150616b2e/id-preview-389095cd--5188ee9e-24b0-4618-9392-653aa1374508.lovable.app-1783491366102.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b7bc0e1e-e026-442c-a588-fbe150616b2e/id-preview-389095cd--5188ee9e-24b0-4618-9392-653aa1374508.lovable.app-1783491366102.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Benjamin Lydford",
          alternateName: ["Ben Lydford", "Benjamin Michael Lydford"],
          jobTitle: "Abstract Expressionist Painter",
          description:
            "Australian abstract expressionist painter working in acrylic, oil and charcoal on canvas.",
          url: "https://a13517358135939.lovable.app",
          nationality: { "@type": "Country", name: "Australia" },
          workLocation: { "@type": "Place", name: "Victoria, Australia" },
          knowsAbout: [
            "Abstract art",
            "Abstract expressionism",
            "Australian painting",
            "Acrylic painting",
            "Oil painting",
            "Charcoal drawing",
          ],
          sameAs: ["https://www.instagram.com/_benjaminmichael/"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
