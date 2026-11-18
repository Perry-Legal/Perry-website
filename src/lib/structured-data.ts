import { newsroomAggregators, newsroomNews } from "@/lib/newsroom";
import { siteDescription, siteUrl } from "@/lib/site-metadata";

const organizationId = `${siteUrl}/#organization`;

const shashwatLinkedIn = "https://www.linkedin.com/in/shashwatpatel/";
const vaneesaLinkedIn = "https://www.linkedin.com/in/vaneesaagrawal/";

/**
 * Official company profile URLs.
 * The repo has Perry's LinkedIn post URLs and the founders' personal profiles,
 * but not a company LinkedIn page, an X profile, or Crunchbase and Dealroom
 * company profiles. Do not add those until the URLs are confirmed.
 * TODO: add Crunchbase and Dealroom company profile URLs when they are confirmed.
 */
const organizationSameAs: string[] = [];

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: "Perry",
    legalName: "Photosynth AI Limited",
    url: siteUrl,
    logo: `${siteUrl}/perry-logo.png`,
    description: siteDescription,
    ...(organizationSameAs.length > 0 ? { sameAs: organizationSameAs } : {}),
  };
}

export function peopleJsonLd() {
  return [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#shashwat-patel`,
      name: "Shashwat Patel",
      jobTitle: "Co-founder and CEO",
      worksFor: { "@id": organizationId },
      sameAs: [shashwatLinkedIn],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#vaneesa-agrawal`,
      name: "Vaneesa Agrawal",
      jobTitle: "Co-founder and CPO",
      worksFor: { "@id": organizationId },
      sameAs: [vaneesaLinkedIn],
    },
  ];
}

export function siteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), ...peopleJsonLd()],
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Perry",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description: siteDescription,
    provider: { "@id": organizationId },
  };
}

export function newsroomItemListJsonLd() {
  const articles = [...newsroomNews, ...newsroomAggregators];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Perry in the news",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "NewsArticle",
        headline: article.headline,
        url: article.href,
        datePublished: article.date,
        publisher: {
          "@type": "Organization",
          name: article.outlet,
        },
      },
    })),
  };
}
