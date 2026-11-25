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

/** Search titles and descriptions. Hero copy stays on the lifecycle record. */
const productPageSeo: Record<string, { title?: string; description: string }> = {
  "fund-formation": {
    title: "Fund Formation and Side Letters",
    description:
      "Side letter management, MFN elections and LPA review for fund formation. Perry preserves every investor term for the life of the fund.",
  },
  "capital-deployment": {
    description:
      "AI for transactional work at funds: diligence, document review, negotiation and post-closing obligations, all with the full fund context.",
  },
  "fund-portfolio-management": {
    description:
      "Track obligations, transaction rights and legal decisions in one operating view. See what needs attention and what the fund has already decided.",
  },
  exit: {
    title: "Fund Exits",
    description:
      "Enter every exit with the legal record already prepared. Documents, obligations and transaction history are ready before diligence begins.",
  },
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

  const seo = productPageSeo[lifecycle.slug];

  return pageMetadata({
    title: seo?.title ?? lifecycle.label,
    description: seo?.description ?? lifecycle.description,
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
