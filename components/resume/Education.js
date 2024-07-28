import Skills from "./Skills";
import TypeIt from "typeit-react";
const Education = () => {
  const Edata = [
    {
      companyName: "University Of Windsor",
      workTitle: "Bachelor Of Computer Science",
      workTime: "[2024]",
      skillsList: ["Software Engineering", "Cyber Security", "Operating Systems", "Data Structures & Algorithms"],
    },
    {
      companyName: "LightHouse Labs",
      workTitle: "Full-Stack Development Bootcamp",
      workTime: "[4 Months]",
      skillsList: [
        "HTML/CSS",
        "JavaScript",
        "ReactJS",
        "Mocha",
        "NodeJS",
        "Chai",
        "PostgreSQL",
        "Storybook",
        "Data Structures",
        "Algorithms",
      ],
    },
  ];

  return (
    <div id="education" className="education_section">
      <br />
      <br />
      <br />
      <br />

      <h3 style={{ color: "#d0d8c2", fontFamily: "JetBrains mono" }}>
        <TypeIt as={"p"} style={{ color: "#d0d8c2" }}>
          Structured Learnings...
        </TypeIt>
      </h3>
      <h3 style={{ color: "#d0d8c2", fontSize: "3em" }}>
        <strong>🎓My Education.</strong>
      </h3>
      {Edata.map((job, index) => (
        <div className="experience_card" key={index}>
          <span className="workTime">{job.workTime}</span>

          <div style={{ marginBottom: "0.5em" }} className="experience_header">
            <p className="workTitle">
              {`${job.companyName}  • `}
              <i className="custyItalics">{job.workTitle}</i>
            </p>
          </div>

          <Skills skillsList={job.skillsList} />
        </div>
      ))}
    </div>
  );
};

export default Education;
