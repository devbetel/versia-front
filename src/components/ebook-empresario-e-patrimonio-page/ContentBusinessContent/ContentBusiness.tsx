import "./styles.css";

const ContentModules = () => {
  const modules = [
    {
      id: 1,
      badge: "Fundação",
      title: "Módulo 1 a 3: A Virada de Chave & Organização do Pró-labore",
      description: "Entenda a psicologia por trás da 'Contabilidade Mental'. Aprenda o passo a passo exato para definir seu salário ideal e separar de vez a Pessoa Física da Pessoa Jurídica.",
      icon: "💡",
      progress: 100
    },
    {
      id: 2,
      badge: "Estratégia",
      title: "Módulo 4: A Estratégia dos 3 Baldes",
      description: "Descubra como dividir seu dinheiro entre a Reserva de Segurança, os Projetos de Médio Prazo e o Balde da Liberdade (aposentadoria), usando o poder dos juros compostos a seu favor.",
      icon: "🪣",
      progress: 100
    },
    {
      id: 3,
      badge: "Proteção",
      title: "Módulo 5 e 6: Blindagem Familiar e Visão de Longo Prazo",
      description: "Como proteger sua família contra riscos jurídicos e de saúde (DIT, seguros estratégicos) e desenhar as 3 saídas possíveis para o futuro da sua empresa.",
      icon: "🛡️",
      progress: 100
    },
    {
      id: 4,
      badge: "Prática",
      title: "Módulos Práticos: Ferramentas & Plano de Ação de 30 Dias",
      description: "Planilha de separação de contas, a Matriz de Margem vs. Volume e um cronograma passo a passo para você aplicar tudo sem se sobrecarregar.",
      icon: "📊",
      progress: 100
    }
  ];

  return (
    <>
      <section className="content-section">
        <div className="content-bg-dots"></div>
        <div className="content-bg-glow content-bg-glow--left"></div>
        <div className="content-bg-glow content-bg-glow--right"></div>

        <div className="content-container">
          <div className="content-header">
            <div className="header-badge" data-aos="fade-down">
              <div className="header-badge__dot"></div>
              <span className="header-badge__text">O Conteúdo</span>
            </div>
            
            <h2 className="content-title" data-aos="fade-up" data-aos-delay="100">
              O que você vai dominar ao longo deste <span className="content-emphasis">Guia Prático</span>
            </h2>
            
            <p className="content-subtitle" data-aos="fade-up" data-aos-delay="200">
              Este não é um livro teórico de contabilidade. É um <strong>manual prático e estratégico</strong> desenhado especificamente para donos de negócios que decidiram parar de ser reféns do próprio faturamento.
            </p>
          </div>

          <div className="modules-wrapper">
            <div className="modules-grid">
              {modules.map((module, index) => (
                <div 
                  key={module.id} 
                  className="module-card" 
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
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

          <div className="content-cta-wrapper">
            <div className="cta-card" data-aos="fade-up" data-aos-delay="100">
              <div className="cta-icon" data-aos="zoom-in" data-aos-delay="200">🎯</div>
              <h3 className="cta-title" data-aos="fade-up" data-aos-delay="300">Organização não engessa; organização liberta</h3>
              <p className="cta-subtitle" data-aos="fade-up" data-aos-delay="400">
                Deixar para investir "o que sobrar" é a receita para nunca acumular riqueza. Mude a regra do jogo hoje.
              </p>
              <button className="cta-button" data-aos="fade-up" data-aos-delay="500">
                <a href="https://pay.kiwify.com.br/uy7eMQF">
                Quero Construir Meu Patrimônio
                </a>
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentModules;