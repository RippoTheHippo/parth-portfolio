"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/container";
import { siteConfig } from "@/content/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[linear-gradient(180deg,rgba(5,5,5,0.9),rgba(5,5,5,0.48),transparent)]">
      <Container className="flex min-h-20 items-center justify-between gap-6 py-3">
        <Link
          href="/"
          className="flex min-w-0 flex-col justify-center"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="font-serif text-lg leading-none tracking-[0.03em] text-foreground sm:text-xl">
            {siteConfig.name}
          </span>
          <span className="mt-2 text-[0.56rem] uppercase tracking-[0.34em] text-muted">
            {siteConfig.shortTitle}
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="rounded-full border border-white/8 bg-black/18 px-4 py-3 backdrop-blur-[4px]"
        >
          <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-[0.62rem] uppercase tracking-[0.28em] text-muted sm:gap-x-5 sm:text-[0.68rem]">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      isActive
                        ? "text-foreground/95"
                        : "transition-colors duration-300 hover:text-foreground"
                    }
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-foreground"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
