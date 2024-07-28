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
        <div key={index} className={styles.projectCard}>
          <div key={index} className={styles.projectHeader}>
            <h3>
              <strong>{project.pname}</strong>
            </h3>
            <p style={{ fontSize: "0.7em" }}>{project.briefDesc}</p>
          </div>

          <br />
          <span style={{ fontSize: "0.5em" }}>
            I&apos;m still refractoring this
            <strong style={{ color: "#d0d8c2" }}> part 🔨</strong>{" "}
          </span>
          <br />

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Skills skillsList={project.skillsList} />
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <Link href={project.link}>
              <span key={index} className="skills">
                🌐 Website
              </span>
            </Link>
            <Link href={project.link}>
              <span key={index} className="skills">
                🔌 Source
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
