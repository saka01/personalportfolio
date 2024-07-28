import Image from "next/image";
import Marquee from "react-fast-marquee";
import IconCloud from "@/components/magicui/icon-cloud";
import TypeIt from "typeit-react";

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
    "firebase",
    "github",
    "gitlab",
  ];
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "storybook",
  "postgresql",
  "firebase",
  "vercel",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];
  return (
    <>
      <br />
      <br />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ width: "100%" }}>
          <h3 style={{ color: "#d0d8c2", fontFamily: "JetBrains Mono" }}>
            <TypeIt as={"p"} style={{ color: "#d0d8c2" }}>
              I crank projects with these
            </TypeIt>
          </h3>
          <h3 style={{ color: "#d0d8c2", fontSize: "3em" }}>
            <strong>⚙️ Tools.</strong>
          </h3>
        </div>
        <div className="relative flex h-40 w-70 max-w-xs items-center justify-center overflow-hidden rounded-lg border bg-background">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
<br/>
      <div
        style={{ width: "100%", padding: "0em" }}
        className="experience_card"
      >
        <div style={{ background: "none" }} className="marqueetext">
          <Marquee autoFill pauseOnHover>
            {techstack.map((data, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "0.5em",
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
