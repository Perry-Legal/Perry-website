import { CtaSection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { PlatformArchitectureSection } from "@/components/platform-architecture-section";
import { PlatformIntelligenceSection } from "@/components/platform-intelligence-section";
import { SeedAnnouncementSection } from "@/components/seed-announcement-section";
import { SolutionSection } from "@/components/solution-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { seedAnnouncement } from "@/lib/seed-announcement";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Perry AI",
  alternateName: "Perry",
  url: "https://useperry.com/",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
