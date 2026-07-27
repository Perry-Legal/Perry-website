import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { PageHeader } from "@/components/page-header";
import { careerRoles } from "@/lib/careers";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Join Perry — open roles for lawyers and builders encoding private capital expertise into agentic legal infrastructure.",
};

export default function CareerPage() {
  return (
    <div className="border-t border-border/60">
      <PageHeader
        title="Career"
        description="Help us encode private capital expertise into software — and set the standard for what correct looks like."
      />

      <div className="section-container px-6 pb-24">
        <StaggerGroup className="mx-auto max-w-3xl space-y-4">
          {careerRoles.map((role) => (
            <StaggerItem key={role.slug} y={20}>
              <Link
                href={`/career/${role.slug}`}
                className="group flex flex-col gap-4 border border-border/60 px-6 py-6 transition-[border-color,background-color] duration-300 hover:border-foreground/20 hover:bg-muted/30 sm:flex-row sm:items-center sm:justify-between sm:px-8"
              >
                <div className="min-w-0">
                  <h2 className="font-source-serif text-2xl font-medium tracking-tight">
                    {role.title}
                  </h2>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5 shrink-0" aria-hidden />
                      {role.location}
                    </span>
                    <span aria-hidden>·</span>
                    <span>{role.type}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {role.summary}
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground">
                  View role
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </div>
  );
}
