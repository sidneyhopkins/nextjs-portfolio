import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./scss/main.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sidney's Portfolio",
  description: "Sidney Hopkins. Front-end developer portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <main
          id="main"
          className="min-h-screen bg-light text-dark dark:bg-dark dark:text-light px-4 sm:px-8 py-8 md:py-16 lg:py-24 text-2xl"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
