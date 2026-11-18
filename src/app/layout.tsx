import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { withBasePath } from "@/lib/base-path";
import { siteGraphJsonLd } from "@/lib/structured-data";
import { defaultOgImage, siteDescription, siteName, siteUrl } from "@/lib/site-metadata";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Perry - The Legal OS for Private Capital",
    template: "%s | Perry",
  },
  description: siteDescription,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title: "Perry - The Legal OS for Private Capital",
    description: siteDescription,
    url: `${siteUrl}/`,
    siteName,
    type: "website",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perry - The Legal OS for Private Capital",
    description: siteDescription,
    images: [defaultOgImage],
  },
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico"), sizes: "any" },
      { url: withBasePath("/icon.png"), type: "image/png" },
    ],
    apple: withBasePath("/apple-icon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased selection:bg-selection`}
    >
      <body className="flex min-h-svh flex-col selection:bg-selection">
        <JsonLd data={siteGraphJsonLd()} />
        {children}
      </body>
    </html>
  );
}
