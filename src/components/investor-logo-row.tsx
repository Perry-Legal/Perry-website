import Image from "@/components/asset-image";
import { seedInvestors } from "@/lib/seed-announcement";
import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";

/** Per-logo heights tuned so the four marks read at the same optical weight. */
const heights: Record<LogoSize, Record<keyof typeof seedInvestors, string>> = {
  sm: { haatch: "h-6", antler: "h-[18px]", araya: "h-8", syncorp: "h-[15px]" },
  md: { haatch: "h-8 sm:h-10", antler: "h-6 sm:h-[30px]", araya: "h-11 sm:h-[54px]", syncorp: "h-5 sm:h-[26px]" },
  lg: { haatch: "h-10 sm:h-[52px]", antler: "h-[30px] sm:h-10", araya: "h-14 sm:h-[70px]", syncorp: "h-[26px] sm:h-[34px]" },
};

type InvestorLogoRowProps = {
  size?: LogoSize;
  /** Render the white logos black, for light backgrounds. */
  onLight?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function InvestorLogoRow({
  size = "md",
  onLight = false,
  className,
  children,
}: InvestorLogoRowProps) {
  return (
    <ul
      className={cn("flex flex-wrap items-center justify-between", className)}
      aria-label="Investors"
    >
      {(Object.keys(seedInvestors) as (keyof typeof seedInvestors)[]).map((key) => {
        const logo = seedInvestors[key];
        return (
          <li key={key} className="shrink-0">
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className={cn("w-auto", heights[size][key], onLight && "brightness-0")}
            />
          </li>
        );
      })}
      {children}
    </ul>
  );
}
