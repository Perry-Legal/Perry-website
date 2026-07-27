import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";

import { CopyEmailButton } from "@/components/copy-email-button";
import { Reveal } from "@/components/motion/reveal";
import { Separator } from "@/components/ui/separator";
import { careerRoles, getCareerRole, type CareerRole } from "@/lib/careers";

type CareerRolePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: CareerRolePageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = getCareerRole(slug);

  if (!role) {
    return { title: "Career" };
  }

  return {
    title: role.title,
    description: role.summary,
  };
}

function RoleSection({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-source-serif text-xl font-medium tracking-tight">
        {title}
      </h2>
      <div className="mt-4 space-y-3">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="text-sm leading-relaxed text-muted-foreground text-pretty"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function RoleListSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="mt-10">
      <h2 className="font-source-serif text-xl font-medium tracking-tight">
        {title}
      </h2>
      <ul className="mt-4 list-disc space-y-2.5 pl-5">
        {items.map((item) => (
          <li
            key={item.slice(0, 48)}
            className="text-sm leading-relaxed text-muted-foreground text-pretty"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ApplyBox({
  role,
  className,
}: {
  role: CareerRole;
  className?: string;
}) {
  return (
    <div
      className={
        className ?? "border border-border/60 bg-muted/30 px-6 py-5 sm:px-7"
      }
    >
      <p className="text-sm font-medium text-foreground">How to apply</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5">
        {role.applySteps.map((step) => (
          <li
            key={step}
            className="text-sm leading-relaxed text-muted-foreground text-pretty"
          >
            {step}
          </li>
        ))}
      </ul>
      <CopyEmailButton email={role.applyEmail} />
    </div>
  );
}

export default async function CareerRolePage({ params }: CareerRolePageProps) {
  const { slug } = await params;
  const role = getCareerRole(slug);

  if (!role) {
    notFound();
  }

  return (
    <div className="border-t border-border/60">
      <div className="section-container px-6 pt-12 pb-24 sm:pt-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/career"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            All roles
          </Link>

          <div className="mt-8">
            <h1 className="font-source-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              {role.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 shrink-0" aria-hidden />
                {role.location}
              </span>
              <span aria-hidden className="hidden text-border sm:inline">
                ·
              </span>
              <span>{role.type}</span>
              <span aria-hidden className="hidden text-border sm:inline">
                ·
              </span>
              <span>{role.compensation}</span>
            </div>

            <ApplyBox
              role={role}
              className="mt-8 border border-border/60 bg-muted/30 px-6 py-5 sm:px-7"
            />
          </div>

          <Separator className="my-8" />

          <RoleSection title="About Perry" paragraphs={role.about} />
          <RoleSection title="The role" paragraphs={role.theRole} />
          <RoleListSection title="What you'll do" items={role.whatYoullDo} />
          <RoleListSection title="Who you are" items={role.whoYouAre} />
          <RoleListSection title="Nice to have" items={role.niceToHave} />
          <RoleSection title="Why this role" paragraphs={role.whyThisRole} />

          <Reveal delay={0.1} y={12} className="mt-10">
            <ApplyBox
              role={role}
              className="border border-border/60 bg-muted/30 px-6 py-6 sm:px-8"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
