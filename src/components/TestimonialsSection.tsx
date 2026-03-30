"use client";

import { Quote } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type TestimonialItem,
} from "@/components/ui/testimonials-columns-1";

const testimonials: TestimonialItem[] = [
  {
    text: "I've consulted multiple specialists over the years, but this was the first time someone connected all the dots. The metabolic approach at Re-Vitalis is on another level. My energy, sleep, and overall clarity have improved significantly within weeks.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    name: "Arjun Mehta",
    role: "Founder & Venture Investor, Mumbai",
  },
  {
    text: "What stood out to me was the depth of analysis. This is not surface-level wellness. Every recommendation felt precise and backed by real data. It's rare to find this level of personalized care.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=120&q=80",
    name: "Dr. Emily Carter",
    role: "Consultant Physician, London",
  },
  {
    text: "I came in for fatigue and ended up understanding my health in a completely new way. The structured, step-by-step approach made the entire process feel very intentional and professional.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    name: "Rohan Iyer",
    role: "Senior Product Manager, Bengaluru",
  },
  {
    text: "The IV therapies are extremely well-managed and thoughtfully designed. You can tell this is a medically driven setup, not just a wellness trend. I felt noticeable improvement in recovery and stamina.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    name: "Daniel Weiss",
    role: "Private Equity Professional, Singapore",
  },
  {
    text: "What I appreciated most was the clarity. No guesswork, no generic supplements. Everything was explained and tailored to my reports. It feels like a long-term health partnership, not a one-time treatment.",
    image:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=120&q=80",
    name: "Neha Kapoor",
    role: "Corporate Lawyer, Delhi",
  },
  {
    text: "There's a certain level of sophistication in how Re-Vitalis approaches metabolic health. It's subtle but powerful. My biomarkers improved, but more importantly, I feel better day-to-day.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80",
    name: "Michael Harrington",
    role: "Investment Banker, Dubai",
  },
  {
    text: "I initially came for weight and sugar management, but the program addressed much more than that. The changes in my energy and mental focus have been just as valuable.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
    name: "Sandeep Reddy",
    role: "Entrepreneur, Hyderabad",
  },
  {
    text: "The entire experience feels premium yet deeply clinical. From diagnostics to therapy planning, everything is structured with intent. It's reassuring to know you're in expert hands.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
    name: "Sophia Martinez",
    role: "Wellness Consultant, Barcelona",
  },
  {
    text: "What makes Re-Vitalis different is the integration. Diagnostics, nutraceuticals, and therapies all work together. It's not fragmented like most healthcare experiences.",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=120&q=80",
    name: "Karan Malhotra",
    role: "Real Estate Developer, Gurgaon",
  },
  {
    text: "I was looking for a more advanced, preventive approach to health, and this exceeded my expectations. It's refined, evidence-based, and highly personalized.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
    name: "James Thornton",
    role: "CEO, Tech Firm, New York",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 7);
const thirdColumn = testimonials.slice(7, 10);

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-28" style={{ zIndex: 1, contain: "layout style" }}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(95%_70%_at_50%_0%,rgba(200,169,110,0.08),transparent_60%),radial-gradient(70%_50%_at_0%_100%,rgba(20,90,85,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto flex max-w-[720px] flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A96E]/30 bg-[#0a2a28]/75 px-4 py-1.5 text-[12px] font-[560] tracking-[0.22em] text-[#C8A96E] backdrop-blur-lg">
            <Quote className="h-3.5 w-3.5" aria-hidden="true" />
            TESTIMONIALS
          </div>
          <div className="home-jewel-rule mt-6 w-full max-w-md" aria-hidden />
          <h2
            className="home-jewel-heading mt-5 text-balance text-[32px] font-[560] leading-[1.08] tracking-[0.02em] sm:text-[44px]"
            style={{ fontFamily: "var(--font-display), ui-serif, Georgia, serif" }}
          >
            Trusted by leaders who demand precision-driven care.
          </h2>
          <p className="mt-4 max-w-[64ch] text-[15px] leading-[1.9] text-[#C2BDB5]">
            Real outcomes from patients who chose a personalized metabolic recovery model.
          </p>
          <Link
            href="/about-doctor"
            className="mt-5 inline-flex items-center rounded-full border border-[#C8A96E]/38 bg-gradient-to-r from-[#C8A96E]/18 to-[#A07840]/15 px-5 py-2 text-[11px] tracking-[0.14em] text-[#F0ECE4] transition-all hover:border-[#E2C98A]/40 hover:shadow-[0_0_24px_rgba(200,169,110,0.14)]"
          >
            ABOUT US
          </Link>
        </motion.div>

        <div className="mt-12 flex justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_13%,black_87%,transparent)] max-h-[760px]">
          <TestimonialsColumn tone="jewel" testimonials={firstColumn} duration={22} />
          <TestimonialsColumn
            tone="jewel"
            testimonials={secondColumn}
            className="hidden md:block"
            duration={26}
          />
          <TestimonialsColumn
            tone="jewel"
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={24}
          />
        </div>
      </div>
    </section>
  );
}

