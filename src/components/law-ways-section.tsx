import Image from "@/components/asset-image";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { STAGGER } from "@/lib/motion";
import type { LawPageContent } from "@/lib/law-page";
import { cn } from "@/lib/utils";

type LawWaysSectionProps = {
  content: LawPageContent["ways"];
  className?: string;
};

export function LawWaysSection({ content, className }: LawWaysSectionProps) {
  return (
    <section
      id="ways"
      className={cn(
        "scroll-mt-24 bg-background px-6 py-16 sm:py-20",
        className,
      )}
    >
      <div className="section-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow align="center">{content.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 font-source-serif text-2xl font-medium tracking-tight text-balance sm:text-3xl">
            {content.title}
          </h2>
          <p className="mt-1.5 text-base leading-relaxed text-muted-foreground text-pretty">
            {content.description}
          </p>
        </Reveal>

        <StaggerGroup
          stagger={STAGGER.base}
          className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {content.items.map((way) => (
            <StaggerItem key={way.slug} y={24}>
              <article className="flex h-full min-h-[28rem] flex-col overflow-hidden rounded-2xl border border-border/70 bg-[#F8F8F8] sm:min-h-[32rem]">
                <div className="px-10 pt-10 sm:px-12 sm:pt-12">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/60 uppercase">
                    {way.eyebrow}
                  </p>
                  <h3 className="mt-3 font-source-serif text-xl font-medium tracking-tight text-balance sm:text-2xl">
                    {way.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {way.description}
                  </p>
                </div>

                <Image
                  src={way.imageSrc}
                  alt=""
                  width={1504}
                  height={690}
                  className="mt-auto h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 680px"
                />
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
