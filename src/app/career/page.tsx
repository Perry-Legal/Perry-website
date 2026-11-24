import type { Metadata } from "next";

import { LegacyRedirect } from "@/components/legacy-redirect";

export const metadata: Metadata = {
  title: "Careers",
  robots: { index: false, follow: true },
};

/** Old URL: the careers page moved to /careers. */
export default function LegacyCareerPage() {
  return <LegacyRedirect to="/careers/" />;
}
