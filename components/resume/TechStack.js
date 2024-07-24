import Image from "next/image";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  const techstack = [
    "Html",
    "js",
    "next",
    "nodejs",
    "python",
    "typescript",
    "react",
    "mulli",
    "typescript",
    "react",
    "mulli",
  ];

  return (
    <>
    <br/>
    <br/>
      <h3 style={{ color: "#d0d8c2" }}>
        <strong>TECHNOLOGIES</strong>
      </h3>
      <div
        style={{ display: "flex", flexDirection: "row", width: "100%" }}
        className="experience_card"
      >
        <div className="marqueetext">
          <Marquee autoFill pauseOnHover>
            {techstack.map((data, index) => (
              <div key={index}>
                <Image
                  // key={index}
                  src={`/images/Icon=${data}.svg`}
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <span
                  style={{
                    marginRight: "10em",
                  }}
                  // key={index}
                  className="skills"
                >
                  {data}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default TechStack;
