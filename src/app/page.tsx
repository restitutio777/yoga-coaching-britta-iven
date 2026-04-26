import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CrisisSection } from "@/components/CrisisSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ApproachSection } from "@/components/ApproachSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { SectionTransition } from "@/components/SectionTransition";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionTransition from="#FFF7E8" to="#ffffff" height="sm" />
      <AboutSection />
      <SectionTransition from="#ffffff" to="#FAF8F4" />
      <CrisisSection />
      <SectionTransition from="#FAF8F4" to="#ffffff" />
      <ServicesSection />
      <SectionTransition from="#ffffff" to="#F5F7F3" />
      <ApproachSection />
      <SectionTransition from="#F5F7F3" to="#ffffff" />
      <TestimonialsSection />
      <SectionTransition from="#ffffff" to="#FAF8F4" height="sm" />
      <ContactSection />
    </>
  );
}
