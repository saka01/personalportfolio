import Image from "next/image";
import DevName from "./DevName";
import styles from "styles/Navbar.module.css";
import Socials from "./Socials";
import TypeIt from "typeit-react";

const ResumeNav = () => {


  return (
    <div className="resumenavmain">
      <div className="profile_dashboard">
        <div className="profile_container">
          <div className="profile_text_container">
            <div id="about" className={styles.logo}>
              <DevName text="MS._" />
            </div>
            <h2>👋Moshood Saka</h2>
            <TypeIt as={"p"}>
              Experienced Full-Stack Software Engineer 💻
            </TypeIt>
          </div>
          <Image
            id="profile_pic"
            src="/images/profile_pic.jpg"
            alt="Moshood Saka Profile pic"
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              border: "1px solid #d0d8c2",
            }}
          />
        </div>
        <div className="aboutme">
          <span>
            {`Hello there! I'm a recent graduate from the University of Windsor,
          where I earned my Bachelor's in Computer Science. As a passionate
          builder, I thrive on the challenges and creativity that coding offers.
         \nMy ambition is to join
          a forward-thinking company where innovation, collaboration, and a
          commitment to continuous learning and growth are at the heart of its
          culture. I am excited to explore the ever-evolving tech landscape and
          the possibilities it holds.`}
          </span>
          <br />
          <br />
        </div>
        <hr className="customHr" />
        <div className="home_info_block">
          <div className="based_in">
            <br />
            <h2>📍Based In</h2>
            <p>Toronto, Ontario </p>
          </div>
          <div className="currently_status">
            <br />
            <h2>⚡ Currently</h2>
            <p>Software Engineer[Contract] @ Pivot Integrated Technologies</p>
          </div>
          <div className="socials_block">
            <br />
            <Socials size={100} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ResumeNav;
