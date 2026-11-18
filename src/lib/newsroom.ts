/**
 * Newsroom content. Append new items to the relevant list.
 * Each list is shown newest first. Items that share a date keep this order.
 */

export type NewsroomArticle = {
  outlet: string;
  headline: string;
  href: string;
  /** Calendar date, YYYY-MM-DD. */
  date: string;
  /**
   * Optional locally hosted thumbnail, for example `/press/tech-eu.webp`.
   * Cards without one use a brand fallback.
   */
  image?: string;
};

export type NewsroomSocialPost = {
  author: string;
  handle?: string;
  summary: string;
  href: string;
  date: string;
};

export type NewsroomAnnouncement = {
  title: string;
  href: string;
  date: string;
  summary: string;
};

const seedRoundDate = "2026-11-18";

export const newsroomAnnouncements: readonly NewsroomAnnouncement[] = [
  {
    title: "Perry AI raises $2.2M seed funding",
    href: "/news/seed-round",
    date: seedRoundDate,
    summary:
      "Oversubscribed seed round led by Haatch, with Antler, Arāya Ventures, Syncorp Ventures, and other US and international investors.",
  },
];

/** Named outlets. */
export const newsroomNews: readonly NewsroomArticle[] = [
  {
    outlet: "Tech.eu",
    headline: "Perry AI secures $2.2M to automate legal work across private capital",
    href: "https://tech.eu/2026/11/18/perry-ai-secures-22m-to-automate-legal-work-across-private-capital/",
    date: seedRoundDate,
    image: "/press/tech-eu.webp",
  },
  {
    outlet: "Tech Funding News",
    headline:
      "London's Perry AI raises $2.2M from Haatch and Antler to automate legal work for private capital",
    href: "https://techfundingnews.com/londons-perry-ai-raises-2-2m-from-haatch-and-antler-to-automate-legal-work-for-private-capital/",
    date: seedRoundDate,
    image: "/press/tech-funding-news.webp",
  },
  {
    outlet: "Dealroom News",
    headline: "Perry AI raises $2.2M seed to give private capital a legal memory",
    href: "https://dealroom.co/news/173754-perry-ai-raises-2-2m-seed-to-give-private-capital-a-legal-memory/",
    date: seedRoundDate,
    image: "/press/dealroom.webp",
  },
  {
    outlet: "Non-Billable",
    headline: "Former City lawyer raises $2.2m for AI startup to speed up private capital deals",
    href: "https://www.nonbillable.co.uk/news/former-city-lawyer-raises-perry-ai-startup",
    date: seedRoundDate,
    image: "/press/non-billable.webp",
  },
  {
    outlet: "EU-Startups",
    headline:
      "London's Perry AI raises €2 million to bring AI-powered legal intelligence to private capital funds",
    href: "https://www.eu-startups.com/2026/11/londons-perry-ai-raises-e2-million-to-bring-ai-powered-legal-intelligence-to-private-capital-funds/",
    date: seedRoundDate,
  },
  {
    outlet: "StartupRise",
    headline: "London-Based Perry AI Raises €2Mn Seed Funding Led by Haatch",
    href: "https://startuprise.co.uk/perry-ai-raises-e2mn/",
    date: seedRoundDate,
    image: "/press/startuprise.webp",
  },
  {
    outlet: "The SaaS News",
    headline: "Perry AI Raises $2.2M Seed",
    href: "https://www.thesaasnews.com/news/perry-ai-raises-2-2m-seed/",
    date: seedRoundDate,
    image: "/press/the-saas-news.webp",
  },
  {
    outlet: "FinSMEs",
    headline: "Perry AI Raises $2.2M in Seed Funding",
    href: "https://www.finsmes.com/2026/11/perry-ai-raises-2-2m-in-seed-funding.html",
    date: seedRoundDate,
  },
  {
    outlet: "LexCircuit",
    headline:
      "Perry AI raises $2.2 million seed round for legal platform aimed at private capital funds",
    href: "https://lexcircuit.com/story/perry-ai-raises-2-2m-seed-legal-platform-private-capital-funds-2026-11/",
    date: seedRoundDate,
  },
];

/** Aggregators and reprints. Listed after named outlets. */
export const newsroomAggregators: readonly NewsroomArticle[] = [
  {
    outlet: "Today's Startup News",
    headline:
      "London's Perry AI Raises $2.2M Seed Led by Haatch to Give Private Capital Funds a Living Legal Memory",
    href: "https://www.todaysstartupnews.com/funding/perry-ai-raises-2-2m-seed-haatch-antler-legal-operating-system-private-capital",
    date: seedRoundDate,
    image: "/press/todays-startup-news.webp",
  },
  {
    outlet: "Startup.eu",
    headline:
      "London-based Perry AI raises $2.2M seed round to automate legal work for private capital",
    href: "https://www.startup.eu/investments/perry-ai-2-2-m-seed-11-2026",
    date: seedRoundDate,
    image: "/press/startup-eu.webp",
  },
  {
    outlet: "DropsTab News",
    headline:
      "A Perry AI, de Londres, arrecada US$ 2,2 milhões da Haatch e da Antler para automatizar trabalhos jurídicos voltados ao capital privado",
    href: "https://news.dropstab.com/pt/aggregator/eojibi8j-london-s-perry-ai-raises-usd2-2m-from-haatch-and-antler-to-automate-legal-work-for-private-capital",
    date: seedRoundDate,
  },
  {
    outlet: "CuriousCats",
    headline:
      "Perry AI raises $2.2M from Haatch and Antler to automate legal work for private capital; platform cuts deal signing times from 84 to 13 days",
    href: "https://curiouscats.ai/breaking-news/perry-ai-raises-22m-from-haatch-and-antler-to-automate-legal-work-for",
    date: seedRoundDate,
    image: "/press/curiouscats.webp",
  },
  {
    outlet: "Midu",
    headline: "Perry AI raises $2.2M seed led by Haatch for legal automation",
    href: "https://midu.si/story/f673d1b4-e0bc-4d1c-a5dc-794c531d8a24",
    date: seedRoundDate,
    image: "/press/midu.webp",
  },
];

export const newsroomInvestor: readonly NewsroomArticle[] = [
  {
    outlet: "Haatch",
    headline: "Perry AI raises $2.2M seed round, led by Haatch",
    href: "https://haatch.com/latest-news/perry-ai-raises-2-2m-seed-round-led-by-haatch",
    date: seedRoundDate,
    image: "/press/haatch.webp",
  },
];

export const newsroomLinkedIn: readonly NewsroomSocialPost[] = [
  {
    author: "Perry",
    summary:
      "Today is a big day for Perry AI. We're thrilled to announce Perry's oversubscribed $2.2m seed round",
    href: "https://www.linkedin.com/posts/useperry_today-is-a-big-day-for-perry-ai-were-thrilled-activity-7528760612911222786-ro39",
    date: seedRoundDate,
  },
];

export const newsroomX: readonly NewsroomSocialPost[] = [
  {
    author: "EU-Startups",
    handle: "@EU_Startups",
    summary: "Perry AI has raised €2 million in a seed funding round",
    href: "https://x.com/EU_Startups/status/2122946543288479761",
    date: seedRoundDate,
  },
  {
    author: "EU Startups News",
    handle: "@EUStartupsNews",
    summary: "London-based Perry AI closed a €2 million seed round led by Haatch",
    href: "https://x.com/EUStartupsNews/status/2122952451452260637",
    date: seedRoundDate,
  },
  {
    author: "INTJ投资笔记",
    handle: "@INTJYAN",
    summary: "Chinese summary of the oversubscribed $2.2 million seed round",
    href: "https://x.com/INTJYAN/status/2122968600671625639",
    date: seedRoundDate,
  },
  {
    author: "BobSonOfBob",
    handle: "@technewslondon",
    summary: "84 days down to 13: London's Perry AI raised $2.2M seed from Haatch and Antler",
    href: "https://x.com/technewslondon/status/2122971304307347505",
    date: seedRoundDate,
  },
  {
    author: "Tech Funding News",
    handle: "@TFNBreakingNews",
    summary: "Perry AI has raised $2.2 million in an oversubscribed seed round",
    href: "https://x.com/TFNBreakingNews/status/2122972447154799041",
    date: seedRoundDate,
  },
  {
    author: "Andy Wood",
    handle: "@andyhq",
    summary: "London startup Perry AI has raised $2.2M from Haatch and Antler",
    href: "https://x.com/andyhq/status/2122986609310044662",
    date: seedRoundDate,
  },
  {
    author: "The SaaS News",
    handle: "@TheSaaSNews",
    summary: "Perry AI Raises $2.2M Seed",
    href: "https://x.com/TheSaaSNews/status/2122996317911998968",
    date: seedRoundDate,
  },
  {
    author: "Today's Startup News",
    handle: "@todaystartupnws",
    summary: "London legaltech Perry AI raises a $2.2M seed round led by Haatch",
    href: "https://x.com/todaystartupnws/status/2122998113740939467",
    date: seedRoundDate,
  },
  {
    author: "audium capital partners",
    handle: "@audiumcp",
    summary: "Perry AI Raises $2.2M in Seed Funding",
    href: "https://x.com/audiumcp/status/2123016605420474561",
    date: seedRoundDate,
  },
  {
    author: "Club del Emprendimiento",
    handle: "@Emprende_Club",
    summary: "Spanish summary of the $2.2 million seed round led by Haatch",
    href: "https://x.com/Emprende_Club/status/2123033332078538937",
    date: seedRoundDate,
  },
];

export function byNewest<T extends { date: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date) || 0);
}

export function formatNewsroomDate(isoDate: string, style: "short" | "long" = "short"): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: style === "long" ? "long" : "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
