import type { MetadataRoute } from "next";

import { siteDescription, siteName, siteTitle } from "@/lib/site-metadata";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteTitle,
    short_name: siteName,
    description: siteDescription,
    start_url: "/",
    display: "browser",
    background_color: "#0a110e",
    theme_color: "#0a110e",
    icons: [
      { src: "/icon.png", type: "image/png", sizes: "1024x1024" },
      { src: "/apple-icon.png", type: "image/png", sizes: "1024x1024", purpose: "any" },
    ],
  };
}
