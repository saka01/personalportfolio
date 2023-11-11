import Image from "next/image";

const ResumeNav = () => {
  return (
    <div class="navwrapper">
      <div class="profile_container">
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
        <div id="profile_text_container">
          <h1>Moshood Saka</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
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
  );
};

export default ResumeNav;
