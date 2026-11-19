import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Blog",
    description: "There are no posts yet.",
    path: "/blog",
  }),
  robots: { index: false, follow: false },
};

export default function BlogPage() {
  return (
    <div className="border-t border-border/60">
      <PageHeader title="Blog" description="There are no posts yet." />
    </div>
  );
}
