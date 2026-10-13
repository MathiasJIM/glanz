import { Link } from "@tanstack/react-router";
import type { ReactNode, AnchorHTMLAttributes } from "react";

type Variant = "red" | "blue" | "orange" | "green" | "outline";

const variants: Record<Variant, string> = {
  red: "bg-brand-red text-white hover:bg-black",
  blue: "bg-brand-blue-cta text-white hover:bg-black",
  orange: "bg-brand-orange text-white hover:bg-black",
  green: "bg-brand-green text-white hover:bg-black",
  outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
};

interface Props {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CTA({ to, href, variant = "red", children, className = "", onClick }: Props) {
  const cls = `btn-glanz ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} onClick={onClick}>{children}</Link>;
  if (href) return <a href={href} className={cls} onClick={onClick}>{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}
