"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  MessageCircle,
  Shield,
  Zap,
  Droplet,
  Brain,
  Activity,
  Phone,
  Globe,
  Mail,
} from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/ui/modem-animated-footer";
import { FAQSection } from "@/components/FAQSection";

const ivTherapyFaqs = [
  {
    question: "What is IV therapy and how does it work?",
    answer:
      "IV (intravenous) therapy delivers vitamins, minerals, amino acids, and other nutrients directly into your bloodstream, bypassing the digestive system. This achieves up to 100% bioavailability — compared to roughly 20–50% from oral supplements — allowing for faster cellular uptake, immediate replenishment, and more effective therapeutic outcomes.",
  },
  {
    question: "How long does an IV drip session take at Re-Vitalis?",
    answer:
      "A typical Re-Vitalis IV drip session takes between 45 and 90 minutes, depending on the specific formulation and your treatment plan. Our clinical team monitors you throughout the session to ensure comfort and safety.",
  },
  {
    question: "What conditions can IV therapy help treat?",
    answer:
      "Re-Vitalis IV therapy is clinically indicated for chronic fatigue, immune dysfunction, micronutrient deficiencies, dehydration, cognitive fog, athletic recovery, hangover relief, metabolic support, and anti-aging protocols. Each formulation is tailored to your specific biomarker results and health goals.",
  },
  {
    question: "Is IV therapy safe?",
    answer:
      "Yes. All Re-Vitalis IV formulations are prepared under clinical supervision using pharmaceutical-grade nutrients. Our physician assesses your health history and biomarker data before each protocol. Adverse reactions are rare, and our clinical team is present throughout every session.",
  },
  {
    question: "How many IV therapy sessions will I need?",
    answer:
      "The number of sessions depends on your individual goals and health status. Acute conditions such as dehydration or acute fatigue may resolve in 1–3 sessions. Chronic conditions or optimization protocols typically involve 4–12 sessions over several weeks. Your Re-Vitalis physician will recommend a personalized schedule after your initial assessment.",
  },
];

const ivTherapySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "IV Drip Therapy",
  description:
    "Intravenous delivery of vitamins, minerals, amino acids, and nutrients directly into the bloodstream for maximum bioavailability and therapeutic benefit.",
  procedureType: "https://schema.org/TherapeuticProcedure",
  howPerformed:
    "A licensed physician assesses the patient's biomarker profile and health history, then formulates a personalized IV blend administered intravenously over 45–90 minutes in a clinical setting.",
  preparation:
    "Patients should be well hydrated and have eaten a light meal before their session. Initial sessions require a physician consultation and bloodwork review.",
  followup:
    "Follow-up biomarker testing and physician review are scheduled based on the patient's treatment plan, typically every 4–8 weeks.",
  provider: {
    "@type": "MedicalBusiness",
    name: "Re-Vitalis Wellness",
    url: "https://www.re-vitalis.in",
  },
};

const ivBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.re-vitalis.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.re-vitalis.in/services/iv-therapy" },
    { "@type": "ListItem", position: 3, name: "IV Drip Therapy", item: "https://www.re-vitalis.in/services/iv-therapy" },
  ],
};

export default function IVTherapyPage() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-doctor" },
    { label: "Services", href: "/services/metabolic-programs" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contacts" },
  ];

  const serviceLinks = [
    { label: "Metabolic Recovery Programs", href: "/services/metabolic-programs" },
    { label: "Advanced IV Drips", href: "/services/iv-therapy" },
    { label: "Nutraceuticals", href: "/services/nutraceuticals" },
    { label: "Adult Vaccination Programme", href: "/services/adult-vaccination" },
  ];

  const contactItems = [
    {
      icon: <Globe className="w-4 h-4" />,
      label: "www.re-vitalis.in",
      href: "https://www.re-vitalis.in",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: "info@re-vitalis.in",
      href: "mailto:info@re-vitalis.in",
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
    <div className="min-h-screen overflow-x-hidden bg-[#f7faf8] font-['Inter'] text-[#181c1c] selection:bg-[#e9c176] selection:text-[#061b0e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ivTherapySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ivBreadcrumb) }}
      />
      <NavBar />

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwi2cmz0_wwOkNomPKixjJc8Z-Mrn8EtIp-EkBoWsfUfRnkVx5pkilJVOjWcD7XeBjvvo6nfyZLGLv3KAoPUK4C1CK2OGGFghKH_ARXbSNg5tBdb_v3Qw1yr3YWrNJ4-VKUjYe8kjbFZnBfJYfuaQYjjtj5uULPzJLRSN1rsVuTo92a0H6-5uWzBxcf5WEhEWukHCB47hLGWlmCTQJQElKjf7YpOaZEkkZLmcXMrzue7dU9NuD1UAZ0NuCyY8eeJFMqHM6dUMZlzbv"
              alt="Luxury medical spa interior"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#f7faf8]/75" />
          </div>
          <div className="container relative z-10 mx-auto grid gap-16 px-8 pt-32 lg:grid-cols-2 lg:items-center">
            <div className="z-10 space-y-8">
              <span className="inline-block rounded-full bg-[#e9c176]/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#5d4201]">
                Precision Medicine
              </span>
              <h1 className="font-[var(--font-display)] text-6xl leading-[1.1] tracking-tight text-[#061b0e] md:text-8xl">
                Advanced <br /><span className="font-semibold">IV Drip</span> Therapies
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[#434843] md:text-xl">
                At Re-Vitalis, our IV therapies are designed to deliver targeted nutrients directly into your bloodstream-ensuring maximum absorption, faster results, and deeper cellular impact.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button className="btn-premium btn-premium-dark px-7 py-3 text-[11px]">
                  Experience Transformation
                </button>
                <p className="text-sm uppercase tracking-widest text-[#737973]">
                  Precision therapy. Rapid results. <br />Cellular transformation.
                </p>
              </div>
            </div>
            <div className="group relative hidden lg:block">
              <div className="absolute -inset-4 rounded-full bg-[#e9c176]/10 blur-3xl transition-all duration-700 group-hover:bg-[#e9c176]/20"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwi2cmz0_wwOkNomPKixjJc8Z-Mrn8EtIp-EkBoWsfUfRnkVx5pkilJVOjWcD7XeBjvvo6nfyZLGLv3KAoPUK4C1CK2OGGFghKH_ARXbSNg5tBdb_v3Qw1yr3YWrNJ4-VKUjYe8kjbFZnBfJYfuaQYjjtj5uULPzJLRSN1rsVuTo92a0H6-5uWzBxcf5WEhEWukHCB47hLGWlmCTQJQElKjf7YpOaZEkkZLmcXMrzue7dU9NuD1UAZ0NuCyY8eeJFMqHM6dUMZlzbv"
                alt="Luxury medical spa interior"
                width={900}
                height={1200}
                className="relative z-10 h-[600px] w-full rounded-xl object-cover shadow-2xl transition-all duration-500 hover:grayscale-0 grayscale-[20%]"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#f1f4f2] py-32">
          <div className="container mx-auto px-8">
            <div className="grid items-start gap-16 lg:grid-cols-12">
              <div className="space-y-12 lg:col-span-5">
                <h2 className="font-[var(--font-display)] text-5xl tracking-tight text-[#061b0e]">Why IV Therapy?</h2>
                <div className="space-y-8">
                  <div className="rounded-xl border-l-4 border-[#e9c176] bg-white p-8 shadow-sm">
                    <h3 className="mb-4 font-[var(--font-display)] text-xl">Direct Bioavailability</h3>
                    <p className="leading-relaxed text-[#434843]">
                      Oral supplements must navigate the digestive tract, resulting in significant nutrient loss. Intravenous delivery bypasses the gut, offering immediate cellular access.
                    </p>
                  </div>
                  <ul className="space-y-6">
                    {[
                      "Nutrient deficiencies & Malabsorption",
                      "Chronic Fatigue & Burnout recovery",
                      "Post-viral recovery & Immunity",
                      "Elite athletic performance",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-4">
                        <CheckCircle2 className="h-5 w-5 text-[#e9c176]" />
                        <span className="text-lg font-medium text-[#061b0e]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center lg:col-span-7">
                <div className="relative flex aspect-square w-full max-w-md flex-col items-center justify-center rounded-full border border-[#c3c8c1]/20 bg-white p-12 shadow-xl">
                  <div className="absolute inset-4 rounded-full border-8 border-[#e0e3e1]"></div>
                  <svg className="absolute inset-0 h-full w-full -rotate-90">
                    <circle cx="50%" cy="50%" r="48%" fill="transparent" stroke="#e9c176" strokeDasharray="301" strokeDashoffset="0" strokeWidth="8"></circle>
                  </svg>
                  <div className="z-10 text-center">
                    <div className="mb-2 font-[var(--font-display)] text-6xl text-[#061b0e]">100%</div>
                    <div className="text-sm uppercase tracking-widest text-[#737973]">Bioavailability</div>
                  </div>
                  <div className="absolute bottom-16 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-white bg-[#e6e9e7] shadow-lg">
                    <div className="font-[var(--font-display)] text-xl text-[#434843]">10-30%</div>
                    <div className="text-[10px] uppercase tracking-tight text-[#737973]">Oral Route</div>
                  </div>
                </div>
                <p className="mt-12 max-w-sm text-center text-sm text-[#737973]">
                  *Visual representation of clinical absorption rates comparing IV therapy vs. standardized oral supplementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7faf8] py-32">
          <div className="container mx-auto px-8">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#e9c176]">Curated Formulations</span>
                <h2 className="mt-4 font-[var(--font-display)] text-5xl text-[#061b0e]">Our Signature IV Programs</h2>
              </div>
              <p className="max-w-xs leading-relaxed text-[#737973]">
                Clinically calibrated infusions designed for specific biological outcomes and longevity goals.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 [perspective:1400px] md:grid-cols-3">
              <div className="group relative flex min-h-[450px] flex-col justify-between overflow-hidden rounded-xl bg-[#1b3022] p-12 text-white shadow-[0_28px_80px_-28px_rgba(6,27,14,0.65)] ring-1 ring-white/10 transition-all duration-500 [transform-style:preserve-3d] hover:shadow-[0_38px_100px_-24px_rgba(6,27,14,0.78)] hover:ring-[#e9c176]/35 hover:[transform:translateY(-10px)_rotateX(2deg)_rotateY(-2deg)] md:col-span-2">
                <div className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(233,193,118,0.22),transparent_55%)]" />
                </div>
                <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAao5pErz_q9wdwqwAuAPCAgDjVDccNq1RaiMyASRgSUrOFyHsekNy2c2L-hKzZ1cxjU15uxSPZoo-UQrsgASD_lsF5FMRFff29xEIQiUhxF7Gcicvv9wplbHpM4mEgNTahsjM5Djufnl5YSFaY08TWsFNbBIVjj7eWbXoHNXT10lZF5m5Rmnme1GLH__eTnDWcnKwwIlzjXb_UKgRRUu7ftPoHxPuQXk9SNEohO0f3r3e5t_rmCu3FNcr8ktF2Y5TtwsYPUf5ROhiF"
                    alt="Abstract crystalline structure"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <Shield className="h-10 w-10 text-[#e9c176]" />
                    <h3 className="font-[var(--font-display)] text-3xl">Vascular Shield Therapy</h3>
                  </div>
                  <p className="max-w-md text-lg text-[#819986]">
                    A protective protocol focusing on endothelial repair and vascular protection.
                  </p>
                  <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-8">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-widest text-[#819986]">Key Nutrients</p>
                      <p className="font-medium">Vit-C, B-Complex, Magnesium, Antioxidants</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-widest text-[#819986]">Primary Goal</p>
                      <p className="font-medium">Endothelial repair & Anti-inflammatory</p>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="rounded-lg bg-white/10 px-4 py-2 text-sm">Ideal for: Hypertension, Cardiovascular risk</div>
                  <button className="btn-premium btn-premium-primary px-5 py-2.5 text-[10px]">
                    Select Protocol
                  </button>
                </div>
              </div>

              {[
                { icon: Zap, title: "Metabolic Boost IV", desc: "Optimizing glucose utilization and metabolic activation for weight management and lipid profile stabilization.", ideal: "Weight management, sluggish metabolism" },
                { icon: Brain, title: "Energy & Performance IV", desc: "Advanced mitochondrial support featuring high-dose NAD+ precursors and cellular energy co-factors.", ideal: "Brain fog, extreme fatigue, athletic recovery" },
                { icon: Droplet, title: "Immunity & Recovery IV", desc: "Maximum dose Vitamin C and Glutathione protocol for rapid immune system modulation and oxidative stress reduction.", ideal: "Post-viral fatigue, seasonal illness prevention" },
                { icon: Activity, title: "Detox & Liver Support IV", desc: "NAC and Glutathione synergy designed to augment endogenous liver detoxification pathways and toxin clearance.", ideal: "Toxin exposure, hepatic support, skin clarity" },
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-xl p-10 ring-1 transition-all duration-500 [transform-style:preserve-3d] hover:shadow-[0_28px_80px_-30px_rgba(6,27,14,0.45)] hover:[transform:translateY(-10px)_rotateX(2deg)_rotateY(-2deg)] ${idx === 1 ? "bg-[#f1f4f2] ring-[#c3c8c1]/30" : "border border-[#c3c8c1]/30 bg-white ring-[#c3c8c1]/20"}`}
                  >
                    <div className="pointer-events-none absolute -inset-16 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_15%_15%,rgba(233,193,118,0.26),transparent_55%)]" />
                    </div>
                    <div className="space-y-6">
                      <Icon className="h-10 w-10 text-[#061b0e] transition-all duration-500 group-hover:scale-110 group-hover:text-[#e9c176]" />
                      <h3 className="font-[var(--font-display)] text-2xl">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-[#434843]">{card.desc}</p>
                      <div className="space-y-2 pt-4">
                        <p className="text-[10px] uppercase tracking-widest text-[#737973]">Ideal for</p>
                        <p className="text-sm font-semibold">{card.ideal}</p>
                      </div>
                    </div>
                    <button className="btn-premium btn-premium-ghost mt-8 w-fit px-4 py-2 text-[10px] text-[#061b0e]">
                      View Details
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#1b3022] py-32 text-white">
          <div className="container mx-auto px-8">
            <div className="grid items-center gap-24 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQr7-NX-plhp96j5ISCgaQ0PKHkVa6rbqjSI8x-Qk2iHs9avD_mtLAjUmcIRcDOR_c9t_SvQXnJNp_KThprw8b5Lxhm6ckM5pxlmNjkYfF3ZyRSTqvGvkH3Binxdyo5jea9cNzH5ZEoV_ZVaqwO6_u__Yosg9S3jhgW67b_XFsFrbMFuh3cAoIC-plnP_taXkRX4X9jXNRm6kIOUIMi77vdV3v-b0RgeCPpFsz7BXmV8FuJ70Fo2o4XrPYH_qqMPmasg4pOFcEIF6k"
                  alt="Doctor examining lab reports"
                  width={900}
                  height={700}
                  className="relative z-10 rounded-xl opacity-90 shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 hidden rounded-xl bg-[#e9c176] p-12 md:block">
                  <Shield className="h-14 w-14 text-[#061b0e]" />
                </div>
              </div>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="font-[var(--font-display)] text-5xl tracking-tight">Personalization & Safety</h2>
                  <p className="text-lg leading-relaxed text-[#819986]">
                    At Re-Vitalis, we do not believe in "one size fits all." Every infusion is a calculated medical procedure.
                  </p>
                </div>
                <div className="space-y-10">
                  {[
                    { n: "01", title: "Customized Protocols", text: "Every IV drip is tailored based on clinical evaluation and comprehensive lab reports to address your specific biomarkers." },
                    { n: "02", title: "Medical Supervision", text: "Doctor-led sterile protocols ensure the highest standards of safety and efficacy throughout your therapy session." },
                    { n: "03", title: "Premium Clinical Setup", text: "Experience cellular rejuvenation in a sanctuary designed for tranquility and sterile precision." },
                  ].map((step) => (
                    <div key={step.n} className="flex gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e9c176]">
                        <span className="font-[var(--font-display)] text-[#e9c176]">{step.n}</span>
                      </div>
                      <div>
                        <h4 className="mb-2 font-[var(--font-display)] text-xl">{step.title}</h4>
                        <p className="text-[#819986]">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f7faf8] py-32">
          <div className="container relative z-10 mx-auto px-8">
            <div className="mx-auto max-w-4xl space-y-12 text-center">
              <h2 className="font-[var(--font-display)] text-5xl tracking-tight text-[#061b0e] md:text-7xl">
                Experience Advanced <br />IV Therapy at Re-Vitalis
              </h2>
              <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[#434843]">
                Begin your journey toward cellular optimization. Our medical team is ready to guide you through your personalized protocol.
              </p>
              <div className="flex flex-col justify-center gap-6 pt-8 md:flex-row">
                <button className="btn-premium btn-premium-dark px-8 py-3 text-[11px]">
                  Book Assessment
                </button>
                <button className="btn-premium btn-premium-ghost flex items-center justify-center gap-2 px-8 py-3 text-[11px] text-[#061b0e]">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Consultation
                </button>
                <button className="btn-premium btn-premium-primary px-8 py-3 text-[11px]">
                  Start Therapy
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-12 pt-20 opacity-60 grayscale">
                <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> <span className="text-sm uppercase tracking-widest">Doctor-Guided</span></div>
                <div className="flex items-center gap-2"><Activity className="h-4 w-4" /> <span className="text-sm uppercase tracking-widest">Evidence-Based</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4" /> <span className="text-sm uppercase tracking-widest">Clinical Excellence</span></div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-5">
            <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <path d="M444.5,417.5Q389,435,355,487Q321,539,260.5,502.5Q200,466,163.5,400Q127,334,183.5,282.5Q240,231,313,205Q386,179,439.5,231.5Q493,284,500,342Q507,400,444.5,417.5Z" fill="#061b0e"></path>
            </svg>
          </div>
        </section>
      </main>

      <FAQSection
        faqs={ivTherapyFaqs}
        theme="light"
        heading="IV Therapy — Common Questions"
      />

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
