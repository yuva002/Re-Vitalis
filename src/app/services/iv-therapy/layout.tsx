import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced IV Drip Therapy | Targeted Nutrient Infusions",
  description:
    "Re-Vitalis IV therapy delivers vitamins, minerals, and amino acids directly into your bloodstream — achieving up to 100% bioavailability for faster energy recovery and cellular repair.",
  keywords: [
    "IV therapy",
    "IV drip",
    "intravenous therapy",
    "vitamin infusion",
    "nutrient IV",
    "energy IV drip",
    "wellness IV therapy India",
  ],
  alternates: {
    canonical: "https://www.re-vitalis.in/services/iv-therapy",
  },
  openGraph: {
    title: "Advanced IV Drip Therapy in India | Re-Vitalis Wellness",
    description:
      "Re-Vitalis IV therapy delivers vitamins, minerals, and amino acids directly into your bloodstream — achieving up to 100% bioavailability for faster energy recovery and cellular repair.",
    url: "https://www.re-vitalis.in/services/iv-therapy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Advanced IV Drip Therapy at Re-Vitalis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced IV Drip Therapy in India | Re-Vitalis Wellness",
    description:
      "Re-Vitalis IV therapy delivers vitamins, minerals, and amino acids directly into your bloodstream — achieving up to 100% bioavailability for faster energy recovery and cellular repair.",
  },
};

export default function IVTherapyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
