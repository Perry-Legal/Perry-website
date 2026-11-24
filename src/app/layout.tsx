import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";

import { withBasePath } from "@/lib/base-path";
import {
  defaultOgImage,
  siteDescription,
  siteLocale,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/site-metadata";

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

export const viewport: Viewport = {
  themeColor: "#0a110e",
};

// No root `alternates.canonical`: it would be inherited by any page that forgot
// its own and point it at the homepage. Pages set theirs via `pageMetadata`.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: siteName, url: `${siteUrl}/` }],
  creator: siteName,
  publisher: siteName,
  formatDetection: { telephone: false, address: false, email: false },
  // Preview directives only: index/follow is the default, and leaving it out
  // keeps it from clashing with the 404's automatic noindex.
  robots: {
    googleBot: {
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName,
    locale: siteLocale,
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage.url],
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
      <body className="flex min-h-svh flex-col selection:bg-selection">{children}</body>
    </html>
  );
}
