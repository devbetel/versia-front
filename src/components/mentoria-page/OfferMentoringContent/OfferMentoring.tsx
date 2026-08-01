import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import "./styles.css";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const OfferMentoring: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="pricing"
      className="pricing-mentoring-section"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <div className="pricing-container">
        {/* Header Section */}
        <motion.div
          className="pricing-header-mentoring"
          variants={fadeInUp}
        >
          <span className="pricing-tag">Escolha seu Plano</span>
          <h2 className="pricing-title-mentoring">
            Escolha o seu <span className="accent-gold">Próximo Passo</span>
          </h2>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="pricing-card-mentoring vip-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          {/* Glow Effect */}
          <div className="card-glow-mentoring"></div>

          {/* Badge */}
          <motion.div
            className="badge-mentoring"
            variants={fadeIn}
            whileHover={{ scale: 1.1 }}
          >
            Recomendado
          </motion.div>

          {/* Tag */}
          <motion.span
            className="card-tag-mentoring"
            variants={fadeIn}
          >
            Para quem quer autonomia
          </motion.span>

          {/* Name */}
          <motion.div
            className="card-name-mentoring"
            variants={fadeInUp}
          >
            Mentoria VÉRSIA
          </motion.div>

          {/* Price Section */}
          <motion.div
            className="card-price-wrapper-mentoring"
            variants={fadeInUp}
          >
            <div className="card-installment-mentoring">
              <span className="installment-label">12x</span>
              <span className="installment-price">R$ 29,17</span>
            </div>
            <div className="card-cash-price">ou R$ 350,00 à vista</div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="card-divider"
            variants={fadeIn}
          ></motion.div>

          {/* Features List */}
          <motion.ul
            className="card-features-mentoring"
            variants={staggerContainer}
          >
            {[
              "Acesso às gravações das aulas por 6 meses",
              "Planilha Exclusiva de Controle Orçamentário",
              "Material Complementar em PDF",
              "Checklist de Ações Propostas",
              "Plano de Ação Estruturado",
            ].map((feature, index) => (
              <motion.li key={index} variants={fadeInUp}>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Call to Action */}
          <motion.a
            href="https://pay.kiwify.com.br/S42F8KF"
            className="btn-card-mentoring"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
          >
            Quero Fazer Parte
          </motion.a>

          {/* Guarantee */}
          <motion.div
            className="guarantee-box"
            variants={fadeIn}
          >
            <p>
              <strong className="gold-text">Garantia:</strong> Se nas primeiras aulas você perceber que não é para você, devolvemos seu dinheiro. Sem burocracia.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OfferMentoring;