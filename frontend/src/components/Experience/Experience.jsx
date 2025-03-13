import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      period: "2023 - Presente",
      company: "Unect (Empresa Júnior)",
      role: "Assessor de Design",
      responsibilities: [
        "Prototipagem de alta fidelidade de uma landing page para um especialista em agricultura de precisão",
        "Prototipagem de alta fidelidade de um site e blog para o Instituto Econacional de Desenvolvimento",
        "Prototipagem de alta fidelidade do site e de uma landing page para prospecção da Unect"
      ]
    },
    {
      period: "2023 - 2024",
      company: "Abrindo Portas (Projeto de Extensão)",
      role: "Assessor de Material",
      responsibilities: [
        "Criação de exercícios criativos e tradicionais e provas em inglês para os alunos do projeto"
      ]
    }
  ];

  return (
    <section className="experience-section">
      <h2 className="section-title">Experiência</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{exp.period}</div>
            <div className="timeline-content">
              <h3 className="timeline-role">{exp.role} - {exp.company}</h3>
              <ul className="timeline-responsibilities">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>
                    <span className="bullet">•</span>{responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;