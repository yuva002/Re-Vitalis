"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  /** "dark" = jewel/premium dark background (homepage), "light" = bright service pages */
  theme?: "dark" | "light";
  heading?: string;
}

export function FAQSection({
  faqs,
  theme = "light",
  heading = "Frequently Asked Questions",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isDark = theme === "dark";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className={`relative py-16 sm:py-20 px-4 sm:px-6 ${isDark ? "" : "bg-[#f7faf8]"}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl">
        {/* Section label */}
        <p
          className={`mb-2 sm:mb-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] ${
            isDark ? "text-[#C8A96E]" : "text-[#5d4201]"
          }`}
        >
          FAQ
        </p>

        <h2
          id="faq-heading"
          className={`mb-10 sm:mb-12 text-[26px] sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight ${
            isDark ? "text-[#F0ECE4]" : "text-[#061b0e]"
          }`}
        >
          {heading}
        </h2>

        <dl className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors duration-200 ${
                  isDark
                    ? isOpen
                      ? "border-[#C8A96E]/30 bg-white/5"
                      : "border-white/10 bg-white/[0.03]"
                    : isOpen
                    ? "border-[#e9c176]/40 bg-white"
                    : "border-[#e2e8e4] bg-white/60"
                }`}
              >
                <dt>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 min-h-11 text-left text-[14px] sm:text-base font-medium leading-snug transition-colors ${
                      isDark
                        ? "text-[#F0ECE4] hover:text-[#C8A96E]"
                        : "text-[#061b0e] hover:text-[#3a2a01]"
                    }`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      } ${isDark ? "text-[#C8A96E]" : "text-[#5d4201]"}`}
                    />
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  hidden={!isOpen}
                  className={`px-5 pb-4 sm:px-6 sm:pb-5 text-[13px] sm:text-sm leading-relaxed ${
                    isDark ? "text-[#B8B0A4]" : "text-[#434843]"
                  }`}
                >
                  {faq.answer}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
