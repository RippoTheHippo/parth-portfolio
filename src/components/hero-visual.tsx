"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type HeroVisualProps = {
  title: string;
  videoUrl: string;
  poster: string;
};

export function HeroVisual({ title, videoUrl, poster }: HeroVisualProps) {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const mediaY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -70]);
  const mediaScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduceMotion ? 1 : 1.08],
  );

  if (!ready) {
    return (
      <>
        <div className="absolute inset-0 hidden md:block">
          <iframe
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.16]"
            src={videoUrl}
            title={`${title} cinematic background`}
            tabIndex={-1}
            aria-hidden="true"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        </div>

        <div className="absolute inset-0 md:hidden">
          <Image
            src={poster}
            alt={`${title} poster frame`}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-center"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <motion.div
        className="absolute inset-0 hidden md:block"
        style={{ y: mediaY, scale: mediaScale }}
      >
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.16]"
          src={videoUrl}
          title={`${title} cinematic background`}
          tabIndex={-1}
          aria-hidden="true"
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 md:hidden"
        style={{ y: mediaY, scale: mediaScale }}
      >
        <Image
          src={poster}
          alt={`${title} poster frame`}
          fill
          priority
          sizes="(max-width: 767px) 100vw, 0px"
          className="object-cover object-center"
        />
      </motion.div>
    </>
  );
}
