import Image from "@/components/asset-image";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { STAGGER } from "@/lib/motion";
import { solutionByIndustry, solutionByRole } from "@/lib/solution-navigation";

const personaCards = [
  ...solutionByRole,
  ...solutionByIndustry.filter((item) => item.slug === "vc" || item.slug === "pe"),
];

export function SolutionSection() {
  return (
    <section id="solution" className="overflow-x-hidden pt-12 pb-32">
      <div className="section-container px-6">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>Ecosystem</SectionEyebrow>
          <h2 className="mt-2 font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
            Connect every stakeholder around the fund
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            One connected workflow that brings in-house teams, portfolio
            companies, LPs, and advisers into the fund&apos;s legal work.
          </p>
        </Reveal>
      </div>

      <div className="scrollbar-hide mt-16 w-full max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <StaggerGroup
          stagger={STAGGER.tight}
          amount={0.2}
          className="flex w-max flex-nowrap gap-2 pl-[max(1.5rem,calc((100vw-var(--container-8xl))/2+1.5rem))] pr-6"
        >
          {personaCards.map((item) => (
            <StaggerItem key={item.slug} y={24} className="shrink-0 snap-start">
              <article className="group flex aspect-[2/4] h-[560px] w-[320px] flex-col overflow-hidden rounded-none border border-border bg-card transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg">
                <div className="relative min-h-0 flex-1 overflow-hidden">
                  <Image
                    src={item.cardImageSrc}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="relative shrink-0 p-4 after:absolute after:inset-x-0 after:top-0 after:h-px after:origin-left after:scale-x-0 after:bg-foreground/30 after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-medium tracking-tight">{item.label}</h3>
                    <ArrowRight
                      aria-hidden
                      className="size-3.5 shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.cardDescription}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
