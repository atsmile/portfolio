type Props = {
  eyebrow: string;
  title: string;
};

export default function SectionTitle({ eyebrow, title }: Props) {
  return (
    <div data-layout="SectionTitle" className="mb-8">
      <p className="text-xs font-medium text-green-500 tracking-widest uppercase mb-1">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-medium text-[#1a1a1a]">{title}</h2>
    </div>
  );
}
