import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { type ReactNode } from "react";

const nav = [
  { to: "/", label: "Work" },
  { to: "/available", label: "Available" },
  { to: "/archive", label: "Archive" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-sm border-b border-border/60 animate-fade-in">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="font-display text-lg md:text-xl tracking-wide link-underline"
        >
          Benjamin Lydford
        </Link>
        <nav className="flex items-center gap-6 md:gap-9 text-[13px] uppercase tracking-[0.18em]">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <p>© {new Date().getFullYear()} Benjamin Lydford</p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/_benjaminmichael/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Enquire
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Curtain that lifts on every route change */}
      <div key={pathname} className="page-veil" aria-hidden />
      <SiteHeader />
      <main key={`m-${pathname}`} className="flex-1 animate-fade-in">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function PageOutlet() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
