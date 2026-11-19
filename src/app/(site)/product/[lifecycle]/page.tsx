import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/cta-section";
import { StoryChapter } from "@/components/story-chapter";
import { StoryKpiSection } from "@/components/story-kpi-section";
import { StoryPageHero } from "@/components/story-page-hero";
import Link from "next/link";

import { guidesForProduct } from "@/lib/guides";
import { getProductLifecycle, productLifecycle } from "@/lib/product-navigation";
import { pageMetadata } from "@/lib/site-metadata";

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
    title: lifecycle.pageTitle ?? lifecycle.label,
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

      <RelatedGuides slug={lifecycle.slug} />

      <CtaSection className="pt-20 sm:pt-24" />
    </div>
  );
}

function RelatedGuides({ slug }: { slug: string }) {
  const guides = guidesForProduct(slug);
  if (guides.length === 0) return null;

  return (
    <section className="section-container px-6 pt-16 sm:pt-20" aria-labelledby="related-guides">
      <h2
        id="related-guides"
        className="font-source-serif text-3xl font-medium tracking-tight text-balance"
      >
        Guides
      </h2>
      <ul className="mt-6 flex max-w-2xl flex-col gap-3">
        {guides.map((guide) => (
          <li key={guide.path}>
            <Link
              href={guide.path}
              className="text-base leading-relaxed text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
            >
              {guide.question}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
