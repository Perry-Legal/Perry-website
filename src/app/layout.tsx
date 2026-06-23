import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";

import { withBasePath } from "@/lib/base-path";

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
  title: {
    default: "Perry - The Legal OS for Private Capital",
    template: "%s | Perry",
  },
  description:
    "Perry helps your team launch faster, communicate clearly, and scale without the operational overhead.",
  openGraph: {
    title: "Perry - The Legal OS for Private Capital",
    description:
      "Perry helps your team launch faster, communicate clearly, and scale without the operational overhead.",
    type: "website",
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
