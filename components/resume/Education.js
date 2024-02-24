import Skills from "./Skills";
const Education = () => {
  const Edata = [
    {
      companyName: "University Of Windsor",
      workTitle: "Bachelor Of Computer Science",
      workTime: "[2024]",
      skillsList: [],
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
    <div className="education_section">
      <h3 style={{ color: "#d0d8c2" }}>EDUCATION</h3>
      {Edata.map((job, index) => (
        <div className="experience_card" key={index}>
          <span className="workTime">{job.workTime}</span>

          <div className="experience_header">
            <p className="workTitle">
              {`${job.companyName}  • `}
              <i className="custyItalics">{job.workTitle}</i>
            </p>
          </div>
          <br />

          <Skills skillsList={job.skillsList} />
        </div>
      ))}
    </div>
  );
};

export default Education;
