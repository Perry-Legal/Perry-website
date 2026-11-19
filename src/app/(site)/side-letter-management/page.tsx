import type { Metadata } from "next";

import { GuideArticle } from "@/components/guide-article";
import { getGuide } from "@/lib/guides";
import { pageMetadata } from "@/lib/site-metadata";

const guide = getGuide("/side-letter-management");

export const metadata: Metadata = pageMetadata({
  title: guide.question,
  description: guide.answer,
  path: guide.path,
});

export default function SideLetterManagementPage() {
  return <GuideArticle guide={guide} />;
}
