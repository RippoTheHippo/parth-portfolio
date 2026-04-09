import type { ReactNode } from "react";

import { FilmProgress } from "@/components/film-progress";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <FilmProgress />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Header />
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
