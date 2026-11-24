import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { LegalDocument } from "@/components/legal-document";
import { PageHeader } from "@/components/page-header";
import { getLegalContent } from "@/lib/legal-content";
import { getLegalPage, legalPages, type LegalPageSlug } from "@/lib/legal-pages";
import { pageMetadata } from "@/lib/site-metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

type LegalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPage(slug);

  if (!page) {
    return { title: "Legal" };
  }

  return pageMetadata({
    title: page.title,
    description: `${page.title} for Perry AI.`,
    path: page.href,
  });
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = getLegalPage(slug);

  if (!page) {
    notFound();
  }

  const blocks = await getLegalContent(slug as LegalPageSlug);
  const lastUpdated = blocks.find(
    (block) => block.type === "p" && /last updated/i.test(block.text),
  )?.text;

  return (
    <div className="border-t border-border/60">
      <JsonLd data={breadcrumbJsonLd([{ name: page.title, path: page.href }])} />
      <PageHeader title={page.title} description={lastUpdated ?? "Legal information for Perry AI."} />
      <div className="section-container px-6 pb-24">
        <LegalDocument blocks={blocks} />
      </div>
    </div>
  );
}
