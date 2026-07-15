import type { ReactNode } from "react";

import Image from "@/components/asset-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeadlineReveal } from "@/components/motion/headline-reveal";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Button } from "@/components/ui/button";
import { getImageAspectRatio } from "@/lib/image-aspect-ratios";
import { bookDemoUrl } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type StoryPageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  kpis?: string[];
  showBookDemoCta?: boolean;
  children?: ReactNode;
  belowContent?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageAspect?: "portrait" | "landscape" | "square";
  className?: string;
};

export function StoryPageHero({
  eyebrow,
  title,
  description,
  kpis,
  showBookDemoCta = false,
  children,
  belowContent,
  imageSrc,
  imageAlt,
  imageAspect = "portrait",
  className,
}: StoryPageHeroProps) {
  const intrinsicAspectRatio = imageSrc ? getImageAspectRatio(imageSrc) : undefined;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-border/60",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_15%_0%,hsl(var(--primary)/0.12),transparent_55%),radial-gradient(700px_circle_at_85%_20%,hsl(var(--foreground)/0.06),transparent_60%),linear-gradient(to_bottom,hsl(var(--muted)/0.5),hsl(var(--background)))]"
      />

      <div
        className={cn(
          "section-container px-6",
          belowContent ? "pt-20 sm:pt-24 lg:pt-28" : "py-20 sm:py-24 lg:py-28",
        )}
      >
        <div
          className={cn(
            imageSrc
              ? "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
              : "flex flex-col items-center text-center",
          )}
        >
        <div className={cn(imageSrc ? "max-w-xl" : "max-w-3xl")}>
          {eyebrow && (
            <Reveal y={12}>
              <SectionEyebrow align={imageSrc ? "left" : "center"}>
                {eyebrow}
              </SectionEyebrow>
            </Reveal>
          )}
          <HeadlineReveal
            as="h1"
            lines={[title]}
            delay={0.1}
            className="mt-3 font-source-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl"
          />
          <Reveal delay={0.25} y={16}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              {description}
            </p>
          </Reveal>
          {showBookDemoCta && (
            <Reveal
              delay={0.35}
              y={16}
              className={cn("mt-8", !imageSrc && "flex justify-center")}
            >
              <Button
                size="lg"
                className="btn-shine"
                render={
                  <Link
                    href={bookDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Book demo
                <ArrowRight />
              </Button>
            </Reveal>
          )}
          {kpis && kpis.length > 0 && (
            <StaggerGroup as="ul" delay={0.45} className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {kpis.map((kpi) => (
                <StaggerItem
                  as="li"
                  key={kpi}
                  y={12}
                  className="flex gap-3 text-sm leading-relaxed text-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1 shrink-0 rounded-full bg-foreground/35"
                  />
                  {kpi}
                </StaggerItem>
              ))}
            </StaggerGroup>
          )}
          {children}
        </div>

        {imageSrc && (
        <Reveal delay={0.2} y={28}>
          <Parallax range={[-20, 20]}>
            <div
              className={cn(
                "relative overflow-hidden rounded-sm border border-border bg-muted/30 shadow-sm",
                intrinsicAspectRatio === undefined &&
                  (imageAspect === "square" || imageSrc.includes("/platform-intelligence-square/")
                    ? "aspect-square"
                    : imageAspect === "landscape"
                      ? "aspect-[3/2]"
                      : "aspect-[4/5]"),
              )}
              style={intrinsicAspectRatio ? { aspectRatio: intrinsicAspectRatio } : undefined}
            >
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                unoptimized={
                  imageSrc.includes("/platform-intelligence/") ||
                  imageSrc.includes("/platform-intelligence-square/")
                }
                className={cn(
                  "object-center",
                  intrinsicAspectRatio || imageAspect === "landscape"
                    ? "object-cover"
                    : "object-contain",
                )}
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
            </div>
          </Parallax>
        </Reveal>
        )}

        </div>

        {belowContent && (
          <div className="mt-16 pb-20 sm:pb-24 lg:pb-28">{belowContent}</div>
        )}
      </div>
    </section>
  );
}
