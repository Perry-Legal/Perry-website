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

/**
 * About page: the organization and its founders as one graph.
 * Independent of homeJsonLd() so the homepage keeps its own structured data.
 * The About page renders this once, as a single JSON-LD script.
 */
export function aboutJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://useperry.com/#organization",
        "name": "Perry AI",
        "alternateName": "Perry",
        "legalName": "Photosynth AI Limited",
        "url": "https://useperry.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://useperry.com/apple-icon.png",
          "width": 1024,
          "height": 1024
        },
        "description": "Perry AI is the legal OS for private capital: an AI legal operating system for private equity, venture capital and other private capital funds and their law firms.",
        "foundingDate": "2025-04-10",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "GB"
        },
        "founder": [
          {
            "@id": "https://useperry.com/about/#shashwat-patel"
          },
          {
            "@id": "https://useperry.com/about/#vaneesa-agrawal"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/useperry/",
          "https://find-and-update.company-information.service.gov.uk/company/16379930",
          "https://www.crunchbase.com/organization/perry-ai",
          "https://app.dealroom.co/companies/perry_ai"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://useperry.com/about/#shashwat-patel",
        "name": "Shashwat Patel",
        "jobTitle": "Founder & CEO",
        "worksFor": {
          "@id": "https://useperry.com/#organization"
        },
        "image": "https://useperry.com/images/about/team/shashwat-patel.jpg",
        "url": "https://useperry.com/about/",
        "description": "Founder and CEO of Perry AI. Former private equity and funds lawyer at Debevoise & Plimpton and Simmons & Simmons, qualified in New York, England and Wales, and India.",
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "Columbia Law School",
            "sameAs": "https://www.wikidata.org/wiki/Q1149089"
          }
        ],
        "knowsAbout": [
          "Private equity",
          "Investment funds",
          "Fund formation",
          "Legal technology",
          "Artificial intelligence"
        ],
        "sameAs": [
          "https://www.linkedin.com/in/shashwatpatel/",
          "https://x.com/shashwatpatel",
          "https://www.crunchbase.com/person/shashwat-patel"
        ],
        "subjectOf": [
          {
            "@type": "NewsArticle",
            "headline": "Perry AI raises $2.2M seed funding to build the AI legal operating system for private capital",
            "url": "https://useperry.com/news/seed-round/",
            "datePublished": "2026-11-18T00:01:00Z",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Perry AI"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "London’s Perry AI raises $2.2M from Haatch and Antler to automate legal work for private capital",
            "url": "https://techfundingnews.com/londons-perry-ai-raises-2-2m-from-haatch-and-antler-to-automate-legal-work-for-private-capital/",
            "datePublished": "2026-11-18T05:00:00+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Tech Funding News"
            },
            "author": {
              "@type": "Person",
              "name": "Abhinaya Prabhu"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Perry AI secures $2.2M to automate legal work across private capital",
            "url": "https://tech.eu/2026/11/18/perry-ai-secures-22m-to-automate-legal-work-across-private-capital/",
            "datePublished": "2026-11-18T07:30:00+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Tech.eu"
            },
            "author": {
              "@type": "Person",
              "name": "Tamara Djurickovic"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "UK AI-powered legal software start-up Perry AI raises $2.2m in seed funding round",
            "url": "https://www.globallegalpost.com/news/uk-ai-powered-legal-software-start-up-perry-ai-raises-22m-in-seed-funding-round-56788550",
            "datePublished": "2026-11-18T17:04:00+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "The Global Legal Post"
            },
            "author": {
              "@type": "Person",
              "name": "Peter Taberner"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Perry AI Raises $2.2M in Seed Funding",
            "url": "https://www.finsmes.com/2026/11/perry-ai-raises-2-2m-in-seed-funding.html",
            "datePublished": "2026-11-18T11:15:50+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "FinSMEs"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Former City lawyer raises $2.2m for AI startup to speed up private capital deals",
            "url": "https://www.nonbillable.co.uk/news/former-city-lawyer-raises-perry-ai-startup",
            "datePublished": "2026-11-18",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Non-Billable"
            },
            "author": {
              "@type": "Person",
              "name": "Rachel Scepanovic"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Investment Fund Management Startup Perry AI Announces $2.2M Seed Round",
            "url": "https://www.law.com/legaltechnews/2026/11/18/-investment-fund-management-startup-perry-ai-announces-22m-seed-round/",
            "datePublished": "2026-11-18T13:25:57-05:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Law.com Legaltech News"
            },
            "author": {
              "@type": "Person",
              "name": "Ella Sherman"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "London’s Perry AI raises €2 million to bring AI-powered legal intelligence to private capital funds",
            "url": "https://www.eu-startups.com/2026/11/londons-perry-ai-raises-e2-million-to-bring-ai-powered-legal-intelligence-to-private-capital-funds/",
            "datePublished": "2026-11-18T06:42:52+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "EU-Startups"
            },
            "author": {
              "@type": "Person",
              "name": "Rahul Raj"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Perry AI founder: Sell before you build",
            "url": "https://www.uktech.news/news/founder-interviews/perry-ai-founder-sell-before-you-build-20260508",
            "datePublished": "2026-05-08T10:00:49+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "UKTN"
            }
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://useperry.com/about/#vaneesa-agrawal",
        "name": "Vaneesa Agrawal",
        "jobTitle": "Founder & CPO",
        "worksFor": {
          "@id": "https://useperry.com/#organization"
        },
        "image": "https://useperry.com/images/about/team/vaneesa-agrawal.jpg",
        "url": "https://useperry.com/about/",
        "description": "Co-founder and Chief Product Officer of Perry AI. Funds and venture capital lawyer for more than 12 years and founder of a Legal 500 ranked boutique law firm. Graduate of NYU School of Law.",
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "New York University School of Law",
            "sameAs": "https://www.wikidata.org/wiki/Q846173"
          },
          {
            "@type": "CollegeOrUniversity",
            "name": "National Law University, Jodhpur",
            "sameAs": "https://www.wikidata.org/wiki/Q6974033"
          }
        ],
        "knowsAbout": [
          "Venture capital",
          "Investment funds",
          "Fund formation",
          "Legal technology",
          "Product management"
        ],
        "award": [
          "Bae HQ 100: Female Founders Watchlist 2026",
          "BW Legal World Elite 40 Under 40 Club of Achievers 2021"
        ],
        "sameAs": [
          "https://www.linkedin.com/in/vaneesaagrawal/",
          "https://www.thebaehq.com/profiles/vaneesa-agrawal"
        ],
        "subjectOf": [
          {
            "@type": "NewsArticle",
            "headline": "Perry AI raises $2.2M seed funding to build the AI legal operating system for private capital",
            "url": "https://useperry.com/news/seed-round/",
            "datePublished": "2026-11-18T00:01:00Z",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Perry AI"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "London’s Perry AI raises $2.2M from Haatch and Antler to automate legal work for private capital",
            "url": "https://techfundingnews.com/londons-perry-ai-raises-2-2m-from-haatch-and-antler-to-automate-legal-work-for-private-capital/",
            "datePublished": "2026-11-18T05:00:00+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Tech Funding News"
            },
            "author": {
              "@type": "Person",
              "name": "Abhinaya Prabhu"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Perry AI secures $2.2M to automate legal work across private capital",
            "url": "https://tech.eu/2026/11/18/perry-ai-secures-22m-to-automate-legal-work-across-private-capital/",
            "datePublished": "2026-11-18T07:30:00+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Tech.eu"
            },
            "author": {
              "@type": "Person",
              "name": "Tamara Djurickovic"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "UK AI-powered legal software start-up Perry AI raises $2.2m in seed funding round",
            "url": "https://www.globallegalpost.com/news/uk-ai-powered-legal-software-start-up-perry-ai-raises-22m-in-seed-funding-round-56788550",
            "datePublished": "2026-11-18T17:04:00+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "The Global Legal Post"
            },
            "author": {
              "@type": "Person",
              "name": "Peter Taberner"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Perry AI Raises $2.2M in Seed Funding",
            "url": "https://www.finsmes.com/2026/11/perry-ai-raises-2-2m-in-seed-funding.html",
            "datePublished": "2026-11-18T11:15:50+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "FinSMEs"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Former City lawyer raises $2.2m for AI startup to speed up private capital deals",
            "url": "https://www.nonbillable.co.uk/news/former-city-lawyer-raises-perry-ai-startup",
            "datePublished": "2026-11-18",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Non-Billable"
            },
            "author": {
              "@type": "Person",
              "name": "Rachel Scepanovic"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Investment Fund Management Startup Perry AI Announces $2.2M Seed Round",
            "url": "https://www.law.com/legaltechnews/2026/11/18/-investment-fund-management-startup-perry-ai-announces-22m-seed-round/",
            "datePublished": "2026-11-18T13:25:57-05:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Law.com Legaltech News"
            },
            "author": {
              "@type": "Person",
              "name": "Ella Sherman"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "London’s Perry AI raises €2 million to bring AI-powered legal intelligence to private capital funds",
            "url": "https://www.eu-startups.com/2026/11/londons-perry-ai-raises-e2-million-to-bring-ai-powered-legal-intelligence-to-private-capital-funds/",
            "datePublished": "2026-11-18T06:42:52+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "EU-Startups"
            },
            "author": {
              "@type": "Person",
              "name": "Rahul Raj"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Perry AI raises $2.2M seed to give private capital a legal memory",
            "url": "https://dealroom.co/news/173754-perry-ai-raises-2-2m-seed-to-give-private-capital-a-legal-memory/",
            "datePublished": "2026-11-18T05:30:38Z",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Dealroom.co"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Perry AI raises $2.2M seed to build a legal memory for private capital funds",
            "url": "https://www.thebaehq.com/news/perry-ai-raises-2-2m-seed",
            "datePublished": "2026-11-18",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Bae HQ"
            }
          },
          {
            "@type": "Article",
            "headline": "Haatch leads Perry AI's $2.2M seed round",
            "url": "https://haatch.com/latest-news/perry-ai-raises-2-2m-seed-round-led-by-haatch",
            "datePublished": "2026-11-18",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Haatch"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Perry AI raises $2.2m seed led by Haatch to automate legal work for private capital funds",
            "url": "https://www.thecaptable.co.uk/article/perry-ai-raises-2-2m-seed-led-by-haatch-to-automate-legal-work-for-private-capital-funds",
            "datePublished": "2026-11-19T09:27:26+00:00",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "The Cap Table"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Perry AI raises $2.2 million in seed funding to expand AI-powered legal platform",
            "url": "https://www.barandbench.com/law-firms/dealstreet/perry-ai-raises-22-million-in-seed-funding-to-expand-ai-powered-legal-platform",
            "datePublished": "2026-11-24T10:10:00Z",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "Bar & Bench"
            }
          },
          {
            "@type": "PodcastEpisode",
            "name": "The Legal AI Platform Every Venture Fund Has Been Waiting For - Vaneesa Agrawal, Perry AI",
            "url": "https://podcasts.apple.com/gb/podcast/the-legal-ai-platform-every-venture-fund-has-been/id1892251878?i=1000797036938",
            "datePublished": "2026-10-19",
            "inLanguage": "en",
            "partOfSeries": {
              "@type": "PodcastSeries",
              "name": "The Future Series"
            }
          },
          {
            "@type": "CreativeWork",
            "name": "Bae HQ 100: Female Founders Watchlist 2026: Vaneesa Agrawal",
            "url": "https://www.thebaehq.com/watchlist/card/4f005339-6d2e-48bb-b62f-1541a32f0398",
            "datePublished": "2026-11-16",
            "publisher": {
              "@type": "Organization",
              "name": "Bae HQ"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "In A Fireside Chat With Vaneesa Agrawal, Founder, Thinking Legal",
            "url": "https://www.bwlegalworld.com/article/in-a-fireside-chat-with-vaneesa-agrawal-founder-thinking-legal-427462",
            "datePublished": "2022-05-03",
            "inLanguage": "en",
            "publisher": {
              "@type": "Organization",
              "name": "BW Legal World"
            }
          }
        ]
      }
    ]
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
