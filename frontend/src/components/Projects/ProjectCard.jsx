import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        {project.live && ( 
          <div className="project-links">
            <a href={project.github} className="project-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
