import Image from "next/image";
import RandomGreeting from "@/components/helper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <div
        style={{
          textAlign: "center",
          padding: "40px 0",
          }}
      >
        <Image
          id="profile_pic"
          src="/images/profile_pic.jpg"
          alt="Moshood Saka Profile pic"
          width={150}
          height={150}
          style={{
            borderRadius: "50%",
            border: "3px solid darkgrey",
          }}
        />
        <h2 style={{ fontSize: "56px" }}>MOSHOOD SAKA</h2>
        <h3 style={{ fontSize: "26px" }}>SOFTWARE ENGINEER</h3>
        <br />
        <br />
        <div class="social-media-icons">
          <div class="icon-container">
            <a href="https://www.linkedin.com/in/sakam" target="_blank">
              <Image
                src="/images/Icon=Linkedin.svg"
                alt="LinkedIn"
                class="icon"
                width={150}
                height={150}
              />
            </a>
            <p>LinkedIn</p>
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
            </a>
            <p>GitHub</p>
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
            </a>
            <p>Discord</p>
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
            </a>
            <p>Email</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const lol = {
  display: "inline-block",
  padding: "10px 20px",
  fontSize: "20px",
  color: "white",
  backgroundColor: "grey",
  textDecoration: "none",
  borderRadius: "25px",
  marginTop: "25px",
};
