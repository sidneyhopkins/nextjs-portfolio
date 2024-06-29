"use client";
import { MoonStars, Sun } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Nav() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      document.documentElement.classList.add(initialTheme);
      setTheme(initialTheme);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.replace(theme, newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { href: "/", label: "💾 Home" },
    { href: "/about/", label: "🐦 About" },
    { href: "/projects/", label: "📀 Projects" },
    { href: "/experiments/", label: "🧩 Experiments" },
    { href: "https://github.com", label: "🐈‍⬛ GitHub" },
  ];

  const moonSvg = <MoonStars width={24} height={24} weight="duotone" />;
  const sunSvg = <Sun width={24} height={24} weight="duotone" />;

  return (
    <header className="bg-light dark:bg-dark dark:text-light text-base md:text-xl px-4 md:px-8 py-4 md:py-12">
      <div className="max-w-5xl mx-auto flex items-stretch justify-between gap-2 md:gap-4">
        <nav className="flex items-center h-full">
          <ul className="flex flex-col sm:flex-row flex-wrap items-stretch justify-start gap-2 md:gap-x-8 md:gap-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="px-3 py-2 rounded-lg border-gray-600 border flex items-center whitespace-nowrap"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="bg-light self-start dark:bg-dark hover:border-gray-500 border border-gray-600 rounded-lg p-3 flex items-center"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? moonSvg : sunSvg}
        </button>
      </div>
    </header>
  );
}