"use client";

import { motion, useReducedMotion } from "motion/react";
import { LucideIcon } from "lucide-react";

type TimelineStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

type PremiumTimelineProps = {
  steps: TimelineStep[];
  title?: string;
  subtitle?: string;
};

export function PremiumTimeline({ steps, title, subtitle }: PremiumTimelineProps) {
  const reduce = useReducedMotion();

  return (
    <div className="mt-12">
      {title && (
        <div className="mb-12 text-center">
          {subtitle && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {subtitle}
            </p>
          )}
          <h2
            className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
          >
            {title}
          </h2>
        </div>
      )}

      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-7 top-16 bottom-16 w-px bg-gradient-to-b from-white/10 via-white/30 to-white/10 sm:left-10" />

        <div className="space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={reduce ? undefined : { opacity: 0, x: -30 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative flex items-start gap-6 sm:gap-10"
              >
                {/* Icon - Glass container */}
                <div className="relative flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.5} />
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Content - Slim glass card */}
                <div className="flex-1 rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/30 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl font-bold text-white/10">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-semibold text-white sm:text-2xl">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-[15px] leading-7 text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-px flex-1 bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.15 + 0.3 }}
                        className="h-full bg-white/40"
                      />
                    </div>
                    <span className="text-xs font-medium text-white/40">
                      {idx + 1}/{steps.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
