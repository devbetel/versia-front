import React from 'react';

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
          background: linear-gradient(160deg, 
            var(--navy) 0%, 
            var(--navy-dark) 20%,
            rgba(4, 36, 66, 0.95) 40%,
            rgba(4, 36, 66, 0.8) 60%,
            rgba(248, 249, 250, 0.1) 80%,
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
            rgba(4, 36, 66, 0.1) 30%,
            rgba(248, 249, 250, 0.3) 70%,
            var(--light) 100%
          );
          z-index: 1;
        }

        .hero-transition-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse 150% 100% at 50% 0%, 
            rgba(4, 36, 66, 0.2) 0%,
            rgba(4, 36, 66, 0.1) 30%,
            transparent 60%
          );
          z-index: 2;
        }

        .transition-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(160deg,
            var(--navy) 0%,
            rgba(4, 36, 66, 0.9) 25%,
            rgba(4, 36, 66, 0.7) 45%,
            rgba(4, 36, 66, 0.4) 65%,
            rgba(248, 249, 250, 0.2) 85%,
            var(--light) 100%
          );
          z-index: 1;
          animation: gradientShift 8s ease-in-out infinite;
        }

        .transition-mesh {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.4;
          z-index: 2;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(4, 36, 66, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(248, 249, 250, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(4, 36, 66, 0.05) 0%, transparent 50%);
          background-size: 150px 150px, 200px 200px, 100px 100px;
          animation: meshFloat 15s ease-in-out infinite;
        }

        .transition-flow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(4, 36, 66, 0.1) 25%,
            rgba(248, 249, 250, 0.2) 50%,
            rgba(4, 36, 66, 0.1) 75%,
            transparent 100%
          );
          z-index: 3;
          animation: flowTransition 12s linear infinite;
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
          width: 3px;
          height: 3px;
          border-radius: 50%;
          animation: particleTransition 10s linear infinite;
        }

        .transition-particle:nth-child(1) {
          background: rgba(4, 36, 66, 0.4);
          left: 15%;
          animation-delay: -1s;
          animation-duration: 12s;
        }

        .transition-particle:nth-child(2) {
          background: rgba(248, 249, 250, 0.6);
          left: 35%;
          animation-delay: -3s;
          animation-duration: 14s;
        }

        .transition-particle:nth-child(3) {
          background: rgba(4, 36, 66, 0.3);
          left: 55%;
          animation-delay: -2s;
          animation-duration: 11s;
        }

        .transition-particle:nth-child(4) {
          background: rgba(248, 249, 250, 0.5);
          left: 75%;
          animation-delay: -4s;
          animation-duration: 13s;
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
            rgba(248, 249, 250, 0.3) 40%,
            rgba(248, 249, 250, 0.7) 70%,
            var(--light) 100%
          );
        }

        .transition-wave::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(4, 36, 66, 0.2) 20%,
            rgba(248, 249, 250, 0.4) 50%,
            rgba(4, 36, 66, 0.2) 80%,
            transparent 100%
          );
          animation: waveRipple 6s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% {
            opacity: 1;
            transform: translateX(0px);
          }
          50% {
            opacity: 0.8;
            transform: translateX(10px);
          }
        }

        @keyframes meshFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(0.5deg);
          }
          66% {
            transform: translateY(5px) rotate(-0.3deg);
          }
        }

        @keyframes flowTransition {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes particleTransition {
          0% {
            transform: translateY(200px) translateX(-20px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes waveRipple {
          0%, 100% {
            transform: translateX(-30px) scaleX(1);
            opacity: 0.4;
          }
          50% {
            transform: translateX(30px) scaleX(1.1);
            opacity: 0.8;
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
        {/* Main gradient overlay */}
        <div className="transition-gradient-overlay"></div>

        {/* Mesh texture */}
        <div className="transition-mesh"></div>

        {/* Flow effect */}
        <div className="transition-flow"></div>

        {/* Floating particles */}
        <div className="transition-particles">
          <div className="transition-particle"></div>
          <div className="transition-particle"></div>
          <div className="transition-particle"></div>
          <div className="transition-particle"></div>
        </div>

        {/* Bottom waves */}
        <div className="transition-waves">
          <div className="transition-wave"></div>
        </div>
      </section>
    </div>
  );
};

export default TransitionGradient6;