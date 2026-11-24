import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { StoryChapter } from "@/components/story-chapter";
import { StoryKpiSection } from "@/components/story-kpi-section";
import { StoryPageHero } from "@/components/story-page-hero";
import { getProductLifecycle, productLifecycle } from "@/lib/product-navigation";
import { pageMetadata } from "@/lib/site-metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

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

  return pageMetadata({
    title: lifecycle.label,
    description: lifecycle.description,
    path: `/product/${lifecycle.slug}`,
  });
}

export default async function LifecyclePage({ params }: LifecyclePageProps) {
  const { lifecycle: lifecycleSlug } = await params;
  const lifecycle = getProductLifecycle(lifecycleSlug);

  if (!lifecycle) {
    notFound();
  }

  return (
    <div className="border-t border-border/60">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: lifecycle.label, path: `/product/${lifecycle.slug}` },
        ])}
      />
      <StoryPageHero
        eyebrow={lifecycle.label}
        title={lifecycle.headline}
        description={lifecycle.description}
        showBookDemoCta
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

      <CtaSection className="pt-20 sm:pt-24" />
    </div>
  );
}
