"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown, CheckCircle2, LucideIcon } from "lucide-react";

type ProgramDetails = {
  audience: string[];
  assess: string[];
  correct: string[];
  use: string[];
  outcomes: string[];
};

type PremiumProgramCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  details: ProgramDetails;
  gradient: string;
  index: number;
};

export function PremiumProgramCard({
  icon: Icon,
  title,
  subtitle,
  description,
  details,
  index,
}: PremiumProgramCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? undefined : { opacity: 0, y: 40 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.15)] backdrop-blur-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
    >
      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header Section */}
      <div className="relative overflow-hidden p-8 sm:p-10">
        <div className="relative z-10 flex items-start gap-6">
          {/* Icon - Slim glass container */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 sm:h-16 sm:w-16">
            <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.5} />
          </div>

          {/* Title & Description */}
          <div className="flex-1">
            <div className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/70 backdrop-blur-sm">
              {subtitle}
            </div>
            <h2
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
            >
              {title}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-white/60">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Preview Section - Glass panels */}
      <div className="border-t border-white/10 p-8 sm:p-10">
        <div className="grid gap-4 sm:grid-cols-3">
          <QuickInfoPanel title="Target Audience" items={details.audience.slice(0, 2)} />
          <QuickInfoPanel title="Key Assessments" items={details.assess.slice(0, 2)} />
          <QuickInfoPanel title="Expected Outcomes" items={details.outcomes.slice(0, 2)} showCheck />
        </div>

        {/* Expand Button - Slim glass */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
        >
          {isExpanded ? "Show Less" : "View Complete Details"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Expanded Details - Glass panels */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden border-t border-white/10"
          >
            <div className="bg-white/5 p-8 backdrop-blur-sm sm:p-10">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-6">
                  <DetailBlock title="What We Assess" items={details.assess} />
                  <DetailBlock title="What We Correct" items={details.correct} />
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <DetailBlock title="What We Use" items={details.use} />
                  <DetailBlock title="Expected Outcomes" items={details.outcomes} showCheck />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function QuickInfoPanel({
  title,
  items,
  showCheck,
}: {
  title: string;
  items: string[];
  showCheck?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-white/70">
            {showCheck ? (
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/50" strokeWidth={2} />
            ) : (
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/50" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailBlock({
  title,
  items,
  showCheck,
}: {
  title: string;
  items: string[];
  showCheck?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
      <h4 className="text-xs font-bold uppercase tracking-wider text-white/60">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/80">
            {showCheck ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/60" strokeWidth={2} />
            ) : (
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
