import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Certifications = ({ projectsData }) => {
  return (
    <div>
      <br />
      <br />
      <h3 style={{ color: "#d0d8c2" }}>CERTIFICATES</h3>

      <br />
      <div className="certContainer">
        <div style={{ backgroundColor: "white" }} className="certImage">
          <Image
            src="/images/Icon=Aws.svg"
            alt="LinkedIn"
            width={100}
            height={60}
          />
        </div>

        <div className="certDetails">
          <p>AWS Certified Developer - Associate @Amazon Web Services ↗</p>
          <p style={{ color: "darkgrey" }}>[In Progess]</p>
        </div>
      </div>
      <br />
      <div className="certContainer">
        <div className="certImage">
          <Image
            src="/images/Icon=docker.svg"
            alt="LinkedIn"
            width={100}
            height={60}
          />
        </div>

        <div className="certDetails">
          <p>Docker For Developers @LinkedIn ↗</p>

          <p style={{ color: "darkgrey" }}>Issued Feb 2024</p>
        </div>
      </div>
      <br />
      <div className="certContainer">
        <div className="certImage">
          <Image
            src="/images/Icon=nextgencto.png"
            alt="LinkedIn"
            width={100}
            height={60}
          />
        </div>

        <div className="certDetails">
          <p>Next-Gen Chief Technology Officer @University of Windsor ↗</p>
          <p style={{ color: "darkgrey" }}>Issued Nov 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
