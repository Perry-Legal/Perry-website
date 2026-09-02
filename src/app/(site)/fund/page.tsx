import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { EnterpriseSafetySection } from "@/components/enterprise-safety-section";
import { StoryChapter } from "@/components/story-chapter";
import { StoryKpiSection } from "@/components/story-kpi-section";
import { StoryPageHero } from "@/components/story-page-hero";
import { fundPage } from "@/lib/fund-page";

export const metadata: Metadata = {
  title: "Fund",
  description:
    "The AI operating layer for legal work across the fund lifecycle — formation, deal execution, and portfolio governance.",
};

export default function FundPage() {
  return (
    <div className="border-t border-border/60">
      <StoryPageHero
        eyebrow={fundPage.eyebrow}
        title={fundPage.headline}
        description={fundPage.description}
        showBookDemoCta
        imageSrc={fundPage.heroImageSrc}
        imageAlt={fundPage.heroImageAlt}
        className="border-b-0"
      />

      <StoryKpiSection
        title={fundPage.kpisTitle}
        kpis={fundPage.kpis}
        layout="row"
      />

      {fundPage.chapters.map((chapter, index) => (
        <StoryChapter
          key={chapter.slug}
          id={chapter.slug}
          index={index + 1}
          eyebrow={chapter.eyebrow}
          title={chapter.label}
          description={chapter.description}
          items={chapter.items}
          itemsLabel={chapter.itemsLabel}
          itemGroups={chapter.itemGroups}
          outcome={chapter.outcome}
          imageSrc={chapter.imageSrc}
        />
      ))}

      <EnterpriseSafetySection />

      <CtaSection
        className="pt-20 sm:pt-24"
        title={fundPage.cta.title}
        description={fundPage.cta.description}
        imageSrc={fundPage.cta.imageSrc}
      />
    </div>
  );
}
