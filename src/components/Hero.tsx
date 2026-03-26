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
      className="relative isolate overflow-hidden bg-mist grain hero-topo"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <NavBar />

      {/* Move hero composition (bg word + image + panel) together */}
      <div className="relative translate-y-6">
        {/* Background oversized word (behind everything, centered) */}
        <motion.div
          style={{ x: bgShiftX, y: bgShiftY }}
          className="pointer-events-none absolute inset-x-0 top-[36%] z-0 -translate-y-1/2 select-none"
        >
          <div className="mx-auto w-full max-w-[1480px] px-6">
            <div className="text-center -translate-x-[5.89vw] sm:-translate-x-[6vw]">
              <div
                className="font-[550image.png] uppercase tracking-[0.02em] text-white/30"
                style={{
                  fontFamily: "var(--font-display), ui-serif, Georgia, serif",
                  fontSize: "clamp(72px, 11.4vw, 220px)",
                  lineHeight: 0.86,
                  letterSpacing: "0.02em",
                }}
              >
                RE-VITALIS
              </div>
              <div
                className="mx-auto mt-3 max-w-[44ch] text-white/35"
                style={{
                  fontFamily:
                    "var(--font-display), ui-serif, Georgia, serif",
                  fontSize: "clamp(14px, 1.35vw, 22px)",
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
          className="pointer-events-none absolute right-[-110px] top-[0px] z-10 h-[620px] w-[780px] sm:right-[-200px] sm:top-[-16px] sm:h-[820px] sm:w-[1100px]"
        >
          <Image
            src={heroImg}
            alt=""
            fill
            priority
            className="object-contain object-top drop-shadow-[0_40px_90px_rgba(32,42,44,0.18)]"
          />
        </motion.div>

        <div className="relative z-20 mx-auto min-h-[100svh] w-full max-w-[1480px] px-6 pt-[92px]">
          {/* Hero composition: panel must sit above the character */}
          <div className="relative z-30 flex min-h-[calc(100svh-92px)] flex-col justify-end pb-10">
            <div className="relative flex-1">
              {/* Spacer keeps layout stable under the absolute character */}
            </div>

            {/* Lower glass content panel (wide, within the hero) */}
            <div className="relative z-30 mt-16 sm:mt-20">
              <motion.div
                initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[30px] border border-white/35 bg-white/14 backdrop-blur-3xl shadow-[0_30px_90px_rgba(32,42,44,0.22)]"
              >
              {/* Glass sheen + depth */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/28 via-white/12 to-white/6" />
                <div className="absolute -top-24 left-10 h-48 w-[520px] rotate-[-8deg] rounded-full bg-white/18 blur-2xl" />
                <div className="absolute -bottom-16 right-8 h-52 w-[560px] rotate-[10deg] rounded-full bg-white/12 blur-3xl" />
                <div className="absolute inset-0 ring-1 ring-white/10" />
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
                <div className="absolute -left-32 top-14 h-[460px] w-[460px] rounded-full border border-white/40" />
                <div className="absolute left-24 top-40 h-[560px] w-[560px] rounded-full border border-white/30" />
              </div>

              <div className="relative grid gap-9 px-9 pb-12 pt-12 md:grid-cols-[1fr_1fr] md:gap-12 md:px-12">
                <div className="max-w-[720px]">
                  <h1
                    className="text-[38px] font-[560] leading-[1.07] tracking-[-0.03em] text-white sm:text-[48px]"
                    style={{ fontFamily: "var(--font-display), ui-serif, serif" }}
                  >
                    Elevate Your Wellbeing. Restore Your Vitality.
                  </h1>
                  <p className="mt-5 text-[16px] leading-[1.9] text-white/80">
                    Transform the way you feel, perform, and live.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <motion.a
                      href="#contacts"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[12px] tracking-[0.1em] text-ink shadow-[0_18px_55px_rgba(32,42,44,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                      BOOK A CONSULTATION
                    </motion.a>
                    <motion.a
                      href="/programs"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                      className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-5 py-3 text-[12px] tracking-[0.1em] text-white/90 backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                      EXPLORE OUR PROGRAMS
                    </motion.a>
                  </div>
                </div>

                <div className="max-w-[760px]">
                  <div className="rounded-[22px] border border-white/25 bg-white/10 px-7 py-7 backdrop-blur-xl">
                    <p className="text-[14px] leading-[1.9] text-white/80 sm:text-[15px]">
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

      {/* Soft edge so the next section feels distinct */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#F2F3F3]" />
    </section>
  );
}

