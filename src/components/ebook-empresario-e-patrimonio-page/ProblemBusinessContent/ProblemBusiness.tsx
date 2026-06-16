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
         Conheça o E-book: <span className="problem-emphasis">Patrimônio, Lucro & Organização Inteligente</span>
        </h2>
        <div className="problem-content">
          <p className="problem-text" data-aos="fade-down">
            O Material Aprofundado de Apoio para Empresários de Sucesso.  Este não é um livro teórico de contabilidade. É um manual prático e estratégico desenhado especificamente para donos de negócios de produtos e serviços que decidiram parar de ser reféns do próprio faturamento.  Você vai aprender as regras do jogo para que a sua empresa seja o motor que gera riqueza, e a sua mente seja o volante que direciona esse dinheiro para o lugar certo  </p>
          
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