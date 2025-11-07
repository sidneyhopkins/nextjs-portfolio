import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const toolbox = [
      'TypeScript',
      'React',
      'React Native',
      'Expo',
      'Next.js',
      'Component Design',
      'Accessibility',
      'Design Systems',
      'TanStack Query',
      // 'Git',
      // 'HTML',
      // 'CSS / SCSS',
      // 'Tailwind CSS',
      // 'CSS Modules',
      // 'JavaScript ES6',
      // 'Figma',
      // 'Agile',
      // 'Webpack',
      // 'GSAP',
      // 'google/model-viewer',
  ]

  return (
      <>
          <section className="mx-auto max-w-5xl">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="w-full md:w-2/3">
                      <h1 className="sr-only">Sidney's portfolio</h1>
                      <p className="pb-8 text-5xl font-extralight md:text-7xl">
                          Hi, I'm{' '}
                          <span className="whitespace-nowrap">Sidney 👋</span>
                      </p>
                      <p className="max-w-xl text-lg md:text-3xl md:leading-relaxed">
                          I'm a self-taught frontend software engineer, crafter,
                          hiker, game lover, birder, and watercolorist.☺️
                      </p>
                  </div>
                  <div className="aspect-square rounded-b-full md:w-1/3 md:mr-6">
                      <Image
                          className="rounded-full object-cover aspect-square"
                          src="/img/headshot2.jpg"
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
                          className="inline-block mr-3 my-2 px-3 py-2 rounded-3xl border border-black dark:border-white">
                          {item}
                      </li>
                  ))}
              </ul>
          </section>

          <section className="mx-auto max-w-5xl pt-8 md:pt-16">
              <h2 className="pb-6 font-bold text-4xl">More about me</h2>
              <p className="max-w-4xl text-xl pb-4 font-light">
                  With over three years of experience in software development, I
                  build applications that prioritize user experience,
                  accessibility, and long-term maintainability. I’m passionate
                  about making digital experiences resilient, efficient, and
                  inclusive—free of friction for users and developers alike. I
                  care deeply about the human side of software, from the folks I
                  work with to the people who rely on the products I help
                  create. 💟
              </p>
              <p className="text-xl pb-4">
                  If you'd like to continue the conversation,{' '}
                  <a
                      className="underline underline-offset-4 hover:no-underline"
                      href="mailto:sidhopkins14@gmail.com">
                      email me
                  </a>{' '}
                  💌
              </p>
              <p className="text-xl pb-4">
                  Ready to see some dev work? Head over to{' '}
                  <Link
                      className="underline underline-offset-4 hover:no-underline group/link"
                      href="/projects">
                      my portfolio projects
                  </Link>{' '}
                  💾
              </p>
          </section>
      </>
  )
}
