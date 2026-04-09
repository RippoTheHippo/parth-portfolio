"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
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

  if (!ready) {
    return <div className="relative">{children}</div>;
  }

  return (
    <div className="relative">
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1/2 origin-top bg-background"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={
          reduceMotion
            ? { duration: 0.01 }
            : { duration: 0.55, ease: [0.72, 0, 0.18, 1] }
        }
      />
      <motion.div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] h-1/2 origin-bottom bg-background"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={
          reduceMotion
            ? { duration: 0.01 }
            : { duration: 0.55, ease: [0.72, 0, 0.18, 1], delay: 0.03 }
        }
      />
      <motion.div
        initial={{
          opacity: 0,
          clipPath: reduceMotion ? "inset(0 0 0rem 0)" : "inset(0 0 3.5rem 0)",
        }}
        animate={{ opacity: 1, clipPath: "inset(0 0 0rem 0)" }}
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
