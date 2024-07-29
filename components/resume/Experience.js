import Skills from "./Skills";
import TypeIt from "typeit-react";

const Experience = () => {
  const Edata = [
    {
      companyName: "Hutsy Financial",
      workTime: "[4 Months]",
      workTitle: "Software Engineer Intern",
      summary:
        "Streamlined and automated app deployment to App Stores, cutting team workload by 4 hours weekly. I enhanced the user experience for 5000+ users by fixing critical bugs and creating high-quality components. Increased code quality and team productivity through active code reviews and feedback, and reduced the API error rate by refining backend SDKs and APIs.",
      skillsList: [
        "TypeScript",
        "JavaScript",
        "ReactJS",
        "React Native",
        "Expo",
        "NodeJS",
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
      workTitle: "Software Engineer Intern",
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
    <div id="experience" className="experience_section">
      <br />
      <br />
      <br />
      <br />
      <h3 style={{ textAlign: "right", color: "#d0d8c2", fontSize: "3em" }}>
        <strong>&#125; Experience👨🏾‍💻</strong>
      </h3>
      <br />

      {Edata.map((job, index) => (
        <div className="experience_card" key={index}>
          <span className="workTime">{job.workTime}</span>

          <div style={{ marginBottom: "0.5em" }} className="experience_header">
            <p className="workTitle">
              {`${job.companyName}  • `}
              <i className="custyItalics">{job.workTitle}</i>
            </p>
          </div>

          <div className="workInfo">
            <span>{job.summary}</span>
          </div>

          <Skills skillsList={job.skillsList} />
        </div>
      ))}
      <h3 style={{ color: "#d0d8c2", fontSize: "3em" }}>
        <strong>&#123;</strong>
      </h3>
    </div>
  );
};

export default Experience;
