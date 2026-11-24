import type { Metadata } from "next";

import { careerRoles } from "@/lib/careers";
import { legalPages } from "@/lib/legal-pages";
import { productLifecycle } from "@/lib/product-navigation";
import { seedAnnouncement } from "@/lib/seed-announcement";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

export { absoluteUrl, siteUrl };

export const siteName = "Perry AI";
export const siteTitle = "Perry AI - The Legal OS for Private Capital";
/** Mirrors the homepage hero line. */
export const siteDescription =
  "The AI operating layer for legal work across the fund lifecycle — formation, deal execution, and portfolio governance, in one platform built for private capital.";
export const siteLocale = "en_GB";

export const defaultOgImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: siteTitle,
} as const;

type OgImage = { url: string; width: number; height: number; alt: string };

type PageMetadataInput = {
  /** Page title. The root layout template appends " | Perry AI". */
  title: string;
  description: string;
  path: string;
  /** Use instead of `title` to bypass the template (e.g. the homepage). */
  absoluteTitle?: string;
  image?: OgImage;
  type?: "website" | "article";
  noindex?: boolean;
};

/**
 * Full per-page metadata: canonical, Open Graph and Twitter card.
 *
 * Next merges metadata shallowly, so a page that sets `openGraph` replaces the
 * root one entirely. Building every page through this helper keeps the image,
 * site name and locale on every share card.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  image = defaultOgImage,
  type = "website",
  noindex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = absoluteTitle ?? `${title} | ${siteName}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName,
      locale: siteLocale,
      type,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export type SitemapEntry = {
  path: string;
  lastModified?: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

/** Every indexable page. Keep in sync when adding routes. */
export function indexablePages(): SitemapEntry[] {
  return [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/law", changeFrequency: "monthly", priority: 0.9 },
    { path: "/fund", changeFrequency: "monthly", priority: 0.9 },
    ...productLifecycle.map((stage) => ({
      path: `/product/${stage.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/newsroom", changeFrequency: "weekly", priority: 0.7 },
    {
      path: seedAnnouncement.pressPagePath,
      lastModified: seedAnnouncement.publishedTime,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    { path: "/careers", changeFrequency: "weekly", priority: 0.6 },
    ...careerRoles.map((role) => ({
      path: `/careers/${role.slug}`,
      lastModified: role.datePosted,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...legalPages.map((page) => ({
      path: page.href,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
