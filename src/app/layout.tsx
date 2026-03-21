import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Re-Vitalis Wellness",
    template: "%s | Re-Vitalis Wellness",
  },
  description:
    "Elevate your wellbeing and restore your vitality with personalized, science-led wellness care.",
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Re-Vitalis Wellness",
    description:
      "Elevate your wellbeing and restore your vitality with personalized, science-led wellness care.",
    siteName: "Re-Vitalis Wellness",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Re-Vitalis Wellness",
    description:
      "Elevate your wellbeing and restore your vitality with personalized, science-led wellness care.",
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
