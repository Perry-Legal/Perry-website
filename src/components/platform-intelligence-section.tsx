"use client";

import Image from "@/components/asset-image";
import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { intelligenceFlowStages } from "@/lib/platform-intelligence-flow";
import { cn } from "@/lib/utils";

type IllustrationProps = {
  className?: string;
};

function DocumentsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden
      className={cn("h-20 w-28 text-foreground/25", className)}
    >
      <path d="M20 58 L60 38 L100 58" stroke="currentColor" strokeWidth="0.75" />
      <path d="M20 50 L60 30 L100 50" stroke="currentColor" strokeWidth="0.75" />
      <path d="M20 42 L60 22 L100 42" stroke="currentColor" strokeWidth="0.75" />
      <path d="M60 22 L60 38" stroke="currentColor" strokeWidth="0.75" />
      <path d="M20 42 L20 58" stroke="currentColor" strokeWidth="0.75" />
      <path d="M100 42 L100 58" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

function IntelligenceIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden
      className={cn("h-20 w-28 text-foreground/25", className)}
    >
      <path d="M30 52 L50 42 L70 52 L50 62 Z" stroke="currentColor" strokeWidth="0.75" />
      <path d="M50 42 L50 28" stroke="currentColor" strokeWidth="0.75" />
      <path d="M30 52 L30 66 L50 76 L70 66 L70 52" stroke="currentColor" strokeWidth="0.75" />
      <path d="M50 62 L50 76" stroke="currentColor" strokeWidth="0.75" />
      <path d="M78 36 L92 44 L92 60 L78 68 L64 60 L64 44 Z" stroke="currentColor" strokeWidth="0.75" />
      <path d="M78 36 L78 20" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

function OutputsIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden
      className={cn("h-20 w-28 text-foreground/25", className)}
    >
      <path d="M28 68 L28 32" stroke="currentColor" strokeWidth="0.75" />
      <path d="M48 68 L48 24" stroke="currentColor" strokeWidth="0.75" />
      <path d="M68 68 L68 40" stroke="currentColor" strokeWidth="0.75" />
      <path d="M88 68 L88 18" stroke="currentColor" strokeWidth="0.75" />
      <path d="M22 68 L94 68" stroke="currentColor" strokeWidth="0.75" />
      <path d="M28 32 L48 24 L68 40 L88 18" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

function CollaborationIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden
      className={cn("h-20 w-28 text-foreground/25", className)}
    >
      <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="80" cy="28" r="10" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="80" cy="56" r="10" stroke="currentColor" strokeWidth="0.75" />
      <path d="M48 36 L72 32" stroke="currentColor" strokeWidth="0.75" />
      <path d="M48 44 L72 50" stroke="currentColor" strokeWidth="0.75" />
      <path d="M80 38 L80 46" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

const columnIllustrations = [
  DocumentsIllustration,
  IntelligenceIllustration,
  OutputsIllustration,
  CollaborationIllustration,
] as const;

type PipelineColumnProps = {
  label: string;
  items: readonly string[];
  imageSrc?: string;
  Illustration: ComponentType<IllustrationProps>;
};

function PipelineColumn({
  label,
  items,
  imageSrc,
  Illustration,
}: PipelineColumnProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center">
        {imageSrc ? (
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-none border border-border bg-muted/30">
            <Image
              key={imageSrc}
              src={imageSrc}
              alt=""
              fill
              unoptimized
              className="object-contain object-center"
              sizes="(max-width: 1024px) 80vw, 220px"
            />
          </div>
        ) : (
          <Illustration />
        )}
      </div>

      <div className="space-y-1">
        <h4 className="text-lg font-medium tracking-tight text-foreground">{label}</h4>
        <ul className="space-y-1.5">
          {items.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function IntelligencePipeline({ stageId }: { stageId: string }) {
  const stage =
    intelligenceFlowStages.find((item) => item.id === stageId) ??
    intelligenceFlowStages[0];

  return (
    <div className={cn(mobileScrollWrapperClass, "lg:overflow-visible")}>
      <div
        className={cn(
          "flex w-max flex-nowrap gap-6",
          mobileScrollInsetClass,
          "lg:grid lg:w-full lg:grid-cols-4 lg:gap-1 lg:pl-0 lg:pr-0",
        )}
      >
        {stage.columns.map((column, index) => {
          const Illustration = columnIllustrations[index];

          return (
            <div
              key={column.label}
              className="w-[min(80vw,18rem)] shrink-0 snap-start lg:w-full lg:shrink"
            >
              <PipelineColumn
                label={column.label}
                items={column.items}
                imageSrc={column.imageSrc}
                Illustration={Illustration}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const TAB_AUTO_ADVANCE_MS = 8000;

const mobileScrollInsetClass =
  "pl-[max(1.5rem,calc((100vw-var(--container-8xl))/2+1.5rem))] pr-6";

const mobileScrollWrapperClass =
  "scrollbar-hide w-full max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

function StageProgressBar({
  index,
  activeIndex,
  activeTab,
  isPaused,
  onComplete,
}: {
  index: number;
  activeIndex: number;
  activeTab: string;
  isPaused: boolean;
  onComplete: () => void;
}) {
  const isActive = index === activeIndex;
  const [progress, setProgress] = useState(0);
  const elapsedRef = useRef(0);
  const lastFrameRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    setProgress(0);
    elapsedRef.current = 0;
    lastFrameRef.current = null;
    completedRef.current = false;
  }, [activeTab]);

  useEffect(() => {
    if (!isActive || isPaused) {
      lastFrameRef.current = null;
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let frameId = 0;

    const tick = (now: number) => {
      if (lastFrameRef.current === null) {
        lastFrameRef.current = now;
      }

      const delta = now - lastFrameRef.current;
      lastFrameRef.current = now;
      elapsedRef.current += delta;

      const nextProgress = Math.min(100, (elapsedRef.current / TAB_AUTO_ADVANCE_MS) * 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
        }
        return;
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isActive, isPaused, activeTab, onComplete]);

  return (
    <div
      aria-hidden
      className={cn(
        "relative h-0.5 w-full overflow-hidden",
        index < activeIndex && "bg-foreground/40",
        index > activeIndex && "bg-border",
        index === activeIndex && "bg-border",
      )}
    >
      {isActive ? (
        <span
          className="block h-full bg-foreground motion-reduce:hidden"
          style={{ width: `${progress}%` }}
        />
      ) : null}
    </div>
  );
}

export function PlatformIntelligenceSection() {
  const [activeTab, setActiveTab] = useState(intelligenceFlowStages[0].id);
  const [isPaused, setIsPaused] = useState(false);

  const advanceTab = useCallback(() => {
    setActiveTab((current) => {
      const currentIndex = intelligenceFlowStages.findIndex((stage) => stage.id === current);
      const nextIndex = (currentIndex + 1) % intelligenceFlowStages.length;
      return intelligenceFlowStages[nextIndex].id;
    });
  }, []);

  // Reduced-motion fallback — CSS progress animation is disabled there.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || isPaused) return;

    const timeout = window.setTimeout(advanceTab, TAB_AUTO_ADVANCE_MS);
    return () => window.clearTimeout(timeout);
  }, [activeTab, isPaused, advanceTab]);

  const activeIndex = intelligenceFlowStages.findIndex((stage) => stage.id === activeTab);

  return (
    <section className="overflow-x-hidden bg-[#ffffff] py-32">
      <div className="section-container px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide text-muted-foreground">
            <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
            Legal OS
          </p>
          <h2 className="mt-1 font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
            One layer for every legal workflow in a fund's ecosystem.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty sm:text-base">
            Legal documents and entity data move through a single intelligence
            layer and become actions, insights, and collaboration.
          </p>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mt-20 flex flex-col"
      >
        <div className="section-container flex flex-col gap-6 px-6">
          <div>
            <Button
              type="button"
              variant="ghost"
              className="h-10 w-10 shrink-0 rounded-md bg-muted p-0 text-black hover:bg-muted/80 hover:text-black"
              aria-label={isPaused ? "Resume tab rotation" : "Pause tab rotation"}
              aria-pressed={isPaused}
              onClick={() => setIsPaused((paused) => !paused)}
            >
              {isPaused ? (
                <Play className="size-5 fill-black stroke-none" />
              ) : (
                <Pause className="size-5 fill-black stroke-none" />
              )}
            </Button>
          </div>

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
              <TabsList variant="line" className="contents">
                {intelligenceFlowStages.map((stage, index) => {
                  const TabIcon = stage.icon;

                  return (
                    <div
                      key={stage.id}
                      className="flex flex-col gap-2 max-lg:gap-3 max-lg:py-2"
                    >
                      <StageProgressBar
                        index={index}
                        activeIndex={activeIndex}
                        activeTab={activeTab}
                        isPaused={isPaused}
                        onComplete={advanceTab}
                      />
                      <TabsTrigger
                        id={`legal-os-tab-${stage.id}`}
                        value={stage.id}
                        aria-controls={`legal-os-panel-${stage.id}`}
                        className={cn(
                          "group relative flex h-auto w-full min-h-0 flex-none flex-col items-stretch justify-start overflow-hidden rounded-none border border-transparent bg-transparent !p-0 text-left opacity-40 !shadow-none transition-opacity",
                          "text-muted-foreground",
                          "data-active:!border-transparent data-active:!bg-transparent data-active:text-foreground data-active:!opacity-100 data-active:!shadow-none",
                          "after:!hidden focus-visible:ring-2 focus-visible:ring-ring/50",
                        )}
                      >
                        <div className="flex items-center gap-3 p-0 max-lg:py-0">
                          <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-muted/50 group-data-active:bg-muted">
                            <TabIcon
                              className="size-[16px] shrink-0 text-muted-foreground group-data-active:text-foreground"
                              aria-hidden
                            />
                          </div>
                          <p className="min-w-0 flex-1 truncate text-lg font-md leading-snug text-muted-foreground group-data-active:text-foreground">
                            {index + 1}. {stage.tabLabel}
                          </p>
                        </div>
                      </TabsTrigger>
                    </div>
                  );
                })}
              </TabsList>
            </div>
        </div>

        <div className="mt-6">
          {intelligenceFlowStages.map((stage) => {
            const isActive = activeTab === stage.id;

            return (
              <div
                key={stage.id}
                role="tabpanel"
                id={`legal-os-panel-${stage.id}`}
                aria-labelledby={`legal-os-tab-${stage.id}`}
                aria-hidden={!isActive}
                className={cn("outline-none", !isActive && "hidden")}
              >
                <div
                  className={cn(
                    "lg:section-container lg:px-6",
                    isActive && "animate-pipeline-fade-in motion-reduce:animate-none",
                  )}
                >
                  <div className="lg:bg-muted/30 lg:p-3">
                    <IntelligencePipeline stageId={stage.id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Tabs>
    </section>
  );
}
