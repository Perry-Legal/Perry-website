import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
};

export function SectionEyebrow({
  children,
  align = "left",
  onDark = false,
  className,
}: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase",
        align === "center" && "justify-center",
        onDark ? "text-white/60" : "text-muted-foreground",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
      {children}
    </p>
  );
}
