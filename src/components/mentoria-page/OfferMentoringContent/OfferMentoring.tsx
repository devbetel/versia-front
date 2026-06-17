import React, { useEffect, useState } from 'react';
import "./styles.css";

interface PricingMentoringProps {
  whatsappNumber?: string;
}

const OfferMentoring: React.FC<PricingMentoringProps> = ({
  whatsappNumber = "5587991097916"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('pricing');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="pricing-mentoring-section">
      <div className="pricing-container">
        <div className={`pricing-header-mentoring ${isVisible ? 'visible' : ''}`} data-aos="fade-down">
          <span className="pricing-tag" data-aos="zoom-in" data-aos-delay="100">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L8.5 5L12.5 5L9.5 8L11 12L7 9.5L3 12L4.5 8L1.5 5L5.5 5L7 1Z" fill="currentColor"/>
            </svg>
            Escolha seu Plano
          </span>
          <h2 className="pricing-title-mentoring" data-aos="fade-up" data-aos-delay="200">
            Escolha o seu <span className="accent-gold">Próximo Passo</span>
          </h2>
        </div>

        <div className="pricing-grid-mentoring">
          {/* Essencial Autonomia */}
          <div className={`pricing-card-mentoring ${isVisible ? 'visible' : ''}`} data-aos="fade-right" data-aos-delay="300">
            <div className="card-glow-mentoring"></div>
            <span className="card-tag-mentoring" data-aos="fade-down" data-aos-delay="400">Para quem quer autonomia</span>
            <div className="card-name-mentoring" data-aos="fade-up" data-aos-delay="450">Essencial Autonomia</div>
            
            <div className="card-price-wrapper-mentoring" data-aos="zoom-in" data-aos-delay="500">
              <div className="card-installment-mentoring">
                <span className="installment-label">6x</span>
                <span className="installment-price">R$ 93,74</span>
              </div>
              <div className="card-cash-price">ou R$ 548,00 à vista</div>
            </div>

            <div className="card-divider"></div>

            <ul className="card-features-mentoring">
              <li data-aos="fade-left" data-aos-delay="550">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Acesso às gravações das aulas por <strong>6 meses</strong></span>
              </li>
              <li data-aos="fade-left" data-aos-delay="600">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Planilha Exclusiva de Controle Orçamentário</span>
              </li>
              <li data-aos="fade-left" data-aos-delay="650">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Material Complementar em PDF</span>
              </li>
              <li data-aos="fade-left" data-aos-delay="700">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Checklist de Ações Propostas</span>
              </li>
              <li data-aos="fade-left" data-aos-delay="750">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span><strong>Plano de Ação Estruturado</strong></span>
              </li>
            </ul>

            <a 
              href="https://www.asaas.com/c/kfy6u6loweoer53r" 
              className="btn-card-mentoring"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              Quero o Essencial
            </a>
          </div>

          {/* Experiência VIP */}
          <div className={`pricing-card-mentoring vip-card ${isVisible ? 'visible' : ''}`} data-aos="fade-left" data-aos-delay="350">
            <div className="card-glow-mentoring"></div>
            <div className="badge-mentoring" data-aos="zoom-in" data-aos-delay="400">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1L6 4H9L7 6.5L8 9.5L5 8L2 9.5L3 6.5L1 4H4L5 1Z" fill="currentColor"/>
              </svg>
              Recomendado
            </div>
            <span className="card-tag-mentoring" data-aos="fade-down" data-aos-delay="450">Para quem quer ir além</span>
            <div className="card-name-mentoring" data-aos="fade-up" data-aos-delay="500">Experiência VIP</div>
            
            <div className="card-price-wrapper-mentoring" data-aos="zoom-in" data-aos-delay="550">
              <div className="card-installment-mentoring">
                <span className="installment-label">6x</span>
                <span className="installment-price">R$ 139,89</span>
              </div>
              <div className="card-cash-price">ou R$ 818,00 à vista</div>
            </div>

            <div className="card-divider"></div>

            <ul className="card-features-mentoring">
              <li data-aos="fade-right" data-aos-delay="600">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Acesso estendido às gravações por <strong>1 ano</strong></span>
              </li>
              <li data-aos="fade-right" data-aos-delay="650">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Planilha Exclusiva de Controle Orçamentário</span>
              </li>
              <li data-aos="fade-right" data-aos-delay="700">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Material Complementar em PDF</span>
              </li>
              <li data-aos="fade-right" data-aos-delay="750">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Checklist de Ações Propostas</span>
              </li>
              <li data-aos="fade-right" data-aos-delay="800">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Plano de Ação Estruturado</span>
              </li>
              <li data-aos="fade-right" data-aos-delay="850">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span><strong>2 meses de acesso</strong> ao App de Planejamento Financeiro</span>
              </li>
              <li data-aos="fade-right" data-aos-delay="900">
                <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span><strong>Mentoria Individual (1h30)</strong> direto comigo para desenhar o seu caso específico</span>
              </li>
            </ul>

            <a 
              href="https://www.asaas.com/c/x6ue8jsdg8xhom31" 
              className="btn-card-mentoring"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="950"
            >
              Quero Ser VIP
            </a>
          </div>
        </div>

        <div className={`pricing-footer-mentoring ${isVisible ? 'visible' : ''}`} data-aos="fade-up" data-aos-delay="400">
          <p>
            Dúvidas antes de escolher?{' '}
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link-mentoring"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11.5 2.5C10.5 1.5 9 1 7.5 1C4 1 1 4 1 7.5C1 8.5 1.2 9.5 1.5 10.5L1 13L3.5 12.5C4.5 13 5.5 13 6.5 13C10 13 13 10 13 6.5C13 5 12.5 3.5 11.5 2.5Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M5 5C5 4.5 5.5 4 6 4H6.5C7 4 7.5 4.5 7.5 5V6.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
              Fale pelo WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferMentoring;