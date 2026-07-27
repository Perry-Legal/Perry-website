export type CareerRole = {
  slug: string;
  title: string;
  location: string;
  type: string;
  compensation: string;
  summary: string;
  applyEmail: string;
  applySubject: string;
  about: string[];
  theRole: string[];
  whatYoullDo: string[];
  whoYouAre: string[];
  niceToHave: string[];
  whyThisRole: string[];
  applySteps: string[];
};

export const careerRoles: CareerRole[] = [
  {
    slug: "legal-engineer",
    title: "Legal Engineer",
    location: "London (Full time)",
    type: "Full-time",
    compensation: "Competitive, benchmarked to experience, plus equity",
    summary:
      "Own the legal ground truth behind Perry — build Q&A eval sets, rubrics, and extraction standards across fund formation and transactions.",
    applyEmail: "info@useperry.com",
    applySubject: "Legal Engineer",
    about: [
      "Perry (www.useperry.com) is building agentic legal infrastructure for private capital funds — VC, PE, and credit. We automate the legal and operational work that sits underneath fund formation, LPAs, side letters, and diligence: the high-volume, high-stakes document work that fund lawyers and GPs do today by hand. We're a founder team of practising fund lawyers and engineers, backed and closing a seed round, with paying customers and live trial accounts among funds and their GCs.",
    ],
    theRole: [
      "The product is only as good as the legal ground truth behind it. This role owns that ground truth. You'll be the practitioner whose judgment defines what \"correct\" means for Perry — across both of our core use cases, fund formation and transactions — and who builds the datasets, rubrics, and evaluation sets that tell us whether the product is actually right.",
      "Concretely, you'll build the product Q&A ground truth: the questions a fund lawyer or GC would ask Perry, the answers Perry should give, and the standard we score its outputs against. You'll turn real fund and deal documents into structured extraction logic and prompt design, then pressure-test the model against your own analysis and drive the error rate down.",
      "This is a hands-on legal role, not an engineering role — but you'll work shoulder-to-shoulder with product and engineering, and your work is the yardstick everything else is measured by. You don't need to write code. What you do need is a practitioner's eye for the pattern, the edge case, and the rule underneath a messy document, and to be obsessive about getting it right.",
    ],
    whatYoullDo: [
      "Own the ground truth. Create, review, and validate gold-standard answer sets and annotations across fund formation and transactions — LPAs, side letters, MFN elections, subscription documents, PPMs, management/advisory agreements, and deal documents.",
      "Build the product Q&A eval sets. Define the questions users will ask Perry, the correct answers, and the sources they should come from, so we can measure accuracy and catch regressions.",
      "Set the standard. Build and maintain rubrics and annotation guidelines so \"correct\" is applied consistently; adjudicate edge cases and document the reasoning.",
      "Pressure-test the model. Run Perry's outputs against your own analysis, find where it's wrong, and feed structured errors back to the team before customers see them.",
      "Translate law into schema. Turn fund and deal documents into extraction schemas, review logic, and prompt design the product runs on, working directly with product and engineering.",
      "Develop jurisdiction-specific standards (e.g. BVCA/UK, NVCA/US, ILPA conventions) and flag where market practice diverges.",
    ],
    whoYouAre: [
      "A qualified lawyer with meaningful private capital experience — ideally fund formation, LPA/side letter work, or transactions/fund-side diligence, at a recognised firm or in-house at a GP. 2–3+ years is the floor; we're flexible for the right person.",
      "Precise to a fault, and consistent: you can articulate why a clause means what it means and apply the same standard twice. In this domain a wrong answer is a real problem, and you treat it that way.",
      "Comfortable moving between messy real-world drafting and clean, rules-based taxonomy.",
      "A clear written reasoner — you can document a call so someone else can follow it.",
      "Genuinely interested in AI and in how legal work can be systematised, not just automated around the edges.",
      "Happy in an early-stage environment where the process doesn't exist yet and you build it.",
      "Do not need sponsorship to work in the UK.",
    ],
    niceToHave: [
      "Cross-jurisdictional exposure (UK, US, Lux, Cayman fund structures).",
      "Experience with MFN elections and side-letter operationalisation at scale.",
      "Prior work with legal tech, document automation, structured data, annotation/review workflows, or LLM tools.",
      "In-house experience at a fund or fund administrator.",
    ],
    whyThisRole: [
      "Legal Engineer isn't a title that exists at most firms. You'll be one of the first people whose job is to encode fund and deal expertise into software — and the person whose standard decides when the product is good enough to put in front of a fund. If you're a private capital lawyer who's tired of doing the same work by hand and wants to build the thing that replaces it, and get obsessive about getting it right, this is that role.",
    ],
    applySteps: [
      "Email info@useperry.com",
      'Use "Legal Engineer" in the subject line',
      "Include a note on what draws you to the role",
      "Include your CV",
    ],
  },
];
export function getCareerRole(slug: string): CareerRole | undefined {
  return careerRoles.find((role) => role.slug === slug);
}
