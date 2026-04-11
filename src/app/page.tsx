import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CrisisSection } from "@/components/CrisisSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ApproachSection } from "@/components/ApproachSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CrisisSection />
      <ServicesSection />
      <ApproachSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
