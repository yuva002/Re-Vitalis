"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"

/**
 * ShaderBackground
 * ─────────────────
 * Renders an animated MeshGradient canvas as a full-page fixed background.
 *
 * Key decisions:
 *  - z-index: 0 (NOT -1) — z:-1 goes behind body's background colour
 *  - body/html must have transparent background (see globals.css)
 *  - Hero has bg-mist which covers it naturally; all other sections are transparent
 */
export function ShaderBackground() {
  const [dim, setDim] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const update = () => setDim({ width: window.innerWidth, height: window.innerHeight })
    update()
    setMounted(true)
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  if (!mounted || dim.width === 0) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,          // NOT -1; -1 hides behind body background
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <MeshGradient
        width={dim.width}
        height={dim.height}
        colors={[
          "#7ec8d8",   // vivid teal-cyan
          "#5ab5c8",   // deep teal
          "#f4a97a",   // warm amber-orange
          "#8dd6a0",   // rich sage-green
          "#6bbdce",   // medium teal
          "#e8875a",   // deep peach-terracotta
        ]}
        distortion={0.8}
        swirl={0.65}
        speed={0.7}
        offsetX={0.1}
        grainMixer={0}
        grainOverlay={0}
      />
      {/* Reduced veil — let the gradient breathe and be clearly visible */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.15)",
        }}
      />
    </div>
  )
}
