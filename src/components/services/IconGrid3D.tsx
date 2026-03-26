"use client";

import { useEffect, useRef } from "react";
import { Activity, Heart, Brain, Zap, Shield, TrendingUp } from "lucide-react";

const icons = [Activity, Heart, Brain, Zap, Shield, TrendingUp];

export function IconGrid3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let time = 0;
    let raf = 0;

    const animate = () => {
      time += 0.01;
      const items = container.querySelectorAll<HTMLDivElement>("[data-float]");
      
      items.forEach((item, idx) => {
        const y = Math.sin(time + idx * 0.8) * 8;
        const rotate = Math.cos(time + idx * 0.5) * 6;
        item.style.transform = `translateY(${y}px) rotate(${rotate}deg)`;
      });

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative h-full w-full">
        {icons.map((Icon, idx) => {
          const positions = [
            { top: "12%", left: "8%", size: 32, opacity: 0.15 },
            { top: "25%", right: "15%", size: 40, opacity: 0.18 },
            { top: "58%", left: "12%", size: 36, opacity: 0.16 },
            { bottom: "18%", right: "10%", size: 38, opacity: 0.17 },
            { top: "72%", left: "85%", size: 34, opacity: 0.14 },
            { top: "8%", left: "75%", size: 30, opacity: 0.13 },
          ];
          const pos = positions[idx];

          return (
            <div
              key={idx}
              data-float
              className="absolute"
              style={{
                ...pos,
                width: pos.size,
                height: pos.size,
              }}
            >
              <Icon 
                className="w-full h-full text-cyan-400"
                style={{ opacity: pos.opacity }}
                strokeWidth={1.5}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
