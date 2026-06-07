export type Profile = {
  name: string;
  role: string;
  roleJa: string;
  location: string;
  bio: string;
  experience: string;
  hobby: string;
  now: string;
  github: string;
};

export type Career = {
  period: string;
  title: string;
  description: string;
  isCurrent?: boolean;
};

export type Work = {
  id: string;
  title: string;
  image?: string;
  description: string;
  url: string;
  anonUrl?: string;
  linkLabel?: string;
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
