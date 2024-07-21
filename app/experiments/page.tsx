import ExperimentItem from "../components/ExperimentItem";

interface ExperimentData {
  title: string;
  source?: string;
  url: string;
  desc: string[];
}

const experiments: ExperimentData[] = [
  {
    title: "Reveal Cards on Scroll | ScrollMagic",
    source: "Codepen",
    url: "https://codepen.io/sidneyhopkins/pen/bGxeWYz",
    desc: [
      "ScrollMagic library experiment, fade in effect on cards. Ended up using GSAP or custom animation in favor of this.",
    ],
  },
  {
    title: "Reveal Cards on Scroll | ScrollMagic",
    source: "Codepen",
    url: "https://codepen.io/sidneyhopkins/pen/bGxeWYz",
    desc: [
      "ScrollMagic library experiment, fade in effect on cards. Ended up using GSAP or custom animation in favor of this.",
    ],
  },
  {
    title: "model-viewer camera-orbit",
    source: "Codepen",
    url: "https://codepen.io/sidneyhopkins/pen/BaORoKw",
    desc: [
      "Spike to determine if the model-viewer library was a good choice for implementing a 3D feature section.",
    ],
  },
  {
    title: "Reveal Cards on Scroll | ScrollMagic",
    source: "Codepen",
    url: "https://codepen.io/sidneyhopkins/pen/bGxeWYz",
    desc: [
      "ScrollMagic library experiment, fade in effect on cards. Ended up using GSAP or custom animation in favor of this.",
    ],
  },
];

export default function Experiments() {
  return (
    <section className="mx-auto max-w-5xl">
      <h2 className="portfolio-section__heading text-6xl font-bold pb-8">
        Experiments
      </h2>
      <p className="pb-16">
        These are some of my attempts to solve odd problems or create something
        special. Rough-and-ready. They're my favorite 🩵 🪄💡
      </p>

      <ul className="grid fluid-grid gap-4">
        {experiments.map(item => (
          <ExperimentItem
            key={item.title}
            title={item.title}
            source={item.source}
            url={item.url}
            desc={item.desc}
          />
        ))}
      </ul>
    </section>
  );
}
