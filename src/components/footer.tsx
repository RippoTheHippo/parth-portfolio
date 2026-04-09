import Link from "next/link";

import { Container } from "@/components/container";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="py-10 sm:py-14">
      <Container className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.008))] px-6 py-6 sm:px-8">
        <div className="flex flex-col gap-5 text-[0.62rem] uppercase tracking-[0.28em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.footerNote}</p>
          <div className="flex flex-wrap items-center gap-4 sm:justify-end">
            <span>{siteConfig.name}</span>
            <Link href="/projects" className="transition-colors hover:text-foreground">
              Archive
            </Link>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-6 h-px w-full bg-white/8" />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-2xl text-foreground">{siteConfig.name}</p>
          <p className="max-w-xl text-sm leading-7 text-muted">
            A personal portfolio in moving image, framed with restraint.
          </p>
        </div>
      </Container>
    </footer>
  );
}
