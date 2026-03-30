"use client";

import Image from "next/image";
import Link from "next/link";
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
      className="relative overflow-hidden"
      style={{ zIndex: 1, contain: "layout style" }}
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-6 h-[520px] w-[520px] rounded-full bg-[#C8A96E]/06 blur-3xl" />
        <div className="absolute -right-48 bottom-[-140px] h-[560px] w-[560px] rounded-full bg-[#134742]/55 blur-3xl" />
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
              <div className="relative flex h-full translate-y-[-56px] items-center justify-center">
                {/* portrait (transparent background) */}
                <div className="relative w-full min-h-[620px] md:min-h-[700px]">
                  <Image
                    src={drRamana}
                    alt="Dr. Ramana Naidu Darmisetty"
                    fill
                    sizes="(min-width: 800px) 60vw, 100vw"
                    priority={false}
                    className="select-none object-contain drop-shadow-[0_40px_95px_rgba(0,0,0,0.45)] md:scale-[1.32]"
                  />
                </div>
              </div>

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute right-16 top-16 hidden md:block"
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
                <div className="transform-gpu rounded-[18px] border border-[#C8A96E]/25 bg-[#134f49]/88 px-4 py-3 shadow-[0_26px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl will-change-transform">
                  <p className="text-[10px] font-[560] tracking-[0.22em] text-[#C8A96E]">
                    PHYSICIAN & FOUNDER
                  </p>
                  <p
                    className="mt-1 max-w-[22ch] text-[13px] font-[560] leading-[1.15] text-[#F0ECE4]"
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
                className="pointer-events-none absolute left-16 bottom-32 hidden md:block"
                style={{ perspective: 900 }}
                animate={reduce ? undefined : { y: [0, 12, 0], rotateZ: [0, -0.5, 0] }}
                transition={
                  reduce ? undefined : { duration: 6.2, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <div className="transform-gpu rounded-[18px] border border-[#C8A96E]/25 bg-[#134f49]/88 px-4 py-3 shadow-[0_26px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl will-change-transform">
                  <p className="text-[10px] font-[560] tracking-[0.22em] text-[#C8A96E]">
                    RATING
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <p
                      className="text-[18px] font-[560] leading-none text-[#F0ECE4]"
                      style={{
                        fontFamily:
                          "var(--font-display), ui-serif, Georgia, serif",
                      }}
                    >
                      4.9
                    </p>
                    <div className="flex items-center gap-[3px] text-[#C8A96E]">
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
              <p className="text-[12px] font-[560] tracking-[0.28em] text-[#C8A96E]">
                ABOUT US
              </p>
              <div className="home-jewel-rule mt-5 max-w-md" aria-hidden />
              <h2
                id="about-heading"
                className="home-jewel-heading mt-5 text-balance text-[30px] font-[560] leading-[1.08] tracking-[0.02em] sm:text-[40px]"
                style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
              >
                A New Era of Personalized Metabolic Care
              </h2>

              <div className="mt-6 space-y-4 text-[14px] leading-[1.95] text-[#C2BDB5] sm:text-[15px]">
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
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#C8A96E]/25 bg-[#0f4842]/85 px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              >
                <span className="h-2 w-2 rounded-full bg-[#E2C98A]/80 shadow-[0_0_10px_rgba(226,201,138,0.40)]" aria-hidden="true" />
                <p className="text-[12px] font-[560] tracking-[0.14em] text-[#DDD8D0]">
                  ROOT-CAUSE • BIOMARKERS • LONG-TERM VITALITY
                </p>
              </motion.div>
              <Link
                href="/about-doctor"
                className="mt-9 inline-flex md:translate-x-6 items-center rounded-full border border-[#C8A96E]/38 bg-gradient-to-r from-[#C8A96E]/14 to-[#A07840]/16 px-5 py-2 text-[12px] tracking-[0.17em] text-[#F0ECE4] transition-all hover:border-[#E2C98A]/55 hover:shadow-[0_0_28px_rgba(200,169,110,0.18)]"
              >
                ABOUT US
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

