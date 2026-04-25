"use client";

import { useInView } from "@hooks/useInView";
import SectionTitle from "@components/ui/SectionTitle";
import WorkCard from "@components/ui/WorkCard";
import { works } from "@data/works";
import FadeInItem from "@components/ui/FadeInItem";

type Props = {
  isPublic: boolean;
};

export default function WorksSection({ isPublic }: Props) {
  const { ref, isInView } = useInView();

  const filteredWorks = works
    .filter((work) => !work.publicOnly || isPublic)
    .map((work) => ({
      ...work,
      url: !isPublic && work.anonUrl ? work.anonUrl : work.url,
    }));

  return (
    <section
      data-layout="WorksSection"
      id="works"
      className={`py-20 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto w-full px-6">
        <SectionTitle eyebrow="Works" title="制作物" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredWorks.map((work, index) => (
            <FadeInItem key={work.id} delay={index * 100} isInView={isInView}>
              <WorkCard {...work} />
            </FadeInItem>
          ))}
        </div>
      </div>
    </section>
  );
}
