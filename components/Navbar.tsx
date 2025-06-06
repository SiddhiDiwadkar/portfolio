"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#111827] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#7c3aed] cursor-pointer select-none">
          @SiddhiDiwadkar
        </div>
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {links.map(({ name, href }) => (
            <li key={href} className="hover:text-[#a78bfa] transition-colors">
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <MobileMenu links={links} />
      </div>
    </nav>
  );
}

function MobileMenu({ links }: { links: { name: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="text-[#a78bfa] focus:outline-none"
      >
        {open ? (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {open && (
        <ul className="absolute right-4 top-16 bg-[#1e293b] rounded-lg shadow-lg py-4 px-6 space-y-4 text-white font-semibold text-lg">
          {links.map(({ name, href }) => (
            <li key={href} onClick={() => setOpen(false)}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
