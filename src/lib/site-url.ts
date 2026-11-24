/** Production origin. Canonicals, sitemap and structured data always point here. */
export const siteUrl = "https://useperry.com";

/**
 * Absolute URL for a site path. The static export uses `trailingSlash: true`,
 * so every page URL ends in a slash; canonicals must match exactly.
 */
export function absoluteUrl(path: string): string {
  if (path === "" || path === "/") return `${siteUrl}/`;
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  const isFile = /\.[a-z0-9]+$/i.test(withLeading);
  return `${siteUrl}${isFile || withLeading.endsWith("/") ? withLeading : `${withLeading}/`}`;
}
