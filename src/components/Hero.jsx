import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import ParticleBackground from './ParticleBackground';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <ParticleBackground />
      <div className="container hero-container" style={{ zIndex: 10 }}>
        <div className="hero-content hide-on-scroll">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Devika K P</h1>
          <h2 className="hero-role">
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'MCA Student',
                2000,
                'UI/UX Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="gradient-text"
              repeat={Infinity}
            />
          </h2>
          <p className="hero-description">
            Motivated software developer from Thrissur, Kerala. I focus on building clear, user-friendly
            solutions and dynamic web interfaces. Committed to steady growth, reliable results, and modern design aesthetics.
          </p>
          
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight className="btn-icon" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devikaprakasan123@gmail.com" target="_blank" rel="noreferrer" className="btn btn-secondary glass">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/devikakprakasan" target="_blank" rel="noreferrer" className="social-icon">
              <FiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/devikakp" target="_blank" rel="noreferrer" className="social-icon">
              <FiLinkedin size={22} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devikaprakasan123@gmail.com" target="_blank" rel="noreferrer" className="social-icon">
              <FiMail size={22} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual hide-on-scroll delay-1">
          <div className="floating-shape shape-1 glass"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3 glass"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
