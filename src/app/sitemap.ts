import type { MetadataRoute } from "next";

import { canonicalUrl, publicPaths } from "@/lib/site-metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths().map((page) => ({
    url: canonicalUrl(page.path),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
