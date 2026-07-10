"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { animate } from "motion";
import {
  AnimatePresence,
  m,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { EASE_OUT } from "@/lib/motion";
import {
  getBlendedPanelTint,
  getPrimaryTile,
  panelTintOverlay,
  platformLayersByElevation,
} from "@/lib/platform-architecture";
import { productLifecycle } from "@/lib/product-navigation";
import { cn } from "@/lib/utils";

const LAYERS = platformLayersByElevation;
const LAYER_COUNT = LAYERS.length;

/** Vertical gap between resting planes in the 3D scene (px of translateZ). */
const PLANE_SPACING = 56;
/** Extra lift applied to a plane once the scroll has moved past it. */
const PLANE_LIFT = 190;
/** Scroll runway length per layer transition on desktop. */
const RUNWAY_PER_LAYER_VH = 70;
const SITE_HEADER_OFFSET_PX = 64;

/** Contextual chips shown in the detail panel — who/what each layer serves. */
const layerChips: Record<string, { label: string; href?: string }[]> = {
  "fund-lifecycle": productLifecycle.map((stage) => ({
    label: stage.label,
    href: `/product/${stage.slug}`,
  })),
  "collaboration-layer": [
    { label: "In-house counsel" },
    { label: "External counsel" },
    { label: "Fund operations" },
    { label: "LPs & investors" },
  ],
  "legal-engineering-layer": [
    { label: "Document extraction" },
    { label: "AI drafting & review" },
    { label: "Obligation capture" },
    { label: "Precedent intelligence" },
  ],
  "fund-entity-layer": [
    { label: "Entities & structures" },
    { label: "Investor records" },
    { label: "Commitments" },
    { label: "Portfolio obligations" },
  ],
  "security-layer": [
    { label: "GDPR" },
    { label: "ISO 27001" },
    { label: "Access control" },
    { label: "Audit logs" },
  ],
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/* -------------------------------------------------------------------------- */
/*  Layer motifs — abstract line drawings rendered live on each plane         */
/* -------------------------------------------------------------------------- */

function LifecycleMotif() {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className="size-full">
      <line x1="18" y1="100" x2="182" y2="100" stroke="currentColor" strokeWidth="0.75" />
      <line
        x1="18"
        y1="100"
        x2="182"
        y2="100"
        stroke="#34d399"
        strokeWidth="1.5"
        strokeDasharray="14 226"
        className="animate-motif-dash"
      />
      {[28, 76, 124, 172].map((x) => (
        <rect
          key={x}
          x={x - 11}
          y={89}
          width="22"
          height="22"
          rx="4"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="#111113"
        />
      ))}
      {[28, 76, 124, 172].map((x) => (
        <circle key={x} cx={x} cy={100} r="2.5" fill="currentColor" />
      ))}
    </svg>
  );
}

function CollaborationMotif() {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className="size-full">
      <line x1="66" y1="76" x2="128" y2="64" stroke="currentColor" strokeWidth="0.75" />
      <line x1="64" y1="84" x2="94" y2="122" stroke="currentColor" strokeWidth="0.75" />
      <line x1="110" y1="126" x2="134" y2="74" stroke="currentColor" strokeWidth="0.75" />
      <line x1="112" y1="132" x2="152" y2="128" stroke="currentColor" strokeWidth="0.75" />
      <line x1="90" y1="128" x2="52" y2="140" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="56" cy="78" r="11" stroke="currentColor" strokeWidth="0.75" fill="#111113" />
      <circle cx="140" cy="62" r="11" stroke="currentColor" strokeWidth="0.75" fill="#111113" />
      <circle cx="102" cy="130" r="13" stroke="#34d399" strokeWidth="0.9" fill="#111113" />
      <circle cx="44" cy="142" r="8" stroke="currentColor" strokeWidth="0.75" fill="#111113" />
      <circle cx="160" cy="127" r="8" stroke="currentColor" strokeWidth="0.75" fill="#111113" />
    </svg>
  );
}

function LegalEngineeringMotif() {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className="size-full">
      <rect x="36" y="46" width="58" height="72" rx="4" stroke="currentColor" strokeWidth="0.75" />
      {[60, 72, 84, 96].map((y) => (
        <line key={y} x1="46" y1={y} x2={y === 96 ? 68 : 84} y2={y} stroke="currentColor" strokeWidth="0.75" />
      ))}
      <path d="M100 82 L124 82" stroke="#34d399" strokeWidth="0.9" />
      <path d="M118 76 L124 82 L118 88" stroke="#34d399" strokeWidth="0.9" />
      {[74, 88, 102].map((y) => (
        <rect key={y} x="130" y={y - 5} width="38" height="10" rx="2" stroke="currentColor" strokeWidth="0.75" />
      ))}
      <line x1="65" y1="118" x2="65" y2="142" stroke="currentColor" strokeWidth="0.75" />
      <line x1="65" y1="142" x2="149" y2="142" stroke="currentColor" strokeWidth="0.75" />
      <line x1="149" y1="142" x2="149" y2="112" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

function FundEntityMotif() {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className="size-full">
      <rect x="84" y="42" width="32" height="22" rx="3" stroke="#34d399" strokeWidth="0.9" fill="#111113" />
      <line x1="100" y1="64" x2="100" y2="86" stroke="currentColor" strokeWidth="0.75" />
      <line x1="46" y1="86" x2="154" y2="86" stroke="currentColor" strokeWidth="0.75" />
      {[46, 100, 154].map((x) => (
        <line key={x} x1={x} y1="86" x2={x} y2="108" stroke="currentColor" strokeWidth="0.75" />
      ))}
      {[46, 100, 154].map((x) => (
        <rect
          key={x}
          x={x - 15}
          y={108}
          width="30"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="#111113"
        />
      ))}
      {[46, 100, 154].map((x) => (
        <line key={x} x1={x} y1="128" x2={x} y2="144" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" />
      ))}
    </svg>
  );
}

function SecurityMotif() {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className="size-full">
      <rect
        x="34"
        y="52"
        width="132"
        height="96"
        rx="10"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="4 5"
      />
      <path
        d="M100 72 l24 9 v20 c0 17 -11 28 -24 34 c-13 -6 -24 -17 -24 -34 v-20 z"
        stroke="#34d399"
        strokeWidth="0.9"
        fill="#111113"
      />
      <circle cx="100" cy="102" r="5" stroke="currentColor" strokeWidth="0.75" />
      <line x1="100" y1="107" x2="100" y2="116" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

const layerMotifs: Record<string, () => React.ReactNode> = {
  "fund-lifecycle": LifecycleMotif,
  "collaboration-layer": CollaborationMotif,
  "legal-engineering-layer": LegalEngineeringMotif,
  "fund-entity-layer": FundEntityMotif,
  "security-layer": SecurityMotif,
};

/* -------------------------------------------------------------------------- */
/*  3D plane                                                                  */
/* -------------------------------------------------------------------------- */

function LayerPlane({
  index,
  float,
}: {
  index: number;
  float: MotionValue<number>;
}) {
  const layer = LAYERS[index];
  const Motif = layerMotifs[layer.id];

  const transform = useTransform(float, (value) => {
    const rel = index - value;
    const baseZ = (LAYER_COUNT - 1 - index) * PLANE_SPACING;
    const lift = rel < 0 ? -rel * PLANE_LIFT : 0;
    return `translate(-50%, -50%) translateZ(${baseZ + lift}px)`;
  });

  const opacity = useTransform(float, (value) => {
    const rel = index - value;
    if (rel < 0) return Math.max(0, 1 - Math.abs(rel) * 1.1);
    return 1 - Math.min(rel * 0.16, 0.45);
  });

  // 1 when this plane is active, falling off as scroll moves away.
  const emphasis = useTransform(float, (value) =>
    Math.max(0, 1 - Math.abs(index - value)),
  );
  const motifOpacity = useTransform(emphasis, [0, 1], [0.28, 1]);

  return (
    <m.div
      style={{ transform, opacity }}
      className="absolute top-1/2 left-1/2 aspect-square w-full"
    >
      <div
        className="absolute inset-0 rounded-xl border border-white/12 bg-[#17181b]/90"
        style={{
          background: `linear-gradient(135deg, ${panelTintOverlay(layer.panelTint, 0.32)}, rgb(23 24 27 / 0.92) 60%)`,
        }}
      />
      <div aria-hidden className="bg-grid-faint absolute inset-0 rounded-xl opacity-[0.08]" />
      <m.div
        aria-hidden
        style={{ opacity: emphasis }}
        className="absolute inset-0 rounded-xl border border-emerald-400/40 shadow-[0_0_80px_rgb(52_211_153/0.12)]"
      />
      <m.div style={{ opacity: motifOpacity }} className="absolute inset-6 text-white/45">
        <Motif />
      </m.div>
      <div className="absolute top-3 left-4 font-mono text-[10px] tracking-[0.18em] text-white/45 uppercase">
        {String(index + 1).padStart(2, "0")} · {layer.placeholderLabel}
      </div>
    </m.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Detail panel                                                              */
/* -------------------------------------------------------------------------- */

function LayerDetail({ index }: { index: number }) {
  const layer = LAYERS[index];
  const tile = getPrimaryTile(layer);
  const Icon = tile.icon;
  const chips = layerChips[layer.id] ?? [];

  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.div
        key={layer.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
      >
        <div className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <Icon className="size-4 text-emerald-300/90" strokeWidth={1.5} />
        </div>
        <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-white/40 uppercase">
          Layer {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-1 font-source-serif text-xl font-medium text-white">
          {layer.label}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          {layer.sidebarDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {chips.map((chip) =>
            chip.href ? (
              <Link
                key={chip.label}
                href={chip.href}
                className="group inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-xs text-white/70 transition-colors hover:border-emerald-400/40 hover:text-white"
              >
                {chip.label}
                <ArrowRight className="size-3 -translate-x-0.5 opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ) : (
              <span
                key={chip.label}
                className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-xs text-white/70"
              >
                {chip.label}
              </span>
            ),
          )}
        </div>
      </m.div>
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sidebar nav                                                               */
/* -------------------------------------------------------------------------- */

function LayerNav({
  activeIndex,
  float,
  onSelect,
}: {
  activeIndex: number;
  float: MotionValue<number>;
  onSelect: (index: number) => void;
}) {
  const railScale = useTransform(float, [0, LAYER_COUNT - 1], [0.02, 1]);

  return (
    <div className="relative pl-4">
      <div aria-hidden className="absolute top-1 bottom-1 left-0 w-px bg-white/10" />
      <m.div
        aria-hidden
        style={{ scaleY: railScale }}
        className="absolute top-1 bottom-1 left-0 w-px origin-top bg-emerald-400/80"
      />
      <nav aria-label="Platform layers" className="flex flex-col gap-4">
        {LAYERS.map((layer, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={layer.id}
              type="button"
              onClick={() => onSelect(index)}
              aria-current={isActive}
              className="group text-left"
            >
              <span className="flex items-baseline gap-2.5">
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-widest transition-colors duration-300",
                    isActive ? "text-emerald-300" : "text-white/35",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    isActive ? "text-white" : "text-white/50 group-hover:text-white/75",
                  )}
                >
                  {layer.label}
                </span>
              </span>
              <span
                className={cn(
                  "grid transition-[grid-template-rows] duration-400 ease-out",
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <span className="overflow-hidden">
                  <span
                    className={cn(
                      "block pt-1.5 pl-6 text-sm leading-relaxed text-white/45 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  >
                    {layer.sidebarDescription}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

type PlatformArchitectureSectionProps = {
  showHeader?: boolean;
  className?: string;
};

export function PlatformArchitectureSection({
  showHeader = true,
  className,
}: PlatformArchitectureSectionProps) {
  const runwayRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDriven, setScrollDriven] = useState(false);

  // Scroll-driven value (desktop) and click-driven value (mobile / reduced motion).
  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });
  const mapped = useTransform(scrollYProgress, [0.05, 0.95], [0, LAYER_COUNT - 1], {
    clamp: true,
  });
  const scrollFloat = useSpring(mapped, { stiffness: 120, damping: 28, mass: 0.6 });
  const clickFloat = useMotionValue(0);
  const float = scrollDriven ? scrollFloat : clickFloat;

  useMotionValueEvent(scrollFloat, "change", (value) => {
    if (!scrollDriven) return;
    setActiveIndex((prev) => {
      const next = clamp(Math.round(value), 0, LAYER_COUNT - 1);
      return next === prev ? prev : next;
    });
  });

  useLayoutEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const screenMq = window.matchMedia("(min-width: 1024px)");
    const update = () => setScrollDriven(screenMq.matches && !motionMq.matches);
    update();
    motionMq.addEventListener("change", update);
    screenMq.addEventListener("change", update);
    return () => {
      motionMq.removeEventListener("change", update);
      screenMq.removeEventListener("change", update);
    };
  }, []);

  const selectLayer = useCallback(
    (index: number) => {
      if (scrollDriven) {
        const runway = runwayRef.current;
        if (!runway) return;
        const rect = runway.getBoundingClientRect();
        const runwayTop = rect.top + window.scrollY;
        const scrollable = runway.offsetHeight - window.innerHeight;
        const progress = 0.05 + (index / (LAYER_COUNT - 1)) * 0.9;
        window.scrollTo({ top: runwayTop + progress * scrollable, behavior: "smooth" });
        return;
      }
      setActiveIndex(index);
      animate(clickFloat, index, { type: "spring", stiffness: 150, damping: 24 });
    },
    [scrollDriven, clickFloat],
  );

  // Section background tint follows the active layer.
  const tint = useTransform(float, (value) =>
    panelTintOverlay(getBlendedPanelTint(value), 0.12),
  );

  const scene = (
    <div className="relative mx-auto w-full max-w-xl [perspective:1600px]">
      <div className="relative aspect-square w-full [transform-style:preserve-3d] [transform:rotateX(56deg)_rotateZ(-42deg)] max-lg:scale-90">
        {LAYERS.map((layer, index) => (
          <LayerPlane key={layer.id} index={index} float={float} />
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[6%] left-1/2 h-24 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />
    </div>
  );

  const header = showHeader && (
    <Reveal className="mx-auto max-w-2xl shrink-0 text-center">
      <SectionEyebrow align="center" onDark>
        Architecture
      </SectionEyebrow>
      <h2
        id="platform-architecture-heading"
        className="mt-2 font-source-serif text-3xl font-medium tracking-tight text-balance text-white sm:text-4xl md:text-5xl"
      >
        A deep look into the legal OS
      </h2>
      <p className="mt-3 text-base leading-relaxed text-white/50 text-pretty sm:text-base">
        Five layers, one platform. Scroll to peel the stack apart — from the fund
        lifecycle your team runs every day down to the security foundation
        underneath it all.
      </p>
    </Reveal>
  );

  const content = (
    <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)_minmax(0,280px)] lg:gap-8 xl:gap-12">
      <div className="hidden lg:block">
        <LayerNav activeIndex={activeIndex} float={float} onSelect={selectLayer} />
      </div>

      <div className="flex items-center justify-center overflow-visible py-6 lg:py-0">
        {scene}
      </div>

      <div className="hidden lg:block">
        <LayerDetail index={activeIndex} />
      </div>

      {/* Mobile: chip nav + detail below the scene */}
      <div className="lg:hidden">
        <div className="scrollbar-hide -mx-6 flex gap-2 overflow-x-auto px-6 pb-1">
          {LAYERS.map((layer, index) => (
            <button
              key={layer.id}
              type="button"
              onClick={() => selectLayer(index)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-300",
                index === activeIndex
                  ? "border-emerald-400/50 bg-emerald-400/10 text-white"
                  : "border-white/12 bg-white/5 text-white/55",
              )}
            >
              {layer.placeholderLabel}
            </button>
          ))}
        </div>
        <div className="mt-6 border-t border-white/10 pt-6">
          <LayerDetail index={activeIndex} />
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="platform"
      data-header-theme="dark"
      className={cn("relative bg-[#111113] text-white", className)}
      aria-labelledby={showHeader ? "platform-architecture-heading" : undefined}
    >
      <m.div aria-hidden style={{ backgroundColor: tint }} className="absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dark-glow" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-noise-texture opacity-[0.035]"
      />

      {scrollDriven ? (
        <div
          ref={runwayRef}
          className="relative"
          style={{ height: `${(LAYER_COUNT - 1) * RUNWAY_PER_LAYER_VH + 100}vh` }}
        >
          <div
            className="sticky flex flex-col justify-center gap-10 px-6"
            style={{
              top: SITE_HEADER_OFFSET_PX,
              height: `calc(100vh - ${SITE_HEADER_OFFSET_PX}px)`,
            }}
          >
            {header}
            <div className="section-container">{content}</div>
          </div>
        </div>
      ) : (
        <div ref={runwayRef} className="relative flex flex-col gap-12 px-6 py-24">
          {header}
          <div className="section-container">{content}</div>
        </div>
      )}
    </section>
  );
}
