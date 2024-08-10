import ExperimentItem from "../components/ExperimentItem";

interface ExperimentData {
  title: string;
  source?: string;
  url: string;
  desc: string[];
}

const experiments: ExperimentData[] = [
  {
    title: "Personal DnD Spellbook",
    source: "Personal Project",
    url: "/dnd-spells",
    desc: [
      "I wasn't satisfied with the digital options for dnd spell organization, so I made my own.",
    ],
  },
  {
    title: "VersaTile 3D",
    source: "Codepen",
    url: "https://codepen.io/sidneyhopkins/pen/ExOmvJy",
    desc: [
      "This is my first draft of the feature section my team presented to company leaders.",
    ],
  },
  {
    title: "Dimensions 3d",
    source: "Codepen",
    url: "https://codepen.io/sidneyhopkins/pen/dygWwGw",
    desc: [
      "Using the google model-viewer library, created a proof of concept for showing dimensions on 3d models.",
    ],
  },
  {
    title: "model-viewer camera-orbit",
    source: "Codepen",
    url: "https://codepen.io/sidneyhopkins/pen/BaORoKw",
    desc: [
      "Spike to determine if the google model-viewer library was a good choice for implementing a 3D feature section.",
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
      <p className="pb-8 mb-8 border-b border-slate-400">
        These are some of my attempts to solve odd problems or create something
        special. <br />
        Rough and ready. Enjoy 🩵 🪄💡
      </p>
      <ul className="grid fluid-grid gap-4">
        {experiments.map(experiment => (
          <ExperimentItem
            key={experiment.title}
            title={experiment.title}
            source={experiment.source}
            url={experiment.url}
            desc={experiment.desc}
          />
        ))}
      </ul>
    </section>
  );
}
