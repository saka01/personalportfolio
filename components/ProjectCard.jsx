import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from '../styles/ProjectPage.module.css';
import Skills from "./resume/Skills";
import Image from "next/image";


const ProjectCard = ({ projectsData }) => {

  return (
    <div className={styles.projectList}>
      {projectsData.map((project, index) => (
        <Link key={index} href={project.link} legacyBehavior>
        <div
          key={index}
          className={styles.projectCard}
        >
          <div key={index} className={styles.projectHeader}>
            <h2>{project.pname}</h2>
          
          <p>{project.briefDesc}</p>
            <br />
          <Skills skillsList={project.skillsList} />
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;
