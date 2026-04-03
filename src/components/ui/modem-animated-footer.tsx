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
  // Deep burgundy footer — user-specified base tint
  const BG = "rgba(39, 4, 4, 0.81)"
  const FG = "#f7f2ea" // warm ivory
  const MUTED = "#c9bba8" // readable taupe on maroon
  const HEADING = "#e0d0b0" // champagne gold for headings
  const DIVIDER = "rgba(224, 208, 176, 0.28)"

  // Always shown across the site (requested by you).
  const branches = [
    "AS Rao Nagar - India",
    "Jublee Hills - India",
    "Dubai, UAE",
    "Abu Dhabi",
    "Malaysia",
  ];

  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer
        id="contacts"
        className="relative mt-20 scroll-mt-24 shadow-[inset_0_1px_0_rgba(255,248,240,0.07)]"
        style={{
          background: BG,
          borderTop: `1px solid ${DIVIDER}`,
        }}
      >
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[35rem] sm:min-h-[39rem] md:min-h-[46.5rem] relative p-4 py-8 sm:py-10">

          {/* Top section */}
          <div className="flex flex-col mb-10 sm:mb-16 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              {/* Brand name + description */}
              <div className="space-y-2 flex flex-col items-center flex-1">
                <span className="text-[26px] sm:text-3xl font-bold tracking-tight" style={{ color: FG }}>
                  {brandName}
                </span>
                <p className="font-medium text-center text-[13px] sm:text-base w-full max-w-sm sm:max-w-md px-4 sm:px-0 leading-relaxed" style={{ color: MUTED }}>
                  {brandDescription}
                </p>
              </div>

              {/* Link groups / Contact / Branches (always show branches, even if linkGroups is empty) */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 md:gap-20">
                {linkGroups.length > 0 &&
                  linkGroups.map((group, gi) => (
                    <div key={gi} className="flex flex-col items-center sm:items-start gap-2">
                      <p
                        className="text-[10px] sm:text-[11px] font-[700] tracking-[0.22em] uppercase mb-1"
                        style={{ color: HEADING }}
                      >
                        {group.heading}
                      </p>
                      {group.links.map((link, li) => (
                        <Link
                          key={li}
                          href={link.href}
                          className="min-h-8 inline-flex items-center text-[13px] sm:text-sm font-medium transition-colors duration-300"
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
                      className="text-[10px] sm:text-[11px] font-[700] tracking-[0.22em] uppercase mb-1"
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
                        className="flex items-center gap-2 min-h-8 text-[13px] sm:text-sm font-medium transition-colors duration-300"
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

                {/* Branches */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <p
                    className="text-[10px] sm:text-[11px] font-[700] tracking-[0.22em] uppercase mb-1"
                    style={{ color: HEADING }}
                  >
                    Branches
                  </p>
                  {branches.map((b, idx) => (
                    <span
                      key={idx}
                      className="min-h-8 inline-flex items-center text-[13px] sm:text-sm font-medium"
                      style={{ color: MUTED }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: copyright */}
          <div className="mt-16 sm:mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
            <p className="text-[12px] sm:text-sm text-center md:text-left" style={{ color: MUTED }}>
              ©{new Date().getFullYear()} {legalEntityName}. All rights reserved.
            </p>
            <p className="text-[12px] sm:text-sm italic" style={{ color: HEADING }}>{tagline}</p>
          </div>
        </div>

        {/* Large background watermark text */}
        <div
          className="leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: "clamp(3rem, 12vw, 10rem)",
            maxWidth: "95vw",
            background: `linear-gradient(to bottom, rgba(240, 224, 200, 0.22), rgba(200, 170, 140, 0.08), transparent)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo — floating, no background box, very large */}
        <div className="absolute -bottom-12 sm:-bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 z-10 drop-shadow-[0_0_40px_rgba(240,220,190,0.45)] hover:scale-105 transition-transform duration-300">
          <Image
            src="/Re-Vitalis Logo.png"
            alt="Re-Vitalis Logo"
            width={448}
            height={448}
            className="w-32 sm:w-48 md:w-64 lg:w-[28rem] h-32 sm:h-48 md:h-64 lg:h-[28rem] object-contain"
            priority={false}
          />
        </div>

        {/* Divider line above logo */}
        <div
          className="absolute bottom-28 sm:bottom-32 md:bottom-34 h-px w-full left-1/2 -translate-x-1/2"
          style={{ background: `linear-gradient(to right, transparent, ${DIVIDER}, transparent)` }}
        />

        {/* Bottom shadow fade */}
        <div
          className="absolute bottom-24 sm:bottom-28 w-full h-24 sm:h-28 blur-[1em]"
          style={{
            background: `linear-gradient(to top, ${BG}, rgba(55, 4, 4, 0.55), transparent)`,
          }}
        />
      </footer>
    </section>
  );
};
