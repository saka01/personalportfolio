import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from '../styles/ProjectPage.module.css';
import Skills from "./resume/Skills";


const ProjectCard = ({ projectsData }) => {
  const exData = [
    {
      pname: "Splixe",
      briefDesc: "Crypto Data",
      techStack: ["JS", "React"],
      pic: "/images/hotn.png",
      tag: "p",
    },
  ];

  return (
    <div className={styles.projectList}>
      {projectsData.map((project, index) => (
        <div
          href={`/project/${project.pname}`}
          key={index}
          className={styles.projectCard}
        >
          <Link
            key={index}
            index
            href={`/project/${project.pname}`}
            legacyBehavior
          >
            <a key={index} className={styles.cardLink}>
              <h2>{project.pname}</h2>
              <br />

              <p>{project.briefDesc}</p>

              <br />
              {/* <p>{project.techStack}</p> */}
              <Skills skillsList={project.skillsList}/>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
