import type { LucideIcon } from "lucide-react";
import { Briefcase, FileText, LogOut, Zap } from "lucide-react";

import { platformIntelligenceImages } from "@/lib/platform-intelligence-images";

export type IntelligenceFlowColumn = {
  label: string;
  items: string[];
  imageSrc?: string;
};

export type IntelligenceFlowStage = {
  id: string;
  tabLabel: string;
  icon: LucideIcon;
  columns: IntelligenceFlowColumn[];
};

export const intelligenceFlowStages: IntelligenceFlowStage[] = [
  {
    id: "formation",
    tabLabel: "Fund Formation",
    icon: FileText,
    columns: [
      {
        label: "Negotiation review",
        imageSrc: platformIntelligenceImages.formation.negotiationReview,
        items: [
          "Review documents based on the fund's historical negotiation positions.",
        ],
      },
      {
        label: "Term consolidation",
        imageSrc: platformIntelligenceImages.formation.termConsolidation,
        items: ["Extract and aggregate terms across all side letters."],
      },
      {
        label: "MFN workflow",
        imageSrc: platformIntelligenceImages.formation.mfnWorkflow,
        items: ["Run the full MFN process in one workspace."],
      },
      {
        label: "Operational handoff",
        imageSrc: platformIntelligenceImages.formation.operationalHandoff,
        items: ["Turn LPAs and side letters into active operational tasks."],
      },
    ],
  },
  {
    id: "deployment",
    tabLabel: "Capital Deployment",
    icon: Zap,
    columns: [
      {
        label: "Transaction workflow",
        imageSrc: platformIntelligenceImages.deployment.transactionWorkflow,
        items: [
          "Manage every transaction document throughout the review, negotiation and approval process.",
        ],
      },
      {
        label: "Market benchmarking",
        imageSrc: platformIntelligenceImages.deployment.marketBenchmarking,
        items: ["Benchmark your deal with the market standard."],
      },
      {
        label: "Diligence to action",
        imageSrc: platformIntelligenceImages.deployment.diligenceToAction,
        items: ["Turn diligence materials into clear findings and actions."],
      },
      {
        label: "Post-closing obligations",
        imageSrc: platformIntelligenceImages.deployment.postClosingObligations,
        items: ["Turn transaction terms into long-term actions."],
      },
    ],
  },
  {
    id: "management",
    tabLabel: "Fund/Portfolio Management",
    icon: Briefcase,
    columns: [
      {
        label: "Ongoing work",
        imageSrc: platformIntelligenceImages.management.ongoingWork,
        items: ["Manage ongoing work created during formation and investment."],
      },
      {
        label: "Team collaboration",
        imageSrc: platformIntelligenceImages.management.teamCollaboration,
        items: ["Collaborate with your teams on each task."],
      },
      {
        label: "Legal Q&A",
        imageSrc: platformIntelligenceImages.management.legalQAndA,
        items: ["Give teams fast answers without turning legal into a help desk."],
      },
      {
        label: "Portfolio visibility",
        imageSrc: platformIntelligenceImages.management.portfolioVisibility,
        items: [
          "Understand rights, restrictions and decisions across the portfolio.",
        ],
      },
    ],
  },
  {
    id: "exit",
    tabLabel: "Exit",
    icon: LogOut,
    columns: [
      {
        label: "Legal continuity",
        imageSrc: platformIntelligenceImages.exit.legalContinuity,
        items: ["Provide a legal history so everything happens on one platform."],
      },
      {
        label: "Obligation tracking",
        imageSrc: platformIntelligenceImages.exit.obligationTracking,
        items: ["Track open obligations so that nothing is missing."],
      },
      {
        label: "Exit readiness",
        imageSrc: platformIntelligenceImages.exit.exitReadiness,
        items: ["Review documents to make sure you have a clean exit."],
      },
      {
        label: "Continuation negotiation",
        imageSrc: platformIntelligenceImages.exit.continuationNegotiation,
        items: ["Manage continuation negotiation easily."],
      },
    ],
  },
];
