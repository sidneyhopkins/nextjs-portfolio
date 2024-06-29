import Image from "next/image";

export default function About() {
  const aboutItems = [
    {
      text: "I used to be a flight attendant! I got to sleepily explore the US and some of Europe. It makes for a good fun fact.",
      image: "/img/flight-attendant.jpg",
      alt: "Old airplane in a museum",
      bgColor: "bg-slate-800/80",
    },
    {
      text: "I'm a pretty average and consistent wordler. But aren't we all 🤔",
      image: "/img/wordle.jpg",
      alt: "Screenshot of Wordle statistics",
      bgColor: "bg-pink-800/90",
    },
    {
      text: "Gryffindor 🪄",
      image: "/img/hp.jpg",
      alt: "Gryffindor emblem",
      bgColor: "bg-orange-800/80",
    },
    {
      text: "My SO and I travelled to South American and saw Andean Condors. We love birding!",
      image: "/img/condor.jpg",
      alt: "Condor soaring in Andes mountains",
      bgColor: "bg-blue-800/80",
    },
  ];

  return (

      <section id="about" className="mx-auto max-w-5xl">
        <h1 className="text-7xl font-bold pb-8">About me</h1>
        <p className="pb-8">
          There's not much code to be explored here, this space is just a fun
          get-to-know-me! 😊
        </p>
        <ul className=" grid fluid-grid gap-4 md:gap-8">
          {aboutItems.map((item, index) => (
            <li
              key={index}
              className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl"
            >
              <p
                className={`absolute top-0 left-0 w-full h-full justify-center ${item.bgColor} text-2xl font-bold text-light p-8 flex items-center w-full text-center opacity-0 hover:opacity-100 transition-opacity duration-200`}
              >
                {item.text}
              </p>
              <Image
                width="300"
                height="300"
                src={item.image}
                alt={item.alt}
                className="object-cover h-full w-full"
              />
            </li>
          ))}
        </ul>
      </section>
  );
}
