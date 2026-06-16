import React, { useState, useEffect } from 'react';
import "./styles.css";

interface BusinessPlan {
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
  description?: string;
  href?: string;
}

interface OfferBusinessSectionProps {
  plans?: BusinessPlan[];
  whatsappNumber?: string;
}

const OfferBusinessSection: React.FC<OfferBusinessSectionProps> = ({ 
  plans,
  whatsappNumber = "5587991097916" 
}) => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const defaultPlans: BusinessPlan[] = [
    {
      id: 'ebook',
      tag: 'PARA QUEM QUER LER',
      name: 'Só o E-book',
      price: 98.90,
      period: 'pagamento único · acesso permanente',
      features: [
        'E-book completo em PDF',
        'Pesquisa exclusiva com dados reais',
        'Leitura no seu ritmo',
        'Acesso permanente'
      ],
      buttonText: 'Quero o e-book',
      href: 'https://pay.kiwify.com.br/uy7eMQF'
    },
    {
      id: 'complete',
      tag: 'PARA QUEM QUER IR FUNDO',
      name: 'E-book + Masterclass',
      price: 251.00,
      originalPrice: 418,
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
      href: 'https://pay.kiwify.com.br/uy7eMQF'
    }
  ];

  const businessPlans = plans || defaultPlans;

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

    const section = document.getElementById('business-offer-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [animationTriggered]);

  const handlePlanSelect = (plan: BusinessPlan) => {
    console.log(`Plano empresarial selecionado: ${plan.id}`);
    if (plan.href) {
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
    <section className="business-offer-section" id="business-offer-section">
      <div className="business-container">
        <header className={`business-header ${animationTriggered ? 'animate-in' : ''}`}>
          <div className="business-tag-wrapper">
            <span className="business-tag">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 6L8 2L14 6V14H10V10H6V14H2V6Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              Soluções Empresariais
            </span>
          </div>
          
          <h2 className="business-title">
            Transforme seu <span className='title-span'>patrimônio empresarial</span> em uma máquina de crescimento
          </h2>
          
          <p className="business-subtitle">
            Metodologias comprovadas por empresários que multiplicaram seus resultados
          </p>
        </header>

        <div className="business-grid">
          {businessPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`business-card ${plan.isHighlighted ? 'highlighted' : ''} ${
                animationTriggered ? 'animate-in' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handlePlanSelect(plan)}
            >
              {plan.badge && (
                <div className="business-badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L7.5 4.5L11 4.5L8.5 7L9.5 10.5L6 8.5L2.5 10.5L3.5 7L1 4.5L4.5 4.5L6 1Z" fill="currentColor"/>
                  </svg>
                  {plan.badge}
                </div>
              )}
              
              <div className="business-content">
                <div className="business-card-header">
                  <span className="business-card-tag">{plan.tag}</span>
                  <h3 className="business-card-name">{plan.name}</h3>
                  {plan.description && (
                    <p className="business-description">{plan.description}</p>
                  )}
                </div>

                <div className="business-pricing">
                  <div className="business-price-container">
                    {plan.originalPrice && plan.price !== plan.originalPrice && (
                      <div className="business-savings">
                        <span className="original-price">
                          De R$ {plan.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                        </span>
                        <span className="savings-badge">
                          Economize R$ {(plan.originalPrice - plan.price).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                        </span>
                      </div>
                    )}
                    <div className="business-current-price">
                      <span className="business-currency">R$</span>
                      <span className="business-amount">{formatPrice(plan.price)}</span>
                    </div>
                  </div>
                  <span className="business-period">{plan.period}</span>
                </div>

                <div className="business-features">
                  <h4 className="features-title">O que está incluído:</h4>
                  <ul className="business-features-list">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="business-feature-item">
                        <svg width="18" height="18" viewBox="0 0 20 20" className="business-check-icon">
                          <path 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            fill="currentColor"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={plan.href}
                  className={`business-cta-button ${plan.isHighlighted ? 'primary' : 'secondary'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlanSelect(plan);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="business-button-text">
                    {plan.buttonText}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" className="business-button-arrow">
                    <path 
                      d="M13 7L18 12L13 17M6 12H18" 
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
                <div className="business-highlight-glow"></div>
              )}
            </div>
          ))}
        </div>

        <footer className={`business-footer ${animationTriggered ? 'animate-in' : ''}`}>
          <div className="business-guarantee">
            <svg width="24" height="24" viewBox="0 0 24 24" className="guarantee-icon">
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#10b981"/>
            </svg>
            <div className="guarantee-text">
              <strong>Garantia de 7 dias</strong>
              <span>Se não ficar satisfeito, devolvemos 100% do seu investimento</span>
            </div>
          </div>
          
          <p className="business-support-text">
            Dúvidas sobre qual plano escolher?{' '}
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              className="business-support-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" className="whatsapp-icon">
                <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.865 3.687"/>
              </svg>
              Fale com um especialista
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default OfferBusinessSection;