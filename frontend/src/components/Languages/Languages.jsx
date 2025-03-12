import React from 'react';
import './Languages.css';

const Languages = () => {
  const languages = [
    { language: "Português", level: "Nativo", proficiency: 100 },
    { language: "Inglês", level: "Nível B2 - Intermediário-alto", proficiency: 75 }
  ];

  return (
    <section className="languages-section">
      <h2 className="section-title">Idiomas</h2>
      
      <div className="languages-grid">
        {languages.map((lang, index) => (
          <div key={index} className="language-card">
            <h3 className="language-name">{lang.language}</h3>
            <span className="language-level">{lang.level}</span>
            <div className="proficiency-bar">
              <div 
                className="proficiency-level" 
                style={{ width: `${lang.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;