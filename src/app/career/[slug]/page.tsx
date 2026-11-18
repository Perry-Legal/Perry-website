import type { Metadata } from "next";

import { LegacyRedirect } from "@/components/legacy-redirect";
import { careerRoles } from "@/lib/careers";

export const dynamicParams = false;

export function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}

export const metadata: Metadata = {
  title: "Careers",
  robots: { index: false },
};

/** Old role URLs (/career/<slug>) forward to /careers/<slug>. */
export default async function LegacyCareerRolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <LegacyRedirect to={`/careers/${slug}/`} />;
}
