import React from 'react';
import "./styles.css";

interface Module {
  title: string;
  description: string;
  icon: string;
  badge: string;
}

const ContentBusinessSection: React.FC = () => {
  const modules: Module[] = [
    {
      title: "Gestão de Pró-Labore",
      description: "Rompa a ilusão da contabilidade mental. Aprenda o método exato para separar seu salário da conta jurídica e ter clareza total de caixa.",
      icon: "💰",
      badge: "Módulos 1-3"
    },
    {
      title: "Estratégia dos 3 Baldes",
      description: "Aloque o capital de forma inteligente: divida seus recursos em Reserva de Segurança, Projetos de Médio Prazo e o Balde da Liberdade.",
      icon: "🎯",
      badge: "Módulo 4"
    },
    {
      title: "Blindagem Familiar",
      description: "A empresa é o motor, você é o operador. Proteja seu negócio e sua família contra contingências com estruturas jurídicas e de seguros adequadas.",
      icon: "🛡️",
      badge: "Módulos 5-6"
    },
    {
      title: "Ferramentas e Ação",
      description: "Acesse planilhas otimizadas de separação de contas, matrizes de margem de lucro e um plano de ação direto focado para os próximos 30 dias.",
      icon: "📊",
      badge: "Práticos"
    }
  ];

  return (
    <section className="content-section">
      {/* Background Elements */}
      <div className="content-bg-dots"></div>
      <div className="content-bg-glow content-bg-glow--left"></div>
      <div className="content-bg-glow content-bg-glow--right"></div>
      
      <div className="content-container">
        <div className="content-header">
          <div className="header-badge" data-aos="fade-down">
            <span className="header-badge__dot"></span>
            <span className="header-badge__text">Conteúdo Premium</span>
          </div>
          
          <h2 className="content-title" data-aos="fade-down" data-aos-delay="100">
            O que você vai <span className="content-emphasis">dominar</span> 
            <br />no Guia Prático
          </h2>
          
          <p className="content-subtitle" data-aos="fade-down" data-aos-delay="200">
            4 módulos estratégicos desenvolvidos para transformar 
            <strong> seu conhecimento em resultados práticos</strong>
          </p>
        </div>

        <div className="modules-wrapper" data-aos="fade-up" data-aos-delay="300">
          <div className="modules-grid">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className="module-card"
                data-aos="fade-up"
                data-aos-delay={400 + (index * 100)}
              >
                {/* Card Header */}
                <div className="module-header">
                  <div className="module-badge">{module.badge}</div>
                  <div className="module-icon">{module.icon}</div>
                </div>
                
                {/* Card Content */}
                <div className="module-content">
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-description">{module.description}</p>
                </div>
                
                {/* Card Footer */}
                <div className="module-footer">
                  <div className="module-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${(index + 1) * 25}%`}}></div>
                    </div>
                    <span className="progress-text">Módulo {index + 1}</span>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="module-overlay"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="content-cta-wrapper" data-aos="fade-up" data-aos-delay="800">
          <div className="cta-card">
            <div className="cta-icon">🚀</div>
            <h3 className="cta-title">Pronto para começar sua jornada?</h3>
            <p className="cta-subtitle">Acesse todo o conteúdo agora e transforme sua gestão financeira</p>
            <button className="cta-button">
              <span className="cta-text">COMEÇAR AGORA</span>
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBusinessSection;