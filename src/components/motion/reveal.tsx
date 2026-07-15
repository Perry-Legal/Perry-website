"use client";

import { m } from "motion/react";

import { DUR, EASE_OUT, VIEWPORT } from "@/lib/motion";

const tags = {
  div: m.div,
  section: m.section,
  span: m.span,
  li: m.li,
  ul: m.ul,
  figure: m.figure,
  article: m.article,
  p: m.p,
} as const;

type RevealProps = {
  children: React.ReactNode;
  as?: keyof typeof tags;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  once?: boolean;
  className?: string;
};

export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  x = 0,
  duration = DUR.base,
  once = true,
  className,
}: RevealProps) {
  const Tag = tags[as];

  return (
    <Tag
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: VIEWPORT.margin }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </Tag>
  );
}
