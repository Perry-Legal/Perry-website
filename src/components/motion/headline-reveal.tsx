"use client";

import { m } from "motion/react";

import { STAGGER, VIEWPORT, maskLineReveal, staggerParent } from "@/lib/motion";

const tags = {
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
} as const;

type HeadlineRevealProps = {
  /** Explicit lines keep server and client markup identical — no runtime text splitting. */
  lines: React.ReactNode[];
  as?: keyof typeof tags;
  delay?: number;
  stagger?: number;
  /** false = animate on mount (hero); true = animate when scrolled into view. */
  inView?: boolean;
  className?: string;
};

export function HeadlineReveal({
  lines,
  as = "h2",
  delay = 0,
  stagger = STAGGER.loose,
  inView = true,
  className,
}: HeadlineRevealProps) {
  const Tag = tags[as];
  const trigger = inView
    ? { whileInView: "visible" as const, viewport: VIEWPORT }
    : { animate: "visible" as const };

  return (
    <Tag
      initial="hidden"
      variants={staggerParent(stagger, delay)}
      className={className}
      {...trigger}
    >
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <m.span className="block" variants={maskLineReveal}>
            {line}
          </m.span>
        </span>
      ))}
    </Tag>
  );
}
