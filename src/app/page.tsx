import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HealthPlanSection } from "@/components/HealthPlanSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Re-Vitalis Wellness",
    url: "https://example.com/",
    description:
      "Re-Vitalis Wellness combines medical science, advanced therapies, and personalized care to help clients restore energy and achieve long-term vitality.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <HealthPlanSection />
      <TestimonialsSection />

      {/* Minimal sections scaffold (keeps lighthouse/SEO structure healthy) */}
      <main className="mx-auto w-full max-w-[1160px] px-6 py-16">
        <section id="contacts" className="py-16">
          <h2 className="text-[12px] font-[560] tracking-[0.22em] text-slate">
            CONTACTS
          </h2>
          <div className="mt-8 rounded-[22px] border border-border bg-surface p-8">
            <p className="text-[18px] font-[560] text-ink">Get in touch</p>
            <p className="mt-2 text-[13px] leading-[1.75] text-slate">
              Email: hello@re-vitalis.example · Phone: +34 7 91 00 00
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
