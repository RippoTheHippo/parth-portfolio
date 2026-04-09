import type { Metadata } from "next";

import { ArchiveLedger } from "@/components/archive-ledger";
import { ArchiveMontage } from "@/components/archive-montage";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { ExposureReveal, FrameReveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "A filmography archive of short films, music videos, and experimental work by Parth Porwal.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        label="Archive"
        title="A running filmography of frames, songs, silences, and scenes."
        description="Short films, music videos, and experimental moving-image work arranged as an archive rather than a set of case studies."
      />

      <section className="py-16">
        <Container className="space-y-10">
          <ExposureReveal className="grid gap-6 border-t border-white/8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
            <div>
              <p className="eyebrow">Featured Frames</p>
            </div>
            <div className="max-w-3xl">
              <p className="text-base leading-8 text-muted sm:text-lg">
                Selected stills from the archive, arranged more like a private
                viewing table than a project index.
              </p>
            </div>
          </ExposureReveal>

          <FrameReveal delay={0.05}>
            <ArchiveMontage projects={projects.slice(0, 6)} />
          </FrameReveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="space-y-10">
          <ExposureReveal className="grid gap-6 border-t border-white/8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
            <div>
              <p className="eyebrow">Ledger</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl leading-[0.95] text-foreground sm:text-5xl">
                Full archive
              </h2>
            </div>
          </ExposureReveal>

          <FrameReveal delay={0.05}>
            <ArchiveLedger projects={projects} />
          </FrameReveal>
        </Container>
      </section>
    </>
  );
}
