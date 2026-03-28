"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Globe, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

interface FooterProps {
  brandName?: string;
  /** Registered legal name shown on the copyright line */
  legalEntityName?: string;
  brandDescription?: string;
  tagline?: string;
  linkGroups?: FooterLinkGroup[];
  contactItems?: { icon: React.ReactNode; label: string; href: string }[];
  className?: string;
}

export const Footer = ({
  brandName = "Re-Vitalis",
  legalEntityName = "Re-Vitalis Life sciences Private Limited",
  brandDescription = "Precision-led metabolic wellness and personalized therapeutic care.",
  tagline = "Where Science Meets Transformation",
  linkGroups = [],
  contactItems = [],
  className,
}: FooterProps) => {
  // Premium colour tokens for the dark footer
  const BG       = "#0c0b09"          // near-black with a warm undertone
  const FG       = "#f5f0e8"          // warm ivory – premium off-white
  const MUTED    = "#9a9080"          // warm taupe for secondary text
  const HEADING  = "#c8b89a"          // gold-mist for column headings
  const DIVIDER  = "rgba(200,184,154,0.18)"  // subtle gold-tinted divider

  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer
        id="contacts"
        className="relative mt-20 scroll-mt-24"
        style={{ background: BG, borderTop: `1px solid ${DIVIDER}` }}
      >
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">

          {/* Top section */}
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              {/* Brand name + description */}
              <div className="space-y-2 flex flex-col items-center flex-1">
                <span className="text-3xl font-bold tracking-tight" style={{ color: FG }}>
                  {brandName}
                </span>
                <p className="font-medium text-center w-full max-w-sm sm:w-96 px-4 sm:px-0 leading-relaxed" style={{ color: MUTED }}>
                  {brandDescription}
                </p>
              </div>

              {/* Link groups */}
              {linkGroups.length > 0 && (
                <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-10 sm:gap-20">
                  {linkGroups.map((group, gi) => (
                    <div key={gi} className="flex flex-col items-center sm:items-start gap-2">
                      <p
                        className="text-[11px] font-[700] tracking-[0.22em] uppercase mb-1"
                        style={{ color: HEADING }}
                      >
                        {group.heading}
                      </p>
                      {group.links.map((link, li) => (
                        <Link
                          key={li}
                          href={link.href}
                          className="text-sm font-medium transition-colors duration-300"
                          style={{ color: MUTED }}
                          onMouseEnter={e => (e.currentTarget.style.color = FG)}
                          onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}

                  {/* Contact info */}
                  {contactItems.length > 0 && (
                    <div className="flex flex-col items-center sm:items-start gap-2">
                      <p
                        className="text-[11px] font-[700] tracking-[0.22em] uppercase mb-1"
                        style={{ color: HEADING }}
                      >
                        Contact
                      </p>
                      {contactItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                          style={{ color: MUTED }}
                          onMouseEnter={e => (e.currentTarget.style.color = FG)}
                          onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                        >
                          <span className="w-4 h-4">{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Bottom: copyright */}
          <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
            <p className="text-sm text-center md:text-left" style={{ color: MUTED }}>
              ©{new Date().getFullYear()} {legalEntityName}. All rights reserved.
            </p>
            <p className="text-sm italic" style={{ color: HEADING }}>{tagline}</p>
          </div>
        </div>

        {/* Large background watermark text */}
        <div
          className="leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: "clamp(3rem, 12vw, 10rem)",
            maxWidth: "95vw",
            background: `linear-gradient(to bottom, rgba(200,184,154,0.18), rgba(200,184,154,0.06), transparent)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo — floating, no background box, very large */}
        <div className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 z-10 drop-shadow-[0_0px_48px_rgba(200,184,154,0.65)] hover:scale-105 transition-transform duration-300">
          <Image
            src="/Re-Vitalis Logo.png"
            alt="Re-Vitalis Logo"
            width={448}
            height={448}
            className="w-40 sm:w-64 md:w-[28rem] h-40 sm:h-64 md:h-[28rem] object-contain"
            priority={false}
          />
        </div>

        {/* Divider line above logo */}
        <div
          className="absolute bottom-32 sm:bottom-34 h-px w-full left-1/2 -translate-x-1/2"
          style={{ background: `linear-gradient(to right, transparent, ${DIVIDER}, transparent)` }}
        />

        {/* Bottom shadow fade */}
        <div
          className="absolute bottom-28 w-full h-28 blur-[1em]"
          style={{ background: `linear-gradient(to top, ${BG}, ${BG}cc, transparent)` }}
        />
      </footer>
    </section>
  );
};
