import Image from "next/image";
import Link from "next/link";

import { ArchiveMontage } from "@/components/archive-montage";
import { Container } from "@/components/container";
import { ExperiencesReel } from "@/components/experiences-reel";
import { HeroVisual } from "@/components/hero-visual";
import {
  ExposureReveal,
  FrameReveal,
  LensReveal,
  SequenceItem,
  SequenceReveal,
} from "@/components/reveal";
import { VideoEmbed } from "@/components/video-embed";
import { siteConfig } from "@/content/site";
import { featuredProjects, projects, showreelProject } from "@/lib/projects";

const heroVideoUrl = `https://www.youtube.com/embed/${showreelProject.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${showreelProject.youtubeId}&playsinline=1&rel=0&modestbranding=1`;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    sameAs: [siteConfig.instagram],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-[100svh] overflow-hidden">
        <HeroVisual
          title={siteConfig.name}
          videoUrl={heroVideoUrl}
          poster={showreelProject.thumbnail}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.46)_28%,rgba(5,5,5,0.96))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.1),transparent_0_22%)]" />
        <div className="absolute inset-y-0 left-[7%] hidden w-px bg-white/8 xl:block" />
        <div className="absolute inset-y-0 right-[11%] hidden w-px bg-white/6 xl:block" />
        <div className="grain-overlay" />

        <Container className="relative grid min-h-[100svh] items-end gap-10 pb-14 pt-28 sm:pb-18 md:pb-22 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.72fr)] lg:items-center">
          <div className="max-w-5xl self-end lg:self-end">
            <SequenceReveal className="space-y-4" stagger={0.1}>
              <SequenceItem variant="soft">
                <div className="flex flex-wrap gap-3">
                  {siteConfig.hero.cues.map((cue, index) => (
                    <span
                      key={cue}
                      className="rounded-full border border-white/10 bg-black/28 px-4 py-2 text-[0.58rem] uppercase tracking-[0.34em] text-[#d8c2a2]"
                    >
                      {`${String(index + 1).padStart(2, "0")} ${cue}`}
                    </span>
                  ))}
                </div>
              </SequenceItem>

              <SequenceItem variant="soft">
                <div className="space-y-1">
                  <h1 className="font-serif text-[clamp(4.5rem,11vw,10rem)] leading-[0.8] tracking-[-0.06em] text-foreground">
                    Parth
                  </h1>
                  <h1 className="font-serif text-[clamp(4.5rem,11vw,10rem)] leading-[0.8] tracking-[-0.06em] text-foreground">
                    Porwal
                  </h1>
                </div>
              </SequenceItem>

              <SequenceItem variant="soft">
                <p className="max-w-3xl text-lg leading-8 text-[#ddd5ca] sm:text-[1.15rem]">
                  {siteConfig.title}
                </p>
              </SequenceItem>

              <SequenceItem variant="soft">
                <p className="max-w-xl text-sm leading-7 text-[#b7aea0] sm:text-base">
                  {siteConfig.hero.note}
                </p>
              </SequenceItem>

              <SequenceItem variant="soft">
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href="#experiences"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/16 bg-white/6 px-5 text-[0.64rem] uppercase tracking-[0.32em] text-foreground transition-colors hover:bg-white/10"
                  >
                    Enter Reel
                  </Link>
                  <Link
                    href="#showreel"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 px-5 text-[0.64rem] uppercase tracking-[0.32em] text-foreground transition-colors hover:border-white/24 hover:bg-white/4"
                  >
                    Showreel
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 px-5 text-[0.64rem] uppercase tracking-[0.32em] text-foreground transition-colors hover:border-white/24 hover:bg-white/4"
                  >
                    Archive
                  </Link>
                </div>
              </SequenceItem>
            </SequenceReveal>
          </div>

          <LensReveal delay={0.2} className="hidden lg:block lg:self-end">
            <div className="hero-slate rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,12,0.72),rgba(12,12,12,0.38))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-[2px]">
              <div className="flex items-center justify-between border-b border-white/8 pb-3 text-[0.55rem] uppercase tracking-[0.34em] text-[#d2b489]">
                <span>Current Frame</span>
                <span>{showreelProject.year}</span>
              </div>
              <div className="mt-4 grid gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={showreelProject.thumbnail}
                    alt={`${showreelProject.title} primary frame`}
                    fill
                    sizes="(max-width: 1279px) 0px, 32vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.62))]" />
                  <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                    <p className="text-[0.58rem] uppercase tracking-[0.34em] text-[#dfc59f]">
                      {showreelProject.category}
                    </p>
                    <h2 className="mt-2 font-serif text-[2rem] leading-none text-white">
                      {showreelProject.title}
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {featuredProjects.slice(1, 3).map((project, index) => (
                    <div key={project.slug} className="rounded-[1.2rem] border border-white/8 bg-black/20 p-2">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[0.95rem]">
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} secondary frame`}
                          fill
                          sizes="(max-width: 1279px) 0px, 14vw"
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.5))]" />
                      </div>
                      <div className="mt-3 px-1">
                        <p className="text-[0.52rem] uppercase tracking-[0.34em] text-[#c8ad84]">
                          {`0${index + 2}`}
                        </p>
                        <p className="mt-2 font-serif text-lg leading-none text-foreground">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </LensReveal>
        </Container>
      </section>

      <section id="experiences" className="section-vignette py-20 sm:py-28">
        <Container className="space-y-10">
          <ExposureReveal className="grid gap-6 border-t border-white/8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow">Lights</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl leading-[0.95] text-foreground sm:text-5xl">
                Experiences
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Captured moments moving through a visible film transport.
              </p>
            </div>
          </ExposureReveal>
        </Container>

        <div className="mt-10">
          <ExperiencesReel projects={featuredProjects} />
        </div>
      </section>

      <section id="showreel" className="py-24 sm:py-32">
        <Container className="space-y-10">
          <ExposureReveal className="grid gap-6 border-t border-white/8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow">Camera</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl leading-[0.95] text-foreground sm:text-5xl">
                {siteConfig.home.showreelLabel}
              </h2>
            </div>
          </ExposureReveal>

          <LensReveal delay={0.08}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.62fr)] lg:items-end">
              <VideoEmbed
                embedUrl={showreelProject.embedUrl}
                title={`${showreelProject.title} showreel`}
              />
              <div className="border-t border-white/8 pt-6 lg:border-l lg:border-t-0 lg:pl-7">
                <p className="text-[0.62rem] uppercase tracking-[0.34em] text-[#ccb189]">
                  {showreelProject.category}
                </p>
                <h3 className="mt-4 font-serif text-4xl text-foreground">
                  {showreelProject.title}
                </h3>
                <a
                  href={showreelProject.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex text-[0.65rem] uppercase tracking-[0.34em] text-muted transition-colors hover:text-foreground"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </LensReveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="space-y-10">
          <ExposureReveal className="grid gap-6 border-t border-white/8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow">Action</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl leading-[0.95] text-foreground sm:text-5xl">
                {siteConfig.home.archiveLabel}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {siteConfig.home.archiveNote}
              </p>
            </div>
          </ExposureReveal>

          <FrameReveal delay={0.05}>
            <ArchiveMontage projects={projects} />
          </FrameReveal>

          <ExposureReveal className="flex justify-end">
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-white/12 px-5 py-4 text-[0.64rem] uppercase tracking-[0.32em] text-foreground transition-colors hover:border-white/24 hover:bg-white/4"
            >
              View Full Archive
            </Link>
          </ExposureReveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <FrameReveal className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-6 py-8 sm:px-10 sm:py-12">
            <p className="eyebrow">Note</p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
              <p className="max-w-3xl font-serif text-[clamp(2.3rem,4.3vw,4.2rem)] leading-[0.98] text-foreground">
                {siteConfig.home.personalNote}
              </p>
              <div className="flex flex-col gap-4 text-[0.64rem] uppercase tracking-[0.32em] text-muted sm:items-start lg:items-end">
                <Link href="/about" className="transition-colors hover:text-foreground">
                  Read About
                </Link>
                <Link href="/contact" className="transition-colors hover:text-foreground">
                  Contact
                </Link>
              </div>
            </div>
          </FrameReveal>
        </Container>
      </section>
    </>
  );
}
