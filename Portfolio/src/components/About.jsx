// import React from 'react';


// const About = () => {
//   return (
//     <section id="about" className="about">
//       <h2>About Me</h2>
//       <p>Hello! I am a passionate Frontend Developer skilled in creating engaging and dynamic web applications.</p>
//     </section>
//   );
// };

// export default About;

import React from 'react';



const About = () => {
  return (
    <section id="about" className="about">
      <h2>👤 About Me</h2>
      <div className="about-content">
        <div className="profile-pic">
          <img src= "assests/Kumargosala.jpg"alt="Profile"/>
        </div>
        {/* <p>
          I am a skilled Internship Trainee with over 3 months of hands-on experience in front-end web development.
          My expertise includes using technologies such as <strong>HTML</strong>, <strong>HTML</strong>, <strong>HTML</strong> Bootstrap. As a problem solver,
          I have successfully designed and developed user-friendly, responsive web applications.
        </p> */}
        <p>
  <strong>👨‍💻 About Me:</strong> I am a passionate Front-End Developer with over 3 months of hands-on experience building responsive and user-friendly web applications. My expertise lies in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, along with frameworks like <strong>React</strong>. I am a problem solver who thrives on creating seamless user interfaces and delivering clean, efficient code.
</p>

      </div>
    </section>
  );
};

export default About;
