import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.re-vitalis.in"),
  title: {
    default: "Re-Vitalis Wellness | IV Therapy, Nutraceuticals & Metabolic Recovery",
    template: "%s | Re-Vitalis Wellness",
  },
  description:
    "Re-Vitalis offers personalized IV therapy, clinical nutraceuticals, and metabolic recovery programs. Science-led wellness care that restores energy, vitality, and long-term health.",
  keywords: [
    "IV therapy",
    "metabolic recovery",
    "nutraceuticals",
    "wellness clinic",
    "precision medicine",
    "functional medicine",
    "biomarker testing",
    "personalized wellness",
    "Re-Vitalis",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.re-vitalis.in",
  },
  openGraph: {
    type: "website",
    title: "Re-Vitalis Wellness | IV Therapy, Nutraceuticals & Metabolic Recovery",
    description:
      "Re-Vitalis offers personalized IV therapy, clinical nutraceuticals, and metabolic recovery programs. Science-led wellness care that restores energy, vitality, and long-term health.",
    siteName: "Re-Vitalis Wellness",
    locale: "en_US",
    url: "https://www.re-vitalis.in",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Re-Vitalis Wellness — Precision-led metabolic and IV therapy clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Re-Vitalis Wellness | IV Therapy, Nutraceuticals & Metabolic Recovery",
    description:
      "Re-Vitalis offers personalized IV therapy, clinical nutraceuticals, and metabolic recovery programs. Science-led wellness care that restores energy, vitality, and long-term health.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body
        className="min-h-full flex flex-col"
        style={{
          // Fonts per brand guide:
          // - Display: Agatho (user can add local font files later if needed)
          // - Body: Century Gothic (widely available on Windows; fallbacks provided)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ["--font-display" as any]: `"Agatho", ui-serif, Georgia, "Times New Roman", serif`,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ["--font-body" as any]: `"Century Gothic", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial`,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ["--font-mono" as any]: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New"`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
