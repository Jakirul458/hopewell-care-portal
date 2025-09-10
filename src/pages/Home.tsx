import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import ProjectsOverview from "@/components/Home/ProjectsOverview";
import ContactSection from "@/components/Home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsOverview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}