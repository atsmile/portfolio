import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import HeroSection from "@components/sections/HeroSection";
import AboutSection from "@components/sections/AboutSection";
import SkillsSection from "@components/sections/SkillsSection";
import WorksSection from "@components/sections/WorksSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
      </main>
      <Footer />
    </>
  );
}
