import React from "react";

const Education = ({ education }) => {
  return (
    <div className="container my-5">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h4>{edu.degree}</h4>
          <h5>{edu.institution}</h5>
          <p>{edu.year}</p>
          <p>{edu.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
