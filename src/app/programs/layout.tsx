import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive Health Programs | Personalized Wellness Journeys",
  description:
    "Explore Re-Vitalis's comprehensive health programs — built on precision medicine, biomarker testing, personalized nutrition, and expert clinical guidance for lasting metabolic transformation.",
  alternates: {
    canonical: "https://www.re-vitalis.in/programs",
  },
  openGraph: {
    title: "Comprehensive Health Programs | Re-Vitalis Wellness",
    description:
      "Explore Re-Vitalis's comprehensive health programs — built on precision medicine, biomarker testing, personalized nutrition, and expert clinical guidance for lasting metabolic transformation.",
    url: "https://www.re-vitalis.in/programs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Re-Vitalis Comprehensive Health Programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Health Programs | Re-Vitalis Wellness",
    description:
      "Explore Re-Vitalis's comprehensive health programs — built on precision medicine, biomarker testing, personalized nutrition, and expert clinical guidance for lasting metabolic transformation.",
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
