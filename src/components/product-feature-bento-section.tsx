import Link from "next/link";
import { ArrowRight, FileText, GitBranch, Shield, Users, Zap } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { STAGGER } from "@/lib/motion";
import { cn } from "@/lib/utils";

const bentoItems = [
  {
    slug: "fund-formation/fund-document-review",
    label: "Fund document review",
    description:
      "Know whether a side-letter term is acceptable before you agree to it.",
    icon: FileText,
    className: "sm:col-span-2 sm:row-span-2",
    featured: true,
  },
  {
    slug: "capital-deployment/review-negotiation",
    label: "Review and negotiation",
    description:
      "Manage every transaction document through review, negotiation and approval.",
    icon: Zap,
    className: "sm:col-span-1",
  },
  {
    slug: "fund-portfolio-management/obligation-management",
    label: "Obligation management",
    description: "Manage ongoing work created during formation and investment.",
    icon: Shield,
    className: "sm:col-span-1",
  },
  {
    slug: "fund-formation/mfn-workflow",
    label: "MFN workflow",
    description: "Run the full MFN process in one workspace.",
    icon: GitBranch,
    className: "sm:col-span-1",
  },
  {
    slug: "fund-portfolio-management/legal-question-centre",
    label: "Legal question centre",
    description:
      "Give teams fast answers without turning legal into a help desk.",
    icon: Users,
    className: "sm:col-span-1",
  },
];

export function ProductFeatureBentoSection() {
  return (
    <section className="relative border-y border-border/60 bg-muted/20 px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div className="section-container relative">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>Features</SectionEyebrow>
          <h2 className="mt-2 font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Built for the work legal teams do every day
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Deep workflows for document generation, deal closings, investor relations,
            and portfolio oversight — not another generic project tracker.
          </p>
        </Reveal>

        <StaggerGroup
          stagger={STAGGER.tight}
          className="mt-12 grid auto-rows-[minmax(180px,auto)] gap-4 sm:grid-cols-3"
        >
          {bentoItems.map((item) => {
            const Icon = item.icon;
            const [lifecycle, feature] = item.slug.split("/");

            const card = (
              <Link
                href={`/product/${lifecycle}#${feature}`}
                className={cn(
                  "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-foreground/20 hover:bg-muted/40 hover:shadow-md",
                )}
              >
                <div>
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-lg bg-muted transition-transform duration-300 group-hover:-translate-y-0.5",
                      item.featured && "size-12",
                    )}
                  >
                    <Icon className="size-5 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <h3
                    className={cn(
                      "mt-4 font-medium tracking-tight",
                      item.featured && "text-xl",
                    )}
                  >
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>

                <span className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  Learn more
                  <ArrowRight className="size-3.5 -translate-x-0.5 opacity-70 transition-[transform,opacity] duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </span>

                {item.featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -bottom-8 size-40 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </Link>
            );

            return (
              <StaggerItem key={item.slug} y={20} className={cn("flex", item.className)}>
                {item.featured ? (
                  <SpotlightCard
                    className="flex-1"
                    spotlightClassName="rounded-2xl bg-[radial-gradient(360px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),oklch(0.145_0_0/0.04),transparent_65%)]"
                  >
                    {card}
                  </SpotlightCard>
                ) : (
                  card
                )}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
