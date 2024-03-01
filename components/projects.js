import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from "@/styles/ProjectPage.module.css"; // Import the CSS module
const ProjectPage = () => {
  const projects = [
    {
      pname: "Canteenly ↗",
      briefDesc:
        "A Web App to help HomeCooks with logistics and increase customer retention",
      skillsList: [
        "JavaScript",
        "NodeJS",
        "React",
        "TailwindCSS",
        "Google Firebase",
      ],
      link: "https://canteenly.vercel.app/",
    },
    {
      pname: "Portfolio ↗",
      briefDesc: "My Personal Portfolio",
      skillsList: [
        "TypeScript",
        "JavaScript",
        "ReactJS",
        "NextJS",
        "Vercel",
        "TailwindCSS",
      ],
      link: "https://www.moshoodsaka.com/#about",
    },
    {
      pname: "Partyer ↗",
      briefDesc: "A web app to host events",
      skillsList: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Storybook",
        "express",
        "PostgreSQL",
      ],
      link: "https://github.com/saka01/Partyer?tab=readme-ov-file#partyer",
    },
    {
      pname: "TinyApp ↗",
      briefDesc: "A mini clone of TinyURL",
      skillsList: [
        "HTML",
        "CSS",
        "JavaScript",
        "EJS",
        "NodeJS",
        "express",
        "cookie-session",
      ],
      link: "https://github.com/saka01/tinyApp?tab=readme-ov-file#tinyapp-project",
    },
    {
      pname: "BAT$ Finance ↗",
      briefDesc:
        "A Crypto Web App that displays real-time Top 100 crypto currencies and 1 year history",
      skillsList: [
        "HTML/CSS",
        "Java",
        "Java Maven",
        "Java Servlets",
        "JSoup",
        "JavaScript",
        "Google Cloud",
        "APIs",
      ],
      link: "https://github.com/saka01/Spring2021-Team11?tab=readme-ov-file#spring-2021-team-11",
    },
    {
      pname: "Lotide ↗",
      briefDesc: "A Mini Clone of the Lodash NPM Library",
      skillsList: ["JavaScript", "Chai", "Mocha"],
      link: "https://www.npmjs.com/package/@saka01/lotide",
    },
  ];
  return (
    <div id="projects">
      <br />
      <br />
      <h3 style={{ color: "#d0d8c2" }}>
        <strong>RECENT PROJECTS</strong>
      </h3>

      <ProjectCard projectsData={projects} />
    </div>
  );
};

export default ProjectPage;
