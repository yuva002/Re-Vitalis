"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { 
  BatteryLow, Activity, Brain, Leaf, CheckCircle, Info,
  ArrowRight, Phone, MessageCircle, ShieldCheck, FlaskConical, ShieldAlert, Globe, AlertTriangle
} from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/ui/modem-animated-footer";

type NutraceuticalCategory = {
  title: string;
  benefits: string[];
  keyIngredients: string;
  image: string;
};

const categories: NutraceuticalCategory[] = [
  {
    title: "Cardiometabolic",
    benefits: [
      "Glucose Metabolism Support",
      "Lipid Profile Optimization",
    ],
    keyIngredients: "Berberine HCl, Ceylon Cinnamon, Alpha Lipoic Acid",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtrfyRb0UyCHOVowKDmKkuBY9zNGOu8-IJym4rtrROSa95_5Na0vFCV_IxdeAWXwEQQ1ULcIWgOMXv2_dvNRZoa7ArGpGLz09v0ujRojyVszdnik2qV_2-vCtxlXyya75HIXYf2jEMhXgZ67hVtUlbWEZIwT8FnxglRBeQD026h_Szsr2mSqn8w4RnUH42zD5UAX-t4aiWNGRmHV-mwMv5NmhynoVM3e5c3Iq96A1d1tLFfnWmb7rybOlnJx5swG4SCywdZbzvE8sZ",
  },
  {
    title: "Methylation",
    benefits: [
      "DNA Repair & Detoxification",
      "Homocysteine Regulation",
    ],
    keyIngredients: "L-5-MTHF, Methylcobalamin, Trimethylglycine",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqbQTiSvO_1XbeAbnb8c1r4benfNgoFa3FmjFwCT-qjuMLocwR92xU9NgJs2WlVypR0VdcK4qPrxKon6oyg-NWusdCk1HBnH9nlgUFOwX7J9N4xUKY0hTSnmEwXz2yqELt4OJ-wlc6LV4pyGZQeRyK-rh3k5VEhNAJ_NgTzF6hBNm_Lu6_eltu-__p5GF7shhrDaG4jxUPs38FK91MnIGCexIqciOJ_npHm0hBFLGVZU8wnTgqHThDBpriLvuucP_fQcHAxxCcBDtS",
  },
  {
    title: "Mitochondrial",
    benefits: [
      "ATP Production Enhancement",
      "Cellular Energy Reserve",
    ],
    keyIngredients: "PQQ, CoQ10 (Ubiquinol), Acetyl-L-Carnitine",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_5JLRVmd9pIUov7MM5hSD0C31eiYI47DjKhxmvijkQe4Ca2h6ClGEKx2ZKUxSHOvDV5_vYdEB15a176nv7tbPjUOka3LNMlkH6QQ7hiW9FPfl64LGii8cNyBFmyjZOg2FYqWEFARr5xfTn2wJa3tRXqxfu6xrMibu17y2AEp6URtX1pmKnLe5XoFqx9uynVeYd1dT32Vwh_dGtx_kuns1YP1WXecXuOQJ-yTF_XrzxpU1H2FeJaUHpup9XxlFUgLc2ybz9N_ioIak",
  },
  {
    title: "Cognitive Health",
    benefits: [
      "Neuro-Regenerative Support",
      "Memory & Focus Amplification",
    ],
    keyIngredients: "Lion's Mane, Bacopa Monnieri, Phosphatidylserine",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEdDfIOrIUAzavmGghFffCE133Qj-amY6Hkm54CjxK3ptx1hd0cNgSH5RsI28ZwizSJpohtXnOayBkfW7hiSKv_b25rk2h6XMvFfqlVIsaQI8HW6rihwGvIBcV81YEDtuWSugg4K5YShGbUwUPrlBRyCcXjyER-cs3SvQNTMgwYT2FxYuS_ludgUOC4T61kJSNXQxd_tpR11zxuPGcWZpp6iJmXQZYDI-JquXPkzEaVF28-ohJCAzcKK7Fe-pPrXhEgcN8cnw1WMk6",
  },
  {
    title: "Immune Defense",
    benefits: [
      "T-Cell Activation Pathways",
      "Barrier Integrity Support",
    ],
    keyIngredients: "Quercetin Phytosome, Zinc Bisglycinate, Vitamin C",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLGoi6M9MiSYxLtf2izmSjEJJdUWvCt-76MZ6KUDqsdVx6V4QHfqyGjqHbGwdOL2bQQnRIYAcYP8_XFV0wM_6_aIq5e7OqBMtryqBOCew2--sghBLg8pHWeAHAN9lSDRy2dBux0_nCXowuNx11UdqlwHtrFzTjDfdukLOQ9faoIX5ZIl_Xq5d80kdv8YOgVDN-dur3_9_WkZs2EXRqpbysYYG9X0gd__ygEXWdSP4WwxYJHf3NzSX5jU1Fkcy-SvNpftELh1PZBJW6",
  },
  {
    title: "Hormonal Balance",
    benefits: [
      "Endocrine Modulation",
      "Stress Response (HPA-Axis)",
    ],
    keyIngredients: "Ashwagandha (KSM-66), DIM, Magnesium Glycinate",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4x3xlIdjUtfQcHczC8K5gpEOCoecm0fgZ3TEP0MPvF_GrxqUA-N6YSP7vAmTuomuGY8B3PQobl4Z8c8xwen3NWErxm8nTN1fZxej41v2yHXRFE15zWlOr74TukSbcG-WoPeAzxELFeLxjGLDX3HXhPtY6i3uZYY3K6pizyVx5TSsRIEDW0QiYAlxUCyxqGEFiBuvMJkS7BMkHF6vgTy2MjoMPCimiJ1oXMYnvsithMCxVRikmraASuT3R0ehTXxmBvkfJzxnb-L-I",
  },
];

function CategoryCard({ category, index }: { category: NutraceuticalCategory; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex h-full flex-col bg-[#f1f4f2] transition-shadow duration-500 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={category.image}
          alt={`${category.title} nutraceuticals`}
          width={400}
          height={192}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-10">
        <h3 className="mb-6 font-[var(--font-display)] text-2xl text-[#061b0e]">{category.title}</h3>
        <ul className="mb-10 flex-grow space-y-4">
          {category.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-sm font-light text-[#434843]">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#e9c176]" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-[#c3c8c1]/30 pt-6">
          <p className="mb-2 font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-[#434843]/60">
            Key Ingredients
          </p>
          <p className="text-xs font-medium text-[#061b0e]">{category.keyIngredients}</p>
        </div>
      </div>
    </motion.article>
  );
}

function WhyNutraceuticalsSection() {
  const reduce = useReducedMotion();

  const reasons = [
    {
      icon: BatteryLow,
      title: "Chronic Fatigue",
      description: "Mitochondrial dysfunction leads to systemic depletion that sleep alone cannot solve.",
    },
    {
      icon: Activity,
      title: "Insulin Resistance",
      description: "Supporting metabolic flexibility through targeted bio-actives and glucose-modulating compounds.",
    },
    {
      icon: Brain,
      title: "Cognitive Decline",
      description: "Neuro-protection via polyphenols and lipid-soluble antioxidants for long-term brain health.",
    },
    {
      icon: Leaf,
      title: "Oxidative Stress",
      description: "Neutralizing free radicals at the source with medical-grade scavengers and botanical extracts.",
    },
  ];

  return (
    <section className="bg-[#f1f4f2] px-8 py-32 md:px-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="mb-6 font-[var(--font-display)] text-4xl text-[#061b0e]">
              Why Nutraceuticals Matter
            </h2>
            <p className="font-light leading-relaxed text-[#434843]">
              Modern lifestyles create silent cellular stressors. Our clinical approach addresses these gaps before they become diagnoses.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#c3c8c1]/20 md:grid-cols-2 lg:col-span-8">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-[#f1f4f2] p-10"
                >
                  <Icon className="mb-6 block h-10 w-10 text-[#e9c176]" strokeWidth={1.5} />
                  <h3 className="mb-4 font-[var(--font-display)] text-xl text-[#061b0e]">{reason.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-[#434843]">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function OurApproachSection() {
  const reduce = useReducedMotion();

  const approaches = [
    {
      number: "01",
      title: "Data-Driven",
      description: "We begin with comprehensive metabolic profiling and epigenetic markers to understand your unique cellular landscape.",
    },
    {
      number: "02",
      title: "Medical-Grade",
      description: "Every compound is third-party tested for bioavailability, purity, and pharmacokinetic efficiency within the human system.",
    },
    {
      number: "03",
      title: "Personalized",
      description: "A curated protocol that evolves as your biomarkers shift, ensuring sustained vitality and precision health optimization.",
    },
  ];

  return (
    <section className="bg-[#f7faf8] px-8 py-32 md:px-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-20 flex flex-col items-baseline justify-between gap-8 md:flex-row">
          <h2 className="font-[var(--font-display)] text-5xl text-[#061b0e]">Our Clinical Approach</h2>
          <p className="font-['Inter'] text-xs uppercase tracking-[0.3em] text-[#e9c176]">
            Scientific Methodology 01-03
          </p>
        </div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {approaches.map((approach, idx) => (
            <motion.div
              key={approach.number}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-8"
            >
              <div className="h-px w-16 bg-[#e9c176]"></div>
              <h4 className="font-[var(--font-display)] text-2xl text-[#061b0e]">{approach.number}. {approach.title}</h4>
              <p className="font-light leading-relaxed text-[#434843]">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetySection() {
  return (
    <section className="mt-12">
      <div className="rounded-[24px] border border-amber-500/30 bg-gradient-to-br from-amber-50 to-orange-50/60 p-6 backdrop-blur-sm sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 ring-1 ring-amber-500/30">
            <AlertTriangle className="h-6 w-6 text-amber-700" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-amber-900">Important Note</h3>
            <p className="mt-2 text-[14px] leading-6 text-amber-800/90">
              All nutraceuticals are prescribed only after clinical evaluation. Self-medication is not advised.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Pharmaceutical Purity",
      description: "Our ingredients exceed industry standards for purity and are sourced from sustainable biological habitats.",
    },
    {
      icon: FlaskConical,
      title: "Evidence-Based Ratios",
      description: "We don't just include ingredients; we include them at the exact dosage used in successful clinical trials.",
    },
    {
      icon: ShieldAlert,
      title: "Transparency Always",
      description: "Every batch comes with a Certificate of Analysis (COA) accessible via our patient portal.",
    },
  ];

  return (
    <section className="bg-[#061b0e] px-8 py-32 text-white md:px-20">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-20 md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="mb-12 font-[var(--font-display)] text-5xl">
            The Standard of <br />
            <span className="font-medium text-[#e9c176]">Clinical Excellence</span>
          </h2>
          <div className="space-y-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex items-start gap-6">
                  <Icon className="h-8 w-8 shrink-0 text-[#e9c176]" strokeWidth={1.5} />
                  <div>
                    <h4 className="mb-2 font-[var(--font-display)] text-xl">{benefit.title}</h4>
                    <p className="font-light leading-relaxed text-white/70">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          <div className="relative aspect-square overflow-hidden bg-[#1b3022] p-12">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQp56tBcYOqlBsIttAS396h3c8E_SUW0ftf6j-uDZZ5KKLkKMENUo4TIhidTgx99VMP0osln_Cn1gHoVt1eSlG5at3PwwjqW7zVIEkWy7ExOtJFgwesUwuPpqg3ykcrLE1KGb4HQ59uXQciTA_XwLFGzZ-MrHjJ9RbK45UtoI69hwXucbKLWO7VH83IhA7gU7ShJvMHZcNw1lLRmsCSj66P2vhat5a1fwFzv_DQqeIOnYN5qttuCYayGFu6EoVb1PrpoaAE8gt6O6M"
              alt="Water droplet on leaf"
              width={600}
              height={600}
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute bottom-12 left-12 right-12 border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
              <p className="font-[var(--font-display)] text-2xl leading-tight">
                "Nature provides the blueprint; we provide the precision."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section className="border-t border-[#c3c8c1]/10 bg-[#e6e9e7] px-8 py-20 md:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-3">
          <Info className="h-5 w-5 text-[#434843]" />
          <span className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-[#434843]">
            Medical Integrity Note
          </span>
        </div>
        <p className="mx-auto max-w-3xl font-['Inter'] text-xs font-light uppercase leading-relaxed tracking-[0.05em] text-[#434843]">
          The Re-Vitalis Clinical Excellence protocols are intended for educational and nutritional optimization purposes only. 
          These products are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified 
          healthcare professional before beginning any new supplementation regimen, especially if you have pre-existing medical 
          conditions or are taking prescription medications. Our formulations are bio-active and may interact with pharmaceutical interventions.
        </p>
      </div>
    </section>
  );
}

export default function NutraceuticalsPage() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Doctor", href: "/about-doctor" },
    { label: "Services", href: "/services/metabolic-programs" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contacts" },
  ];

  const serviceLinks = [
    { label: "Advanced IV Drips", href: "/services/iv-therapy" },
    { label: "Nutraceuticals", href: "/services/nutraceuticals" },
    { label: "Metabolic Recovery Programs", href: "/services/metabolic-programs" },
    { label: "About Doctor", href: "/about-doctor" },
  ];

  const contactItems = [
    {
      icon: <Globe className="w-4 h-4" />,
      label: "www.re-vitalis.in",
      href: "https://www.re-vitalis.in",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "9000179178",
      href: "tel:9000179178",
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      label: "WhatsApp: 9000179178",
      href: "https://wa.me/919000179178",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7faf8] font-['Inter']">
      <NavBar />
      
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuRrKutPvBwzLBzKWMx6YDXW1fPEoQ1TVBDmom7rfnde1KpFEopva8XX99hXMdCMQaiENQnVt0w6v9LFkjGwVRCFIYXIPLTJF4Z6sgb67MQHTBP4EMr52sEmo1oGiRDLY4hRlb8dSshaAe9AEOsK2n--eXJJU6r9Zjk5SfD-mUKssX3svjduDk2scbWNF5FzwB9ASMRd5-HazRY1LbHYv4YVMLyYkTnzvsLGqtCZQqruLJ-qRDjaxsm4e9X4muxyHHcNhBQr3bcE-Z"
              alt="Molecular biological structures"
              fill
              className="object-cover grayscale brightness-110"
              priority
            />
          </div>
          <div className="relative z-10 w-full max-w-4xl px-8 pt-32 md:px-20">
            <span className="mb-6 inline-block border border-[#e9c176] px-4 py-1 font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-[#b18d48]">
              Clinical Precision • Botanical Purity
            </span>
            <h1 className="mb-8 font-[var(--font-display)] text-6xl leading-[1.1] text-[#061b0e] md:text-8xl">
              Nutraceuticals at <br />
              <span className="font-medium">Re-Vitalis</span>
            </h1>
            <p className="max-w-2xl font-[var(--font-display)] text-xl font-medium leading-relaxed text-[#434843] md:text-2xl">
              Where molecular science meets holistic restoration. We design cellular-level interventions for the modern age.
            </p>
            <div className="mt-12 flex gap-6">
              <Link
                href="#categories"
                className="btn-premium btn-premium-dark flex items-center gap-2 px-7 py-3 text-[11px]"
              >
                Discover the Science
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Nutraceuticals Matter */}
        <WhyNutraceuticalsSection />

        {/* Our Approach */}
        <OurApproachSection />

        {/* Core Categories Grid */}
        <section id="categories" className="bg-white px-8 py-32 md:px-20">
          <div className="mx-auto max-w-screen-2xl">
            <div className="mx-auto mb-24 max-w-2xl text-center">
              <h2 className="mb-8 font-[var(--font-display)] text-5xl text-[#061b0e]">Nutraceutical Pillars</h2>
              <p className="font-[var(--font-display)] font-medium text-[#434843]">
                Targeted biological interventions formulated for specific physiological domains.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, idx) => (
                <CategoryCard key={category.title} category={category} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Re-Vitalis */}
        <WhyChooseSection />

        {/* Medical Credibility / Disclaimer */}
        <DisclaimerSection />
      </main>

      <Footer
        brandName="Re‑Vitalis"
        brandDescription="Precision-led metabolic wellness and personalized therapeutic care."
        tagline="Where Science Meets Transformation"
        linkGroups={[
          { heading: "Quick Links", links: quickLinks },
          { heading: "Services", links: serviceLinks },
        ]}
        contactItems={contactItems}
      />
    </div>
  );
}
