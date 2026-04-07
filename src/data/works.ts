import { Work } from "@lib/index";

export const works: Work[] = [
  {
    id: "karaoke-compa",
    title: "カラオケ喫茶 コンパ",
    description:
      "家業のカラオケ喫茶サイト。Next.js / TypeScript で制作し、Cloudflare Pages にデプロイ。",
    url: "https://karaoke-compa.com",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
    category: "Web Site",
  },
  {
    id: "compass",
    title: "沖本吉宏税理士事務所",
    description:
      "職業訓練でのチーム制作。税理士事務所サイトのコンペ作品。スライダーやお問い合わせフォームを実装。",
    url: "http://fnc.s601.xrea.com/web/compass/",
    tags: ["HTML", "CSS", "jQuery"],
    category: "Web Site",
    basicAuth: {
      user: "compass",
      password: "teamc",
    },
  },
  {
    id: "portfolio-old",
    title: "Portfolio（旧版）",
    description:
      "職業訓練後に整備したポートフォリオサイト。HTML / CSS / jQuery で制作。",
    url: "https://atsmile.net/portfolio/",
    tags: ["HTML", "CSS", "jQuery"],
    category: "Portfolio",
  },
];
