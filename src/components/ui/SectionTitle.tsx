type Props = {
  eyebrow: string;
  title: string;
};

export default function SectionTitle({ eyebrow, title }: Props) {
  return (
    <div className="mb-8">
      <p className="text-xs font-medium text-[#3b6d11] tracking-widest uppercase mb-1">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-medium text-[#1a1a1a]">{title}</h2>
    </div>
  );
}
