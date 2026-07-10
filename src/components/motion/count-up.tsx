"use client";

import { animate } from "motion";
import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    if (!inView) {
      node.textContent = `${prefix}0${suffix}`;
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: EASE_OUT,
      onUpdate: (value) => {
        node.textContent = `${prefix}${Math.round(value)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, reducedMotion, to, duration, prefix, suffix]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {to}
      {suffix}
    </span>
  );
}
