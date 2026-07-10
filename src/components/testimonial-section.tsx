"use client";

import { useRef, useState } from "react";
import Image from "@/components/asset-image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Great to find a product that matched many known and unknown uses for us and a team so energised to help us fix our problems. Excited to watch your business grow.",
    name: "Max Neuberger",
    role: "General Counsel",
    firm: "Entrepreneurs First",
    avatarSrc: "/testimonials/max-neuberger.png",
  },
  {
    quote:
      "Something that would take a senior lawyer 30–45 minutes — or a junior two hours — Perry got the bulk of it done in 10 to 15 minutes. That's a remarkable time saving.",
    name: "Sarah Yen",
    role: "Deputy General Counsel",
    firm: "Entrepreneurs First",
    avatarSrc: "/testimonials/sarah-yen.jpg",
  },
  {
    quote:
      "From our early work with the Perry team, it's clear they have the product ambition and the domain understanding to build something important in this space. Perry's understanding of private equity deal structures and processes goes beyond template-filling — it helps in streamlining routine mechanics and frees the team to focus on the commercial judgement calls.",
    name: "Rohan Paliwal",
    role: "Senior Associate",
    firm: "Stakeboat Capital",
    avatarSrc: "/testimonials/rohan-paliwal.jpg",
  },
];

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <figure className="relative flex h-full min-h-[26rem] flex-col items-start overflow-hidden rounded-md bg-muted/60 p-8 text-left transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md sm:min-h-[28rem]">
      <span
        aria-hidden
        className="font-source-serif pointer-events-none absolute top-3 right-6 text-8xl leading-none text-foreground/[0.07] select-none"
      >
        &ldquo;
      </span>
      <blockquote className="relative flex flex-1 items-start text-lg font-base leading-relaxed text-foreground/80 text-pretty">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <Image
          src={item.avatarSrc}
          alt=""
          width={48}
          height={48}
          className="size-12 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="font-source-serif text-xl font-medium">{item.name}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {item.role} at {item.firm}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.min(Math.max(index, 0), testimonials.length - 1);
    const card = track.children[clamped] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    const first = track.children[0] as HTMLElement;
    const second = track.children[1] as HTMLElement | undefined;
    const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
    if (step <= 0) return;
    const index = Math.round(track.scrollLeft / step);
    setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
  };

  return (
    <section className="bg-white px-6 pt-32 pb-48">
      <div className="section-container">
        <Reveal className="max-w-3xl">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="mt-2 font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
            More words from legal teams who trust Perry.
          </h2>
        </Reveal>

        {/* Desktop: 3-up staggered grid */}
        <StaggerGroup
          stagger={0.1}
          className="mt-12 hidden md:grid md:grid-cols-3 md:gap-3"
        >
          {testimonials.map((item) => (
            <StaggerItem key={item.name} y={28}>
              <TestimonialCard item={item} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Mobile: scroll-snap carousel */}
        <div className="mt-12 md:hidden">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-6"
          >
            {testimonials.map((item) => (
              <div key={item.name} className="w-[85vw] max-w-md shrink-0 snap-center">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
            >
              <ChevronLeft className="size-5" strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-1.5" aria-hidden>
              {testimonials.map((item, index) => (
                <span
                  key={item.name}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === activeIndex ? "w-6 bg-foreground" : "w-1.5 bg-border",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
            >
              <ChevronRight className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
