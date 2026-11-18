import type { Metadata } from "next";
import Link from "next/link";

import Image from "@/components/asset-image";
import { Reveal } from "@/components/motion/reveal";
import {
  byNewest,
  formatNewsroomDate,
  newsroomAggregators,
  newsroomAnnouncements,
  newsroomInvestor,
  newsroomLinkedIn,
  newsroomNews,
  newsroomX,
  type NewsroomAnnouncement,
  type NewsroomArticle,
  type NewsroomSocialPost,
} from "@/lib/newsroom";

const description = "News, commentary and posts about Perry.";

export const metadata: Metadata = {
  title: "Newsroom",
  description,
  alternates: { canonical: "https://useperry.com/newsroom/" },
  openGraph: {
    title: "Newsroom | Perry",
    description,
    url: "https://useperry.com/newsroom/",
  },
};

function ArticleCard({ article }: { article: NewsroomArticle }) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative isolate flex aspect-[4/5] overflow-hidden rounded-sm bg-pine-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine-900"
    >
      {article.image ? (
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <span
          aria-hidden
          className="absolute inset-0 origin-center bg-[radial-gradient(ellipse_at_top,rgba(111,227,162,0.22),transparent_58%)] transition-transform duration-500 ease-out group-hover:scale-110"
        />
      )}
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/15"
      />
      <span className="absolute top-4 left-4 max-w-[calc(100%-2rem)] rounded-full bg-black/45 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {article.outlet}
      </span>
      <span className="relative mt-auto flex flex-col gap-2 p-5 text-white">
        <time dateTime={article.date} className="text-sm text-white/70">
          {formatNewsroomDate(article.date)}
        </time>
        <span className="font-serif text-[22px] leading-[1.25] line-clamp-4">{article.headline}</span>
      </span>
    </a>
  );
}

function ArticleGrid({ articles }: { articles: readonly NewsroomArticle[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {byNewest(articles).map((article) => (
        <li key={article.href}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}

function AnnouncementList({ items }: { items: readonly NewsroomAnnouncement[] }) {
  return (
    <ul className="border-t border-pine-rule">
      {byNewest(items).map((item) => {
        const className =
          "group grid gap-2 py-6 transition-colors hover:bg-pine-50 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-x-8 sm:px-2";
        const body = (
          <>
            <time
              dateTime={item.date}
              className="pt-1 font-mono text-[12px] tracking-[0.12em] text-[#6B6B70] uppercase"
            >
              {formatNewsroomDate(item.date, "long")}
            </time>
            <span>
              <span className="font-serif text-[26px] leading-tight font-medium text-pine-950 group-hover:underline">
                {item.title}
              </span>
              <span className="mt-2 block text-[15px] leading-relaxed text-[#2A2E2C]">
                {item.summary}
              </span>
            </span>
          </>
        );
        const external = item.href.startsWith("http");

        return (
          <li key={item.href} className="border-b border-pine-rule">
            {external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                {body}
              </a>
            ) : (
              <Link href={item.href} className={className}>
                {body}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function SocialList({ posts }: { posts: readonly NewsroomSocialPost[] }) {
  return (
    <ul className="border-t border-pine-rule">
      {byNewest(posts).map((post) => (
        <li key={post.href} className="border-b border-pine-rule">
          <a
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="grid gap-1 py-3.5 text-[15px] leading-relaxed text-[#2A2E2C] transition-colors hover:bg-pine-50 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-x-8 sm:px-2"
          >
            <span>
              <span className="font-medium text-pine-950">{post.author}</span>
              {post.handle ? <span className="text-[#3F4743]"> ({post.handle})</span> : null}
              {", "}
              {post.summary}
            </span>
            <time
              dateTime={post.date}
              className="font-mono text-[12px] tracking-[0.08em] text-[#6B6B70] uppercase sm:text-right"
            >
              {formatNewsroomDate(post.date, "long")}
            </time>
          </a>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <h2 id={id} className="font-mono text-[13px] tracking-[0.24em] text-[#5F6B65] uppercase">
      {title}
    </h2>
  );
}

export default function NewsroomPage() {
  return (
    <article className="bg-white text-[#0B0B0C]">
      <section
        data-header-theme="dark"
        className="relative -mt-(--site-header-h) overflow-hidden bg-pine-glow text-mist [--glow-pos:70%_80%] [--glow-size:60%_70%]"
      >
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-6 pt-[calc(var(--site-header-h)+4rem)] pb-16 sm:px-8 sm:pt-[calc(var(--site-header-h)+5rem)] sm:pb-20">
          <Reveal>
            <h1 className="font-serif text-[clamp(44px,6vw,72px)] leading-[1.02] font-medium tracking-[-0.03em] text-mist">
              Newsroom
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-[640px] text-lg leading-relaxed text-mist/75">{description}</p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-16 px-6 py-16 sm:px-8 sm:py-20">
        <section aria-labelledby="newsroom-announcements" className="flex flex-col gap-6">
          <SectionHeading id="newsroom-announcements" title="Announcements" />
          <AnnouncementList items={newsroomAnnouncements} />
        </section>

        <section aria-labelledby="newsroom-news" className="flex flex-col gap-8">
          <SectionHeading id="newsroom-news" title="News" />
          <ArticleGrid articles={newsroomNews} />
          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-[28px] leading-tight font-medium text-pine-950">
              Also reported
            </h3>
            <ArticleGrid articles={newsroomAggregators} />
          </div>
        </section>

        <section aria-labelledby="newsroom-investor" className="flex flex-col gap-6">
          <SectionHeading id="newsroom-investor" title="Investor" />
          <ArticleGrid articles={newsroomInvestor} />
        </section>

        <section aria-labelledby="newsroom-social" className="flex flex-col gap-8">
          <SectionHeading id="newsroom-social" title="Social" />
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-[28px] leading-tight font-medium text-pine-950">LinkedIn</h3>
            <SocialList posts={newsroomLinkedIn} />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-[28px] leading-tight font-medium text-pine-950">X</h3>
            <SocialList posts={newsroomX} />
          </div>
        </section>
      </div>
    </article>
  );
}
