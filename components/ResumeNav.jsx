import Image from "next/image";
import Resume from "/public/files/myresume.pdf";
import DevName from "./DevName";
import styles from "styles/Navbar.module.css";


const ResumeNav = () => {

  return (
    <div className="resumenavmain">
      <div class="resumenavwrapper">
        <div className="profile_dashboard">
          <div class="profile_container">
            <div className="profile_text_container">
              <div className={styles.logo}>
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
          <div id="about" className="aboutme">
            <span>
              {`👋 Hello there! I'm a recent graduate from the University of Windsor,
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
          <div>
            <hr />
            <h2>📍Based In</h2>
            <p>Toronto, Ontario </p>
            <h2>⚡ Currently</h2>
            <p>Software Engineer [Contract] </p>
          </div>
          <div class="resume-social-media-icons">
            <div class="icon-container">
              <a href="https://www.linkedin.com/in/sakam" target="_blank">
                <Image
                  src="/images/Icon=Linkedin.svg"
                  alt="LinkedIn"
                  class="icon"
                  width={150}
                  height={150}
                />
                <p>LinkedIn</p>
              </a>
            </div>
            <div class="icon-container">
              <a href="https://github.com/saka01" target="_blank">
                <Image
                  src="/images/Icon=Github.svg"
                  alt="GitHub"
                  class="icon"
                  width={150}
                  height={150}
                />
                <p>GitHub</p>
              </a>
            </div>
            <div class="icon-container">
              <a href="https://discord.com/users/1000k" target="_blank">
                <Image
                  src="/images/Icon=Discord.svg"
                  alt="Discord"
                  class="icon"
                  width={150}
                  height={150}
                />
                <p>Discord</p>
              </a>
            </div>
            <div class="icon-container">
              <a href="mailto:sakamoshood@ymail.com">
                <Image
                  src="/images/Icon=Email.svg"
                  alt="Email"
                  class="icon"
                  width={150}
                  height={150}
                />
                <p>Get in Touch!</p>
              </a>
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
