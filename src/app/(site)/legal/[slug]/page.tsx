import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocument } from "@/components/legal-document";
import { PageHeader } from "@/components/page-header";
import { getLegalContent } from "@/lib/legal-content";
import { getLegalPage, legalPages, type LegalPageSlug } from "@/lib/legal-pages";

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

  return {
    title: page.title,
    description: `${page.title} for Perry AI.`,
  };
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
      <PageHeader title={page.title} description={lastUpdated ?? "Legal information for Perry AI."} />
      <div className="section-container px-6 pb-24">
        <LegalDocument blocks={blocks} />
      </div>
    </div>
  );
}
