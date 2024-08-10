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
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
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
    // { href: "/about/", label: "🐦 About" },
    { href: "/projects/", label: "📀 Projects" },
    { href: "/experiments/", label: "🧩 Experiments" },
    { href: "https://github.com", label: "🐈‍⬛ GitHub" },
  ];

  return (
    <header className="bg-light dark:bg-dark dark:text-light text-base md:text-xl px-3 md:px-8 py-3 md:py-12">
      <div className="max-w-5xl mx-auto flex items-stretch justify-between gap-2 md:gap-4">
        <nav className="flex items-center h-full">
          <ul className="flex flex-col sm:flex-row flex-wrap items-stretch justify-start gap-1 sm:gap-4 md:gap-x-8 md:gap-y-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  className="header-link before:bg-[#f17c38] dark:before:bg-[#ffcc25] dark:hover:shadow-[#003a5c] shadow-orange-500 hover:md:shadow-nav motion-safe:hover:md:-translate-x-[2px] motion-safe:hover:md:-translate-y-[2px] px-2 py-1 sm:px-3 sm:py-2 rounded-lg border-gray-600 border flex items-center whitespace-nowrap"
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
          className="group/button hover:dark:border-gray-200 hover:border-gray-800 border border-gray-500 self-start rounded-lg p-3 flex items-center"
          aria-label="Toggle dark or light mode"
        >
          {theme === "dark" ? (
            <MoonStars
              width={24}
              height={24}
              weight="duotone"
              className="group-hover/button:fill-blue-500"
            />
          ) : (
            <Sun
              width={24}
              height={24}
              weight="duotone"
              className="group-hover/button:fill-orange-600"
            />
          )}
        </button>
      </div>
    </header>
  );
}
