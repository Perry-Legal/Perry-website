import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { EnterpriseSafetySection } from "@/components/enterprise-safety-section";
import { StoryChapter } from "@/components/story-chapter";
import { StoryPageHero } from "@/components/story-page-hero";
import { Button } from "@/components/ui/button";
import { allSolutionPages, getSolutionPage } from "@/lib/solution-navigation";

type SolutionDetailPageProps = {
  params: Promise<{ persona: string }>;
};

export async function generateStaticParams() {
  return allSolutionPages.map((page) => ({ persona: page.slug }));
}

export async function generateMetadata({
  params,
}: SolutionDetailPageProps): Promise<Metadata> {
  const { persona: slug } = await params;
  const page = getSolutionPage(slug);

  if (!page) {
    return { title: "Solution" };
  }

  return {
    title: page.label,
    description: page.description,
  };
}

export default async function SolutionDetailPage({
  params,
}: SolutionDetailPageProps) {
  const { persona: slug } = await params;
  const page = getSolutionPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="border-t border-border/60">
      <StoryPageHero
        eyebrow="Solution"
        title={page.headline}
        description={page.description}
        kpis={page.kpis}
        imageSrc={page.heroImageSrc}
        imageAlt={`${page.label} overview`}
      />

      {page.chapters.map((chapter, index) => (
        <StoryChapter
          key={chapter.title}
          index={index + 1}
          eyebrow={chapter.eyebrow}
          title={chapter.title}
          description={chapter.body}
          items={chapter.items}
          itemsLabel={chapter.itemsLabel}
          imageSrc={chapter.imageSrc}
        />
      ))}

      <EnterpriseSafetySection />

      {page.ctaHeadline && page.ctaLabel && (
        <section className="border-t border-border/60 bg-muted/20 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              {page.ctaHeadline}
            </h2>
            <div className="mt-8">
              <Button size="lg" render={<Link href="mailto:hello@perry.com" />}>
                {page.ctaLabel}
                <ArrowRight />
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
