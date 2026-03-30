import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Insights & Research | Re-Vitalis Blog",
  description:
    "Evidence-based articles on metabolic health, cardiovascular biomarkers, preventive medicine, and wellness optimization from leading medical researchers and practitioners.",
  keywords: [
    "metabolic health blog",
    "cardiovascular biomarkers",
    "preventive medicine",
    "insulin resistance",
    "omega-3 index",
    "homocysteine",
    "ApoB",
    "thyroid optimization",
    "cortisol dysregulation",
    "IV therapy research",
    "supplement efficacy",
    "longevity medicine",
    "functional medicine blog"
  ],
  openGraph: {
    title: "Clinical Insights & Research | Re-Vitalis Blog",
    description:
      "Evidence-based articles on metabolic health, cardiovascular biomarkers, preventive medicine, and wellness optimization.",
    type: "website",
    url: "https://www.re-vitalis.in/blog",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Re-Vitalis Blog — Clinical Insights & Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Insights & Research | Re-Vitalis Blog",
    description:
      "Evidence-based articles on metabolic health, cardiovascular biomarkers, preventive medicine, and wellness optimization.",
    images: ["/og-blog.jpg"],
  },
  alternates: {
    canonical: "https://www.re-vitalis.in/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
