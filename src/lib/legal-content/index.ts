import type { LegalPageSlug } from "@/lib/legal-pages";

export type LegalBlock = {
  type: "h1" | "h2" | "h3" | "h4" | "p" | "li";
  text: string;
};

const legalContentModules: Record<LegalPageSlug, () => Promise<{ default: LegalBlock[] }>> = {
  "privacy-policy": () =>
    import("@/lib/legal-content/privacy-policy.json") as Promise<{ default: LegalBlock[] }>,
  "acceptable-use-policy": () =>
    import("@/lib/legal-content/acceptable-use-policy.json") as Promise<{
      default: LegalBlock[];
    }>,
  "data-processing-agreement-eu": () =>
    import("@/lib/legal-content/data-processing-agreement-eu.json") as Promise<{
      default: LegalBlock[];
    }>,
  "data-processing-agreement-uk": () =>
    import("@/lib/legal-content/data-processing-agreement-uk.json") as Promise<{
      default: LegalBlock[];
    }>,
  "general-terms-eu": () =>
    import("@/lib/legal-content/general-terms-eu.json") as Promise<{ default: LegalBlock[] }>,
  "general-terms-uk": () =>
    import("@/lib/legal-content/general-terms-uk.json") as Promise<{ default: LegalBlock[] }>,
};

export async function getLegalContent(slug: LegalPageSlug): Promise<LegalBlock[]> {
  const module = await legalContentModules[slug]();
  return module.default as LegalBlock[];
}
