import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const useCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === "true";
// Project Pages (github.io/Perry-website) need a base path; custom domains serve from /.
const pagesBasePath = useCustomDomain ? "" : "/Perry-website";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        ...(pagesBasePath
          ? { basePath: pagesBasePath, assetPrefix: pagesBasePath }
          : {}),
        trailingSlash: true,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? pagesBasePath : "",
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
