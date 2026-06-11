import React from 'react';
import './styles.css';

const ContentModules = () => {
  const modules = [
    {
      id: 1,
      badge: "Fundação",
      title: "Introdução ao Trading",
      description: "Aprenda os conceitos fundamentais do mercado financeiro, terminologias essenciais e como funciona a negociação de ativos.",
      icon: "📚",
      progress: 85
    },
    {
      id: 2,
      badge: "Análise",
      title: "Análise Técnica",
      description: "Domine gráficos, indicadores e padrões para identificar oportunidades de compra e venda no mercado.",
      icon: "📊",
      progress: 60
    },
    {
      id: 3,
      badge: "Estratégia",
      title: "Gestão de Risco",
      description: "Desenvolva estratégias sólidas para proteger seu capital e maximizar seus lucros de forma consistente.",
      icon: "🛡️",
      progress: 75
    },
    {
      id: 4,
      badge: "Prática",
      title: "Psicologia do Trader",
      description: "Controle suas emoções, desenvolva disciplina e mantenha a consistência em suas operações.",
      icon: "🧠",
      progress: 40
    },
    {
      id: 5,
      badge: "Avançado",
      title: "Estratégias Avançadas",
      description: "Técnicas sofisticadas de trading, automação e estratégias utilizadas por traders profissionais.",
      icon: "🚀",
      progress: 25
    },
    {
      id: 6,
      badge: "Mercado",
      title: "Análise Fundamentalista",
      description: "Entenda como eventos econômicos e notícias impactam os preços dos ativos no mercado global.",
      icon: "🌍",
      progress: 90
    }
  ];

  return (
    <section className="content-section">
      {/* Background Elements */}
      <div className="content-bg-dots"></div>
      <div className="content-bg-glow content-bg-glow--left"></div>
      <div className="content-bg-glow content-bg-glow--right"></div>

      <div className="content-container">
        {/* Header */}
        <div className="content-header">
          <div className="header-badge">
            <div className="header-badge__dot"></div>
            <span className="header-badge__text">Módulos de Aprendizado</span>
          </div>
          
          <h2 className="content-title">
            Sua Jornada para se Tornar um <span className="content-emphasis">Trader de Sucesso</span>
          </h2>
          
          <p className="content-subtitle">
            Nosso curso é <strong>estruturado em módulos progressivos</strong> que te levam desde o básico até estratégias avançadas. 
            Cada módulo foi cuidadosamente desenvolvido para construir seu conhecimento de forma sólida e prática.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="modules-wrapper">
          <div className="modules-grid">
            {modules.map((module) => (
              <div key={module.id} className="module-card">
                <div className="module-overlay"></div>
                
                <div className="module-header">
                  <span className="module-badge">{module.badge}</span>
                  <div className="module-icon">{module.icon}</div>
                </div>

                <div className="module-content">
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-description">{module.description}</p>
                </div>

                <div className="module-footer">
                  <div className="module-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{module.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="content-cta-wrapper">
          <div className="cta-card">
            <div className="cta-icon">🎯</div>
            <h3 className="cta-title">Comece Sua Jornada Hoje</h3>
            <p className="cta-subtitle">
              Junte-se a milhares de alunos que já transformaram suas vidas com nosso método comprovado
            </p>
            <button className="cta-button">
              Iniciar Curso Agora
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentModules;