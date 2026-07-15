import { HeadlineReveal } from "@/components/motion/headline-reveal";
import { Reveal } from "@/components/motion/reveal";

type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
      <HeadlineReveal
        as="h1"
        lines={[title]}
        className="font-source-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
      />
      <Reveal delay={0.15} y={16}>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">{description}</p>
      </Reveal>
    </div>
  );
}
