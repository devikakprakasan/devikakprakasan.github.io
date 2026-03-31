import { FiAward, FiCheckCircle } from 'react-icons/fi';
import './Achievements.css';

const Achievements = () => {
  const certifications = [
    { title: "Software Engineering Job Simulation", issuer: "Accenture", date: "07/2025" },
    { title: "Web Development Fundamentals", issuer: "IBM SkillsBuild", date: "05/2025" },
    { title: "Advanced AI Program", issuer: "TechySpot", date: "06/2025" },
    { title: "DBA Workshop", issuer: "Inspired Software Development", date: "10/2024" }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container">
        
        <div className="achievements-container">
          <div className="hackathon-block glass hide-on-scroll">
            <div className="flex-header">
              <h2 className="section-title text-left mb-0">Hackfest Achievement</h2>
              <FiAward className="award-icon gradient-text" size={60} />
            </div>
            
            <div className="hackathon-content mt-4">
              <span className="timeline-date">SAP • 08/2025</span>
              <h3 className="project-title mt-2">SAP Hackfest 2025</h3>
              <p className="project-desc" style={{ fontSize: '1.1rem' }}>
                Advanced to the state level as Team QuadHive with Vidhyasaathi, an AI-driven prototype 
                for early detection of learning disabilities, providing adaptive dashboards and 
                actionable insights for teachers.
              </p>
            </div>
          </div>

          <div className="certifications-block hide-on-scroll delay-2">
            <h2 className="section-title text-left mb-4">Certifications & Workshops</h2>
            
            <div className="certs-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item glass hover-lift delay-1">
                  <FiCheckCircle className="cert-icon" size={24} />
                  <div className="cert-details">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">
                      <span className="text-highlight">{cert.issuer}</span> • {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Achievements;
