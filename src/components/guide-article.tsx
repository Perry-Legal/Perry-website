import Link from "next/link";

import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { StoryPageHero } from "@/components/story-page-hero";
import { guides, type Guide } from "@/lib/guides";
import { faqPageJsonLd } from "@/lib/structured-data";

export function GuideArticle({ guide }: { guide: Guide }) {
  const related = guides.filter((item) => item.path !== guide.path);

  return (
    <article className="border-t border-border/60">
      <JsonLd data={faqPageJsonLd(guide.question, guide.faqs)} />
      <StoryPageHero eyebrow="Guide" title={guide.question} description={guide.answer} />

      <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-16 sm:py-20">
        <section aria-labelledby="how-perry-helps">
          <h2
            id="how-perry-helps"
            className="font-source-serif text-3xl font-medium tracking-tight text-balance"
          >
            How Perry helps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {guide.explainer}
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {guide.points.map((point) => (
              <li key={point} className="flex gap-3 text-base leading-relaxed">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href={guide.productHref}
              className="text-base text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
            >
              {guide.productLabel}
            </Link>
          </p>
        </section>

        <section aria-labelledby="guide-faq">
          <h2
            id="guide-faq"
            className="font-source-serif text-3xl font-medium tracking-tight text-balance"
          >
            Common questions
          </h2>
          <div className="mt-8 flex flex-col gap-8">
            {guide.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-medium text-balance">{faq.question}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="related-guides">
          <h2 id="related-guides" className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Related guides
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {related.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="text-base text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                >
                  {item.question}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <CtaSection />
    </article>
  );
}
