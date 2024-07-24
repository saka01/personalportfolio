import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Certifications = ({ projectsData }) => {
  return (
    <div>
      <br />
      <br />
      <h3 style={{ color: "#d0d8c2" }}>
        <strong>CERTIFICATES</strong>
      </h3>

      <Link href="#" legacyBehavior>
        <div className="certContainer">
          <div style={{ backgroundColor: "white" }} className="certImage">
            <Image
              src="/images/Icon=Aws.svg"
              alt="AWS"
              width={100}
              height={80}
              loading="lazy"
            />
          </div>

          <div className="certDetails">
            <p>AWS Certified Developer - Associate @Amazon Web Services </p>
            <p style={{ color: "darkgrey" }}>[In Progess]</p>
          </div>
        </div>
      </Link>
      <br />
      <Link
        href="https://www.linkedin.com/learning/certificates/39884f0a7703a2a06d1fc769b48cf84a4973029e5f07b0af7669b7cf55316787"
        legacyBehavior
      >
        <div className="certContainer">
          <div className="certImage">
            <Image
              src="/images/Icon=docker.svg"
              alt="Docker"
              style={{ objectFit: "cover" }}
              width={95}
              height={60}
              loading="lazy"
            />
          </div>

          <div className="certDetails">
            <p>Docker For Developers @LinkedIn ↗</p>
            <p style={{ color: "darkgrey" }}>Issued Feb 2024</p>
          </div>
        </div>
      </Link>
      <br />
      <Link
        href="https://ca.badgr.com/public/assertions/5BgScBY4QG24dlJ1Hmubhw"
        legacyBehavior
      >
        <div className="certContainer">
          <div className="certImage">
            <Image
              src="/images/Icon=nextgencto.png"
              alt="LinkedIn"
              width={100}
              height={60}
              loading="lazy"
            />
          </div>

          <div className="certDetails">
            <p>Next-Gen Chief Technology Officer @University of Windsor ↗</p>
            <p style={{ color: "darkgrey" }}>Issued Nov 2022</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Certifications;
