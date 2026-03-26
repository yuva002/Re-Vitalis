"use client";

import { motion, useReducedMotion } from "motion/react";
import { LucideIcon } from "lucide-react";

type PremiumFeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function PremiumFeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: PremiumFeatureCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        {/* Glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10">
          {/* Icon container */}
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/20">
            <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
          </div>

          {/* Content */}
          <h3 className="mt-6 text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-white/60">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

type PremiumFeatureGridProps = {
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
};

export function PremiumFeatureGrid({ features }: PremiumFeatureGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, idx) => (
        <PremiumFeatureCard
          key={feature.title}
          {...feature}
          index={idx}
        />
      ))}
    </div>
  );
}
