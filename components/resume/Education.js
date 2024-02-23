import Skills from "./Skills";
const Education = () => {
  const Edata = [
    {
      companyName: "University Of Windsor",
      workTitle: "Bachelor Of Computer Science",
      skillsList: [
        "Software Engineering",
        "Data Structures & Algorithms",
        "Cyber Security",
      ],
    },
    {
      companyName: "LightHouse Labs",
      workTitle: "Full-Stack Development Bootcamp",
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
