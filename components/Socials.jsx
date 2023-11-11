
import Image from "next/image";

const Socials = ({size}) => {
return (
  <div class="social-icons">
    <div class="icon-container">
      <a href="https://www.linkedin.com/in/sakam" target="_blank">
        <Image
          src="/images/Icon=Linkedin.svg"
          alt="LinkedIn"
          class="icon"
          width={size}
          height={size}
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
          width={size}
          height={size}
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
          width={size}
          height={size}
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
          width={size}
          height={size}
        />
      </a>
      <p>Email</p>
    </div>
  </div>
);
}

export default Socials;