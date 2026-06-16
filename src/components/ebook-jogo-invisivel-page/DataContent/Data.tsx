import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles.css";

interface StatCardProps {
  number: string;
  label: string;
  source: string;
  highlight?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, source, highlight = false }) => (
  <div className={`stat-card ${highlight ? 'stat-card--highlight' : ''}`}>
    <div className="stat-card__number">{number}</div>
    <div className="stat-card__label">{label}</div>
    <div className="stat-card__source">
      <span className="stat-card__source-icon">📊</span>
      {source}
    </div>
  </div>
);

interface HighlightQuoteProps {
  children: React.ReactNode;
}

const HighlightQuote: React.FC<HighlightQuoteProps> = ({ children }) => (
  <div className="highlight-quote">
    <div className="quote-decoration">
      <div className="quote-line"></div>
      <div className="quote-dot"></div>
      <div className="quote-line"></div>
    </div>
    <blockquote className="quote-content">
      {children}
    </blockquote>
    <div className="quote-attribution">
      <span className="attribution-text">Análise comportamental</span>
    </div>
  </div>
);

const DataSection: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
    });
    // Garante que o AOS releia os elementos após mount
    AOS.refresh();
  }, []);

  const statistics = [
    {
      number: "47%",
      label: "dos brasileiros vivem em ALTO ESTRESSE por causa de dinheiro",
      source: "ANBIMA · Raio X do Investidor 2025",
    },
    {
      number: "80,4%",
      label: "das famílias brasileiras estão endividadas",
      source: "CNC, 2026 · recorde histórico",
      highlight: true,
    },
    {
      number: "55%",
      label: "das mulheres brasileiras não investem de forma alguma",
      source: "ANBIMA · Raio X do Investidor 2025",
    },
  ];

  return (
    <section className="section-dados">
      <div className="container">

        {/* ── Header ── */}
        <div className="section-header">
          <div
            className="section-header__eyebrow"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            <span className="eyebrow-dot"></span>
            Contexto &amp; Dados
            <span className="eyebrow-dot"></span>
          </div>

          <h2
            className="dados-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Os números que o sistema<br />
            <em className="title-emphasis">prefere que você não saiba</em>
          </h2>

          <div
            className="title-underline"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="250"
          ></div>
        </div>

        {/* ── Cards ── */}
        <div className="dados-grid">
          {statistics.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay={`${index * 150}`}
            >
              <StatCard
                number={stat.number}
                label={stat.label}
                source={stat.source}
                highlight={stat.highlight}
              />
            </div>
          ))}
        </div>

        {/* ── Quote ── */}
        <div
          className="dados-highlight"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <HighlightQuote>
            <p>
              "Em termos percentuais,{' '}
              <em>a classe média é a mais endividada.</em> O problema real não é
              falta de dinheiro. É falta de comportamento que ninguém ensinou."
            </p>
          </HighlightQuote>
        </div>

      </div>
    </section>
  );
};

export default DataSection;