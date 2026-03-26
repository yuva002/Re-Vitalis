"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About Us", href: "/about-doctor" },
  { label: "Contact", href: "#contacts" },
] as const;

export function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto w-full max-w-[1160px] px-6 pt-7">
        <motion.div
          initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          /* relative + overflow-visible lets the logo float outside the pill */
          className="relative flex items-center justify-between rounded-full border border-border/60 bg-white/15 pl-24 pr-4 py-2.5 backdrop-blur-2xl shadow-[0_8px_40px_rgba(32,42,44,0.14)]"
        >
          {/* Logo: absolutely centred on the pill, floats large outside its height */}
          <Link
            href="/"
            aria-label="Re-Vitalis home"
            className="group absolute left-3 top-1/2 -translate-y-1/2"
          >
            <Image
              src="/Re-Vitalis Logo.png"
              alt="Re-Vitalis"
              width={80}
              height={80}
              className="h-20 w-20 object-contain drop-shadow-[0_2px_16px_rgba(200,160,40,0.65)] transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </Link>

          {/* Brand wordmark */}
          <Link
            href="/"
            className="inline-flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <span className="block text-[13px] font-[600] tracking-[0.18em] text-ink leading-none">
              RE-VITALIS
            </span>
            <span className="block text-[10px] tracking-[0.1em] text-slate/80 mt-0.5">
              wellness
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden items-center gap-7 text-[11.5px] tracking-[0.08em] text-ink/75 md:flex">
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
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden rounded-full border border-border/50 bg-white/20 px-3.5 py-1.5 text-[11px] tracking-[0.08em] text-ink/75 transition-all hover:bg-white/30 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 sm:inline-flex"
            >
              EN
              <span className="ml-1.5 inline-block translate-y-[-1px] text-ink/50">▾</span>
            </button>

            <a
              href="#contacts"
              className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-[11.5px] tracking-[0.08em] text-white shadow-[0_8px_28px_rgba(32,42,44,0.32)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              Request a call
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}


