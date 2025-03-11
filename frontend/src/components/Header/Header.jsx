import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Kodi Y.</div>
      <nav className="navigation">
        <ul>
          <li><a href="#about">Sobre mim</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li>
            <a href="/resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
              Baixar CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;