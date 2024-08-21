import ProjectItem from "../components/ProjectItem";

export type ProjectType = {
  title: string;
  date: string;
  description: string[];
  imageUrl?: string;
  imageAlt?: string;
  link?: string;
  linkText?: string;
  target?: string;
  codeLink?: string;
  codeLinkText?: string;
};

const projects: ProjectType[] = [
  {
    title: "Next.js and TypeScript Development",
    date: "Current",
    description: [
      "My company is in the process of switching our marketing sites to a Next.js monorepo and using TypeScript. I'm building the first site in this repo. My responsibilities are growing in this process, and I'm grateful to be applying new skills and learning from some incredible senior developers.",
      "Updates coming soon.",
    ],
    imageUrl: "/img/laptoptea.webp",
    imageAlt: "cartoon computer and mug of tea",
  },
  {
    title: "This Portfolio!",
    date: "Ongoing",
    description: [
      "The site you're currently visiting is a Next.js (v13 app router) project. I chose Next.js because I have professional experience with it, but also because it's an enjoyable framework for me.  If there's a feature I want to explore or a skill to improve, this is where I practice and experiment.",
    ],
    imageUrl: "/img/doodle4.webp",
    imageAlt: "cartoon computer and mug of tea",
    link: "/dnd-spells",
    linkText: "Want to see a fun personal project?",
    codeLink: "https://github.com/sidneyhopkins/nextjs-portfolio/tree/main",
    codeLinkText: "See portfolio code",
  },
  {
    title: "Webpack and Tailwind CSS Upgrades",
    date: "Spring 2024",
    description: [
      "To remedy security vulnerabilities at WebstaurantStore, I upgraded Webpack from v4 to v5 and Tailwind CSS from v1 to v3 across two repositories. These were monorepos consisting of over a dozen sites in total. The project involved sifting through documentation and problem solving.",
      "No sites were harmed (down) in the upgrading of these repos, I'm happy to report.",
    ],
    imageUrl: "/img/computercoffee.webp",
    imageAlt: "cartoon computer and mug of coffee",
  },
  {
    title: "VersaTile",
    date: "Fall 2023",
    description: [
      "I developed an interactive 3D feature for my company's private label kitchen gadget that plugs into fridges. Users can interact with the model, reveal related products, and view its dimensions. Built with React and the model-viewer library, I added custom code to display dimensions directly on the model.",
      "Although leadership's interest waned, this quality work deserves a spot in my portfolio!",
    ],
    imageUrl: "/img/versatile.jpg",
    imageAlt: "screenshot of versatile interactive 3d feature",
    link: "https://codepen.io/sidneyhopkins/details/ExOmvJy",
    linkText: "VersaTile Codepen",
    target: "_blank",
  },
  {
    title: "Lancaster Table & Seating",
    date: "Summer 2023",
    description: [
      `I frontended the redesigned Lancaster Table & Seating site. I am especially proud of the effort I put into accessible tabbing and creating the first React-based header for our team.`,
    ],
    imageUrl: "/img/LTS-chair.jpg",
    imageAlt:
      "fancy outdoor table and chair with brick walls and flowering ornimental trees in the background",
    link: "https://www.lancastertableandseating.com",
    linkText: "Lancaster Table & Seating",
    target: "_blank",
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
    target: "_blank",
  },
  {
    title: "Derby Day 2023",
    date: "Winter 2022",
    description: [
      `I built the 2023 website for an annual company charity event, <a href="https://www.clarkassociatesinc.biz/derby">Derby Day</a>.`,
      `Unfortunately for me, this site gets redesigned each year. 😿`,
    ],
    imageUrl: "/img/computercat.webp",
    imageAlt: "cartoon computer and cat",
  },
  {
    title: "First Portfolio Website",
    date: "Spring 2022",
    description: [
      `I've improved my skills as a developer greatly since I built this site, but I love looking back at it to see how much I've grown. 💖`,
    ],
    imageUrl: "/img/first-portfolio.jpg",
    imageAlt: "screenshot of the top of Sidney's first portfolio website",
    link: "https://sidneyhopkins.netlify.app/",
    linkText: "See first portfolio",
    target: "_blank",
  },
  {
    title: "Scribd Clone",
    date: "Winter 2021",
    description: [
      "This is a website clone that I built while seeking an entry-level tech job. It was a crucial project that helped me land my first frontend position.",
      "Scribd has changed their homepage design since I coded this.",
    ],
    imageUrl: "/img/scribdclone.jpg",
    imageAlt: "screenshot of the scribd website clone",
    link: "https://sidney-scribd-clone.netlify.app/",
    linkText: "Scribd Clone",
    target: "_blank",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl">
      <h2 className="portfolio-section__heading text-6xl font-bold pb-6">
        Projects
      </h2>
      <p className="pb-8 mb-8 border-b border-slate-100">
        A summary of my work and recent projects 👩‍💻🪄
      </p>
      {projects.map(project => (
        <ProjectItem
          key={project.title}
          title={project.title}
          date={project.date}
          description={project.description}
          imageUrl={project.imageUrl}
          imageAlt={project.imageAlt}
          link={project.link}
          linkText={project.linkText}
          target={project.target}
          codeLink={project.codeLink}
          codeLinkText={project.codeLinkText}
        />
      ))}
    </section>
  );
}
