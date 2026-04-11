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
      <WaveDivider fillColor="var(--color-white)" variant="gentle" />
      <AboutSection />
      <WaveDivider fillColor="var(--color-cream)" variant="flowing" />
      <CrisisSection />
      <WaveDivider fillColor="var(--color-white)" variant="breath" />
      <ServicesSection />
      <WaveDivider fillColor="#f2f5f0" variant="gentle" />
      <ApproachSection />
      <WaveDivider fillColor="var(--color-white)" variant="flowing" />
      <TestimonialsSection />
      <WaveDivider fillColor="var(--color-cream)" variant="breath" />
      <ContactSection />
    </>
  );
}
