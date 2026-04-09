import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { ExposureReveal, FrameReveal } from "@/components/reveal";

type PageIntroProps = {
  label: string;
  title: ReactNode;
  description: ReactNode;
};

export function PageIntro({ label, title, description }: PageIntroProps) {
  return (
    <section className="pt-32 sm:pt-36">
      <Container>
        <FrameReveal className="max-w-6xl rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.008))] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_16rem] lg:items-end">
            <div>
              <p className="eyebrow">{label}</p>
              <ExposureReveal delay={0.08}>
                <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.2rem,7vw,6.8rem)] leading-[0.88] tracking-[-0.05em] text-foreground">
                  {title}
                </h1>
              </ExposureReveal>
              <ExposureReveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  {description}
                </p>
              </ExposureReveal>
            </div>
            <ExposureReveal
              delay={0.2}
              className="hidden rounded-[1.6rem] border border-white/8 bg-black/18 p-5 lg:block"
            >
              <div className="space-y-4">
                <p className="text-[0.56rem] uppercase tracking-[0.34em] text-[#cfb388]">
                  Portfolio Edition
                </p>
                <div className="h-px w-full bg-white/8" />
                <p className="text-sm leading-7 text-muted">
                  Quiet surfaces, strong typography, and only selective motion.
                </p>
              </div>
            </ExposureReveal>
          </div>
        </FrameReveal>
      </Container>
    </section>
  );
}
