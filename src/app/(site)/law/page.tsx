import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { EnterpriseSafetySection } from "@/components/enterprise-safety-section";
import { LawWaysSection } from "@/components/law-ways-section";
import { StoryChapter } from "@/components/story-chapter";
import { StoryKpiSection } from "@/components/story-kpi-section";
import { StoryPageHero } from "@/components/story-page-hero";
import { lawPage } from "@/lib/law-page";

export const metadata: Metadata = {
  title: "Law Firms",
  description:
    "Law firms can use Perry directly for their private-capital workflows, or white-label the platform for clients.",
};

export default function LawPage() {
  return (
    <div className="border-t border-border/60">
      <StoryPageHero
        eyebrow={lawPage.eyebrow}
        title={lawPage.headline}
        description={lawPage.description}
        showBookDemoCta
        imageSrc={lawPage.heroImageSrc}
        imageAlt={lawPage.heroImageAlt}
        className="border-b-0"
      />

      <StoryKpiSection
        title={lawPage.kpisTitle}
        kpis={lawPage.kpis}
        layout="row"
      />

      <LawWaysSection content={lawPage.ways} />

      {lawPage.chapters.map((chapter, index) => (
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
        title={lawPage.cta.title}
        description={lawPage.cta.description}
        imageSrc={lawPage.cta.imageSrc}
      />
    </div>
  );
}
