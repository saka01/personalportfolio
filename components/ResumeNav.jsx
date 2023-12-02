import Image from "next/image";
import Resume from "/public/files/myresume.pdf";

const ResumeNav = () => {
  const handleDownload = () => {
    // Replace "path/to/your/resume.pdf" with the actual path to your resume file
    const resumePath = "/files/myresume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Moshood_Saka_Resume.pdf"; // Change the downloaded file name as needed
    link.click();
  };

  return (
    <div className="resumenavmain">
      <div class="resumenavwrapper">
        <div class="profile_container">
          <Image
            id="profile_pic"
            src="/images/profile_pic.jpg"
            alt="Moshood Saka Profile pic"
            width={70}
            height={70}
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
      <button class="downloadresumebutton" onClick={handleDownload}>
        {`Download Resume 🔽`}
      </button>
    </div>
  );
};

export default ResumeNav;
