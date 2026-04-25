"use client";

import { useInView } from "@hooks/useInView";
import SectionTitle from "@components/ui/SectionTitle";
import SkillBadge from "@components/ui/SkillBadge";
import FadeInItem from "@components/ui/FadeInItem";
import { skillGroups } from "@data/skills";

const skillLevels = [
  {
    level: "main" as const,
    label: "メイン（実務で使用）",
    dot: "bg-green-400",
  },
  { level: "sub" as const, label: "サブ（使用経験あり）", dot: "bg-green-300" },
  { level: "other" as const, label: "その他・学習中", dot: "bg-gray-300" },
];

export default function SkillsSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      data-layout="SkillsSection"
      id="skills"
      className={`py-20 bg-white transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto w-full px-6">
        <SectionTitle eyebrow="Skills" title="スキルセット" />

        {/* 凡例 */}
        <div className="flex flex-wrap gap-5 mb-7">
          {skillLevels.map((l) => (
            <div
              key={l.level}
              className="flex items-center gap-1.5 text-xs text-gray-500"
            >
              <span className={`w-2 h-2 rounded-full ${l.dot}`} />
              {l.label}
            </div>
          ))}
        </div>

        {/* スキルグループ */}
        <div className="space-y-7">
          {skillGroups.map((group, groupIndex) => (
            <FadeInItem
              key={group.label}
              isInView={isInView}
              delay={groupIndex * 150}
            >
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3 pb-2 border-b border-[#eee]">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </FadeInItem>
          ))}
        </div>
      </div>
    </section>
  );
}
