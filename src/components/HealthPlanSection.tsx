"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useScroll } from "motion/react";

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
  // reveal threshold along scroll progress (0..1)
  t: number;
  // scattered positions (percentages relative to the sticky stage)
  card: { left: string; top: string; width: number; z: number };
  digit: { leftOffset: string; topOffset: string };
};

function StepCard({ step }: { step: Pick<Step, "n" | "title" | "body"> }) {
  return (
    <div className="relative rounded-[22px] border border-border bg-white/70 px-6 py-5 shadow-[0_22px_70px_rgba(32,42,44,0.10)] backdrop-blur-2xl">
      <div className="flex items-center gap-3">
        <div>
          <p className="text-[12px] font-[560] tracking-[0.22em] text-slate">
            STEP {step.n}
          </p>
          <p
            className="text-[25px] font-[600] tracking-[-0.02em] text-ink"
            style={{
              fontFamily:
                "var(--font-display), ui-serif, Georgia, serif",
            }}
          >
            {step.title}
          </p>
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-[1.85] text-slate">{step.body}</p>
    </div>
  );
}

export function HealthPlanSection() {
  const outerRef = useRef<HTMLElement | null>(null);

  // sticky stage stays centered; scroll progress drives line + reveal
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setProgress(v));
    return () => unsub();
  }, [scrollYProgress]);

  // Dot points extracted from the SVG path so the line always reaches them.
  const svgPathRef = useRef<SVGPathElement | null>(null);
  const [nodes, setNodes] = useState<[{ x: number; y: number }, { x: number; y: number }, { x: number; y: number }, { x: number; y: number }]>([
    { x: 120, y: 415 },
    { x: 360, y: 295 },
    { x: 520, y: 240 },
    { x: 865, y: 135 },
  ]);

  useEffect(() => {
    if (!svgPathRef.current) return;
    const el = svgPathRef.current;
    const total = el.getTotalLength();
    if (!total) return;
    const pAt = (t: number) => {
      const pt = el.getPointAtLength(total * t);
      return { x: pt.x, y: pt.y };
    };
    setNodes([pAt(0), pAt(1 / 3), pAt(2 / 3), pAt(1)]);
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
        // Place diagonally below dot #3 (visually prevents overlap with #4)
        card: { left: "40%", top: "52%", width: 390, z: 4 },
        digit: { leftOffset: "-26px", topOffset: "-20px" },
      },
      {
        n: 4,
        title: "Optimize",
        body: "Ongoing follow-up, tracking, and refinement for sustained progress",
        t: 1,
        // After dot #4 on the right side.
        // Higher z-index so it doesn't get overlapped by card #3.
        card: { left: "70%", top: "60%", width: 360, z: 6 },
        digit: { leftOffset: "-22px", topOffset: "-16px" },
      },
    ],
    []
  );

  // Progress mapping for each step (smooth + sequential).
  const revealWindow = 0.12;

  // With `pathLength={1}` and `strokeDasharray="1 1"`, dashoffset maps directly to progress.
  const dashOffset = 1 - progress; // 1 -> hidden, 0 -> fully drawn

  return (
    <section ref={outerRef} className="relative h-[380vh]" style={{ zIndex: 1 }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_0%,rgba(59,130,246,0.10),transparent_60%),radial-gradient(70%_70%_at_100%_40%,rgba(59,130,246,0.08),transparent_55%)]" />
        </div>

        <div className="relative mx-auto h-full w-full max-w-[1480px] px-6 sm:px-10">
          <div className="pt-16 sm:pt-20">
            <h2
              className="text-[34px] font-[560] leading-[1.06] tracking-[-0.03em] text-ink sm:text-[44px] text-balance"
              style={{
                fontFamily:
                  "var(--font-display), ui-serif, Georgia, serif",
              }}
            >
              Your Health Plan, Built Around You
            </h2>
            <p className="mt-4 max-w-[72ch] text-[14px] leading-[1.95] text-slate sm:text-[15px]">
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
                  <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="var(--accent-blue)" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.95" />
                </linearGradient>
                <filter id="hpLineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* base path */}
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

              {/* progress path */}
              <path
                d={LINE_D}
                fill="none"
                stroke="url(#hpLineGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#hpLineGlow)"
                opacity="0.95"
                strokeDasharray="1 1"
                strokeDashoffset={dashOffset}
                pathLength={1}
              />

              {/* dots: only appear as their cards reveal */}
              {steps.map((s) => {
                const op = s.n === 1 ? 1 : smoothstep(s.t - revealWindow, s.t, progress);
                const pos =
                  s.n === 1
                    ? nodes[0]
                    : s.n === 2
                      ? nodes[1]
                      : s.n === 3
                        ? nodes[2]
                        : nodes[3];
                const r = s.n === 1 || s.n === 4 ? 7 : 6;
                return (
                  <circle
                    key={s.n}
                    cx={pos.x}
                    cy={pos.y}
                    r={r}
                    fill="#3B82F6"
                    opacity={op}
                  />
                );
              })}
            </svg>

            {/* Cards */}
            {steps.map((s) => {
              const op = s.n === 1
                ? 1
                : smoothstep(s.t - revealWindow, s.t, progress);
              const y = 22 * (1 - op);

              const pos =
                s.n === 1
                  ? nodes[0]
                  : s.n === 2
                    ? nodes[1]
                    : s.n === 3
                      ? nodes[2]
                      : nodes[3];

              // Anchor cards 3 & 4 to their corresponding dot coordinates,
              // then apply small editorial offsets to match your requested layout.
              const left =
                s.n === 3 || s.n === 4
                  ? `${(pos.x / 1000) * 100}%`
                  : s.card.left;
              const top =
                s.n === 3 || s.n === 4
                  ? `${(pos.y / 560) * 100}%`
                  : s.card.top;

              // Editorial offsets to match the screenshot layout:
              // - Card 3: bring it closer to dot #3.
              // - Card 4: shift it left so it stays inside the viewport near the last dot.
              const xOffset = s.n === 3 ? -10 : s.n === 4 ? -155 : 0;
              // Card 4 needs to sit higher (above card 3) and near the last dot.
              const yOffset = s.n === 3 ? 34 : s.n === 4 ? -155 : 0;
              const rotate = s.n === 3 ? 0 : 0;

              const transform = `translateX(${xOffset}px) translateY(${y + yOffset}px) rotate(${rotate}deg)`;
              return (
                <div
                  key={s.n}
                  className="absolute pointer-events-none"
                  style={{
                    left,
                    top,
                    width: `${s.card.width}px`,
                    zIndex: s.card.z,
                    opacity: op,
                    transform,
                  }}
                >
                  {/* low opacity step digit */}
                  <div
                    className="absolute select-none text-[54px] font-[560] text-ink/15"
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
            <p className="mx-auto max-w-[80ch] text-[15px] leading-[1.9] text-ink/90">
              This is not generic treatment. This is precision-guided recovery.
            </p>
            <div className="pointer-events-auto mt-4">
              <Link
                href="/services/metabolic-programs"
                className="inline-flex items-center rounded-full border border-border bg-white/75 px-5 py-2 text-[11px] tracking-[0.12em] text-ink hover:bg-white"
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

