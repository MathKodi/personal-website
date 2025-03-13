import React from 'react';
import TechIcon from '../UI/TechIcon';
import './Skills.css';

const HardSkills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", icon: "js" },
        { name: "React.js", icon: "react" },
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "node" },
        { name: "Express.js", icon: "express" },
        { name: "Java", icon: "java" }
      ]
    },
    {
      title: "Banco de Dados",
      skills: [
        { name: "MongoDB", icon: "mongodb" }
      ]
    },
    {
      title: "Análise de Dados",
      skills: [
        { name: "Python", icon: "python" }
      ]
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", icon: "figma" }
      ]
    }
  ];

  return (
    <section className="hard-skills-section">
      <h2 className="section-title">Hard Skills</h2>
      <hr className='hero-line'/>
      
      <div className="skill-categories">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <TechIcon name={skill.icon} />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HardSkills;