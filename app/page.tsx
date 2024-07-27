export default function Home() {
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
              src="/img/hp.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl pt-8 md:pt-16">
        <h2 className="pb-6 font-bold text-4xl">Toolbox</h2>
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
      </section>

      <section className="mx-auto max-w-5xl pt-8 md:pt-16">
        <h2 className="pb-6 font-bold text-4xl">More about me</h2>
        <p className="text-lg pb-4">
          As a self-taught developer with over three years of coding experience
          and more than two years in a professional setting, I have honed my
          skills in creating websites that are not only visually appealing but
          also prioritize user experience, approachability, and accessibility. I
          am committed to continuously learning how to make my code more
          resilient, efficient, and maintainable. My passion lies in ensuring
          that digital experiences are enjoyable and inclusive for all users,
          making the web a better place for everyone. &#10084;
        </p>
        <p className="text-lg">
          My professional goal is to continue growing my technical skills while
          building digital spaces that are both functional and beautiful.
        </p>
      </section>
    </>
  );
}
