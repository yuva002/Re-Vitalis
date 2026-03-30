"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useCallback } from "react";
import { NavBar } from "./NavBar";
import heroImg from "../../public/hero-img.png";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 22, mass: 0.4 });

  const bgShiftX = useTransform(sx, [-1, 1], [-14, 14]);
  const bgShiftY = useTransform(sy, [-1, 1], [-10, 10]);
  const charX = useTransform(sx, [-1, 1], [-8, 8]);
  const charY = useTransform(sy, [-1, 1], [-6, 6]);

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      mx.set((px - 0.5) * 2);
      my.set((py - 0.5) * 2);
    },
    [mx, my]
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <section
      className="relative isolate overflow-hidden"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {/* Light text on dark jewel hero — NavBar uses `text-ink` / `text-slate` from :root */}
      <div
        className="relative z-50"
        style={{ ["--ink" as string]: "#F0ECE4", ["--slate" as string]: "#C2BDB5" } as React.CSSProperties}
      >
        <NavBar />
      </div>

      {/* Move hero composition (bg word + image + panel) together */}
      <div className="relative translate-y-6">
        {/* Background oversized word (behind everything, centered) */}
        <motion.div
          style={{ x: bgShiftX, y: bgShiftY }}
          className="pointer-events-none absolute inset-x-0 top-[36%] z-0 -translate-y-1/2 select-none"
        >
          <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6">
            <div className="text-center -translate-x-[2vw] sm:-translate-x-[5.89vw] lg:-translate-x-[13vw]">
              <div
                className="font-[550] uppercase tracking-[0.02em] text-[#F0ECE4]/28"
                style={{
                  fontFamily: "var(--font-display), ui-serif, Georgia, serif",
                  fontSize: "clamp(56px, 10.4vw, 220px)",
                  lineHeight: 0.86,
                  letterSpacing: "0.02em",
                }}
              >
                RE-VITALIS
              </div>
              <div
                className="mx-auto mt-2 sm:mt-3 max-w-[44ch] text-[#C8A96E]/50"
                style={{
                  fontFamily:
                    "var(--font-display), ui-serif, Georgia, serif",
                  fontSize: "clamp(12px, 1.35vw, 22px)",
                  lineHeight: 1.15,
                  letterSpacing: "0.01em",
                }}
              >
                We don’t just treat diseases — we restore metabolism.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Character anchored to viewport edge (slightly cropped) */}
        <motion.div
          style={{ x: charX, y: charY }}
          className="pointer-events-none absolute right-[-220px] top-[-40px] z-10 h-[480px] w-[580px] sm:right-[-110px] sm:top-[0px] sm:h-[620px] sm:w-[780px] lg:right-[-200px] lg:top-[-16px] lg:h-[820px] lg:w-[1100px]"
        >
          <Image
            src={heroImg}
            alt=""
            fill
            priority
            className="object-contain object-top drop-shadow-[0_40px_90px_rgba(32,42,44,0.18)]"
          />
        </motion.div>

        <div className="relative z-20 mx-auto min-h-[100svh] w-full max-w-[1480px] px-4 pt-[72px] sm:px-6 sm:pt-[92px]">
          {/* Hero composition: panel must sit above the character */}
          <div className="relative z-30 flex min-h-[calc(100svh-72px)] sm:min-h-[calc(100svh-92px)] flex-col justify-end pb-6 sm:pb-10">
            <div className="relative flex-1">
              {/* Spacer keeps layout stable under the absolute character */}
            </div>

            {/* Lower glass content panel (wide, within the hero) */}
            <div className="relative z-30 mt-12 sm:mt-16 lg:mt-20">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-2xl sm:rounded-[30px] border border-[#C8A96E]/22 bg-[#0f4842]/22 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.30)]"
              >
              {/* Glass sheen + depth */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E2C98A]/07 via-transparent to-[#B7F7E8]/06" />
                <div className="absolute -top-24 left-10 h-48 w-[520px] rotate-[-8deg] rounded-full bg-[#C8A96E]/06 blur-2xl" />
                <div className="absolute -bottom-16 right-8 h-52 w-[560px] rotate-[10deg] rounded-full bg-[#93CFC4]/05 blur-3xl" />
                <div className="absolute inset-0 ring-1 ring-[#C8A96E]/12" />
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
                <div className="absolute -left-32 top-14 h-[460px] w-[460px] rounded-full border border-[#F0ECE4]/12" />
                <div className="absolute left-24 top-40 h-[560px] w-[560px] rounded-full border border-[#C8A96E]/10" />
              </div>

              <div className="relative grid gap-6 px-5 py-8 sm:gap-9 sm:px-9 sm:py-12 md:grid-cols-[1fr_1fr] md:gap-12 md:px-12">
                <div className="max-w-[720px]">
                  <h1
                    className="text-[28px] sm:text-[38px] lg:text-[48px] font-[560] leading-[1.07] tracking-[-0.03em] text-[#F0ECE4]"
                    style={{ fontFamily: "var(--font-display), ui-serif, serif" }}
                  >
                    Elevate Your Wellbeing. Restore Your Vitality.
                  </h1>
                  <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] leading-[1.9] text-[#C2BDB5]">
                    Transform the way you feel, perform, and live.
                  </p>

                  <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
                    <motion.a
                      href="#contacts"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E2C98A] to-[#C8A96E] px-5 py-3 text-[11px] sm:text-[12px] tracking-[0.12em] text-[#1a0f00] font-[650] shadow-[0_14px_40px_rgba(200,169,110,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96E]/50 min-h-11 sm:min-h-12"
                    >
                      BOOK A CONSULTATION
                    </motion.a>
                    <motion.a
                      href="/programs"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                      className="inline-flex items-center justify-center rounded-full border border-[#F0ECE4]/30 bg-[#F0ECE4]/08 px-5 py-3 text-[11px] sm:text-[12px] tracking-[0.12em] text-[#F0ECE4] backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96E]/40 min-h-11 sm:min-h-12"
                    >
                      EXPLORE OUR PROGRAMS
                    </motion.a>
                  </div>
                </div>

                <div className="max-w-[760px]">
                  <div className="rounded-2xl sm:rounded-[22px] border border-[#C8A96E]/16 bg-[#0c4038]/25 px-5 py-5 sm:px-7 sm:py-7 backdrop-blur-md">
                    <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.85] text-[#C2BDB5]">
                      At Re-Vitalis Wellness, we go beyond conventional
                      healthcare. We combine medical science, advanced therapies,
                      and personalized care to help you restore energy, improve
                      metabolic health, and achieve long-term vitality.
                    </p>
                  </div>
                </div>
              </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* No fade needed - same background continues below */}
    </section>
  );
}

