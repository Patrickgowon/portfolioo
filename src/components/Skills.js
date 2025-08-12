import { useState } from 'react';
import '../styles/animations.css';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 70 },
      { name: 'JavaScript', level: 70 },
      { name: 'React', level: 70 },
      { name: 'TypeScript', level: 75 },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 40 },
      { name: 'Express', level: 40 },
      { name: 'Python', level: 50 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 30 },
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 65 },
      { name: 'VS Code', level: 95 },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title slide-in">My Skills</h2>
          <p className="section-subtitle fade-in">What I'm good at</p>
        </div>
        
        <div className="skills-categories fade-in">
          {skillsData.map((category) => (
            <button
              key={category.category}
              className={`category-btn ${activeCategory === category.category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>
        
        <div className="skills-list fade-in delay-1">
          {skillsData
            .find(category => category.category === activeCategory)
            .skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}% `}}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;