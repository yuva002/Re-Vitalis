"use client";

import Image from "next/image";
import { ArrowRight, LineChart, Droplets, Pill, Database, Dna, UserRound, Network, MessageCircle, Globe, Phone } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/ui/modem-animated-footer";

export default function ProgramsPage() {
  return (
    <div className="bg-[#f7faf8] text-[#181c1c]">
      <NavBar />

      <main>
        <section className="relative h-[calc(100vh-72px)] overflow-hidden bg-gradient-to-r from-[#061b0e] to-[#1b3022]">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmlq1W_ehaI8Vxc-eCAJ057X7S56kvCuJ56g06tG52hVtKa7yC-jIRj6RORDDQvhCCmNl2Nv0VeqBw87ZRUqlRL0mQYVVuYzV_Pqp1jzeTqT_Db6rcDsE1fU0CqvyEwY30ycq4PVaMPHMkn60lheB79zXK9y8kQxIfFozZNUos3QMhrEtvHQ1OZ7jxe-WW1CTu28hSw2JdLTcf0KdDMRd65KSMFD00Jqgdh6wpDdb9TN9K1mqsow6XcyqMxlHELw4orlK-f920Gs1_"
              alt="Programs hero background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#061b0e]/70" />
          </div>
          <div className="container relative z-10 mx-auto grid h-[calc(100vh-72px)] grid-cols-1 items-center px-8 pb-10 pt-24 lg:px-12">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#e9c176]">Precision Medicine</span>
              <h1 className="font-[var(--font-display)] text-4xl leading-[1.08] text-white md:text-6xl lg:text-7xl">Comprehensive Health Programs</h1>
              <p className="mb-7 mt-5 max-w-lg text-base leading-relaxed text-[#819986] md:text-lg">
                Advanced biological intervention designed to restore metabolic equilibrium and enhance cellular function through clinical precision and botanical synergy.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="btn-premium btn-premium-primary px-7 py-3 text-[11px]">View Protocols</button>
                <div className="flex items-center gap-2 text-white/60">
                  <Database className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-widest">Evidence Based</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 translate-x-1/2 -skew-x-12 bg-[#061b0e]/20"></div>
        </section>

        <section className="bg-[#f7faf8] px-12 py-32">
          <div className="mb-20">
            <h2 className="mb-6 font-[var(--font-display)] text-5xl text-[#061b0e]">Our Foundational Pillars</h2>
            <div className="h-1 w-24 bg-[#e9c176]"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
              <button className="btn-premium btn-premium-ghost flex w-fit items-center gap-2 px-4 py-2 text-[10px] tracking-[0.14em] text-[#061b0e]">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
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
              <button className="btn-premium btn-premium-ghost flex w-fit items-center gap-2 px-4 py-2 text-[10px] tracking-[0.14em] text-[#e9c176]">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
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
              <button className="btn-premium btn-premium-ghost flex w-fit items-center gap-2 px-4 py-2 text-[10px] tracking-[0.14em] text-[#061b0e]">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
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
              <button className="btn-premium btn-premium-dark w-full px-8 py-3 text-[11px] md:w-auto">
                Book Consultation
              </button>
              <button className="btn-premium btn-premium-ghost flex w-full items-center justify-center gap-2 px-8 py-3 text-[11px] text-[#181c1c] md:w-auto">
                <MessageCircle className="h-4 w-4" />
                Whatsapp Us
              </button>
            </div>
            <p className="mt-12 text-sm text-[#737973]">Consultations are conducted by licensed clinical practitioners.</p>
          </div>
        </section>
      </main>

      <Footer
        brandName="Re‑Vitalis"
        brandDescription="Precision-led metabolic wellness and personalized therapeutic care."
        tagline="Where Science Meets Transformation"
        linkGroups={[
          {
            heading: "Quick Links",
            links: [
              { label: "Home", href: "/" },
              { label: "About Doctor", href: "/about-doctor" },
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
              { label: "About Doctor", href: "/about-doctor" },
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
