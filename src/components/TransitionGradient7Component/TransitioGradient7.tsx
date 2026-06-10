import React from 'react';

const TransitionGradient7 = () => {
  return (
    <div className="como-funciona-transition-wrapper">
      <style>{`
        :root {
          --navy: #064d75; /* Azul mais claro */
          --navy-dark: #021a2f;
        }

        .como-funciona-transition-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .como-funciona-transition-section {
          position: relative;
          height: 200px;
          width: 100%;
          background: linear-gradient(160deg, 
            var(--navy) 0%, 
            #042442 15%, 
            rgba(4, 36, 66, 0.95) 35%, 
            rgba(4, 36, 66, 0.85) 55%, 
            rgba(4, 36, 66, 0.6) 75%, 
            rgba(4, 36, 66, 0.3) 90%, 
            #042442 100%
          );
          overflow: hidden;
        }

        .como-funciona-transition-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg,
            transparent 0%, 
            rgba(4, 36, 66, 0.2) 25%, 
            rgba(4, 36, 66, 0.4) 50%, 
            rgba(4, 36, 66, 0.7) 75%, 
            var(--navy) 100%
          );
          z-index: 1;
        }

        .como-funciona-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse 120% 80% at 50% 20%, 
            rgba(4, 36, 66, 0.15) 0%, 
            rgba(4, 36, 66, 0.25) 40%, 
            rgba(4, 36, 66, 0.4) 70%, 
            var(--navy) 100%
          );
          z-index: 2;
          animation: overlayPulse 10s ease-in-out infinite;
        }

        /* Demais animações e ajustes permanecem os mesmos */

        @media (max-width: 768px) {
          .como-funciona-transition-section {
            height: 140px;
          }
        }

        @media (max-width: 480px) {
          .como-funciona-transition-section {
            height: 100px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .como-funciona-overlay,
          .como-funciona-mesh,
          .como-funciona-flow,
          .como-funciona-particle {
            animation: none;
          }
        }
      `}</style>

      <section className="como-funciona-transition-section">
        <div className="como-funciona-overlay"></div>
        <div className="como-funciona-mesh"></div>
        <div className="como-funciona-flow"></div>

        <div className="como-funciona-particles">
          <div className="como-funciona-particle"></div>
          <div className="como-funciona-particle"></div>
          <div className="como-funciona-particle"></div>
          <div className="como-funciona-particle"></div>
        </div>
      </section>
    </div>
  );
};

export default TransitionGradient7;