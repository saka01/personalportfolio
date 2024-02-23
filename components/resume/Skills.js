import React, { useState, useEffect } from "react";

const Skills = ({ skillsList, header }) => {

  const [maxSkillsToShow, setMaxSkillsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const maxSkills = window.innerWidth >= 768 ? skillsList.length : 4;
      setMaxSkillsToShow(maxSkills);
    };

    handleResize(); // Call it initially to set the correct number of skills
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [skillsList]); // Re-run effect when skillsList changes

  return (
    <div className="skillsContainer">
      {header && <h4 style={{ color: "#a7a7a7" }}>{header}</h4>}

      {skillsList.slice(0, maxSkillsToShow).map((skill, index) => (
        <span key={index} className="skills">
          {skill}
        </span>
      ))}
      {skillsList.length > maxSkillsToShow && (
        <span className="skills">+{skillsList.length - maxSkillsToShow}</span>
      )}
    </div>
  );
};

export default Skills;
