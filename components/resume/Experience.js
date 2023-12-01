const Experience = () => {
  const Edata = [
    {
      companyName: "Canvass AI",
      workTime: "(Jan 2023 - May 2023)",
      workTitle: "Software Engineer Intern",
      workNotes: [
        "Currently designing end-to-end experiences for a mix of client sizes at the Lithios design agency.",
        "Designed a new end-to-end workflow that enabled ‘live-entity proximity alerting’.",
      ],
    },
    {
      companyName: "SM Software Consulting",
      workTime: "(Jan 2023 - May 2023)",
      workTitle: "Software Engineer Intern",
      workNotes: [
        "Currently designing end-to-end experiences for a mix of client sizes at the Lithios design agency.",
        "Designed a new end-to-end workflow that enabled live-entity proximity alerting’.",
      ],
    },
    {
      companyName: "Google",
      workTime: "(Jan 2021 - May 2021)",
      workTitle: "Software Engineer Intern",
      workNotes: [
        "Currently designing end-to-end experiences for a mix of client sizes at the Lithios design agency.",
        "Designed a new end-to-end workflow that enabled ‘live-entity proximity alerting’.",
      ],
    },
  ];
  console.log(Edata);
  return (
    <div>
      {Edata.map((job, index) => (
        <div key={index}>
          <p>{job.companyName}</p>
          <p>{job.workTime}</p>
          <p>{job.workTitle}</p>
          <ul>{job.workNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}</ul>
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
