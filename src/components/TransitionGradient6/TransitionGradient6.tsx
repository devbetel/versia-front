const TransitionGradient6 = () => {
  return (
    <div className="hero-transition-wrapper">
      <style>{`
        :root {
          --navy: #042442;
          --navy-dark: #021a2f;
          --light: #f8f9fa;
        }

        .hero-transition-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .hero-transition-section {
          position: relative;
          height: 200px;
          width: 100%;
          background: linear-gradient(180deg, 
            var(--navy) 0%, 
            var(--navy-dark) 15%,
            rgba(4, 36, 66, 0.9) 35%,
            rgba(4, 36, 66, 0.7) 55%,
            rgba(248, 249, 250, 0.3) 75%,
            var(--light) 100%
          );
          overflow: hidden;
        }

        .hero-transition-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, 
            transparent 0%,
            rgba(4, 36, 66, 0.05) 30%,
            rgba(248, 249, 250, 0.15) 70%,
            var(--light) 100%
          );
          z-index: 1;
        }

        .hero-transition-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
          height: 100%;
          background: radial-gradient(ellipse 80% 100% at 50% 0%, 
            rgba(4, 36, 66, 0.15) 0%,
            rgba(4, 36, 66, 0.05) 40%,
            transparent 70%
          );
          z-index: 2;
        }

        .transition-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg,
            rgba(4, 36, 66, 0.1) 0%,
            rgba(4, 36, 66, 0.05) 30%,
            rgba(248, 249, 250, 0.05) 70%,
            transparent 100%
          );
          z-index: 1;
          animation: gradientShift 8s ease-in-out infinite;
        }

     .transition-mesh {
  position: absolute;
  top: 0;
  left: 0;  /* mudou de left: 50% */
  right: 0;  /* adicione esta linha */
  transform: none;  /* remova o translateX(-50%) */
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 2;
  background-image: 
    radial-gradient(circle at 30% 20%, rgba(4, 36, 66, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(248, 249, 250, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 50% 60%, rgba(4, 36, 66, 0.05) 0%, transparent 60%);
  background-size: 200px 200px, 250px 250px, 150px 150px;
  animation: meshFloat 15s ease-in-out infinite;
}

        .transition-flow {
          position: absolute;
          top: 0;
          left: -50%;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(4, 36, 66, 0.05) 30%,
            rgba(248, 249, 250, 0.1) 50%,
            rgba(4, 36, 66, 0.05) 70%,
            transparent 100%
          );
          z-index: 3;
          animation: flowTransition 15s linear infinite;
        }

        .transition-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
        }

        .transition-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          animation: particleTransition 12s linear infinite;
        }

        .transition-particle:nth-child(1) {
          background: rgba(4, 36, 66, 0.3);
          left: 25%;
          animation-delay: -1s;
          animation-duration: 14s;
        }

        .transition-particle:nth-child(2) {
          background: rgba(248, 249, 250, 0.5);
          left: 40%;
          animation-delay: -3s;
          animation-duration: 16s;
        }

        .transition-particle:nth-child(3) {
          background: rgba(4, 36, 66, 0.25);
          left: 60%;
          animation-delay: -2s;
          animation-duration: 13s;
        }

        .transition-particle:nth-child(4) {
          background: rgba(248, 249, 250, 0.4);
          left: 75%;
          animation-delay: -4s;
          animation-duration: 15s;
        }

        .transition-waves {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 4;
        }

        .transition-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(180deg,
            transparent 0%,
            rgba(248, 249, 250, 0.2) 40%,
            rgba(248, 249, 250, 0.6) 70%,
            var(--light) 100%
          );
        }

        .transition-wave::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(4, 36, 66, 0.15) 20%,
            rgba(248, 249, 250, 0.3) 50%,
            rgba(4, 36, 66, 0.15) 80%,
            transparent 100%
          );
          animation: waveRipple 8s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% {
            opacity: 1;
            transform: translateY(0px);
          }
          50% {
            opacity: 0.7;
            transform: translateY(5px);
          }
        }

      @keyframes meshFloat {
  0%, 100% {
    transform: translateY(0px);  /* removeu o translateX(-50%) */
  }
  50% {
    transform: translateY(-10px);
  }
}

        @keyframes flowTransition {
          0% {
            left: -50%;
          }
          100% {
            left: 50%;
          }
        }

        @keyframes particleTransition {
          0% {
            transform: translateY(220px) translateX(-15px);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-20px) translateX(15px);
            opacity: 0;
          }
        }

        @keyframes waveRipple {
          0%, 100% {
            transform: translateX(-20px) scaleX(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(20px) scaleX(1.05);
            opacity: 0.6;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-transition-section {
            height: 150px;
          }
          
          .transition-waves {
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .hero-transition-section {
            height: 120px;
          }
          
          .transition-waves {
            height: 50px;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .transition-gradient-overlay,
          .transition-mesh,
          .transition-flow,
          .transition-particle,
          .transition-wave::before {
            animation: none;
          }
        }
      `}</style>

      <section className="hero-transition-section">
        <div className="transition-gradient-overlay"></div>
        <div className="transition-mesh"></div>
        <div className="transition-flow"></div>

        <div className="transition-particles">
          <div className="transition-particle"></div>
          <div className="transition-particle"></div>
          <div className="transition-particle"></div>
          <div className="transition-particle"></div>
        </div>

        <div className="transition-waves">
          <div className="transition-wave"></div>
        </div>
      </section>
    </div>
  );
};

export default TransitionGradient6;