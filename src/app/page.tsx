import type { Metadata } from "next";
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

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const isPublic = params.v === "full";
  const name = isPublic ? profile.name : profileAnon.name;
  return {
    title: `${name} | Frontend Engineer`,
  };
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const isPublic = params.v === "full";

  const currentProfile = isPublic ? profile : profileAnon;
  const currentCareers = isPublic ? careers : careersAnon;

  return (
    <>
      <Header name={currentProfile.name} />
      <main className="pt-10">
        <HeroSection profile={currentProfile} />
        <AboutSection profile={currentProfile} careers={currentCareers} />
        <SkillsSection />
        <WorksSection isPublic={isPublic} />
      </main>
      <Footer name={currentProfile.name} />
    </>
  );
}
