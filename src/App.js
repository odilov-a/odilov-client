import React, { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* <PersonalInfo personalInfo={data.personalInfo} /> */}
      {/* <Skills skills={data.skills} /> */}
      <Projects projects={data.projects} />
      {/* <Education education={data.education} /> */}
      {/* <Experience experience={data.experience} /> */}
      <Contact contact={data.contact} />
    </div>
  );
}

export default App;
