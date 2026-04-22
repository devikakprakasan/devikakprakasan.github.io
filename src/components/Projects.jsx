import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import FadeIn from './FadeIn';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <FadeIn 
      direction="up" 
      delay={0.1 * ((index % 4) + 1)}
      className="project-card-wrapper"
    >
      <div className="project-card-inner">
        <div className="project-image-box">
          <img src={project.image} alt={project.title} className="project-img" />
          <div className="project-overlay">
            <div className="project-links">
              <a href={project.links.github} target="_blank" rel="noreferrer" className="p-link"><FiGithub /></a>
              <a href={project.links.live} className="p-link"><FiExternalLink /></a>
            </div>
          </div>
        </div>
        
        <div className="project-info">
          <span className="p-tag">{project.tags}</span>
          <h3 className="p-title">{project.title}</h3>
          <p className="p-desc">{project.description}</p>
          
          <div className="p-tech-stack">
            {project.tech.map((tech, i) => (
              <span key={i} className="p-tech">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

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
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
