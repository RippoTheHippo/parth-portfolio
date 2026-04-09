import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/projects";

type ArchiveMontageProps = {
  projects: Project[];
};

const layoutMap = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5 md:row-span-1",
  "md:col-span-5 md:row-span-1",
  "md:col-span-4 md:row-span-1",
  "md:col-span-4 md:row-span-1",
  "md:col-span-4 md:row-span-1",
];

const aspectMap = [
  "aspect-[16/14] md:aspect-auto md:h-full",
  "aspect-[16/10]",
  "aspect-[16/10]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/5]",
];

export function ArchiveMontage({ projects }: ArchiveMontageProps) {
  return (
    <div className="grid gap-4 md:auto-rows-[13rem] md:grid-cols-12">
      {projects.slice(0, 6).map((project, index) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className={[
            "group block",
            layoutMap[index] ?? "md:col-span-4 md:row-span-1",
          ].join(" ")}
        >
          <article className="relative h-full overflow-hidden rounded-[1.6rem] border border-white/8 bg-surface">
            <div className={["relative h-full w-full", aspectMap[index] ?? "aspect-[16/10]"].join(" ")}>
              <Image
                src={project.thumbnail}
                alt={`${project.title} frame`}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 767px) 100vw, (max-width: 1280px) 58vw, 52vw"
                    : index < 3
                      ? "(max-width: 767px) 100vw, (max-width: 1280px) 42vw, 34vw"
                      : "(max-width: 767px) 100vw, (max-width: 1280px) 28vw, 22vw"
                }
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:translate-y-[-0.5%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.78))]" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5 text-[0.58rem] uppercase tracking-[0.34em] text-[#ceb58c]">
                <span>{`Frame ${String(index + 1).padStart(2, "0")}`}</span>
                <span>{project.year}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
                <p className="text-[0.62rem] uppercase tracking-[0.34em] text-[#d8c3a0]">
                  {project.category}
                </p>
                <h3
                  className={[
                    "mt-3 font-serif leading-none text-white",
                    index === 0 ? "text-[2.65rem] sm:text-[3rem]" : "text-[1.8rem]",
                  ].join(" ")}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
