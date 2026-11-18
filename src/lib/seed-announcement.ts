/**
 * Seed-round announcement (embargoed until 00:01 GMT, 18 Nov 2026).
 *
 * `showOnHomepage` drives the site-wide announcement bar, the hero card and the
 * "$2.2m" homepage section. Flip it to false 6–8 weeks after launch to remove
 * them; the press page at `pressPagePath` stays up regardless.
 */
export const seedAnnouncement = {
  showOnHomepage: true,
  pressPagePath: "/news/seed-round",
  pressKitPath: "/news/seed-round/perry-press-kit.zip",
  foundersImage: "/images/news/founders-side-by-side.jpg",
  canonicalUrl: "https://useperry.com/news/seed-round/",
  ogImageUrl: "https://useperry.com/news/seed-round/og-image.png",
  dateLabel: "18 November 2026",
  publishedTime: "2026-11-18T00:01:00Z",
  announcementVideo: "/videos/perry-seed-announcement.mp4",
  announcementVideoPoster: "/videos/perry-seed-announcement-poster.jpg",
} as const;

export const seedAnnouncementVideoLabel = "Perry seed funding announcement video";

export type InvestorLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

/** Lead first. Logos are white; use `brightness-0` on light backgrounds. */
export const seedInvestors = {
  haatch: { name: "Haatch", src: "/images/investors/haatch.png", width: 212, height: 65 },
  antler: { name: "Antler", src: "/images/investors/antler.svg", width: 117, height: 28 },
  araya: { name: "Arāya Ventures", src: "/images/investors/araya.png", width: 400, height: 215 },
  syncorp: { name: "Syncorp Ventures", src: "/images/investors/syncorp.png", width: 234, height: 38 },
} as const satisfies Record<string, InvestorLogo>;
