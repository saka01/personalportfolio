import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from '../styles/ProjectPage.module.css';
import Skills from "./resume/Skills";
import Image from "next/image";


const ProjectCard = ({ projectsData }) => {

  return (
    <div className={styles.projectContainer}>
      {projectsData.map((project, index) => (
        <Link key={index} href={project.link} legacyBehavior>
        <div
          key={index}
          className={styles.projectCard}
        >
          <div key={index} className={styles.projectHeader}>
            <h3>{project.pname}</h3>
          
          <p style={{fontSize: "15px"}}>{project.briefDesc}</p>
            <br />
          </div>
          <Skills skillsList={project.skillsList} />
        </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;
