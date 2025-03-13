import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
   const projects = [
        {
          id: 1,
          title: "Satisfying.you - Aplicativo mobile",
          image: "/images/satisfy.png",
          description: "Mobile application for user satisfaction surveys",
          technologies: ["React Native", "JavaScript"],
          github: "https://github.com/zVihugo/prog_movel",
          live: true
        },
        {
          id: 2,
          title: "Projeto API Pokemon - Backend",
          image: "/images/apibackend.png",
          description: "Backend API for Pokemon data",
          technologies: ["Node.js", "Express", "MongoDB"],
          github: "https://github.com/MathKodi/ProjetoBackEnd",
          live: true
        },
        {
          id: 3,
          title: "Projeto React - API Zelda",
          image: "/images/zeldaapi.png",
          description: "React application using Zelda API",
          technologies: ["React", "JavaScript", "API Integration"],
          github: "https://github.com/MathKodi/Projeto2-WebFullstack",
          live: true
        },
        {
          id: 4,
          title: "Projeto API para Web Blog",
          image: "/images/apiwebblog.png",
          description: "Blog API for web applications",
          technologies: ["Node.js", "Express", "MongoDB"],
          github: "https://github.com/xLarsMc/Projeto-Full-Stack---Back-End",
          live: true
        },
        {
          id: 5,
          title: "Site Unect - Web Design",
          image: "/images/unect.png",
          description: "Web design for Unect company",
          technologies: ["HTML", "CSS", "JavaScript"],
          github: "#",
          live: false
        },
        {
          id: 6,
          title: "Instituto Econacional - Web Design",
          image: "/images/econacional.png",
          description: "Web design for Instituto Econacional",
          technologies: ["HTML", "CSS", "JavaScript"],
          github: "#",
          live: false
        }
      ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projetos</h2>
      <hr className="hero-line"></hr>
      
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;