import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { ProjectsSection } from "@/sections/Projects";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div id="main" className="overflow-x-clip bg-[#fdf9f2] min-h-screen">
      <Header />
      <HeroSection />
      <TapeSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
