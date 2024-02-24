import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from "@/styles/ProjectPage.module.css"; // Import the CSS module
const ProjectPage = () => {
  const projects = [
    {
      pname: "Canteenly",
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
      pname: "Portfolio",
      briefDesc: "My Personal Portfolio",
      skillsList: ["TypeScript", "JavaScript", "ReactJS", "NextJS", "Vercel"],
      link: "https://www.moshoodsaka.com",
    },
    {
      pname: "Lotide",
      briefDesc: "A Mini Clone of the Lodash NPM Library",
      skillsList: ["JavaScript", "Chai", "Mocha"],
      link: "https://www.npmjs.com/package/@saka01/lotide",
    },
    
  ];
  return (
    <div>
      <br />
      <br />
      <h3 style={{ color: "#d0d8c2" }}>LATEST PROJECTS</h3>

      <ProjectCard projectsData={projects} />
    </div>
  );
};

export default ProjectPage;
