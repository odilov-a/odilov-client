import React from "react";

const PersonalInfo = ({ personalInfo }) => {
  return (
    <div className="container text-center my-5">
      <img
        src={personalInfo.profilePicture}
        className="rounded-circle"
        alt={personalInfo.name}
        width="150"
      />
      <h1>{personalInfo.name}</h1>
      <h3>{personalInfo.title}</h3>
      <p>{personalInfo.about}</p>
    </div>
  );
};

export default PersonalInfo;
