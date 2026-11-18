import type { Metadata } from "next";
import Link from "next/link";

import { SeedAnnouncementVideo } from "@/components/seed-announcement-video";
import { Reveal } from "@/components/motion/reveal";
import {
  pressCoverage,
  type PressArticle,
  type PressSocialPost,
} from "@/lib/press-coverage";
import { seedAnnouncement } from "@/lib/seed-announcement";

const description =
  "Coverage of Perry's oversubscribed $2.2 million seed round, announced on 18 November 2026.";

export const metadata: Metadata = {
  title: "Perry in the press",
  description,
  alternates: { canonical: "https://useperry.com/press/" },
  openGraph: {
    title: "Perry in the press",
    description,
    url: "https://useperry.com/press/",
  },
};

const externalLinkClassName =
  "text-[#0D6B47] underline underline-offset-[3px] transition-colors hover:text-[#0A5236]";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={externalLinkClassName}>
      {children}
    </a>
  );
}

function CoverageDate({ dateTime, dateLabel }: { dateTime: string; dateLabel: string }) {
  return (
    <time
      dateTime={dateTime}
      className="font-mono text-[12px] tracking-[0.12em] text-[#6B6B70] uppercase sm:text-right"
    >
      {dateLabel}
    </time>
  );
}

function ArticleList({ articles }: { articles: readonly PressArticle[] }) {
  return (
    <ul className="border-t border-pine-rule">
      {articles.map((article) => (
        <li
          key={article.href}
          className="grid gap-1.5 border-b border-pine-rule py-5 sm:grid-cols-[13rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-x-8"
        >
          <p className="font-medium text-pine-950">{article.outlet}</p>
          <ExternalLink href={article.href}>{article.headline}</ExternalLink>
          <CoverageDate dateTime={article.dateTime} dateLabel={article.dateLabel} />
        </li>
      ))}
    </ul>
  );
}

function SocialPostList({ posts }: { posts: readonly PressSocialPost[] }) {
  return (
    <ul className="border-t border-pine-rule">
      {posts.map((post) => (
        <li
          key={post.href}
          className="grid gap-1.5 border-b border-pine-rule py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-x-8"
        >
          <p className="text-[#2A2E2C]">
            <span className="font-medium text-pine-950">{post.author}</span> (
            <ExternalLink href={post.href}>{post.handle}</ExternalLink>
            ), {post.summary}
          </p>
          <CoverageDate dateTime={post.dateTime} dateLabel={post.dateLabel} />
        </li>
      ))}
    </ul>
  );
}

export default function PressPage() {
  return (
    <article className="bg-white text-[#0B0B0C]">
      <section
        data-header-theme="dark"
        className="relative -mt-(--site-header-h) overflow-hidden bg-pine-glow text-mist [--glow-pos:70%_80%] [--glow-size:60%_70%]"
      >
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-6 pt-[calc(var(--site-header-h)+4rem)] pb-28 sm:px-8 sm:pt-[calc(var(--site-header-h)+5rem)] sm:pb-36">
          <Reveal y={12}>
            <p className="font-mono text-xs tracking-[0.26em] text-mint uppercase sm:text-sm">
              Press
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-[16ch] font-serif text-[clamp(40px,5vw,68px)] leading-[1.05] font-medium tracking-[-0.03em] text-mist">
              Perry in the press
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[680px] text-lg leading-relaxed text-mist/75">
              Coverage of our oversubscribed $2.2 million seed round, announced on 18 November
              2026. The announcement is on our{" "}
              <Link
                href={seedAnnouncement.pressPagePath}
                className="text-mint underline underline-offset-[3px] transition-colors hover:text-white"
              >
                news page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <div className="relative mx-auto -mt-16 max-w-[1240px] px-6 sm:-mt-24 sm:px-8">
        <Reveal delay={0.12} y={28}>
          <SeedAnnouncementVideo />
        </Reveal>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-16 px-6 pt-16 pb-24 sm:px-8">
        {pressCoverage.map((section) => (
          <section key={section.id} aria-labelledby={`press-${section.id}`} className="flex flex-col gap-6">
            <h2
              id={`press-${section.id}`}
              className="font-mono text-[13px] tracking-[0.24em] text-[#5F6B65] uppercase"
            >
              {section.title}
            </h2>
            {section.articles ? <ArticleList articles={section.articles} /> : null}
            {section.groups?.map((group) => (
              <div key={group.id} className="flex flex-col gap-4">
                <h3 className="font-serif text-[28px] leading-tight font-medium text-pine-950">
                  {group.title}
                </h3>
                {group.articles ? <ArticleList articles={group.articles} /> : null}
                {group.posts ? <SocialPostList posts={group.posts} /> : null}
              </div>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
