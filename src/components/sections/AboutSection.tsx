import SectionTitle from "@components/ui/SectionTitle";
import { profile, careers } from "@data/profile";

const cards = [
  {
    title: "Profile",
    body: `宮崎県在住のフロントエンドエンジニア。\n${profile.hobby}`,
  },
  {
    title: "Experience",
    body: `${profile.experience}。\nQAエンジニア出身で品質への意識が強みです。`,
  },
  {
    title: "Specialty",
    body: "React / Next.js を中心にフロントエンドの実装を担当。\nバックエンドも多少触れます。",
  },
  {
    title: "Now",
    body: "フルリモート勤務を希望し、次のチャレンジを探しています。\nバックエンドやインフラも勉強中です。",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto w-full px-6">
        <SectionTitle eyebrow="About" title="私について" />

        {/* 4枚カード */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-5 border border-green-200"
            >
              <p className="text-xs font-medium text-green-600 mb-1.5">
                {card.title}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* キャリア */}
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
          Career
        </p>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          {careers.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 px-5 py-4 border-b border-[#eee] last:border-b-0 bg-white"
            >
              <div
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${
                  item.isCurrent ? "bg-green-400" : "bg-green-300"
                }`}
              />
              <div className="text-xs font-medium text-green-500 min-w-[88px] flex-shrink-0 pt-0.5">
                {item.period}
              </div>
              <div>
                <p className="text-sm font-medium text-[#1a1a1a] mb-0.5">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
