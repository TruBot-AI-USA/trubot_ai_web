import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Allow external images from Unsplash
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // 2. Your existing redirects
  async redirects() {
    return [
      {
        source: "/products/ai-social-media-suite",
        destination: "/products/trusocial",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
