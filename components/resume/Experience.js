import Skills from "./Skills";
const Experience = () => {
  const Edata = [
    {
      companyName: "Pivot Integrated Technologies",
      workTime: "[4 Months]",
      workTitle: "Software Engineer Intern",
      summary:
        "Led the development of multiple features, improving client-facing functionality with JavaScript, React, Redux, AWS, and NodeJS. I also utilized Agile practices, enhancing team collaboration and sprint efficiency. Additionally, I conducted thorough code reviews to maintain code quality, resulting in a significant reduction in bug rates.",
      skillsList: [
        "JavaScript",
        "ReactJS",
        "NextJS",
        "Python",
        "Docker",
      ],
    },
    {
      companyName: "Canvass AI",
      workTime: "[4 Months]",
      workTitle: "Software Engineer Intern",
      summary:
        "Collaborated with a cross-disciplinary team to design, document, and develop features, leading to improved platform functionality. I also contributed to enhancing UI and developing API endpoints in Python micro-services. Additionally, I assisted in the weekly release cycles.",
      skillsList: [
        "JavaScript",
        "ReactJS",
        "Python",
        "Docker",
        "Pandas",
        "Circle CI",
      ],
    },
    {
      companyName: "SM Software Consulting",
      workTime: "[4 Months]",
      workTitle: "Mobile Software Engineer Intern",
      summary:
        "Initiated the transformation oof an employment app concept into a cross-platform application, improving the job search experience. Responsibilities included producing mobile screens using React-Native, structuring Redux logic, and ensuring data security with backend built in NodeJS. ",
      skillsList: ["JavaScript", "React-Native", "MSSQL", "NodeJS"],
    },
    {
      companyName: "Google",
      workTime: "[4 Months]",
      workTitle: "Software Product Sprint",
      summary:
        "Collaborated on building a crypto web app, implementing Google OAuth in Python, and utilizing Google Cloud for data management. ",
      skillsList: ["HTML/CSS", "JavaScript", "Google Cloud", "Java"],
    },
    // {
    //   companyName: "Google",
    //   workTime: "[1 Month]",
    //   workTitle: "Computer Science Summer Institute",
    //   summary:
    //     "As a selected participant in the competitive Google's Computer Science Summer Institute, I contributed to developing a resume builder, implementing Google OAuth in Python, and utilizing Google Cloud. ",
    //   skillsList: ["HTML/CSS", "JavaScript", "Python", "Google Cloud"],
    // },
  ];

  return (
    <div className="experience_section">
      <h3 style={{ color: "#d0d8c2" }}>EXPERIENCE</h3>
      {Edata.map((job, index) => (
          <div className="experience_card" key={index}>
            <span className="workTime">{job.workTime}</span>

            <div className="experience_header">
              <p className="workTitle">
                {`${job.companyName}  • `}
                <i className="custyItalics">{job.workTitle}</i>
              </p>
            <br/>
            </div>

            <div className="workInfo">
              <span>{job.summary}</span>
            </div>
            <br />

            <Skills skillsList={job.skillsList} />
          </div>
      ))}
    </div>
  );
};

export default Experience;
