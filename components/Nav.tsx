"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import portfolio from "@/data/portfolio";

const navLinks = [
  { label: "Hackathons", href: "#hackathons" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="px-8 md:px-16 lg:px-24 h-16 flex items-center justify-between max-w-6xl mx-auto w-full">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-zinc-100 hover:text-white transition-colors"
        >
          <div className="w-7 h-7 rounded-full overflow-hidden border border-zinc-700 flex-shrink-0">
            <Image
              src="/josh_logo.jpeg"
              alt="Joshua Choi"
              width={28}
              height={28}
              className="w-full h-full object-cover"
            />
          </div>
          {portfolio.personal.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-[#FF8C3A] hover:orange-glow transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
