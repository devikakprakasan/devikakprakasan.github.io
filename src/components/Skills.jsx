import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C"],
      delay: "1"
    },
    {
      title: "Tools & Frameworks",
      skills: ["Laravel", "Git", "GitHub"],
      delay: "2"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS"],
      delay: "3"
    },
    {
      title: "Database Management",
      skills: ["MySQL", "PostgreSQL"],
      delay: "4"
    },
    {
      title: "Mobile Development",
      skills: ["Android"],
      delay: "5"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title hide-on-scroll">Technical Arsenal</h2>
        <p className="section-subtitle hide-on-scroll">A comprehensive look at the tools and technologies I use to build solutions.</p>
        
        <div className="skills-grid">
          {categories.map((category, index) => (
            <div key={index} className={`skill-card glass hide-on-scroll delay-${category.delay} hover-lift`}>
              <h3 className="skill-title gradient-text">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
