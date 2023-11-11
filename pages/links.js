import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Socials from "../components/Socials";
import Footer from "@/components/Footer";

const Links = () => {
  const linksData = [
    { title: "ADaPT for Black Youth", link: "https://www.adaptbyap.org" },
    { title: "Portfolio", link: "https://www.moshoodsaka.com" },
  ];

  return (
    <div className="linktree">
      <div className="marqueetext">
        <Marquee>
          L I N K S &nbsp; L I N K S &nbsp; L I N K S &nbsp; L I N K S &nbsp; L
          I N K S &nbsp; L I N K S &nbsp; L I N K S &nbsp; L I N K S &nbsp; L I
          N K S &nbsp; L I N K S &nbsp; L I N K S &nbsp; L I N K S &nbsp; L I N
          K S &nbsp; L I N K S &nbsp; L I N K S &nbsp; L I N K S &nbsp; L I N K
          S &nbsp;
        </Marquee>
      </div>

      <div className="linktree-profile">
        <Image
          id="profile_pic"
          src="/images/profile_pic.jpg"
          alt="Moshood Saka Profile pic"
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            border: "3px solid darkgrey",
          }}
        />
        <h4 style={{ fontSize: "20px" }}>Computer Science Student @ UW</h4>
      </div>

      <div className="linktree-socials">
        <Socials size={100} />
      </div>
      <br />
      <br />
      <div className="links">
        {linksData.map((link, index) => (
          <div key={index} className="linkss">
            <Link key={index} href={link.link} legacyBehavior>
              <span key={index} href={link.link} className="link">
                {link.title}
              </span>
            </Link>
          </div>
        ))}

        <Footer />
      </div>
    </div>
  );
};

Links.getLayout = (page) => page;
export default Links;
