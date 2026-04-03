"use client"

import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/ui/modem-animated-footer"
import { NavBar } from "@/components/NavBar"
import {
  Globe,
  Mail,
  MessageCircle,
  Phone,
  ArrowRight,
  Bolt,
  Eye,
  Compass,
  ShieldCheck,
  Rocket,
  GraduationCap,
  BarChart3,
} from "lucide-react"
import { FAQSection } from "@/components/FAQSection"

const careersFaqs = [
  {
    question: "What roles is Re-Vitalis currently hiring for?",
    answer:
      "Re-Vitalis hires across clinical and administrative functions, including roles in precision medicine, functional health coaching, IV therapy administration, clinical nutrition, patient coordination, and digital marketing. Current openings are listed on our careers page. We also accept speculative applications from qualified candidates who align with our values.",
  },
  {
    question: "What qualifications are required to join Re-Vitalis?",
    answer:
      "Qualifications vary by role. Clinical positions require relevant medical or health science credentials and registration with applicable regulatory bodies. Non-clinical roles require relevant educational backgrounds and professional experience. All team members must demonstrate alignment with Re-Vitalis's commitment to precision, evidence-based care, and premium patient experience.",
  },
  {
    question: "How do I apply for a position at Re-Vitalis?",
    answer:
      "You can apply by emailing your resume and a brief cover letter to our team at +91 9000179178 (WhatsApp) or through the application links on our careers page. We review applications on a rolling basis and respond to qualified candidates within 5–7 business days.",
  },
  {
    question: "What is the work culture like at Re-Vitalis?",
    answer:
      "Re-Vitalis fosters a culture of scientific curiosity, clinical excellence, and genuine patient care. We are a small, high-performing team that values continuous learning, collaboration, and integrity. Every team member is encouraged to contribute ideas, deepen their expertise, and grow alongside the clinic's mission.",
  },
  {
    question: "Does Re-Vitalis offer internships or fellowships?",
    answer:
      "Re-Vitalis periodically accepts clinical interns and fellows from accredited medical, nutrition, and health science programs. These are structured rotations with mentorship from our physician and clinical team. If you are interested in an internship or fellowship, reach out to us via WhatsApp at +91 9000179178 with your academic credentials and availability.",
  },
]

const careersSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Re-Vitalis Wellness",
  url: "https://www.re-vitalis.in",
  description:
    "Re-Vitalis Wellness is a precision-led wellness clinic hiring clinical and administrative professionals passionate about advancing health through science-led, personalized care.",
  telephone: "+919000179178",
  sameAs: ["https://wa.me/919000179178"],
}

export default function CareersPage() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-doctor" },
    { label: "Services", href: "/services/metabolic-programs" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "#contacts" },
  ]

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
  ]

  const values = [
    {
      icon: ShieldCheck,
      title: "Structural Integrity",
      body: "We build systems that last. Every decision is measured for long-term impact and ethical robustness.",
    },
    {
      icon: Compass,
      title: "Precision First",
      body: "In high-stakes care there is no room for approximation. We execute with clinical and operational precision.",
    },
    {
      icon: Eye,
      title: "Radical Clarity",
      body: "Transparency is our baseline. Patients and teams receive clear, measurable, decision-ready insights.",
    },
    {
      icon: Bolt,
      title: "Dynamic Impact",
      body: "We move quickly where it matters and thoughtfully where depth is required.",
    },
  ]

  const positions = [
    {
      place: "Hyderabad / On-site",
      type: "Full Time",
      title: "Clinical Nutrition Specialist",
      posted: "2 days ago",
    },
    {
      place: "Hyderabad / On-site",
      type: "Full Time",
      title: "Patient Experience Coordinator",
      posted: "5 days ago",
    },
    {
      place: "Hybrid",
      type: "Full Time",
      title: "Performance Marketing Lead",
      posted: "1 week ago",
    },
  ]

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#0c0b09] text-[#F0ECE4] flex flex-col"
      style={{
        // NavBar uses Tailwind `text-ink` etc; override ink for dark background.
        ["--ink" as any]: "#F0ECE4",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
      />
      <NavBar />

      <main className="flex-1">
        <section className="relative h-[100svh] overflow-hidden bg-[#0c0b09] px-6 pt-24 pb-10 sm:px-8">
          <div className="absolute inset-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeeyCG9depTviyfOqITtFgVWAS-tlRenn7eISVW8akh1pmZWgK6s-A9q0c7Nr4z0UdcznuTlcf5MM6VjfcMnLrz8aM0FCctZDTTDrVNTV5leX-10t1VQ60drBSfd1BGrRHeq-nbemMlD08Lt4QzDWQA6aITri_oHkCAl80iSe_6uJebIoTJSnnhKRzY7kbzcx0p_x0t3ihOPG7U7cf5VUbHWG8KS3TW0PbCtKZU_wvZbqnAnkk7xC-yNsmPZXM5FdwP1LdeQfF-g-k"
              alt="Careers hero background"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b09] via-[#0c0b09]/82 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto grid h-full w-full max-w-screen-2xl items-center">
            <div className="max-w-3xl text-center md:text-left">
              <span className="mb-5 inline-flex items-center rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/10 px-4 py-1 text-[10px] uppercase tracking-[0.24em] text-[#C8A96E]">
                Careers at Re-Vitalis
              </span>
              <h1 className="font-[var(--font-display)] text-5xl leading-[0.95] text-[#F0ECE4] sm:text-6xl md:text-7xl">
                Shape the Future of Precision Wellness
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#C2BDB5] sm:text-lg">
                Join a high-performing team of clinicians, strategists, and operators building measurable
                health outcomes through science-led care.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="#open-positions"
                  className="btn-premium btn-premium-primary inline-flex px-8 py-3 text-[11px]"
                >
                  Explore Roles
                </a>
                <a
                  href="#our-dna"
                  className="btn-premium btn-premium-ghost inline-flex px-8 py-3 text-[11px]"
                >
                  Our Culture
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="our-dna" className="bg-[#0c0b09] px-6 py-24 sm:px-8">
          <div className="mx-auto max-w-screen-2xl">
            <h2 className="font-[var(--font-display)] text-4xl text-[#F0ECE4] sm:text-5xl">Our DNA</h2>
            <p className="mt-4 max-w-3xl text-[#C2BDB5]">
              The principles that shape how we practice, collaborate, and lead.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-[#3A352D]/60 bg-[#15110d] p-8 transition-colors hover:border-[#C8A96E]/40"
                  >
                    <Icon className="h-8 w-8 text-[#C8A96E]" />
                    <h3 className="mt-6 text-2xl font-semibold text-[#F0ECE4]">{value.title}</h3>
                    <p className="mt-3 leading-relaxed text-[#C2BDB5]">{value.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#070605] px-6 py-24 sm:px-8">
          <div className="mx-auto max-w-screen-2xl">
            <div className="mb-14 text-center">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#C8A96E]">The Foundation</p>
              <h2 className="mt-4 font-[var(--font-display)] text-4xl text-[#F0ECE4] sm:text-5xl">
                Why You Will Thrive Here
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2">
              <div className="relative overflow-hidden rounded-2xl border border-[#3A352D]/60 bg-[#1A1712] p-8 md:col-span-2 md:row-span-2">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkx-FxoAHEZ0byTKIr0RtrJD9ji-HqOlZQvc0vrjPYjcSGLhROC1Rw282oxfyl3VprmmQ5pU2DGBV9MzxdvXRgIkI9uyK4QaEWlxqdJ2LWCWfNrnNoJkCi68pcB0diKWe_XEOOCqeXYWIDoVhRqQafmIBUUng3meymWPldtQcefgVPCaD5UMxfj8kyG7QNn-5h8An89BfPLONRAvAOBxf-T9MfZAdHbLkdoCrvwc3IYPFYyVbWU-tPa1cPNltDjH6Q-1HxHGO6ix3R"
                  alt="Wellness clinic interiors"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-20"
                />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <h3 className="text-3xl font-semibold text-[#F0ECE4]">Total Wellness Ecosystem</h3>
                  <p className="mt-4 max-w-md text-[#C2BDB5]">
                    End-to-end support across clinical protocols, coaching, and patient outcome tracking.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#3A352D]/60 bg-[#1A1712] p-6">
                <BarChart3 className="h-7 w-7 text-[#C8A96E]" />
                <h3 className="mt-5 text-xl font-semibold text-[#F0ECE4]">Equity & Growth</h3>
                <p className="mt-2 text-sm text-[#C2BDB5]">Performance-linked growth tracks and merit-based advancement.</p>
              </div>
              <div className="rounded-2xl border border-[#3A352D]/60 bg-[#1A1712] p-6">
                <Rocket className="h-7 w-7 text-[#C8A96E]" />
                <h3 className="mt-5 text-xl font-semibold text-[#F0ECE4]">Dynamic Teams</h3>
                <p className="mt-2 text-sm text-[#C2BDB5]">Cross-functional pods that move fast with clear accountability.</p>
              </div>
              <div className="rounded-2xl border border-[#3A352D]/60 bg-[#1A1712] p-6">
                <GraduationCap className="h-7 w-7 text-[#C8A96E]" />
                <h3 className="mt-5 text-xl font-semibold text-[#F0ECE4]">Continuous Learning</h3>
                <p className="mt-2 text-sm text-[#C2BDB5]">Clinical upskilling, workshops, and applied training programs.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="open-positions" className="bg-[#0c0b09] px-6 py-24 sm:px-8">
          <div className="mx-auto max-w-screen-2xl">
            <h2 className="font-[var(--font-display)] text-4xl text-[#F0ECE4] sm:text-5xl">Open Positions</h2>
            <p className="mt-4 text-[#C2BDB5]">Find your next role at Re-Vitalis.</p>
            <div className="mt-10 space-y-4">
              {positions.map((position) => (
                <article
                  key={position.title}
                  className="flex flex-col items-start gap-4 rounded-2xl border border-[#3A352D]/60 bg-[#15110d] p-6 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[#C8A96E]">
                      {position.place} • {position.type}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#F0ECE4]">{position.title}</h3>
                  </div>
                  <div className="flex items-center gap-5">
                    <p className="text-sm text-[#C2BDB5]">Posted {position.posted}</p>
                    <a
                      href="mailto:careers@re-vitalis.in?subject=Application%20for%20Role"
                      className="inline-flex items-center gap-2 rounded-full border border-[#C8A96E]/40 px-5 py-2 text-xs tracking-[0.12em] text-[#F0ECE4] transition-colors hover:bg-[#C8A96E]/10"
                    >
                      View Role <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#070605] px-6 py-20 sm:px-8">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 rounded-3xl border border-[#3A352D]/60 bg-[#15110d] p-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#C8A96E]">Next Steps</p>
              <h2 className="mt-4 font-[var(--font-display)] text-4xl text-[#F0ECE4]">Apply with confidence</h2>
              <p className="mt-4 max-w-2xl text-[#C2BDB5]">
                Email your resume and a short profile summary. Mention <span className="text-[#C8A96E]">Re-Vitalis Careers</span> in your subject line for priority routing.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:careers@re-vitalis.in?subject=Re-Vitalis%20Careers%20Application"
                  className="btn-premium btn-premium-primary inline-flex px-8 py-3 text-[11px]"
                >
                  Email Your Resume
                </a>
                <Link href="#open-positions" className="btn-premium btn-premium-ghost inline-flex px-8 py-3 text-[11px]">
                  Explore Open Roles
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#3A352D]/60 bg-[#1A1712] p-7">
                <h3 className="text-2xl font-semibold text-[#F0ECE4]">Mentions</h3>
                <p className="mt-3 text-[#C2BDB5]">Trusted by teams focused on precision and measurable outcomes.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Leadership", "Precision Ops", "C-Suite", "Global Delivery"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-[#3A352D]/60 bg-[#15110d] px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-[#C2BDB5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FAQSection
        faqs={careersFaqs}
        theme="dark"
        heading="Working at Re-Vitalis — Common Questions"
      />

      <Footer
        brandName="Re-Vitalis"
        brandDescription="Precision-led metabolic wellness and personalized therapeutic care."
        tagline="Where Science Meets Transformation"
        linkGroups={[{ heading: "Quick Links", links: quickLinks }]}
        contactItems={contactItems}
        className="shrink-0"
      />
    </div>
  )
}

