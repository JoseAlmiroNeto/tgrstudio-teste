import { FooterMain } from "@/components/layout/footerMain";
import { VideoSection } from "@/components/layout/VideoSection";
import { AboutSection } from "@/components/layout/AboutSection";
import { CarouselSection } from "@/components/layout/CarouselSection";
import { ContactSection } from "@/components/layout/ContactSection";
import { PrisingSection } from "@/components/layout/PrisingSection";
import { ServicesSection } from "@/components/layout/ServicesSection";
import { WelcomeSection } from "@/components/layout/WelcomeSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full leading-relaxed">
      <WelcomeSection />
      <ServicesSection />
      <CarouselSection />
      <AboutSection />
      <VideoSection />
      <PrisingSection />
      <ContactSection />
      <FooterMain />
    </main>
  );
}
