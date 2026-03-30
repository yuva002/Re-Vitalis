"use client";

import Link from "next/link";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
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

/** Find t in [tMin, tMax] (0–1 along path length) where the path is closest to (qx, qy). */
function closestTOnPathSegment(
  path: SVGPathElement,
  qx: number,
  qy: number,
  tMin: number,
  tMax: number,
  samples = 96,
) {
  const len = path.getTotalLength();
  if (!len) return (tMin + tMax) / 2;
  let bestT = tMin;
  let bestD = Infinity;
  for (let i = 0; i <= samples; i++) {
    const t = tMin + ((tMax - tMin) * i) / samples;
    const pt = path.getPointAtLength(len * t);
    const dx = pt.x - qx;
    const dy = pt.y - qy;
    const d = dx * dx + dy * dy;
    if (d < bestD) {
      bestD = d;
      bestT = t;
    }
  }
  return bestT;
}

type Step = {
  n: 1 | 2 | 3 | 4;
  title: string;
  body: string;
  t: number;
  card: { left: string; top: string; width: number; z: number };
  digit: { leftOffset: string; topOffset: string };
};

/** Pixel nudge so cards sit beside the path / clear the bottom slogan (must match scroll handler). */
function getCardPixelOffsets(n: Step["n"]): { x: number; y: number } {
  switch (n) {
    case 2:
      return { x: -20, y: -20 };
    case 3:
      return { x: -2, y: -5 };
    case 4:
      return { x: -195, y: -155 };
    default:
      return { x: 0, y: 0 };
  }
}

function StepCard({ step }: { step: Pick<Step, "n" | "title" | "body"> }) {
  return (
    <div className="relative rounded-xl sm:rounded-[22px] border border-[#C8A96E]/22 bg-[#11524c]/90 px-5 py-4 sm:px-6 sm:py-5 shadow-[0_22px_70px_rgba(0,0,0,0.30)] backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div>
          <p className="text-[11px] sm:text-[12px] font-[560] tracking-[0.22em] text-[#C8A96E]">
            STEP {step.n}
          </p>
          <p
            className="text-[22px] sm:text-[25px] font-[600] tracking-[0.02em] text-[#F0ECE4] leading-[1.15]"
            style={{
              fontFamily:
                "var(--font-display), ui-serif, Georgia, serif",
            }}
          >
            {step.title}
          </p>
        </div>
      </div>
      <p className="mt-3 text-[13px] sm:text-[13px] leading-[1.85] text-[#C2BDB5]">{step.body}</p>
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

  /** Geometry only (no `pathLength`) — reliable getTotalLength / getPointAtLength for dot placement */
  const measurePathRef = useRef<SVGPathElement | null>(null);

  /**
   * Dots: steps 2 & 3 snapped onto the line. Card 3 uses the same point as dot 3 so it sits by the line.
   * Card 4: path end (unchanged).
   */
  const [measured, setMeasured] = useState<{
    dots: { x: number; y: number }[];
    card4: { x: number; y: number };
  } | null>(null);

  useLayoutEffect(() => {
    const el = measurePathRef.current;
    if (!el) return;
    const total = el.getTotalLength();
    if (!total) return;

    const pAt = (u: number) => {
      const pt = el.getPointAtLength(total * u);
      return { x: pt.x, y: pt.y };
    };

    // ViewBox targets — only for placing dots 2 & 3 on the curve (near Analyze / Personalize)
    const target2 = { x: 195, y: 108 };
    const target3 = { x: 410, y: 292 };

    let t2 = closestTOnPathSegment(el, target2.x, target2.y, 0.08, 0.42);
    let t3 = closestTOnPathSegment(el, target3.x, target3.y, 0.48, 0.88);
    if (t2 >= t3) {
      t3 = Math.min(0.92, t2 + 0.1);
    }

    const dots = [pAt(0), pAt(t2), pAt(t3), pAt(1)];
    setMeasured({
      dots,
      card4: pAt(1),
    });
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
        card: { left: "14%", top: "24%", width: 320, z: 5 },
        digit: { leftOffset: "-22px", topOffset: "-18px" },
      },
      {
        n: 3,
        title: "Personalize",
        body: "A customized therapy plan combining the right interventions for your needs",
        t: 2 / 3,
        card: { left: "10%", top: "52%", width: 390, z: 4 },
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
        const { x: ox, y: oy } = getCardPixelOffsets(s.n);
        card.style.transform = `translateX(${ox}px) translateY(${fadeY + oy}px)`;
      }
    });
  });

  return (
    <section ref={outerRef} className="relative lg:h-[300vh] bg-transparent" style={{ zIndex: 1 }}>
      <div className="lg:sticky lg:top-0 lg:h-screen lg:min-h-0 lg:overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_55%_at_35%_5%,rgba(255,236,210,0.08),transparent_58%),radial-gradient(75%_65%_at_100%_35%,rgba(20,90,85,0.12),transparent_55%)]" />
        </div>

        <div className="relative mx-auto h-full w-full max-w-[1480px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          {/* z-index keeps title copy above the absolute SVG/card layer; extra bottom padding clears card 2 (Analyze) */}
          <div className="relative z-20 lg:pt-12 lg:pb-8 lg:pr-4">
            <p className="text-[11px] font-[560] tracking-[0.28em] text-[#C8A96E]">YOUR JOURNEY</p>
            <div className="home-jewel-rule mt-3 max-w-lg" aria-hidden />
            <h2
              className="home-jewel-heading mt-4 text-[26px] sm:text-[34px] lg:text-[44px] font-[560] leading-[1.08] tracking-[0.02em] text-balance"
              style={{
                fontFamily:
                  "var(--font-display), ui-serif, Georgia, serif",
              }}
            >
              Your Health Plan, Built Around You
            </h2>
            <p className="mt-4 max-w-[72ch] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.95] text-[#C2BDB5]">
              Every patient journey at Re-Vitalis begins with understanding the individual behind the lab
              report. We evaluate your health through a structured framework:
            </p>
          </div>

          {/* Mobile: Simple vertical stack */}
          <div className="lg:hidden mt-8 space-y-6">
            {steps.map((s) => (
              <div key={s.n}>
                <StepCard step={s} />
              </div>
            ))}
            <Link
              href="/programs"
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center min-h-11 rounded-full border border-[#C8A96E]/38 bg-gradient-to-r from-[#C8A96E]/14 to-[#A07840]/16 px-5 py-2.5 text-[11px] tracking-[0.17em] text-[#F0ECE4] transition-all hover:border-[#E2C98A]/55 hover:shadow-[0_0_28px_rgba(200,169,110,0.18)]"
            >
              EXPLORE OUR PROGRAMS
            </Link>
          </div>

          {/* Desktop: SVG scroll animation */}
          <div className="hidden lg:block absolute inset-x-0 bottom-0 z-10 lg:top-[228px]">
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

              {/* True geometry for dot placement (no pathLength normalization) */}
              <path
                ref={measurePathRef}
                d={LINE_D}
                fill="none"
                stroke="none"
                opacity={0}
                pointerEvents="none"
                aria-hidden
              />

              {/* base track path */}
              <path
                d={LINE_D}
                fill="none"
                stroke="url(#hpLineGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.18"
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

              {/* dots — on-path positions from layout measure; opacity driven by scroll */}
              {measured &&
                steps.map((s, i) => (
                  <circle
                    key={s.n}
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    cx={measured.dots[i]?.x ?? 0}
                    cy={measured.dots[i]?.y ?? 0}
                    r={s.n === 1 || s.n === 4 ? 7 : 6}
                    fill="#C8A96E"
                    style={{ opacity: s.n === 1 ? 1 : 0 }}
                  />
                ))}
            </svg>

            {/* Cards 1–2: % layout. Card 3: anchored at third dot. Card 4: path end. */}
            {steps.map((s, i) => {
              const dot3 = measured?.dots[2];
              const left =
                s.n === 3 && dot3
                  ? `${(dot3.x / 1000) * 100}%`
                  : s.n === 4 && measured
                    ? `${(measured.card4.x / 1000) * 100}%`
                    : s.card.left;
              const top =
                s.n === 3 && dot3
                  ? `${(dot3.y / 560) * 100}%`
                  : s.n === 4 && measured
                    ? `${(measured.card4.y / 560) * 100}%`
                    : s.card.top;

              const { x: ox, y: oy } = getCardPixelOffsets(s.n);

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
                    transform: `translateX(${ox}px) translateY(${s.n === 1 ? oy : 22 + oy}px)`,
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

          <div className="absolute left-0 right-0 bottom-5 z-30 px-6 sm:bottom-5 sm:px-10 lg:bottom-5 text-center pointer-events-none">
            <p className="mx-auto max-w-[80ch] text-[15px] leading-[1.9] text-[#DDD8D0] drop-shadow-[0_2px_12px_rgba(6,40,36,0.75)]">
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
