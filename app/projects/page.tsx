import Project from "../components/Project";

interface ProjectData {
  title: string;
  date: string;
  description: string[];
  imageUrl?: string;
  imageAlt?: string;
  link?: string;
  linkText?: string;
  reverse?: boolean;
}

const projects: ProjectData[] = [
  {
    title: "Webpack and Tailwind CSS Upgrades",
    date: "Spring 2024",
    description: [
      "To remedy security vulnerabilities at WebstaurantStore, I upgraded Webpack from v4 to v5 and Tailwind CSS from v1 to v3 across two repositories. These were monorepos consisting of over a dozen sites in total. The project involved sifting through documentation and problem solving.",
      "No sites were harmed (down) in the upgrading of these repos, I'm happy to report.",
    ],
    imageUrl: "/img/cathacker.webp",
    imageAlt: "cartoon cat typing on computer",
    reverse: true,
  },
  {
    title: "Lancaster Table & Seating",
    date: "Summer 2023",
    description: [
      `I had the pleasure of building the redesigned Lancaster Table and Seating site. I am especially proud of the react nav's animation and seamless tabbing. This was my first full site (subpages and all).`,
    ],
    imageUrl: "/img/LTS-chair.jpg",
    imageAlt:
      "fancy outdoor table and chair with brick walls and flowering ornimental trees in the background",
    link: "https://www.lancastertableandseating.com",
    linkText: "Lancaster Table & Seating",
  },
  {
    title: "Sustainability Efforts for Clark",
    date: "Spring 2023",
    description: [
      `I built a new addition to the Clark Associates company website, the Sustainability Efforts page.`,
    ],
    imageUrl: "/img/CA-sustain.jpg",
    imageAlt:
      "screenshot of website with sustainability statistics, articles, and a dog drinking from a cardboard cup",
    link: "https://www.clarkassociatesinc.biz/sustainability/",
    linkText: "Clark Sustainability",
    reverse: true,
  },
  {
    title: "Derby Day 2023",
    date: "Winter 2022",
    description: [
      "I built the 2023 website for an annual company charity event, Derby Day.",
      `Unfortunately for me, this site gets redesigned each year.`,
    ],
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl">
      <h2 className="portfolio-section__heading text-6xl font-bold pb-6">
        Projects
      </h2>
      <p className="pb-8 mb-8 border-b border-slate-100">
        Professional work 👩‍💻
      </p>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          date={project.date}
          description={project.description}
          imageUrl={project.imageUrl}
          imageAlt={project.imageAlt}
          link={project.link}
          linkText={project.linkText}
          reverse={project.reverse}
        />
      ))}
    </section>
  );
}
