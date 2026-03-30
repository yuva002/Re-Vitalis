import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Services | Re-Vitalis Wellness",
    template: "%s | Re-Vitalis Wellness",
  },
  description:
    "Explore Re-Vitalis's advanced wellness services — IV therapy, clinical nutraceuticals, and metabolic recovery programs — each tailored to your unique biomarker profile.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
