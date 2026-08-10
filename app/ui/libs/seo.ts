import type { Metadata } from "next";

const SITE_URL = "https://www.trubotai.com";
const SITE_NAME = "TruBot AI";
const DEFAULT_OG_IMAGE = "/images/og-image.png";
const DEFAULT_OG_IMAGE_ALT = "TruBot AI Open Graph Image";
const TWITTER_HANDLE = "@trubotai";

export type CreateSEOOptions = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "product" | "profile";
};

export function createSEO({
  title,
  description,
  keywords,
  path = "",
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
  type = "website",
}: CreateSEOOptions): Metadata {
  const canonical = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/+$/, "");

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          alt: imageAlt,
          width: 1200,
          height: 630,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
    },
    alternates: {
      canonical,
    },
  };
}
