import React from "react";

const Experience = ({ experience }) => {
  return (
    <div className="container my-5">
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <h4>{exp.title}</h4>
          <h5>{exp.company}</h5>
          <p>{exp.year}</p>
          <p>{exp.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
