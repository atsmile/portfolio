import { Work } from "@lib/index";

export const works: Work[] = [
  {
    id: "karaoke-compa",
    title: "カラオケ COMPA",
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
    tags: ["HTML", "CSS", "jQuery", "PHP"],
    category: "Web Site",
    basicAuth: {
      user: "compass",
      password: "teamc",
    },
  },
  {
    id: "portfolio",
    title: "Portfolio（職業訓練制作）",
    description:
      "職業訓練中に制作したポートフォリオ。HTML / CSS / jQuery で制作。",
    url: "http://fnc.s601.xrea.com/works/portfolio/2017/0000/",
    anonUrl: "http://fnc.s601.xrea.com/portfolio/",
    tags: ["HTML", "CSS", "jQuery"],
    category: "Portfolio",
  },
];
