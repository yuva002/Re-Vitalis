"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About Us", href: "/about-doctor" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contacts" },
] as const;

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto w-full max-w-[1160px] px-4 pt-4 sm:px-6 sm:pt-7">
        <motion.div
          initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full items-center justify-between rounded-full border border-border/60 bg-white/15 pl-3 pr-3 py-2 sm:pl-4 lg:pl-[220px] backdrop-blur-2xl shadow-[0_8px_40px_rgba(32,42,44,0.14)]"
        >
          {/* Brand block */}
          <Link
            href="/"
            aria-label="Re-Vitalis home"
            className="group inline-flex shrink-0 items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 lg:absolute lg:left-3 lg:top-1/2 lg:-translate-y-1/2"
          >
            <Image
              src="/Re-Vitalis Logo.png"
              alt="Re-Vitalis"
              width={120}
              height={120}
              className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain drop-shadow-[0_2px_16px_rgba(200,160,40,0.65)] transition-transform duration-300 group-hover:scale-110"
              priority
            />
            <span className="inline-flex flex-col lg:flex">
              <span className="block text-[11px] sm:text-[13px] font-[600] tracking-[0.18em] text-ink leading-none">
                Re-Vitalis
              </span>
              <span className="mt-0.5 hidden sm:block text-[9px] sm:text-[10px] tracking-[0.1em] text-slate/80">
                Metabolic Health center
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex flex-1 justify-end items-center gap-6 mr-10 text-[14px] tracking-[0.08em] text-ink/75">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-1.5 transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              >
                <span>{item.label}</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink/35 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden min-h-11 min-w-11 flex items-center justify-center rounded-full border border-border/50 bg-white/20 text-ink/75 transition-all hover:bg-white/30 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <a
              href="#contacts"
              className="inline-flex items-center justify-center rounded-full bg-[#061b0e] px-3 py-2 sm:px-4 text-[10px] sm:text-[11.5px] tracking-[0.08em] text-[#F0ECE4] shadow-[0_8px_28px_rgba(6,27,14,0.34)] transition-transform duration-300 hover:scale-[1.03] hover:bg-[#0b2a17] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2a17]/40 min-h-11"
            >
              <span className="hidden sm:inline">Request a call</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </motion.div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mt-2 overflow-hidden rounded-2xl border border-border/60 bg-white/95 backdrop-blur-2xl shadow-[0_8px_40px_rgba(32,42,44,0.18)]"
            >
              <ul className="py-2 flex flex-col items-end">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-5 py-3 min-h-11 text-[14px] tracking-[0.06em] text-right text-ink/80 hover:bg-[#0a2a28]/8 hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink/20"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

