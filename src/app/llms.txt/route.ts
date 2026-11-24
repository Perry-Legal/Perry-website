import { careerRoles } from "@/lib/careers";
import { fundPage } from "@/lib/fund-page";
import { lawPage } from "@/lib/law-page";
import { legalPages } from "@/lib/legal-pages";
import { productLifecycle } from "@/lib/product-navigation";
import { seedAnnouncement } from "@/lib/seed-announcement";
import { absoluteUrl, siteDescription, siteName } from "@/lib/site-metadata";

export const dynamic = "force-static";

/**
 * /llms.txt (https://llmstxt.org): a plain-language map of the site for AI
 * assistants and answer engines. Built from the same copy the pages use.
 */
export function GET() {
  const link = (label: string, path: string, note: string) =>
    `- [${label}](${absoluteUrl(path)}): ${note}`;

  const body = [
    `# ${siteName}`,
    "",
    `> ${siteName} is the Legal OS for Private Capital. ${siteDescription}`,
    "",
    "Perry AI is built by Photosynth AI Limited, a London-based company (UK company number 16379930). Contact: info@useperry.com.",
    "",
    "## Who it's for",
    "",
    link(lawPage.eyebrow, "/law", lawPage.description),
    link(fundPage.eyebrow, "/fund", fundPage.description),
    "",
    "## Product",
    "",
    ...productLifecycle.map((stage) =>
      link(stage.label, `/product/${stage.slug}`, `${stage.headline}. ${stage.description}`),
    ),
    "",
    "## Company",
    "",
    link(
      "About",
      "/about",
      "Perry is built by private capital lawyers who spent years inside firms and fund teams, and built the platform they wished they had.",
    ),
    link("Newsroom", "/newsroom", "News, commentary and posts about Perry."),
    link(
      "Perry AI raises $2.2M seed funding",
      seedAnnouncement.pressPagePath,
      "Oversubscribed seed round led by Haatch alongside Antler, Arāya Ventures, Syncorp Ventures, and other US and international investors.",
    ),
    link(
      "Careers",
      "/careers",
      "Open roles for lawyers and builders encoding private capital expertise into agentic legal infrastructure.",
    ),
    ...careerRoles.map((role) => link(role.title, `/careers/${role.slug}`, role.summary)),
    "",
    "## Optional",
    "",
    ...legalPages.map((page) => link(page.title, page.href, `${page.title} for Perry AI.`)),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
