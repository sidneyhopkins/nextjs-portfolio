export default function Home() {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-center pb-12 md:pb-24">
        <div className="order-2 md:order-1 w-full md:w-2/3">
          <h1 className="sr-only">Sidney's portfolio</h1>
          <p className="pb-8 text-7xl font-bold">
            Hi, I'm <span className="whitespace-nowrap">Sidney</span>
          </p>
          <p className="leading-9 max-w-xl text-3xl">
            I'm a self-taught web developer who likes building front-ends, bird
            watching, painting in watercolor, DnD, and playing racquet sports.
          </p>
        </div>
        <div className="order-1 md:order-2 aspect-square rounded-b-full w-5/6 md:w-1/3 md:mr-6">
          <img
            className="rounded-full object-cover aspect-square"
            src="/img/hp.jpg"
            alt=""
          />
        </div>
      </div>
      <h3 className="pb-6 font-bold text-4xl">Toolbox</h3>
      <ul className="text-left md:max-w-3xl">
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          Git
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          HTML
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          CSS
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          JavaScript ES6
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          TypeScript
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          NextJS
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          React
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          Tailwind
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          SASS
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          Google Fonts
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          Figma
        </li>
        <li className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
          Azure DevOps
        </li>
      </ul>

      <h2>Resume? CTA? More general info about my work. </h2>
    </section>
  );
}
