import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Nutraceuticals & Targeted Supplement Protocols",
  description:
    "Evidence-based nutraceutical protocols at Re-Vitalis — personalized to your biomarker profile for metabolic optimization, hormonal balance, gut health, and cellular resilience.",
  keywords: [
    "nutraceuticals",
    "clinical supplements",
    "targeted supplement protocols",
    "metabolic optimization",
    "hormonal balance",
    "gut health supplements",
    "biomarker-based supplements",
    "wellness nutraceuticals India",
  ],
  alternates: {
    canonical: "https://www.re-vitalis.in/services/nutraceuticals",
  },
  openGraph: {
    title: "Clinical Nutraceuticals & Supplement Protocols | Re-Vitalis",
    description:
      "Evidence-based nutraceutical protocols at Re-Vitalis — personalized to your biomarker profile for metabolic optimization, hormonal balance, gut health, and cellular resilience.",
    url: "https://www.re-vitalis.in/services/nutraceuticals",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clinical Nutraceuticals at Re-Vitalis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Nutraceuticals & Supplement Protocols | Re-Vitalis",
    description:
      "Evidence-based nutraceutical protocols at Re-Vitalis — personalized to your biomarker profile for metabolic optimization, hormonal balance, gut health, and cellular resilience.",
  },
};

export default function NutraceuticalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
