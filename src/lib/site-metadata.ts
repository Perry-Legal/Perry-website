import type { Metadata } from "next";

import { careerRoles } from "@/lib/careers";
import { legalPages } from "@/lib/legal-pages";
import { productLifecycle } from "@/lib/product-navigation";

export const siteUrl = "https://useperry.com";
export const siteName = "Perry";
export const siteDescription = "Perry is the legal OS for private capital.";
export const defaultOgImage = "/news/seed-round/og-image.png";

export function canonicalUrl(path: string): string {
  if (path === "/" || path === "") return `${siteUrl}/`;
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return `${siteUrl}${withSlash.startsWith("/") ? withSlash : `/${withSlash}`}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: string;
  image?: string;
  openGraphType?: "website" | "article";
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  image = defaultOgImage,
  openGraphType = "website",
}: PageMetadataInput): Metadata {
  const url = canonicalUrl(path);
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
      type: openGraphType,
      images: [{ url: image, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

export type PublicPath = {
  path: string;
  changeFrequency?: "weekly" | "monthly" | "yearly";
  priority?: number;
};

export function publicPaths(): PublicPath[] {
  const productPaths = productLifecycle.map((stage) => ({
    path: `/product/${stage.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const careerPaths = careerRoles.map((role) => ({
    path: `/careers/${role.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  const legalPaths = legalPages.map((page) => ({
    path: page.href,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/law", changeFrequency: "monthly", priority: 0.8 },
    { path: "/fund", changeFrequency: "monthly", priority: 0.8 },
    ...productPaths,
    { path: "/about", changeFrequency: "monthly", priority: 0.6 },
    { path: "/careers", changeFrequency: "weekly", priority: 0.6 },
    ...careerPaths,
    { path: "/blog", changeFrequency: "weekly", priority: 0.5 },
    { path: "/newsroom", changeFrequency: "weekly", priority: 0.7 },
    { path: "/news/seed-round", changeFrequency: "yearly", priority: 0.6 },
    ...legalPaths,
  ];
}
