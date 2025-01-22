

import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'MovieFinder',
    description: 'Developed a responsive movie search app using HTML, CSS, and JavaScript, integrating a movie API to display real-time titles, ratings, and posters dynamically.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    // demoLink: 'https://example.com/project1',
    codeLink: 'https://github.com/KumarGosala24/Movie-Search-Applications'
  },
  {
    id: 2,
    title: 'Amazon-WebShopClone',
    description: 'Built a dynamic e-commerce platform with shopping cart functionality, enabling seamless product browsing, adding to cart, and checkout experiences.🛒💻',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    // demoLink: 'https://example.com/project2',
    codeLink: 'https://github.com/KumarGosala24/Amazon-WebShopClone'
  },
  {
    id: 3,
    title: 'My Creative Journey',
    description: 'Created a personal portfolio website to showcase my skills, projects, and achievements with a clean and responsive design.💼✨',
    technologies: ['HTML','CSS','React'],
    // demoLink: 'https://example.com/project3',
    codeLink: 'https://github.com/KumarGosala24/my-portfolio'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>🚀 Projects</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">💻 Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
