import React from 'react';
import './styles.css';
import TransitionSection from '../../TransitionGradient/TransitionSection';

function HowItsWorks() {
  const howItWorks = {
    formato: [
      '100% online',
      'Encontros ao vivo',
      'Grupo pequeno',
      'Gravações por 6 meses'
    ],
    duracao: [
      '2 meses',
      '6 encontros ao vivo (15 horas de prática)'
    ],
    materiais: [
      'Planilha inteligente',
      'PDFs',
      'Testes de diagnóstico',
      'Exercícios comportamentais',
      'Pirâmide de Prioridades',
      'Regra de gasto personalizada',
      'Aula bônus'
    ]
  };

  const stats = [
    {
      number: '6',
      label: 'Encontros ao Vivo Online',
      description: 'Cada encontro tem 2h (ou mais, até que todas as dúvidas sejam sanadas). Formato exclusivo com conteúdo denso e aplicável.'
    },
    {
      number: '30',
      label: 'Mulheres por Turma (Máximo)',
      description: 'Vagas limitadas para garantir foco total, networking qualificado e atendimento próximo de cada participante.'
    },
    {
      number: '100%',
      label: 'Foco em Comportamento',
      description: 'Não é só planilha. É psicologia econômica, estratégia real e autonomia de verdade para você dominar o timão da sua vida.'
    }
  ];

  const paraQuemE = [
    'Ganha bem, mas sente que o dinheiro nunca acompanha o esforço.',
    'Vive no automático e não sabe explicar para onde o dinheiro vai.',
    'Sente culpa sempre que tenta organizar a vida financeira.',
    'Já tentou planilhas, apps e métodos prontos — e sempre volta ao mesmo lugar.',
    'Tem medo de olhar para números porque acha que vai descobrir algo "ruim".',
    'Sente que vive apagando incêndios mesmo tendo uma boa renda.',
    'Tem vergonha de pedir ajuda porque acha que "já deveria saber lidar com dinheiro".',
    'Quer clareza para decidir sem impulsos.',
    'Quer autonomia para viver com tranquilidade, não com improviso.',
    'Quer parar de sobreviver e começar a viver com lógica.'
  ];

  const paraQuemNaoE = [
    'Quer apenas quitar dívidas sem olhar para os padrões que criaram essas dívidas.',
    'Procura uma fórmula mágica para enriquecer rápido.',
    'Quer só aprender a investir sem antes organizar a vida financeira.',
    'Quer um orçamento rígido que não respeita sua rotina.',
    'Acredita que o problema é só ganhar mais.',
    'Não está disposto a olhar para a própria história e entender seus padrões.',
    'Quer terceirizar decisões sem assumir autonomia.'
  ];

  const benefits = [
    { title: 'Clareza', icon: '💎' },
    { title: 'Controle', icon: '🎯' },
    { title: 'Redução de vazamentos', icon: '🔒' },
    { title: 'Previsibilidade', icon: '📊' },
    { title: 'Segurança', icon: '🛡️' },
    { title: 'Autonomia', icon: '👑' }
  ];

  return (
    <div className="metodo-versia">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-eyebrow" data-aos="fade-down">
            A Mentoria Coletiva Método VÉRSIA
          </p>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            O processo que transforma <span className="accent">independência</span> em <span className="accent">autonomia real</span>
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Você não precisa de mais informação sobre dinheiro. Precisa de lógica aplicada ao seu comportamento.
          </p>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
            A Mentoria Coletiva Método VÉRSIA é o espaço onde você aprende a enxergar seus padrões, estancar a sangria financeira e construir um sistema que funciona na sua vida real — sem culpa, sem moralismo, sem fórmulas mágicas.
          </p>
          <p className="hero-process" data-aos="fade-up" data-aos-delay="400">
            É um processo de <strong>2 meses</strong>, totalmente prático, coletivo, guiado, criado para quem ganha bem, vive no automático e quer clareza, controle e autonomia financeira.
          </p>
        </div>
      </section>

      {/* Gradient Transition */}
      <TransitionSection />

      {/* Como Funciona na Prática */}
      <section className="pratica-section">
        <div className="pratica-content">
          <h2 className="section-title" data-aos="fade-up">
            Como funciona <span className="accent">na prática</span>
          </h2>
          
          <div className="pratica-grid">
            <div className="pratica-card" data-aos="fade-up" data-aos-delay="100">
              <h3 className="pratica-card-title">Formato</h3>
              <ul className="pratica-list">
                {howItWorks.formato.map((item, idx) => (
                  <li key={idx} data-aos="fade-right" data-aos-delay={150 + (idx * 50)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pratica-card" data-aos="fade-up" data-aos-delay="200">
              <h3 className="pratica-card-title">Duração</h3>
              <ul className="pratica-list">
                {howItWorks.duracao.map((item, idx) => (
                  <li key={idx} data-aos="fade-right" data-aos-delay={250 + (idx * 50)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pratica-card" data-aos="fade-up" data-aos-delay="300">
              <h3 className="pratica-card-title">Materiais</h3>
              <ul className="pratica-list">
                {howItWorks.materiais.map((item, idx) => (
                  <li key={idx} data-aos="fade-right" data-aos-delay={350 + (idx * 50)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-content">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="stat-card"
                data-aos="fade-up"
                data-aos-delay={100 + (idx * 150)}
              >
                <div 
                  className="stat-card__number"
                  data-aos="zoom-in"
                  data-aos-delay={150 + (idx * 150)}
                >
                  {stat.number}
                </div>
                <h3 
                  className="stat-card__label"
                  data-aos="fade-right"
                  data-aos-delay={200 + (idx * 150)}
                >
                  {stat.label}
                </h3>
                <p 
                  className="stat-card__desc"
                  data-aos="fade-up"
                  data-aos-delay={250 + (idx * 150)}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="para-quem-section">
        <div className="para-quem-content">
          <div className="para-quem-header" data-aos="fade-up">
            <p className="section-eyebrow">Para Quem É</p>
            <h2 className="section-title">
              O Método VÉRSIA é para quem já conquistou <span className="accent-2">independência</span> — e agora quer <span className="accent">autonomia real</span>
            </h2>
          </div>

          <div className="para-quem-list">
            {paraQuemE.map((item, idx) => (
              <div 
                key={idx} 
                className="para-quem-item"
                data-aos="fade-up"
                data-aos-delay={100 + (idx * 50)}
              >
                <span className="para-quem-bullet">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="para-quem-summary" data-aos="fade-up" data-aos-delay="800">
            <h3>Em resumo:</h3>
            <p>É para quem sabe que não é falta de inteligência, não é falta de renda, não é falta de força de vontade. É falta de lógica aplicada ao comportamento — e isso se aprende.</p>
          </div>
        </div>
      </section>

      {/* Para Quem Não É */}
      <section className="para-quem-nao-section">
        <div className="para-quem-nao-content">
          <div className="para-quem-nao-header" data-aos="fade-up">
            <p className="section-eyebrow">Para Quem Não É</p>
            <h2 className="section-title-2">
              O Método VÉRSIA <span className="accent-negative">não é</span> para quem busca atalhos — porque atalhos não mudam comportamento
            </h2>
          </div>

          <p className="para-quem-nao-intro" data-aos="fade-up" data-aos-delay="100">
            Não é para quem:
          </p>

          <div className="para-quem-nao-list">
            {paraQuemNaoE.map((item, idx) => (
              <div 
                key={idx} 
                className="para-quem-nao-item"
                data-aos="fade-up"
                data-aos-delay={150 + (idx * 50)}
              >
                <span className="para-quem-nao-bullet">✕</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="para-quem-nao-why" data-aos="fade-up" data-aos-delay="600">
            <h3>Por que não é para essas pessoas?</h3>
            <p>Porque tudo está interligado — e ignorar isso só repete o ciclo.</p>
            <p>Não existe quitação de dívidas sustentável sem mudança de comportamento. Se você quita dívidas sem entender por que elas surgiram, elas voltam. Se você corta gastos sem entender o que dispara seus impulsos, eles retornam. Se você tenta investir sem ter um sistema financeiro organizado, o caos continua. Se você tenta controlar o dinheiro sem validar sua história, você se sabota.</p>
            <p><strong>O Método VÉRSIA foi criado para interromper esse ciclo.</strong> Ele não trabalha só o sintoma — trabalha a causa. Ele não organiza só números — organiza padrões. Ele não cria só metas — cria lógica. Ele não promete só controle — entrega autonomia.</p>
            <p>Por isso, ele não funciona para quem quer apenas "resolver rápido". Funciona para quem quer resolver de verdade.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-content">
          <h2 className="section-title-2" data-aos="fade-up">
            O que você <span className="accent">ganha</span>
          </h2>
          
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="benefit-card"
                data-aos="zoom-in"
                data-aos-delay={100 + (idx * 100)}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItsWorks;