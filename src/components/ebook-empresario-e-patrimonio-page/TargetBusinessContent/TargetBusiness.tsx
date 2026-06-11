import React from 'react';
import './styles.css';

const TargetBusinessSection: React.FC = () => {
  const criteria = [
    "Deseja retirar o dinheiro certo do negócio sem sufocar o capital de giro da empresa.",
    "Busca blindar sua estrutura familiar contra instabilidades do mercado ou riscos tributários.",
    "Quer usar ferramentas práticas que exigem apenas 15 minutos semanais para o monitoramento da sua saúde financeira."
  ];

  return (
    <section className="target-section">
      <div className="target-container">
        <h2 className="target-title" data-aos="fade-down">
          Este manual foi feito <span className="target-emphasis">para você?</span>
        </h2>

        <div className="criteria-list" data-aos="fade-right">
          {criteria.map((criterion, index) => (
            <div key={index} className="criterion-item">
              <div className="checkbox-icon" data-aos="fade-up">✓</div>
              <p className="criterion-text" data-aos="fade-up">{criterion}</p>
            </div>
          ))}
        </div>

        <button className="target-cta" data-aos="fade-up">
          SIM! QUERO CONSTRUIR MEU PATRIMÔNIO
          <span className="cta-arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default TargetBusinessSection;