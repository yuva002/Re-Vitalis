"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Star } from "lucide-react"

// ── Icons (defined outside component to avoid re-creation on render) ──────────

const LightCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="#1a1a1a" />
    <path d="M5.5 8.5L7 10L11 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DarkCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="7.5" stroke="#6b7280" />
    <path d="M5.5 8.5L7 10L11 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GoldCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="#b8860b" />
    <path d="M5.5 8.5L7 10L11 6" stroke="#FFFBDC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ── Feature lists ─────────────────────────────────────────────────────────────
const classicFeatures  = [
  "Advanced Bio markers",
  "1 free Doctors Consultation",
  "4 IV Sessions",
  "Monitoring & follow up",
  "Email Support",
  "Diet Plan",
]
const eliteFeatures    = [
  "Everything included in the classic care",
  "6 IV Sessions",
  "1 GlowFusion Free",
  "Priority Scheduling",
  "10% Off Add-Ons",
  "Personalized Follow-Up",
]
const platinumFeatures = [
  "Everything included in the elite care",
  "12 IV Sessions",
  "2 Signature Sessions Free",
  "Full Lab Profile",
  "VIP Access",
  "15% Off Add-Ons",
  "Birthday Drip Free",
]

type PricingVariant = "default" | "jewel"

export default function PricingCards({ variant = "default" }: { variant?: PricingVariant }) {
  void variant
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  return (
    <section id="membership" className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6">

      {/* ── Header ── */}
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-[10px] sm:text-[11px] font-[600] tracking-[0.25em] uppercase text-[#8B6E47] mb-2 sm:mb-3">
          Membership Plans
        </p>
        <h2 className="text-[28px] sm:text-[36px] lg:text-4xl font-bold tracking-tight text-neutral-900 mb-3 sm:mb-4">
          Re-Vitalis Elite Care
        </h2>
        <p className="text-neutral-500 text-[14px] sm:text-[16px] lg:text-lg max-w-xl mx-auto leading-relaxed">
          Invest in your wellness journey with a membership designed to restore, replenish, and revitalise.
        </p>
      </div>

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full max-w-[1100px] mx-auto">

        {/* ════════════════════════════════
            CLASSIC CARE  ·  PREMIUM SILVER
        ════════════════════════════════ */}
        <div
          onMouseEnter={() => setHoveredCard("classic")}
          onMouseLeave={() => setHoveredCard(null)}
          className={[
            "rounded-3xl p-2 flex flex-col transition-transform duration-300",
            // Brushed silver shell — mid slate / pewter (reads clearly as silver, not white)
            "bg-[linear-gradient(145deg,#c2cad3_0%,#9eaab8_42%,#7d8a9a_100%)]",
            "border border-[#5c6775]/55",
            "shadow-[0_16px_48px_-12px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,0.22)]",
            "ring-1 ring-inset ring-slate-300/35",
            hoveredCard === "classic" ? "-translate-y-2" : "",
          ].join(" ")}
        >

          {/* Inner top */}
          <div className={[
            "rounded-2xl p-5 sm:p-6 lg:p-8 mb-2",
            "bg-[linear-gradient(160deg,#d1d8e2_0%,#b3bcc8_55%,#9ca6b4_100%)]",
            "border border-[#5c6775]/40",
            "ring-1 ring-inset ring-white/12 shadow-[inset_0_2px_8px_rgba(255,255,255,0.12)]",
          ].join(" ")}>
            <div className="mb-4 sm:mb-5 flex items-start sm:items-center justify-between gap-3 flex-wrap">
              <div>
                <h2 className="text-[22px] sm:text-2xl font-bold tracking-tight text-[#1a1f26]">Classic Care</h2>
                <p className="text-[#3d4654] text-[13px] sm:text-sm leading-relaxed mt-1">3-month wellness foundation.</p>
              </div>
              <span className="inline-flex items-center rounded-full border border-[#5c6775]/45 bg-[#e2e7ee]/95 px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#1f2933] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                3 Months
              </span>
            </div>

            <div className="flex items-baseline mb-6 sm:mb-8">
              <span className="text-[32px] sm:text-4xl font-bold tracking-tighter text-[#1a1f26]">Entry</span>
              <span className="text-[#5c6370] text-[14px] sm:text-base ml-2">/ membership</span>
            </div>

            <Link
              href="/services/iv-therapy"
              className={[
                "w-full rounded-xl font-semibold text-[14px] sm:text-base py-3.5 sm:py-4 min-h-11",
                "bg-neutral-900 text-white",
                "hover:opacity-90 active:scale-[0.98] transition-all duration-200",
                "flex items-center justify-center gap-2.5",
                "shadow-[0_4px_18px_-6px_rgba(0,0,0,0.4)]",
                "ring-1 ring-inset ring-neutral-900/10",
              ].join(" ")}>
              Enroll now
              <Calendar className="w-4 h-4 text-neutral-300" />
            </Link>
          </div>

          {/* Features */}
          <div className={[
            "flex-1 px-5 pb-5 pt-4 sm:px-6 sm:pb-6",
            "bg-[linear-gradient(180deg,#b8c2ce_0%,#9aa6b5_50%,#8895a6_100%)] rounded-2xl",
            "border border-[#5c6775]/45",
            "ring-1 ring-inset ring-white/10 shadow-[inset_0_2px_12px_rgba(0,0,0,0.08)]",
          ].join(" ")}>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#4a5568] mb-3 sm:mb-4">
              Included
            </p>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {classicFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <LightCheckIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-[#1a1f26] text-[13px] sm:text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
            ELITE CARE  ·  DARK GLASS
        ════════════════════════════════ */}
        <div
          onMouseEnter={() => setHoveredCard("elite")}
          onMouseLeave={() => setHoveredCard(null)}
          className={[
            "rounded-3xl p-2 flex flex-col transition-transform duration-300",
            "bg-neutral-900/60 backdrop-blur-md",
            "border border-neutral-800",
            "shadow-[0_16px_60px_-15px_rgba(0,0,0,0.7)]",
            "ring-1 ring-inset ring-white/5",
            hoveredCard === "elite" ? "-translate-y-2" : "-translate-y-1",
          ].join(" ")}
        >

          {/* Inner top */}
          <div className={[
            "rounded-2xl p-5 sm:p-6 lg:p-8 mb-2",
            "bg-neutral-900/70 backdrop-blur-sm",
            "border border-neutral-800",
            "ring-1 ring-inset ring-white/10",
          ].join(" ")}>
            <div className="mb-4 sm:mb-5 flex items-start sm:items-center justify-between gap-3 flex-wrap">
              <div>
                <h2 className="text-[22px] sm:text-2xl font-bold tracking-tight text-neutral-50">Elite Care</h2>
                <p className="text-neutral-400 text-[13px] sm:text-sm leading-relaxed mt-1">6-month transformation plan.</p>
              </div>
              <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/50 px-3 py-1 text-[11px] sm:text-xs font-medium text-neutral-300 backdrop-blur">
                Best Value
              </span>
            </div>

            <div className="flex items-baseline mb-6 sm:mb-8">
              <span className="text-[32px] sm:text-4xl font-bold tracking-tighter text-white">Premier</span>
              <span className="text-neutral-500 text-[14px] sm:text-base ml-2">/ membership</span>
            </div>

            <Link
              href="/services/metabolic-programs"
              className={[
                "w-full rounded-xl font-semibold text-[14px] sm:text-base py-3.5 sm:py-4 min-h-11",
                "bg-white text-neutral-900",
                "hover:opacity-90 active:scale-[0.98] transition-all duration-200",
                "flex items-center justify-center gap-2.5",
                "shadow-[0_4px_18px_-6px_rgba(255,255,255,0.35)]",
                "ring-1 ring-inset ring-white/30",
              ].join(" ")}>
              Enroll now
              <Calendar className="w-4 h-4 text-neutral-600" />
            </Link>
          </div>

          {/* Features */}
          <div className={[
            "flex-1 px-5 pb-5 pt-4 sm:px-6 sm:pb-6",
            "bg-neutral-900/55 backdrop-blur-sm rounded-2xl",
            "border border-neutral-800",
            "ring-1 ring-inset ring-white/10",
          ].join(" ")}>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-neutral-500 mb-3 sm:mb-4">
              Included
            </p>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {eliteFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <DarkCheckIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-neutral-300 text-[13px] sm:text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
            PLATINUM CARE  ·  GOLD GLASS
        ════════════════════════════════ */}
        <div
          onMouseEnter={() => setHoveredCard("platinum")}
          onMouseLeave={() => setHoveredCard(null)}
          className={[
            "rounded-3xl p-2 flex flex-col transition-transform duration-300",
            "bg-gradient-to-b from-[#fdf6e3]/90 to-[#fef9ee]/90 backdrop-blur-md",
            "border border-[#e8d5aa]/70",
            "shadow-[0_12px_45px_-15px_rgba(180,130,30,0.25)]",
            "ring-1 ring-inset ring-[#f5e6b8]/60",
            hoveredCard === "platinum" ? "-translate-y-2" : "",
          ].join(" ")}
        >

          {/* Inner top */}
          <div className={[
            "rounded-2xl p-5 sm:p-6 lg:p-8 mb-2",
            "bg-[#fffbf0]/80 backdrop-blur-sm",
            "border border-[#e8d5aa]/80",
            "ring-1 ring-inset ring-[#c8a84b]/10",
          ].join(" ")}>
            <div className="mb-4 sm:mb-5 flex items-start sm:items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 className="text-[22px] sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2">
                  Platinum Care
                  <Star className="w-4 h-4 fill-[#c8a84b] text-[#c8a84b]" />
                </h3>
                <p className="text-[#8B6E47] text-[13px] sm:text-sm leading-relaxed mt-1">12-month full VIP experience.</p>
              </div>
              <span className="inline-flex items-center rounded-full border border-[#e8d5aa] bg-[#fff8e1]/80 px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#8B6E47] backdrop-blur">
                VIP
              </span>
            </div>

            <div className="flex items-baseline mb-6 sm:mb-8">
              <span className="text-[32px] sm:text-4xl font-bold tracking-tighter text-neutral-900">Platinum</span>
              <span className="text-[#b8a075] text-[14px] sm:text-base ml-2">/ membership</span>
            </div>

            <Link
              href="/services/nutraceuticals"
              className={[
                "w-full rounded-xl font-semibold text-[14px] sm:text-base py-3.5 sm:py-4 min-h-11",
                "bg-gradient-to-r from-[#c8a84b] to-[#e0c060] text-white",
                "hover:opacity-90 active:scale-[0.98] transition-all duration-200",
                "flex items-center justify-center gap-2.5",
                "shadow-[0_4px_18px_-6px_rgba(180,140,40,0.5)]",
                "ring-1 ring-inset ring-[#e8d5aa]/30",
              ].join(" ")}>
              Enroll now
              <Calendar className="w-4 h-4 text-white/80" />
            </Link>
          </div>

          {/* Features */}
          <div className={[
            "flex-1 px-5 pb-5 pt-4 sm:px-6 sm:pb-6",
            "bg-[#fffbf0]/50 backdrop-blur-sm rounded-2xl",
            "border border-[#e8d5aa]/60",
            "ring-1 ring-inset ring-[#f5e6b8]/30",
          ].join(" ")}>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#b8a075] mb-3 sm:mb-4">
              Included
            </p>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {platinumFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <GoldCheckIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-neutral-700 text-[13px] sm:text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#e8d5aa]/60">
              <p className="text-[10px] sm:text-[11px] text-[#8B6E47] font-semibold tracking-wide uppercase mb-2">
                EXCLUSIVE PERKS
              </p>
              <p className="text-[11px] sm:text-xs text-[#a08050] leading-relaxed">
                Birthday Drip Free · Priority Bookings · Personalized Follow-Up
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
