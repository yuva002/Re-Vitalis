"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useCallback } from "react";
import dnaImg from "../../public/dna-img.png";
import sprintImg from "../../public/muscle.png";
import pillsImg from "../../public/pills.png";
import virusImg from "../../public/virus.png";

function MetricPill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A96E]/25 bg-[#0f4842]/88 px-3 py-1.5 text-[10px] font-[560] tracking-[0.16em] text-[#DDD8D0] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <span className="h-1.5 w-1.5 rounded-full bg-[#C8A96E]" aria-hidden="true" />
      <span>{label}</span>
      <span className="text-[11px] tracking-[0.12em] text-[#888078]">{value}</span>
    </div>
  );
}

function HeartGlyph(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className ?? "h-5 w-5"}
      fill="none"
    >
      <path
        d="M12 20.6s-7-4.4-9.2-8.3C1.2 9 2.6 6.3 5.7 5.7c1.8-.4 3.5.2 4.6 1.6 1.1-1.4 2.8-2 4.6-1.6 3.1.6 4.5 3.3 2.9 6.6-2.2 3.9-9.2 8.3-9.2 8.3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EcgWidget({ reduce }: { reduce: boolean }) {
  const dashOffset = reduce ? 0 : undefined;
  return (
    <div className="rounded-[18px] border border-[#C8A96E]/22 bg-[#134f49]/90 px-3 py-2 shadow-[0_26px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-[560] tracking-[0.22em] text-[#C8A96E]">
          ECG
        </p>
        <span className="inline-flex h-2 w-2 rounded-full bg-[#E2C98A] shadow-[0_0_8px_rgba(226,201,138,0.40)]" aria-hidden="true" />
      </div>

      <svg viewBox="0 0 240 90" className="mt-2 h-[64px] w-full">
        <defs>
          <linearGradient id="ecgStroke" x1="0" y1="0" x2="240" y2="0">
            <stop offset="0" stopColor="#A07840" stopOpacity="0.95" />
            <stop offset="0.55" stopColor="#C8A96E" stopOpacity="0.95" />
            <stop offset="1" stopColor="#E2C98A" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          d="M10 55 C 25 55, 25 35, 40 35 S 65 55, 80 55 95 25, 110 25 130 55, 145 55 160 40, 175 40 190 65, 210 65 230 40"
          fill="none"
          stroke="url(#ecgStroke)"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeDasharray="10 8"
          className="opacity-90"
        />

        <motion.path
          d="M10 55 C 25 55, 25 35, 40 35 S 65 55, 80 55 95 25, 110 25 130 55, 145 55 160 40, 175 40 190 65, 210 65 230 40"
          fill="none"
          stroke="url(#ecgStroke)"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeDasharray="10 8"
          animate={
            reduce
              ? undefined
              : {
                  strokeDashoffset: [0, -60],
                  opacity: [0.95, 1, 0.95],
                }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{ strokeDashoffset: dashOffset }}
        />

        {!reduce ? (
          <>
            <motion.circle
              cx="110"
              cy="25"
              r="4.5"
              fill="#E2C98A"
              initial={{ scale: 0.8, opacity: 0.65 }}
              animate={{ scale: [0.8, 1.55, 0.8], opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="175"
              cy="40"
              r="4.2"
              fill="#C8A96E"
              initial={{ scale: 0.75, opacity: 0.55 }}
              animate={{ scale: [0.75, 1.35, 0.75], opacity: [0.55, 0.95, 0.55] }}
              transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        ) : null}
      </svg>
    </div>
  );
}

function HeartRateWidget({ reduce }: { reduce: boolean }) {
  return (
    <div className="rounded-[18px] border border-[#C8A96E]/22 bg-[#134f49]/90 px-3 py-2 shadow-[0_26px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-[560] tracking-[0.22em] text-[#C8A96E]">
          HEART RATE
        </p>
        <span className="inline-flex items-center justify-center text-[#C8A96E]">
          <HeartGlyph className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-2 flex items-end justify-between gap-3">
        <p
          className="text-[22px] font-[560] leading-none text-[#F0ECE4]"
          style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
        >
          72
        </p>
        <div className="relative h-14 w-[52px]">
          <div className="absolute inset-0 rounded-full border border-[#C8A96E]/25 bg-[#0e4741]/92" />
          <div className="absolute inset-x-0 top-0 flex items-end justify-center gap-1.5 p-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                className="h-2 w-1.5 rounded-full bg-[#C8A96E]"
                initial={reduce ? undefined : { scaleY: 0.65 }}
                animate={
                  reduce
                    ? undefined
                    : { scaleY: [0.65, 1.55, 0.65], opacity: [0.7, 1, 0.7] }
                }
                transition={
                  reduce
                    ? undefined
                    : { duration: 1.2 + i * 0.12, repeat: Infinity, ease: "easeInOut" }
                }
                style={{ transformOrigin: "bottom center" }}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-1 text-[11px] font-[560] tracking-[0.12em] text-[#888078]">
        bpm
      </p>
    </div>
  );
}

function MetabolismWidget({ reduce }: { reduce: boolean }) {
  return (
    <div className="rounded-[18px] border border-[#C8A96E]/22 bg-[#134f49]/90 px-3 py-2 shadow-[0_26px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-[560] tracking-[0.22em] text-[#C8A96E]">
          METABOLISM
        </p>
        <span className="h-2 w-2 rounded-full bg-[#E2C98A] shadow-[0_0_8px_rgba(226,201,138,0.36)]" aria-hidden="true" />
      </div>
      <div className="mt-2 flex items-end justify-between gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            className="w-full rounded-full bg-gradient-to-t from-[#A07840]/80 to-[#C8A96E]/90"
            style={{ height: 8 + i * 2 }}
            initial={reduce ? undefined : { scaleY: 0.7 }}
            animate={
              reduce ? undefined : { scaleY: [0.7, 1.8, 0.7], opacity: [0.7, 1, 0.7] }
            }
            transition={
              reduce
                ? undefined
                : { duration: 1.3 + i * 0.08, repeat: Infinity, ease: "easeInOut" }
            }
          />
        ))}
      </div>
      <p className="mt-1 text-[11px] font-[560] tracking-[0.12em] text-[#888078]">
        activation pulse
      </p>
    </div>
  );
}

function Card2InteractiveVisual({ reduce }: { reduce: boolean }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 160, damping: 22, mass: 0.35 });
  const sy = useSpring(my, { stiffness: 160, damping: 22, mass: 0.35 });

  const rotX = useTransform(sy, [-1, 1], [8, -8]);
  const rotY = useTransform(sx, [-1, 1], [-12, 12]);
  const trX = useTransform(sx, [-1, 1], [-10, 10]);
  const trY = useTransform(sy, [-1, 1], [-7, 7]);

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      mx.set((px - 0.5) * 2);
      my.set((py - 0.5) * 2);
    },
    [mx, my],
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <div
      className="relative h-[320px] sm:h-[420px] w-full overflow-hidden"
      onPointerMove={reduce ? undefined : onMove}
      onPointerLeave={reduce ? undefined : onLeave}
      style={{ perspective: 1000 }}
    >
      {/* 3D stage */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 transform-gpu"
        style={{
          rotateX: rotX,
          rotateY: rotY,
          x: trX,
          y: trY,
        }}
      >
        <div className="absolute left-[6%] top-[18%] max-w-[240px] pointer-events-none">
          <EcgWidget reduce={reduce} />
        </div>
        <div className="absolute right-[5%] top-[10%] max-w-[210px] pointer-events-none">
          <HeartRateWidget reduce={reduce} />
        </div>
        <div className="absolute left-[12%] bottom-[12%] max-w-[260px] pointer-events-none">
          <MetabolismWidget reduce={reduce} />
        </div>
      </motion.div>
    </div>
  );
}

export function ServicesSection() {
  const reduce = !!useReducedMotion();

  return (
    <section
      id="services"
      className="relative"
      style={{ zIndex: 1, contentVisibility: "auto" }}
      aria-labelledby="services-heading"
    >
      <div className="relative mx-auto w-full max-w-[1480px] px-4 pt-16 pb-6 sm:px-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10">
        <header className="max-w-[740px]">
          <p className="text-[11px] sm:text-[12px] font-[560] tracking-[0.28em] text-[#C8A96E]">
            SERVICES
          </p>
          <div className="home-jewel-rule mt-3 sm:mt-4 max-w-lg" aria-hidden />
          <h2
            id="services-heading"
            className="home-jewel-heading mt-4 sm:mt-5 text-[24px] sm:text-[30px] lg:text-[38px] font-[560] leading-[1.12] tracking-[0.02em]"
            style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
          >
            Precision therapies that restore the metabolic system as a whole.
          </h2>
        </header>

        <div className="mt-8 sm:mt-10 lg:mt-12 space-y-6 sm:space-y-8 lg:space-y-10">
          {/* 1. Metabolic Recovery */}
          <motion.article
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-[#C8A96E]/18 bg-[#0f4842]/65 shadow-[0_26px_90px_rgba(0,0,0,0.32)] backdrop-blur-sm"
            style={{ contentVisibility: "auto" }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-10 top-0 h-[380px] w-[380px] rounded-full bg-[#C8A96E]/05 blur-3xl" />
              <div className="absolute right-[-100px] bottom-[-60px] h-[420px] w-[420px] rounded-full bg-[#001a1a]/45 blur-3xl" />
            </div>

            {/* DNA as a background layer (no standalone "image on the right") */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-y-0 right-0 w-[65%] sm:w-[55%] md:w-[52%]">
                <div className="relative h-full w-full">
                  <Image
                    src={dnaImg}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 65vw, (max-width: 768px) 55vw, 52vw"
                    priority={false}
                    className="select-none object-contain opacity-[0.85] drop-shadow-[0_30px_80px_rgba(0,0,0,0.5)] scale-[1.25]"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-10 grid gap-6 px-5 py-7 sm:gap-8 sm:px-7 sm:py-9 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-10 md:px-10 md:py-10 lg:gap-12 lg:px-12 lg:py-12">
              <div className="flex flex-col justify-center">
                <h3
                  className="text-[20px] sm:text-[22px] lg:text-[26px] font-[560] tracking-[0.02em] text-[#F0ECE4] leading-[1.2]"
                  style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
                >
                  Metabolic Recovery Programs
                </h3>
                <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.9] text-[#C2BDB5]">
                  Personalized programs designed to address insulin resistance, fatigue,
                  obesity, cardiometabolic stress, and long-term metabolic dysfunction.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                  <MetricPill label="FOCUS" value="INSULIN • ENERGY • INFLAMMATION" />
                  <MetricPill label="FORMAT" value="LONGITUDINAL CLINICIAN-LED PROGRAMS" />
                </div>
                <Link
                  href="/services/metabolic-programs"
                  className="mt-4 sm:mt-5 inline-flex w-full sm:w-fit items-center justify-center sm:justify-start rounded-full border border-[#C8A96E]/38 bg-gradient-to-r from-[#C8A96E]/18 to-[#A07840]/15 px-4 py-2.5 min-h-11 text-[10px] sm:text-[11px] tracking-[0.14em] text-[#F0ECE4] transition-all hover:border-[#E2C98A]/40 hover:shadow-[0_0_24px_rgba(200,169,110,0.14)]"
                >
                  LEARN MORE
                </Link>
              </div>

              <div className="relative min-h-[260px] sm:min-h-[320px]">
                {/* dot + analytics chip */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-[18%] hidden sm:block"
                  animate={
                    reduce ? undefined : { y: [0, -6, 0], opacity: [0.9, 1, 0.9] }
                  }
                  transition={
                    reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }
                >
                  <div className="relative">
                    <span className="absolute -left-5 top-4 h-[1px] w-8 bg-[#C8A96E]/50" />
                    <span className="absolute -left-6 top-3 h-2 w-2 rounded-full bg-[#E2C98A] shadow-[0_0_10px_rgba(226,201,138,0.40)]" />
                    <div className="ml-4 rounded-[18px] border border-[#C8A96E]/25 bg-[#134f49]/92 px-4 py-3 shadow-[0_20px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                      <p className="text-[11px] font-[560] tracking-[0.14em] text-[#C8A96E]">
                        GLUCOSE TRENDS
                      </p>
                      <div className="mt-1 flex items-end gap-1.5">
                        <span className="h-4 w-1 rounded-full bg-[#A07840]/80" />
                        <span className="h-6 w-1 rounded-full bg-[#C8A96E]/70" />
                        <span className="h-9 w-1 rounded-full bg-[#E2C98A]/90" />
                        <span className="h-7 w-1 rounded-full bg-[#C8A96E]/70" />
                        <span className="h-5 w-1 rounded-full bg-[#A07840]/80" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* metrics ring */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 bottom-5 hidden sm:block"
                  animate={reduce ? undefined : { rotate: [0, 4, 0], y: [0, 4, 0] }}
                  transition={
                    reduce ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }
                  }
                >
                  <div className="relative h-20 w-20 rounded-full border border-[#C8A96E]/30 bg-[#0f4842]/92 shadow-[0_18px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                    <div className="absolute inset-3 rounded-full border border-[#C8A96E]/38 border-dashed" />
                    <p className="absolute inset-0 flex items-center justify-center text-[11px] font-[560] text-[#F0ECE4]">
                      A1c ↓
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* 2. Advanced IV Drips */}
          <motion.article
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "100px" }}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-[#C8A96E]/18 bg-[#0f4842]/65 shadow-[0_26px_90px_rgba(0,0,0,0.32)] backdrop-blur-sm"
            style={{ contentVisibility: "auto" }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-6 top-0 h-[360px] w-[360px] rounded-full bg-[#C8A96E]/05 blur-3xl" />
              <div className="absolute -left-16 bottom-[-80px] h-[420px] w-[420px] rounded-full bg-[#001a1a]/40 blur-3xl" />
            </div>

            <div className="relative z-10 grid gap-6 px-5 py-7 sm:gap-8 sm:px-7 sm:py-9 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 md:px-10 md:py-10 lg:gap-12 lg:px-12 lg:py-12">
              {/* LEFT: interactive 3D ECG / heart rate / metabolism widgets */}
              <div className="relative min-h-[200px] sm:min-h-[260px] md:min-h-[320px]">
                {/* Keep sprint image in the foreground layer so widgets don't fully hide it */}
                <div className="pointer-events-none absolute inset-0 z-10">
                  <Image
                    src={sprintImg}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw"
                    priority={false}
                    className="select-none object-contain object-right-bottom -translate-x-[50%] translate-y-[0%] opacity-[0.95] drop-shadow-[0_30px_80px_rgba(32,42,44,0.36)] scale-[2]"
                  />
                </div>
                <div className="relative z-20">
                  <Card2InteractiveVisual reduce={reduce} />
                </div>
              </div>

              {/* RIGHT: copy */}
              <div className="flex flex-col justify-center">
                <h3
                  className="text-[20px] sm:text-[22px] lg:text-[26px] font-[560] tracking-[0.02em] text-[#F0ECE4] leading-[1.2]"
                  style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
                >
                  Advanced IV Drip Therapies
                </h3>
                <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.9] text-[#C2BDB5]">
                  Medically supervised IV protocols for vascular support, metabolic
                  activation, energy optimization, detoxification, and recovery.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                  <MetricPill label="TARGETS" value="FATIGUE • STRESS • RECOVERY" />
                  <MetricPill label="DELIVERY" value="IN-CLINIC INFUSION SESSIONS" />
                </div>
                <Link
                  href="/services/iv-therapy"
                  className="mt-4 sm:mt-5 inline-flex w-full sm:w-fit items-center justify-center sm:justify-start rounded-full border border-[#C8A96E]/38 bg-gradient-to-r from-[#C8A96E]/18 to-[#A07840]/15 px-4 py-2.5 min-h-11 text-[10px] sm:text-[11px] tracking-[0.14em] text-[#F0ECE4] transition-all hover:border-[#E2C98A]/40 hover:shadow-[0_0_24px_rgba(200,169,110,0.14)]"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </motion.article>

          {/* 3. Nutraceutical Protocols */}
          <motion.article
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-[#C8A96E]/18 bg-[#0f4842]/65 shadow-[0_26px_90px_rgba(0,0,0,0.32)] backdrop-blur-sm"
            style={{ contentVisibility: "auto" }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 top-[-40px] h-[360px] w-[360px] rounded-full bg-[#C8A96E]/05 blur-3xl" />
              <div className="absolute right-[-60px] bottom-[-80px] h-[420px] w-[420px] rounded-full bg-[#001a1a]/40 blur-3xl" />
              {/* pills as a background layer */}
                <div className="absolute inset-y-0 right-0 w-[70%] sm:w-[62%] md:w-[58%]">
                <div className="relative h-full w-full">
                  <Image
                    src={pillsImg}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 70vw, (max-width: 768px) 62vw, 58vw"
                    priority={false}
                      className="select-none object-contain opacity-[0.95] scale-[1.55]"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-10 grid gap-6 px-5 py-7 sm:gap-8 sm:px-7 sm:py-9 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-10 md:px-10 md:py-10 lg:gap-12 lg:px-12 lg:py-12">
              <div className="flex flex-col justify-center">
                <h3
                  className="text-[20px] sm:text-[22px] lg:text-[26px] font-[560] tracking-[0.02em] text-[#F0ECE4] leading-[1.2]"
                  style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
                >
                  Nutraceutical Protocols
                </h3>
                <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.9] text-[#C2BDB5]">
                  Clinically guided supplementation using high-quality, bioavailable
                  formulations chosen according to your metabolic profile.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                  <MetricPill label="APPROACH" value="LAB-INFORMED • EVIDENCE-LED" />
                  <MetricPill label="DELIVERY" value="CURATED STACKS & CYCLES" />
                </div>
                <Link
                  href="/services/nutraceuticals"
                  className="mt-4 sm:mt-5 inline-flex w-full sm:w-fit items-center justify-center sm:justify-start rounded-full border border-[#C8A96E]/38 bg-gradient-to-r from-[#C8A96E]/18 to-[#A07840]/15 px-4 py-2.5 min-h-11 text-[10px] sm:text-[11px] tracking-[0.14em] text-[#F0ECE4] transition-all hover:border-[#E2C98A]/40 hover:shadow-[0_0_24px_rgba(200,169,110,0.14)]"
                >
                  LEARN MORE
                </Link>
              </div>

              <div className="relative">
                <div className="relative mx-auto flex h-full max-w-[420px] items-center justify-center">
                  <div className="relative min-h-[200px] w-full sm:min-h-[260px] md:min-h-[320px]" />
                </div>
              </div>
            </div>
          </motion.article>

          {/* 4. Adult Vaccination Programme */}
          <motion.article
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "100px" }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-[#C8A96E]/18 bg-[#0f4842]/65 shadow-[0_26px_90px_rgba(0,0,0,0.32)] backdrop-blur-sm"
            style={{ contentVisibility: "auto" }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-8 top-[-24px] h-[360px] w-[360px] rounded-full bg-[#C8A96E]/05 blur-3xl" />
              <div className="absolute -left-16 bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#001a1a]/42 blur-3xl" />
              {/* virus image as a background layer (left side) */}
              <div className="absolute inset-y-0 left-0 w-[68%] sm:w-[58%] md:w-[54%]">
                <div className="relative h-full w-full">
                  <Image
                    src={virusImg}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 68vw, (max-width: 768px) 58vw, 54vw"
                    priority={false}
                    className="select-none object-contain object-left-center opacity-[0.9] scale-[1.08] drop-shadow-[0_30px_80px_rgba(0,0,0,0.48)]"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-10 grid gap-6 px-5 py-7 sm:gap-8 sm:px-7 sm:py-9 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 md:px-10 md:py-10 lg:gap-12 lg:px-12 lg:py-12">
              <div className="relative min-h-[200px] sm:min-h-[260px] md:min-h-[320px]" />

              <div className="flex flex-col justify-center">
                <h3
                  className="text-[20px] sm:text-[22px] lg:text-[26px] font-[560] tracking-[0.02em] text-[#F0ECE4] leading-[1.2]"
                  style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
                >
                  Adult Vaccination Programme
                </h3>
                <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.9] text-[#C2BDB5]">
                  Evidence-based adult immunization pathways designed for long-term
                  preventive health, travel protection, and risk-based booster planning
                  under clinician supervision.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                  <MetricPill label="FOCUS" value="PREVENTION • IMMUNITY • LONGEVITY" />
                  <MetricPill label="DELIVERY" value="SCHEDULED CLINIC VACCINATION PLANS" />
                </div>
                <Link
                  href="/services/adult-vaccination"
                  className="mt-4 sm:mt-5 inline-flex w-full sm:w-fit items-center justify-center sm:justify-start rounded-full border border-[#C8A96E]/38 bg-gradient-to-r from-[#C8A96E]/18 to-[#A07840]/15 px-4 py-2.5 min-h-11 text-[10px] sm:text-[11px] tracking-[0.14em] text-[#F0ECE4] transition-all hover:border-[#E2C98A]/40 hover:shadow-[0_0_24px_rgba(200,169,110,0.14)]"
                >
                  ENQUIRE NOW
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

