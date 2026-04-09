import Link from "next/link";

import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center py-32">
      <Container className="max-w-3xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-6 font-serif text-5xl leading-[0.94] text-foreground sm:text-6xl">
          The frame you were looking for is not here.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
          Return to the main portfolio and continue through the selected work.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full border border-white/14 px-6 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition-colors duration-300 hover:border-white/28 hover:bg-white/4"
        >
          Back Home
        </Link>
      </Container>
    </section>
  );
}
