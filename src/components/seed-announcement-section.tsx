import Image from "@/components/asset-image";
import Link from "next/link";

import { InvestorLogoRow } from "@/components/investor-logo-row";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { seedAnnouncement } from "@/lib/seed-announcement";
import { withBasePath } from "@/lib/base-path";

const lifecycle = [
  { n: "01", label: "Formation", rule: "border-mint" },
  { n: "02", label: "Deployment", rule: "border-mint/45" },
  { n: "03", label: "Portfolio", rule: "border-mint/30" },
  { n: "04", label: "Exit", rule: "border-mint/18" },
] as const;

/** Homepage "$2.2m" section, directly below the hero. */
export function SeedAnnouncementSection() {
  return (
    <section
      data-header-theme="dark"
      aria-labelledby="seed-announcement-heading"
      className="relative overflow-hidden bg-pine-glow text-mist"
    >
      <div className="section-container flex flex-col gap-14 px-6 pt-24 pb-24 sm:pt-30 sm:pb-28">
        <Reveal y={16}>
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-sm tracking-[0.26em] text-mint uppercase">
            <span className="inline-flex items-center gap-3">
              <span
                aria-hidden
                className="size-2.5 rounded-full bg-mint shadow-[0_0_0_6px_rgba(111,227,162,0.16)]"
              />
              Seed round
            </span>
            <span className="text-mist/55">{seedAnnouncement.dateLabel}</span>
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-2">
          <h2 id="seed-announcement-heading" className="flex flex-col gap-2">
            <span className="text-[clamp(22px,2.4vw,34px)] font-medium text-mist/90">
              Perry raises a seed round of
            </span>
            <span className="font-serif text-[clamp(96px,22vw,320px)] leading-[0.92] font-medium tracking-[-0.04em] text-mist">
              $2.2m
            </span>
          </h2>
        </Reveal>

        <div className="flex flex-col items-center gap-14 lg:flex-row">
          <Reveal className="flex min-w-0 flex-1 flex-col gap-8">
            <p className="font-serif text-[clamp(30px,3.4vw,48px)] leading-[1.15] text-[#9FB0A7]">
              Private capital&apos;s legal work,{" "}
              <span className="font-medium text-mist">rebuilt with AI</span> from formation to
              exit.
            </p>
            <p className="max-w-[560px] text-lg leading-relaxed text-mist/75">
              Led by Haatch, with Antler, Arāya Ventures, Syncorp Ventures and US and
              international investors. Funds on Perry already manage $1.5B+ across 1,000+
              portfolio companies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={seedAnnouncement.pressPagePath}
                className="btn-shine inline-flex min-h-[52px] items-center rounded-[10px] bg-white px-6 text-base font-semibold text-pine-950 transition-colors hover:bg-white/90"
              >
                Read the announcement →
              </Link>
              <a
                href={withBasePath(seedAnnouncement.pressKitPath)}
                download
                className="inline-flex min-h-[52px] items-center rounded-[10px] border border-white/25 px-6 text-base font-medium text-mist transition-colors hover:bg-white/8"
              >
                Download press kit
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="w-full min-w-0 flex-1">
            <Image
              src={seedAnnouncement.foundersImage}
              alt="Perry co-founders Shashwat Patel and Vaneesa Agrawal"
              width={2016}
              height={1160}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="block aspect-[2016/1160] w-full rounded-[14px] object-cover shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
            />
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 gap-5 border-b border-white/10 pb-7 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycle.map((stage) => (
            <StaggerItem key={stage.n} y={12}>
              <div
                className={`flex flex-col gap-2.5 border-t-2 pt-[18px] font-mono text-[15px] ${stage.rule}`}
              >
                <span className="text-mint">{stage.n}</span>
                <span className="tracking-[0.2em] text-[#C7D3CC] uppercase">{stage.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="flex flex-col gap-7">
          <p className="font-mono text-sm tracking-[0.26em] text-[#8A9A91] uppercase">Backed by</p>
          <InvestorLogoRow size="lg" className="gap-x-12 gap-y-8" />
          <p className="text-lg leading-normal text-mist/70">
            Plus US and international investors, including{" "}
            <strong className="font-semibold text-mist">Kelsey Chase</strong>, founder of Aumni
            (acquired by J.P. Morgan).
          </p>
        </Reveal>
      </div>
    </section>
  );
}
