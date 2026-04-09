import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { ExposureReveal, FrameReveal, LensReveal, SequenceItem, SequenceReveal } from "@/components/reveal";
import { VideoEmbed } from "@/components/video-embed";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Parth Porwal`,
      description: project.description,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((entry) => entry.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <section className="pt-36 sm:pt-40">
        <Container className="space-y-10">
          <ExposureReveal>
            <Link
              href="/projects"
              className="text-xs uppercase tracking-[0.28em] text-muted transition-colors hover:text-foreground"
            >
              Back to archive
            </Link>
          </ExposureReveal>

          <ExposureReveal className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.7fr)] lg:items-end">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.045em] text-foreground">
                {project.title}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {project.description}
              </p>
            </div>

            <dl className="grid gap-6 border-t border-white/8 pt-6 text-sm text-muted lg:border-t-0 lg:border-l lg:pl-8">
              <div>
                <dt className="eyebrow text-[0.62rem] text-muted">Role</dt>
                <dd className="mt-3 text-base text-foreground">{project.role}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.62rem] text-muted">Year</dt>
                <dd className="mt-3 text-base text-foreground">{project.year}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.62rem] text-muted">Format</dt>
                <dd className="mt-3 text-base text-foreground">
                  {project.category}
                </dd>
              </div>
            </dl>
          </ExposureReveal>

          <LensReveal delay={0.08}>
            <VideoEmbed embedUrl={project.embedUrl} title={project.title} />
          </LensReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <ExposureReveal className="space-y-8">
            <div className="border-t border-white/8 pt-6">
              <p className="eyebrow">Notes</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
                {project.description} The visual approach stays grounded in
                atmosphere, measured movement, and a frame language designed to
                hold emotional detail without overstatement.
              </p>
            </div>

            <div className="border-t border-white/8 pt-6">
              <p className="eyebrow">Credits</p>
              <ul className="mt-5 space-y-3 text-base leading-8 text-muted">
                {project.credits.map((credit) => (
                  <li key={credit}>{credit}</li>
                ))}
              </ul>
            </div>

            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/14 px-6 py-4 text-xs uppercase tracking-[0.28em] text-foreground transition-colors duration-300 hover:border-white/28 hover:bg-white/4"
            >
              Watch on YouTube
            </a>
          </ExposureReveal>

          <FrameReveal delay={0.08} className="space-y-4">
            <p className="eyebrow">Frames</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.stills.map((still, index) => (
                <div
                  key={still}
                  className={index === 0 ? "sm:col-span-2" : undefined}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-surface">
                    <Image
                      src={still}
                      alt={`${project.title} still ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FrameReveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="space-y-12">
          <ExposureReveal>
            <div className="grid gap-6 border-t border-white/8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
              <p className="eyebrow">More</p>
              <h2 className="font-serif text-4xl leading-[0.95] text-foreground sm:text-5xl">
                More from the archive.
              </h2>
            </div>
          </ExposureReveal>

          <SequenceReveal className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" stagger={0.09}>
            {relatedProjects.map((relatedProject, index) => (
              <SequenceItem key={relatedProject.slug} variant={index === 1 ? "sharp" : "frame"}>
                <ProjectCard project={relatedProject} />
              </SequenceItem>
            ))}
          </SequenceReveal>
        </Container>
      </section>
    </>
  );
}
