import Image from "next/image";
import Link from "next/link";

export default function Meditation() {
  return (
    <>
      <section className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="w-fit">
            <h1 className="text-4xl md:text-6xl font-bold">
              Guided Meditations
            </h1>
            <h2 className="text=2xl md:text-4xl pt-3 pb-4 sm:pb-8 font-extralight">
              By Sidney Bee 🍵
            </h2>
            <p className="w-full font-thin hidden md:block">
              Meditations are available for free on the{" "}
              <Link
                href="https://insighttimer.com/"
                className="hover:no-underline underline underline-offset-4"
              >
                Insight Timer
              </Link>{" "}
              app.
            </p>
          </div>
          <div className="w-full md:w-fit">
            <Image
              className="rounded-full mx-auto"
              src="/img/headshot.jpg"
              width="300"
              height="300"
              alt="headshot of Sidney"
            />
          </div>
          <p className="w-full font-thin md:hidden">
            Meditations are available for free on the{" "}
            <Link
              href=""
              className="hover:no-underline underline underline-offset-4"
            >
              Insight Timer
            </Link>{" "}
            app.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t mt-8 pt-8 border-slate-100">
        <p className="text-base pb-4">
          Active on Insight Timer since 2019, Sidney creates meditations to
          connect with individuals on their path of personal growth and deeper
          connection with their hearts. These meditations are both an offering
          to the community and a continuation of her own journey in self-love
          and self-compassion. Her voice and style are influenced by ASMR,
          nature, and personal life experiences.
        </p>
        <p className="text-base pb-4">
          Since 2020, she has focused on understanding and navigating core
          shame, worthiness, self-trust, and self-love. This ongoing exploration
          has cracked open her heart, revealing both the challenges and beauty
          of the journey. Self-love doesn't come naturally for many, and core
          shame often stands in the way. Through her personal experiences of
          discovering the wisdom of her heart amidst core shame, Sidney feels
          called to walk alongside others on their own wholehearted journeys,
          offering tools and practices that have been invaluable to her along
          the way.
        </p>
        <p className="text-base pb-4">
          Sidney completed her 200-hour Yoga Teacher Training in 2019. She is
          also a watercolor painter, ASMR artist, software engineer, mental
          health advocate, and daily meditator.
        </p>
      </section>
    </>
  );
}
