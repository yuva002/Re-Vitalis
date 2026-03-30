import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-av-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adult Vaccination Programme | Preventive Immunization",
  description:
    "Physician-guided adult vaccination planning at Re-Vitalis: review of history, risk factors, and scheduling aligned with current public-health immunization guidance.",
  keywords: [
    "adult vaccination",
    "preventive immunization",
    "flu vaccine",
    "Tdap booster",
    "travel vaccines",
    "Re-Vitalis",
    "wellness clinic India",
  ],
  alternates: {
    canonical: "https://www.re-vitalis.in/services/adult-vaccination",
  },
  openGraph: {
    title: "Adult Vaccination Programme | Re-Vitalis Wellness",
    description:
      "Physician-guided adult vaccination planning: history review, individualized recommendations, and clinical administration in line with current guidelines.",
    url: "https://www.re-vitalis.in/services/adult-vaccination",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adult Vaccination Programme at Re-Vitalis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Vaccination Programme | Re-Vitalis Wellness",
    description:
      "Physician-guided adult vaccination planning at Re-Vitalis.",
  },
};

export default function AdultVaccinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${manrope.variable} min-h-screen`}>{children}</div>
  );
}
