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
            <br/>
            <h2>
              Moshood <strong>Saka</strong>
            </h2>
            <TypeIt as={"p"} style={{ color: "#d0d8c2" }}>
              Software Engineering [90%] + Cyber Security [10%] 💻
            </TypeIt>
            <br />
            <p className="skills headerbadge">
              <i style={{ color: "#d0d8c2" }}>● SWE Intern @ Hutsy Financial</i>
            </p>

            <div className="aboutme">
              <br/>
              <span>
                I&apos;m a Software Engineer with experience in
                building full stack production-level software. My passion lies in
                taking an holistic approach to tackle problems with creative
                solutions + a keen interest in cybersecurity, with 3 projects
                related to cyber security.
              </span>
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
