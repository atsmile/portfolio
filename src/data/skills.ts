import { SkillGroup } from "@lib/index";

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React", level: "main" },
      { name: "Next.js", level: "main" },
      { name: "TypeScript", level: "main" },
      { name: "JavaScript", level: "main" },
      { name: "Tailwind CSS", level: "main" },
      { name: "HTML / CSS", level: "main" },
    ],
  },
  {
    label: "Backend / DB",
    skills: [
      { name: "Ruby on Rails", level: "main" },
      { name: "GraphQL", level: "main" },
      { name: "Prisma", level: "sub" },
      { name: "PostgreSQL", level: "sub" },
      { name: "Supabase", level: "other" },
    ],
  },
  {
    label: "Tools / Infra",
    skills: [
      { name: "Git / GitHub", level: "main" },
      { name: "VRT", level: "main" },
      { name: "Figma", level: "main" },
      { name: "Vercel", level: "sub" },
      { name: "Cloudflare", level: "sub" },
    ],
  },
  {
    label: "Other",
    skills: [
      { name: "WordPress", level: "main" },
      { name: "jQuery", level: "main" },
      { name: "PHP", level: "main" },
      { name: "Photoshop", level: "main" },
      { name: "Illustrator", level: "main" },
      { name: "Java", level: "other" },
    ],
  },
];
