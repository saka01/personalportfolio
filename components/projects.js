import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import TypeIt from "typeit-react";
const ProjectPage = () => {
  const projects = [
    {
      pname: "BeingCov ✪",
      briefDesc: "[In-Development]",
      skillsList: ["JavaScript", "React", "TailwindCSS"],
      link: "#",
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
      link: "http://www.moshoodsaka.com/#about/",
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
      link: "http://github.com/saka01/Partyer?tab=readme-ov-file#partyer/",
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
      link: "http://github.com/saka01/tinyApp?tab=readme-ov-file#tinyapp-project/",
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
      link: "http://github.com/saka01/Spring2021-Team11?tab=readme-ov-file#spring-2021-team-11/",
    },
    {
      pname: "Lotide ↗",
      briefDesc: "A Mini Clone of the Lodash NPM Library",
      skillsList: ["JavaScript", "Chai", "Mocha"],
      link: "http://www.npmjs.com/package/@saka01/lotide/",
    },
  ];
  return (
    <div id="projects">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h3 style={{ color: "#d0d8c2", fontFamily: "JetBrains mono" }}>
          <TypeIt as={"p"} style={{ color: "#d0d8c2" }}>
            Enjoyed these projects too!
          </TypeIt>
        </h3>
        <h3 style={{ color: "#d0d8c2", fontSize: "3em" }}>
          <strong>👷🏾‍♂️My Projects.</strong>
        </h3>
      </div>
      <br />

      <ProjectCard projectsData={projects} />
    </div>
  );
};

export default ProjectPage;
