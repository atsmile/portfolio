import SectionTitle from "@components/ui/SectionTitle";
import WorkCard from "@components/ui/WorkCard";
import { works } from "@data/works";

type Props = {
  isPublic: boolean;
};

export default function WorksSection({ isPublic }: Props) {
  const filteredWorks = works
    .filter((work) => !work.publicOnly || isPublic)
    .map((work) => ({
      ...work,
      url: !isPublic && work.anonUrl ? work.anonUrl : work.url,
    }));

  return (
    <section id="works" className="py-20">
      <div className="max-w-4xl mx-auto w-full px-6">
        <SectionTitle eyebrow="Works" title="制作物" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
}
