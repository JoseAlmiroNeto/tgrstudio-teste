import { ServicesSection } from "@/components/sections/servicesSection";
import { WelcomeSection } from "../components/sections/welcomeSection";
import { CarouselSection } from "@/components/sections/carouselSection";
import { AboutSection } from "@/components/sections/aboutSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { PrisingSection } from "@/components/sections/prisingSection";
import { ContactSection } from "@/components/sections/contactSection";
import { FooterMain } from "@/components/layout/footerMain";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <WelcomeSection />
      <ServicesSection />
      <CarouselSection id="works" />
      <AboutSection id="about" />
      <VideoSection id="video"/>
      <PrisingSection id="price" />
      <ContactSection id="contact" />
      <FooterMain />
    </main>
  );
}
