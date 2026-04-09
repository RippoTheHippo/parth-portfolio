"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";

type MotionBoxProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  delay?: number;
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function useMotionReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return ready;
}

export function ExposureReveal({
  children,
  className,
  id,
  style,
  delay = 0,
}: MotionBoxProps) {
  const reduceMotion = useReducedMotion();
  const ready = useMotionReady();

  if (!ready) {
    return (
      <div className={className} id={id} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      id={id}
      style={style}
      initial={{
        opacity: 0,
        filter: "brightness(1.2) blur(3px)",
        y: reduceMotion ? 0 : 10,
      }}
      whileInView={{
        opacity: 1,
        filter: "brightness(1) blur(0px)",
        y: 0,
      }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.95,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

export function FrameReveal({
  children,
  className,
  id,
  style,
  delay = 0,
}: MotionBoxProps) {
  const reduceMotion = useReducedMotion();
  const ready = useMotionReady();

  if (!ready) {
    return (
      <div className={className} id={id} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      id={id}
      style={style}
      initial={{
        opacity: 0,
        clipPath: reduceMotion
          ? "inset(0% 0% 0% 0% round 1.75rem)"
          : "inset(18% 0% 18% 0% round 1.75rem)",
        y: reduceMotion ? 0 : 18,
      }}
      whileInView={{
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0% round 1.75rem)",
        y: 0,
      }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{
        duration: reduceMotion ? 0.01 : 1.05,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

export function LensReveal({
  children,
  className,
  id,
  style,
  delay = 0,
}: MotionBoxProps) {
  const reduceMotion = useReducedMotion();
  const ready = useMotionReady();

  if (!ready) {
    return (
      <div className={className} id={id} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      id={id}
      style={style}
      initial={{
        opacity: 0,
        clipPath: reduceMotion
          ? "circle(100% at 50% 50%)"
          : "circle(24% at 50% 50%)",
        scale: reduceMotion ? 1 : 1.04,
      }}
      whileInView={{
        opacity: 1,
        clipPath: "circle(100% at 50% 50%)",
        scale: 1,
      }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{
        duration: reduceMotion ? 0.01 : 1.15,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

type SequenceRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

const sequenceVariants: Variants = {
  hidden: {},
  visible: {},
};

export function SequenceReveal({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  once = true,
}: SequenceRevealProps) {
  const reduceMotion = useReducedMotion();
  const ready = useMotionReady();

  if (!ready) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={sequenceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-8% 0px" }}
      transition={{
        delayChildren: reduceMotion ? 0 : delay,
        staggerChildren: reduceMotion ? 0 : stagger,
      }}
    >
      {children}
    </motion.div>
  );
}

type SequenceItemProps = MotionBoxProps & {
  variant?: "soft" | "frame" | "sharp";
};

const transitionMap: Record<NonNullable<SequenceItemProps["variant"]>, Transition> =
  {
    soft: { duration: 0.85, ease },
    frame: { duration: 0.9, ease },
    sharp: { duration: 0.65, ease },
  };

const variantsMap: Record<NonNullable<SequenceItemProps["variant"]>, Variants> = {
  soft: {
    hidden: { opacity: 0, y: 16, filter: "brightness(1.08)" },
    visible: { opacity: 1, y: 0, filter: "brightness(1)" },
  },
  frame: {
    hidden: {
      opacity: 0,
      y: 24,
      clipPath: "inset(14% 0% 14% 0% round 1.5rem)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0% round 1.5rem)",
    },
  },
  sharp: {
    hidden: { opacity: 0, y: 20, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
};

export function SequenceItem({
  children,
  className,
  id,
  style,
  variant = "frame",
}: SequenceItemProps) {
  const reduceMotion = useReducedMotion();
  const ready = useMotionReady();

  if (!ready) {
    return (
      <div className={className} id={id} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      id={id}
      style={style}
      variants={variantsMap[variant]}
      transition={reduceMotion ? { duration: 0.01 } : transitionMap[variant]}
    >
      {children}
    </motion.div>
  );
}

export const Reveal = ExposureReveal;
