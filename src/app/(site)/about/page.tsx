import type { Metadata } from "next";
import Image from "@/components/asset-image";

import { StoryPageHero } from "@/components/story-page-hero";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  },
  {
    name: "Jacobo König",
    role: "Founder & CTO",
    imageSrc: aboutImages.team.jacoboKonig,
  },
  {
    name: "Vaneesa Agrawal",
    role: "Founder & CPO",
    imageSrc: aboutImages.team.vaneesaAgrawal,
  },
];

const values = [
  {
    title: "Speed",
    description: "We want you to spend 10x less time and money on legal busywork.",
  },
  {
    title: "Security",
    description: "We build technology you can trust, guided by transparency and best practices.",
  },
  {
    title: "Context",
    description: "We get to know you, and that way serve you better after every single action.",
  },
  {
    title: "Collaboration",
    description: "Our work means little if we can't share it with the most important people.",
  },
  {
    title: "Accuracy",
    description:
      "Every finding passes a through accuracy barrier and is cited from your sources.",
  },
  {
    title: "Usability",
    description: "We know you're tired of chatbots. We use AI without \"looking\" like AI.",
  },
];

export default function AboutPage() {
  return (
    <div className="border-t border-border/60">
      <StoryPageHero
        title="AI that speaks in your language"
        description="Perry was founded on the belief that AI should be proactive, collaborative and have a deep knowledge of you and your practice."
        imageSrc={aboutImages.hero}
        imageAlt="Perry team collaborating in the office"
        imageAspect="landscape"
      />

      <section className="border-t border-border/60 bg-muted/20 px-6 py-16 sm:py-20">
        <div className="section-container max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/60 uppercase">
            Our mission
          </p>
          <h2 className="mt-3 font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Making law simpler, smarter, and more human.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
            <p>
              Law is built on precision, but it&apos;s often slowed down by complexity.
            </p>
            <p>
              At Perry, we use AI to remove friction, automate the repetitive, and amplify the
              value of human-led strategy.
            </p>
            <p>
              Our goal is to turn every legal process into an opportunity for clarity and
              confidence.
            </p>
            <p>
              Traditional workflows rely on manual review, fragmented tools, and processes that
              weren&apos;t built for the pace of modern business.
            </p>
            <p>
              Important decisions get delayed not because teams lack expertise, but because the
              system around them makes it harder to move with confidence.
            </p>
          </div>
        </div>
      </section>

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
                <div className="relative aspect-[3/4] w-full bg-muted/30">
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
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/20 px-6 py-16 sm:py-20">
        <div className="section-container">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/60 uppercase">
            Our values
          </p>
          <h2 className="mt-3 font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            What we&apos;re optimizing for.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 px-6 py-16 sm:pb-24 sm:py-20">
        <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/60 uppercase">
              Our offices
            </p>
            <h2 className="mt-3 font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              In your jurisdiction
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              We work across jurisdictions to provide you with local and contextual solutions.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-muted/30 shadow-sm">
            <Image
              src={aboutImages.offices}
              alt="Perry offices around the world"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
