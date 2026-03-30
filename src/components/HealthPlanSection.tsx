"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

const LINE_D =
  "M120 415 C 220 170, 400 305, 505 255 S 690 120, 865 135";

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

type Step = {
  n: 1 | 2 | 3 | 4;
  title: string;
  body: string;
  t: number;
  card: { left: string; top: string; width: number; z: number };
  digit: { leftOffset: string; topOffset: string };
};

function StepCard({ step }: { step: Pick<Step, "n" | "title" | "body"> }) {
  return (
    <div className="relative rounded-[22px] border border-[#C8A96E]/22 bg-[#11524c]/90 px-6 py-5 shadow-[0_22px_70px_rgba(0,0,0,0.30)] backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div>
          <p className="text-[12px] font-[560] tracking-[0.22em] text-[#C8A96E]">
            STEP {step.n}
          </p>
          <p
            className="text-[25px] font-[600] tracking-[0.02em] text-[#F0ECE4]"
            style={{
              fontFamily:
                "var(--font-display), ui-serif, Georgia, serif",
            }}
          >
            {step.title}
          </p>
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-[1.85] text-[#C2BDB5]">{step.body}</p>
    </div>
  );
}

export function HealthPlanSection() {
  const outerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  // Refs for direct DOM mutations — zero React re-renders on scroll
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([null, null, null, null]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);

  // Dot positions extracted from SVG path (one-time measurement after mount)
  const nodesRef = useRef<{ x: number; y: number }[]>([
    { x: 120, y: 415 },
    { x: 360, y: 295 },
    { x: 520, y: 240 },
    { x: 865, y: 135 },
  ]);
  const svgPathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!svgPathRef.current) return;
    const el = svgPathRef.current;
    const total = el.getTotalLength();
    if (!total) return;
    const pAt = (t: number) => {
      const pt = el.getPointAtLength(total * t);
      return { x: pt.x, y: pt.y };
    };
    nodesRef.current = [pAt(0), pAt(1 / 3), pAt(2 / 3), pAt(1)];
  }, []);

  const steps = useMemo<Step[]>(
    () => [
      {
        n: 1,
        title: "Assess",
        body: "Clinical history, symptoms, lifestyle, and targeted investigations",
        t: 0,
        card: { left: "4%", top: "60%", width: 360, z: 4 },
        digit: { leftOffset: "-30px", topOffset: "-18px" },
      },
      {
        n: 2,
        title: "Analyze",
        body: "Metabolic mapping, nutritional evaluation, and biomarker interpretation",
        t: 1 / 3,
        card: { left: "18%", top: "18%", width: 320, z: 5 },
        digit: { leftOffset: "-22px", topOffset: "-18px" },
      },
      {
        n: 3,
        title: "Personalize",
        body: "A customized therapy plan combining the right interventions for your needs",
        t: 2 / 3,
        card: { left: "40%", top: "52%", width: 390, z: 4 },
        digit: { leftOffset: "-26px", topOffset: "-20px" },
      },
      {
        n: 4,
        title: "Optimize",
        body: "Ongoing follow-up, tracking, and refinement for sustained progress",
        t: 1,
        card: { left: "70%", top: "60%", width: 360, z: 6 },
        digit: { leftOffset: "-22px", topOffset: "-16px" },
      },
    ],
    []
  );

  const revealWindow = 0.12;

  // Direct DOM mutations on every scroll frame — no setState, no re-renders
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Update the animated progress line
    if (progressPathRef.current) {
      progressPathRef.current.style.strokeDashoffset = String(1 - v);
    }

    steps.forEach((s, i) => {
      const op = s.n === 1 ? 1 : smoothstep(s.t - revealWindow, s.t, v);
      const fadeY = 22 * (1 - op);

      // Dots
      const dot = dotRefs.current[i];
      if (dot) dot.style.opacity = String(op);

      // Cards: apply opacity + translateY only (left/top are static CSS from initial render)
      const card = cardRefs.current[i];
      if (card) {
        card.style.opacity = String(op);
        const xOffset = s.n === 3 ? -10 : s.n === 4 ? -155 : 0;
        const yOffset = s.n === 3 ? 34 : s.n === 4 ? -155 : 0;
        card.style.transform = `translateX(${xOffset}px) translateY(${fadeY + yOffset}px)`;
      }
    });
  });

  return (
    <section ref={outerRef} className="relative h-[300vh] bg-transparent" style={{ zIndex: 1 }}>
      <div className="sticky top-0 h-screen min-h-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_55%_at_35%_5%,rgba(255,236,210,0.08),transparent_58%),radial-gradient(75%_65%_at_100%_35%,rgba(20,90,85,0.12),transparent_55%)]" />
        </div>

        <div className="relative mx-auto h-full w-full max-w-[1480px] px-6 sm:px-10">
          <div className="pt-16 sm:pt-20">
            <p className="text-[11px] font-[560] tracking-[0.28em] text-[#C8A96E]">YOUR JOURNEY</p>
            <div className="home-jewel-rule mt-3 max-w-lg" aria-hidden />
            <h2
              className="home-jewel-heading mt-4 text-[34px] font-[560] leading-[1.08] tracking-[0.02em] sm:text-[44px] text-balance"
              style={{
                fontFamily:
                  "var(--font-display), ui-serif, Georgia, serif",
              }}
            >
              Your Health Plan, Built Around You
            </h2>
            <p className="mt-4 max-w-[72ch] text-[14px] leading-[1.95] text-[#C2BDB5] sm:text-[15px]">
              Every patient journey at Re-Vitalis begins with understanding the individual behind the lab
              report. We evaluate your health through a structured framework:
            </p>
          </div>

          <div className="absolute left-0 right-0 bottom-0 top-[150px]">
            <svg
              viewBox="0 0 1000 560"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="hpLineGrad" x1="0" y1="0" x2="1000" y2="0">
                  <stop offset="0%" stopColor="#A07840" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#C8A96E" stopOpacity="0.90" />
                  <stop offset="70%" stopColor="#E2C98A" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#C8A96E" stopOpacity="0.95" />
                </linearGradient>
                <filter id="hpLineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* base track path */}
              <path
                d={LINE_D}
                fill="none"
                stroke="url(#hpLineGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.18"
                ref={svgPathRef}
                pathLength={1}
              />

              {/* animated progress path — starts fully hidden (dashoffset=1), mutated via ref */}
              <path
                ref={progressPathRef}
                d={LINE_D}
                fill="none"
                stroke="url(#hpLineGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#hpLineGlow)"
                opacity="0.95"
                strokeDasharray="1 1"
                strokeDashoffset={1}
                pathLength={1}
              />

              {/* dots — initial opacity set per step; mutated via dotRefs */}
              {steps.map((s, i) => (
                <circle
                  key={s.n}
                  ref={(el) => { dotRefs.current[i] = el; }}
                  cx={nodesRef.current[i]?.x ?? 0}
                  cy={nodesRef.current[i]?.y ?? 0}
                  r={s.n === 1 || s.n === 4 ? 7 : 6}
                  fill="#C8A96E"
                  style={{ opacity: s.n === 1 ? 1 : 0 }}
                />
              ))}
            </svg>

            {/* Cards — left/top are static; opacity+transform mutated via cardRefs */}
            {steps.map((s, i) => {
              const nodes = nodesRef.current;
              const pos = nodes[i] ?? { x: 0, y: 0 };

              const left =
                s.n === 3 || s.n === 4
                  ? `${(pos.x / 1000) * 100}%`
                  : s.card.left;
              const top =
                s.n === 3 || s.n === 4
                  ? `${(pos.y / 560) * 100}%`
                  : s.card.top;

              const xOffset = s.n === 3 ? -10 : s.n === 4 ? -155 : 0;
              const yOffset = s.n === 3 ? 34 : s.n === 4 ? -155 : 0;

              return (
                <div
                  key={s.n}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="absolute pointer-events-none"
                  style={{
                    left,
                    top,
                    width: `${s.card.width}px`,
                    zIndex: s.card.z,
                    // Initial state: step 1 visible, rest hidden & offset down
                    opacity: s.n === 1 ? 1 : 0,
                    transform: `translateX(${xOffset}px) translateY(${s.n === 1 ? yOffset : 22 + yOffset}px)`,
                  }}
                >
                  <div
                    className="absolute select-none text-[54px] font-[560] text-[#C8A96E]/15"
                    style={{
                      left: s.digit.leftOffset,
                      top: s.digit.topOffset,
                    }}
                    aria-hidden="true"
                  >
                    {s.n}
                  </div>
                  <StepCard step={s} />
                </div>
              );
            })}
          </div>

          <div className="absolute left-0 right-0 bottom-10 px-6 sm:px-10 text-center pointer-events-none">
            <p className="mx-auto max-w-[80ch] text-[15px] leading-[1.9] text-[#DDD8D0]">
              This is not generic treatment. This is precision-guided recovery.
            </p>
            <div className="pointer-events-auto mt-4">
              <Link
                href="/services/metabolic-programs"
                className="inline-flex items-center rounded-full border border-[#C8A96E]/40 bg-gradient-to-r from-[#C8A96E]/18 to-[#A07840]/15 px-5 py-2 text-[11px] tracking-[0.14em] text-[#F0ECE4] transition-all hover:border-[#E2C98A]/40 hover:shadow-[0_0_24px_rgba(200,169,110,0.14)]"
              >
                SEE FULL PROGRAM DETAILS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
