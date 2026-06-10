import React from 'react';
import './styles.css';

function HeroMentoring() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero__circle" style={{width: '600px', height: '600px'}}></div>
      <div className="hero__circle" style={{width: '900px', height: '900px'}}></div>
      
      <div className="hero__content">
        <h1 className="hero__title">
          Mentoria Coletiva para<br />Autonomia Financeira Feminina
        </h1>
        
        <p className="hero__subtitle">
          Seja muito bem-vinda à sua nova jornada. Se você chegou até aqui, é porque você já 
          conquistou algo precioso: a sua independência. Você tem seu espaço, seu trabalho e 
          gera sua própria renda. Mas há uma pergunta essencial que precisamos fazer:
        </p>

        <div className="hero__quote">
          <p>
            <strong>Você tem, de fato, autonomia sobre o seu dinheiro?</strong>
          </p>
        </div>

        <p className="hero__subtitle" style={{marginBottom: '2.5rem'}}>
          A independência te tira do barco dos outros. A <strong>autonomia</strong> te dá o 
          poder de decidir o destino da sua vida.
        </p>

        <button className="hero__cta" onClick={scrollToPricing}>
          Quero Ter Autonomia Financeira
        </button>

        <p className="hero__badge">6 encontros • Máximo 30 mulheres • Online ao vivo</p>
      </div>
    </section>
  );
}

export default HeroMentoring;