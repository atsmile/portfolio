import type { Metadata } from "next";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import HeroSection from "@components/sections/HeroSection";
import AboutSection from "@components/sections/AboutSection";
import SkillsSection from "@components/sections/SkillsSection";
import WorksSection from "@components/sections/WorksSection";
import type { Work, SkillGroup, Profile, Career, AboutCard } from "@defs/types";

type ApiResponse = {
  works: Work[];
  skillGroups: SkillGroup[];
  profile: Profile;
  profileAnon: Profile;
  careers: Career[];
  aboutCards: AboutCard[];
};

type Props = {
  searchParams: Promise<{ v?: string }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const isPublic = params.v === "full";

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/all`);
  const data: ApiResponse = await res.json();

  const name = isPublic ? data.profile.name : data.profileAnon.name;
  return {
    title: `${name} | Frontend Engineer`,
  };
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const isPublic = params.v === "full";

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/all`);
  const data: ApiResponse = await res.json();

  const currentProfile = isPublic ? data.profile : data.profileAnon;

  return (
    <>
      <Header name={currentProfile.name} isPublic={isPublic} />
      <main className="pt-10">
        <HeroSection profile={currentProfile} />
        <AboutSection
          profile={currentProfile}
          careers={data.careers}
          aboutCards={data.aboutCards}
        />
        <SkillsSection skillGroups={data.skillGroups} />
        <WorksSection isPublic={isPublic} works={data.works} />
      </main>
      <Footer name={currentProfile.name} />
    </>
  );
}
