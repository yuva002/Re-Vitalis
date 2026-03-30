"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LineChart, Droplets, Pill, Syringe, Database, Dna, UserRound, Network, MessageCircle, Globe, Phone } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/ui/modem-animated-footer";
import { FAQSection } from "@/components/FAQSection";

const programsFaqs = [
  {
    question: "What health programs does Re-Vitalis offer?",
    answer:
      "Re-Vitalis offers comprehensive wellness programs built on four foundational pillars: precision diagnostics (comprehensive biomarker testing), therapeutic interventions (IV therapy and nutraceuticals), metabolic nutrition (personalized dietary protocols), and lifestyle medicine (sleep, stress, and movement coaching). Programs are designed for weight management, energy restoration, hormonal balance, cardiovascular risk reduction, and longevity optimization.",
  },
  {
    question: "How are Re-Vitalis programs customized to each patient?",
    answer:
      "Every Re-Vitalis program begins with a comprehensive biomarker assessment. The results inform a personalized protocol designed by our physician — specific to your deficiencies, imbalances, risk factors, and health goals. No two programs are identical. Protocols are reviewed and adjusted at each follow-up based on re-testing results and clinical response.",
  },
  {
    question: "How long do Re-Vitalis wellness programs run?",
    answer:
      "Program duration depends on individual goals and health status. Foundational programs typically run 8 to 12 weeks. Comprehensive metabolic transformation programs may extend to 16–24 weeks. All programs include structured phases: assessment, active intervention, monitoring, and maintenance planning.",
  },
  {
    question: "What is included in a Re-Vitalis health program?",
    answer:
      "A complete Re-Vitalis program includes: initial physician consultation, comprehensive biomarker panel, personalized IV therapy sessions, clinical nutraceutical protocol, nutritional guidance and meal planning support, lifestyle coaching, follow-up biomarker testing, and ongoing physician reviews. Premium plans include additional sessions, priority scheduling, and extended support.",
  },
  {
    question: "How much do Re-Vitalis wellness programs cost?",
    answer:
      "Re-Vitalis program pricing varies based on the plan tier (Classic, Elite, or Platinum) and the specific interventions included. Pricing is available on our website and discussed transparently during your initial consultation. We offer a range of plans to ensure accessibility without compromising clinical quality.",
  },
];

const programsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Re-Vitalis Health Programs",
  description:
    "Comprehensive wellness programs combining precision diagnostics, IV therapy, nutraceuticals, and lifestyle medicine for metabolic transformation.",
  provider: {
    "@type": "MedicalBusiness",
    name: "Re-Vitalis Wellness",
    url: "https://www.re-vitalis.in",
  },
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Classic Program",
      description: "Foundation wellness program with biomarker testing, IV therapy, and nutraceutical protocol.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Elite Program",
      description: "Advanced metabolic recovery program with comprehensive testing, extended IV therapy, and personalized nutrition coaching.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Platinum Program",
      description: "The complete Re-Vitalis experience with unlimited sessions, priority access, exclusive perks, and extended physician support.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Adult Vaccination Programme",
      description:
        "Physician-guided review of vaccination history and risk factors, with scheduling aligned to current immunization guidance.",
    },
  ],
};

const programsBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.re-vitalis.in" },
    { "@type": "ListItem", position: 2, name: "Programs", item: "https://www.re-vitalis.in/programs" },
  ],
};

export default function ProgramsPage() {
  return (
    <div className="bg-[#f7faf8] text-[#181c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programsBreadcrumb) }}
      />
      <div style={{ ["--ink" as any]: "#F0ECE4", ["--slate" as any]: "#D8D2C8" }}>
        <NavBar />
      </div>

      <main>
        <section className="relative h-screen overflow-hidden bg-gradient-to-r from-[#061b0e] to-[#1b3022]">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmlq1W_ehaI8Vxc-eCAJ057X7S56kvCuJ56g06tG52hVtKa7yC-jIRj6RORDDQvhCCmNl2Nv0VeqBw87ZRUqlRL0mQYVVuYzV_Pqp1jzeTqT_Db6rcDsE1fU0CqvyEwY30ycq4PVaMPHMkn60lheB79zXK9y8kQxIfFozZNUos3QMhrEtvHQ1OZ7jxe-WW1CTu28hSw2JdLTcf0KdDMRd65KSMFD00Jqgdh6wpDdb9TN9K1mqsow6XcyqMxlHELw4orlK-f920Gs1_"
              alt="Programs hero background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#061b0e]/70" />
          </div>
          <div className="container relative z-10 mx-auto grid h-screen grid-cols-1 items-center px-8 pb-10 pt-24 lg:px-12">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#e9c176]">Precision Medicine</span>
              <h1 className="font-[var(--font-display)] text-4xl leading-[1.08] text-white md:text-6xl lg:text-7xl">Comprehensive Health Programs</h1>
              <p className="mb-7 mt-5 max-w-lg text-base leading-relaxed text-[#819986] md:text-lg">
                Advanced biological intervention designed to restore metabolic equilibrium and enhance cellular function through clinical precision and botanical synergy.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#program-pillars"
                  className="btn-premium btn-premium-primary inline-flex px-7 py-3 text-[11px]"
                >
                  View Protocols
                </Link>
                <div className="flex items-center gap-2 text-white/60">
                  <Database className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-widest">Evidence Based</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 translate-x-1/2 -skew-x-12 bg-[#061b0e]/20"></div>
        </section>

        <section id="program-pillars" className="scroll-mt-24 bg-[#f7faf8] px-12 py-32">
          <div className="mb-20">
            <h2 className="mb-6 font-[var(--font-display)] text-5xl text-[#061b0e]">Our Foundational Pillars</h2>
            <div className="h-1 w-24 bg-[#e9c176]"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="group flex min-h-[500px] flex-col justify-between bg-[#f1f4f2] p-10 transition-colors duration-500 hover:bg-[#ebefed]">
              <div>
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <LineChart className="h-8 w-8 text-[#061b0e]" />
                  </div>
                  <span className="text-xs tracking-widest text-[#737973]">01 / PROGRAM</span>
                </div>
                <h3 className="mb-6 font-[var(--font-display)] text-3xl text-[#061b0e]">Metabolic Recovery Programs</h3>
                <ul className="mb-10 space-y-4 text-sm text-[#434843]">
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>5 Specialized Tracks</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>Advanced Biomarker Analysis</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>Root-Cause Focus</li>
                </ul>
              </div>
              <Link
                href="/services/metabolic-programs"
                className="btn-premium btn-premium-ghost inline-flex w-fit items-center gap-2 px-4 py-2 text-[10px] tracking-[0.14em] text-[#061b0e]"
              >
                Learn More <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="group flex min-h-[500px] flex-col justify-between bg-[#061b0e] p-10 text-white">
              <div>
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1b3022]">
                    <Droplets className="h-8 w-8 text-[#e9c176]" />
                  </div>
                  <span className="text-xs tracking-widest text-[#819986]">02 / PROGRAM</span>
                </div>
                <h3 className="mb-6 font-[var(--font-display)] text-3xl">Advanced IV Drip Therapies</h3>
                <ul className="mb-10 space-y-4 text-sm text-[#819986]">
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>100% Bioavailability</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>5 Signature Programs</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>Medical Supervision</li>
                </ul>
              </div>
              <Link
                href="/services/iv-therapy"
                className="btn-premium btn-premium-ghost inline-flex w-fit items-center gap-2 px-4 py-2 text-[10px] tracking-[0.14em] text-[#e9c176]"
              >
                Learn More <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="group flex min-h-[500px] flex-col justify-between bg-[#f1f4f2] p-10 transition-colors duration-500 hover:bg-[#ebefed]">
              <div>
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <Pill className="h-8 w-8 text-[#061b0e]" />
                  </div>
                  <span className="text-xs tracking-widest text-[#737973]">03 / PROGRAM</span>
                </div>
                <h3 className="mb-6 font-[var(--font-display)] text-3xl text-[#061b0e]">Nutraceuticals</h3>
                <ul className="mb-10 space-y-4 text-sm text-[#434843]">
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>Medical-Grade Precision</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>6 Specialized Categories</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>High Bioavailability</li>
                </ul>
              </div>
              <Link
                href="/services/nutraceuticals"
                className="btn-premium btn-premium-ghost inline-flex w-fit items-center gap-2 px-4 py-2 text-[10px] tracking-[0.14em] text-[#061b0e]"
              >
                Learn More <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="group flex min-h-[500px] flex-col justify-between bg-[#061b0e] p-10 text-white">
              <div>
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1b3022]">
                    <Syringe className="h-8 w-8 text-[#e9c176]" />
                  </div>
                  <span className="text-xs tracking-widest text-[#819986]">04 / PROGRAM</span>
                </div>
                <h3 className="mb-6 font-[var(--font-display)] text-3xl">Adult Vaccination Programme</h3>
                <ul className="mb-10 space-y-4 text-sm text-[#819986]">
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>History & risk review</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>Guideline-aligned scheduling</li>
                  <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-[#e9c176]"></span>Clinical administration</li>
                </ul>
              </div>
              <Link
                href="/services/adult-vaccination"
                className="btn-premium btn-premium-ghost inline-flex w-fit items-center gap-2 px-4 py-2 text-[10px] tracking-[0.14em] text-[#e9c176]"
              >
                Learn More <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#f1f4f2] px-12 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-24 grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
              <div>
                <h2 className="mb-12 font-[var(--font-display)] text-5xl text-[#061b0e]">The Re-Vitalis Philosophy</h2>
                <div className="relative border-l-2 border-[#e9c176] py-4 pl-12">
                  <span className="absolute -top-6 left-8 text-8xl leading-none text-[#e9c176]/20">“</span>
                  <p className="font-[var(--font-display)] text-2xl leading-relaxed text-[#061b0e]">
                    We don't just treat diseases — we restore metabolism.
                  </p>
                  <cite className="mt-6 block text-xs uppercase tracking-[0.2em] text-[#737973]">— Re-Vitalis Wellness</cite>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                {[
                  { n: "01", title: "Data-Driven", desc: "Clinical decisions backed by rigorous molecular data analysis.", Icon: Database },
                  { n: "02", title: "Root-Cause", desc: "Identifying metabolic disruptions at their biological origin.", Icon: Dna },
                  { n: "03", title: "Personalized", desc: "Custom protocols tailored to your unique genetic signature.", Icon: UserRound },
                  { n: "04", title: "Integrated", desc: "A holistic ecosystem linking nutrition, science, and therapy.", Icon: Network },
                ].map(({ n, title, desc, Icon }) => {
                  return (
                    <div key={n} className="space-y-4">
                      <div className="font-[var(--font-display)] text-4xl text-[#e9c176]">{n}</div>
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-[#061b0e]" />
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#061b0e]">{title}</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-[#434843]">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center bg-white px-12 py-32 text-center">
          <div className="max-w-3xl">
            <span className="mb-8 block text-sm uppercase tracking-[0.3em] text-[#e9c176]">Begin Your Protocol</span>
            <h2 className="mb-12 font-[var(--font-display)] text-5xl leading-tight text-[#061b0e] md:text-7xl">Ready to Transform Your Health?</h2>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <Link
                href="#contacts"
                className="btn-premium btn-premium-dark inline-flex w-full items-center justify-center px-8 py-3 text-[11px] md:w-auto"
              >
                Book Consultation
              </Link>
              <a
                href="https://wa.me/919000179178"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-premium-ghost inline-flex w-full items-center justify-center gap-2 px-8 py-3 text-[11px] text-[#181c1c] md:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Whatsapp Us
              </a>
            </div>
            <p className="mt-12 text-sm text-[#737973]">Consultations are conducted by licensed clinical practitioners.</p>
          </div>
        </section>
      </main>

      <FAQSection
        faqs={programsFaqs}
        theme="light"
        heading="Re-Vitalis Programs — Common Questions"
      />

      <Footer
        brandName="Re‑Vitalis"
        brandDescription="Precision-led metabolic wellness and personalized therapeutic care."
        tagline="Where Science Meets Transformation"
        linkGroups={[
          {
            heading: "Quick Links",
            links: [
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about-doctor" },
              { label: "Services", href: "/services/metabolic-programs" },
              { label: "Blog", href: "#" },
              { label: "Contact", href: "#contacts" },
            ],
          },
          {
            heading: "Services",
            links: [
              { label: "Advanced IV Drips", href: "/services/iv-therapy" },
              { label: "Nutraceuticals", href: "/services/nutraceuticals" },
              { label: "Metabolic Recovery Programs", href: "/services/metabolic-programs" },
              { label: "About Us", href: "/about-doctor" },
            ],
          },
        ]}
        contactItems={[
          { icon: <Globe className="w-4 h-4" />, label: "www.re-vitalis.in", href: "https://www.re-vitalis.in" },
          { icon: <Phone className="w-4 h-4" />, label: "9000179178", href: "tel:9000179178" },
          { icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp: 9000179178", href: "https://wa.me/919000179178" },
        ]}
      />
    </div>
  );
}
