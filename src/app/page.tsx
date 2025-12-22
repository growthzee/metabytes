"use client";

import { Header } from "@/components/header";

import { BenefitsSection } from "@/components/benefits-section";
import { FeaturesSection } from "@/components/features-section";

import { ApproachSection } from "@/components/approach-section";
import { CaseStudiesSection } from "@/components/case-studies-section";

import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { Background } from "@/components/background";
import { Hero as FluxHero } from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { GlobalPartners } from "@/components/GlobalPartners";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Background />
      <Header />
      <FluxHero />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <ApproachSection />
      <GlobalPartners />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
