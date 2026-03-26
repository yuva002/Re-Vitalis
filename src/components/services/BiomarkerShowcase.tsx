"use client";

import { motion, useReducedMotion } from "motion/react";
import { Activity, Droplet, Heart, Zap } from "lucide-react";

type Biomarker = {
  icon: React.ElementType;
  name: string;
  description: string;
  gradient: string;
};

const biomarkers: Biomarker[] = [
  {
    icon: Activity,
    name: "Metabolic Stress Score",
    description: "Comprehensive assessment of cellular stress and metabolic health",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Droplet,
    name: "Omega-3 Index",
    description: "Cardiovascular health and inflammation marker",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Heart,
    name: "ApoB & Lp(a)",
    description: "Advanced lipid markers for cardiovascular risk",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: Zap,
    name: "Insulin Sensitivity",
    description: "Blood sugar regulation and metabolic flexibility",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export function BiomarkerShowcase() {
  const reduce = useReducedMotion();

  return (
    <section className="mt-12">
      <div className="rounded-[28px] border border-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.4)] sm:p-12">
        <div className="text-center">
          <p className="text-[11px] tracking-[0.2em] text-white/60">ADVANCED DIAGNOSTICS</p>
          <h3
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
          >
            Key Biomarkers We Track
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/75">
            Data-driven insights into your metabolic health
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {biomarkers.map((marker, idx) => {
            const Icon = marker.icon;
            return (
              <motion.div
                key={marker.name}
                initial={reduce ? undefined : { opacity: 0, scale: 0.95 }}
                whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${marker.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
                
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                    <Icon className="h-6 w-6 text-cyan-400" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{marker.name}</h4>
                    <p className="mt-2 text-[13px] leading-6 text-white/70">{marker.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[13px] text-white/60">
            All assessments are conducted under medical supervision with certified laboratory partners
          </p>
        </div>
      </div>
    </section>
  );
}
