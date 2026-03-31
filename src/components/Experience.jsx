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
        
        <div className="timeline-container">
          <div className="timeline-block experience-block">
            <FadeIn direction="up">
              <h3 className="timeline-heading">Work Experience</h3>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="timeline-item">
              <div className="timeline-dot bg-gradient">
                <FiBriefcase size={20} color="white" />
              </div>
              <div className="timeline-content glass hover-lift">
                <div className="timeline-date">01/2026 – Present</div>
                <h4 className="timeline-title">Frontend Developer Intern</h4>
                <h5 className="timeline-subtitle">Thinking Code Technologies Pvt. Ltd. | Kochi, Kerala</h5>
                <ul className="timeline-details">
                  <li>Built dynamic and responsive frontend interfaces using React.js and Next.js.</li>
                  <li>Followed component-based architecture principles to ensure UI consistency and optimised frontend performance.</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <div className="timeline-block education-block mt-5">
            <FadeIn direction="up" delay={0.2}>
              <h3 className="timeline-heading">Education</h3>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3} className="timeline-item">
              <div className="timeline-dot">
                <FiBookOpen size={20} color="white" />
              </div>
              <div className="timeline-content glass hover-lift">
                <div className="timeline-date">2024 – 2026</div>
                <h4 className="timeline-title">MCA (Master of Computer Applications)</h4>
                <h5 className="timeline-subtitle">Rajagiri College of Social Sciences, Kalamassery | CGPA: 7.67 (Up to Semester 4)</h5>
                <p className="timeline-desc">Specialized in advanced software engineering, AI concepts, and full-stack development methodologies.</p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4} className="timeline-item">
              <div className="timeline-dot">
                <FiBookOpen size={20} color="white" />
              </div>
              <div className="timeline-content glass hover-lift">
                <div className="timeline-date">2021 – 2024</div>
                <h4 className="timeline-title">BCA (Bachelor of Computer Applications)</h4>
                <h5 className="timeline-subtitle">Calicut University | CGPA: 8.36</h5>
                <p className="timeline-desc">Foundational studies in programming, database management, and web technologies.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
