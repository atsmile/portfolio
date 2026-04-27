"use client";

import { useInView } from "@hooks/useInView";
import SectionTitle from "@components/ui/SectionTitle";
import FadeInItem from "@components/ui/FadeInItem";

type Profile = {
  name: string;
  role: string;
  roleJa: string;
  location: string;
  bio: string;
  experience: string;
  hobby: string;
  now: string;
};

type Career = {
  period: string;
  title: string;
  description: string;
  isCurrent?: boolean;
};

type Props = {
  profile: Profile;
  careers: Career[];
};

export default function AboutSection({ profile, careers }: Props) {
  const { ref, isInView } = useInView();

  const cards = [
    {
      title: "Profile",
      body: `${profile.location}のフロントエンドエンジニア。\n${profile.hobby}`,
    },
    {
      title: "Experience",
      body: `${profile.experience}。\nテストエンジニア出身で品質への意識が強みです。`,
    },
    {
      title: "Specialty",
      body: "React / Next.js を中心にフロントエンドの実装を担当。\nバックエンドも多少触れます。",
    },
    {
      title: "Now",
      body: profile.now,
    },
  ];

  return (
    <section
      data-layout="AboutSection"
      id="about"
      className={`py-20 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto w-full px-6">
        <SectionTitle eyebrow="About" title="私について" />

        {/* プロフィールカード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {cards.map((card, index) => (
            <FadeInItem
              key={card.title}
              className="bg-white rounded-xl p-5 border border-green-200"
              delay={index * 100}
              isInView={isInView}
            >
              <p className="text-xs font-medium text-green-600 mb-1.5">
                {card.title}
              </p>
              <p className="text-sm text-[#555] leading-relaxed whitespace-pre-line">
                {card.body}
              </p>
            </FadeInItem>
          ))}
        </div>

        {/* キャリア */}
        <p className="text-xs font-medium text-gray-600 uppercase tracking-widest mb-3">
          Career
        </p>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          {careers.map((item, i) => (
            <FadeInItem
              key={i}
              className="flex gap-4 px-5 py-4 border-b border-[#eee] last:border-b-0 bg-white"
              delay={(i + cards.length) * 100}
              isInView={isInView}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${
                  item.isCurrent ? "bg-green-400" : "bg-green-300"
                }`}
              />
              <div className="text-xs font-medium text-green-500 min-w-[88px] flex-shrink-0 pt-0.5">
                {item.period}
              </div>
              <div>
                <p className="text-sm font-medium text-[#1a1a1a] mb-0.5">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </div>
      </div>
    </section>
  );
}
