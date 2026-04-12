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
      <WaveDivider fillColor="#ffffff" fromColor="#FFF7E8" variant="gentle" />
      <AboutSection />
      <WaveDivider fillColor="#FAF8F4" fromColor="#ffffff" variant="flowing" />
      <CrisisSection />
      <WaveDivider fillColor="#ffffff" fromColor="#FAF8F4" variant="breath" />
      <ServicesSection />
      <WaveDivider fillColor="#F5F7F3" fromColor="#ffffff" variant="gentle" />
      <ApproachSection />
      <WaveDivider fillColor="#ffffff" fromColor="#F5F7F3" variant="flowing" />
      <TestimonialsSection />
      <WaveDivider fillColor="#FAF8F4" fromColor="#ffffff" variant="breath" />
      <ContactSection />
    </>
  );
}
