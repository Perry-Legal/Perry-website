import { platformIntelligenceProductImages } from "@/lib/platform-intelligence-product-images";

export type LawPageChapter = {
  slug: string;
  label: string;
  eyebrow?: string;
  description: string;
  items?: string[];
  itemsLabel?: string;
  outcome?: string;
  imageSrc?: string;
};

export type LawPageContent = {
  eyebrow: string;
  headline: string;
  description: string;
  heroImageSrc: string;
  heroImageAlt: string;
  kpisTitle: string;
  kpis: string[];
  chapters: LawPageChapter[];
  cta: {
    title: string;
    description: string;
    imageSrc: string;
  };
};

export const lawPage: LawPageContent = {
  eyebrow: "Perry for Law Firms",
  headline: "Your expertise, delivered as your own platform",
  description:
    "Perry's white-label platform lets your firm give fund clients a branded operating layer for their legal work — collaboration, AI review and drafting, and obligation management, delivered as your product. Deepen client relationships and stay engaged long after the deal closes.",
  heroImageSrc: "/images/chapters/collaboration.jpg",
  heroImageAlt: "Law firm collaboration",
  kpisTitle: "A new engagement model for fund clients",
  kpis: [
    "Cut fund document turnaround for clients by 50%",
    "Reduce time spent on routine client questions by 70%",
    "100% of your negotiated positions captured in a reusable precedent record",
    "Turn one-off transactions into recurring, year-round engagement",
  ],
  chapters: [
    {
      slug: "white-label",
      eyebrow: "White label",
      label: "Your brand on every screen your clients see",
      description:
        "Perry runs under your firm's name, identity and domain. Clients log into your platform, work in your workspace and associate every capability with your firm — the infrastructure stays invisible.",
      imageSrc: platformIntelligenceProductImages.management.portfolioVisibility,
      itemsLabel: "What you control",
      items: [
        "Your firm's branding across the client experience",
        "Client workspaces provisioned and managed by your firm",
        "Your templates, playbooks and precedent built in",
        "Your engagement model and commercial terms",
      ],
      outcome: "Productize your expertise without building software.",
    },
    {
      slug: "collaboration",
      eyebrow: "Collaboration",
      label: "One workspace for your firm and every fund client",
      description:
        "Run reviews, negotiations and approvals with clients in a shared workspace instead of email threads and attachments. Each side sees what is relevant to its role, while your firm keeps control of the record.",
      imageSrc: platformIntelligenceProductImages.management.teamCollaboration,
      itemsLabel: "In the workspace",
      items: [
        "Shared matters with clear ownership and status",
        "Document review and comments in one place",
        "Approvals and sign-offs tracked end to end",
        "Role-based visibility for clients, counsel and operations",
      ],
      outcome:
        "Every matter keeps one connected record — for your team and your client's.",
    },
    {
      slug: "ai",
      eyebrow: "AI",
      label: "AI grounded in your precedent, not the open internet",
      description:
        "Perry's AI reviews, drafts and extracts across fund documents, and answers client questions grounded in the LPA, side letters and your firm's own positions. Every answer links back to the source.",
      imageSrc: platformIntelligenceProductImages.management.legalQAndA,
      itemsLabel: "Capabilities",
      items: [
        "Document review against the LPA and your precedent",
        "First drafts generated from your templates",
        "Term and obligation extraction across the document set",
        "Grounded Q&A with citations to the underlying provision",
      ],
      outcome:
        "Your associates move faster, and your clients get answers backed by your expertise.",
    },
    {
      slug: "obligation-management",
      eyebrow: "Obligation management",
      label: "Stay engaged for the life of the fund, not just the deal",
      description:
        "The documents you negotiate become a live obligation system for your client — notices, consents, reporting deadlines and recurring requirements, each linked to the provision that created it. Your firm stays in the workflow long after closing.",
      imageSrc: platformIntelligenceProductImages.management.ongoingWork,
      itemsLabel: "Tracked for every client",
      items: [
        "Recurring reporting obligations",
        "Notice and consent requirements",
        "Key dates and deadlines",
        "Investor-specific restrictions",
      ],
      outcome: "Recurring engagement built into every fund you help form.",
    },
  ],
  cta: {
    title: "Offer your clients a platform, under your name.",
    description:
      "Book a demo to see how Perry's white-label platform helps your firm productize its expertise and deepen every fund client relationship.",
    imageSrc: "/images/cta/michael-d-beckwith-soN9dynO5fo-unsplash.jpg",
  },
};
