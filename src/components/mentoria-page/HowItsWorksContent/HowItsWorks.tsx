import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import './styles.css';
import TransitionGradient9 from '../../TransitionGradient9/TransitionGradient9';
import TransitionGradient10 from '../../TransitionGradient10/TransitionGradient10';
import TransitionGradient11 from '../../TransitionGradient11/TranstionGradient11';

// Variants para animações
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

function HowItsWorks() {
  // Refs separados para cada seção
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const statsNumbersRef = useRef(null);
  const paraQuemRef = useRef(null);
  const paraQuemNaoRef = useRef(null);
  const benefitsRef = useRef(null);

  // useInView separados para cada seção
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const statsNumbersInView = useInView(statsNumbersRef, { once: true, margin: "-100px" });
  const paraQuemInView = useInView(paraQuemRef, { once: true, margin: "-100px" });
  const paraQuemNaoInView = useInView(paraQuemNaoRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

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
      {/* HERO SECTION */}
      <motion.section 
        ref={heroRef}
        className="hero-section"
        variants={staggerContainer}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <div className="hero-content">
          <motion.p 
            className="hero-eyebrow"
            variants={fadeInDown}
          >
            A Mentoria Coletiva Método VÉRSIA
          </motion.p>

          <motion.h1 
            className="hero-title"
            variants={fadeInUp}
          >
            O processo que transforma <span className="accent">independência</span> em <span className="accent">autonomia real</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            variants={fadeInUp}
          >
            Você não precisa de mais informação sobre dinheiro. Precisa de lógica aplicada ao seu comportamento.
          </motion.p>

          <motion.p 
            className="hero-description"
            variants={fadeInUp}
          >
            A Mentoria Coletiva Método VÉRSIA é o espaço onde você aprende a enxergar seus padrões, estancar a sangria financeira e construir um sistema que funciona na sua vida real — sem culpa, sem moralismo, sem fórmulas mágicas.
          </motion.p>

          <motion.p 
            className="hero-process"
            variants={fadeInUp}
          >
            É um processo de <strong>2 meses</strong>, totalmente prático, coletivo, guiado, criado para quem ganha bem, vive no automático e quer clareza, controle e autonomia financeira.
          </motion.p>
        </div>
      </motion.section>

      {/* STATS SECTION - FORMATO, DURAÇÃO, MATERIAIS */}
      <motion.section 
        ref={statsRef}
        className="stats-section"
        variants={staggerContainer}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
      >
        <div className="stats-content">
          <div className="stats-grid">
            {/* Card 1 - Formato */}
            <motion.div 
              className="stat-card practica-card"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="stat-card__number pratica-icon"
                variants={scaleIn}
              >
                🎯
              </motion.div>
              <motion.h3 
                className="stat-card__label pratica-card-title"
                variants={fadeInUp}
              >
                Formato
              </motion.h3>
              <ul className="stat-card__desc pratica-list">
                {howItWorks.formato.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={fadeInLeft}
                    custom={{ delay: idx * 0.05 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2 - Duração */}
            <motion.div 
              className="stat-card practica-card"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="stat-card__number pratica-icon"
                variants={scaleIn}
              >
                ⌛️
              </motion.div>
              <motion.h3 
                className="stat-card__label pratica-card-title"
                variants={fadeInUp}
              >
                Duração
              </motion.h3>
              <ul className="stat-card__desc pratica-list">
                {howItWorks.duracao.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={fadeInLeft}
                    custom={{ delay: idx * 0.05 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Card 3 - Materiais */}
            <motion.div 
              className="stat-card practica-card"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="stat-card__number pratica-icon"
                variants={scaleIn}
              >
                📚
              </motion.div>
              <motion.h3 
                className="stat-card__label pratica-card-title"
                variants={fadeInUp}
              >
                Materiais
              </motion.h3>
              <ul className="stat-card__desc practica-list">
                {howItWorks.materiais.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={fadeInLeft}
                    custom={{ delay: idx * 0.05 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* STATS SECTION - NÚMEROS */}
      <motion.section 
        ref={statsNumbersRef}
        className="stats-section"
        variants={staggerContainer}
        initial="hidden"
        animate={statsNumbersInView ? "visible" : "hidden"}
      >
        <div className="stats-content">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="stat-card"
                variants={fadeInUp}
                whileHover={{ y: -8, borderColor: 'var(--gold)', transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="stat-card__number"
                  variants={zoomIn}
                >
                  {stat.number}
                </motion.div>
                <motion.h3 
                  className="stat-card__label"
                  variants={fadeInUp}
                >
                  {stat.label}
                </motion.h3>
                <motion.p 
                  className="stat-card__desc"
                  variants={fadeInUp}
                >
                  {stat.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <TransitionGradient10 />

      {/* PARA QUEM É SECTION */}
      <motion.section 
        ref={paraQuemRef}
        className="para-quem-section"
        variants={staggerContainer}
        initial="hidden"
        animate={paraQuemInView ? "visible" : "hidden"}
      >
        <div className="para-quem-content">
          <div className="para-quem-header">
            <motion.p 
              className="section-eyebrow"
              variants={fadeInUp}
            >
              Para Quem É
            </motion.p>
            <motion.h2 
              className="section-title"
              variants={fadeInUp}
            >
              O Método VÉRSIA é para quem já conquistou <span className="accent-2">independência</span> — e agora quer <span className="accent">autonomia real</span>
            </motion.h2>
          </div>

          <div className="para-quem-list">
            {paraQuemE.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="para-quem-item"
                variants={fadeInLeft}
                custom={{ delay: idx * 0.05 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
              >
                <span className="para-quem-bullet">•</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <TransitionGradient9 />

      {/* PARA QUEM NÃO É SECTION */}
      <motion.section 
        ref={paraQuemNaoRef}
        className="para-quem-nao-section"
        variants={staggerContainer}
        initial="hidden"
        animate={paraQuemNaoInView ? "visible" : "hidden"}
      >
        <div className="para-quem-nao-content">
          <div className="para-quem-nao-header">
            <motion.p 
              className="section-eyebrow"
              variants={fadeInUp}
            >
              Para Quem Não É
            </motion.p>
            <motion.h2 
              className="section-title-2"
              variants={fadeInUp}
            >
              O Método VÉRSIA <span className="accent-negative">não é</span> para quem busca atalhos — porque atalhos não mudam comportamento
            </motion.h2>
          </div>

          <div className="para-quem-nao-list">
            {paraQuemNaoE.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="para-quem-nao-item"
                variants={fadeInRight}
                custom={{ delay: idx * 0.05 }}
                whileHover={{ x: -8, transition: { duration: 0.2 } }}
              >
                <span className="para-quem-nao-bullet">✕</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <TransitionGradient11 />

      {/* BENEFITS SECTION */}
      <motion.section 
        ref={benefitsRef}
        className="benefits-section"
        variants={staggerContainer}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
      >
        <div className="benefits-content">
          <motion.h2 
            className="section-title-3"
            variants={fadeInUp}
          >
            O que você <span className="accent">ganha</span>
          </motion.h2>
          
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                className="benefit-card"
                variants={scaleIn}
                custom={{ delay: idx * 0.06 }}
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: 'var(--gold)',
                  transition: { duration: 0.3 } 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="benefit-icon"
                  variants={scaleIn}
                >
                  {benefit.icon}
                </motion.div>
                <motion.h3 
                  className="benefit-title"
                  variants={fadeInUp}
                >
                  {benefit.title}
                </motion.h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default HowItsWorks;