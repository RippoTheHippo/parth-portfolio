import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  variant?: "archive" | "detailed";
};

export function ProjectCard({
  project,
  priority = false,
  variant = "archive",
}: ProjectCardProps) {
  if (variant === "detailed") {
    return (
      <article className="group">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[1.75rem] bg-surface">
            <Image
              src={project.thumbnail}
              alt={`${project.title} poster frame`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.74))]" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
              <span className="eyebrow text-[0.62rem] text-[#d7c19b]">
                {project.category}
              </span>
              <p className="mt-3 font-serif text-3xl leading-none text-white">
                {project.title}
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-start justify-between gap-6 border-t border-white/8 pt-4">
            <div>
              <h3 className="font-serif text-2xl text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-7 text-muted">
                {project.description}
              </p>
            </div>
            <div className="shrink-0 pt-1 text-right text-[0.68rem] uppercase tracking-[0.3em] text-muted">
              <p>{project.category}</p>
              <p className="mt-2">{project.year}</p>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] bg-surface">
            <Image
              src={project.thumbnail}
              alt={`${project.title} frame`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:translate-y-[-0.4%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.36))]" />
          </div>
          <div className="mt-4 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate font-serif text-[1.65rem] leading-none text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-[0.65rem] uppercase tracking-[0.28em] text-muted">
                {project.category}
              </p>
            </div>
            <span className="shrink-0 pt-1 text-[0.65rem] uppercase tracking-[0.28em] text-muted">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
