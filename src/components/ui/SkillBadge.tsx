import { Skill } from "@defs/types";

const styleMap: Record<Skill["level"], string> = {
  main: "bg-green-100 text-green-600 border-green-300",
  sub: "bg-green-50 text-green-500 border-green-200",
  other: "bg-white text-gray-600 border-gray-200",
};

const dotMap: Record<Skill["level"], string> = {
  main: "bg-green-400",
  sub: "bg-green-300",
  other: "bg-gray-300",
};

export default function SkillBadge({ name, level }: Skill) {
  return (
    <span
      data-layout="SkillBadge"
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${styleMap[level]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotMap[level]}`}
      />
      {name}
    </span>
  );
}
