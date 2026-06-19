"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export type HeaderContrast = "on-dark" | "on-light";

const HEADER_HEIGHT = 64;
const MIN_SCROLL_BEFORE_HIDE = 600;
const HIDE_ACCUMULATOR_THRESHOLD = 260;
const SHOW_ACCUMULATOR_THRESHOLD = 200;

function parseRgb(color: string): [number, number, number, number] | null {
  const match = color.match(
    /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?\s*\)/,
  );
  if (!match) return null;

  return [
    Number(match[1]),
    Number(match[2]),
    Number(match[3]),
    match[4] !== undefined ? Number(match[4]) : 1,
  ];
}

function getLuminance(r: number, g: number, b: number) {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function getElementBackgroundLuminance(element: Element | null): number | null {
  let node: Element | null = element;

  while (node && node !== document.documentElement) {
    const { backgroundColor } = window.getComputedStyle(node);
    const rgba = parseRgb(backgroundColor);

    if (rgba && rgba[3] > 0.08) {
      return getLuminance(rgba[0], rgba[1], rgba[2]);
    }

    node = node.parentElement;
  }

  return null;
}

function sampleBackgroundContrast(): HeaderContrast {
  const sampleY = HEADER_HEIGHT / 2;
  const sampleXs = [0.15, 0.5, 0.85].map((ratio) => window.innerWidth * ratio);
  const samples: number[] = [];

  for (const x of sampleXs) {
    const themed = document
      .elementsFromPoint(x, sampleY)
      .map((element) => element.closest("[data-header-theme]"))
      .find(Boolean);

    if (themed) {
      return themed.getAttribute("data-header-theme") === "dark" ? "on-dark" : "on-light";
    }

    const target = document
      .elementsFromPoint(x, sampleY)
      .find((element) => !element.closest("header"));

    const luminance = getElementBackgroundLuminance(target ?? null);
    if (luminance !== null) samples.push(luminance);
  }

  if (samples.length === 0) return "on-light";

  const average = samples.reduce((sum, value) => sum + value, 0) / samples.length;
  return average < 0.45 ? "on-dark" : "on-light";
}

function syncScrollState(scrollY: number) {
  return {
    hasSurface: scrollY > HEADER_HEIGHT,
    contrast: sampleBackgroundContrast(),
    visibleAtTop: scrollY <= HEADER_HEIGHT,
  };
}

export function useAdaptiveHeader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [contrast, setContrast] = useState<HeaderContrast>("on-light");
  const [hasSurface, setHasSurface] = useState(false);
  const lastScrollY = useRef(0);
  const scrollDownAccum = useRef(0);
  const scrollUpAccum = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const refreshFromLayout = () => {
      const scrollY = window.scrollY;
      const state = syncScrollState(scrollY);

      lastScrollY.current = scrollY;
      scrollDownAccum.current = 0;
      scrollUpAccum.current = 0;
      setHasSurface(state.hasSurface);
      setContrast(state.contrast);
      setVisible(true);
    };

    const themedSections = document.querySelectorAll("[data-header-theme]");

    const observer = new IntersectionObserver(
      () => {
        setContrast(sampleBackgroundContrast());
      },
      {
        rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
        threshold: [0, 0.01, 0.05, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    themedSections.forEach((section) => observer.observe(section));

    const updateOnScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScrollY.current;

        setHasSurface(scrollY > HEADER_HEIGHT);
        setContrast(sampleBackgroundContrast());

        if (scrollY <= HEADER_HEIGHT) {
          setVisible(true);
          scrollDownAccum.current = 0;
          scrollUpAccum.current = 0;
        } else if (scrollY < MIN_SCROLL_BEFORE_HIDE) {
          setVisible(true);
        } else if (delta > 0) {
          scrollDownAccum.current += delta;
          scrollUpAccum.current = 0;

          if (scrollDownAccum.current >= HIDE_ACCUMULATOR_THRESHOLD) {
            setVisible(false);
            scrollDownAccum.current = 0;
          }
        } else if (delta < 0) {
          scrollUpAccum.current += Math.abs(delta);
          scrollDownAccum.current = 0;

          if (scrollUpAccum.current >= SHOW_ACCUMULATOR_THRESHOLD) {
            setVisible(true);
            scrollUpAccum.current = 0;
          }
        }

        lastScrollY.current = scrollY;
        ticking.current = false;
      });
    };

    refreshFromLayout();
    requestAnimationFrame(() => {
      requestAnimationFrame(refreshFromLayout);
    });

    window.addEventListener("scroll", updateOnScroll, { passive: true });
    window.addEventListener("resize", updateOnScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateOnScroll);
      window.removeEventListener("resize", updateOnScroll);
    };
  }, [pathname]);

  return { visible, contrast, hasSurface };
}
