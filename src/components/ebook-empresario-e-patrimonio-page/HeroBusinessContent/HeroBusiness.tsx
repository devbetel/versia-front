import React, { useState } from 'react';
import './styles.css';

const HeroBusinessSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-dot-grid" />
      <div className="hero-glow hero-glow--left" />
      <div className="hero-glow hero-glow--right" />
      <div className="hero-glow hero-glow--center" />

      <div className="hero-container">

        {/* ── ESQUERDA: Badge + Título ── */}
        <div className="hero-left">

          <div className="hero-badge" data-aos="fade-down">
            <span className="hero-badge__dot" />
            <span className="hero-badge__text">Conteúdo Estratégico para Empresários</span>
          </div>

          <h1 className="hero-title" data-aos="fade-right" data-aos-delay="100">
            Suba o nível do seu jogo:{' '}
            Pare de construir apenas{' '}
            <span className="hero-highlight" data-aos="fade-in" data-aos-delay="200">
              uma empresa rica
              <svg className="hero-underline" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M2 6 Q50 2 100 4.5 Q150 7 198 2.5"
                  stroke="var(--gold)" strokeWidth="2.5" fill="none"
                  strokeLinecap="round" opacity="0.75" />
              </svg>
            </span>{' '}
            e comece a ser{' '}
            <span className="hero-highlight" data-aos="fade-in" data-aos-delay="300">
              um empresário rico.
              <svg className="hero-underline" viewBox="0 0 230 8" preserveAspectRatio="none">
                <path d="M2 6 Q57 2 115 4.5 Q172 7 228 2.5"
                  stroke="var(--gold)" strokeWidth="2.5" fill="none"
                  strokeLinecap="round" opacity="0.75" />
              </svg>
            </span>
          </h1>

        </div>

        {/* ── DIREITA: Card Premium ── */}
        <div className="hero-right" data-aos="fade-left" data-aos-delay="200">

          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
            O guia definitivo para transformar faturamento em lucro real,
            blindar a família, organizar o pró-labore e construir um{' '}
            <strong>patrimônio inabalável fora do seu CNPJ.</strong>
          </p>

          <div className="hero-divider" data-aos="fade" data-aos-delay="400" />

          <div data-aos="zoom-in" data-aos-delay="500">
            <HeroCTA />
          </div>

          <p className="hero-cta-note" data-aos="fade-up" data-aos-delay="600">🔒 Acesso imediato &nbsp;·&nbsp; Sem compromisso</p>

        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="hero-stats-bar" data-aos="fade-up" data-aos-delay="300">
        <div className="hero-stats-inner">
          <div data-aos="flip-up" data-aos-delay="400">
            <StatItem number="6+" label="Módulos Práticos" />
          </div>
          <span className="hero-stats__divider" />
          <div data-aos="flip-up" data-aos-delay="500">
            <StatItem number="30" label="Dias de Plano de Ação" />
          </div>
          <span className="hero-stats__divider" />
          <div data-aos="flip-up" data-aos-delay="600">
            <StatItem number="15min" label="Por Semana" />
          </div>
        </div>
      </div>

      <div className="hero-wave" data-aos="fade" data-aos-delay="700">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0 80 L0 50 Q360 12 720 32 Q1080 52 1440 20 L1440 80 Z"
            fill="var(--light-cream)" />
        </svg>
      </div>
    </section>
  );
};

/* ── CTA BUTTON ── */
const HeroCTA: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  
  const handleClick = () => {
    window.location.href = 'https://pay.kiwify.com.br/uy7eMQF';
  };
  
  return (
    <button
      className={`hero-cta ${hovered ? 'hero-cta--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <span className="hero-cta__text">QUERO ACESSAR O MATERIAL AGORA</span>
      <span className="hero-cta__arrow">→</span>
    </button>
  );
};

/* ── STAT ITEM ── */
interface StatItemProps { number: string; label: string; }

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="hero-stat">
    <span className="hero-stat__number">{number}</span>
    <span className="hero-stat__label">{label}</span>
  </div>
);

export default HeroBusinessSection;