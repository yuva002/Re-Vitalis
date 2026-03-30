import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tree-shake barrel packages at build time — reduces JS bundle for motion, icons, and Radix
    optimizePackageImports: [
      "motion",
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-slot",
    ],
  },
  images: {
    // Serve AVIF first (smallest), fall back to WebP — significant LCP bandwidth savings
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      // Needed for testimonial avatars served from Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
