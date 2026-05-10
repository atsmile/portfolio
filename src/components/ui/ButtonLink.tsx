import { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline";
type Size = "sm" | "md";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

const variantStyles: Record<Variant, string> = {
  primary: "bg-green-500 text-white hover:bg-amber-600",
  outline:
    "border border-green-500 text-green-500 hover:bg-amber-50 hover:border-amber-500 hover:text-amber-500",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
};

export default function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <a
      className={`font-medium rounded-lg transition-all ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
