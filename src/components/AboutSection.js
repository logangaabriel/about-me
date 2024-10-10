import React from 'react';
import foto from '../assets/me.jpg';
import ContactButton from './ContactButton';

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>Sobre mim.</h1>
          <p>
            Olá, meu nome é Gabriel Logan. Sou um escritor amador, apaixonado por tecnologia e sempre ávido por aprender coisas novas. 
            Trabalho como QA, onde ajudo empresas a prosperar no mundo digital através de testes e desenvolvimento de soluções únicas.
             Além da tecnologia, também sou um grande admirador de arte e música, que me inspiram em diferentes aspectos da minha vida. 
             Adoro inovar e criar, sempre buscando maneiras de unir minhas paixões em projetos criativos e significativos. 
            Também sou criador de conteúdo do "Cadê Meu Inseto".
          </p>
          <ContactButton />
        </div>
      </div>
      <div className="about-image">
        <img src={foto} alt="About" />
      </div>
    </div>
  );
};

export default AboutSection;
