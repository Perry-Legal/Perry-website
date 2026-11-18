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
  {
    outlet: "Law.com Legaltech News",
    headline: "Investment Fund Management Startup Perry AI Announces $2.2M Seed Round",
    href: "https://www.law.com/legaltechnews/2026/11/18/-investment-fund-management-startup-perry-ai-announces-22m-seed-round/",
    date: seedRoundDate,
    image: "/press/law-com.webp",
  },
  {
    outlet: "The Global Legal Post",
    headline: "UK AI-powered legal software start-up Perry AI raises $2.2m in seed funding round",
    href: "https://www.globallegalpost.com/news/uk-ai-powered-legal-software-start-up-perry-ai-raises-22m-in-seed-funding-round-56788550",
    date: seedRoundDate,
    image: "/press/global-legal-post.webp",
  },
  {
    outlet: "Bae HQ News",
    headline: "Perry AI raises $2.2M seed to build a legal memory for private capital funds",
    href: "https://www.thebaehq.com/news/perry-ai-raises-2-2m-seed",
    date: seedRoundDate,
    image: "/press/bae-hq-news.webp",
  },
  {
    outlet: "UK Tech Investment News",
    headline:
      "Photosynth AI (t/a Perry AI) secures £1.67 million Seed funding led by Haatch alongside Antler, Araya Ventures and Syncorp Ventures",
    href: "https://www.uktechnews.info/2026/11/18/photosynth-ai-t-a-perry-ai-secures-1-67-million-seed-funding-led-by-haatch-alongside-antler-araya-ventures-and-syncorp-ventures/",
    date: seedRoundDate,
    image: "/press/uk-tech-investment-news.webp",
  },
  {
    outlet: "Startupmag",
    headline: "Perry AI closes £1.7m seed led by Haatch and Antler",
    href: "https://www.startupmag.co.uk/funding/perry-ai-2026-seed-funding/",
    date: seedRoundDate,
  },
  {
    outlet: "The AI Landscape",
    headline: "Perry AI Raises $2.2M Seed to Build Legal OS for Private Capital",
    href: "https://theailandscape.com/news/perry-ai-raises-2-2m-seed-legal-os-private-capital/",
    date: seedRoundDate,
    image: "/press/the-ai-landscape.webp",
  },
  {
    outlet: "Morning Tick",
    headline: "Perry AI Lands $2.2M To Automate Private Funds' Legal Work",
    href: "https://morningtick.com/post/perry-ai-lands-2-2m-automate-private-funds-legal-work/",
    date: seedRoundDate,
    image: "/press/morning-tick.webp",
  },
  {
    outlet: "Startbase",
    headline: "Perry AI erhält 2,2 Millionen Dollar für KI-gestützte Rechtsprozesse bei Investoren",
    href: "https://www.startbase.de/news/perry-ai-erhaelt-22-millionen-dollar-fuer-ki-gestuetzte-rechtsprozesse-bei-investoren/",
    date: seedRoundDate,
    image: "/press/startbase.webp",
  },
  {
    outlet: "TeknoInfo",
    headline:
      "Perry AI raccoglie 2,2 milioni di dollari per automatizzare il lavoro legale nel private capital",
    href: "https://teknoinfo.it/perry-ai-raccoglie-22-milioni-di-dollari-per-automatizzare-il-lavoro-legale-nel-private-capital/",
    date: seedRoundDate,
    image: "/press/teknoinfo.webp",
  },
  {
    outlet: "RONDA",
    headline: "Perry AI levanta US$2,2 millones en ronda semilla liderada por Haatch",
    href: "https://rondadeinversion.com/articulos/perry-ai-levanta-us-2-2-millones-en-ronda-semilla-liderada-por-haatch",
    date: seedRoundDate,
    image: "/press/ronda.webp",
  },
  {
    outlet: "Hryvna",
    headline:
      "Лондонський стартап Perry AI отримав $2,2 млн на автоматизацію юридичної роботи для фондів приватного капіталу",
    href: "https://hryvna.com.ua/startapy/londonskyi-startap-perry-ai-otrymav-22-mln-na-avtomatyzatsiiu-iurydychnoi-roboty-dlia-fondiv-pryvatnoho-kapitalu",
    date: seedRoundDate,
    image: "/press/hryvna.webp",
  },
  {
    outlet: "CapStack Media",
    headline: "Perry AI secures $2.2M to automate legal work across private capital",
    href: "https://capstack.media/vc-funding/2026/11/perry-ai-secures-2-2m-to-automate-legal-work-across-private-capital",
    date: seedRoundDate,
  },
  {
    outlet: "FRENCHWEB Tracker",
    headline: "Perry AI : financement annoncé le 18/11/2026",
    href: "https://tracker.frenchweb.fr/operations/perry-ai-2026-11-18-079326",
    date: seedRoundDate,
    image: "/press/frenchweb.webp",
  },
  {
    outlet: "The Future Series podcast",
    headline:
      "The Legal AI Platform Every Venture Fund Has Been Waiting For: Vaneesa Agrawal, Perry AI",
    href: "https://podcasts.apple.com/gb/podcast/the-legal-ai-platform-every-venture-fund-has-been/id1892251878?i=1000797036938",
    date: "2026-10-19",
    image: "/press/future-series.webp",
  },
  {
    outlet: "UKTN",
    headline: "Perry AI founder: Sell before you build",
    href: "https://www.uktech.news/news/founder-interviews/perry-ai-founder-sell-before-you-build-20260508",
    date: "2026-05-08",
    image: "/press/uktn-interview.webp",
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

export const newsroomRecognition: readonly NewsroomArticle[] = [
  {
    outlet: "Bae HQ",
    headline: "Vaneesa Agrawal named to the Bae HQ 100 Female Founders Watchlist",
    href: "https://www.thebaehq.com/watchlist/card/4f005339-6d2e-48bb-b62f-1541a32f0398",
    date: "2026-11-16",
    image: "/press/bae-hq-watchlist.webp",
  },
  {
    outlet: "Crafty Counsel",
    headline:
      "Perry selected for the Next Gen in Legal Tech Spotlight at Legal Tech Buyers' Club: Live",
    href: "https://crafty-counsel.com/events/legal-tech-buyers-club-live/",
    date: "2026-10-29",
    image: "/press/crafty-counsel.webp",
  },
];

/** Shown in this order. Not sorted by date. */
export const newsroomInvestor: readonly NewsroomArticle[] = [
  {
    outlet: "Haatch",
    headline: "Perry AI raises $2.2M seed round, led by Haatch",
    href: "https://haatch.com/latest-news/perry-ai-raises-2-2m-seed-round-led-by-haatch",
    date: seedRoundDate,
    image: "/press/haatch.webp",
  },
  {
    outlet: "Martin Carruthers (Partner, Arāya Ventures)",
    headline: "Arāya Ventures is delighted to back Perry AI in its oversubscribed $2.2M seed round.",
    href: "https://www.linkedin.com/posts/martin-carruthers-0285339_arayaventures-verticalai-legaltech-activity-7528768540242460672-qF9M",
    date: seedRoundDate,
    image: "/press/martin-carruthers.webp",
  },
  {
    outlet: "Kelsey Chase (founder of Aumni)",
    headline: "Kelsey Chase on backing Perry AI's $2.2M seed round",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7528898260736913408/",
    date: seedRoundDate,
    image: "/press/kelsey-chase.webp",
  },
  {
    outlet: "Jed Rose (Antler)",
    headline: "Antler backs 13 new UK startups, Perry among them",
    href: "https://www.linkedin.com/posts/jedrose_we-have-just-backed-13-new-uk-startups-coming-activity-7449783438057889792-Fnvj",
    date: "2026-04-14",
    image: "/press/jed-rose.webp",
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
  {
    author: "UKTN",
    summary: "Perry AI founder: Sell before you build",
    href: "https://www.linkedin.com/posts/tech-city-news_perry-ai-founder-sell-before-you-build-activity-7458455889226891264-R2rv",
    date: "2026-05-08",
  },
  {
    author: "Anthony Dann (The Future Series)",
    summary: "Podcast episode with Vaneesa",
    href: "https://www.linkedin.com/posts/tonydann_thefutureseries-podcast-legaltech-activity-7517857201009508353-e-R5",
    date: "2026-10-19",
  },
  {
    author: "Toby Hornett (Crafty Counsel)",
    summary: "Next Gen in Legal Tech vote",
    href: "https://www.linkedin.com/posts/tobyhornett_help-us-decide-which-early-stage-legal-tech-activity-7518211098131611648-CQgX",
    date: "2026-10-20",
  },
  {
    author: "Amardeep Parmar (Bae HQ)",
    summary: "Introducing the Bae HQ 100",
    href: "https://www.linkedin.com/posts/amardeepsparmar_introducing-the-bae-hq-100-female-founder-activity-7528027748657954816-mog5",
    date: "2026-11-16",
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
    author: "Tech.eu",
    handle: "@tech_eu",
    summary: "Perry AI secures $2.2M to automate legal work across private capital",
    href: "https://x.com/tech_eu/status/2122956596850360386",
    date: seedRoundDate,
  },
  {
    author: "Legaltech News",
    handle: "@Legaltech_news",
    summary:
      "Co-founded by a Debevoise & Plimpton senior associate and a Thinking Legal partner, Perry AI plans to use the funding to hire talent in the U.S. as well as India",
    href: "https://x.com/Legaltech_news/status/2123125430932881870",
    date: seedRoundDate,
  },
  {
    author: "BobSonOfBob",
    handle: "@technewslondon",
    summary: "84 days down to 13: London's Perry AI raised $2.2M Seed from Haatch & Antler",
    href: "https://x.com/technewslondon/status/2122971304307347505",
    date: seedRoundDate,
  },
  {
    author: "INTJ投资笔记",
    handle: "@INTJYAN",
    summary: "伦敦Perry AI完成超额认购$220万种子轮，Haatch领投",
    href: "https://x.com/INTJYAN/status/2122968600671625639",
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
    author: "audium capital partners",
    handle: "@audiumcp",
    summary: "London's Perry AI raises €2 million to bring AI-powered legal intelligence to private capital funds",
    href: "https://x.com/audiumcp/status/2122996783383269752",
    date: seedRoundDate,
  },
  {
    author: "Club del Emprendimiento",
    handle: "@Emprende_Club",
    summary:
      "Perry AI capta 2,2 M$ en una ronda semilla liderada por Haatch. La startup desarrolla herramientas de IA para automatizar trabajo jurídico de fondos de capital privado.",
    href: "https://x.com/Emprende_Club/status/2123033332078538937",
    date: seedRoundDate,
  },
  {
    author: "Morning Tick",
    handle: "@morningtick",
    summary: "Perry AI Lands $2.2M To Automate Private Funds' Legal Work",
    href: "https://x.com/morningtick/status/2123064797176754444",
    date: seedRoundDate,
  },
  {
    author: "Legal Tech StartUp Focus",
    handle: "@LegalTechStrtUp",
    summary: "London-based legaltech startup Perry AI has raised $2.2 million",
    href: "https://x.com/LegalTechStrtUp/status/2123149052883976361",
    date: seedRoundDate,
  },
  {
    author: "Nedeluxe",
    handle: "@Nedeluxenl",
    summary: "Londens Perry AI haalt 2 miljoen euro op voor AI die juridisch werk bij investeringsfondsen overneemt",
    href: "https://x.com/Nedeluxenl/status/2123100312693014787",
    date: seedRoundDate,
  },
  {
    author: "Kamal Gujrathi",
    handle: "@kamcryp",
    summary: "London's Perry AI raises €2 million to bring AI-powered legal intelligence to private capital funds.",
    href: "https://x.com/kamcryp/status/2123094892654297190",
    date: seedRoundDate,
  },
  {
    author: "Andy Wood",
    handle: "@andyhq",
    summary:
      "London startup Perry AI has raised $2.2M from Haatch and Antler to automate legal work for private equity and venture capital funds.",
    href: "https://x.com/andyhq/status/2122986274248151157",
    date: seedRoundDate,
  },
];

export function byNewest<T extends { date: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
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
