import Image from "next/image";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  const techstack = [
    "HTML/CSS",
    "JavaScript (4Yrs)",
    "TypeScript (2Yrs)",
    "NodeJS",
    "Python",
    "Typescript",
    "React (3Yrs)",
    "React-Native",
    "Pandas",
    "Storybook",
    "Synk",
    "Java",
  ];

  return (
    <>
      <br />
      <br />
      <h3 style={{ color: "#d0d8c2" }}>
        <strong>TECHNOLOGIES</strong>
      </h3>
      <div style={{ width: "100%" }} className="experience_card">
        <div className="marqueetext">
          <Marquee autoFill pauseOnHover>
            {techstack.map((data, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "1em",
                }}
              >
                <span style={{ color: "#d0d8c2" }} className="tech_stack">
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
