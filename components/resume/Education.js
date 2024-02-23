import Skills from "./Skills";
const Education = () => {
  const Edata = [
    {
      companyName: "University Of Windsor",
      workTime: "September 2019 ➔ April 2024",
      workTitle: "Bachelor Of Computer Science",
      skillsList: [
        "Software Engineering",
        "Operating Systems",
        "Data Structures",
        "Algorithms",
        "Cyber Security",
      ],
    },
    {
      companyName: "LightHouse Labs",
      workTime: "May 2021 ➔ August 2021",
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
    <div className="experience_section">
      <h3 style={{ color: "#d0d8c2" }}>EDUCATION</h3>
      {Edata.map((job, index) => (
        <div className="experience_card" key={index}>
          <div className="experience_header">
            <p className="workTime">{job.workTime}</p>
            <div className="workInfo">
              <p className="workTitle">
                {`${job.companyName}  • `}
                <i className="custyItalics">{job.workTitle}</i>
              </p>
              <Skills skillsList={job.skillsList} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
