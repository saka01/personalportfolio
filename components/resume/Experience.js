import Skills from "./Skills";
const Experience = () => {
  const Edata = [
    {
      companyName: "Canvass AI",
      workTime: "January 2023 ➔ May 2023",
      workTitle: "Software Engineer Intern",
      workNotes: [
        "Collaborated with a cross-functional team to design, document, and develop features, increasing platform functionality by 10%. Enhanced UI by designing new React components and updating Redux logic.",
        "Developed API end points in python micro-services using the fastAPI framework and improving API integration test coverage from 75% to 92%. Utilized panda’s library for data manipulation.",
        "Played an active role in the team's weekly release cycles, handling version tagging and pre-release validations, which led to a 5% decrease in deployment-related issues.",
      ],
      skillsList: ["JavaScript", "ReactJS", "Python", "Docker", "Pandas", "Circle CI"],
    },
    {
      companyName: "SM Software Consulting",
      workTime: "January 2023 ➔ May 2023",
      workTitle: "Mobile Application Engineer Intern",
      workNotes: [
        "Transform an initial employment app concept into a cross-platform application, impacting the job search experience for a diverse user base of 1,000+ individuals.",
        "Produced 5 mobile screens using React-Native making navigation easier and structured the redux logic needed to have a seamless user experience.",
        "Backend built with NodeJS, executed a secure end-to-end user authentication flow using JWTokens, ensuring data security.",
      ],
      skillsList: ["JavaScript", "React-Native", "MSSQL", "PostgreSQL"],
    },
    {
      companyName: "Google",
      workTime: "January 2021 ➔ May 2021",
      workTitle: "Software Product Sprint Participant",
      workNotes: [
        "Developed a resume builder as part of a team, utilizing HTML/CSS to build a resume template.",
        "Increased user management efficiency by 90%, by implementing Google OAUTH in Python and effectively utilized Google Cloud for data management and application deployment.",
      ],
      skillsList: ["HTML/CSS","JavaScript", "Python", "Google Cloud"],
    },
  ];

  return (
    <div className="experience_section">
      <h3 style={{ color: "#d0d8c2" }}>EXPERIENCE</h3>
      {Edata.map((job, index) => (
        <div className="experience_card" key={index}>
          <div className="experience_header">
            <p className="workTime">{job.workTime}</p>
            <div className="workInfo">
              <p className="workTitle">{`${job.companyName}  •  ${job.workTitle}`}</p>
              <ul>
                {job.workNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
              <Skills skillsList={job.skillsList} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
