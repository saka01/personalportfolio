import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from "@/styles/ProjectPage.module.css"; // Import the CSS module
const ProjectPage = () => {
  const projects = [
    {
      pname: "Interview scheduler UI",
      briefDesc: "A Simple ReactJS Scheduler",
      techStack: ["JS", "React"],
      pic: "/images/hotn.png",
      tag: "p",
      year: 2022,
    },
    {
      pname: "BAT$ Finance",
      briefDesc: "Crypto Current Prices & History",
      techStack: ["JS", "React"],
      pic: "/images/hotn.png",
      tag: "p",
      year: 2022,
    },
    {
      pname: "Splixe",
      briefDesc: "Mini App to split payments using Plaid API",
      techStack: ["JS", "React"],
      pic: "/images/hotn.png",
      tag: "p",
      year: 2022,
    },
    {
      pname: "TinyApp",
      briefDesc: "Link Shorter",
      techStack: ["JS", "React"],
      pic: "/images/hotn.png",
      tag: "p",
      year: 2022,
    },
    {
      pname: "Splixe",
      briefDesc: "Crypto Data",
      techStack: ["JS", "React"],
      pic: "/images/hotn.png",
      tag: "p",
      year: 2022,
    },
  ];
  return (
    <div>
      <div className={styles.projectContainer}>
        <ProjectCard projectsData={projects} />
      </div>
    </div>
  );
};

export default ProjectPage;
