import SectionTitle from "@components/ui/SectionTitle";
import SkillBadge from "@components/ui/SkillBadge";
import { skillGroups } from "@data/skills";

const legend = [
  {
    level: "main" as const,
    label: "メイン（実務で使用）",
    dot: "bg-green-400",
  },
  { level: "sub" as const, label: "サブ（使用経験あり）", dot: "bg-green-300" },
  { level: "other" as const, label: "その他・学習中", dot: "bg-gray-300" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto w-full px-6">
        <SectionTitle eyebrow="Skills" title="スキルセット" />

        {/* 凡例 */}
        <div className="flex flex-wrap gap-5 mb-7">
          {legend.map((l) => (
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
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3 pb-2 border-b border-[#eee]">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
