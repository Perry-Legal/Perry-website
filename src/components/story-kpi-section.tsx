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
};

const MAX_KPIS = 4;

export function StoryKpiSection({
  kpis,
  title = "Delivering value at scale",
  className,
}: StoryKpiSectionProps) {
  const displayKpis = kpis.slice(0, MAX_KPIS);
  if (displayKpis.length === 0) return null;

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
          {displayKpis.map((kpi) => {
            const { metric, description } = parseKpi(kpi);
            const metricValue = metric ? parseInt(metric, 10) : undefined;

            return (
              <StaggerItem key={kpi} y={24} className="py-10 first:pt-0 last:pb-0">
                {metric && metricValue !== undefined && !Number.isNaN(metricValue) ? (
                  <>
                    <p className="font-source-serif text-5xl font-medium tracking-tight sm:text-6xl">
                      <CountUp to={metricValue} suffix="%" />
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground lowercase text-pretty">
                      {description}
                    </p>
                  </>
                ) : (
                  <p className="text-sm leading-relaxed text-foreground lowercase text-pretty">
                    {description}
                  </p>
                )}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
