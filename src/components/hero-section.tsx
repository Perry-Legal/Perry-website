import Image from "@/components/asset-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ClientBanner } from "@/components/client-banner";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/base-path";
import { bookDemoUrl } from "@/lib/navigation";

export function HeroSection() {
  return (
    <section
      data-header-theme="dark"
      className="relative isolate -mt-16 min-h-[max(100svh,42.5rem)] overflow-hidden md:min-h-svh"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      >
        <source src={withBasePath("/videos/hero/hero.mp4")} type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-emerald-950/12"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-black/40"
      />

      <div className="section-container flex min-h-[max(100svh,42.5rem)] flex-col px-6 pb-12 pt-24 md:min-h-svh">
        <div className="flex flex-1 items-center">
          <div className="w-full text-left">
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
            <h1 className="font-source-serif text-5xl font-medium tracking-tight text-balance text-white sm:text-6xl md:text-7xl">
              The Legal OS
              <br />
              for Private Capital
            </h1>

            <p className="mt-6 max-w-xl text-medium text-white/90 text-pretty sm:text-lg">
              The operating layer for legal work across the fund lifecycle -
              formation, deal execution, and portfolio governance, in one
              platform built for private capital.
            </p>

            <div className="mt-10">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
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
            </div>
          </div>
        </div>

        <ClientBanner embedded variant="hero" />
      </div>
    </section>
  );
}
