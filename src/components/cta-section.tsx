import Image from "@/components/asset-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Parallax } from "@/components/motion/parallax";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { bookDemoUrl } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  className?: string;
  id?: string;
  imageSrc?: string;
  title?: string;
  description?: string;
};

const defaultTitle = "Run your fund's legal work from one connected platform.";
const defaultDescription =
  "Book a demo to see how Perry helps in-house teams unify fund formation, deal execution, and portfolio governance.";
const defaultImageSrc = "/images/cta/jaanus-jagomagi-unsplash.jpg";

export function CtaSection({
  className,
  id = "contact",
  imageSrc = defaultImageSrc,
  title = defaultTitle,
  description = defaultDescription,
}: CtaSectionProps) {
  return (
    <section id={id} className={cn("px-6 pb-24", className)}>
      <div className="group relative mx-auto h-[260px] max-w-8xl overflow-hidden rounded-sm border border-border shadow-sm sm:h-[340px] md:h-[400px]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Parallax range={[-30, 30]} className="absolute inset-x-0 -inset-y-10">
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </Parallax>
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.25)_0%,transparent_45%,rgb(0_0_0/0.35)_100%)]" />
        </div>

        <StaggerGroup className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white sm:px-16">
          <StaggerItem y={16}>
            <h2 className="font-source-serif text-2xl font-medium tracking-tight text-balance sm:text-3xl md:text-4xl">
              {title}
            </h2>
          </StaggerItem>
          <StaggerItem y={16}>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white/80 text-pretty sm:mt-4 sm:text-base">
              {description}
            </p>
          </StaggerItem>
          <StaggerItem y={16} className="mt-4 flex justify-center sm:mt-8">
            <Button
              size="lg"
              className="btn-shine bg-white text-black hover:bg-white/90"
              render={
                <Link
                  href={bookDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Book demo
              <ArrowRight />
            </Button>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
