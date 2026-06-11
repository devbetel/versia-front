import React from 'react';
import "./styles.css"

interface StatCardProps {
  number: string;
  label: string;
  source: string;
  highlight?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, source, highlight = false }) => (
  <div className={`stat-card highlight ${highlight ? 'highlight' : ''}`}>
    <div className="stat-visual">
      <div className="stat-number">{number}</div>
      <div className="stat-indicator"></div>
    </div>
    <div className="stat-content">
      <div className="stat-label">{label}</div>
      <div className="stat-source">
        <span className="source-icon">📊</span>
        {source}
      </div>
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
  const statistics = [
    {
      number: "47%",
      label: "dos brasileiros vivem em ALTO ESTRESSE por causa de dinheiro",
      source: "ANBIMA · Raio X do Investidor 2025"
    },
    {
      number: "80,4%",
      label: "das famílias brasileiras estão endividadas",
      source: "CNC, 2026 · recorde histórico",
      highlight: true
    },
    {
      number: "55%",
      label: "das mulheres brasileiras não investem de forma alguma",
      source: "ANBIMA · Raio X do Investidor 2025"
    }
  ];

  return (
    <div style={{ 
      padding: '8rem 0',
      background: 'linear-gradient(180deg, #d4b896 0%, #c9ad89 50%, #d4b896 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
   
      
      <div className="container">
        <div className="section-header">
          <h2 className="dados-title fade-in">
            Os números que o sistema<br />
            <em className="title-emphasis">prefere que você não saiba</em>
          </h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="dados-grid">
          {statistics.map((stat, index) => (
            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <StatCard
                number={stat.number}
                label={stat.label}
                source={stat.source}
                highlight={stat.highlight}
              />
            </div>
          ))}
        </div>
        
        <div className="dados-highlight fade-in">
          <HighlightQuote>
            <p>
              "Em termos percentuais, <em>a classe média é a mais endividada.</em> O problema 
              real não é falta de dinheiro. É falta de comportamento que ninguém ensinou."
            </p>
          </HighlightQuote>
        </div>
      </div>
    </div>
  );
};

export default DataSection;