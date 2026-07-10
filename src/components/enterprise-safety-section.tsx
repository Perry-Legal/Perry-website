import Image from "@/components/asset-image";
import Link from "next/link";
import { ClipboardList, Database, Lock, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Button } from "@/components/ui/button";
import { bookDemoUrl } from "@/lib/navigation";

const safetyItems = [
  {
    icon: ShieldCheck,
    title: "GDPR & ISO Compliance",
    description:
      "Fully certified with GDPR and ISO 27001 principles for strict data privacy.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data is encrypted in transit and at rest to prevent unauthorized access.",
  },
  {
    icon: ClipboardList,
    title: "Access Control & Audit Logs",
    description: "Manage user roles and track activity with audit logs.",
  },
  {
    icon: Database,
    title: "Regional Data Hosting",
    description: "Choose your regional hosting to match your compliance needs.",
  },
];

export function EnterpriseSafetySection() {
  return (
    <section
      data-header-theme="dark"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#111113] px-6 py-32 text-white"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/architecture/enterprise-safety-background.png"
          alt=""
          fill
          className="scale-100 object-cover grayscale blur-md"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="section-container relative">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
          <Reveal>
            <SectionEyebrow onDark>Trust & Safety</SectionEyebrow>
            <h2 className="mt-2 font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              Enterprise-grade protection for every contract.
            </h2>
            <p className="mt-4 text-white/70 text-pretty">
              Perry ensures your legal data remains private, encrypted, and compliant
              with international standards.
            </p>
            <div className="mt-8">
              <Button
                className="bg-white text-black hover:bg-white/90"
                render={
                  <Link
                    href={bookDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Book a demo
              </Button>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
            {safetyItems.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title} y={20}>
                  <SpotlightCard className="h-full">
                    <div className="flex aspect-4/2 h-full flex-col justify-between rounded-none border border-none bg-white/[0.06] p-8 backdrop-blur-md">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-none bg-white/10 backdrop-blur-sm">
                        <Icon className="size-5 text-white/70" strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-base font-medium tracking-tight">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-white/60 text-pretty">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
