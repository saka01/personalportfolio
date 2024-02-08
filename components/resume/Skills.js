const Skills = ({skillsList, header}) => {  
  
  
  return (
    <div className="otherexperience_style">
      {header && <h4 style={{ color: "#a7a7a7" }}>{header}</h4>}
      {skillsList.map((skill, index) => (
        <span key={index} className="skills">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;
