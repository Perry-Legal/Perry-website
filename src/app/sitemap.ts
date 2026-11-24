import type { MetadataRoute } from "next";

import { absoluteUrl, indexablePages } from "@/lib/site-metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePages().map((page) => ({
    url: absoluteUrl(page.path),
    ...(page.lastModified ? { lastModified: page.lastModified } : {}),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
