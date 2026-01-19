import { Sora, Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata = {
  title: "TruBot AI – AI Automation for Modern Teams",
  description:
    "Chatbots, voicebots, and AI agents tailored for modern business workflows. Discover TruBot AI today.",
  keywords: [
    "AI Chatbots",
    "AI Voicebots",
    "Customer Automation",
    "Workflow Automation",
    "TruBot AI",
    "Business AI",
  ],
  openGraph: {
    title: "TruBot AI – AI Automation for Modern Teams",
    description:
      "Explore TruBot AI — Chatbots, voice automation, and AI agents built for fast-growing teams.",
    url: "https://www.trubotai.com",
    siteName: "TruBot AI",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TruBot AI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TruBot AI – AI Automation for Modern Teams",
    description:
      "Explore TruBot AI — Chatbots, voice automation, and AI agents built for fast-growing teams.",
    images: ["/images/og-image.png"],
    site: "@trubotai",
    creator: "@trubotai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body
        className={`${sora.className} ${montserrat.className} bg-light text-navy font-body`}
      >
        <Header />
        <main aria-label="Main content area">{children}</main>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
