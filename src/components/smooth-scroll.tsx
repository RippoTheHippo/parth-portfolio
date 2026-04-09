"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.06,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 0.85,
      stopInertiaOnNavigate: true,
      anchors: {
        offset: -88,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
