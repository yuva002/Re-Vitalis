"use client";

import React from "react";
import { motion } from "motion/react";

export type TestimonialItem = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration ?? 18,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <article
                className="max-w-sm w-full rounded-3xl border border-white/60 bg-white/75 p-7 shadow-[0_22px_70px_rgba(32,42,44,0.12)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1.5"
                key={`${name}-${i}`}
              >
                <p className="text-[14px] leading-[1.9] text-slate">{text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    width={44}
                    height={44}
                    src={image}
                    alt={name}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white/70"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <div className="text-[14px] font-[560] tracking-tight leading-5 text-ink">
                      {name}
                    </div>
                    <div className="text-[12px] leading-5 text-slate/85 tracking-tight">
                      {role}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

