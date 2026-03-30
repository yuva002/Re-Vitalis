import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Our Precision Medicine & Wellness Team",
  description:
    "Explore career opportunities at Re-Vitalis — a premium wellness clinic where science meets transformation. Join a team dedicated to precision medicine and personalized patient care.",
  alternates: {
    canonical: "https://www.re-vitalis.in/careers",
  },
  openGraph: {
    title: "Careers at Re-Vitalis | Join Our Precision Medicine Team",
    description:
      "Explore career opportunities at Re-Vitalis — a premium wellness clinic where science meets transformation. Join a team dedicated to precision medicine and personalized patient care.",
    url: "https://www.re-vitalis.in/careers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Re-Vitalis Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Re-Vitalis | Join Our Precision Medicine Team",
    description:
      "Explore career opportunities at Re-Vitalis — a premium wellness clinic where science meets transformation. Join a team dedicated to precision medicine and personalized patient care.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
