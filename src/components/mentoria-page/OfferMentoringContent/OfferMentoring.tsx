import React, { useEffect, useState } from 'react';
import "./styles.css";

interface PricingMentoringProps {
  whatsappNumber?: string;
}

const OfferMentoring: React.FC<PricingMentoringProps> = () => {
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

        {/* Single Enlarged Card */}
        <div className={`pricing-card-mentoring vip-card ${isVisible ? 'visible' : ''}`} data-aos="fade-up" data-aos-delay="300">
          <div className="card-glow-mentoring"></div>
          <div className="badge-mentoring" data-aos="zoom-in" data-aos-delay="400">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1L6 4H9L7 6.5L8 9.5L5 8L2 9.5L3 6.5L1 4H4L5 1Z" fill="currentColor"/>
            </svg>
            Recomendado
          </div>
          <span className="card-tag-mentoring" data-aos="fade-down" data-aos-delay="450">Para quem quer autonomia</span>
          <div className="card-name-mentoring" data-aos="fade-up" data-aos-delay="500">Mentoria VÉRSIA</div>
          
          <div className="card-price-wrapper-mentoring" data-aos="zoom-in" data-aos-delay="550">
            <div className="card-installment-mentoring">
              <span className="installment-label">12x</span>
              <span className="installment-price">R$ 29,17</span>
            </div>
            <div className="card-cash-price">ou R$ 350,00 à vista</div>
          </div>

          <div className="card-divider"></div>

          <ul className="card-features-mentoring">
            <li data-aos="fade-left" data-aos-delay="600">
              <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Acesso às gravações das aulas por <strong>6 meses</strong></span>
            </li>
            <li data-aos="fade-left" data-aos-delay="650">
              <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Planilha Exclusiva de Controle Orçamentário</span>
            </li>
            <li data-aos="fade-left" data-aos-delay="700">
              <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Material Complementar em PDF</span>
            </li>
            <li data-aos="fade-left" data-aos-delay="750">
              <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Checklist de Ações Propostas</span>
            </li>
            <li data-aos="fade-left" data-aos-delay="800">
              <svg className="feature-icon" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span><strong>Plano de Ação Estruturado</strong></span>
            </li>
          </ul>

          <a 
            href="https://pay.kiwify.com.br/S42F8KF" 
            className="btn-card-mentoring"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            Quero Fazer Parte
          </a>

          <div className="guarantee-box">
            <p>
              <strong className="gold-text">Garantia:</strong> Se nas primeiras aulas você perceber que não é para você, devolvemos seu dinheiro. Sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferMentoring;