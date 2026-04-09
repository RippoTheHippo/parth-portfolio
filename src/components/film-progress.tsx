"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export function FilmProgress() {
  const reduceMotion = useReducedMotion();
  const scrollProgress = useMotionValue(0);
  const progress = useSpring(scrollProgress, {
    stiffness: reduceMotion ? 1000 : 120,
    damping: reduceMotion ? 200 : 24,
    mass: 0.2,
  });
  const markerY = useTransform(progress, [0, 1], [0, 134]);

  useEffect(() => {
    const updateProgress = () => {
      const documentElement = document.documentElement;
      const scrollTop = window.scrollY || documentElement.scrollTop;
      const scrollableHeight =
        documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;

      scrollProgress.set(Math.min(Math.max(nextProgress, 0), 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [scrollProgress]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <div className="relative flex h-[15.5rem] w-8 items-center justify-center">
        <div className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-white/6" />
        <div className="absolute inset-y-0 left-[5px] flex flex-col justify-between py-1">
          {Array.from({ length: 13 }).map((_, index) => (
            <span
              key={`left-${index}`}
              className="block h-[8px] w-[3px] rounded-full bg-white/10"
            />
          ))}
        </div>
        <div className="absolute inset-y-0 right-[5px] flex flex-col justify-between py-1">
          {Array.from({ length: 13 }).map((_, index) => (
            <span
              key={`right-${index}`}
              className="block h-[8px] w-[3px] rounded-full bg-white/10"
            />
          ))}
        </div>
        <div className="absolute inset-y-2 left-1/2 w-4 -translate-x-1/2 overflow-hidden rounded-full border border-white/8 bg-white/[0.02]">
          <div className="flex h-full flex-col justify-between px-[3px] py-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <span key={index} className="h-[1px] w-full bg-white/10" />
            ))}
          </div>
          <motion.div
            className="absolute left-1/2 top-0 h-7 w-4 -translate-x-1/2 rounded-full border border-[#ceb080]/35 bg-[linear-gradient(180deg,rgba(206,176,128,0.34),rgba(206,176,128,0.08))] shadow-[0_0_20px_rgba(197,162,105,0.12)]"
            style={{
              y: reduceMotion ? 0 : markerY,
            }}
          />
        </div>
      </div>
    </div>
  );
}
