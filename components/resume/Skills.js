const Skills = ({skillsList}) => {  
  
  
  return (
    <div className="otherexperience_style">
      {skillsList.map((skill, index) => (
        <span key={index} className="skills">{skill}</span>
      ))}
    </div>
  );
};

export default Skills;
