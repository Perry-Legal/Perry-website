"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { seedAnnouncement } from "@/lib/seed-announcement";
import { cn } from "@/lib/utils";

type AnnouncementBarProps = {
  /** Collapse once the page has scrolled, so only the nav row stays pinned. */
  collapsed?: boolean;
};

export function AnnouncementBar({ collapsed = false }: AnnouncementBarProps) {
  const pathname = usePathname();
  const onPressPage = pathname?.replace(/\/$/, "") === seedAnnouncement.pressPagePath;

  if (!seedAnnouncement.showOnHomepage || onPressPage) return null;

  return (
    <div
      data-announcement-bar
      className={cn(
        "grid transition-[grid-template-rows] duration-300 ease-out",
        collapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
      )}
    >
      <div className="overflow-hidden">
        <Link
          href={seedAnnouncement.pressPagePath}
          tabIndex={collapsed ? -1 : undefined}
          aria-hidden={collapsed || undefined}
          className="flex h-(--announcement-h) flex-wrap content-center items-center justify-center gap-x-3.5 gap-y-0.5 bg-pine-900 px-4 text-center text-[13px] leading-snug text-mist transition-colors hover:bg-[#124632] sm:text-sm"
        >
          <span className="inline-flex items-center gap-2.5">
            <span aria-hidden className="size-[7px] shrink-0 rounded-full bg-mint" />
            <span>
              Perry raises a <strong className="font-semibold">$2.2m seed round</strong>, led by
              Haatch
            </span>
          </span>
          <span className="text-white underline underline-offset-[3px]">
            Read the announcement →
          </span>
        </Link>
      </div>
    </div>
  );
}
