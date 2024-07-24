import Skills from "./Skills";
const Education = () => {
  const Edata = [
    {
      companyName: "University Of Windsor",
      workTitle: "Bachelor Of Computer Science",
      workTime: "[2024]",
      skillsList: ["Software Engineering", "Cyber Security", "Operating Systems", "Data Structures & Algorithm"],
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
        "Data Structures",
        "Algorithms",
      ],
    },
  ];

  return (
    <div id="education" className="education_section">
      <br/>
      <h3 style={{ color: "#d0d8c2" }}>
        <strong>EDUCATION</strong>
      </h3>
      {Edata.map((job, index) => (
        <div className="experience_card" key={index}>
          <span className="workTime">{job.workTime}</span>

          <div className="experience_header">
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
