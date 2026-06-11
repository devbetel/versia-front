import React from 'react';
import './styles.css';

interface VersionProps {
  isActive?: boolean;
  label: string;
  name: string;
  price: string;
  description: string;
}

const Version: React.FC<VersionProps> = ({
  isActive = false,
  label,
  name,
  price,
  description
}) => (
  <div className={`ver ${isActive ? 'active' : ''}`}>
    <div className="ver-label">{label}</div>
    <div className="ver-name">{name}</div>
    <div className="ver-price"><sup>R$</sup>{price}</div>
    <div className="ver-desc">{description}</div>
  </div>
);


const Hero: React.FC = () => {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('oferta');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-tag" data-aos="fade-down">Pesquisa & Comportamento</span>
        
        <h1 className="hero-title" data-aos="fade-left">
          O Jogo<br />
          <span className="line-gold">invisível</span><br />
          do Dinheiro
          <span className="line-muted">
            Por que você trabalha tanto e o dinheiro nunca sobra?
          </span>
        </h1>
        
        <div className="hero-divider" data-aos="fade-left"></div>
        
        <p className="hero-sub" data-aos="fade-left">
          Não é falta de disciplina. Não é irresponsabilidade. É que existe um 
          sistema — histórico, psicológico e financeiro — que foi desenhado para 
          você não entender. Este e-book explica esse sistema de dentro para fora.
        </p>
        
        <div className="versions" data-aos="fade-bottom">
          <Version
            isActive
            label="Versão simples"
            name="Só o e-book"
            price="26,90"
            description="PDF completo · acesso imediato"
          />
          <Version
            label="Versão completa"
            name="E-book + Masterclass"
            price="98,90"
            description="PDF + aula aprofundada comigo"
          />
        </div>
        
        <a href="#oferta" className="btn-hero" data-aos="fade-up"  onClick={handleCTAClick}>
          Quero entender o jogo
        </a>
      </div>
      
      <div className="hero-right">
        <div className="book-wrap">
          <div className="book" data-aos="fade-right">
            <div className="book-stripe"></div>
            <span className="book-badge">Vérsia Finance</span>
            <div className="book-title-main">
              O Jogo<span className="book-title-italic">invisível</span>do Dinheiro
            </div>
            <div className="book-line"></div>
            <div className="book-author">
              Danielle Borges<br />
              CFP® · Especialista em Comportamento
            </div>
          </div>
          <div className="book-shadow"></div>
        </div>
        <p className="book-access">Acesso imediato após a compra</p>
      </div>
    </section>
  );
};

export default Hero;