"use client";

import { motion, useReducedMotion } from "motion/react";
import { Search, Target, Wrench, TrendingUp } from "lucide-react";

type Step = {
  icon: React.ElementType;
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: Search,
    number: "01",
    title: "Deep Assessment",
    description: "Comprehensive biomarker analysis and metabolic evaluation",
  },
  {
    icon: Target,
    number: "02",
    title: "Root Cause Analysis",
    description: "Identify underlying dysfunction and imbalances",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Personalized Protocol",
    description: "Custom treatment plan with targeted interventions",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Track & Optimize",
    description: "Continuous monitoring and protocol adjustments",
  },
];

export function ProcessDiagram() {
  const reduce = useReducedMotion();

  return (
    <section className="mt-12 rounded-[28px] border border-border bg-gradient-to-br from-white/90 via-white/80 to-white/70 p-8 shadow-[0_20px_60px_rgba(32,42,44,0.12)] backdrop-blur-xl sm:p-12">
      <div className="text-center">
        <p className="text-[11px] tracking-[0.2em] text-slate">OUR PROCESS</p>
        <h3
          className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
        >
          How We Work With You
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate">
          A systematic approach to metabolic recovery
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Connection line (hidden on last item or mobile) */}
              {idx < steps.length - 1 && (
                <div className="absolute left-[50%] top-[60px] hidden h-[2px] w-full bg-gradient-to-r from-cyan-500/30 to-blue-500/20 lg:block" />
              )}

              <div className="relative rounded-2xl border border-border/70 bg-white/80 p-6 transition-all hover:shadow-[0_12px_40px_rgba(32,42,44,0.15)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                    <Icon className="h-6 w-6 text-cyan-600" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] tracking-[0.18em] text-slate/70">{step.number}</p>
                    <h4 className="mt-1 text-lg font-semibold text-ink">{step.title}</h4>
                  </div>
                </div>
                <p className="mt-4 text-[13px] leading-6 text-slate">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
