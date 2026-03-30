"use client";

import React from "react";
import Image from "next/image";
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
  /** Dark teal + gold cards for homepage jewel theme */
  tone?: "default" | "jewel";
}) {
  const jewel = props.tone === "jewel";
  const cardClass = jewel
    ? "max-w-sm w-full rounded-3xl border border-[#C8A96E]/22 bg-[#11524c]/90 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E2C98A]/22 hover:shadow-[0_0_40px_rgba(200,169,110,0.08)] will-change-transform"
    : "max-w-sm w-full rounded-3xl border border-white/60 bg-white/75 p-7 shadow-[0_22px_70px_rgba(32,42,44,0.12)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1.5";

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
              <article className={cardClass} key={`${name}-${i}`}>
                <p
                  className={
                    jewel
                      ? "text-[14px] leading-[1.9] text-[#C2BDB5]"
                      : "text-[14px] leading-[1.9] text-slate"
                  }
                >
                  {text}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    width={44}
                    height={44}
                    sizes="44px"
                    src={image}
                    alt={name}
                    className={
                      jewel
                        ? "h-11 w-11 rounded-full object-cover ring-2 ring-[#C8A96E]/40"
                        : "h-11 w-11 rounded-full object-cover ring-2 ring-white/70"
                    }
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <div
                      className={
                        jewel
                          ? "text-[14px] font-[560] tracking-tight leading-5 text-[#F0ECE4]"
                          : "text-[14px] font-[560] tracking-tight leading-5 text-ink"
                      }
                    >
                      {name}
                    </div>
                    <div
                      className={
                        jewel
                          ? "text-[12px] leading-5 text-[#888078] tracking-tight"
                          : "text-[12px] leading-5 text-slate/85 tracking-tight"
                      }
                    >
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

