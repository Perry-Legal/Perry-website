import type { Metadata } from "next";

import { GuideArticle } from "@/components/guide-article";
import { getGuide } from "@/lib/guides";
import { pageMetadata } from "@/lib/site-metadata";

const guide = getGuide("/lpa-review-software");

export const metadata: Metadata = pageMetadata({
  title: guide.question,
  description: guide.answer,
  path: guide.path,
});

export default function LpaReviewSoftwarePage() {
  return <GuideArticle guide={guide} />;
}
