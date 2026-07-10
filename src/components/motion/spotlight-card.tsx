"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Override the highlight layer, e.g. for light surfaces. */
  spotlightClassName?: string;
};

export function SpotlightCard({
  children,
  className,
  spotlightClassName,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      node.style.setProperty("--spot-x", `${x}px`);
      node.style.setProperty("--spot-y", `${y}px`);
    });
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("group/spotlight relative", className)}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100",
          "bg-[radial-gradient(320px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),rgb(255_255_255/0.06),transparent_65%)]",
          spotlightClassName,
        )}
      />
      {children}
    </div>
  );
}
