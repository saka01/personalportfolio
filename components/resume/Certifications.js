import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Certifications = ({ projectsData }) => {
  return (
    <div>
      <br />
      <br />
      <h3 style={{ color: "#d0d8c2" }}>CERTIFICATES</h3>
      <div className="certContainer">
        <div className="certImage">
          <Image
            src="/images/Icon=Linkedin.svg"
            alt="LinkedIn"
            width={100}
            height={60}
          />
        </div>

        <div className="certDetails">
          <p>Next Generation Chief Technology Officer @University of Windsor</p>
          <p>Issued Jan 2024</p>
        </div>
      </div>
      <br/>
      <div className="certContainer">
        <div className="certImage">
          <Image
            src="/images/Icon=Linkedin.svg"
            alt="LinkedIn"
            width={100}
            height={60}
          />
        </div>

        <div className="certDetails">
          <p>Docker For Developers @LinkedIn</p>
          <p>Issued Jan 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
