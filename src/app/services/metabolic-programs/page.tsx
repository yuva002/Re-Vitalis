"use client";

import Image from "next/image";
import { CalendarDays, MessageCircle, ChevronRight, RefreshCw, Bolt, ChartLine, Phone, Globe, Mail } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/ui/modem-animated-footer";
import { FAQSection } from "@/components/FAQSection";

const metabolicFaqs = [
  {
    question: "What is a metabolic recovery program?",
    answer:
      "A metabolic recovery program is a structured, clinically supervised health intervention that identifies and addresses the root causes of metabolic dysfunction — including insulin resistance, hormonal imbalance, chronic inflammation, and mitochondrial inefficiency. At Re-Vitalis, programs combine comprehensive biomarker testing, IV therapy, personalized nutrition, and lifestyle medicine into a single cohesive protocol.",
  },
  {
    question: "What biomarker tests are included in the Re-Vitalis metabolic assessment?",
    answer:
      "The Re-Vitalis metabolic panel includes fasting glucose and insulin, HbA1c, full lipid profile, thyroid function (TSH, T3, T4), sex hormones (testosterone, estradiol, DHEA-S), cortisol, CRP, homocysteine, vitamin D, B12, ferritin, liver enzymes, and kidney function markers — among others tailored to each patient's clinical picture.",
  },
  {
    question: "How long does a Re-Vitalis metabolic recovery program last?",
    answer:
      "Most Re-Vitalis metabolic programs run 8 to 16 weeks, depending on the severity of the metabolic dysfunction and individual response. The program is divided into phases: initial assessment and protocol design (weeks 1–2), active intervention with regular monitoring (weeks 3–12), and consolidation and maintenance planning (weeks 13–16).",
  },
  {
    question: "Who is a good candidate for metabolic recovery at Re-Vitalis?",
    answer:
      "Metabolic recovery is appropriate for individuals experiencing persistent fatigue, unexplained weight gain, insulin resistance or pre-diabetes, hormonal imbalances, elevated inflammatory markers, or cardiovascular risk factors. It is also highly effective for high-performers seeking to optimize energy, body composition, and cognitive function.",
  },
  {
    question: "What measurable results can I expect from a Re-Vitalis metabolic program?",
    answer:
      "Clinical outcomes vary by individual, but typical results after a complete Re-Vitalis metabolic program include improved fasting glucose and insulin sensitivity, optimized lipid profiles, restored hormonal balance, reduced inflammatory markers, significant improvement in energy levels and body composition, and enhanced cognitive clarity — all measured through repeat biomarker testing.",
  },
];

const metabolicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Metabolic Recovery Program",
  description:
    "A structured clinical program combining comprehensive biomarker testing, IV therapy, nutrition coaching, and lifestyle medicine to reverse metabolic dysfunction and restore long-term health.",
  procedureType: "https://schema.org/TherapeuticProcedure",
  howPerformed:
    "Patients undergo a comprehensive biomarker panel, followed by physician-designed intervention combining IV therapy, nutraceutical protocols, nutritional guidance, and lifestyle coaching. Progress is monitored through repeat testing every 4–8 weeks.",
  preparation:
    "An initial physician consultation and fasting blood draw are required before beginning the program.",
  followup:
    "Follow-up biomarker testing and physician reviews are scheduled at 8 and 16 weeks, with ongoing maintenance planning thereafter.",
  provider: {
    "@type": "MedicalBusiness",
    name: "Re-Vitalis Wellness",
    url: "https://www.re-vitalis.in",
  },
};

const metabolicBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.re-vitalis.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.re-vitalis.in/services/metabolic-programs" },
    { "@type": "ListItem", position: 3, name: "Metabolic Recovery Programs", item: "https://www.re-vitalis.in/services/metabolic-programs" },
  ],
};

export default function MetabolicProgramsPage() {
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
    <div className="min-h-screen bg-[#f7faf8] font-['Inter'] text-[#181c1c] selection:bg-[#e9c176]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metabolicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metabolicBreadcrumb) }}
      />
      <div style={{ ["--ink" as any]: "#F0ECE4", ["--slate" as any]: "#D8D2C8" }}>
        <NavBar />
      </div>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[#061b0e] px-8 text-white">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT_h8rTEnOhHdi6nCXABUR4vX7XPD0BepLUS9l2T4NDs-6M1908AqIQjpuSi4vR3vk8u5EAvvxRlI9VnSqE3nV2SB4b_yMtucoyqjBSj4P_s8vsnWh8m4a29xsssEW-i4DCiyV1vdAWrHhoNdmWEBWv-dBNVLBXVf6hd9TVwUoQH7a2kLFa0klD4n8nUFEW9xvGqlmve6wN483wfFHp1nDMN29H_n3piU06VR25idyDZJF7F0CwZ6Gb6vuex3BxpGqyuIXVbL2ju5O"
              alt="DNA structures"
              fill
              sizes="100vw"
              className="object-cover mix-blend-overlay"
            />
          </div>
          <div className="relative z-10 mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-16 pt-32 lg:grid-cols-2">
            <div className="space-y-8">
              <span className="inline-block border border-[#e9c176]/30 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#e9c176]">
                Metabolic Excellence
              </span>
              <h1 className="font-[var(--font-display)] text-6xl leading-[1.1] tracking-tighter md:text-8xl">
                Metabolic <br />Recovery Programs
              </h1>
              <p className="max-w-lg text-xl font-light leading-relaxed text-[#819986] md:text-2xl">
                Beyond symptoms. Restoring your body's foundation through clinical precision and botanical serenity.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn-premium btn-premium-primary px-7 py-3 text-[11px]">
                  Explore Science
                </button>
                <button className="btn-premium btn-premium-ghost px-7 py-3 text-[11px]">
                  Our Biomarkers
                </button>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-8 py-32">
          <div className="mb-20 space-y-4">
            <h2 className="font-[var(--font-display)] text-5xl text-[#061b0e]">Specialized Recovery Tracks</h2>
            <div className="h-0.5 w-24 bg-[#e9c176]"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-lg bg-[#f1f4f2] p-10 transition-all duration-500 hover:bg-[#ebefed]">
              <div className="mb-12 flex items-start justify-between">
                <RefreshCw className="h-10 w-10 text-[#061b0e]" />
                <div className="relative flex h-20 w-20 items-center justify-center">
                  <svg className="h-full w-full -rotate-90">
                    <circle cx="40" cy="40" r="36" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-[#c3c8c1]/20"></circle>
                    <circle cx="40" cy="40" r="36" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray="226" strokeDashoffset="67" className="text-[#e9c176]"></circle>
                  </svg>
                  <span className="absolute text-xs font-bold">70%</span>
                </div>
              </div>
              <h3 className="mb-4 font-[var(--font-display)] text-2xl">Metabolic Reset</h3>
              <p className="mb-8 leading-relaxed text-[#434843]">Systemic recalibration for chronic fatigue and weight plateaus using personalized chronobiology.</p>
              <div className="inline-block border-b border-[#061b0e]/10 pb-2 text-xs uppercase tracking-widest text-[#061b0e]">Metabolic Stress Score</div>
            </div>

            <div className="group rounded-lg bg-[#f1f4f2] p-10 transition-all duration-500 hover:bg-[#ebefed]">
              <div className="mb-12 flex h-20 items-end gap-1">
                <div className="h-[20%] w-full bg-[#c3c8c1]/30 transition-all group-hover:bg-[#061b0e]/20"></div>
                <div className="h-[40%] w-full bg-[#c3c8c1]/30 transition-all group-hover:bg-[#061b0e]/40"></div>
                <div className="h-[85%] w-full bg-[#e9c176]"></div>
                <div className="h-[60%] w-full bg-[#c3c8c1]/30 transition-all group-hover:bg-[#061b0e]/60"></div>
                <div className="h-[30%] w-full bg-[#c3c8c1]/30 transition-all group-hover:bg-[#061b0e]/30"></div>
              </div>
              <h3 className="mb-4 font-[var(--font-display)] text-2xl">Cardiometabolic Recovery</h3>
              <p className="mb-8 leading-relaxed text-[#434843]">Advanced vascular support focusing on endothelial health and lipid optimization.</p>
              <div className="inline-block border-b border-[#061b0e]/10 pb-2 text-xs uppercase tracking-widest text-[#061b0e]">Vascular Health Index</div>
            </div>

            <div className="rounded-lg bg-[#061b0e] p-10 text-white">
              <div className="relative mb-12 h-20 overflow-hidden">
                <svg className="h-full w-full" viewBox="0 0 200 80">
                  <path d="M0 60 Q 50 10, 100 40 T 200 20" fill="none" stroke="#e9c176" strokeWidth="2"></path>
                  <circle cx="200" cy="20" r="4" fill="#e9c176"></circle>
                </svg>
              </div>
              <h3 className="mb-4 font-[var(--font-display)] text-2xl text-[#e9c176]">Diabetes Reversal</h3>
              <p className="mb-8 leading-relaxed text-[#819986]">Precision nutrition and glucose monitoring to restore insulin sensitivity naturally.</p>
              <div className="inline-block border-b border-[#e9c176]/30 pb-2 text-xs uppercase tracking-widest text-[#e9c176]">HbA1c Reduction Trend</div>
            </div>

            <div className="group rounded-lg bg-[#f1f4f2] p-10 transition-all duration-500 hover:bg-[#ebefed]">
              <div className="mb-12 flex items-start justify-between">
                <Bolt className="h-10 w-10 text-[#061b0e]" />
                <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-[#061b0e] to-[#e9c176] opacity-20 blur-xl transition-opacity group-hover:opacity-40"></div>
              </div>
              <h3 className="mb-4 font-[var(--font-display)] text-2xl">Mitochondrial Optimization</h3>
              <p className="mb-8 leading-relaxed text-[#434843]">Intracellular energy enhancement through targeted co-factor therapy and light protocols.</p>
              <div className="inline-block border-b border-[#061b0e]/10 pb-2 text-xs uppercase tracking-widest text-[#061b0e]">ATP Synthesis Rate</div>
            </div>

            <div className="rounded-lg bg-[#f1f4f2] p-10 transition-all duration-500 hover:bg-[#ebefed] lg:col-span-2">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 font-[var(--font-display)] text-2xl">Longevity & Preventive</h3>
                  <p className="mb-8 leading-relaxed text-[#434843]">The ultimate blueprint for biological age deceleration and elite physiological performance.</p>
                  <div className="inline-block border-b border-[#061b0e]/10 pb-2 text-xs uppercase tracking-widest text-[#061b0e]">Elite Performance Profile</div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSlfF31fCyFH_a2w8fykS3cNBRI4hXd2XeM1VLZK0xXqRQs5pTesq4ghbephExOKIHDHRTsdOmjw_qz_KmQltpevRH9_yMEV_NLZ-NR0L8-pRVdum1aFgXJ0a07eKXC_3nn--MvtOJvywnwn0fFnX4RwrjLZoiaO3zeyNbQtJ8MnGqp1ywP3aVemtbrv14hHsviXSCiZVuicOOlarn3yCupt1KPAI-fQC1RudIbra_ETDa3Fo5TcMUYQOixxasWTUw_hE4TZCrd3qA"
                    alt="Laboratory precision"
                    width={500}
                    height={200}
                    className="h-40 w-full rounded object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f1f4f2] px-8 py-32">
          <div className="mx-auto max-w-screen-2xl">
            <div className="mx-auto mb-24 max-w-2xl text-center">
              <h2 className="mb-6 font-[var(--font-display)] text-5xl">The Precision Shift</h2>
              <p className="text-lg text-[#434843]">Comparing the paradigm shift from symptom management to root-cause restoration.</p>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#c3c8c1]/15 bg-[#f7faf8]">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#061b0e] text-white">
                    <th className="border-r border-white/10 p-8 text-xs uppercase tracking-widest">Clinical Pillar</th>
                    <th className="border-r border-white/10 p-8 text-xs uppercase tracking-widest">Conventional Medicine</th>
                    <th className="p-8 text-xs uppercase tracking-widest text-[#e9c176]">Re-Vitalis Precision</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c3c8c1]/10">
                  {[
                    ["Diagnosis Model", "Symptom-based classifications", "Multi-omic root cause data mapping"],
                    ["Strategy", "Standardized pharmaceutical care", "Bio-individual molecular optimization"],
                    ["Timeline", "Reactive episodic visits", "Proactive continuous metabolic monitoring"],
                    ["Success Metric", "Absence of acute disease", "Optimization of physiological reserves"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="border-r border-[#c3c8c1]/10 p-8 font-[var(--font-display)] text-lg font-bold">{row[0]}</td>
                      <td className="border-r border-[#c3c8c1]/10 p-8 text-[#434843]">{row[1]}</td>
                      <td className="bg-[#e9c176]/5 p-8 font-medium text-[#061b0e]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-8 py-32">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="max-w-xl">
              <span className="mb-4 block text-xs uppercase tracking-widest text-[#e9c176]">Molecular Intelligence</span>
              <h2 className="font-[var(--font-display)] text-4xl text-[#061b0e]">Biomarker Assessment Panel</h2>
            </div>
            <div className="flex gap-4">
              <button className="btn-premium btn-premium-dark px-5 py-2 text-[10px]">Cardio</button>
              <button className="btn-premium btn-premium-ghost px-5 py-2 text-[10px] text-[#061b0e]">Metabolic</button>
              <button className="btn-premium btn-premium-ghost px-5 py-2 text-[10px] text-[#061b0e]">Nutritional</button>
            </div>
          </div>
          <div className="space-y-4">
            {[
              ["HbA1c", "Glucose Control", "3-month average of blood sugar levels. Critical for assessing metabolic flexibility and pre-diabetic risk.", "ESSENTIAL"],
              ["ApoB", "Vascular Integrity", "The most accurate predictor of cardiovascular risk, measuring the total number of atherogenic particles.", "GOLD STANDARD"],
              ["Omega-3 Index", "Cellular Health", "Measurement of EPA and DHA in red blood cell membranes, indicative of systemic inflammation and heart health.", "OPTIONAL"],
            ].map((item) => (
              <div key={item[0]} className="group flex flex-wrap items-center justify-between rounded-lg border border-[#c3c8c1]/15 bg-white p-8 transition-colors hover:bg-[#ebefed] md:flex-nowrap">
                <div className="w-full md:w-1/4">
                  <span className="font-[var(--font-display)] text-xl text-[#061b0e]">{item[0]}</span>
                  <p className="mt-1 text-xs uppercase text-[#737973]">{item[1]}</p>
                </div>
                <div className="w-full py-4 md:w-2/4 md:py-0">
                  <p className="text-sm leading-relaxed text-[#434843]">{item[2]}</p>
                </div>
                <div className="flex w-full items-center justify-end gap-4 md:w-1/4">
                  <span className="text-xs font-bold text-[#e9c176]">{item[3]}</span>
                  <ChevronRight className="h-4 w-4 text-[#c3c8c1] transition-colors group-hover:text-[#061b0e]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8 py-32">
          <div className="relative mx-auto flex min-h-[500px] max-w-screen-2xl items-center overflow-hidden rounded-3xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFloDeatG0WVXvK5u55gQFNHENmwk644-QAIEyPKfvmzIbjDsjaS_-AVrHOrkVu-u1WukgM_sYEiBbSVeh3W3rlkXdCTprO7LBWeveaIqV-IqcjzWcN7d1kvNsL-DyMAovscTcBdYNYyLwJNIcCErK7VH8cJ8TJhhdu6K8K5vftdRpRHMcoaAwAHqF5ugYKvgZ8jim5QJ6xEe1uPfR3a-81l-t9Ru3JGu6yk_5rh-kSgKKdEF3SABigzypQvth_qVQnKtAzFOY1AKc"
              alt="Clinic interior"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#061b0e]/80 backdrop-blur-sm"></div>
            <div className="relative z-10 w-full px-4 text-center text-white">
              <h2 className="mx-auto mb-8 max-w-3xl font-[var(--font-display)] text-4xl md:text-6xl">Start Your Metabolic Recovery Journey Today</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="btn-premium btn-premium-primary flex items-center gap-2 px-8 py-3 text-[11px]">
                  <CalendarDays className="h-4 w-4" />
                  Start Recovery Program
                </button>
                <button className="btn-premium btn-premium-ghost flex items-center gap-2 px-8 py-3 text-[11px] text-white">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </button>
              </div>
              <div className="mt-12">
                <a className="text-xs uppercase tracking-widest text-[#819986] underline underline-offset-8 transition-colors hover:text-[#e9c176]" href="#">
                  Take the Metabolic Assessment
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FAQSection
        faqs={metabolicFaqs}
        theme="light"
        heading="Metabolic Recovery — Common Questions"
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
