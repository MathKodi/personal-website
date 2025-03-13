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
            <a href="https://drive.google.com/file/d/1p0GZFWyKbV1d7yPtAn0PwCOS_PWKaTDE/view?usp=sharing" className="resume-button" target="_blank" rel="noopener noreferrer">
              Baixar CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;