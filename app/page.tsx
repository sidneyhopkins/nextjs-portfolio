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
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="order-2 md:order-1 w-full md:w-2/3">
            <h1 className="sr-only">Sidney's portfolio</h1>
            <p className="pb-8 text-7xl font-bold">
              Hi, I'm <span className="whitespace-nowrap">Sidney</span>
            </p>
            <p className="leading-9 max-w-xl text-3xl">
              I'm a self-taught web developer who likes building front-ends,
              bird watching, watercolor, DnD, and playing racquet sports.
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-square rounded-b-full w-5/6 md:w-1/3 md:mr-6">
            <img
              className="rounded-full object-cover aspect-square"
              src="/img/doodle4.webp"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl pt-8 md:pt-16">
        <h2 className="pb-6 font-bold text-4xl">Toolbox</h2>
        <ul className="text-left md:max-w-3xl">
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
        <p className="text-lg pb-4">
          As a self-taught software developer with over 3 years of coding
          experience and over 2 years of development experience in a
          professional setting, I've honed my skills in creating websites that
          are not only visually appealing but also prioritize user experience,
          approachability, and accessibility. I'm committed to continuously
          learning how to make my code more resilient, efficient, and
          maintainable. My passion lies in ensuring that digital experiences are
          enjoyable and inclusive for all users.
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
          </a>
          !
        </p>
        <p className="text-lg pb-4">
          Ready to see my work? Head over to{" "}
          <Link
            className="underline underline-offset-4 hover:no-underline group/link"
            href="/projects"
          >
            my portfolio projects
          </Link>
          .
        </p>
      </section>
    </>
  );
}
