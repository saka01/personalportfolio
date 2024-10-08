import Image from "next/image";
import Marquee from "react-fast-marquee";
import IconCloud from "@/components/magicui/icon-cloud";
import TypeIt from "typeit-react";

const TechStack = () => {
  const techstack = [
    "HTML/CSS",
    "NextJS",
    "TailwindCSS",
    "Supabase",
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "Python",
    "Typescript",
    "React",
    "React-Native",
    "Pandas",
    "Storybook",
    "Synk",
    "Java",
    "firebase",
    "github",
    "Docker",
    "Git",
    "Jira",
    "Figma",
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
  "synk",
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <h3 style={{ color: "#d0d8c2", fontSize: "3em" }}>
              <strong>⚙️ My Stack &#123;</strong>
            </h3>
            <div
              style={{ width: "100%", padding: "1em" }}
              className="techstack_container"
            >
              {techstack.map((data, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "0.1em",
                  }}
                >
                  <span style={{ color: "#d0d8c2" }} className="tech_stack">
                    {data}
                  </span>
                </div>
              ))}
            </div>
            <h3 style={{ color: "#d0d8c2", fontSize: "3em" }}>
              <strong>&#125;;</strong>
            </h3>
          </div>
          <div className="relative flex h-40 w-70 max-w-xs items-center justify-center overflow-hidden rounded-lg border bg-background">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
