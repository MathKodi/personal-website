import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-message">
          valeu por ler até aqui :{')'}
        </div>
        
        <div className="footer-socials">
          <span className="socials-label">sociais -{'>'}</span>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/matheus-kodi-y-b341a9234/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30}/>
            </a>
            <a href="https://github.com/MathKodi" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30}/>
            </a>
            <a href="https://www.instagram.com/_kodi.y/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30}/>
            </a>
            <a href="https://open.spotify.com/user/21waki7fyttcapqjmeb6fyuma?si=f092cb6ee5d64879" target="_blank" rel="noopener noreferrer">
              <FaSpotify size={30}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;