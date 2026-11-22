import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-metadata";

export const dynamic = "force-static";

const allowedBots = [
  "*",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Bingbot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: allowedBots.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
