"use client";

import { useEffect } from "react";

import { withBasePath } from "@/lib/base-path";

/**
 * Forwards an old URL to its new home. The site is a static export (no server
 * redirects), so this uses a meta refresh plus a JS fallback.
 */
export function LegacyRedirect({ to }: { to: string }) {
  const href = withBasePath(to);

  useEffect(() => {
    window.location.replace(href + window.location.search + window.location.hash);
  }, [href]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <link rel="canonical" href={href} />
      <p className="p-6 text-sm text-muted-foreground">
        This page has moved to <a href={href}>{href}</a>.
      </p>
    </>
  );
}
