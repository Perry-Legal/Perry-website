import { platformIntelligenceProductImages } from "@/lib/platform-intelligence-product-images";

export type LawPageChapter = {
  slug: string;
  label: string;
  eyebrow?: string;
  description: string;
  items?: string[];
  itemsLabel?: string;
  itemGroups?: { label?: string; items: string[] }[];
  outcome?: string;
  imageSrc?: string;
};

export type LawPageWay = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
};

export type LawPageContent = {
  eyebrow: string;
  headline: string;
  description: string;
  heroImageSrc: string;
  heroImageAlt: string;
  ways: {
    eyebrow: string;
    title: string;
    description: string;
    items: LawPageWay[];
  };
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
  headline: "The Legal OS for your private-capital practice",
  description:
    "Law firms can use Perry directly for their private-capital workflows, or white-label the platform for clients.",
  heroImageSrc: "/images/solutions/cards/private-equity.jpg",
  heroImageAlt: "Private capital legal collaboration",
  ways: {
    eyebrow: "Two complementary ways",
    title: "Direct use and white-label, on the same platform",
    description:
      "Perry is not only a platform firms put in front of clients. It is also the workspace for the firm’s own private-capital work.",
    items: [
      {
        slug: "direct-use",
        eyebrow: "Direct use",
        title: "Your firm’s own private-capital workspace",
        description:
          "Use Perry internally for fund formation, transactions, comments memos, and the day-to-day work of advising GPs and LPs.",
        items: [
          "Comments memos produced from the review, not a blank page",
          "Review and drafting grounded in the firm’s positions",
          "Shared matters for partners, associates, and operations",
          "A searchable record of comments, decisions, and precedent",
        ],
        imageSrc: "/images/law/direct-use.png?v=1",
      },
      {
        slug: "white-label",
        eyebrow: "White-label",
        title: "Your brand on every screen clients see",
        description:
          "Brand Perry as the firm’s own platform. Clients see the firm’s identity, not Perry’s, and work in a client-facing legal operating layer the firm controls.",
        items: [
          "The firm’s branding across the client experience",
          "Client workspaces provisioned and managed by the firm",
          "The firm’s templates, playbooks, and precedent built in",
          "The firm’s engagement model and commercial terms",
        ],
        imageSrc: "/images/law/white-label.png?v=9",
      },
    ],
  },
  kpisTitle: "Value for the firm — internally and with clients",
  kpis: [
    "Cut fund document turnaround by 50%",
    "Reduce time spent on routine questions by 70%",
    "100% of negotiated positions captured in a reusable precedent record",
    "Increase year-round client engagement by 80%",
  ],
  chapters: [
    {
      slug: "direct-use",
      eyebrow: "Direct use",
      label: "Run your private-capital work inside Perry",
      description:
        "Use Perry as the firm’s own workspace — not only as a product you offer clients. Review fund documents, draft from precedent, produce comments memos, and keep every matter on one connected record.",
      imageSrc: platformIntelligenceProductImages.deployment.transactionWorkflow,
      itemGroups: [
        {
          label: "Internal workflows",
          items: [
            "Fund formation and side-letter review",
            "Transaction review, negotiation, and approval",
            "Grounded Q&A across the firm’s document set",
            "A shared record for partners, associates, and operations",
          ],
        },
        {
          label: "Comments memos",
          items: [
            "Turn a mark-up into a comments memo the partner can review",
            "Capture issues, recommended positions, and open points",
            "Link every comment back to the source provision",
            "Reuse the memo as precedent on the next similar document",
          ],
        },
      ],
      outcome:
        "The same platform that can sit in front of clients also supports the work the firm does every day.",
    },
    {
      slug: "white-label",
      eyebrow: "White-label",
      label: "Your brand on every screen your clients see",
      description:
        "Perry runs under your firm’s name, identity, and domain. Clients log into your platform, work in your workspace, and associate every capability with your firm — the infrastructure stays invisible. It sets the firm apart in pitches and lets you compete on service, not just rates.",
      imageSrc: "/images/law/white-label.png?v=9",
      itemsLabel: "What you control",
      items: [
        "Your firm’s branding across the client experience",
        "Client workspaces provisioned and managed by your firm",
        "Your templates, playbooks, and precedent built in",
        "Your engagement model and commercial terms",
      ],
      outcome: "Productize your expertise without building software.",
    },
    {
      slug: "collaboration",
      eyebrow: "Collaboration",
      label: "One workspace for the firm and every fund client",
      description:
        "Run reviews, negotiations, and approvals in a shared workspace instead of email threads and attachments. Each side sees what is relevant to its role, while the firm keeps control of the record — whether the work is internal or client-facing.",
      imageSrc: platformIntelligenceProductImages.management.teamCollaboration,
      itemsLabel: "In the workspace",
      items: [
        "Shared matters with clear ownership and status",
        "Document review and comments in one place",
        "Approvals and sign-offs tracked end to end",
        "Role-based visibility for clients, counsel, and operations",
      ],
      outcome:
        "Every matter keeps one connected record — for your team and your client’s.",
    },
    {
      slug: "ai",
      eyebrow: "AI",
      label: "AI grounded in your precedent, not the open internet",
      description:
        "Perry’s AI reviews, drafts, and extracts across fund documents, and answers questions grounded in the LPA, side letters, and the firm’s own positions. Associates use it on internal matters; clients see it under the firm’s brand. Every answer links back to the source.",
      imageSrc: platformIntelligenceProductImages.management.legalQAndA,
      itemsLabel: "Capabilities",
      items: [
        "Document review against the LPA and your precedent",
        "First drafts generated from your templates",
        "Comments memos built from the review record",
        "Term and obligation extraction across the document set",
        "Grounded Q&A with citations to the underlying provision",
      ],
      outcome:
        "Your associates move faster, your clients get answers backed by your expertise, and the firm out-delivers competitors still working document by document.",
    },
    {
      slug: "obligation-management",
      eyebrow: "Obligation management",
      label: "Stay engaged for the life of the fund, not just the deal",
      description:
        "The documents you negotiate become a live obligation system — notices, consents, reporting deadlines, and recurring requirements, each linked to the provision that created it. Used internally, it keeps the firm’s matters current. White-labelled, it keeps the firm in the client’s workflow long after closing.",
      imageSrc: platformIntelligenceProductImages.management.ongoingWork,
      itemsLabel: "Tracked for every matter",
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
    title: "Use Perry in the firm, or put your name on it.",
    description:
      "Book a demo to see how law firms use Perry directly for private-capital workflows, or white-label the platform for clients.",
    imageSrc: "/images/cta/michael-d-beckwith-soN9dynO5fo-unsplash.jpg",
  },
};
