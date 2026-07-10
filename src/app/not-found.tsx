import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MotionProvider } from "@/components/motion/motion-provider";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { bookDemoUrl } from "@/lib/navigation";

export default function NotFound() {
  return (
    <MotionProvider>
      <SiteHeader />
      <main className="flex min-w-0 flex-1 items-center justify-center pt-16 selection:bg-selection">
        <section className="relative w-full overflow-hidden px-6 py-24 sm:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
          />
          <StaggerGroup className="section-container relative flex flex-col items-center text-center">
            <StaggerItem y={24}>
              <p className="font-source-serif text-[8rem] font-medium leading-none tracking-tight sm:text-[11rem]">
                404
              </p>
            </StaggerItem>
            <StaggerItem y={16}>
              <h1 className="mt-4 font-source-serif text-2xl font-medium tracking-tight text-balance sm:text-3xl">
                This page seems to have exited.
              </h1>
            </StaggerItem>
            <StaggerItem y={16}>
              <p className="mt-3 max-w-md text-muted-foreground text-pretty">
                The page you&apos;re looking for doesn&apos;t exist or has moved.
                Let&apos;s get you back on track.
              </p>
            </StaggerItem>
            <StaggerItem
              y={16}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <Button size="lg" className="btn-shine" render={<Link href="/" />}>
                Back to home
              </Button>
              <Button
                size="lg"
                variant="outline"
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
            </StaggerItem>
          </StaggerGroup>
        </section>
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}
