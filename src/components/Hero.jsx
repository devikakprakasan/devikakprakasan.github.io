import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
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
          <div className="tech-orbit">
            <div className="center-icon glass">
              <FaReact size={50} color="#61DAFB" />
            </div>
            
            <div className="orbit-path path-1">
              <div className="orbit-icon-wrapper" style={{ animationDelay: '0s' }}>
                <SiJavascript size={24} color="#F7DF1E" className="orbit-icon" />
              </div>
              <div className="orbit-icon-wrapper" style={{ animationDelay: '-5s' }}>
                <FaHtml5 size={24} color="#E34F26" className="orbit-icon" />
              </div>
            </div>

            <div className="orbit-path path-2">
              <div className="orbit-icon-wrapper" style={{ animationDelay: '-2s' }}>
                <FaCss3Alt size={24} color="#1572B6" className="orbit-icon" />
              </div>
              <div className="orbit-icon-wrapper" style={{ animationDelay: '-7s' }}>
                <SiTailwindcss size={24} color="#06B6D4" className="orbit-icon" />
              </div>
            </div>

            <div className="orbit-path path-3">
              <div className="orbit-icon-wrapper" style={{ animationDelay: '-4s' }}>
                <FaNodeJs size={24} color="#339933" className="orbit-icon" />
              </div>
              <div className="orbit-icon-wrapper" style={{ animationDelay: '-9s' }}>
                <FaDatabase size={24} color="#4DB33D" className="orbit-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
