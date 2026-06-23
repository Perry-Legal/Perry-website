"use client";

import Image from "@/components/asset-image";
import { useEffect, useState, type ComponentType } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <div className="grid grid-cols-1 gap-8 motion-reduce:animate-none lg:grid-cols-4 lg:gap-1 animate-pipeline-fade-in">
      {stage.columns.map((column, index) => {
        const Illustration = columnIllustrations[index];

        return (
          <PipelineColumn
            key={column.label}
            label={column.label}
            items={column.items}
            imageSrc={column.imageSrc}
            Illustration={Illustration}
          />
        );
      })}
    </div>
  );
}

const TAB_AUTO_ADVANCE_MS = 8000;

function StageProgressBar({
  index,
  activeIndex,
  activeTab,
}: {
  index: number;
  activeIndex: number;
  activeTab: string;
}) {
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
      {index === activeIndex && (
        <span
          key={activeTab}
          className="block h-full bg-foreground animate-tab-progress motion-reduce:animate-none"
          style={{ animationDuration: `${TAB_AUTO_ADVANCE_MS}ms` }}
        />
      )}
    </div>
  );
}

export function PlatformIntelligenceSection() {
  const [activeTab, setActiveTab] = useState(intelligenceFlowStages[0].id);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = intelligenceFlowStages.findIndex((stage) => stage.id === current);
        const nextIndex = (currentIndex + 1) % intelligenceFlowStages.length;
        return intelligenceFlowStages[nextIndex].id;
      });
    }, TAB_AUTO_ADVANCE_MS);

    return () => window.clearInterval(interval);
  }, [activeTab]);

  const activeIndex = intelligenceFlowStages.findIndex((stage) => stage.id === activeTab);

  return (
    <section className="bg-[#ffffff] px-6 py-32">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide text-muted-foreground">
            <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
            Legal OS
          </p>
          <h2 className="mt-1 font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
            The only platform you need for all legal work in funds.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty sm:text-base">
            Legal documents and entity data move through one intelligence layer and become
            actions, insights and collaboration.
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mt-20 flex flex-col"
        >
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-3">
            <TabsList variant="line" className="contents">
              {intelligenceFlowStages.map((stage, index) => {
                const TabIcon = stage.icon;

                return (
                  <div key={stage.id} className="flex flex-col gap-2 max-lg:gap-3 max-lg:py-2">
                    <StageProgressBar
                      index={index}
                      activeIndex={activeIndex}
                      activeTab={activeTab}
                    />
                    <TabsTrigger
                      value={stage.id}
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

          {intelligenceFlowStages.map((stage) => (
            <TabsContent
              key={stage.id}
              value={stage.id}
              className="mt-6 p-0 outline-none"
            >
              {activeTab === stage.id ? (
                <div className="bg-muted/30 p-3">
                  <IntelligencePipeline key={activeTab} stageId={stage.id} />
                </div>
              ) : null}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
