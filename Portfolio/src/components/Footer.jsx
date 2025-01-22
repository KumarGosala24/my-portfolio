

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} MyPortfolio. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/KumarGosala24" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kumar-gosala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:kumargosala24@gmail.com?subject=Inquiry%20from%20Portfolio">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
