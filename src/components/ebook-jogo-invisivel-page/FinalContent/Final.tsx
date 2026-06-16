import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

interface FinalSectionProps {
  title?: {
    line1?: string;
    line2?: string;
    highlight?: string;
  };
  subtitle?: string;
  price?: number;
  buttonText?: string;
  targetSection?: string;
  checkoutUrl?: string;
  onButtonClick?: () => void;
  className?: string;
}

const FinalSection: React.FC<FinalSectionProps> = ({
  title = {
    line1: "O jogo foi feito",
    line2: "para você perder.",
    highlight: "Agora você conhece as regras."
  },
  subtitle = "Sem lição de moral. Com a verdade que ninguém contou.",
  price = 26.90,
  buttonText = "Quero entender o jogo",
  targetSection = "#oferta",
  checkoutUrl = "https://pay.kiwify.com.br/hzfZdZq",
  onButtonClick,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleButtonClick = (e: React.MouseEvent) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    } else if (checkoutUrl) {
      e.preventDefault();
      window.location.href = checkoutUrl;
    } else if (targetSection.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(targetSection);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <section 
      ref={sectionRef}
      className={`final-section ${isVisible ? 'visible' : ''} ${className}`}
      id="final-section"
    >
      {/* Background Elements */}
      <div className="section-background">
        <div 
          className="gradient-orb orb-1"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="gradient-orb orb-2"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        />
        <div className="grid-pattern" />
      </div>

      <div className="final-container">
        {/* Main Content */}
        <div className="final-content">
          <h2 
            ref={titleRef}
            className={`final-title ${isVisible ? 'animate-in' : ''}`}
          >
            <span className="title-line" data-delay="0">
              {title.line1}
            </span>
            <br />
            <span className="title-line" data-delay="200">
              {title.line2}
            </span>
            <br />
            <em 
              className="title-highlight"
              data-delay="400"
            >
              {title.highlight}
            </em>
          </h2>

          <p className={`final-subtitle ${isVisible ? 'animate-in' : ''}`}>
            <span className="price-highlight">Por R${formatPrice(price)}</span>
            <span className="subtitle-text">
              {subtitle.replace(`Por R$${price}`, '').replace(/^\.\s*/, '')}
            </span>
          </p>

          <div className={`final-cta ${isVisible ? 'animate-in' : ''}`}>
            <a 
              href={checkoutUrl || targetSection}
              className="cta-button"
              onClick={handleButtonClick}
              aria-label={`${buttonText} - Ir para checkout`}
            >
              <span className="button-content">
                <span className="button-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path 
                      d="M10 3L17 10M17 10L10 17M17 10H3" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="button-text">{buttonText}</span>
                <span className="button-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path 
                      d="M6 4L10 8L6 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
              
              {/* Button Effects */}
              <div className="button-shine" />
              <div className="button-glow" />
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="decorative-elements">
          <div className="floating-card card-1">
            <div className="card-content">
              <div className="card-icon">💡</div>
              <span>Insights Reais</span>
            </div>
          </div>
          
          <div className="floating-card card-2">
            <div className="card-content">
              <div className="card-icon">🎯</div>
              <span>Sem Enrolação</span>
            </div>
          </div>
          
          <div className="floating-card card-3">
            <div className="card-content">
              <div className="card-icon">🔥</div>
              <span>Verdade Nua</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`trust-indicators ${isVisible ? 'animate-in' : ''}`}>
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 16 16" className="trust-icon">
              <path d="M8 1L10 6L15 6L11 9L13 15L8 11L3 15L5 9L1 6L6 6L8 1Z" fill="currentColor"/>
            </svg>
            <span>Acesso Imediato</span>
          </div>
          
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 16 16" className="trust-icon">
              <path d="M8 2C4.5 2 2 4.5 2 8C2 11.5 4.5 14 8 14C11.5 14 14 11.5 14 8C14 4.5 11.5 2 8 2ZM7 11L4 8L5.5 6.5L7 8L10.5 4.5L12 6L7 11Z" fill="currentColor"/>
            </svg>
            <span>Sem Assinatura</span>
          </div>
          
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 16 16" className="trust-icon">
              <path d="M8 1L9.5 5.5L14 5.5L10.5 8.5L12 14L8 11L4 14L5.5 8.5L2 5.5L6.5 5.5L8 1Z" fill="currentColor"/>
            </svg>
            <span>Conteúdo Premium</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`scroll-indicator ${isVisible ? 'animate-in' : ''}`}>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M7 13L12 18L17 13M7 6L12 11L17 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;