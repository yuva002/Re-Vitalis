"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { NavBar } from "@/components/NavBar";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts, categories, getBlogCardImageSrc, getPostsByCategory } from "@/lib/blogData";
import { motion } from "motion/react";

const FAQSection = dynamic(() =>
  import("@/components/FAQSection").then((m) => ({ default: m.FAQSection }))
);
const Footer = dynamic(() =>
  import("@/components/ui/modem-animated-footer").then((m) => ({ default: m.Footer }))
);

const blogFaqs = [
  {
    question: "Are these articles written by Re-Vitalis doctors?",
    answer:
      "We curate high-quality, peer-reviewed articles and research from leading medical journals, health institutions, and expert practitioners in metabolic medicine, cardiology, and preventive care. Each article is selected for its scientific rigor, clinical relevance, and alignment with evidence-based medicine.",
  },
  {
    question: "How often is new content added to the blog?",
    answer:
      "We continuously update our blog with the latest research and clinical insights from trusted medical sources. New articles covering metabolic health, cardiovascular biomarkers, preventive medicine, and wellness optimization are added regularly as groundbreaking research emerges.",
  },
  {
    question: "Can I implement advice from these articles on my own?",
    answer:
      "While these articles provide valuable educational content, they should not replace personalized medical advice. Every individual has unique biomarker profiles, genetic factors, and health conditions. We recommend booking a consultation with our team for personalized assessment and treatment protocols tailored to your specific needs.",
  },
  {
    question: "How do I book a consultation based on what I've read?",
    answer:
      "If an article resonates with your health concerns, contact us at +91 9000179178 or via WhatsApp to schedule a comprehensive metabolic assessment. Our team will review your health history, order relevant biomarker testing, and create a personalized protocol addressing your specific goals.",
  },
  {
    question: "Are these treatment approaches available at Re-Vitalis?",
    answer:
      "Yes. Re-Vitalis offers advanced biomarker testing, personalized IV therapy protocols, clinical-grade nutraceuticals, and comprehensive metabolic recovery programs. Our services are based on the same evidence-based principles featured in these curated articles, customized to each patient's unique profile.",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts = getPostsByCategory(selectedCategory);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "url": post.externalUrl,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author || post.source,
        },
        "publisher": {
          "@type": "Organization",
          "name": post.source,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="home-jewel-surface home-jewel-grain relative min-h-full">
        {/* NavBar with light text for dark background */}
        <div style={{ ["--ink" as string]: "#F0ECE4", ["--slate" as string]: "#C2BDB5" }}>
          <NavBar />
        </div>

        {/* Hero Section */}
        <section className="hero-topo relative px-6 pb-16 pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-[11px] font-[600] tracking-[0.25em] uppercase text-[#C8A96E]"
            >
              Clinical Insights & Research
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="home-jewel-heading mb-6 text-[42px] font-[700] leading-[1.1] tracking-[-0.02em] md:text-[56px]"
            >
              Evidence-Based Metabolic Medicine
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-2xl text-[16px] leading-[1.7] text-[#C2BDB5]"
            >
              Curated articles from leading researchers and practitioners covering
              cardiovascular biomarkers, metabolic optimization, preventive medicine,
              and wellness strategies backed by clinical evidence.
            </motion.p>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="relative px-6 pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-5 py-2 text-[11px] font-[600] tracking-[0.12em] uppercase transition-all duration-300 ${
                    selectedCategory === category
                      ? "border-[#C8A96E] bg-[#C8A96E] text-[#061b0e] shadow-[0_8px_24px_rgba(200,169,110,0.3)]"
                      : "border-[#C8A96E]/30 bg-[#0f4842]/70 text-[#C8A96E] backdrop-blur-xl hover:border-[#C8A96E]/60 hover:bg-[#0f4842]/90"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="relative px-6 pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => {
                const stableIndex = blogPosts.findIndex((p) => p.id === post.id);
                return (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={index}
                    imageSrc={getBlogCardImageSrc(stableIndex >= 0 ? stableIndex : 0)}
                  />
                );
              })}
            </div>

            {filteredPosts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-[16px] text-[#C2BDB5]">
                  No articles found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={blogFaqs}
          theme="dark"
          heading="Blog & Content Questions"
        />

        {/* Footer */}
        <Footer
          brandName="Re-Vitalis"
          brandDescription="Precision-led metabolic wellness and personalized therapeutic care."
          tagline="Where Science Meets Transformation"
          linkGroups={[
            {
              heading: "Quick Links",
              links: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-doctor" },
                { label: "Services", href: "/services/metabolic-programs" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "#contacts" },
              ],
            },
            {
              heading: "Services",
              links: [
                { label: "Metabolic Recovery Programs", href: "/services/metabolic-programs" },
                { label: "Advanced IV Drips", href: "/services/iv-therapy" },
                { label: "Nutraceuticals", href: "/services/nutraceuticals" },
                { label: "Adult Vaccination Programme", href: "/services/adult-vaccination" },
                { label: "About Us", href: "/about-doctor" },
              ],
            },
          ]}
          contactItems={[
            {
              icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              ),
              label: "www.re-vitalis.in",
              href: "https://www.re-vitalis.in",
            },
            {
              icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              label: "9000179178",
              href: "tel:9000179178",
            },
            {
              icon: (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              ),
              label: "WhatsApp: 9000179178",
              href: "https://wa.me/919000179178",
            },
          ]}
          className="relative z-[1]"
        />
      </div>
    </>
  );
}
