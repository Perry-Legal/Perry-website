import { platformIntelligenceProductImages } from "@/lib/platform-intelligence-product-images";

export type FundPageChapter = {
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

export type FundPageContent = {
  eyebrow: string;
  headline: string;
  description: string;
  heroImageSrc: string;
  heroImageAlt: string;
  kpisTitle: string;
  kpis: string[];
  chapters: FundPageChapter[];
  cta: {
    title: string;
    description: string;
    imageSrc: string;
  };
};

export const fundPage: FundPageContent = {
  eyebrow: "Perry for Funds",
  headline: "The Legal OS for private capital",
  description:
    "The AI operating layer for legal work across the fund lifecycle — formation, deal execution, and portfolio governance, in one platform built for the fund and everyone around it.",
  heroImageSrc: "/images/solutions/cards/in-house-lawyer.jpg",
  heroImageAlt: "In-house legal work across the fund",
  kpisTitle: "Value across the fund lifecycle",
  kpis: [
    "Reduce time to find an investor term by 70%",
    "Cut legal question response time by 65%",
    "Reduce time to surface fund restrictions by 90%",
    "100% of obligations visible in one operating view",
  ],
  chapters: [
    {
      slug: "in-house",
      eyebrow: "In-house legal",
      label: "Make consistent legal decisions with the full fund record",
      description:
        "Use prior negotiations, fund terms, and transaction history when reviewing new work. Perry keeps documents, entities, obligations, and decisions connected so the team is not starting from a blank page on every matter.",
      imageSrc: platformIntelligenceProductImages.formation.negotiationReview,
      itemGroups: [
        {
          label: "How in-house teams use Perry",
          items: [
            "Review side letters and fund documents",
            "Run MFN processes",
            "Review and negotiate transaction documents",
            "Check investments against fund restrictions",
            "Manage ongoing obligations",
            "Answer internal legal questions",
            "Coordinate external counsel",
            "Prepare for exit",
          ],
        },
      ],
      outcome:
        "One connected view of the fund — instead of reconstructing context for every review.",
    },
    {
      slug: "ecosystem",
      eyebrow: "Fund ecosystem",
      label: "A clearer way to work with LPs, portfolio companies and counsel",
      description:
        "Respond to investor actions, collect portfolio records, and run reviews with external counsel through one controlled workspace. Requests stay linked to the document, entity, and decision that created them.",
      imageSrc: platformIntelligenceProductImages.management.teamCollaboration,
      itemGroups: [
        {
          label: "LPs",
          items: [
            "Subscription and onboarding",
            "Side-letter review and MFN elections",
            "Consent requests and investor communications",
          ],
        },
        {
          label: "Portfolio companies",
          items: [
            "Upload corporate records",
            "Complete consent requests",
            "Manage board and shareholder actions",
            "Prepare documents for financing or exit",
          ],
        },
      ],
      outcome:
        "Fewer email chains, fewer repeated uploads, and a complete record of who did what.",
    },
    {
      slug: "formation",
      eyebrow: "Fund formation",
      label: "Turn fund documents into a structured operating record",
      description:
        "Review side letters, consolidate investor terms, manage MFN elections, and convert fund documents into ongoing obligations. Perry preserves every negotiation position and investor-specific commitment for the life of the fund.",
      imageSrc: platformIntelligenceProductImages.formation.termConsolidation,
      itemsLabel: "In formation",
      items: [
        "Compare proposed terms against the LPA and prior side letters",
        "Group similar terms and highlight differences across investors",
        "Run the full MFN process in one workspace",
        "Turn LPAs and side letters into owned, dated tasks",
      ],
      outcome:
        "Replace fragmented side-letter summaries with one connected view across the fund.",
    },
    {
      slug: "deployment",
      eyebrow: "Capital deployment",
      label: "Review, negotiate and execute with the full fund context",
      description:
        "Perry connects diligence, document review, negotiation, and post-closing obligations in one legal workspace. Every deal benefits from the fund documents, prior decisions, and transaction history already held in the platform.",
      imageSrc: platformIntelligenceProductImages.deployment.transactionWorkflow,
      itemsLabel: "On every transaction",
      items: [
        "Compare terms against prior deals and accepted positions",
        "Turn diligence materials into findings and follow-up",
        "Surface fund restrictions before they become a problem",
        "Convert closing terms into long-term covenants and rights",
      ],
      outcome: "Maintain consistency without treating every deal as entirely new.",
    },
    {
      slug: "management",
      eyebrow: "Fund & portfolio management",
      label: "Turn legal history into continuous oversight",
      description:
        "Perry brings together obligations, transaction rights, legal decisions, and portfolio information in one operating view. Internal teams can ask questions across the fund record and get answers grounded in the source material.",
      imageSrc: platformIntelligenceProductImages.management.legalQAndA,
      itemGroups: [
        {
          label: "Operating view",
          items: [
            "Recurring and one-off obligations with owners and deadlines",
            "Transaction rights, consents, and governance by company",
            "Upcoming legal deadlines and open review issues",
          ],
        },
        {
          label: "Grounded answers",
          items: [
            "Does this transaction require LPAC consent?",
            "Which investors have this reporting right?",
            "Has the fund previously accepted this provision?",
          ],
        },
      ],
      outcome:
        "Scale access to legal knowledge while keeping the legal team in control.",
    },
  ],
  cta: {
    title: "Run your fund’s legal work from one connected platform.",
    description:
      "Book a demo to see how Perry helps in-house teams unify fund formation, deal execution, and portfolio governance.",
    imageSrc: "/images/cta/jaanus-jagomagi-unsplash.jpg",
  },
};
