import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import ParticleBackground from './ParticleBackground';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="hero-section">
      <ParticleBackground />
      <div className="hero-container">
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/devika.jpg" alt="Devika K P" className="hero-portrait" />
        </motion.div>

        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot"></span> Available for projects
          </motion.div>
          
          <motion.p className="hero-greeting" variants={itemVariants}>Hi, I'm</motion.p>
          <motion.h1 className="hero-name" variants={itemVariants}>Devika K P<span>.</span></motion.h1>
          
          <motion.h2 className="hero-role" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'MCA Graduate',
                2000,
                'UI/UX Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="accent-text"
              repeat={Infinity}
            />
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            Building seamless digital experiences with a focus on clean code and modern design. 
            Based in Thrissur, Kerala.
          </motion.p>
          
          <motion.div className="hero-cta-group" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              My Works
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Resume <FiDownload />
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <a href="https://github.com/devikakprakasan" target="_blank" rel="noreferrer" className="social-icon">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/devikakp" target="_blank" rel="noreferrer" className="social-icon">
              <FiLinkedin />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
