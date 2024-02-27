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
              <DevName text="MS._" />
            </div>
            <h2>
              Moshood <strong>Saka</strong>
            </h2>
            <TypeIt as={"p"}>
              Experienced Full-Stack Software Engineer 💻
            </TypeIt>
            <br />
            <p className="skills headerbadge">
              <i style={{ color: "#d0d8c2" }}>
                ● Available For New Grad Opportunities
              </i>
            </p>

            <div className="aboutme">
              <br />
              <br />
              <h3 style={{ color: "#d0d8c2" }}>
                <strong>ABOUT</strong>
              </h3>
              <br />
              <span>
                Hello there! I&apos;m a recent graduate from the University of
                Windsor, where I earned my Bachelor&apos;s in Computer Science.
                As a passionate builder, I thrive on the challenges and
                creativity that coding offers.
              </span>
              <br />
              <br />
              <span>
                My ambition is to join a forward-thinking company where
                innovation, collaboration, and a commitment to continuous
                learning and growth are at the heart of its culture.
              </span>
            </div>
          </div>
          <Gallery />
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
              <i style={{ color: "#d0d8c2" }}>
                ● Available For New Grad Opportunities
              </i>
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
