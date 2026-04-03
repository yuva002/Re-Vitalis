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
      {/* NavBar sits on frosted glass: use dark ink/slate for contrast. Rest of hero keeps jewel palette below. */}
      <div
        className="relative z-50"
        style={
          {
            ["--ink" as string]: "#061b0e",
            ["--slate" as string]: "#3d4a42",
          } as React.CSSProperties
        }
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
                className="font-[550] uppercase tracking-[0.02em] text-[#EDE9E0]/52"
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
          className="pointer-events-none absolute right-[-195px] top-[-150px] z-10 h-[480px] w-[580px] sm:right-[-85px] sm:top-[-56px] sm:h-[620px] sm:w-[780px] lg:right-[-185px] lg:top-[-100px] lg:h-[820px] lg:w-[1100px]"
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

            {/* Lower glass content panel — full width of hero track */}
            <div className="relative z-30 mt-10 sm:mt-14 lg:mt-16 w-full">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full overflow-hidden rounded-xl border border-[#C8A96E]/25 bg-[#0f4842]/20 backdrop-blur-xl shadow-[0_18px_56px_-8px_rgba(0,0,0,0.28)] sm:rounded-2xl"
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

              <div className="relative grid w-full gap-5 px-5 py-6 sm:gap-6 sm:px-6 sm:py-7 md:grid-cols-2 md:gap-8 md:px-8 md:py-8 lg:gap-10 lg:px-10">
                <div className="min-w-0">
                  <h1
                    className="text-[26px] sm:text-[32px] lg:text-[40px] font-[520] leading-[1.08] tracking-[-0.035em] text-[#F0ECE4]"
                    style={{ fontFamily: "var(--font-display), ui-serif, serif" }}
                  >
                    Restore Your Metabolism. Reclaim Your Vitality
                  </h1>
                  <p className="mt-3 sm:mt-4 text-[13px] sm:text-[15px] font-light leading-[1.65] tracking-[0.01em] text-[#C2BDB5]/95">
                    Transform the way you feel, perform, and live.
                  </p>

                  <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row flex-wrap gap-2.5">
                    <motion.a
                      href="/programs"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                      className="inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-[#E2C98A] to-[#C8A96E] px-5 py-2.5 text-[10px] sm:text-[11px] tracking-[0.14em] text-[#1a0f00] font-[600] shadow-[0_10px_32px_rgba(200,169,110,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96E]/50 min-h-10 sm:min-h-11"
                    >
                      EXPLORE OUR PROGRAMS
                    </motion.a>
                  </div>
                </div>

                <div className="min-w-0 flex md:items-stretch">
                  <div className="w-full rounded-xl border border-[#C8A96E]/18 bg-[#0c4038]/22 px-4 py-4 sm:px-6 sm:py-5 backdrop-blur-md sm:rounded-[14px] md:flex md:min-h-full md:flex-col md:justify-center">
                    <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-light leading-[1.72] tracking-[0.01em] text-[#C2BDB5]/95">
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

