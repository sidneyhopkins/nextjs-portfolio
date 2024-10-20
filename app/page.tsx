import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const toolbox = [
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "HTML",
    "CSS / SCSS",
    "Tailwind CSS",
    "CSS Modules",
    "JavaScript ES6",
    "Figma",
    "Agile",
    "Webpack",
    "GSAP",
    "google/model-viewer",
  ];

  return (
    <>
      <section className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-2/3">
            <h1 className="sr-only">Sidney's portfolio</h1>
            <p className="pb-8 text-5xl font-extralight md:text-7xl">
              Hi, I'm <span className="whitespace-nowrap">Sidney 👋</span>
            </p>
            <p className="max-w-xl text-lg md:text-3xl md:leading-relaxed">
              I'm a self-taught frontend software engineer, meditation teacher,
              birder, watercolor painter, and mental health advocate.
            </p>
          </div>
          <div className="aspect-square rounded-b-full md:w-1/3 md:mr-6">
            <Image
              className="rounded-full object-cover aspect-square"
              src="/img/headshot.jpg"
              alt=""
              width="400"
              height="400"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl pt-8 md:pt-16">
        <h2 className="pb-6 font-bold text-4xl">Dev Toolbox</h2>
        <ul className="text-left md:max-w-3xl font-extralight">
          {toolbox.map(item => (
            <li
              key={item}
              className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl pt-8 md:pt-16">
        <h2 className="pb-6 font-bold text-4xl">More about me</h2>
        <p className="text-lg pb-4 font-light">
          As a self-taught developer with over 3 years of coding experience,
          I've honed my skills in creating web apps that are not only visually
          appealing but also prioritize user experience, approachability, and
          accessibility. I'm committed to continuously learning how to make my
          code more resilient, efficient, and maintainable. My passion lies in
          ensuring that digital experiences are enjoyable and inclusive for all
          users.
        </p>
        <p className="text-lg pb-4">
          Let's make the web a better place for everyone. &#10084;
        </p>
        <p className="text-lg pb-4">
          If you'd like to continue the conversation,{" "}
          <a
            className="underline underline-offset-4 hover:no-underline"
            href="mailto:sidhopkins14@gmail.com"
          >
            email me
          </a>{" "}
          💌
        </p>
        <p className="text-lg pb-4">
          Ready to see some dev work? Head over to{" "}
          <Link
            className="underline underline-offset-4 hover:no-underline group/link"
            href="/projects"
          >
            my portfolio projects
          </Link>{" "}
          💾
        </p>
      </section>
    </>
  );
}
