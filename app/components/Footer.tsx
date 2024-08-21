"use client";
import Link from "next/link";
import { CaretRight, Copyright } from "@phosphor-icons/react";

export default function Footer() {
  const primaryLinks = [
    { href: "/", label: "Home" },
    // { href: "/about/", label: "About" },
    { href: "/projects/", label: "Projects" },
    { href: "/experiments/", label: "Experiments" },
    { href: "/dnd-spells/", label: "DnD Spells" },
  ];

  const secondaryLinks = [
    { href: "https://github.com/sidneyhopkins", label: "Github" },
    { href: "https://codepen.io/sidneyhopkins/", label: "Codepen" },
    { href: "https://www.linkedin.com/in/sidney-hopkins/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-light text-dark dark:bg-dark dark:text-light px-4 sm:px-8 pb-8 text-lg">
      <div className="mx-auto max-w-5xl">
        <section className="flex flex-wrap items-start gap-12 md:gap-16">
          <ul className="flex flex-col gap-4">
            {primaryLinks.map(link => (
              <li key={link.href}>
                <Link
                  className="hover:border-gray-500 border-b border-transparent"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-4">
            {secondaryLinks.map(link => (
              <li key={link.href}>
                <Link className="group/link" href={link.href}>
                  <span className="group-hover/link:border-gray-500 border-b border-transparent">
                    {link.label}
                  </span>
                  <CaretRight
                    className="group-hover/link:motion-safe:translate-x-1 duration-200 inline-block"
                    width={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section aria-label="copyright info" className="pt-6 text-sm text-left">
          <p className="flex items-center">
            <span className="sr-only">Copyright</span>
            <Copyright
              weight="thin"
              size={16}
              className="inline-block mr-1 fill-orange-700 dark:fill-orange-300"
            />
            {new Date().getFullYear()} Sidney Hopkins
          </p>
        </section>
      </div>
    </footer>
  );
}
