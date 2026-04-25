export type Work = {
  id: string;
  title: string;
  image?: string;
  description: string;
  url: string;
  anonUrl?: string;
  tags: string[];
  category: string;
  basicAuth?: {
    user: string;
    password: string;
  };
  publicOnly?: boolean;
};

export type Skill = {
  name: string;
  level: "main" | "sub" | "other";
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};
