import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { ExposureReveal, FrameReveal } from "@/components/reveal";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Parth Porwal for films, music videos, and moving-image collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title="For films, songs, images, and conversations that need time and attention."
        description={siteConfig.contact.intro}
      />

      <section className="py-16 pb-24 sm:pb-32">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]">
          <ExposureReveal className="space-y-8">
            <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.008))] px-6 py-6">
              <p className="eyebrow">Write</p>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex font-serif text-3xl text-foreground transition-colors hover:text-accent"
              >
                Instagram
              </a>
              <p className="mt-5 max-w-lg text-base leading-8 text-muted sm:text-lg">
                {siteConfig.contact.note}
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/8 bg-black/16 px-6 py-6">
              <p className="text-[0.56rem] uppercase tracking-[0.34em] text-[#cfb388]">
                Preferred material
              </p>
              <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
                Script, treatment, music reference, moodboard, or a short note
                describing the world you want to build.
              </p>
            </div>
          </ExposureReveal>

          <FrameReveal
            delay={0.08}
            className="rounded-[2rem] border border-white/8 bg-surface px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:px-8 sm:py-10"
          >
            <ContactForm />
          </FrameReveal>
        </Container>
      </section>
    </>
  );
}
