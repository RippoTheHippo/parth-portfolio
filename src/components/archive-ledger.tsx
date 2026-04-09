import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/projects";

type ArchiveLedgerProps = {
  projects: Project[];
};

export function ArchiveLedger({ projects }: ArchiveLedgerProps) {
  return (
    <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
      <div className="hidden grid-cols-[6rem_minmax(0,1.3fr)_minmax(9rem,0.5fr)_minmax(6rem,0.3fr)_12rem] gap-4 border-b border-white/8 px-6 py-4 text-[0.56rem] uppercase tracking-[0.34em] text-muted lg:grid">
        <span>No.</span>
        <span>Title</span>
        <span>Format</span>
        <span>Year</span>
        <span>Frame</span>
      </div>

      <div>
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group grid gap-5 border-b border-white/8 px-6 py-5 transition-colors duration-500 last:border-b-0 hover:bg-white/[0.02] lg:grid-cols-[6rem_minmax(0,1.3fr)_minmax(9rem,0.5fr)_minmax(6rem,0.3fr)_12rem] lg:items-center"
          >
            <div className="text-[0.58rem] uppercase tracking-[0.34em] text-[#cbb08a]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="min-w-0">
              <h3 className="truncate font-serif text-[2rem] leading-none text-foreground sm:text-[2.35rem]">
                {project.title}
              </h3>
            </div>
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-muted">
              {project.category}
            </p>
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-muted">
              {project.year}
            </p>
            <div className="hidden overflow-hidden rounded-[1rem] border border-white/8 bg-surface lg:block">
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} preview frame`}
                  fill
                  sizes="12rem"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.45))]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
