"use client";

import { motion, useReducedMotion } from "motion/react";
import { LucideIcon } from "lucide-react";

type PremiumStatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  trend?: string;
  gradient: string;
  index: number;
};

export function PremiumStatCard({
  icon: Icon,
  value,
  label,
  trend,
  gradient,
  index,
}: PremiumStatCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />
      
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex-1">
          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-md`}>
            <Icon className="h-6 w-6 text-white" strokeWidth={2} />
          </div>
          
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            className="mt-4"
          >
            <div className="text-4xl font-bold tracking-tight text-slate-900">
              {value}
            </div>
            <div className="mt-2 text-sm font-medium text-slate-600">
              {label}
            </div>
            {trend && (
              <div className="mt-2 text-xs font-medium text-emerald-600">
                {trend}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
    </motion.div>
  );
}

type PremiumStatsGridProps = {
  stats: {
    icon: LucideIcon;
    value: string;
    label: string;
    trend?: string;
    gradient: string;
  }[];
};

export function PremiumStatsGrid({ stats }: PremiumStatsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, idx) => (
        <PremiumStatCard key={stat.label} {...stat} index={idx} />
      ))}
    </div>
  );
}
