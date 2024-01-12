import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from '../styles/ProjectPage.module.css';


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
              <button className={styles.cardButton}>Learn More</button>

              <h2>{project.pname}</h2>
              <br />

              <p>{project.briefDesc}</p>

              <hr />
              <p>{"lglg"}</p>
              <br />
              <p>{project.tag == "p" ? "Project" : "Client"}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
