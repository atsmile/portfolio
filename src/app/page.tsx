import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import HeroSection from "@components/sections/HeroSection";
import AboutSection from "@components/sections/AboutSection";
import SkillsSection from "@components/sections/SkillsSection";
import WorksSection from "@components/sections/WorksSection";
import { profile, profileAnon, careers, careersAnon } from "@data/profile";

type Props = {
  searchParams: Promise<{ v?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const isPublic = params.v === "full";

  const currentProfile = isPublic ? profile : profileAnon;
  const currentCareers = isPublic ? careers : careersAnon;

  return (
    <>
      <Header name={currentProfile.name} />
      <main className="pt-24">
        <HeroSection profile={currentProfile} />
        <AboutSection profile={currentProfile} careers={currentCareers} />
        <SkillsSection />
        <WorksSection />
      </main>
      <Footer />
    </>
  );
}
