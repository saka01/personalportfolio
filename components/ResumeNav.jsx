import Image from "next/image";
import DevName from "./DevName";
import styles from "styles/Navbar.module.css";
import Socials from "./Socials";
import TypeIt from "typeit-react";
import Gallery from "./Gallery";

const ResumeNav = () => {


  return (
    <div className="resumenavmain">
      <div className="profile_dashboard">
        <div className="profile_container">
          <div className="profile_text_container">
            <div id="about" className={styles.logo}>
              {/* <DevName text="Hi, my name is" /> */}
              <h3 style={{ color: "#d0d8c2" }}>
                <strong>Hi, my name is</strong>
              </h3>
            </div>
            <h2>
              Moshood <strong>Saka</strong>
            </h2>
            <TypeIt as={"p"}>Software Engineering + Cyber Security 💻</TypeIt>
            <br />
            <p className="skills headerbadge">
              <i style={{ color: "#d0d8c2" }}>● SWE Intern @ Hutsy Financial</i>
            </p>

            <div className="aboutme">
              <br />
              <br />
              <h3 style={{ color: "#d0d8c2" }}>
                <strong>ABOUT</strong>
              </h3>
              <br />
              <span>
                I&apos;m an innovative Software Engineer with experience in
                building production-level applications. My passion lies in
                taking an holistic approach to tackle problems with creative
                solutions + a keen interest in cybersecurity, with 3 impactful
                projects in the field.
              </span>
              {/* <br />
              <br /> */}
              {/* <span>
                My ambition is to join a forward-thinking company where
                innovation, collaboration, and a commitment to continuous
                learning and growth are at the heart of its culture.
              </span> */}
            </div>
          </div>
          {/* <Gallery /> */}
        </div>

        <hr className="customHr" />
        <div className="home_info_block">
          <div className="based_in">
            <br />
            <h2>📍Based In</h2>
            <i>Toronto, Ontario </i>
          </div>
          <div className="currently_status">
            <br />
            <h2>⚡ Currently</h2>
            <p className="skills">
              <i style={{ color: "#d0d8c2" }}>● SWE Intern @ Hutsy Financial</i>
            </p>
          </div>
          <div className="socials_block">
            <br />
            <Socials size={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeNav;
