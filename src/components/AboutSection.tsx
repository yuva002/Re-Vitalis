"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import drRamana from "../../public/Dr-Ramana-DP.png";

function StarIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className ?? "h-4 w-4"}
      fill="currentColor"
    >
      <path d="M12 2.8l2.87 6.1 6.63.56-5 4.33 1.52 6.43L12 16.8 6 20.22l1.52-6.43-5-4.33 6.63-.56L12 2.8z" />
    </svg>
  );
}

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F2F3F3]"
      aria-labelledby="about-heading"
    >
      {/* smooth continuity from hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 inset-x-0 h-36 bg-gradient-to-b from-[#F2F3F3]/0 to-[#F2F3F3]" />
        <div className="absolute -left-44 top-6 h-[520px] w-[520px] rounded-full bg-white/55 blur-3xl" />
        <div className="absolute -right-48 bottom-[-140px] h-[560px] w-[560px] rounded-full bg-white/45 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1480px] px-6 py-16 sm:py-24">
        <div className="relative">
          <div className="grid items-stretch gap-10 md:grid-cols-[minmax(520px,44%)_1fr] md:gap-14">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, x: -18, filter: "blur(10px)" }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative isolate"
            >
              {/* portrait + floats are contained to this column */}
              <div className="relative flex h-full items-center justify-center">
                {/* portrait (transparent background) */}
                <div className="relative w-full min-h-[500px] md:min-h-[500px]">
                  <Image
                    src={drRamana}
                    alt="Dr. Ramana Naidu Darmisetty"
                    fill
                    sizes="(min-width: 800px) 60vw, 100vw"
                    priority={false}
                    className="select-none object-contain drop-shadow-[0_40px_95px_rgba(32,42,44,0.20)] md:scale-[1.18]"
                  />
                </div>
              </div>

              {/* floating 3d cards */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-10 hidden md:block"
                style={{ perspective: 900 }}
                animate={
                  reduce
                    ? undefined
                    : { y: [0, -10, 0], rotateZ: [0, 0.4, 0], rotateX: [0, 1.2, 0] }
                }
                transition={
                  reduce
                    ? undefined
                    : { duration: 5.4, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <div className="transform-gpu rounded-[18px] border border-white/45 bg-white/55 px-4 py-3 shadow-[0_26px_70px_rgba(32,42,44,0.14)] backdrop-blur-2xl">
                  <p className="text-[10px] font-[560] tracking-[0.22em] text-slate">
                    PHYSICIAN & FOUNDER
                  </p>
                  <p
                    className="mt-1 max-w-[22ch] text-[13px] font-[560] leading-[1.15] text-ink"
                    style={{
                      fontFamily:
                        "var(--font-display), ui-serif, Georgia, serif",
                    }}
                  >
                    Dr. Ramana Naidu Darmisetty
                  </p>
                </div>
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute left-6 bottom-10 hidden md:block"
                style={{ perspective: 900 }}
                animate={reduce ? undefined : { y: [0, 12, 0], rotateZ: [0, -0.5, 0] }}
                transition={
                  reduce ? undefined : { duration: 6.2, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <div className="transform-gpu rounded-[18px] border border-white/45 bg-white/55 px-4 py-3 shadow-[0_26px_70px_rgba(32,42,44,0.14)] backdrop-blur-2xl">
                  <p className="text-[10px] font-[560] tracking-[0.22em] text-slate">
                    RATING
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <p
                      className="text-[18px] font-[560] leading-none text-ink"
                      style={{
                        fontFamily:
                          "var(--font-display), ui-serif, Georgia, serif",
                      }}
                    >
                      4.9
                    </p>
                    <div className="flex items-center gap-[3px] text-ink/70">
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 14, filter: "blur(10px)" }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <p className="text-[12px] font-[560] tracking-[0.22em] text-slate">
                ABOUT US
              </p>
              <h2
                id="about-heading"
                className="mt-4 text-balance text-[30px] font-[560] leading-[1.08] tracking-[-0.025em] text-ink sm:text-[40px]"
                style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
              >
                A New Era of Personalized Metabolic Care
              </h2>

              <div className="mt-6 space-y-4 text-[14px] leading-[1.95] text-slate sm:text-[15px]">
                <p>
                  Modern health problems are rarely isolated. Fatigue, weight gain,
                  insulin resistance, inflammation, poor recovery, and cardiovascular
                  risk are often connected to deeper metabolic dysfunction.
                </p>
                <p>
                  At Re-Vitalis, we do not believe in one-size-fits-all care. We focus
                  on identifying the root causes of imbalance and building
                  personalized recovery strategies based on your biomarkers, symptoms,
                  lifestyle, and long-term health goals.
                </p>
                <p>
                  Our model is designed for those who want more than temporary symptom
                  relief. We help you move toward true metabolic recovery, better
                  vitality, and healthier aging.
                </p>
              </div>

              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-white/45 px-5 py-3 shadow-[0_20px_60px_rgba(32,42,44,0.08)] backdrop-blur-xl"
              >
                <span className="h-2 w-2 rounded-full bg-ink/55" aria-hidden="true" />
                <p className="text-[12px] font-[560] tracking-[0.14em] text-ink">
                  ROOT-CAUSE • BIOMARKERS • LONG-TERM VITALITY
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

