export type LegalPageSlug =
  | "privacy-policy"
  | "acceptable-use-policy"
  | "data-processing-agreement-eu"
  | "data-processing-agreement-uk"
  | "general-terms-eu"
  | "general-terms-uk";

export type LegalPageMeta = {
  slug: LegalPageSlug;
  title: string;
  href: `/legal/${LegalPageSlug}`;
};

export const legalPages: LegalPageMeta[] = [
  {
    slug: "privacy-policy",
    title: "Privacy policy",
    href: "/legal/privacy-policy",
  },
  {
    slug: "acceptable-use-policy",
    title: "Acceptable Use Policy",
    href: "/legal/acceptable-use-policy",
  },
  {
    slug: "data-processing-agreement-eu",
    title: "Data Processing Agreement (EU)",
    href: "/legal/data-processing-agreement-eu",
  },
  {
    slug: "data-processing-agreement-uk",
    title: "Data Processing Agreement (UK)",
    href: "/legal/data-processing-agreement-uk",
  },
  {
    slug: "general-terms-eu",
    title: "General Terms (EU)",
    href: "/legal/general-terms-eu",
  },
  {
    slug: "general-terms-uk",
    title: "General Terms (UK)",
    href: "/legal/general-terms-uk",
  },
];

export function getLegalPage(slug: string): LegalPageMeta | undefined {
  return legalPages.find((page) => page.slug === slug);
}
