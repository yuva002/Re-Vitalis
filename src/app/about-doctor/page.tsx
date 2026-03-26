"use client";

import Image from "next/image";
import { ArrowDown, BadgeCheck, FlaskConical, HeartPulse, MessageCircle, Phone, SearchCheck, UserRoundCheck } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/ui/modem-animated-footer";

export default function AboutDoctorPage() {
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
    { icon: <Phone className="w-4 h-4" />, label: "9000179178", href: "tel:9000179178" },
    { icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp: 9000179178", href: "https://wa.me/919000179178" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7faf8] text-[#181c1c]">
      <NavBar />

      <main>
        <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden px-6 pb-10 pt-20 lg:px-16">
          <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-[#d9eaa3]/30 blur-[80px]" />
          <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#b4cdb8]/30 blur-[80px]" />

          <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#d6e7a1]/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#56642b]">
                <span className="h-2 w-2 rounded-full bg-[#56642b]" />
                Founder & Lead Specialist
              </div>
              <h1 className="mb-6 font-[var(--font-display)] text-4xl font-bold leading-[1.05] text-[#061b0e] md:text-5xl lg:text-6xl">
                Restoring Health Through <span className="text-[#56642b]">Precision</span>, Science, and Personalization
              </h1>
              <p className="mx-auto mb-8 max-w-xl font-[var(--font-display)] text-lg leading-relaxed text-[#434843] lg:mx-0">
                "True healing begins when we address the root cause, not just the symptoms."
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <button className="btn-premium btn-premium-dark inline-flex items-center justify-center gap-2 px-7 py-3 text-[11px]">
                  Meet Dr. Ramana
                  <ArrowDown className="h-4 w-4" />
                </button>
                <button className="btn-premium btn-premium-ghost px-7 py-3 text-[11px] text-[#061b0e]">
                  Our Methodology
                </button>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[52%_48%_62%_38%/42%_46%_54%_58%] border-4 border-white bg-[#ebefed] shadow-xl">
                <Image
                  src="/Dr-Ramana-DP.png"
                  alt="Dr. Ramana Naidu Darmisetty"
                  fill
                  className="object-cover grayscale-[10%] transition-transform duration-[2000ms] hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 right-0 max-w-[280px] rounded-[1.5rem] border border-[#c3c8c1]/20 bg-white/90 p-4 shadow-lg backdrop-blur-md lg:-right-6">
                <p className="font-[var(--font-display)] text-base font-bold text-[#061b0e]">Dr. Ramana Naidu Darmisetty</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#56642b]">MBBS, JIPMER, Diabetology</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/30 px-6 py-16 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 font-[var(--font-display)] text-4xl font-bold text-[#061b0e]">Academic & Clinical Excellence</h2>
              <p className="text-base leading-relaxed text-[#434843]">
                A foundation built on rigorous scientific training and a career dedicated to metabolic precision.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "MBBS",
                  desc: "Medical excellence rooted in core fundamental training, providing a comprehensive understanding of human physiology.",
                  icon: HeartPulse,
                },
                {
                  title: "JIPMER Alumni",
                  desc: "Specialized training at one of India's premier medical institutes, honing advanced clinical acumen and diagnostic precision.",
                  icon: BadgeCheck,
                },
                {
                  title: "Diabetology",
                  desc: "A focus on chronic metabolic care, moving beyond management to true restorative protocols for endocrine health.",
                  icon: FlaskConical,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`group rounded-[1.5rem] border border-[#c3c8c1]/20 bg-white/70 p-7 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-[#56642b]/10 ${idx === 1 ? "lg:-translate-y-4" : ""}`}
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#d6e7a1]/40 transition-all group-hover:scale-105">
                      <Icon className="h-6 w-6 text-[#56642b]" />
                    </div>
                    <h3 className="mb-3 font-[var(--font-display)] text-2xl font-bold text-[#061b0e]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#434843]">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#1b3022] px-6 py-16 text-white lg:px-16 lg:py-20">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.1" />
              <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.1" />
            </svg>
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square overflow-hidden rounded-[60%_40%_70%_30%/40%_50%_60%_40%] bg-[#56642b]/10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHoeKPg4eMwO6eJfrOVmym39deN7eI_A4S01JeOxu60vdjPpA-4PPKo1ZEOgTbSE8DlmhRm15VlCcW2mCGVkSFgQgveAibNPG9kbyy6evfxzeuIRUVAsoP7aHiAZ3Fiqsw5eRihkTFB0heUF4CZuHIGj6gPLVAVB4WbrFtHedC4jfy90O7vycc64lgfbpNhYmOpZu-pWsZkx9h1t6ZqMIGJss22uj6unTcxc0qBb_v5iSOramiI4Gr9PM7-qy-a287VmNzGCnRG3eN"
                  alt="Metabolic Interconnectedness"
                  fill
                  className="object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-48 w-48 items-center justify-center rounded-[60%_40%_70%_30%/40%_50%_60%_40%] border border-white/20 bg-[#e9c176]/20 p-6 text-center text-xs font-bold uppercase tracking-[0.2em]">
                    Metabolic Root
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 font-[var(--font-display)] text-4xl font-bold leading-tight lg:text-5xl">The Philosophy Behind Re-Vitalis</h2>
              <p className="mb-8 text-lg leading-relaxed text-[#b4cdb8]">
                Conventional medicine treats the branch; we treat the soil. Modern chronic conditions like fatigue, brain fog, and insulin resistance are the language of a metabolic system out of balance.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#56642b]/30">
                    <SearchCheck className="h-6 w-6 text-[#e9c176]" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-bold">Integrated Ecosystem</h4>
                    <p className="text-sm text-[#b4cdb8]/80">The heart, liver, and brain are tied to the same metabolic fuel lines.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#56642b]/30">
                    <FlaskConical className="h-6 w-6 text-[#e9c176]" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-bold">Cellular Precision</h4>
                    <p className="text-sm text-[#b4cdb8]/80">Health is analyzed at the molecular level before dysfunction becomes disease.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[#f7faf8] px-6 py-16 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-[#56642b]">A Holistic Journey</span>
              <h2 className="mb-4 font-[var(--font-display)] text-4xl font-bold text-[#061b0e] lg:text-5xl">The Clinical Pathway</h2>
              <p className="text-base text-[#434843]">An uncompromising standard of investigative healthcare.</p>
            </div>

            <div className="relative space-y-12 md:space-y-16">
              <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c3c8c1]/30 to-transparent md:block" />
              {[
                {
                  n: "01",
                  title: "Deep Clinical Evaluation",
                  desc: "A 90-minute immersion into your history, lifestyle, and unique biological narrative.",
                },
                {
                  n: "02",
                  title: "Advanced Biomarker Analysis",
                  desc: "Omega-3 Index, Homocysteine, ApoB, and hs-CRP reveal true metabolic age.",
                },
                {
                  n: "03",
                  title: "Personalized Protocol Design",
                  desc: "A bespoke blueprint integrating nutrition, supplementation, and lifestyle precision.",
                },
                {
                  n: "04",
                  title: "Continuous Monitoring",
                  desc: "Real-time feedback and iterative adjustment to sustain vitality and longevity.",
                },
              ].map((item, idx) => (
                <div key={item.n} className={`group flex flex-col items-center gap-5 md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="z-10 flex h-14 w-14 items-center justify-center rounded-[60%_40%_70%_30%/40%_50%_60%_40%] border-2 border-[#d9eaa3] bg-[#f7faf8] text-lg font-bold text-[#061b0e] transition-colors group-hover:bg-[#d9eaa3]">
                    {item.n}
                  </div>
                  <div className={`w-full rounded-[1.5rem] border border-[#c3c8c1]/20 bg-[#f1f4f2] p-6 transition-transform duration-500 md:w-1/2 ${idx % 2 === 1 ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"}`}>
                    <h3 className="mb-2 font-[var(--font-display)] text-2xl font-bold text-[#061b0e]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#434843]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f1f4f2]/60 px-6 py-16 lg:px-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
            <div className="space-y-7">
              <div>
                <h2 className="mb-4 font-[var(--font-display)] text-3xl font-bold text-[#061b0e] lg:text-4xl">Core Therapeutic Focus</h2>
                <p className="text-sm leading-relaxed text-[#434843]">Mastery over modern longevity challenges through patient-first care.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Diabetes", "Cardio-Risk", "Obesity", "Fatigue"].map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-[#c3c8c1]/20 bg-white p-4 text-center transition-all hover:shadow-lg">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#061b0e]">{item}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#061b0e] p-8 text-white lg:p-10">
              <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#56642b] opacity-20 blur-[80px]" />
              <h2 className="mb-8 text-center font-[var(--font-display)] text-3xl font-bold">The Re-Vitalis Distinction</h2>
              <div className="grid gap-7 sm:grid-cols-2">
                {[
                  { title: "Root-Cause Focus", desc: "Beyond symptom suppression to biological origin.", icon: SearchCheck },
                  { title: "Data-Driven", desc: "Clinical decisions backed by advanced diagnostics.", icon: FlaskConical },
                  { title: "Personalized", desc: "No generic protocol; every plan is uniquely matched.", icon: UserRoundCheck },
                  { title: "Integrated Model", desc: "Lifestyle medicine, metabolic science, and empathy.", icon: HeartPulse },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="space-y-4">
                      <Icon className="h-7 w-7 text-[#e9c176]" />
                      <h3 className="font-[var(--font-display)] text-xl font-bold">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-[#b4cdb8]/70">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-16 lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
            <div className="relative w-full lg:w-1/2">
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[60%_40%_70%_30%/40%_50%_60%_40%] shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtoLMuZwtyM6jH1Q1Qg8mzs75vYfXQSVZRrHFmI2Rg7qDyxymBgD4Y4DTeaAiT7dlA3OMi5wSVmGzQtLgeOTG_GDZ-mUFDYil5VDlmIR5ySgBEeyb5f7yrd3ybY72yvLGMp69EX1C6wIEYHtGP45vgNfZnI4Bw-X2RPAfuDOJHGRz89BO5vcqhoZT5Z1RXTn7JvZre0Bw1zGgR08sVJUEUPDMPKg6bv8WL4Q3H-msG-9wl1gL9vlRAHdtjTLGqse-Pc272ANnRumeA"
                  alt="Patient-Centered Care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -left-12 -top-12 -z-10 h-64 w-64 rounded-[30%_70%_40%_60%/50%_30%_70%_50%] bg-[#d9eaa3]/30" />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="mb-6 block text-sm font-bold uppercase tracking-[0.3em] text-[#56642b]">Our Future Vision</span>
              <h2 className="mb-5 font-[var(--font-display)] text-4xl font-bold leading-tight text-[#061b0e]">A Future Defined by Healthspan</h2>
              <p className="mb-7 text-base leading-relaxed text-[#434843]">
                The future of medicine is not just living longer. It is living better with sustained physical and cognitive performance guided by precision care.
              </p>
              <blockquote className="relative rounded-[1.5rem] border border-[#c3c8c1]/20 bg-white/50 p-6">
                <span className="absolute left-6 top-4 text-6xl font-serif leading-none text-[#56642b]/20">“</span>
                <p className="relative z-10 font-[var(--font-display)] text-xl leading-relaxed text-[#061b0e]">
                  "Patients are not cases; they are stories in need of a better resolution. We are here to rewrite that story together."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 pt-8 lg:px-16">
          <div className="relative mx-auto overflow-hidden rounded-[2rem] bg-[#1b3022] p-8 text-center text-white shadow-2xl lg:max-w-6xl lg:p-14">
            <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#e9c176] opacity-10 blur-[80px]" />
            <div className="relative z-10">
              <div className="mx-auto mb-12 h-1 w-20 rounded-full bg-[#e9c176]" />
              <h2 className="mb-6 font-[var(--font-display)] text-4xl font-bold leading-tight lg:text-5xl">
                Ready to Re-Vitalise <br />
                <span className="text-[#d9eaa3]">Your Health?</span>
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#b4cdb8]">
                Take the first step toward metabolic precision and sustained vitality. Schedule your comprehensive assessment today.
              </p>
              <div className="flex flex-col justify-center gap-4 md:flex-row">
                <button className="btn-premium btn-premium-primary px-8 py-3 text-[11px]">
                  Begin Your Assessment
                </button>
                <button className="btn-premium btn-premium-ghost inline-flex items-center justify-center gap-2 px-8 py-3 text-[11px]">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
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
