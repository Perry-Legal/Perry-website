import type { LegalBlock } from "@/lib/legal-content";

type LegalDocumentProps = {
  blocks: LegalBlock[];
};

function isSectionHeading(text: string): boolean {
  return /^\d+\.\s/.test(text) || /^Appendix\b/i.test(text);
}

export function LegalDocument({ blocks }: LegalDocumentProps) {
  const contentBlocks = blocks.filter((block) => block.type !== "h1");
  const listItems: string[] = [];
  const elements: React.ReactNode[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    elements.push(
      <ul key={`list-${elements.length}`} className="mt-3 list-disc space-y-2 pl-5">
        {listItems.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>,
    );
    listItems.length = 0;
  };

  for (const block of contentBlocks) {
    if (block.type === "li") {
      listItems.push(block.text);
      continue;
    }

    flushList();

    if (block.type === "h2") {
      elements.push(
        <h2
          key={`${block.type}-${elements.length}-${block.text}`}
          className="mt-10 font-source-serif text-xl font-medium tracking-tight first:mt-0"
        >
          {block.text}
        </h2>,
      );
      continue;
    }

    if (block.type === "h3" || block.type === "h4") {
      elements.push(
        <h3
          key={`${block.type}-${elements.length}-${block.text}`}
          className="mt-8 text-base font-medium tracking-tight"
        >
          {block.text}
        </h3>,
      );
      continue;
    }

    if (isSectionHeading(block.text)) {
      elements.push(
        <h2
          key={`section-${elements.length}-${block.text}`}
          className="mt-10 font-source-serif text-xl font-medium tracking-tight first:mt-0"
        >
          {block.text}
        </h2>,
      );
      continue;
    }

    elements.push(
      <p
        key={`p-${elements.length}-${block.text.slice(0, 40)}`}
        className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty"
      >
        {block.text}
      </p>,
    );
  }

  flushList();

  return <article className="mx-auto max-w-3xl">{elements}</article>;
}
