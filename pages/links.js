import Image from "next/image";
import Marquee from "react-fast-marquee";

const Links = () => {
  const linksData = [
    { title: "ADaPT for Black Youth", link: "https://www.adaptbyap.org" },
    { title: "Portfolio", link: "https://www.moshoodsaka.com" },
  ];

  return (
    <div className="linktree">
      <div className="marqueetext">
        <Marquee> LINKS LINKS LINKS LINKS LINKS LINKS </Marquee>
      </div>

      <div className="linktree-profile">
        <Image
          id="profile_pic"
          src="/images/profile_pic.jpg"
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            border: "3px solid darkgrey",
          }}
        />
        <h4 style={{ fontSize: "20px" }}>Computer Science Student @ UW</h4>
      </div>

      <div className="links">
        {linksData.map((link, index) => (
          <h3 key={index} href={link.link} className="link">
            {link.title}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Links;
