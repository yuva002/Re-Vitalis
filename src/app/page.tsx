import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HealthPlanSection } from "@/components/HealthPlanSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import PricingCards from "@/components/ui/pricing-component";
import { Footer } from "@/components/ui/modem-animated-footer";
import { Phone, Globe, MessageCircle } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Re-Vitalis Wellness",
    url: "https://www.re-vitalis.in",
    description:
      "Re-Vitalis Wellness combines medical science, advanced therapies, and personalized care to help clients restore energy and achieve long-term vitality.",
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-doctor" },
    { label: "Services", href: "/services/metabolic-programs" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contacts" },
  ];

  const serviceLinks = [
    { label: "Advanced IV Drips", href: "/services/iv-therapy" },
    { label: "Nutraceuticals", href: "/services/nutraceuticals" },
    { label: "Metabolic Recovery Programs", href: "/services/metabolic-programs" },
    { label: "About Us", href: "/about-doctor" },
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* All visible content */}
      <div className="bg-[#F2F3F3]">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <HealthPlanSection />
        <TestimonialsSection />
        <PricingCards />

        <Footer
          brandName="Re-Vitalis"
          brandDescription="Precision-led metabolic wellness and personalized therapeutic care."
          tagline="Where Science Meets Transformation"
          linkGroups={[
            { heading: "Quick Links", links: quickLinks },
            { heading: "Services", links: serviceLinks },
          ]}
          contactItems={contactItems}
        />
      </div>
    </>
  );
}

