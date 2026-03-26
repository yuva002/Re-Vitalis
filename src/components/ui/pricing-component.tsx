"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Star } from "lucide-react"

const LightCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="8" fill="#1a1a1a" />
    <path
      d="M5.5 8.5L7 10L11 6"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DarkCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7.5" stroke="#6b7280" />
    <path
      d="M5.5 8.5L7 10L11 6"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GoldCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="8" fill="#b8860b" />
    <path
      d="M5.5 8.5L7 10L11 6"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const classicFeatures = [
  "3 IV Sessions",
  "1 Free Consult",
  "10% Off Add-Ons",
  "Email Support",
]

const eliteFeatures = [
  "6 IV Sessions",
  "1 GlowFusion Free",
  "Priority Scheduling",
  "10% Off Add-Ons",
  "Personalized Follow-Up",
]

const platinumFeatures = [
  "12 IV Sessions",
  "2 Signature Sessions Free",
  "Full Lab Profile",
  "VIP Access",
  "15% Off Add-Ons",
  "Birthday Drip Free",
]

export default function PricingCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="membership" className="w-full py-24 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[11px] font-[600] tracking-[0.25em] uppercase text-[#8B6E47] mb-3">
          Membership Plans
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-4">
          Re-Vitalis Elite Care
        </h2>
        <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed">
          Invest in your wellness journey with a membership designed to restore, replenish, and revitalise.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1100px] mx-auto items-stretch">

        {/* ─── Classic Care (Light) ─── */}
        <div
          onMouseEnter={() => setHoveredCard("classic")}
          onMouseLeave={() => setHoveredCard(null)}
          className={[
            "rounded-3xl p-2 flex flex-col transition-transform duration-300",
            "bg-white/65 backdrop-blur-md",
            "border border-neutral-200/70",
            "shadow-[0_12px_40px_-15px_rgba(0,0,0,0.12)]",
            "ring-1 ring-inset ring-white/40",
            hoveredCard === "classic" ? "-translate-y-2" : "",
          ].join(" ")}
        >
          <div
            className={[
              "rounded-2xl p-8 mb-2",
              "bg-white/80 backdrop-blur-sm",
              "border border-neutral-200/80",
              "ring-1 ring-inset ring-neutral-900/5",
            ].join(" ")}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Classic Care</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mt-1">
                  3-month wellness foundation.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 backdrop-blur">
                3 Months
              </span>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold tracking-tighter text-neutral-900">Entry</span>
              <span className="text-neutral-400 text-base ml-2">/ membership</span>
            </div>

            <Link
              href="/services/iv-therapy"
              className={[
                "w-full rounded-xl font-semibold text-base py-4",
                "bg-neutral-900 text-white",
                "hover:opacity-90 active:scale-[0.98] transition-all duration-200",
                "flex items-center justify-center gap-2.5",
                "shadow-[0_4px_18px_-6px_rgba(0,0,0,0.4)]",
                "ring-1 ring-inset ring-neutral-900/10",
              ].join(" ")}
            >
              Book a call
              <Calendar className="w-4 h-4 text-neutral-300" />
            </Link>
          </div>

          <div
            className={[
              "flex-1 px-6 pb-6 pt-4",
              "bg-white/50 backdrop-blur-sm rounded-2xl",
              "border border-neutral-200/70",
              "ring-1 ring-inset ring-white/30",
            ].join(" ")}
          >
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-4">
              Included
            </p>
            <div className="flex flex-col gap-3">
              {classicFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <LightCheckIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Elite Care (Featured / Dark) ─── */}
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
          <div
            className={[
              "rounded-2xl p-8 mb-2",
              "bg-neutral-900/70 backdrop-blur-sm",
              "border border-neutral-800",
              "ring-1 ring-inset ring-white/10",
            ].join(" ")}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-50">Elite Care</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mt-1">
                  6-month transformation plan.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/50 px-3 py-1 text-xs font-semibold text-neutral-300 backdrop-blur">
                Best Value
              </span>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold tracking-tighter text-white">Premier</span>
              <span className="text-neutral-500 text-base ml-2">/ membership</span>
            </div>

            <Link
              href="/services/metabolic-programs"
              className={[
                "w-full rounded-xl font-semibold text-base py-4",
                "bg-white text-neutral-900",
                "hover:opacity-90 active:scale-[0.98] transition-all duration-200",
                "flex items-center justify-center gap-2.5",
                "shadow-[0_4px_18px_-6px_rgba(255,255,255,0.3)]",
                "ring-1 ring-inset ring-white/30",
              ].join(" ")}
            >
              Book a call
              <Calendar className="w-4 h-4 text-neutral-600" />
            </Link>
          </div>

          <div
            className={[
              "flex-1 px-6 pb-6 pt-4",
              "bg-neutral-900/55 backdrop-blur-sm rounded-2xl",
              "border border-neutral-800",
              "ring-1 ring-inset ring-white/10",
            ].join(" ")}
          >
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Included
            </p>
            <div className="flex flex-col gap-3">
              {eliteFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <DarkCheckIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Platinum Care (Gold / Premium) ─── */}
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
          <div
            className={[
              "rounded-2xl p-8 mb-2",
              "bg-[#fffbf0]/80 backdrop-blur-sm",
              "border border-[#e8d5aa]/80",
              "ring-1 ring-inset ring-[#c8a84b]/10",
            ].join(" ")}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2">
                  Platinum Care
                  <Star className="w-4 h-4 fill-[#c8a84b] text-[#c8a84b]" />
                </h3>
                <p className="text-[#8B6E47] text-sm leading-relaxed mt-1">
                  12-month full VIP experience.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-[#e8d5aa] bg-[#fff8e1]/80 px-3 py-1 text-xs font-semibold text-[#8B6E47] backdrop-blur">
                VIP
              </span>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold tracking-tighter text-neutral-900">Platinum</span>
              <span className="text-[#b8a075] text-base ml-2">/ membership</span>
            </div>

            <Link
              href="/services/nutraceuticals"
              className={[
                "w-full rounded-xl font-semibold text-base py-4",
                "bg-gradient-to-r from-[#c8a84b] to-[#e0c060] text-white",
                "hover:opacity-90 active:scale-[0.98] transition-all duration-200",
                "flex items-center justify-center gap-2.5",
                "shadow-[0_4px_18px_-6px_rgba(180,140,40,0.5)]",
                "ring-1 ring-inset ring-[#e8d5aa]/30",
              ].join(" ")}
            >
              Book a call
              <Calendar className="w-4 h-4 text-white/80" />
            </Link>
          </div>

          <div
            className={[
              "flex-1 px-6 pb-6 pt-4",
              "bg-[#fffbf0]/50 backdrop-blur-sm rounded-2xl",
              "border border-[#e8d5aa]/60",
              "ring-1 ring-inset ring-[#f5e6b8]/30",
            ].join(" ")}
          >
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#b8a075] mb-4">
              Included
            </p>
            <div className="flex flex-col gap-3">
              {platinumFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <GoldCheckIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#e8d5aa]/60">
              <p className="text-[11px] text-[#8B6E47] font-semibold tracking-wide uppercase mb-2">
                Exclusive Perks
              </p>
              <p className="text-xs text-[#a08050] leading-relaxed">
                Birthday Drip Free · Priority Bookings · Personalized Follow-Up
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
