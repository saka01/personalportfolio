import Image from "next/image";

const ResumeNav = () => {
  return (
    <div class="resumenavwrapper">
      <div class="profile_container">
        <Image
          id="profile_pic"
          src="/images/profile_pic.jpg"
          alt="Moshood Saka Profile pic"
          width={50}
          height={50}
          style={{
            borderRadius: "50%",
            border: "0.5px solid darkgrey",
          }}
        />
        <div className="profile_text_container">
          <h2>Moshood Saka</h2>
          <p>Software Engineer</p>
        </div>
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
  );
};

export default ResumeNav;
