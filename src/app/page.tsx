import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CrisisSection } from "@/components/CrisisSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ApproachSection } from "@/components/ApproachSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { WaveDivider } from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WaveDivider fillColor="#ffffff" variant="gentle" />
      <AboutSection />
      <WaveDivider fillColor="#F5F0E8" variant="flowing" />
      <CrisisSection />
      <WaveDivider fillColor="#ffffff" variant="breath" />
      <ServicesSection />
      <WaveDivider fillColor="#EAF0E6" variant="gentle" />
      <ApproachSection />
      <WaveDivider fillColor="#ffffff" variant="flowing" />
      <TestimonialsSection />
      <WaveDivider fillColor="#F5F0E8" variant="breath" />
      <ContactSection />
    </>
  );
}
