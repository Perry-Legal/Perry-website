import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { InvestorLogoRow } from "@/components/investor-logo-row";
import { seedAnnouncement } from "@/lib/seed-announcement";
import { cn } from "@/lib/utils";

export function SeedHeroCard({ className }: { className?: string }) {
  return (
    <Link
      href={seedAnnouncement.pressPagePath}
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-mint/28 bg-pine-950/40 p-6 text-mist shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-colors duration-300 hover:border-mint/50 sm:p-7",
        className,
      )}
    >
      <p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.24em] text-mint uppercase">
        <span
          aria-hidden
          className="size-2 rounded-full bg-mint shadow-[0_0_0_5px_rgba(111,227,162,0.16)]"
        />
        Just announced
      </p>

      <div className="flex items-end gap-4">
        <span className="font-serif text-[72px] leading-[0.9] font-medium tracking-[-3px] sm:text-[96px]">
          $2.2m
        </span>
        <span className="pb-2 text-[15px] leading-[1.35] text-mist/75">
          seed round
          <br />
          led by Haatch
        </span>
      </div>

      <InvestorLogoRow
        size="sm"
        className="gap-x-4 gap-y-[18px] border-y border-white/12 py-[18px]"
      />

      <span className="flex min-h-[46px] items-center justify-between rounded-[10px] bg-white px-[18px] text-[15px] font-semibold text-pine-950">
        Read the announcement
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
