const Experience = () => {
  const Edata = [
    {
      companyName: "Pivot Integrated Technologies",
      workTime: "Remote | (Apr 2023 - Present)",
      workTitle: "Software Engineer (Contract)",
      workNotes: [
        "Worked independently to build websites for clients, ensuring a responsive design and optimized user experience.",
        "Managed full-stack development tasks to deliver functional and visually appealing web applications.",
        "Coordinated with clients to define requirements, establish timelines, and provide updates on project progress.",
      ],
    },
    {
      companyName: "Canvass AI",
      workTime: "Toronto | (Jan 2023 - May 2023)",
      workTitle: "Software Engineer Intern",
      workNotes: [
        "Collaborated with a cross-functional team to design, document, and develop features, increasing platform functionality by 10%. Enhanced UI by designing new React components and updating Redux logic.",
        "Developed API end points in python micro-services using the fastAPI framework and improving API integration test coverage from 75% to 92%. Utilized panda’s library for data manipulation.",
        "Played an active role in the team's weekly release cycles, handling version tagging and pre-release validations, which led to a 5% decrease in deployment-related issues.",
      ],
    },
    {
      companyName: "SM Software Consulting",
      workTime: "Toronto | (Jan 2023 - May 2023)",
      workTitle: "Mobile Application Engineer Intern",
      workNotes: [
        "Transform an initial employment app concept into a cross-platform application, impacting the job search experience for a diverse user base of 1,000+ individuals.",
        "Produced 5 mobile screens using React-Native making navigation easier and structured the redux logic needed to have a seamless user experience.",
        "Backend built with NodeJS, executed a secure end-to-end user authentication flow using JWTokens, ensuring data security.",
      ],
    },
    {
      companyName: "Google",
      workTime: "Remote | (Jan 2021 - May 2021)",
      workTitle: "Software Product Sprint Participant",
      workNotes: [
        "Accepted into the competitive program to learn from industry leaders in emerging technologies. Developed a web application that generates a resume based on the info provided with a team of 2.",
        "Expanded technical skills in 14 days using HTML/CSS and JavaScript to design resume templates.",
        "Implemented Python, Django back-end framework and Google App Engine to serve data to clients, handle HTTP requests and user authentication.",
      ],
    },
    {
      companyName: "Google",
      workTime: "Remote | (Jan 2021 - May 2021)",
      workTitle: "Computer Science Summer Institute Participant",
      workNotes: [
        "Accepted into the competitive program to learn from industry leaders in emerging technologies. Developed a web application that generates a resume based on the info provided with a team of 2.",
        "Expanded technical skills in 14 days using HTML/CSS and JavaScript to design resume templates.",
        "Implemented Python, Django back-end framework and Google App Engine to serve data to clients, handle HTTP requests and user authentication.",
      ],
    },
  ];
  return (
    <div>
      <h3 style={{ color: "black" }}>EXPERIENCE</h3>
      {Edata.map((job, index) => (
        <div className="experience_card" key={index}>
          <div className="experience_header">
            <p>{job.companyName}</p>
            <p className="workTitle">{job.workTime}</p>
          </div>
          <p className="workTitle">{job.workTitle}</p>
          <ul>
            {job.workNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ))}
      {/* <div>
        <p>Canvass AI</p>
        <p>(Jan 2023 - May 2023)</p>
        <p>Software Engineer Intern</p>
        <ul>
          <li>
            Currently designing end-to-end experiences for a mix of client sizes
            at the Lithios design agency.
          </li>
          <li>
            Designed a new end-to-end workflow that enabled ‘live-entity
            proximity alerting’.
          </li>
        </ul>
      </div>
      <div>
        <p>EDUCATION</p>
        <p>Bachelor of Computer Science</p>
        <p>University of Windsor</p>
      </div>
      <div>
        <p>EDUCATION</p>
        <p>Bachelor of Computer Science</p>
        <p>University of Windsor</p>
      </div> */}
    </div>
  );
};

export default Experience;
