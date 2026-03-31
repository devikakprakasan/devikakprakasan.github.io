import React from 'react';
import { FiCode, FiLayout } from 'react-icons/fi';
import FadeIn from './FadeIn';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <FadeIn direction="up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle delay-1">A brief introduction to who I am and what I do.</p>
        </FadeIn>
        
        <div className="about-grid">
          <FadeIn direction="right" delay={0.2} className="about-text">
            <p className="lead-text">
              I am a driven MCA student at Rajagiri College of Social Sciences, 
              graduating with a CGPA of 7.67. Before that, I completed my BCA at 
              Calicut University with an 8.36 CGPA.
            </p>
            <p>
              My journey in software development is fueled by a passion for creating 
              clear, user-friendly solutions. I am a fast learner with strong 
              problem-solving skills, and I pride myself on providing reliable 
              results whether working independently or in a team.
            </p>
            <p>
              Currently, I am working as a Frontend Developer Intern, honing my 
              skills in scalable component-based architecture and dynamic user 
              interfaces using cutting edge tools like React.js and Next.js.
            </p>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.4} className="about-cards">
             <div className="feature-card glass hover-lift">
               <div className="feature-icon"><FiCode size={28} /></div>
               <h3 className="feature-title">Web Development</h3>
               <p className="feature-desc">Building responsive, high-performance web applications using modern JavaScript frameworks.</p>
             </div>
             
             <div className="feature-card glass hover-lift delay-1">
               <div className="feature-icon"><FiLayout size={28} /></div>
               <h3 className="feature-title">Frontend Design</h3>
               <p className="feature-desc">Focusing on component-based architecture for UI consistency and optimal user experience.</p>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
