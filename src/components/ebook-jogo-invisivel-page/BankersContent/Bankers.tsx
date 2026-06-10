import React, { useEffect, useState } from 'react';
import "./styles.css";

interface StockTickerProps {
  ticker: string;
  name: string;
  price: string;
  change: string;
  isNegative: boolean;
  delay?: number;
}

const StockTicker: React.FC<StockTickerProps> = ({ 
  ticker, 
  name, 
  price, 
  change, 
  isNegative,
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`stock-ticker ${isVisible ? 'animate-in' : ''}`}>
      <div className="ticker-header">
        <div className="ticker-info">
          <span className="ticker-code">{ticker}</span>
          <span className="ticker-exchange">BOVESPA</span>
        </div>
        <div className={`price-change ${isNegative ? 'negative' : 'positive'}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" className="trend-arrow">
            <path 
              d={isNegative ? "M6 9L2 5h8l-4 4z" : "M6 3l4 4H2l4-4z"} 
              fill="currentColor"
            />
          </svg>
          <span className="change-value">{change}</span>
        </div>
      </div>
      
      <div className="ticker-price">R$ {price}</div>
      <div className="ticker-name">{name}</div>
      
      <div className="ticker-status">
        <div className={`status-dot ${isNegative ? 'red' : 'green'}`}></div>
        <span className="status-text">
          {isNegative ? 'Prejuízo garantido' : 'Lucro improvável'}
        </span>
      </div>
    </div>
  );
};

const BankersSection: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const bankingAssets = [
    { 
      ticker: "CHES4", 
      name: "Cheque Especial S.A.", 
      price: "12.500,00",
      change: "-15,9%",
      isNegative: true 
    },
    { 
      ticker: "LIME3", 
      name: "Limite Conta ON", 
      price: "8.750,00",
      change: "-22,3%",
      isNegative: true 
    },
    { 
      ticker: "EMPF4", 
      name: "Empréstimos PN", 
      price: "25.900,00",
      change: "-31,7%",
      isNegative: true 
    },
    { 
      ticker: "BCAR3", 
      name: "Boleto Cartão ON", 
      price: "5.680,00",
      change: "-18,4%",
      isNegative: true 
    }
  ];

  return (
    <section className="banking-section">
      <div className="container">
        <div className="section-intro">
          <div className="breadcrumb">
            <span className="breadcrumb-item" data-aos="fade-up">E-book</span>
            <svg width="16" height="16" viewBox="0 0 16 16" className="breadcrumb-arrow" data-aos="fade-up">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            <span className="breadcrumb-item active" data-aos="fade-up">Capítulo 2</span>
          </div>
          
          <h2 className="section-title" data-aos="fade-down">
            A piada interna que só 
            <span className="title-highlight"> os bancários entendem</span>
          </h2>
          
          <div className="section-meta" data-aos="fade-down">
            <span className="meta-item">📖 Trecho real do livro</span>
            <span className="meta-divider">•</span>
            <span className="meta-item">⏱️ 3 min de leitura</span>
          </div>
        </div>

        <div className="story-content" >
          <div className="story-text">
            <p className="story-paragraph" data-aos="fade-right">
              Quando a PLR estava chegando e nos perguntávamos em quais ativos iríamos investir, 
              respondíamos com códigos que pareciam ações da Bolsa — mas que na verdade eram o 
              <strong> nosso próprio sufoco financeiro</strong>:
            </p>
          </div>

          <div className="trading-terminal" data-aos="fade-left">
            <div className="terminal-header">
              <div className="terminal-controls">
                <div className="control-dot red"></div>
                <div className="control-dot yellow"></div>
                <div className="control-dot green"></div>
              </div>
              <div className="terminal-title">
                <span className="terminal-name">HomebrokerBank Pro</span>
                <span className="terminal-version">v2.1.4</span>
              </div>
              <div className="terminal-time">
                {currentTime.toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </div>
            </div>

            <div className="market-status">
              <div className="status-indicator pulsing"></div>
              <span className="status-text">Mercado Aberto</span>
              <span className="market-trend">Tendência: Baixa Geral</span>
            </div>

            <div className="portfolio-header">
              <h3 className="portfolio-title">Minha Carteira de "Investimentos"</h3>
              <div className="portfolio-balance">
                <span className="balance-label">Saldo Disponível:</span>
                <span className="balance-value negative">-R$ 47.230,00</span>
              </div>
            </div>

            <div className="stocks-grid">
              {bankingAssets.map((asset, index) => (
                <StockTicker
                  key={asset.ticker}
                  ticker={asset.ticker}
                  name={asset.name}
                  price={asset.price}
                  change={asset.change}
                  isNegative={asset.isNegative}
                  delay={index * 200}
                />
              ))}
            </div>

            <div className="terminal-footer">
              <div className="footer-stats">
                <div className="stat-item">
                  <span className="stat-label">Patrimônio Líquido</span>
                  <span className="stat-value negative">-R$ 47.230,00</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Variação do Dia</span>
                  <span className="stat-value negative">-22,1%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Risco</span>
                  <span className="stat-value high-risk">ALTÍSSIMO</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reflection-box" data-aos="fade-up">
            <div className="reflection-icon">💭</div>
            <div className="reflection-content">
              <blockquote className="reflection-quote">
                "Ríamos para não chorar. O aumento de renda não corrige um comportamento 
                disfuncional com o dinheiro. <em>Nunca vai.</em>"
              </blockquote>
              <cite className="reflection-author">
                — Experiência real de quem viveu isso na pele
              </cite>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BankersSection;