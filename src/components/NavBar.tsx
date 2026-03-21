"use client";

import Link from "next/link";
import { motion } from "motion/react";

const nav = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Programs", href: "#programs" },
  { label: "Contacts", href: "#contacts" },
] as const;

export function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto w-full max-w-[1160px] px-6 pt-7">
        <motion.div
          initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between rounded-full border border-border/70 bg-white/20 px-5 py-3 backdrop-blur-xl shadow-[0_18px_60px_rgba(32,42,44,0.18)]"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <span className="grid size-9 place-items-center rounded-full bg-white/60 text-ink shadow-[0_10px_30px_rgba(32,42,44,0.22)] transition-transform duration-300 group-hover:scale-[1.03]">
              <span className="text-[13px] font-[560] tracking-[0.14em]">
                R
              </span>
            </span>
            <span className="leading-tight">
              <span className="block font-[520] tracking-[0.12em] text-ink">
                RE-VITALIS
              </span>
              <span className="block text-[11px] tracking-[0.08em] text-slate">
                wellness
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-[12px] tracking-[0.08em] text-ink/80 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative rounded py-2 transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              >
                <span>{item.label}</span>
                <span className="pointer-events-none absolute inset-x-1 -bottom-0.5 h-px origin-left scale-x-0 bg-ink/40 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="hidden rounded-full border border-border/60 bg-white/25 px-4 py-2 text-[12px] tracking-[0.08em] text-ink/80 transition-all hover:bg-white/35 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 sm:inline-flex"
            >
              EN
              <span className="ml-2 inline-block translate-y-[-1px] text-ink/60">
                ▾
              </span>
            </button>

            <a
              href="#contacts"
              className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-[12px] tracking-[0.08em] text-white shadow-[0_18px_50px_rgba(32,42,44,0.35)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              Request a call
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

