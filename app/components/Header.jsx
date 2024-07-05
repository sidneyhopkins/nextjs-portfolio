"use client";
import { Hamburger, MoonStars, Sun, X } from "@phosphor-icons/react";
import clsx from "clsx";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";


export default function Nav() {
  const [theme, setTheme] = useState("dark");
  const [openMobile, setOpenMobile] = useState(false);

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

  const openMobileMenu = () => {
    setOpenMobile(true);
    const tl = gsap.timeline()
    tl.to(".nav__hamburger", {
      x: -400,
      ease: "back.out(1.7)",
      duration: 0.7,
    })
    .fromTo(".mobile-wrapper", {
      x: -400,
    }, 
    {
      x: 0,
      ease: "back.out(1.7)",
      duration: 0.7,
      autoAlpha: 1,
    }, '<')
  }

  const closeMobileMenu = () => {
    setOpenMobile(false);
    const tl2 = gsap.timeline();
    tl2.fromTo(".mobile-wrapper", {
      x: 0,
    }, {
      x: -400,
      ease: "back.out(1.7)",
      duration: 0.7,
      autoAlpha: 0,
    },)
    .to(".nav__hamburger", {
      x: 0,
      ease: "back.out(1.7)",
      duration: 0.7,
    }, '<')
  }

  const moonSvg = <MoonStars width={24} height={24} weight="duotone" />;
  const sunSvg = <Sun width={24} height={24} weight="duotone" />;

  return (
    <header className="bg-light dark:bg-dark dark:text-light text-base md:text-xl px-4 md:px-8 py-4 md:py-12">
      <div className="max-w-5xl mx-auto flex items-stretch justify-between gap-2 md:gap-4">
        <nav className="flex items-center h-full">

          <button 
            onClick={openMobileMenu}
            className={clsx(
              "nav__hamburger m-4 absolute top-0 left-0 sm:hidden bg-light self-start dark:bg-dark hover:border-gray-500 border border-gray-600 rounded-lg p-3 flex items-center",
            )}
            aria-label="Toggle mobile menu"
          >
            <Hamburger width={34} height={34} />
          </button>

          <div 
            className={clsx(
              "mobile-wrapper flex flex-row-reverse invisible sm:visible",
              {'invisible sm:visible -translate-x-[400px] sm:translate-x-0 opacity-100': !openMobile}
            )}>
            <button 
              onClick={closeMobileMenu} 
              className={clsx(
                "nav__close ml-2 sm:hidden bg-light self-start dark:bg-dark hover:border-gray-500 border border-gray-600 rounded-full p-2 flex items-center",
              )}
              aria-label="Toggle mobile menu"
            >
              <X width={12} height={12}/>
            </button>

            <ul 
              className={clsx(
                "nav__ul flex flex-col sm:flex-row flex-wrap items-stretch justify-start gap-2 md:gap-x-8 md:gap-y-4", 
              )}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="px-3 py-2 rounded-lg border-gray-600 border flex items-center whitespace-nowrap hover:border-gray-500"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>



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