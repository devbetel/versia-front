import React, { useState, useEffect } from 'react';
import "./styles.css";

interface PricingPlan {
  id: string;
  tag: string;
  name: string;
  price: number;
  originalPrice?: number;
  period: string;
  features: string[];
  buttonText: string;
  isHighlighted?: boolean;
  badge?: string;
  href?: string;
}

interface OfferSectionProps {
  plans?: PricingPlan[];
  whatsappNumber?: string;
}

const OfferSection: React.FC<OfferSectionProps> = ({ 
  plans,
  whatsappNumber = "5587991097916" 
}) => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const defaultPlans: PricingPlan[] = [
    {
      id: 'ebook',
      tag: 'PARA QUEM QUER LER',
      name: 'Só o E-book',
      price: 26.90,
      period: 'pagamento único · acesso permanente',
      features: [
        'E-book completo em PDF',
        'Pesquisa exclusiva com dados reais',
        'Leitura no seu ritmo',
        'Acesso permanente'
      ],
      buttonText: 'Quero o e-book',
      href: "https://pay.kiwify.com.br/hzfZdZq"
    },
    {
      id: 'complete',
      tag: 'PARA QUEM QUER IR FUNDO',
      name: 'E-book + Masterclass',
      price: 98.90,
      originalPrice: 118,
      period: 'pagamento único · acesso permanente',
      features: [
        'E-book completo em PDF',
        'Masterclass gravada exclusiva',
        'Aprofundamento dos temas principais',
        'Sessão de perguntas e respostas',
        'Acesso permanente a tudo'
      ],
      buttonText: 'Quero o completo',
      isHighlighted: true,
      badge: 'MAIS COMPLETO',
      href: "https://pay.kiwify.com.br/hzfZdZq"
    }
  ];

  const pricingPlans = plans || defaultPlans;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationTriggered) {
            setAnimationTriggered(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('offer-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [animationTriggered]);

  const handlePlanSelect = (plan: PricingPlan) => {
    console.log(`Plano selecionado: ${plan.id}`);
    if (plan.href) {
      // Usar window.location.assign ou window.open para navegação
      window.location.assign(plan.href);
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <section className="offer-section" id="offer-section">
      <div className="offer-container">
        <header className={`offer-header ${animationTriggered ? 'animate-in' : ''}`}>
          <div className="section-tag-wrapper">
            <span className="section-tag">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L10 6L14 6L11 9L12 14L8 11L4 14L5 9L2 6L6 6L8 2Z" fill="currentColor"/>
              </svg>
              Escolha sua versão
            </span>
          </div>
          
          <h2 className="offer-title">
            <span className="title-highlight">R$26,90 para entender o jogo.</span>
          </h2>
          
          <p className="offer-subtitle">
            Acesso imediato. Sem assinatura. Sem fórmula mágica.
          </p>
        </header>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.isHighlighted ? 'highlighted' : ''} ${
                animationTriggered ? 'animate-in' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => handlePlanSelect(plan)}
            >
              {plan.badge && (
                <div className="card-badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L7.5 4.5L11 4.5L8.5 7L9.5 10.5L6 8.5L2.5 10.5L3.5 7L1 4.5L4.5 4.5L6 1Z" fill="currentColor"/>
                  </svg>
                  {plan.badge}
                </div>
              )}
              
              <div className="card-content">
                <div className="card-header">
                  <span className="card-tag">{plan.tag}</span>
                  <h3 className="card-name">{plan.name}</h3>
                </div>

                <div className="card-pricing">
                  <div className="price-container">
                    {plan.originalPrice && plan.price !== plan.originalPrice && (
                      <span className="original-price">
                        R$ {plan.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </span>
                    )}
                    <div className="current-price">
                      <span className="currency">R$</span>
                      <span className="amount">{formatPrice(plan.price)}</span>
                    </div>
                  </div>
                  <span className="price-period">{plan.period}</span>
                </div>

                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <svg width="20" height="20" viewBox="0 0 20 20" className="check-icon">
                        <path 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          fill="currentColor"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={plan.href}
                  className={`cta-button ${plan.isHighlighted ? 'primary' : 'secondary'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlanSelect(plan);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="button-text">
                    {plan.buttonText} · R$ {formatPrice(plan.price)}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" className="button-arrow">
                    <path 
                      d="M6 4L10 8L6 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {plan.isHighlighted && (
                <div className="highlight-glow"></div>
              )}
            </div>
          ))}
        </div>

        <footer className={`offer-footer ${animationTriggered ? 'animate-in' : ''}`}>
          <p className="support-text">
            Dúvidas antes de comprar?{' '}
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              className="support-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale pelo WhatsApp
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default OfferSection;