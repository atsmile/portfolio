export type Work = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  category: string;
  imagePath?: string;
  basicAuth?: {
    user: string;
    password: string;
  };
};

export type Skill = {
  name: string;
  level: "main" | "sub" | "other";
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};
