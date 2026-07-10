export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const DUR = {
  fast: 0.3,
  base: 0.6,
  slow: 0.8,
  hero: 1.2,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.08,
  loose: 0.12,
} as const;

export const VIEWPORT = {
  once: true,
  margin: "0px 0px -15% 0px",
} as const;

export function fadeUp(y = 24, duration: number = DUR.base, delay = 0) {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: EASE_OUT },
    },
  };
}

export function staggerParent(stagger: number = STAGGER.base, delayChildren = 0) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export const maskLineReveal = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: DUR.slow, ease: EASE_OUT },
  },
};
