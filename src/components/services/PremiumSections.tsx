"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { FloatingOrbs3D } from "./FloatingOrbs3D";

type Program = {
  title: string;
  audience: string[];
  assess: string[];
  correct: string[];
  use: string[];
  outcomes: string[];
};

export function PremiumPageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden rounded-[30px] border border-border/70 bg-[#0c1624] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-12">
      <FloatingOrbs3D />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_90%_10%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(90%_80%_at_10%_90%,rgba(16,185,129,0.22),transparent_55%)]" />
      <div className="relative z-10 max-w-3xl">
        <p className="text-[11px] tracking-[0.2em] text-white/70">{eyebrow}</p>
        <motion.h1
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
        >
          {title}
        </motion.h1>
        <p className="mt-5 text-[15px] leading-8 text-white/85 sm:text-[16px]">{description}</p>
        {ctaHref && ctaLabel ? (
          <Link
            href={ctaHref}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[12px] tracking-[0.12em] text-ink transition-transform hover:scale-[1.02]"
          >
            {ctaLabel}
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-white/70 p-4 backdrop-blur-xl">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-slate">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-ink/90">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProgramCardGrid({ programs }: { programs: Program[] }) {
  return (
    <section className="mt-10 grid gap-6">
      {programs.map((program) => (
        <article
          key={program.title}
          className="rounded-[26px] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(246,251,255,0.7))] p-6 shadow-[0_20px_65px_rgba(32,42,44,0.12)]"
        >
          <h2
            className="text-2xl font-semibold tracking-tight text-ink"
            style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
          >
            {program.title}
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            <ListBlock title="WHO IS THIS FOR?" items={program.audience} />
            <ListBlock title="WHAT WE ASSESS" items={program.assess} />
            <ListBlock title="WHAT WE CORRECT" items={program.correct} />
            <ListBlock title="WHAT WE USE" items={program.use} />
            <ListBlock title="EXPECTED OUTCOMES" items={program.outcomes} />
          </div>
        </article>
      ))}
    </section>
  );
}

export function TrustPillars({
  title,
  pillars,
}: {
  title: string;
  pillars: { heading: string; body: string }[];
}) {
  const reduce = useReducedMotion();
  return (
    <section className="mt-12 rounded-[28px] border border-border bg-white/75 p-7 shadow-[0_20px_60px_rgba(32,42,44,0.1)] sm:p-10">
      <h3
        className="text-3xl font-semibold tracking-tight text-ink"
        style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
      >
        {title}
      </h3>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.heading}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="rounded-2xl border border-border/70 bg-white/80 p-5"
          >
            <p className="text-[11px] tracking-[0.18em] text-slate">PILLAR {idx + 1}</p>
            <h4 className="mt-2 text-xl font-semibold text-ink">{pillar.heading}</h4>
            <p className="mt-2 text-sm leading-7 text-slate">{pillar.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  actions,
}: {
  title: string;
  actions: { label: string; href: string }[];
}) {
  return (
    <section className="mt-12 rounded-[28px] border border-border bg-[#0f172a] p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.4)] sm:p-10">
      <h3
        className="text-3xl font-semibold tracking-tight"
        style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
      >
        {title}
      </h3>
      <div className="mt-6 flex flex-wrap gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-[12px] tracking-[0.1em] text-white hover:bg-white/20"
          >
            {action.label}
            <ChevronRight className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </section>
  );
}

