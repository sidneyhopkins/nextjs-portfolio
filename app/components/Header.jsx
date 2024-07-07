"use client";
import { Hamburger, MoonStars, Sun, X } from "@phosphor-icons/react";
import clsx from "clsx";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function Nav() {
  const [theme, setTheme] = useState("dark");
  const [openMobile, setOpenMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const body = document.querySelector('body');

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

    // Set isMobile based on initial load
    setIsMobile(window.innerWidth <= 639);
    // Update isMobile state on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };
    const handleOverlayClick = (e) => {
      if (openMobile && e.target.classList.contains('body.overlay')) {
        setOpenMobile(false);
        console.log('test')
      }
    }

    body.addEventListener('click', handleOverlayClick)
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      body.removeEventListener('click', handleOverlayClick)
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

  useEffect(() => {
    animateNav(openMobile);
    body.classList.toggle('overlay');
  }, [openMobile]);

  const animateNav = (isOpen) => {
    const animationDistance = -400;
    console.log(isOpen)

    const tl = gsap.timeline();
    const mm = gsap.matchMedia();

    mm.add("(max-width: 639px) and (prefers-reduced-motion: no-preference)", () => {

      tl
      .fromTo(".nav__hamburger", 
        {
          y: isOpen? 0 : animationDistance,
          x: isOpen ? 0 : 0,
        },
        {
          y: isOpen? 0 : 0,
          x: isOpen ? animationDistance : 0,
          ease: isOpen ? "back.in(1.7)" : 'back.out(1.7)',
          duration: 0.4,
        }
      )
      .fromTo(
        ".nav__links",
        {
          y: isOpen? animationDistance : 0,
          x: isOpen ? 0 : 0,
        },
        {
          y: isOpen? 0 : 0,
          x: isOpen ? 0 : animationDistance,
          ease: "back.out(1.7)",
          duration: 0.4,
          stagger: 0.1,
        },
        isOpen ? "0.4" : "0"
      )
    })

    mm.add("(min-width: 640px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(
        ".nav__links",
        {
          y: 0,
          ease: "back.out(1.7)",
          duration: 0.7,
          stagger: 0.1,
        }
      ); 
    })
  };

  

  const themeIcon = theme === "dark" ? <MoonStars width={24} height={24} weight="duotone" /> : <Sun width={24} height={24} weight="duotone" />;

  return (
    <header className="bg-light dark:bg-dark dark:text-light text-base md:text-xl px-4 md:px-8 py-4 md:py-12 relative">
      <Link href="#main" className="block absolute focus:translate-y-0 z-20 dark:bg-dark bg-light hover:bg-pink-200 dark:hover:bg-pink-950 font-bold px-3 py-2 rounded-md border-2 border-pink-900 -translate-y-20 top-0 left-1/2 -translate-x-1/2 text-center">Skip to Main</Link>
      <div className="max-w-5xl mx-auto flex items-stretch justify-end sm:justify-between gap-2 md:gap-4 relative">
        <nav className="z-10 flex items-stretch justify-between fixed top-0 left-0 sm:relative w-full px-4 pt-4 sm:p-0">
          <button
            tabIndex={isMobile && openMobile ? -1 : 0}
            onClick={() => setOpenMobile(true)}
            className={clsx(
              "nav__hamburger absolute top-0 left-0 ml-4 mt-4 sm:hidden bg-light self-start dark:bg-dark hover:border-gray-500 border border-gray-600 rounded-lg p-3 flex items-center"
              
            )}
            aria-label="Toggle mobile menu"
          >
            <Hamburger width={24} height={24}  />
          </button>

          <ul className="nav__ul flex flex-col sm:flex-row flex-wrap items-stretch justify-start gap-2 md:gap-x-8 md:gap-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  tabIndex={isMobile && !openMobile ? -1 : 0}
                  className="nav__links dark:bg-dark/90 bg-light/90 -translate-y-96 sm:translate-y-0 px-3 py-2 rounded-lg border-gray-600 border flex items-center whitespace-nowrap hover:border-gray-500"
                  href={link.href}
                  onClick={() => setOpenMobile(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {
              <li>
                <button
                  tabIndex={isMobile && !openMobile ? -1 : 0}
                  onClick={() => setOpenMobile(false)}
                  className={clsx(
                    "nav__close nav__links sm:hidden bg-light self-start dark:bg-dark hover:border-gray-500 border border-gray-600 rounded-full p-2 flex items-center",
                    {'hidden' : !openMobile}
                  )}
                  aria-label="Toggle mobile menu"
                >
                  <X width={12} height={12} />
                </button>
              </li>
            }
          </ul>

          <button
            onClick={toggleDarkMode}
            className="bg-light self-start sm:relative dark:bg-dark hover:border-gray-500 border border-gray-600 rounded-lg p-3 flex items-center"
            aria-label="Toggle dark mode"
          >
            {themeIcon}
          </button>
        </nav>

      </div>
    </header>
  );
}