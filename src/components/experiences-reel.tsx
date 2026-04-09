"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import type { Project } from "@/lib/projects";

type ExperiencesReelProps = {
  projects: Project[];
};

export function ExperiencesReel({ projects }: ExperiencesReelProps) {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const [travel, setTravel] = useState(0);
  const [desktop, setDesktop] = useState(false);
  const progress = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const isDesktop = window.innerWidth >= 1024;
      setDesktop(isDesktop);

      if (shellRef.current && trackRef.current) {
        const nextTravel =
          trackRef.current.scrollWidth - shellRef.current.clientWidth;
        setTravel(Math.max(nextTravel, 0));
      }

      if (!shellRef.current || !isDesktop || reduceMotion) {
        progress.set(0);
        return;
      }

      const rect = shellRef.current.getBoundingClientRect();
      const totalScrollable = shellRef.current.offsetHeight - window.innerHeight;
      const travelled = Math.min(Math.max(-rect.top, 0), Math.max(totalScrollable, 0));
      const nextProgress =
        totalScrollable > 0 ? travelled / totalScrollable : 0;

      progress.set(nextProgress);
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [progress, reduceMotion]);

  const x = useTransform(progress, [0, 1], [0, -travel]);
  const smoothX = useSpring(x, { stiffness: 90, damping: 20, mass: 0.32 });

  if (!desktop || reduceMotion) {
    return (
      <div className="film-strip-shell px-4 py-8 sm:px-5 sm:py-10">
        <div className="mb-5 flex items-center justify-between px-1 text-[0.58rem] uppercase tracking-[0.34em] text-[#cfb388]">
          <span>Viewer Transport</span>
          <span>{`${projects.length} frames`}</span>
        </div>
        <div className="grid gap-5 pt-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="block">
              <article className="rounded-[1.4rem] border border-white/10 bg-surface p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem]">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} frame`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted">
                      {project.category}
                    </p>
                  </div>
                  <span className="pt-1 text-[0.65rem] uppercase tracking-[0.28em] text-muted">
                    {project.year}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={shellRef}
      className="relative h-[300vh]"
      style={{ minHeight: `calc(100vh + ${travel}px)` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="relative w-full px-7 py-8">
          <div className="pointer-events-none absolute inset-x-7 top-1/2 z-10 hidden h-[78vh] -translate-y-1/2 rounded-[2.4rem] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),rgba(255,255,255,0.01)_40%,transparent_75%)] lg:block" />
          <div className="pointer-events-none absolute inset-y-[8%] left-1/2 z-20 hidden w-[34rem] -translate-x-1/2 rounded-[2.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.005))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_48px_rgba(0,0,0,0.45)] lg:block" />
          <div className="film-strip-shell relative z-0 w-full px-7 py-8">
            <div className="mb-5 flex items-center justify-between px-2 text-[0.58rem] uppercase tracking-[0.34em] text-[#cfb388]">
              <span>Viewer Transport</span>
              <span>{`${projects.length} frames`}</span>
            </div>
            <div className="pointer-events-none absolute inset-y-[3.25rem] left-[1.25rem] w-px bg-white/7" />
            <div className="pointer-events-none absolute inset-y-[3.25rem] right-[1.25rem] w-px bg-white/7" />
          <motion.div
            ref={trackRef}
            className="flex min-w-max gap-8 px-2 py-7"
            style={{ x: smoothX }}
          >
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <article className="w-[25rem] shrink-0">
                  <div className="relative rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] p-3">
                    <div className="pointer-events-none absolute inset-y-4 left-2 flex flex-col justify-between">
                      {Array.from({ length: 8 }).map((_, sprocketIndex) => (
                        <span
                          key={sprocketIndex}
                          className="h-3 w-[5px] rounded-full bg-white/10"
                        />
                      ))}
                    </div>
                    <div className="pointer-events-none absolute inset-y-4 right-2 flex flex-col justify-between">
                      {Array.from({ length: 8 }).map((_, sprocketIndex) => (
                        <span
                          key={sprocketIndex}
                          className="h-3 w-[5px] rounded-full bg-white/10"
                        />
                      ))}
                    </div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-surface">
                      <motion.div
                        className="h-full w-full"
                        whileHover={{ scale: 1.04, y: -4 }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} frame`}
                          fill
                          sizes="25rem"
                          className="object-cover object-center"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.72))]" />
                      <div className="pointer-events-none absolute inset-x-0 top-[10%] h-px bg-white/8" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-[10%] h-px bg-white/8" />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-6 px-1 pb-1">
                      <div>
                        <p className="text-[0.58rem] uppercase tracking-[0.38em] text-[#c7aa79]">
                          {`Frame ${String(index + 1).padStart(2, "0")}`}
                        </p>
                        <h3 className="mt-3 font-serif text-[2rem] leading-none text-foreground">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-[0.7rem] uppercase tracking-[0.3em] text-muted">
                          {project.category}
                        </p>
                      </div>
                      <span className="pt-1 text-[0.68rem] uppercase tracking-[0.28em] text-muted">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
