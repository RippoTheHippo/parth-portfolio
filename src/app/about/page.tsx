import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { ExposureReveal, LensReveal } from "@/components/reveal";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Parth Porwal, a cinematographer, director of photography, and filmmaker based out of IIT Roorkee.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About"
        title="I am interested in the emotional life of a frame."
        description={siteConfig.about.intro}
      />

      <section className="py-16 pb-24 sm:pb-32">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,0.78fr)] lg:items-start">
          <ExposureReveal className="space-y-8">
            {siteConfig.about.body.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-base leading-8 text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid gap-8 border-t border-white/8 pt-8 md:grid-cols-2">
              <div>
                <p className="eyebrow">Approach</p>
                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                  {siteConfig.about.philosophy}
                </p>
              </div>
              <div>
                <p className="eyebrow">Work</p>
                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                  {siteConfig.about.focus}
                </p>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.008))] px-6 py-6">
              <p className="text-[0.58rem] uppercase tracking-[0.34em] text-[#cfb388]">
                Personal note
              </p>
              <p className="mt-4 font-serif text-3xl leading-[1.02] text-foreground">
                I want an image to feel lived in before it feels beautiful.
              </p>
            </div>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/14 px-6 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition-colors duration-300 hover:border-white/28 hover:bg-white/4"
            >
              Instagram
            </a>
          </ExposureReveal>

          <LensReveal delay={0.08}>
            <div className="space-y-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/8 bg-surface">
                <Image
                  src="/portrait-placeholder.svg"
                  alt="Portrait placeholder for Parth Porwal"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.008))] px-5 py-5">
                <p className="text-[0.56rem] uppercase tracking-[0.34em] text-[#cfb388]">
                  Based in
                </p>
                <p className="mt-3 font-serif text-2xl text-foreground">
                  IIT Roorkee
                </p>
              </div>
            </div>
          </LensReveal>
        </Container>
      </section>
    </>
  );
}
