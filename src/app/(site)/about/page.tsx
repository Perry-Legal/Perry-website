import type { Metadata } from "next";
import Image from "@/components/asset-image";
import Link from "next/link";

import { CtaSection } from "@/components/cta-section";
import { EnterpriseSafetySection } from "@/components/enterprise-safety-section";
import { StoryPageHero } from "@/components/story-page-hero";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutImages } from "@/lib/about-images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Perry's mission to make law simpler, smarter, and more human for private capital teams.",
};

const teamMembers = [
  {
    name: "Shashwat Patel",
    role: "Founder & CEO",
    imageSrc: aboutImages.team.shashwatPatel,
    linkedinUrl: "https://www.linkedin.com/in/shashwatpatel/",
  },
  {
    name: "Jacobo König",
    role: "Founder & CTO",
    imageSrc: aboutImages.team.jacoboKonig,
    linkedinUrl: "https://www.linkedin.com/in/jacobok/",
  },
  {
    name: "Vaneesa Agrawal",
    role: "Founder & CPO",
    imageSrc: aboutImages.team.vaneesaAgrawal,
    linkedinUrl: "https://www.linkedin.com/in/vaneesaagrawal/",
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="border-t border-border/60">
      <StoryPageHero
        eyebrow="Our mission"
        title="Lorem ipsum dolor sit amet"
        description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={aboutImages.hero}
        imageAlt="Perry team collaborating in the office"
        imageAspect="landscape"
      >
        <h2 className="mt-8 font-source-serif text-2xl font-medium tracking-tight text-balance sm:text-3xl">
          Ut enim ad minim veniam, quis nostrud exercitation.
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.
          </p>
        </div>
      </StoryPageHero>

      <section className="border-t border-border/60 px-6 py-16 sm:py-20">
        <div className="section-container">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/60 uppercase">
            Our team
          </p>
          <h2 className="mt-3 max-w-2xl font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Built by legal, design, and engineering minds.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            We move fast, question conventions, and design with empathy. Because in the end, good
            technology should feel effortless.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden pt-0">
                <div className="relative h-[600px] w-full bg-muted/30">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                  <CardAction>
                    <Link
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <LinkedInIcon className="size-4" />
                    </Link>
                  </CardAction>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <EnterpriseSafetySection />

      <CtaSection className="pt-20 sm:pt-24" />
    </div>
  );
}
