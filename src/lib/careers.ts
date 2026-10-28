export type CareerRole = {
  slug: string;
  title: string;
  location: string;
  type: string;
  reportsTo?: string;
  compensation: string;
  summary: string;
  applyEmail: string;
  applySubject: string;
  about: string[];
  theRole: string[];
  whatYoullDo: string[];
  whoYouAre: string[];
  whoYouAreTitle?: string;
  niceToHave: string[];
  whyThisRole: string[];
  applySteps: string[];
};

const perryAbout = [
  "Perry is the legal OS private capital runs on.",
  "Private capital funds spend millions a year on outside counsel, yet their legal work has no memory. Every deal, side letter and follow-on round is reviewed, rediscovered and tracked from scratch, across inboxes, spreadsheets and law firm invoices.",
  "Perry fixes that. We build AI agents that turn a fund's legal documents into operational intelligence: reviewing term sheets and SPAs against the fund's own playbook, tracking rights and obligations across hundreds of portfolio companies, flagging MFN and regulatory risk before capital is committed, and remembering every position the fund has ever taken. Legal is the wedge. Operations is the platform.",
  "We are buy-side, not sell-side. Harvey and Legora make lawyers more productive inside law firms. Perry works for the funds themselves, the GPs, GCs, deal teams and LPs who pay those firms.",
  "Founded by fund lawyers. Our founders bring 25+ years of private capital legal experience from Debevoise & Plimpton, Simmons & Simmons and Deutsche Bank, advising some of the world's largest asset managers, and qualified in New York, England and India.",
  "Live with real funds. Paying customers and active pilots with VC and PE funds managing $1.5B+ AUM and 1,000+ portfolio companies.",
  "Backed by Antler. Headquartered in London, selling into the UK, Europe and the US.",
  "How we work. We are a small team that ships fast and owns outcomes, not tasks. We care about precision because our customers' decisions carry fiduciary consequences. We are AI-native in how we build and how we operate. If you want to be early at a company defining a new category, this is the moment.",
];

export const careerRoles: CareerRole[] = [
  {
    slug: "founding-commercial-hire",
    title: "Founding Commercial Hire",
    location: "London, in office, with regular travel to Europe and the US",
    type: "Full-time",
    reportsTo: "Founder & CEO",
    compensation: "Competitive salary and commission, plus meaningful equity",
    summary:
      "Be Perry's first dedicated commercial hire — own revenue, close the funds already in our pipeline, and turn a founder-led motion into a repeatable engine.",
    applyEmail: "info@useperry.com",
    applySubject: "Founding Commercial Hire",
    about: perryAbout,
    theRole: [
      "You will be Perry's first dedicated commercial hire, and you will own revenue. Our founders have sold to every one of our customers so far. Your job is to take that founder-led motion, turn it into a repeatable engine, and close the funds already in our pipeline.",
      "This is a builder's role. You will run deals end to end, from first conversation with a fund GC to signed contract and expansion, and you will design the playbook, pricing and process that every future seller at Perry runs on. As we grow, you can build and lead the team.",
    ],
    whatYoullDo: [
      "Close. Own a named pipeline of VC, PE and private credit funds across the UK and Europe. Run discovery, demos, pilots, commercial negotiation and procurement through to signature.",
      "Build pipeline. Outbound to GCs, COOs, heads of legal and investment teams. Work events, LP and GC networks, and law firm channel partners.",
      "Land and expand. Convert pilots into paid contracts, then grow accounts across new use cases, teams and funds. Our best customers start with one workflow and add more.",
      "Sell value, not seats. Price against the fund's legal spend, not a software budget. Build ROI cases a GC can take to their managing partners.",
      "Build the machine. Set up our CRM, sales process, forecasting and pricing. Turn what works into a playbook.",
      "Be the voice of the customer. Feed what you hear directly into product. You will sit next to the people building Perry and shape what we ship.",
    ],
    whoYouAreTitle: "What you'll bring",
    whoYouAre: [
      "Direct exposure to enterprise sales at the highest level: complex, multi-stakeholder deals with senior buyers. We care more about how you sell than how long you have been doing it, so hungry early-career sellers with a strong record are encouraged to apply.",
      "Experience selling into private capital (PE, VC, private credit, fund administration, data or software for GPs/LPs), or a network inside it.",
      "Comfort talking to senior, sceptical, highly precise buyers. You can hold a conversation with a fund GC about side letters, MFNs or a shareholders' agreement, or you learn fast enough to.",
      "Hunger. You want to build something, not inherit it. You measure yourself by outcomes, not activity.",
      "Real curiosity about AI. You use it daily and want to be at the cutting edge of how it changes legal and financial work.",
      "Ownership. You thrive without a playbook, a big team or an SDR behind you, and you make things happen.",
    ],
    niceToHave: [
      "A legal background, ideally in funds, PE, M&A or finance (for example, a lawyer who moved into a commercial role).",
      "Prior experience selling legal tech, fintech or vertical SaaS to funds, such as fund admin, LP portals, data rooms or contract tools.",
      "Early-stage experience (first or among the first sales hires).",
    ],
    whyThisRole: [
      "Founding commercial seat at a category-defining company, with the equity to match.",
      "A product customers already pay for, a warm pipeline of well-known funds, and founders who know the buyer because they used to be the buyer's lawyer.",
      "A clear path to Head of Sales / CRO as we scale.",
    ],
    applySteps: [
      "Email info@useperry.com",
      'Use "Founding Commercial Hire" in the subject line',
      "Include a note on what draws you to the role",
      "Include your CV",
    ],
  },
  {
    slug: "founding-account-executive-us",
    title: "Founding Account Executive, US",
    location: "New York, with travel to fund clients and London",
    type: "Full-time",
    reportsTo: "Founder & CEO",
    compensation: "Competitive salary and commission, plus meaningful equity",
    summary:
      "Be Perry's first person on the ground in the US — open the market, turn warm conversations with US funds into pilots and contracts, and create our first US references.",
    applyEmail: "info@useperry.com",
    applySubject: "Founding Account Executive, US",
    about: perryAbout,
    theRole: [
      "The US is the largest private capital market in the world, and some of the best-known US funds are already in conversation with us. You will be Perry's first person on the ground there.",
      "You will open the US market: build relationships with fund GCs and COOs, turn warm conversations into pilots and pilots into contracts, and create the first US customer references. You will work closely with our founders in London, and you will have the autonomy of someone running their own territory from day one.",
    ],
    whatYoullDo: [
      "Open the market. Own new business across US VC, PE and private credit funds, from emerging managers to established firms.",
      "Run full-cycle deals. Prospect, qualify, demo, run pilots, negotiate and close. Navigate legal, compliance, IT security and procurement reviews.",
      "Work the ecosystem. Build pipeline through GC communities, industry events, fund administrators and law firm partners. Private capital runs on relationships; you will build ours.",
      "Turn pilots into revenue. Define success criteria with customers up front and convert pilots on time.",
      "Shape the US playbook. Learn what resonates with US buyers (regulatory context, pricing, procurement) and bring it back into product and positioning.",
      "Represent Perry. Be the face of the company in the US, at events, on panels and in customer boardrooms.",
    ],
    whoYouAreTitle: "What you'll bring",
    whoYouAre: [
      "Direct exposure to enterprise sales at the highest level, with a track record of hitting or beating targets. Hungry, fast-learning early-career sellers are encouraged to apply.",
      "Experience selling to private capital funds, or to legal, compliance or finance teams in financial services. A network among fund GCs, COOs or CFOs is a strong plus.",
      "The ability to run a multi-threaded sale with senior, technical and legal stakeholders, and to explain AI clearly to a non-technical audience.",
      "A self-starter mindset. You are comfortable being the only Perry person in your time zone and you do not wait to be told what to do.",
      "Hunger and grit. You want the upside and the scope that come with being first.",
      "A genuine interest in AI and how it will change professional services.",
    ],
    niceToHave: [
      "A legal background in funds, PE, M&A or finance, or experience working alongside fund lawyers.",
      "Experience at a legal tech, fund admin, investor portal or vertical AI company selling to GPs or LPs.",
      "Experience as an early or first sales hire at a startup.",
    ],
    whyThisRole: [
      "Own the US market at a company with real customers and well-known funds in the pipeline.",
      "Founding equity and a clear path to lead the US business as we build the team.",
      "Work directly with founders who are former fund lawyers and know the buyer inside out.",
    ],
    applySteps: [
      "Email info@useperry.com",
      'Use "Founding Account Executive, US" in the subject line',
      "Include a note on what draws you to the role",
      "Include your CV",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    location: "London, in office",
    type: "Full-time",
    reportsTo: "Founder & CPO",
    compensation: "Competitive salary, plus meaningful equity",
    summary:
      "Own how Perry looks, feels and works — define the interaction patterns for agentic AI that fund GCs and deal teams can trust in seconds.",
    applyEmail: "info@useperry.com",
    applySubject: "Product Designer",
    about: perryAbout,
    theRole: [
      "You will be Perry's product designer, and you will own how Perry looks, feels and works. Our users are fund GCs, lawyers and deal teams who make high-stakes decisions on complex documents. They need to trust what an AI agent tells them in seconds, see the evidence behind it, and act on it.",
      "That is a hard and unsolved design problem. Most AI products are a chat box. Perry is a system of agents, memory and collaboration that works across a fund's documents, deals and portfolio. You will define the interaction patterns for that: how agents surface work, how users review and correct it, and how a GC, a deal team and outside counsel collaborate in one place.",
    ],
    whatYoullDo: [
      "Own product design end to end. From research and problem framing to flows, prototypes, high-fidelity UI and shipped product.",
      "Design for agentic AI. Create patterns for agent output, confidence, source citations, review-and-correct workflows and human-in-the-loop approvals.",
      "Make complexity clear. Turn dense legal data (rights, obligations, side letters, cap tables) into views a busy GC can scan and trust.",
      "Talk to users. Join customer calls, run usability sessions and turn feedback into design decisions quickly.",
      "Build our design system. Evolve our brand and components into a scalable system, working directly in code with engineers where it helps.",
      "Ship fast. Work in tight loops with the CPO and engineering. Prototype in days, not weeks.",
    ],
    whoYouAreTitle: "What you'll bring",
    whoYouAre: [
      "2+ years of product design experience, with a portfolio of shipped B2B or SaaS products used by professionals.",
      "Strong interaction and visual design skills, and the ability to simplify complex, data-heavy workflows.",
      "Experience designing AI-powered products, or a strong point of view on how AI interfaces should work.",
      "Hands-on with Figma and modern prototyping. Comfortable using AI tools in your own workflow; front-end skills (HTML/CSS, React, Tailwind) are a plus.",
      "An outcome-driven mindset. You measure design by whether users get the job done, not by how many screens you made.",
      "Comfort being the only designer, with the craft to set the bar and the drive to own it.",
    ],
    niceToHave: [
      "Experience designing for legal, financial services, fintech or enterprise workflow tools.",
      "Experience as a first or founding designer at a startup.",
      "Interest in private markets and how funds operate.",
    ],
    whyThisRole: [
      "Define the design language for a new category of AI product, from a blank canvas.",
      "Direct access to users who are some of the most demanding professionals in finance and law.",
      "Founding equity, real ownership, and a path to building and leading Perry's design team.",
    ],
    applySteps: [
      "Email info@useperry.com",
      'Use "Product Designer" in the subject line',
      "Include a note on what draws you to the role",
      "Include your CV",
    ],
  },
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
