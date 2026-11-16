import type { Metadata } from "next";
import Image from "@/components/asset-image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import { InvestorLogoRow } from "@/components/investor-logo-row";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { withBasePath } from "@/lib/base-path";
import { bookDemoUrl } from "@/lib/navigation";
import { seedAnnouncement, seedInvestors } from "@/lib/seed-announcement";

const description =
  "Oversubscribed seed round led by Haatch alongside Antler, Arāya Ventures, Syncorp Ventures, and other US and international investors.";

export const metadata: Metadata = {
  title: {
    absolute:
      "Perry AI raises $2.2M seed funding to build the AI legal operating system for private capital | Perry",
  },
  description,
  alternates: { canonical: seedAnnouncement.canonicalUrl },
  openGraph: {
    type: "article",
    title: "Perry AI raises $2.2M seed, led by Haatch",
    description:
      "The AI legal operating system for private capital. Oversubscribed seed round led by Haatch alongside Antler, Arāya Ventures and Syncorp Ventures.",
    url: seedAnnouncement.canonicalUrl,
    publishedTime: seedAnnouncement.publishedTime,
    images: [{ url: seedAnnouncement.ogImageUrl, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perry AI raises $2.2M seed, led by Haatch",
    description,
    images: [seedAnnouncement.ogImageUrl],
  },
};

const keyNumbers = [
  { value: "$1.5B+", label: "AUM on Perry" },
  { value: "1,000+", label: "Portfolio companies" },
  { value: "90%", label: "Faster for customers" },
  { value: "84 → 13", label: "Days to sign a deal" },
] as const;

const unlocks = [
  {
    stage: "01 · Formation",
    text: "Fund formation workflows, from LPAs to side letters.",
    rule: "border-mint",
  },
  {
    stage: "02 · Deployment",
    text: "Deal execution: review, flag issues and draft against the fund's own positions.",
    rule: "border-mint/55",
  },
  {
    stage: "03 · Portfolio",
    text: "LP reporting, MFN tracking and co-invest allocation.",
    rule: "border-mint/38",
  },
  {
    stage: "04 · Exit",
    text: "Secondaries and fund transfers, with every commitment on record.",
    rule: "border-mint/22",
  },
] as const;

const investorQuotes = [
  {
    logo: seedInvestors.haatch,
    logoClassName: "h-[30px]",
    quote:
      "The biggest wins in AI will go to companies that go deep in markets where the stakes are high and generalist tools fall short. Private capital legal work is a textbook example. Shashwat and Vaneesa have spent nearly three decades between them doing this work, and it shows in the product: Perry AI doesn't just review documents, it builds a living memory of every commitment a fund has made and acts on it. The early customer results are exceptional, and we're delighted to lead this round as Perry takes its platform to the next level.",
    name: "Fred Soneya",
    role: "Co-founder and General Partner, Haatch",
  },
  {
    logo: seedInvestors.antler,
    logoClassName: "h-6",
    quote:
      "We backed Shashwat and Vaneesa at inception because they combine rare domain authority with an ambitious vision for how AI can transform legal work. Private capital legal operations is a huge market that generalist software has never served well, and much of it runs on manual, legacy workflows. Perry AI is rebuilding that work from the ground up. The team has turned their vision into strong traction and real customer impact remarkably quickly, and we're excited to keep backing them as they expand across North America, Europe and Asia.",
    name: "Sarah Finegan",
    role: "Associate Partner, Antler",
  },
] as const;

const founders = [
  {
    name: "Shashwat Patel",
    role: "Co-founder and CEO",
    focus: "22% 25%",
    bio: "15 years as a private equity and funds lawyer at Debevoise & Plimpton and Simmons & Simmons, advising asset managers including BlackRock, Brookfield, Invesco, Clayton Dubilier & Rice and HarbourVest. Qualified in New York, England & Wales, and India; LL.M., Columbia Law School.",
  },
  {
    name: "Vaneesa Agrawal",
    role: "Co-founder and CPO",
    focus: "76% 25%",
    bio: "12+ years as a funds lawyer and serial entrepreneur. Built a venture capital law firm from zero to 75 deals, achieving a top-tier Legal 500 ranking within three years. NYU School of Law graduate.",
  },
] as const;

const boilerplates = [
  {
    title: "About Perry AI",
    body: "Perry AI is the legal operating system for private capital. Founded in London by former corporate and funds lawyers Shashwat Patel and Vaneesa Agrawal, Perry deploys AI agents that turn a fund's legal documents into operational intelligence. Perry accelerates deal execution, tracks rights and obligations across portfolios, and automates compliance for PE, VC and other private capital funds and their law firms. Perry builds persistent, fund-level institutional memory that gets smarter with every deal and is then used to deliver complex legal work. Client data is never used to train models or shared between clients.",
  },
  {
    title: "About Haatch",
    body: (
      <>
        Haatch is one of the UK&apos;s most active early-stage venture capital investors. It
        completed 68 investments in 2025 alone and has raised and invested more than £160
        million across over 200 companies. Haatch backs ambitious founders building B2B software
        across the future of enterprise, fintech and vertical SaaS, and pairs capital with
        hands-on operator support to help them scale. It was named Seed VC of the Year at the UK
        Business Angels Association Awards 2025 and ranked among the top investors in the Sifted
        100: UK &amp; Ireland 2026. Learn more at{" "}
        <a
          href="https://www.haatch.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0D6B47] underline underline-offset-2 hover:text-[#0A5236]"
        >
          haatch.com
        </a>
        .
      </>
    ),
  },
  {
    title: "About Antler",
    body: "Antler is where founders come to go further, faster. Antler is the world's most active early-stage investor, backing exceptional people at the very start of their journey, and supporting them from inception to scale. Across 30 cities worldwide, including New York, San Francisco, London, Berlin, Bangalore, Singapore, Seoul, and Sydney, the firm helps founders remove the barriers to building by connecting them with world-class peers, validating business models, and providing initial capital. To date, Antler has backed more than 2,000 startups globally, including Lovable, Airalo, Peec.AI, Reebelo, Wrtn, and Benjamin.",
  },
] as const;

const pressKitHref = withBasePath(seedAnnouncement.pressKitPath);

function FounderAvatar({
  name,
  focus,
  className,
}: {
  name: string;
  focus: string;
  className: string;
}) {
  return (
    <Image
      src={seedAnnouncement.foundersImage}
      alt={name}
      width={2016}
      height={1160}
      sizes="160px"
      style={{ objectPosition: focus }}
      className={`block shrink-0 rounded-full object-cover ${className}`}
    />
  );
}

export default function SeedRoundPage() {
  return (
    <article className="bg-white text-[#0B0B0C]">
      {/* Hero: sits under the transparent fixed header. */}
      <section
        data-header-theme="dark"
        className="relative -mt-(--site-header-h) overflow-hidden bg-pine-glow text-mist [--glow-pos:40%_55%] [--glow-size:75%_60%]"
      >
        <div className="mx-auto flex max-w-[1240px] flex-col gap-9 px-6 pt-[calc(var(--site-header-h)+4rem)] pb-[200px] sm:px-8 sm:pt-[calc(var(--site-header-h)+5.5rem)] sm:pb-[260px]">
          <Reveal y={12}>
            <div className="flex flex-wrap justify-between gap-4 font-mono text-xs tracking-[0.26em] text-mint uppercase sm:text-sm">
              <span className="inline-flex items-center gap-3">
                <span
                  aria-hidden
                  className="size-2.5 rounded-full bg-mint shadow-[0_0_0_6px_rgba(111,227,162,0.16)]"
                />
                News · Seed round
              </span>
              <time dateTime="2026-11-18" className="text-mist/55">
                {seedAnnouncement.dateLabel}
              </time>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p
              aria-hidden
              className="font-serif text-[clamp(110px,21vw,300px)] leading-[0.9] font-medium tracking-[-0.04em]"
            >
              $2.2m
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-9">
            <h1 className="max-w-[1040px] font-serif text-[clamp(32px,3.8vw,54px)] leading-[1.14] font-normal tracking-[-0.8px] text-sage">
              Perry AI raises{" "}
              <span className="font-medium text-mist">$2.2M seed funding</span> to build the AI
              legal operating system for private capital
            </h1>
            <p className="max-w-[760px] text-[19px] leading-relaxed text-mist/75">
              {description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founders photo overlapping the hero. */}
      <div className="relative mx-auto -mt-[160px] max-w-[1240px] px-6 sm:-mt-[200px] sm:px-8">
        <Reveal delay={0.15} y={32}>
          <Image
            src={seedAnnouncement.foundersImage}
            alt="Perry co-founders Shashwat Patel and Vaneesa Agrawal"
            width={2016}
            height={1160}
            priority
            sizes="(min-width: 1240px) 1176px, 100vw"
            className="block aspect-[2016/1160] w-full rounded-2xl object-cover shadow-[0_40px_100px_rgba(10,17,14,0.35)]"
          />
          <p className="mt-3.5 text-sm text-[#6B6B70]">
            Co-founders Shashwat Patel (CEO) and Vaneesa Agrawal (CPO)
          </p>
        </Reveal>
      </div>

      {/* Key numbers */}
      <div className="mx-auto max-w-[1240px] px-6 pt-18 pb-6 sm:px-8">
        <StaggerGroup className="grid grid-cols-1 border-y border-pine-rule sm:grid-cols-2 lg:grid-cols-4">
          {keyNumbers.map((item) => (
            <StaggerItem key={item.label} y={12}>
              <div className="flex flex-col gap-2 py-8 lg:px-6 lg:first:pl-0">
                <span className="font-serif text-[52px] leading-none font-medium tracking-[-1.5px] text-pine-950 sm:text-[64px]">
                  {item.value}
                </span>
                <span className="font-mono text-[13px] tracking-[0.18em] text-[#5F6B65] uppercase">
                  {item.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Backed by */}
      <Reveal className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-12 gap-y-7 px-6 pt-12 pb-8 sm:px-8">
        <p className="font-mono text-[13px] tracking-[0.24em] text-[#5F6B65] uppercase">
          Backed by
        </p>
        <InvestorLogoRow size="md" onLight className="flex-[1_1_600px] gap-x-10 gap-y-7">
          <li className="text-[15px] leading-snug text-[#3F4743]">
            + Kelsey Chase
            <br />
            <span className="text-[#6B6B70]">Founder of Aumni</span>
          </li>
        </InvestorLogoRow>
      </Reveal>

      {/* Release text + media box */}
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-16 px-6 pt-14 pb-10 sm:px-8">
        <Reveal
          as="article"
          className="flex min-w-0 flex-[999_1_560px] flex-col gap-6 text-lg leading-[1.75] text-[#2A2E2C]"
        >
          <p className="font-serif text-[clamp(24px,2.2vw,30px)] leading-[1.45] text-pine-950">
            Perry AI automates complex legal work for the private capital ecosystem using
            sophisticated AI agents, and tracks every right, obligation and promise across every
            deal, so firms can raise and deploy capital faster and more accurately, without the
            fear that something has been missed.
          </p>
          <p>
            <strong className="font-semibold text-pine-950">
              London, UK, 18 November 2026:
            </strong>{" "}
            Perry AI, the London-based startup building the AI legal operating system for private
            capital, has today announced an oversubscribed $2.2 million seed funding round to
            transform how private equity, venture capital and other private capital funds and their
            law firms manage complex legal workflows, transaction data, and compliance.
          </p>
          <p>
            The round was led by Haatch, with participation from Antler, Arāya Ventures, Syncorp
            Ventures, and other US and international investors, including Kelsey Chase, a super
            angel investor and the exited founder of Aumni, a cloud-based investment analytics
            platform for private capital markets which was acquired by J.P. Morgan in 2023.
          </p>
          <p>
            Fund legal teams work in a high-stakes, regulated and time-sensitive world, where a
            single overlooked obligation can carry serious consequences. Perry AI brings every
            right, obligation and promise a fund has made into one place and remembers it. Teams
            no longer have to dig back through old deals each time they make a new investment, or
            worry that a commitment made three deals ago has been missed. Its agents, built on deep
            private capital legal expertise, then do the work: reviewing documents, flagging issues
            and preparing drafts. In-house teams and external counsel all work from the same live
            record, so firms can raise and deploy capital faster, with confidence that nothing has
            slipped through.
          </p>
        </Reveal>

        <aside className="min-w-0 flex-[1_1_300px]">
          <Reveal delay={0.1} className="flex flex-col gap-4 rounded-[14px] bg-pine-50 p-7">
            <p className="font-mono text-xs tracking-[0.2em] text-[#5F6B65] uppercase">
              Media &amp; press kit
            </p>
            <p className="text-[15px] leading-relaxed text-[#2A2E2C]">
              <strong className="font-semibold">Jack Davies</strong>
              <br />
              VP of European Marketing &amp; PR, Antler
              <br />
              <a
                href="mailto:jack.davies@antler.co"
                className="text-[#0D6B47] underline underline-offset-2 hover:text-[#0A5236]"
              >
                jack.davies@antler.co
              </a>
            </p>
            <a
              href={pressKitHref}
              download
              className="flex min-h-12 items-center justify-between rounded-[10px] bg-pine-950 px-[18px] text-[15px] font-medium text-white transition-colors hover:bg-pine-900"
            >
              Download press kit
              <ArrowDown aria-hidden className="size-4" />
            </a>
            <p className="text-[13px] leading-normal text-[#6B6B70]">
              Press release (PDF, Word), founder photos and Perry logos.
            </p>
          </Reveal>
        </aside>
      </div>

      {/* CEO quote banner */}
      <div className="mx-auto max-w-[1240px] px-6 pt-4 pb-14 sm:px-8">
        <Reveal
          as="figure"
          className="relative flex flex-wrap items-center gap-10 overflow-hidden rounded-[18px] bg-pine-glow p-[clamp(32px,5vw,72px)] text-mist [--glow-alpha:0.55] [--glow-pos:15%_20%] [--glow-size:80%_90%] [background-size:100%_100%,0_0,0_0]"
        >
          <FounderAvatar
            name="Shashwat Patel"
            focus={founders[0].focus}
            className="size-28 sm:size-40"
          />
          <div className="flex flex-[1_1_480px] flex-col gap-[22px]">
            <blockquote className="font-serif text-[clamp(24px,2.6vw,38px)] leading-[1.3] font-normal">
              “Generic AI can&apos;t take that fear away, because it doesn&apos;t know the fund.{" "}
              <span className="font-medium text-white">Perry AI does.</span> It remembers every
              position a fund has taken and acts on it, so legal teams can move fast and still
              sleep at night.”
            </blockquote>
            <figcaption className="font-mono text-[13px] tracking-[0.18em] text-[#9FB0A7] uppercase">
              <span className="text-mist">Shashwat Patel</span> · Co-founder and CEO, Perry AI
            </figcaption>
          </div>
        </Reveal>
      </div>

      {/* Release text, continued */}
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-16 px-6 pb-10 sm:px-8">
        <Reveal className="flex min-w-0 flex-[999_1_560px] flex-col gap-6 text-lg leading-[1.75] text-[#2A2E2C]">
          <p>
            Funds already using Perry AI manage over $1.5 billion in AUM across more than 1,000
            portfolio companies. Customers report working 90% faster, with deal signing times on
            live transactions cut from 84 days to 13 days. Customers and a rapidly growing pipeline
            include funds across the UK, Europe, US and India.
          </p>
          <p>
            The investment comes as legal AI attracts record venture investment, with global legal
            tech funding passing $2.3 billion in the first quarter of 2026 alone. Private capital
            remains one of the most expensive areas of legal work: typical private equity
            transactions cost hundreds of thousands of dollars in legal fees and can take up to six
            months to close.
          </p>
          <p>
            Shashwat Patel, co-founder and CEO of Perry AI, comments: “I spent more than 15 years
            advising funds, and every deal had the same undercurrent: a scramble against the clock,
            in a high-stakes, regulated world, with the constant fear that something had been
            missed. A side letter promise, a consent or preemption right, an MFN obligation buried
            three deals back. Generic AI can&apos;t take that fear away, because it doesn&apos;t
            know the fund. Perry AI does. It remembers every position a fund has taken and acts on
            it, so legal teams can move fast and still sleep at night. Demand has been exceptional,
            and this round lets us build on our momentum in Europe and take Perry AI across the US
            and Asia.”
          </p>
        </Reveal>
        <div aria-hidden className="hidden flex-[1_1_300px] lg:block" />
      </div>

      {/* Investor quotes */}
      <div className="mx-auto max-w-[1240px] px-6 pt-4 pb-16 sm:px-8">
        <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {investorQuotes.map((item) => (
            <StaggerItem key={item.name} y={20} className="h-full">
              <figure className="flex h-full flex-col gap-[22px] rounded-[18px] bg-pine-50 p-7 sm:p-10">
                <Image
                  src={item.logo.src}
                  alt={item.logo.name}
                  width={item.logo.width}
                  height={item.logo.height}
                  className={`w-auto self-start brightness-0 ${item.logoClassName}`}
                />
                <blockquote className="font-serif text-[21px] leading-[1.4] text-pine-950 sm:text-2xl">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-auto font-mono text-[13px] tracking-[0.16em] text-[#5F6B65] uppercase">
                  <span className="text-pine-950">{item.name}</span> · {item.role}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* What the funding unlocks */}
      <section
        data-header-theme="dark"
        className="bg-pine-glow text-mist [--glow-alpha:0.45] [--glow-pos:85%_30%] [--glow-size:70%_80%]"
      >
        <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 py-24 sm:px-8">
          <Reveal className="flex max-w-[820px] flex-col gap-[18px]">
            <p className="font-mono text-[13px] tracking-[0.24em] text-mint uppercase">
              What the funding unlocks
            </p>
            <h2 className="font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.12] font-normal text-sage">
              Expansion into the <span className="font-medium text-mist">US and Asia</span>, and
              the whole fund lifecycle on one platform.
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {unlocks.map((item) => (
              <StaggerItem key={item.stage} y={16} className="h-full">
                <div
                  className={`flex h-full flex-col gap-3.5 border-t-2 bg-white/3 px-6 pt-7 pb-8 ${item.rule}`}
                >
                  <span className="font-mono text-sm text-mint uppercase">{item.stage}</span>
                  <span className="text-[17px] leading-[1.55] text-mist/85">{item.text}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal>
            <p className="max-w-[860px] text-[17px] leading-[1.65] text-mist/70">
              The announcement coincides with the deployment of expanded portfolio management
              capabilities on the Perry AI platform, some of which are already live.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <div className="mx-auto max-w-[1240px] px-6 pt-24 pb-10 sm:px-8">
        <p className="mb-8 font-mono text-[13px] tracking-[0.24em] text-[#5F6B65] uppercase">
          The founders
        </p>
        <StaggerGroup className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {founders.map((founder) => (
            <StaggerItem key={founder.name} y={16}>
              <div className="flex flex-col items-start gap-6 sm:flex-row">
                <FounderAvatar name={founder.name} focus={founder.focus} className="size-28" />
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[28px] leading-tight font-medium text-pine-950">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.16em] text-[#5F6B65] uppercase">
                    {founder.role}
                  </p>
                  <p className="mt-1.5 text-base leading-[1.65] text-[#2A2E2C]">{founder.bio}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* About Perry / Haatch / Antler */}
      <div className="mx-auto max-w-[1240px] px-6 pt-14 pb-24 sm:px-8">
        <div className="grid grid-cols-1 gap-8 border-t border-pine-rule pt-10 text-sm leading-[1.65] text-[#4A524E] md:grid-cols-3">
          {boilerplates.map((item) => (
            <div key={item.title} className="flex flex-col gap-2.5">
              <h2 className="font-mono text-xs font-medium tracking-[0.18em] text-pine-950 uppercase">
                {item.title}
              </h2>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Book a demo band */}
      <section data-header-theme="dark" className="bg-pine-950 text-mist">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-7 px-6 py-22 sm:px-8">
          <h2 className="max-w-[680px] font-serif text-[clamp(32px,3.4vw,46px)] leading-[1.15] font-medium tracking-[-0.8px]">
            See how Perry adapts to the way your team works.
          </h2>
          <Link
            href={bookDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex min-h-[52px] items-center gap-2 rounded-[10px] bg-white px-[26px] text-base font-semibold text-pine-950 transition-colors hover:bg-white/90"
          >
            Book a demo
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
