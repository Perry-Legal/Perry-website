import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { cn } from "@/lib/utils";

type ParsedKpi = {
  metric?: string;
  description: string;
};

function parseKpi(text: string): ParsedKpi {
  const leadingPercent = text.match(/^(\d+%)\s+(.+)$/);
  if (leadingPercent) {
    return {
      metric: leadingPercent[1],
      description: leadingPercent[2],
    };
  }

  const trailingByPercent = text.match(/^(.+?)\s+by\s+(\d+%)$/i);
  if (trailingByPercent) {
    return {
      metric: trailingByPercent[2],
      description: trailingByPercent[1].trim(),
    };
  }

  return { description: text };
}

type StoryKpiSectionProps = {
  kpis: string[];
  title?: string;
  className?: string;
  layout?: "stack" | "row";
};

const MAX_KPIS = 4;

function KpiItem({
  kpi,
  compact,
}: {
  kpi: string;
  compact?: boolean;
}) {
  const { metric, description } = parseKpi(kpi);
  const metricValue = metric ? parseInt(metric, 10) : undefined;
  const hasMetric = metric && metricValue !== undefined && !Number.isNaN(metricValue);

  return (
    <>
      {hasMetric ? (
        <>
          <p
            className={cn(
              "font-source-serif font-medium tracking-tight",
              compact ? "text-3xl sm:text-4xl" : "text-5xl sm:text-6xl",
            )}
          >
            <CountUp to={metricValue} suffix="%" />
          </p>
          <p
            className={cn(
              "leading-relaxed lowercase text-pretty",
              compact
                ? "mt-2 text-xs text-muted-foreground sm:text-sm"
                : "mt-3 text-sm text-foreground",
            )}
          >
            {description}
          </p>
        </>
      ) : (
        <p
          className={cn(
            "leading-relaxed text-foreground lowercase text-pretty",
            compact ? "text-xs sm:text-sm" : "text-sm",
          )}
        >
          {description}
        </p>
      )}
    </>
  );
}

export function StoryKpiSection({
  kpis,
  title = "Delivering value at scale",
  className,
  layout = "stack",
}: StoryKpiSectionProps) {
  const displayKpis = kpis.slice(0, MAX_KPIS);
  if (displayKpis.length === 0) return null;

  if (layout === "row") {
    return (
      <section
        className={cn("bg-muted/30 px-6 py-10 sm:py-12", className)}
      >
        <div className="section-container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg font-medium tracking-tight text-balance sm:text-xl">
              {title}
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {displayKpis.map((kpi) => (
              <div
                key={kpi}
                className="lg:border-l lg:border-border/80 lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
              >
                <KpiItem kpi={kpi} compact />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn("border-b border-border/60 bg-muted/30 px-6 py-20 sm:py-24", className)}
    >
      <div className="section-container grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-16 xl:gap-24">
        <Reveal>
          <h2 className="max-w-sm text-xl font-medium tracking-tight text-balance sm:text-2xl">
            {title}
          </h2>
        </Reveal>

        <StaggerGroup stagger={0.1} className="divide-y divide-border/80">
          {displayKpis.map((kpi) => (
            <StaggerItem key={kpi} y={24} className="py-10 first:pt-0 last:pb-0">
              <KpiItem kpi={kpi} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
