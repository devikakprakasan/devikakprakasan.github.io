import React from 'react';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import FadeIn from './FadeIn';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="section-title hide-on-scroll">My Journey</h2>
        <p className="section-subtitle hide-on-scroll delay-1">A timeline of my professional experience and education.</p>
        
        <div className="experience-wrapper">
          <div className="timeline-line"></div>
          
          <div className="experience-items">
            <FadeIn direction="up" delay={0.2} className="exp-item">
              <div className="exp-dot"></div>
              <div className="exp-content">
                <div className="exp-header">
                  <span className="exp-date">2026 – Present</span>
                  <h4 className="exp-title">Frontend Developer Intern</h4>
                  <h5 className="exp-company">Thinking Code Technologies Pvt. Ltd. | Kochi, Kerala</h5>
                </div>
                <div className="exp-body">
                  <p>Built dynamic and responsive frontend interfaces using React.js and Next.js. Followed component-based architecture principles to ensure UI consistency and optimised performance.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="exp-item">
              <div className="exp-dot"></div>
              <div className="exp-content">
                <div className="exp-header">
                  <span className="exp-date">2024 – 2026</span>
                  <h4 className="exp-title">Master of Computer Applications</h4>
                  <h5 className="exp-company">Rajagiri College of Social Sciences, Kalamassery</h5>
                </div>
                <div className="exp-body">
                  <p>Specialized in advanced software engineering, AI concepts, and full-stack development methodologies. CGPA: 7.70</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="exp-item">
              <div className="exp-dot"></div>
              <div className="exp-content">
                <div className="exp-header">
                  <span className="exp-date">2021 – 2024</span>
                  <h4 className="exp-title">Bachelor of Computer Applications</h4>
                  <h5 className="exp-company">Calicut University</h5>
                </div>
                <div className="exp-body">
                  <p>Foundational studies in programming, database management, and web technologies. CGPA: 8.36</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
