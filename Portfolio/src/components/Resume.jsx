

import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <p>
        Want to know more about my skills and experiences? You can download my resume here!
      </p>
      <a href="assets/11dec24.pdf" download="My_Resume.pdf">
        <button className="download-btn">
          <span>📄 Download Resume</span>
        </button>
      </a>
    </section>
  );
};

export default Resume;
