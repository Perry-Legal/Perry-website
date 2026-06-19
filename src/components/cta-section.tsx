import Image from "@/components/asset-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="contact" className="px-6 pb-24">
      <div className="relative mx-auto max-w-8xl overflow-hidden rounded-2xl border border-border shadow-sm">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src="/images/cta/jaanus-jagomagi-unsplash.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.25)_0%,transparent_45%,rgb(0_0_0/0.35)_100%)]" />
        </div>

        <div className="relative px-8 py-16 text-center text-white sm:px-16 sm:py-20">
          <h2 className="font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Ready to build with Perry?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80 text-pretty">
            Tell us about your company and we&apos;ll help you get started with a site
            that reflects your brand and converts visitors into customers.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90"
              render={<Link href="mailto:hello@perry.com" />}
            >
              Book demo
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/80 bg-transparent text-white hover:bg-white/10 hover:text-white"
              render={<Link href="/#platform" />}
            >
              View product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
