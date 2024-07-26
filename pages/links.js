import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Socials from "../components/Socials";
import Footer from "@/components/Footer";

const Links = () => {
  const linksData = [
    { title: "Netacquires", link: "http://www.netacquires.com/" },
    // { title: "Portfolio", link: "https://www.moshoodsaka.com" },
  ];

  return (
    <div className="linktree">
      <br />
      <br />
      <div className="marqueetext">
        <Marquee autoFill>L I N K S &nbsp; &nbsp; &nbsp;</Marquee>
      </div>
      <br />
      <br />
      <br />

      <div className="linktree-profile">
        {/* <Image
          id="profile_pic"
          src="/images/profile_pic2.jpg"
          alt="Moshood Saka Profile pic"
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            border: "3px solid darkgrey",
          }}
        /> */}
        <h4 style={{ fontSize: "30px" }}>
          Moshood <strong>Saka</strong>
        </h4>
        <h5 style={{ fontSize: "10px" }}>SWEI ◦ Internet Things ◦ Personal Growth</h5>
        <br />
      </div>

      <div className="linktree-socials">
        <Socials size={100} />
      </div>
      <br />
      <br />
      <div className="links">
        {linksData.map((link, index) => (
          <Link key={index} href={link.link} legacyBehavior>
            <div key={index} className="linkss">
              <span key={index} href={link.link} className="link">
                {link.title}
              </span>
            </div>
          </Link>
        ))}

        <Footer />
      </div>
    </div>
  );
};

Links.getLayout = (page) => page;
export default Links;
