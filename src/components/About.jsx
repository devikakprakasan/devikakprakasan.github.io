import { motion } from 'framer-motion';
import { FiCode, FiLayout } from 'react-icons/fi';
import FadeIn from './FadeIn';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <FadeIn direction="up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A brief introduction to who I am and what I do.</p>
        </FadeIn>
        
        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
        <div className="about-wrapper">
          <motion.div className="about-main" variants={itemVariants}>
            <h3 className="about-highlight">Driven by curiosity, powered by code.</h3>
            <p className="about-p">
              I am an MCA graduate and Frontend Developer Intern with a passion for building seamless digital experiences. 
              My journey is rooted in a strong academic foundation (BCA/MCA) and a constant drive to master modern web technologies.
            </p>
            <p className="about-p">
              I specialize in React, Next.js, and crafting user interfaces that are not only functional but also visually compelling. 
              I believe in the power of clean code and thoughtful design to solve complex problems.
            </p>
          </motion.div>
          
          <div className="about-stats">
            <div className="stat-box">
              <span className="stat-num">8.36</span>
              <span className="stat-label">BCA CGPA</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">7.7</span>
              <span className="stat-label">MCA CGPA</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
