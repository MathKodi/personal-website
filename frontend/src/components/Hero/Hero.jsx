import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <section className='hero' id="about">
        <div className='hero-content'>
            <h1 className='hero-name'>Matheus Kodi Y.</h1>
            <hr className='hero-line'/>

            <div className='hero-badges'>
                <span className='badge'>Estudante</span>
                <span className='badge'>Desenvolvedor Web</span>
            </div>

            <p className='hero-description'>
                Olá! meu nome é Kodi, tenho 20 anos e sou estudante 
                de análise e desenvolvimento de sistemas na UTFPR. Atualmente, estou 
                procurando minha primeira oportunidade na área dev como estagiário.
            </p>

            <div className='hero-links'>
                <a href='link pra algum lugar' className='cv-button' target="_blank" rel="noopener noreferrer">
                    Baixar CV
                </a>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/matheus-kodi-y-b341a9234/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={48} />
                    </a>
                    <a href="https://github.com/MathKodi" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={48} />
                    </a>
                </div>
            </div>
        </div>
        <div className='hero-image'>
            <img src='/images/profile.png' alt='eu' />
        </div>
    </section>
  );
}

export default Header;