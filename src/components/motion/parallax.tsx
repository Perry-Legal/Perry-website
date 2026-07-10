"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  /** Vertical travel in px across the element's pass through the viewport. */
  range?: [number, number];
  className?: string;
};

export function Parallax({ children, range = [-40, 40], className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], range);

  return (
    <m.div ref={ref} style={reducedMotion ? undefined : { y }} className={className}>
      {children}
    </m.div>
  );
}
