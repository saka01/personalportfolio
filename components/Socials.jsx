
import Image from "next/image";
import EmailPrompt from "./EmailPrompt";

const Socials = ({size = 50}) => {
return (
  <div className="navwrapper">
    <div className="social-media-icons">
    <EmailPrompt/>

      <div className="icon-container">
        <a href="http://www.linkedin.com/in/sakam/" target="_blank">
          <Image
            src="/images/Icon=Linkedin.svg"
            alt="LinkedIn"
            className="icon"
            width={size}
            height={size}
            loading="lazy"
          />
        </a>
      </div>
      
      {/* <div className="icon-container">
        <a href="http://github.com/saka01/" target="_blank">
          <Image
            src="/images/Icon=Github.svg"
            alt="GitHub"
            className="icon"
            width={size}
            height={size}
            loading="lazy"
          />
        </a>
      </div> */}

      <div className="icon-container">
        <a href="mailto:sakamoshood@ymail.com">
          <Image
            src="/images/Icon=Email.svg"
            alt="Email"
            className="icon"
            width={size}
            height={size}
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </div>
);
}

export default Socials;