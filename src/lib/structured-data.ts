/**
 * Schema.org JSON-LD builders. Render with <JsonLd />.
 * Validate changes at https://validator.schema.org and
 * https://search.google.com/test/rich-results.
 */
import { aboutImages } from "@/lib/about-images";
import type { CareerRole } from "@/lib/careers";
import { seedAnnouncement } from "@/lib/seed-announcement";
import { absoluteUrl, siteDescription, siteName, siteUrl } from "@/lib/site-metadata";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

/**
 * Company profiles that identify Perry AI as one entity across the web.
 * Carried over from the earlier SEO branch; confirm before adding more.
 */
const organizationSameAs = [
  "https://www.linkedin.com/company/106104738/",
  "https://www.crunchbase.com/organization/perry-ai",
  "https://app.dealroom.co/companies/perry_ai",
];

const founders = [
  {
    id: `${siteUrl}/#shashwat-patel`,
    name: "Shashwat Patel",
    jobTitle: "Founder & CEO",
    image: aboutImages.team.shashwatPatel,
    sameAs: ["https://www.linkedin.com/in/shashwatpatel/"],
  },
  {
    id: `${siteUrl}/#vaneesa-agrawal`,
    name: "Vaneesa Agrawal",
    jobTitle: "Founder & CPO",
    image: aboutImages.team.vaneesaAgrawal,
    sameAs: ["https://www.linkedin.com/in/vaneesaagrawal/"],
  },
] as const;

const logo = {
  "@type": "ImageObject",
  url: absoluteUrl("/perry-logo.png"),
  width: 355,
  height: 96,
} as const;

function organization() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteName,
    alternateName: "Perry",
    legalName: "Photosynth AI Limited",
    url: `${siteUrl}/`,
    logo,
    image: absoluteUrl("/og-image.png"),
    description: siteDescription,
    email: "info@useperry.com",
    identifier: {
      "@type": "PropertyValue",
      propertyID: "UK Companies House number",
      value: "16379930",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "71-75 Shelton Street, Covent Garden",
      addressLocality: "London",
      postalCode: "WC2H 9JQ",
      addressCountry: "GB",
    },
    founder: founders.map((person) => ({ "@id": person.id })),
    sameAs: organizationSameAs,
  };
}

function people() {
  return founders.map((person) => ({
    "@type": "Person",
    "@id": person.id,
    name: person.name,
    jobTitle: person.jobTitle,
    image: absoluteUrl(person.image),
    url: absoluteUrl("/about"),
    worksFor: { "@id": organizationId },
    sameAs: person.sameAs,
  }));
}

/** Homepage: WebSite + Organization + founders. */
export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteName,
        alternateName: "Perry",
        url: `${siteUrl}/`,
        description: siteDescription,
        inLanguage: "en-GB",
        publisher: { "@id": organizationId },
      },
      organization(),
      ...people(),
    ],
  };
}

/** About page: AboutPage describing the organisation and its founders. */
export function aboutJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${absoluteUrl("/about")}#webpage`,
        url: absoluteUrl("/about"),
        name: `About | ${siteName}`,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
      },
      organization(),
      ...people(),
    ],
  };
}

type Crumb = { name: string; path: string };

/** Breadcrumb trail; Home is added automatically. */
export function breadcrumbJsonLd(trail: Crumb[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** Seed-round press release. */
export function seedRoundArticleJsonLd({
  headline,
  description,
}: {
  headline: string;
  description: string;
}) {
  const url = seedAnnouncement.canonicalUrl;
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline,
    description,
    image: [seedAnnouncement.ogImageUrl, absoluteUrl(seedAnnouncement.foundersImage)],
    datePublished: seedAnnouncement.publishedTime,
    dateModified: seedAnnouncement.publishedTime,
    inLanguage: "en-GB",
    author: { "@type": "Organization", name: siteName, url: `${siteUrl}/` },
    publisher: {
      "@type": "Organization",
      "@id": organizationId,
      name: siteName,
      logo,
    },
    about: { "@id": organizationId },
  };
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function htmlSection(title: string, paragraphs: string[], asList = false): string {
  if (paragraphs.length === 0) return "";
  const body = asList
    ? `<ul>${paragraphs.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>`
    : paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  return `<h2>${escapeHtml(title)}</h2>${body}`;
}

/** Google for Jobs listing for a careers role. Built from the page copy. */
export function jobPostingJsonLd(role: CareerRole) {
  const description = [
    `<p>${escapeHtml(role.summary)}</p>`,
    htmlSection("About Perry", role.about),
    htmlSection("The role", role.theRole),
    htmlSection("What you'll do", role.whatYoullDo, true),
    htmlSection(role.whoYouAreTitle ?? "Who you are", role.whoYouAre, true),
    htmlSection("Nice to have", role.niceToHave, true),
    htmlSection("Why this role", role.whyThisRole, true),
    htmlSection("Compensation", [role.compensation]),
    htmlSection("How to apply", role.applySteps, true),
  ].join("");

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description,
    datePosted: role.datePosted,
    employmentType: "FULL_TIME",
    url: absoluteUrl(`/careers/${role.slug}`),
    directApply: false,
    hiringOrganization: {
      "@type": "Organization",
      name: siteName,
      sameAs: `${siteUrl}/`,
      logo: logo.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: role.jobLocation.locality,
        ...(role.jobLocation.region ? { addressRegion: role.jobLocation.region } : {}),
        addressCountry: role.jobLocation.country,
      },
    },
  };
}
