
import Image from "next/image";

const Socials = ({size = 50}) => {
return (
  <div className="navwrapper">
    <div className="social-media-icons">
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/sakam" target="_blank">
          <Image
            src="/images/Icon=Linkedin.svg"
            alt="LinkedIn"
            className="icon"
            width={size}
            height={size}
          />
        </a>
      </div>
      <div className="icon-container">
        <a href="https://github.com/saka01" target="_blank">
          <Image
            src="/images/Icon=Github.svg"
            alt="GitHub"
            className="icon"
            width={size}
            height={size}
          />
        </a>
      </div>
      <div className="icon-container">
        <a href="https://discord.com/users/1000k" target="_blank">
          <Image
            src="/images/Icon=Discord.svg"
            alt="Discord"
            className="icon"
            width={size}
            height={size}
          />
        </a>
      </div>
      <div className="icon-container">
        <a href="mailto:sakamoshood@ymail.com">
          <Image
            src="/images/Icon=Email.svg"
            alt="Email"
            className="icon"
            width={size}
            height={size}
          />
        </a>
      </div>
    </div>
  </div>
);
}

export default Socials;