import Skills from "./Skills";
const Experience = () => {
  const Edata = [
    {
      companyName: "Pivot Integrated Technologies",
      workTime: "[4 Months]",
      workTitle: "Software Engineer Intern",
      summary:
        "• During my four-month tenure at Pivot Integrated Technologies, I collaborated with a cross-functional team to enhance platform functionality and improve UI. Responsibilities included developing API endpoints in Python micro-services, updating Redux logic, and participating in weekly release cycles.",
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
        "• At Canvass AI, I collaborated with a team to design, document, and develop features, leading to improved platform functionality. I also contributed to enhancing UI and developing API endpoints in Python micro-services. Additionally, I assisted in the weekly release cycles.",
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
      workTitle: "Mobile Application Engineer Intern",
      summary:
        "• At SM Software Consulting, I initiated the transformation oof an employment app concept into a cross-platform application, improving the job search experience. Responsibilities included producing mobile screens using React-Native, structuring Redux logic, and ensuring data security with backend built in NodeJS. ",
      skillsList: ["JavaScript", "React-Native", "MSSQL", "NodeJS"],
    },
    {
      companyName: "Google",
      workTime: "[4 Months]",
      workTitle: "Software Product Sprint Participant",
      summary:
        "• During Google's Software Product Sprint, I collaborated on building a crypto web app, implementing Google OAuth in Python, and utilizing Google Cloud for data management. ",
      skillsList: ["HTML/CSS", "JavaScript", "Google Cloud", "Java"],
    },
    {
      companyName: "Google",
      workTime: "[1 Month]",
      workTitle: "Computer Science Summer Institute Participant",
      summary:
        "• As a selected participant in the competitive Google's Computer Science Summer Institute, I contributed to developing a resume builder, implementing Google OAuth in Python, and utilizing Google Cloud. ",
      skillsList: ["HTML/CSS", "JavaScript", "Python", "Google Cloud"],
    },
  ];

  return (
    <div className="experience_section">
      <h3 style={{ color: "#d0d8c2" }}>EXPERIENCE</h3>
      {Edata.map((job, index) => (
        <div className="experience_card" key={index}>
          <div className="experience_header">
            <p className="workTitle">
              {`${job.companyName}  • `}
              <i className="custyItalics">{job.workTitle}</i>
              <span className="workTime">{`  • ${job.workTime}`}</span>
            </p>
          </div>
          <div className="workInfo">
            <p>{job.summary}</p>
          </div>
          <Skills skillsList={job.skillsList} />
        </div>
      ))}
    </div>
  );
};

export default Experience;
