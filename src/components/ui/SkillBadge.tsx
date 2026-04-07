import { Skill } from "@lib/index";

const styleMap: Record<Skill["level"], string> = {
  main: "bg-[#eaf3de] text-[#27500a] border-[#97c459]",
  sub: "bg-[#f7faf4] text-[#3b6d11] border-[#c0dd97]",
  other: "bg-white text-[#888] border-[#ddd]",
};

const dotMap: Record<Skill["level"], string> = {
  main: "bg-[#639922]",
  sub: "bg-[#97c459]",
  other: "bg-[#ccc]",
};

export default function SkillBadge({ name, level }: Skill) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${styleMap[level]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotMap[level]}`}
      />
      {name}
    </span>
  );
}
