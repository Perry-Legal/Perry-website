import type { Metadata } from "next";

import { CtaSection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { JsonLd } from "@/components/json-ld";
import { PlatformArchitectureSection } from "@/components/platform-architecture-section";
import { PlatformIntelligenceSection } from "@/components/platform-intelligence-section";
import { SeedAnnouncementSection } from "@/components/seed-announcement-section";
import { SolutionSection } from "@/components/solution-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { seedAnnouncement } from "@/lib/seed-announcement";
import { pageMetadata } from "@/lib/site-metadata";
import { softwareApplicationJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Perry",
  absoluteTitle: "Perry - The Legal OS for Private Capital",
  description:
    "The AI operating layer for legal work across the fund lifecycle: formation, deal execution, and portfolio governance, in one platform built for private capital.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />
      <HeroSection />
      {seedAnnouncement.showOnHomepage ? <SeedAnnouncementSection /> : null}
      <PlatformIntelligenceSection />
      <PlatformArchitectureSection />
      <CtaSection
        id={undefined}
        className="bg-white pt-32"
        imageSrc="/images/cta/michael-d-beckwith-soN9dynO5fo-unsplash.jpg"
        title="See how Perry adapts to the way your team works."
        description="From fund formation through deal execution and portfolio governance — see how Perry adapts to the way your team works."
      />
      <SolutionSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
}
