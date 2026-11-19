export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  path: string;
  /** Short label for navigation. */
  navLabel: string;
  question: string;
  /** Direct answer shown under the question and used as the meta description. */
  answer: string;
  explainer: string;
  points: readonly string[];
  productHref: string;
  productLabel: string;
  /** Product page that should link to this guide. */
  productSlug: string;
  faqs: readonly GuideFaq[];
};

const fundFormationHref = "/product/fund-formation";
const fundFormationLabel = "See side letter and MFN management";

export const guides: readonly Guide[] = [
  {
    path: "/ai-for-fund-formation",
    navLabel: "AI for fund formation",
    question: "What is AI for fund formation?",
    answer:
      "AI for fund formation is software that helps a fund's legal team work through formation documents using that fund's own terms. It reviews proposed side letters against the LPA and earlier investor commitments, groups similar terms, and turns provisions that need action into work the team can track. Perry does this for private capital funds, from formation through the life of the fund.",
    explainer:
      "Perry reviews each proposed side letter against the LPA, existing investor terms and the fund's historical negotiation positions. It consolidates negotiated provisions into one record, supports the MFN process, and turns notice, approval and reporting duties into tasks the team can assign and follow.",
    points: [
      "Compare a proposed term with the LPA and with side letters already agreed.",
      "Group similar terms, show differences, and keep each provision linked to the investor and the source document.",
      "Record MFN options, elections and the obligations that follow.",
    ],
    productHref: fundFormationHref,
    productLabel: fundFormationLabel,
    productSlug: "fund-formation",
    faqs: [
      {
        question: "Which documents does this cover?",
        answer:
          "Side letters, LPAs and the investor terms negotiated from them. Each provision stays linked to the relevant investor and source document.",
      },
      {
        question: "Does it replace the legal team?",
        answer:
          "No. It helps the team see whether a provision is standard, operationally burdensome or inconsistent with existing commitments, and it keeps comments and decisions for later negotiations.",
      },
      {
        question: "How is this different from a general summary of a document?",
        answer:
          "The review uses the fund's own documents and prior negotiation positions, so a later document can be checked against commitments the fund has already made.",
      },
      {
        question: "Who works from the record?",
        answer:
          "Legal, investor relations and fund operations can work from the same terms. External counsel can be given the provisions, issues and actions relevant to their role, while legal keeps the central record.",
      },
    ],
  },
  {
    path: "/lpa-review-software",
    navLabel: "LPA review software",
    question: "What should LPA review software do?",
    answer:
      "LPA review software should read a limited partnership agreement together with the side letters and earlier positions around it. It should show whether a proposed term fits the LPA, flag provisions that create notice, consent or reporting duties, and keep each finding tied to the clause it came from. Perry does that review in fund formation, then carries the obligations into the fund's ongoing work.",
    explainer:
      "When a side letter is proposed, Perry compares it with the LPA and with the fund's historical negotiation positions. The team can see whether a provision is standard, operationally burdensome or inconsistent with existing commitments, and the comments and decisions stay available for the next negotiation.",
    points: [
      "Compare proposed terms against the LPA.",
      "Suggest negotiation positions from the fund's own history.",
      "Turn provisions that need notice, approval, reporting or monitoring into tasks that can be assigned and tracked.",
    ],
    productHref: fundFormationHref,
    productLabel: fundFormationLabel,
    productSlug: "fund-formation",
    faqs: [
      {
        question: "What should a review show?",
        answer:
          "Whether a proposed side letter term is consistent with the LPA and with commitments already made, and which provisions need follow-up.",
      },
      {
        question: "Can the team keep its own positions?",
        answer:
          "Yes. Perry suggests negotiation positions based on the fund's history and preserves comments and decisions.",
      },
      {
        question: "What happens after the LPA is agreed?",
        answer:
          "Provisions that require action become tasks that can be assigned, scheduled and tracked, without losing the underlying legal context.",
      },
      {
        question: "Can external counsel use the same record?",
        answer:
          "Selected provisions, review issues and actions can be shared with external counsel. Legal retains control of the central record.",
      },
    ],
  },
  {
    path: "/side-letter-management",
    navLabel: "Side letters and MFN",
    question: "How do you manage side letters and MFN elections?",
    answer:
      "Keep every negotiated side letter term in one record, linked to the investor and the document it came from. For an MFN election, identify which terms may be available to each LP, review those provisions, share the options and record what was selected. Perry runs that process in one workspace and updates the obligations that follow from the election.",
    explainer:
      "Perry replaces separate side letter summaries with one connected view of the fund. Similar terms are grouped, differences are highlighted, and the MFN workflow stays beside the term record.",
    points: [
      "Hold a consolidated term library, including investor-specific rights, exceptions and non-standard terms.",
      "Run one MFN workflow: identify eligible terms, review availability, prepare options, share them with the LP, record the election and update obligations.",
      "Keep a clear record of what was offered, selected and applied.",
    ],
    productHref: fundFormationHref,
    productLabel: fundFormationLabel,
    productSlug: "fund-formation",
    faqs: [
      {
        question: "Why keep side letters in one record?",
        answer:
          "A term agreed for one investor can affect what the fund offers later. One record makes similar terms, differences and exceptions visible.",
      },
      {
        question: "What should an MFN workflow record?",
        answer:
          "Which terms were eligible, what was offered to the LP, what they selected, and what was applied.",
      },
      {
        question: "How are investor-specific rights kept?",
        answer:
          "Each provision stays linked to the relevant investor and source document, including exceptions and non-standard terms.",
      },
      {
        question: "What happens after the election?",
        answer:
          "The election updates the fund's obligations, including reporting, notices, consents and investor-specific restrictions.",
      },
    ],
  },
];

export function getGuide(path: string): Guide {
  const guide = guides.find((item) => item.path === path);
  if (!guide) {
    throw new Error(`Missing guide: ${path}`);
  }
  return guide;
}

export function guidesForProduct(slug: string) {
  return guides.filter((guide) => guide.productSlug === slug);
}
