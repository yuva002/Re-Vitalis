"use client";

import { useEffect, useRef } from "react";

type Orb = {
  x: number;
  y: number;
  z: number;
  radius: number;
  speed: number;
  hueShift: number;
};

export function FloatingOrbs3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let time = 0;

    const orbs: Orb[] = Array.from({ length: 9 }).map((_, i) => ({
      x: 0.1 + ((i * 0.13) % 0.8),
      y: 0.15 + ((i * 0.19) % 0.7),
      z: 0.5 + ((i * 0.17) % 0.6),
      radius: 18 + (i % 4) * 10,
      speed: 0.2 + (i % 5) * 0.08,
      hueShift: i * 7,
    }));

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      canvas.width = Math.max(1, Math.floor(clientWidth * dpr));
      canvas.height = Math.max(1, Math.floor(clientHeight * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "rgba(56, 189, 248, 0.15)");
      gradient.addColorStop(0.5, "rgba(99, 102, 241, 0.1)");
      gradient.addColorStop(1, "rgba(16, 185, 129, 0.12)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      orbs.forEach((orb, idx) => {
        const wave = prefersReduced ? 0 : Math.sin(time * orb.speed + idx) * 0.08;
        const x = orb.x * w + (prefersReduced ? 0 : Math.cos(time * 0.16 + idx) * 20);
        const y = orb.y * h + (prefersReduced ? 0 : Math.sin(time * 0.2 + idx) * 14);
        const z = orb.z + wave;
        const size = orb.radius * (0.8 + z * 0.4);

        const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 2.3);
        glow.addColorStop(0, `hsla(${190 + orb.hueShift}, 90%, 70%, 0.35)`);
        glow.addColorStop(1, `hsla(${220 + orb.hueShift}, 80%, 40%, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, size * 2.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${190 + orb.hueShift}, 92%, 72%, 0.18)`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!prefersReduced) time += 0.016;
      raf = requestAnimationFrame(render);
    };

    resize();
    render();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full rounded-[28px]"
      aria-hidden="true"
    />
  );
}

