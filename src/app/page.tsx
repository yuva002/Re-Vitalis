import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { Phone, Globe, MessageCircle, Mail } from "lucide-react";

// Below-fold sections: dynamically imported with loading placeholder
const AboutSection = dynamic(
  () => import("@/components/AboutSection").then((m) => ({ default: m.AboutSection })),
  { loading: () => <div className="h-screen" /> }
);
const ServicesSection = dynamic(
  () => import("@/components/ServicesSection").then((m) => ({ default: m.ServicesSection })),
  { loading: () => <div className="h-screen" /> }
);
const HealthPlanSection = dynamic(
  () => import("@/components/HealthPlanSection").then((m) => ({ default: m.HealthPlanSection })),
  { loading: () => <div className="h-[300vh]" /> }
);
const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection })),
  { loading: () => <div className="h-screen" /> }
);
const PricingCards = dynamic(() => import("@/components/ui/pricing-component"), {
  loading: () => <div className="h-screen" />
});
const FAQSection = dynamic(
  () => import("@/components/FAQSection").then((m) => ({ default: m.FAQSection })),
  { loading: () => <div className="h-96" /> }
);
const Footer = dynamic(
  () => import("@/components/ui/modem-animated-footer").then((m) => ({ default: m.Footer })),
  { loading: () => <div className="h-96" /> }
);

const homepageFaqs = [
  {
    question: "What is Re-Vitalis Wellness?",
    answer:
      "Re-Vitalis Wellness is a precision-led wellness clinic that combines medical science, advanced therapies, and personalized care. We specialize in IV therapy, clinical nutraceuticals, and metabolic recovery programs — each designed around your unique biomarker profile to restore energy and long-term vitality.",
  },
  {
    question: "What services does Re-Vitalis offer?",
    answer:
      "Re-Vitalis offers three core services: Advanced IV Drip Therapy (targeted nutrient infusions for up to 100% bioavailability), Clinical Nutraceuticals (evidence-based supplement protocols personalized to your biomarkers), and Metabolic Recovery Programs (comprehensive programs combining testing, IV therapy, and nutrition coaching).",
  },
  {
    question: "How is Re-Vitalis different from a conventional clinic?",
    answer:
      "Unlike conventional clinics that treat symptoms, Re-Vitalis uses a root-cause, biomarker-driven approach. Every protocol is built around your individual lab results, lifestyle data, and health goals — not a one-size-fits-all prescription. We combine functional medicine, precision nutrition, and advanced therapeutic modalities under one roof.",
  },
  {
    question: "Who is the ideal patient for Re-Vitalis?",
    answer:
      "Re-Vitalis is ideal for individuals experiencing chronic fatigue, metabolic dysfunction, hormonal imbalance, cognitive fog, or unexplained weight changes — and for high-performers seeking to optimize health, energy, and longevity. We work with adults of all ages who value science-led, personalized wellness care.",
  },
  {
    question: "How do I book a consultation at Re-Vitalis?",
    answer:
      "You can book a consultation by calling or WhatsApp-messaging +91 9000179178, or by visiting www.re-vitalis.in. Our team will schedule an initial assessment where we review your health history and discuss the best program for your goals.",
  },
];

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": "https://www.re-vitalis.in/#organization",
      name: "Re-Vitalis Wellness",
      url: "https://www.re-vitalis.in",
      logo: "https://www.re-vitalis.in/logo.png",
      description:
        "Re-Vitalis Wellness is a precision-led wellness clinic offering IV therapy, clinical nutraceuticals, and metabolic recovery programs tailored to each patient's unique biomarker profile.",
      telephone: "+919000179178",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+919000179178",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: ["https://wa.me/919000179178"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.re-vitalis.in/#website",
      url: "https://www.re-vitalis.in",
      name: "Re-Vitalis Wellness",
      publisher: { "@id": "https://www.re-vitalis.in/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.re-vitalis.in/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-doctor" },
    { label: "Services", href: "/services/metabolic-programs" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Single jewel surface spanning the entire page — one gradient, zero seams */}
      <div className="home-jewel-surface home-jewel-grain relative min-h-full overflow-x-clip text-[#F0ECE4]">
        <Hero />
        <div className="relative z-[1]">
          <AboutSection />
          <ServicesSection />
          <HealthPlanSection />
          <TestimonialsSection />
          <PricingCards variant="jewel" />
          <FAQSection
            faqs={homepageFaqs}
            theme="dark"
            heading="Frequently Asked Questions"
          />
        </div>
        <Footer
            brandName="Re-Vitalis"
            brandDescription="Precision-led metabolic wellness and personalized therapeutic care."
            tagline="Where Science Meets Transformation"
            linkGroups={[
              { heading: "Quick Links", links: quickLinks },
              { heading: "Services", links: serviceLinks },
            ]}
            contactItems={contactItems}
            className="relative z-[1]"
          />
      </div>
    </>
  );
}

