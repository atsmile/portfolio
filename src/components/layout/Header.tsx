"use client";

import { useState, useEffect } from "react";

type NavLink = { label: string; href: string; external?: boolean };

const baseNavLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
];

const blogLink: NavLink = {
  label: "Blog",
  href: "https://atsmile.net",
  external: true,
};

type Props = {
  name: string;
  isPublic?: boolean;
};

export default function Header({ name, isPublic }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = isPublic ? [...baseNavLinks, blogLink] : baseNavLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-green-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-green-600 font-medium text-base hover:text-green-500 transition-colors"
        >
          {name}
        </a>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-[#555] hover:text-green-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
