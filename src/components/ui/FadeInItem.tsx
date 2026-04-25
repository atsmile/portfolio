type Props = {
  isInView: boolean;
  delay: number;
  className?: string;
  children: React.ReactNode;
};

export default function FadeInItem({
  isInView,
  delay,
  className = "",
  children,
}: Props) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
