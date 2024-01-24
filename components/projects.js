import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from "@/styles/ProjectPage.module.css"; // Import the CSS module
const ProjectPage = () => {
  const projects = [
    {
      pname: "Canteenly",
      briefDesc:
        "Web App to help HomeCooks with logistics and customer retention",
      skillsList: ["JavaScript", "NodeJS", "Python"],
      pic: "/images/hotn.png",
    },
    {
      pname: "Partyer",
      briefDesc: "Web App to host events.",
      skillsList: ["JavaScript", "NodeJS", "Python"],
      pic: "/images/hotn.png",
    },
    {
      pname: "Portfolio",
      briefDesc: "Personal Portfolio",
      skillsList: ["JavaScript", "NodeJS", "Python"],
      pic: "/images/hotn.png",
    },
  ];
  return (
    <div>
      <h3 style={{ color: "#d0d8c2" }}>PROJECTS</h3>

      <div className={styles.projectContainer}>
        <ProjectCard projectsData={projects} />
      </div>
    </div>
  );
};

export default ProjectPage;
