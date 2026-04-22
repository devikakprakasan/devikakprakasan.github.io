import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaLaravel, FaGitAlt, FaGithub, 
  FaHtml5, FaCss3Alt, FaAndroid 
} from 'react-icons/fa';
import { SiC, SiMysql, SiPostgresql, SiJavascript, SiTailwindcss, SiFlask } from 'react-icons/si';
import FadeIn from './FadeIn';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Java", icon: <FaJava color="#007396" /> },
        { name: "C", icon: <SiC color="#A8B9CC" /> }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#fff" /> }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> }
      ]
    },
    {
      title: "Database Management",
      skills: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Android", icon: <FaAndroid color="#3DDC84" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <FadeIn direction="up">
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">A comprehensive look at the tools and technologies I use to build solutions.</p>
        </FadeIn>
        
        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.flatMap(cat => cat.skills).map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-box"
              variants={itemVariants}
            >
              <div className="skill-icon-wrapper">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
