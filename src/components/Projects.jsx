import React from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import FadeIn from './FadeIn';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Learning Disability Prediction System",
      description: "AI-driven platform for early detection of learning disabilities featuring automated evaluations and role-based dashboards.",
      highlights: [
        "Decision Tree algorithms (Gini / Information Gain)",
        "Over 85% predictive accuracy",
        "Interactive dashboard for educators"
      ],
      tech: ["Python", "Android", "MySQL", "Apache"],
      tags: "Machine Learning / Mobile",
      image: "/projects/project1.png",
      links: { github: "https://github.com/devikakprakasan", live: "#" }
    },
    {
      title: "ASL-to-LLM Communication System",
      description: "A real-time deep learning system that translates American Sign Language into text and voice to empower deaf-mute individuals.",
      highlights: [
        "InceptionV3 Deep Learning model",
        "High accuracy gesture recognition",
        "Seamless text and voice output integration"
      ],
      tech: ["Python", "Flask", "OpenCV"],
      tags: "Deep Learning / Web",
      image: "/projects/project2.png",
      links: { github: "https://github.com/devikakprakasan", live: "#" }
    },
    {
      title: "Quiz Application",
      description: "An interactive online testing platform designed for streamlined quiz delivery and student performance tracking.",
      highlights: [
        "User registration and role-based access",
        "Dynamic score evaluation logic",
        "Real-time feedback mechanisms"
      ],
      tech: ["Java", "Android Studio", "SQLite"],
      tags: "Mobile / Database",
      image: "/projects/project3.png",
      links: { github: "https://github.com/devikakprakasan", live: "#" }
    },
    {
      title: "To-Do List Web Application",
      description: "A secure task management application built with Laravel MVC framework for streamlined daily productivity.",
      highlights: [
        "Secure user authentication system",
        "Full CRUD operations for tasks",
        "Responsive, minimal frontend styling"
      ],
      tech: ["Laravel", "MySQL", "HTML", "CSS"],
      tags: "Full Stack / Web",
      image: "/projects/project4.png",
      links: { github: "https://github.com/devikakprakasan", live: "#" }
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <FadeIn direction="up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some things I've built recently.</p>
        </FadeIn>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <FadeIn 
              key={index} 
              direction="up" 
              delay={0.1 * ((index % 4) + 1)}
              className={`project-card glass ${index === 3 ? 'centered-last' : ''}`}
            >
              <div 
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.parentElement.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.parentElement.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.parentElement.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-content-layer">
                  <div className="project-top">
                    <span className="project-tag gradient-text">{project.tags}</span>
                    <div className="project-links">
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link" aria-label="Github Repo"><FiGithub size={20} /></a>
                      <a href={project.links.live} className="project-link" aria-label="Live Demo"><FiExternalLink size={20} /></a>
                    </div>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <ul className="project-highlights">
                    {project.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
