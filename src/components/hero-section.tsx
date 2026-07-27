"use client";

import Image from "@/components/asset-image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useCallback, useRef, useState } from "react";

import { ClientBanner } from "@/components/client-banner";
import { HeadlineReveal } from "@/components/motion/headline-reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { withBasePath } from "@/lib/base-path";
import { DUR, EASE_OUT } from "@/lib/motion";
import { bookDemoUrl } from "@/lib/navigation";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const platformVideoRef = useRef<HTMLVideoElement>(null);
  const [platformVideoOpen, setPlatformVideoOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -48]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const handlePlatformVideoOpenChange = useCallback((open: boolean) => {
    setPlatformVideoOpen(open);

    const video = platformVideoRef.current;
    if (!video) return;

    if (open) {
      // Play in the same user-gesture turn so unmuted autoplay is allowed.
      void video.play().catch(() => {});
      return;
    }

    video.pause();
    video.currentTime = 0;
  }, []);

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="relative isolate -mt-16 min-h-[max(100svh,42.5rem)] overflow-hidden md:min-h-svh"
    >
      <m.div
        aria-hidden
        className="absolute inset-x-0 -inset-y-24 -z-20"
        style={reducedMotion ? undefined : { y: videoY }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE_OUT }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="size-full object-cover object-center"
        >
          <source src={withBasePath("/videos/hero/hero.mp4")} type="video/mp4" />
        </video>
      </m.div>
      <m.div
        aria-hidden
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-emerald-950/12" />
        <div className="absolute inset-0 bg-black/40" />
      </m.div>

      <div className="section-container flex min-h-[max(100svh,42.5rem)] flex-col px-6 pb-12 pt-24 md:min-h-svh">
        <div className="flex flex-1 items-center">
          <m.div
            className="w-full text-left"
            style={reducedMotion ? undefined : { opacity: contentOpacity, y: contentY }}
          >
            <Link href="/" className="mb-6 inline-flex md:hidden">
              <Image
                src="/perry-logo-white.png"
                alt="Perry"
                width={1419}
                height={384}
                priority
                className="h-6 w-auto"
              />
            </Link>
            <HeadlineReveal
              as="h1"
              inView={false}
              delay={0.2}
              lines={["The Legal OS", "for Private Capital"]}
              className="font-source-serif text-5xl font-medium tracking-tight text-balance text-white sm:text-6xl md:text-7xl xl:text-8xl"
            />

            <m.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.base, delay: 0.55, ease: EASE_OUT }}
              className="mt-6 max-w-xl text-medium text-white/90 text-pretty sm:text-lg"
            >
              The AI operating layer for legal work across the fund lifecycle -
              formation, deal execution, and portfolio governance, in one
              platform built for private capital.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.base, delay: 0.7, ease: EASE_OUT }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
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
                Book a demo
                <ArrowRight />
              </Button>

              <Dialog
                open={platformVideoOpen}
                onOpenChange={handlePlatformVideoOpenChange}
              >
                <DialogTrigger
                  render={
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/35 bg-white/5 text-white hover:bg-white/12 hover:text-white"
                    />
                  }
                >
                  Watch video
                  <Play className="size-3 fill-current" />
                </DialogTrigger>
                <DialogContent
                  keepMounted
                  showCloseButton={false}
                  overlayClassName="bg-black/80 supports-backdrop-filter:backdrop-blur-sm"
                  className="max-w-[calc(100%-2rem)] gap-0 overflow-hidden rounded-2xl border-0 bg-black p-0 ring-0 sm:max-w-5xl"
                >
                  <DialogTitle className="sr-only">
                    Perry platform overview
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Video walkthrough of the Perry platform.
                  </DialogDescription>
                  <DialogClose
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="absolute top-3 right-3 z-10 bg-black/40 text-white hover:bg-black/60 hover:text-white"
                      />
                    }
                  >
                    <X />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                  <video
                    ref={platformVideoRef}
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full bg-black"
                  >
                    <source
                      src={withBasePath("/videos/platform-intro.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </DialogContent>
              </Dialog>
            </m.div>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DUR.slow, delay: 0.95 }}
        >
          <ClientBanner embedded variant="hero" />
        </m.div>
      </div>
    </section>
  );
}
