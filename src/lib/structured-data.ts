import { newsroomAggregators, newsroomNews } from "@/lib/newsroom";
import { siteDescription, siteUrl } from "@/lib/site-metadata";

const organizationId = `${siteUrl}/#organization`;

const shashwatLinkedIn = "https://www.linkedin.com/in/shashwatpatel/";
const vaneesaLinkedIn = "https://www.linkedin.com/in/vaneesaagrawal/";

/**
 * Official company profile URLs.
 * Crunchbase organization/perry-ai lists legal name Photosynth AI Limited and website useperry.com.
 * Dealroom companies/perry_ai lists website useperry.com.
 * An X profile is not confirmed.
 */
const organizationSameAs: string[] = [
  "https://www.linkedin.com/company/106104738/",
  "https://www.crunchbase.com/organization/perry-ai",
  "https://app.dealroom.co/companies/perry_ai",
];

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
      url: `${siteUrl}/about/#vaneesa-agrawal`,
      description:
        "Co-founder and CPO of Perry. 12+ years as a funds lawyer and serial entrepreneur. Studied at NLU Jodhpur, practised at Cyril Amarchand Mangaldas, and is an NYU School of Law graduate. Founded Thinking Legal, a venture capital law firm, and built it from zero to 75 deals, with a top-tier Legal 500 ranking within three years. Named to the Bae HQ 100 Female Founders Watchlist 2026, and a guest on The Future Series podcast.",
      alumniOf: [
        { "@type": "EducationalOrganization", name: "NLU Jodhpur" },
        { "@type": "EducationalOrganization", name: "NYU School of Law" },
      ],
      award: "Bae HQ 100 Female Founders Watchlist 2026",
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

export function faqPageJsonLd(
  name: string,
  faqs: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
