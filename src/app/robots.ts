import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-metadata";

export const dynamic = "force-static";

/** Open to all crawlers, including AI search and assistant bots. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
