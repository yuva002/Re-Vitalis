import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Specialist | Precision & Functional Medicine Expert",
  description:
    "Meet the physician behind Re-Vitalis — a specialist in precision and functional medicine combining academic excellence, clinical expertise, and biomarker-driven personalized care.",
  alternates: {
    canonical: "https://www.re-vitalis.in/about-doctor",
  },
  openGraph: {
    title: "Our Specialist | Precision & Functional Medicine Expert | Re-Vitalis",
    description:
      "Meet the physician behind Re-Vitalis — a specialist in precision and functional medicine combining academic excellence, clinical expertise, and biomarker-driven personalized care.",
    url: "https://www.re-vitalis.in/about-doctor",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Re-Vitalis Wellness — Precision Medicine Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Specialist | Precision & Functional Medicine Expert | Re-Vitalis",
    description:
      "Meet the physician behind Re-Vitalis — a specialist in precision and functional medicine combining academic excellence, clinical expertise, and biomarker-driven personalized care.",
  },
};

export default function AboutDoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
