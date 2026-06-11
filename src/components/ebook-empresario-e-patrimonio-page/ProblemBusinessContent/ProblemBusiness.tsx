import React from 'react';
import './styles.css';

const ProblemBusinessSection: React.FC = () => {
  const symptoms = [
    "Falta de previsibilidade financeira no negócio",
    "Contas pessoais e da empresa misturadas (o CNPJ virou sua carteira)",
    "Retiradas desorganizadas e decisões baseadas na emoção",
    "Excesso de trabalho e zero liberdade para desfrutar do que constrói"
  ];

  return (
    <section className="problem-section">
      <div className="problem-container">
        <h2 className="problem-title" data-aos="fade-down">
          O jogo invisível que está <span className="problem-emphasis">drenando o seu esforço</span>
        </h2>
        
        <div className="problem-content">
          <p className="problem-text" data-aos="fade-down">
            Empreender exige coragem. Mas existe uma verdade silenciosa nos bastidores do mercado 
            corporativo: <strong>muitas empresas faturam alto, mas não geram riqueza real para o dono.</strong>
          </p>
          
          <p className="problem-text" data-aos="fade-down">
            Você enfrenta o estresse diário da operação, gerencia equipes e lida com impostos complexos. 
            No final do mês, no entanto, fica apenas com a sensação de estar "apagando incêndios" e 
            girando o caixa sem construir patrimônio pessoal duradouro.
          </p>
        </div>

        <div className="symptoms-box" data-aos="fade-right">
          <h3 className="symptoms-title">
            Se você se identifica com algum desses sintomas, você está preso no ciclo invisível:
          </h3>
          
          <ul className="symptoms-list">
            {symptoms.map((symptom, index) => (
              <li key={index} className="symptom-item">
                <span className="symptom-icon">⚠</span>
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div className="risk-alert" data-aos="fade-up">
          <div className="alert-icon">⚡</div>
          <div className="alert-content">
            <h4 className="alert-title">O Risco Real e Imediato</h4>
            <p className="alert-text">
              Com a fiscalização digital e a evolução tributária automatizada por inteligência artificial, 
              misturar contas físicas e jurídicas não é mais apenas uma "bagunça de controle". Agora, é 
              um <strong>risco fiscal severo de autuação imediata.</strong> A organização financeira 
              tornou-se um item crítico de sobrevivência corporativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemBusinessSection;