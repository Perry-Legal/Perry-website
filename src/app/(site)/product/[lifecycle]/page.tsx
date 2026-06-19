import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { EnterpriseSafetySection } from "@/components/enterprise-safety-section";
import { StoryChapter } from "@/components/story-chapter";
import { StoryKpiSection } from "@/components/story-kpi-section";
import { StoryPageHero } from "@/components/story-page-hero";
import { Button } from "@/components/ui/button";
import { getProductLifecycle, productLifecycle } from "@/lib/product-navigation";

type LifecyclePageProps = {
  params: Promise<{ lifecycle: string }>;
};

export async function generateStaticParams() {
  return productLifecycle.map((stage) => ({ lifecycle: stage.slug }));
}

export async function generateMetadata({
  params,
}: LifecyclePageProps): Promise<Metadata> {
  const { lifecycle: lifecycleSlug } = await params;
  const lifecycle = getProductLifecycle(lifecycleSlug);

  if (!lifecycle) {
    return { title: "Product" };
  }

  return {
    title: lifecycle.label,
    description: lifecycle.description,
  };
}

export default async function LifecyclePage({ params }: LifecyclePageProps) {
  const { lifecycle: lifecycleSlug } = await params;
  const lifecycle = getProductLifecycle(lifecycleSlug);

  if (!lifecycle) {
    notFound();
  }

  return (
    <div className="border-t border-border/60">
      <StoryPageHero
        eyebrow={lifecycle.label}
        title={lifecycle.headline}
        description={lifecycle.description}
        imageSrc={lifecycle.heroImageSrc}
        imageAlt={`${lifecycle.label} overview`}
      />

      {lifecycle.kpis && <StoryKpiSection kpis={lifecycle.kpis} />}

      {lifecycle.features.map((feature, index) => (
        <StoryChapter
          key={feature.slug}
          id={feature.slug}
          index={index + 1}
          eyebrow={feature.eyebrow}
          title={feature.label}
          description={feature.description}
          items={feature.items}
          itemsLabel={feature.itemsLabel}
          itemGroups={feature.itemGroups}
          outcome={feature.outcome}
          outcomes={feature.outcomes}
          imageSrc={feature.imageSrc}
        />
      ))}

      <EnterpriseSafetySection />

      {lifecycle.ctaHeadline && lifecycle.ctaLabel && (
        <section className="border-t border-border/60 bg-muted/20 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              {lifecycle.ctaHeadline}
            </h2>
            <div className="mt-8">
              <Button size="lg" render={<Link href="mailto:hello@perry.com" />}>
                {lifecycle.ctaLabel}
                <ArrowRight />
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
