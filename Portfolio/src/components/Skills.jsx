

import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        <li className="skill-item">
          <img src="assests/React Logo.gif" alt="React Logo" className="skill-icon" />
          <p>React.js</p>
        </li>
        <li className="skill-item">
          <img src="assests/Javascript Logo.png" alt="JavaScript Logo" className="skill-icon" />
          <p>JavaScript</p>
        </li>
        <li className="skill-item">
          <img src="assests/Css logo.png" alt="CSS Logo" className="skill-icon" />
          <p>CSS</p>
        </li>
        <li className="skill-item">
          <img src="assests/Html logo.png" alt="HTML Logo" className="skill-icon" />
          <p>HTML</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
