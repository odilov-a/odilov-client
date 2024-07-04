import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="container my-5">
      <h2>Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <h4>{skill.category}</h4>
            <ul>
              {skill.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
