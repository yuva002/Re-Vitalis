"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  BarChart3,
  CheckCircle2,
  FileText,
  Globe,
  HeartPulse,
  History,
  MessageCircle,
  Phone,
  Shield,
  Syringe,
  Verified,
} from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/ui/modem-animated-footer";
import needleHero from "../../../../public/needle.jpg";

const vaccinationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Adult Vaccination Programme",
  description:
    "Physician-guided review of vaccination history and risk factors, with scheduling and administration of vaccines in line with current public-health recommendations.",
  procedureType: "https://schema.org/PreventiveProcedure",
  howPerformed:
    "Clinical review of medical history and prior immunizations, individualized planning per current guidelines, vaccine administration in a clinical setting, and documentation with follow-up guidance.",
  provider: {
    "@type": "MedicalBusiness",
    name: "Re-Vitalis Wellness",
    url: "https://www.re-vitalis.in",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.re-vitalis.in" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.re-vitalis.in/services/adult-vaccination",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Adult Vaccination Programme",
      item: "https://www.re-vitalis.in/services/adult-vaccination",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do adults need vaccinations?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Immunity from some vaccines can decrease over time, and risk for certain diseases increases with age or health conditions. Staying up to date with recommended vaccines is part of routine preventive care; your clinician can explain which vaccines apply to you.",
      },
    },
    {
      "@type": "Question",
      name: "Can multiple vaccines be given in one visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Often yes, when medically appropriate. Scheduling depends on official immunization schedules, spacing rules, and your health history. Your physician will plan what is safe and practical for you.",
      },
    },
    {
      "@type": "Question",
      name: "How does vaccination fit into my broader care at Re-Vitalis?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We document your immunization plan alongside your overall wellness goals so prevention stays consistent with the rest of your clinical care.",
      },
    },
  ],
};

export default function AdultVaccinationPage() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-doctor" },
    { label: "Services", href: "/services/metabolic-programs" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contacts" },
  ];

  const serviceLinks = [
    { label: "Advanced IV Drips", href: "/services/iv-therapy" },
    { label: "Nutraceuticals", href: "/services/nutraceuticals" },
    { label: "Metabolic Recovery Programs", href: "/services/metabolic-programs" },
    { label: "Adult Vaccination", href: "/services/adult-vaccination" },
    { label: "About Us", href: "/about-doctor" },
  ];

  const contactItems = [
    {
      icon: <Globe className="h-4 w-4" />,
      label: "www.re-vitalis.in",
      href: "https://www.re-vitalis.in",
    },
    {
      icon: <Phone className="h-4 w-4" />,
      label: "9000179178",
      href: "tel:9000179178",
    },
    {
      icon: <MessageCircle className="h-4 w-4" />,
      label: "WhatsApp: 9000179178",
      href: "https://wa.me/919000179178",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-['Inter'] text-[#191c1e] antialiased selection:bg-[#fed488]/50 selection:text-[#191c1e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vaccinationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <NavBar />

      <main className="pt-28">
        {/* Hero — Stitch layout */}
        <section className="mx-auto max-w-7xl px-8 pb-20 pt-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#775a19]">
                Clinical Excellence
              </span>
              <h1
                className="text-5xl font-extrabold leading-tight tracking-tight text-[#191c1e] md:text-6xl"
                style={{ fontFamily: "var(--font-av-manrope), var(--font-display), ui-serif, Georgia, serif" }}
              >
                Adult Vaccination <br />
                <span className="text-[#7c839b]">Programme</span>
              </h1>
              <p className="max-w-xl text-xl leading-relaxed text-[#45464d]">
                Our adult vaccination programme supports preventive care through a structured clinical review,
                individualized planning aligned with current immunization guidance, and administration in a supervised
                setting.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <a
                  href="https://wa.me/919000179178"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-black to-[#131b2e] px-8 py-4 text-sm font-bold tracking-tight text-white shadow-lg transition-all hover:shadow-xl"
                  style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}
                >
                  Start assessment
                </a>
                <div className="flex items-center gap-2 text-[#45464d]">
                  <Verified className="h-5 w-5 shrink-0 text-[#775a19]" aria-hidden />
                  <span className="font-medium">Clinician-led planning</span>
                </div>
              </div>
            </div>
            <div className="relative w-full min-w-0">
              <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={needleHero}
                  alt="Gloved hand holding a medical syringe for vaccination"
                  className="h-auto w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) min(50vw, 640px), 100vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden max-w-xs rounded-xl bg-white p-8 shadow-lg md:block">
                <p
                  className="mb-2 text-lg font-bold text-black"
                  style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}
                >
                  Immune readiness
                </p>
                <p className="text-sm leading-relaxed text-[#45464d]">
                  Recommendations are tailored to your history, age, and health status—not a one-size schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bento — The Preventive Core */}
        <section id="programmes" className="bg-[#f2f4f6] px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 space-y-4 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#775a19]">
                The preventive core
              </span>
              <h2
                className="text-4xl font-bold text-[#191c1e]"
                style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}
              >
                Essential protection layers
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-[#45464d]">
                Categories commonly discussed in adult immunization planning; specific vaccines depend on official
                schedules, your record, and medical eligibility.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex h-80 flex-col justify-between rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <Shield className="mb-4 h-10 w-10 text-[#775a19]" strokeWidth={1.5} />
                  <h3 className="mb-3 text-2xl font-bold" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
                    Respiratory defence
                  </h3>
                  <p className="text-sm leading-relaxed text-[#45464d]">
                    Planning may include seasonal influenza, pneumococcal vaccines when indicated, and COVID-19 doses per
                    current public-health recommendations.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-[#c6c6cd]/40 pt-6">
                  <span className="text-xs font-bold uppercase tracking-tighter text-[#775a19]">Guideline-based</span>
                  <CheckCircle2 className="h-5 w-5 text-[#775a19]" aria-hidden />
                </div>
              </div>

              <div className="flex h-80 flex-col justify-between rounded-xl bg-[#fed488] p-8 shadow-sm">
                <div>
                  <HeartPulse className="mb-4 h-10 w-10 text-[#785a1a]" strokeWidth={1.5} />
                  <h3 className="mb-3 text-2xl font-bold text-[#785a1a]" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
                    Lifecycle protection
                  </h3>
                  <p className="text-sm leading-relaxed text-[#785a1a]/90">
                    Examples include Tdap boosters on a recommended interval and herpes zoster (shingles) vaccination
                    when age- and risk-appropriate.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-[#785a1a]/20 pt-6">
                  <span className="text-xs font-bold uppercase tracking-tighter text-[#785a1a]">Often 50+</span>
                  <Verified className="h-5 w-5 text-[#785a1a]" aria-hidden />
                </div>
              </div>

              <div className="flex h-80 flex-col justify-between rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <Globe className="mb-4 h-10 w-10 text-[#775a19]" strokeWidth={1.5} />
                  <h3 className="mb-3 text-2xl font-bold" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
                    Travel & exposure
                  </h3>
                  <p className="text-sm leading-relaxed text-[#45464d]">
                    Hepatitis A/B and other travel-related vaccines may be discussed when your itinerary or occupational
                    risk warrants them.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-[#c6c6cd]/40 pt-6">
                  <span className="text-xs font-bold uppercase tracking-tighter text-[#775a19]">Risk-based</span>
                  <CheckCircle2 className="h-5 w-5 text-[#775a19]" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical process */}
        <section id="clinical-process" className="mx-auto max-w-5xl px-8 py-24">
          <div className="flex flex-col items-start gap-12 md:flex-row">
            <div className="md:sticky md:top-32 md:w-1/3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#775a19]">The protocol</span>
              <h2
                className="mt-4 text-4xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}
              >
                Clinical curator process
              </h2>
              <p className="mt-6 leading-relaxed text-[#45464d]">
                A structured path from records to follow-up—so your immunization plan stays clear, documented, and
                coordinated with the rest of your care.
              </p>
            </div>
            <div className="md:w-2/3 md:space-y-12">
              {[
                {
                  n: "01",
                  icon: History,
                  title: "Record synthesis",
                  body: "Review of available vaccination history and relevant medical records to identify gaps and contraindications.",
                },
                {
                  n: "02",
                  icon: BarChart3,
                  title: "Risk assessment",
                  body: "Discussion of age, chronic conditions, occupation, travel, and household context that influence vaccine choice.",
                },
                {
                  n: "03",
                  icon: FileText,
                  title: "Curated recommendation",
                  body: "A written plan for which vaccines to schedule, in what order, consistent with current official guidance.",
                  highlight: true,
                },
                {
                  n: "04",
                  icon: Syringe,
                  title: "Clinical administration",
                  body: "Vaccines given in a clinical setting with observation per standard practice.",
                },
                {
                  n: "05",
                  icon: Activity,
                  title: "Documentation & follow-up",
                  body: "Updated records, reminders for future doses, and alignment with your ongoing wellness visits at Re-Vitalis.",
                },
              ].map((step, i, arr) => (
                <div key={step.n} className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                    {step.n}
                  </div>
                  {i < arr.length - 1 ? (
                    <div className="absolute bottom-[-3rem] left-4 top-8 w-px bg-[#c6c6cd]/50" aria-hidden />
                  ) : null}
                  <div
                    className={`rounded-xl p-6 ${step.highlight ? "border-l-4 border-[#775a19] shadow-lg" : "bg-[#f2f4f6]"}`}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <step.icon className="h-5 w-5 text-[#775a19]" strokeWidth={1.5} />
                      <h4 className="text-lg font-bold" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-[#45464d]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personalization — Stitch dark band; mock panel = illustrative only */}
        <section id="risk-assessment" className="overflow-hidden bg-black py-24 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#ffdea5]">
                Personalization
              </span>
              <h2 className="mb-8 text-4xl font-bold" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
                Factors we consider
              </h2>
              <div className="space-y-4">
                {[
                  ["Age-related risk", "Schedule-appropriate options"],
                  ["Chronic conditions", "Eligibility & timing"],
                  ["Occupational exposure", "Indication review"],
                  ["Travel", "Destination-based needs"],
                  ["Lifestyle context", "Aligned with your goals"],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    className="grid grid-cols-2 border-b border-white/15 py-4 last:border-0"
                  >
                    <span className="font-bold text-[#ffdea5]" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
                      {a}
                    </span>
                    <span className="text-right text-[#7c839b]">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-[#131b2e] p-10 shadow-2xl">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <p className="font-bold" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
                    Care summary preview
                  </p>
                  <span className="text-xs font-bold tracking-widest text-[#ffdea5]">ILLUSTRATIVE</span>
                </div>
                <p className="mb-8 text-xs text-[#7c839b]">
                  Example layout only—not a patient report or real-time clinical output.
                </p>
                <div className="space-y-8">
                  {[
                    { label: "Record completeness", width: "w-[72%]" },
                    { label: "Up-to-date doses", width: "w-[58%]" },
                    { label: "Follow-up clarity", width: "w-[85%]" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="font-bold uppercase text-[#7c839b]">{row.label}</span>
                        <span className="font-bold text-white">—</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full border border-[#775a19]/30 bg-gradient-to-r from-black to-[#131b2e] ${row.width}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex gap-4 border-t border-white/10 pt-8">
                  <div className="flex-1 text-center">
                    <p className="text-2xl font-extrabold text-[#ffdea5]">—</p>
                    <p className="mt-1 text-[10px] uppercase text-[#7c839b]">Status</p>
                  </div>
                  <div className="flex-1 border-x border-white/10 text-center">
                    <p className="text-2xl font-extrabold text-white">—</p>
                    <p className="mt-1 text-[10px] uppercase text-[#7c839b]">Planned</p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-2xl font-extrabold text-white">—</p>
                    <p className="mt-1 text-[10px] uppercase text-[#7c839b]">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — Stitch accordion style */}
        <section id="faq" className="mx-auto max-w-3xl px-8 py-24">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#775a19]">Clarity</span>
            <h2 className="mt-4 text-4xl font-bold text-[#191c1e]" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
              Common enquiries
            </h2>
          </div>
          <div className="space-y-4">
            <details className="group overflow-hidden rounded-xl bg-[#f2f4f6]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-bold" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
                  Why do adults need vaccinations?
                </span>
                <span className="text-[#45464d] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#45464d]">
                Immunity from some vaccines can wane, and risk for certain infections changes with age and health status.
                Staying current with recommended vaccines is part of routine preventive care; your clinician will explain
                what applies to you.
              </div>
            </details>
            <details className="group overflow-hidden rounded-xl bg-[#f2f4f6]" open>
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-bold" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
                  Are multiple vaccines safe at one visit?
                </span>
                <span className="text-[#45464d] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#45464d]">
                Combining vaccines is often appropriate when schedules and your medical history support it. Your
                physician will plan timing and spacing to match official guidance and your individual situation.
              </div>
            </details>
            <details className="group overflow-hidden rounded-xl bg-[#f2f4f6]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-bold" style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}>
                  How is this integrated with my wellness plan?
                </span>
                <span className="text-[#45464d] transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#45464d]">
                Immunization documentation and next steps are coordinated with your broader visits at Re-Vitalis so
                prevention stays consistent with your overall care plan.
              </div>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 pb-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-black to-[#131b2e] p-12 md:p-24">
            <div className="relative z-10 mx-auto max-w-2xl space-y-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Activity className="h-4 w-4 text-[#ffdea5]" aria-hidden />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Clinical note</span>
              </div>
              <h2
                className="text-4xl font-extrabold leading-tight text-white md:text-5xl"
                style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}
              >
                Plan your preventive immunization review
              </h2>
              <p className="text-lg text-[#7c839b]">
                Book a consultation to review your history and discuss which vaccines may be appropriate for you under
                current guidelines.
              </p>
              <div className="flex flex-col justify-center gap-4 md:flex-row">
                <a
                  href="https://wa.me/919000179178"
                  className="rounded-lg bg-white px-10 py-5 text-lg font-extrabold text-black transition-colors hover:bg-[#ffdea5]"
                  style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}
                >
                  Book a consultation
                </a>
                <Link
                  href="tel:9000179178"
                  className="rounded-lg border border-white/20 px-10 py-5 text-lg font-extrabold text-white transition-colors hover:bg-white/5"
                  style={{ fontFamily: "var(--font-av-manrope), sans-serif" }}
                >
                  Call the clinic
                </Link>
              </div>
            </div>
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "url(https://www.transparenttextures.com/patterns/carbon-fibre.png)",
              }}
            />
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
