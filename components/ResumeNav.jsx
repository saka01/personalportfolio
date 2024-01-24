import Image from "next/image";
import Resume from "/public/files/myresume.pdf";
import DevName from "./DevName";
import styles from "styles/Navbar.module.css";
import Socials from "./Socials";
import { useEffect } from "react";

const ResumeNav = () => {

  useEffect(() => {
const aboutMe = document.querySelector(".aboutme");
const handleMouseOver = () => {
  aboutMe.style.color = "#d0d8c2"; // Yellow on hover
};
 const handleMouseOut = () => {
   setTimeout(() => {
     aboutMe.style.color = "rgb(167, 167, 167)"; // Revert after 3s
   }, 3000);
 };

 aboutMe.addEventListener("mouseover", handleMouseOver);
 aboutMe.addEventListener("mouseout", handleMouseOut);

 // Cleanup
 return () => {
   aboutMe.removeEventListener("mouseover", handleMouseOver);
   aboutMe.removeEventListener("mouseout", handleMouseOut);
 };
  }, [])

  return (
    <div className="resumenavmain">
      <div className="resumenavwrapper">
        <div className="profile_dashboard">
          <div class="profile_container">
            <div className="profile_text_container">
              <div id="about" className={styles.logo}>
                <DevName text="MS._" />
              </div>
              <h2>👋Moshood Saka</h2>
              <p>Software Engineer @ Pivot Integrated Technologies 💻</p>
            </div>
            <Image
              id="profile_pic"
              src="/images/profile_pic.jpg"
              alt="Moshood Saka Profile pic"
              width={100}
              height={100}
              style={{
                borderRadius: "50%",
                border: "0.5px solid darkgrey",
              }}
            />
          </div>
          <div className="aboutme">
            <span>
              {`Hello there! I'm a recent graduate from the University of Windsor,
          where I earned my Bachelor's in Computer Science. As a passionate
          builder, I thrive on the challenges and creativity that coding offers.
          Outside of the tech world, I find my balance and refreshment catching
          waves on the Flowrider and playing basketball. My ambition is to join
          a forward-thinking company where innovation, collaboration, and a
          commitment to continuous learning and growth are at the heart of its
          culture. I am excited to explore the ever-evolving tech landscape and
          the possibilities it holds.`}
            </span>
            <br />
            <br />
          </div>
          <hr className="customHr"/>
          <div className="home_info_block">
            <div className="based_in">
              <br />
              <h2>📍Based In</h2>
              <p>Toronto, Ontario </p>
            </div>
            <div className="currently_status">
              <br />

              <h2>⚡ Currently</h2>
              <p>Software Engineer [Contract] </p>
            </div>
            <div className="socials_block">
              <Socials size={100} />
            </div>
          </div>
        </div>
        <div>
          {/* <h3>--&gt; About</h3>
          <h3>-- About</h3>
          <h3>-- About</h3>
          <h3>-- About</h3>
          <h3>-- About</h3> */}
        </div>
      </div>
    </div>
  );
};

export default ResumeNav;
