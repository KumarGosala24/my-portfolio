

import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#home">SOWJANYA KUMAR GOSALA</a>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
