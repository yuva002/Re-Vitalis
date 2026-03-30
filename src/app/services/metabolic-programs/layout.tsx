import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metabolic Recovery Programs | Biomarker-Led Health Transformation",
  description:
    "Re-Vitalis metabolic recovery programs combine comprehensive biomarker testing, IV therapy, nutrition coaching, and lifestyle medicine to restore energy, metabolism, and long-term vitality.",
  keywords: [
    "metabolic recovery",
    "metabolic program",
    "metabolic health",
    "biomarker testing",
    "metabolic syndrome",
    "weight loss program",
    "functional medicine program",
    "precision health India",
  ],
  alternates: {
    canonical: "https://www.re-vitalis.in/services/metabolic-programs",
  },
  openGraph: {
    title: "Metabolic Recovery Programs | Biomarker-Led Wellness | Re-Vitalis",
    description:
      "Re-Vitalis metabolic recovery programs combine comprehensive biomarker testing, IV therapy, nutrition coaching, and lifestyle medicine to restore energy, metabolism, and long-term vitality.",
    url: "https://www.re-vitalis.in/services/metabolic-programs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metabolic Recovery Programs at Re-Vitalis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metabolic Recovery Programs | Biomarker-Led Wellness | Re-Vitalis",
    description:
      "Re-Vitalis metabolic recovery programs combine comprehensive biomarker testing, IV therapy, nutrition coaching, and lifestyle medicine to restore energy, metabolism, and long-term vitality.",
  },
};

export default function MetabolicProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
