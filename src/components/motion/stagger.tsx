"use client";

import { m } from "motion/react";

import { DUR, EASE_OUT, STAGGER, VIEWPORT } from "@/lib/motion";

const tags = {
  div: m.div,
  section: m.section,
  span: m.span,
  li: m.li,
  ul: m.ul,
  figure: m.figure,
  article: m.article,
} as const;

type StaggerGroupProps = {
  children: React.ReactNode;
  as?: keyof typeof tags;
  stagger?: number;
  delay?: number;
  /** Fraction of the group that must be visible before animating. Overrides the default bottom margin. */
  amount?: number;
  className?: string;
};

export function StaggerGroup({
  children,
  as = "div",
  stagger = STAGGER.base,
  delay = 0,
  amount,
  className,
}: StaggerGroupProps) {
  const Tag = tags[as];

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={
        amount !== undefined
          ? { once: true, amount }
          : { once: true, margin: VIEWPORT.margin }
      }
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  as?: keyof typeof tags;
  y?: number;
  x?: number;
  duration?: number;
  className?: string;
};

export function StaggerItem({
  children,
  as = "div",
  y = 20,
  x = 0,
  duration = DUR.base,
  className,
}: StaggerItemProps) {
  const Tag = tags[as];

  return (
    <Tag
      variants={{
        hidden: { opacity: 0, y, x },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration, ease: EASE_OUT },
        },
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
