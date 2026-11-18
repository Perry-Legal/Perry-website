export type PressArticle = {
  outlet: string;
  headline: string;
  href: string;
  dateLabel: string;
  dateTime: string;
};

export type PressSocialPost = {
  author: string;
  handle: string;
  href: string;
  summary: string;
  dateLabel: string;
  dateTime: string;
};

export type PressCoverageGroup = {
  id: string;
  title: string;
  articles?: readonly PressArticle[];
  posts?: readonly PressSocialPost[];
};

export type PressCoverageSection = {
  id: string;
  title: string;
  articles?: readonly PressArticle[];
  groups?: readonly PressCoverageGroup[];
};

const seedRoundDate = {
  dateLabel: "18 November 2026",
  dateTime: "2026-11-18",
} as const;

export const pressCoverage: readonly PressCoverageSection[] = [
  {
    id: "news",
    title: "News",
    articles: [
      {
        outlet: "Tech.eu",
        headline: "Perry AI secures $2.2M to automate legal work across private capital",
        href: "https://tech.eu/2026/11/18/perry-ai-secures-22m-to-automate-legal-work-across-private-capital/",
        ...seedRoundDate,
      },
      {
        outlet: "Tech Funding News",
        headline:
          "London's Perry AI raises $2.2M from Haatch and Antler to automate legal work for private capital",
        href: "https://techfundingnews.com/londons-perry-ai-raises-2-2m-from-haatch-and-antler-to-automate-legal-work-for-private-capital/",
        ...seedRoundDate,
      },
      {
        outlet: "Dealroom News",
        headline: "Perry AI raises $2.2M seed to give private capital a legal memory",
        href: "https://dealroom.co/news/173754-perry-ai-raises-2-2m-seed-to-give-private-capital-a-legal-memory/",
        ...seedRoundDate,
      },
      {
        outlet: "Non-Billable",
        headline: "Former City lawyer raises $2.2m for AI startup to speed up private capital deals",
        href: "https://www.nonbillable.co.uk/news/former-city-lawyer-raises-perry-ai-startup",
        ...seedRoundDate,
      },
      {
        outlet: "EU-Startups",
        headline:
          "London's Perry AI raises €2 million to bring AI-powered legal intelligence to private capital funds",
        href: "https://www.eu-startups.com/2026/11/londons-perry-ai-raises-e2-million-to-bring-ai-powered-legal-intelligence-to-private-capital-funds/",
        ...seedRoundDate,
      },
      {
        outlet: "StartupRise",
        headline: "London-Based Perry AI Raises €2Mn Seed Funding Led by Haatch",
        href: "https://startuprise.co.uk/perry-ai-raises-e2mn/",
        ...seedRoundDate,
      },
      {
        outlet: "The SaaS News",
        headline: "Perry AI Raises $2.2M Seed",
        href: "https://www.thesaasnews.com/news/perry-ai-raises-2-2m-seed/",
        ...seedRoundDate,
      },
      {
        outlet: "Today's Startup News",
        headline:
          "London's Perry AI Raises $2.2M Seed Led by Haatch to Give Private Capital Funds a Living Legal Memory",
        href: "https://www.todaysstartupnews.com/funding/perry-ai-raises-2-2m-seed-haatch-antler-legal-operating-system-private-capital",
        ...seedRoundDate,
      },
      {
        outlet: "FinSMEs",
        headline: "Perry AI Raises $2.2M in Seed Funding",
        href: "https://www.finsmes.com/2026/11/perry-ai-raises-2-2m-in-seed-funding.html",
        ...seedRoundDate,
      },
      {
        outlet: "Startup.eu",
        headline:
          "London-based Perry AI raises $2.2M seed round to automate legal work for private capital",
        href: "https://www.startup.eu/investments/perry-ai-2-2-m-seed-11-2026",
        ...seedRoundDate,
      },
      {
        outlet: "LexCircuit",
        headline:
          "Perry AI raises $2.2 million seed round for legal platform aimed at private capital funds",
        href: "https://lexcircuit.com/story/perry-ai-raises-2-2m-seed-legal-platform-private-capital-funds-2026-11/",
        ...seedRoundDate,
      },
      {
        outlet: "DropsTab News",
        headline:
          "A Perry AI, de Londres, arrecada US$ 2,2 milhões da Haatch e da Antler para automatizar trabalhos jurídicos voltados ao capital privado",
        href: "https://news.dropstab.com/pt/aggregator/eojibi8j-london-s-perry-ai-raises-usd2-2m-from-haatch-and-antler-to-automate-legal-work-for-private-capital",
        ...seedRoundDate,
      },
      {
        outlet: "CuriousCats",
        headline:
          "Perry AI raises $2.2M from Haatch and Antler to automate legal work for private capital; platform cuts deal signing times from 84 to 13 days",
        href: "https://curiouscats.ai/breaking-news/perry-ai-raises-22m-from-haatch-and-antler-to-automate-legal-work-for",
        ...seedRoundDate,
      },
      {
        outlet: "Midu",
        headline: "Perry AI raises $2.2M seed led by Haatch for legal automation",
        href: "https://midu.si/story/f673d1b4-e0bc-4d1c-a5dc-794c531d8a24",
        ...seedRoundDate,
      },
    ],
  },
  {
    id: "investor",
    title: "Investor",
    articles: [
      {
        outlet: "Haatch",
        headline: "Perry AI raises $2.2M seed round, led by Haatch",
        href: "https://haatch.com/latest-news/perry-ai-raises-2-2m-seed-round-led-by-haatch",
        ...seedRoundDate,
      },
    ],
  },
  {
    id: "social",
    title: "Social",
    groups: [
      {
        id: "linkedin",
        title: "LinkedIn",
        articles: [
          {
            outlet: "Perry",
            headline:
              "Today is a big day for Perry AI. We're thrilled to announce Perry's oversubscribed $2.2m seed round",
            href: "https://www.linkedin.com/posts/useperry_today-is-a-big-day-for-perry-ai-were-thrilled-activity-7528760612911222786-ro39",
            ...seedRoundDate,
          },
        ],
      },
      {
        id: "x",
        title: "X",
        posts: [
          {
            author: "EU-Startups",
            handle: "@EU_Startups",
            href: "https://x.com/EU_Startups/status/2122946543288479761",
            summary: "Perry AI has raised €2 million in a seed funding round",
            ...seedRoundDate,
          },
          {
            author: "EU Startups News",
            handle: "@EUStartupsNews",
            href: "https://x.com/EUStartupsNews/status/2122952451452260637",
            summary: "London-based Perry AI closed a €2 million seed round led by Haatch",
            ...seedRoundDate,
          },
          {
            author: "INTJ投资笔记",
            handle: "@INTJYAN",
            href: "https://x.com/INTJYAN/status/2122968600671625639",
            summary: "Chinese summary of the oversubscribed $2.2 million seed round",
            ...seedRoundDate,
          },
          {
            author: "BobSonOfBob",
            handle: "@technewslondon",
            href: "https://x.com/technewslondon/status/2122971304307347505",
            summary: "84 days down to 13: London's Perry AI raised $2.2M seed from Haatch and Antler",
            ...seedRoundDate,
          },
          {
            author: "Tech Funding News",
            handle: "@TFNBreakingNews",
            href: "https://x.com/TFNBreakingNews/status/2122972447154799041",
            summary: "Perry AI has raised $2.2 million in an oversubscribed seed round",
            ...seedRoundDate,
          },
          {
            author: "Andy Wood",
            handle: "@andyhq",
            href: "https://x.com/andyhq/status/2122986609310044662",
            summary: "London startup Perry AI has raised $2.2M from Haatch and Antler",
            ...seedRoundDate,
          },
          {
            author: "The SaaS News",
            handle: "@TheSaaSNews",
            href: "https://x.com/TheSaaSNews/status/2122996317911998968",
            summary: "Perry AI Raises $2.2M Seed",
            ...seedRoundDate,
          },
          {
            author: "Today's Startup News",
            handle: "@todaystartupnws",
            href: "https://x.com/todaystartupnws/status/2122998113740939467",
            summary: "London legaltech Perry AI raises a $2.2M seed round led by Haatch",
            ...seedRoundDate,
          },
          {
            author: "audium capital partners",
            handle: "@audiumcp",
            href: "https://x.com/audiumcp/status/2123016605420474561",
            summary: "Perry AI Raises $2.2M in Seed Funding",
            ...seedRoundDate,
          },
          {
            author: "Club del Emprendimiento",
            handle: "@Emprende_Club",
            href: "https://x.com/Emprende_Club/status/2123033332078538937",
            summary: "Spanish summary of the $2.2 million seed round led by Haatch",
            ...seedRoundDate,
          },
        ],
      },
    ],
  },
];
