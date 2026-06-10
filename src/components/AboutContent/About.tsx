import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";
import { Variants } from "framer-motion";

const certifications = ["CFP®", "CEA", "CPA-20", "CPA-10", "Administração de Empresas", "Finanças Comportamentais"];

const paragraphs = [
  "Danielle Borges cresceu respirando o mercado financeiro. Influenciada por um tio que trabalhava no Banco do Brasil e a quem vê como um pai profissional, ela se apaixonou desde cedo por esse universo de prestígio.",
  "Hoje, com quase duas décadas de experiência na área e a certificação CFP®, Danielle percebeu que o dinheiro ainda é tratado, muitas vezes, apenas como um número, uma meta ou um produto. Movida pelo desejo de humanizar essa relação, ela criou um espaço onde as finanças se tornam uma verdadeira ferramenta de transformação.",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.13, 
      duration: 0.75, 
      ease: "easeOut", 
    },
  }),
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section className="about-section" id="sobre">
      <div className="about-container" ref={ref}>
        <div className="about-grid">

          {/* FOTO */}
          <motion.div 
            className="about-foto-wrap" 
            custom={0} 
            initial="hidden" 
            animate={isInView ? "visible" : "hidden"} 
            variants={fadeUp}
          >
            <img 
              src="/about-01.jpeg" 
              alt="Foto de Danielle Borges" 
              className="about-foto-image" 
            />
            <div className="about-foto-frame"></div>
            <div className="about-foto-line"></div>
          </motion.div>

          {/* CONTEÚDO */}
          <div className="about-content">
            <motion.span 
              className="section-tag visible" 
              custom={1} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              variants={fadeUp}
            > 
              Quem está do outro lado
            </motion.span>

            <motion.h2 
              className="about-nome" 
              custom={2} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              variants={fadeUp}
            >
              Danielle Borges
            </motion.h2>

            <motion.p 
              className="about-titulo" 
              custom={3} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              variants={fadeUp}
            >
              Planejadora Financeira CFP® · Especialista em Comportamento
            </motion.p>

            <motion.div 
              className="about-divider" 
              custom={3.5} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              variants={fadeUp} 
            />

            {paragraphs.map((text, i) => (
              <motion.p 
                key={i} 
                className="about-texto" 
                custom={4 + i} 
                initial="hidden" 
                animate={isInView ? "visible" : "hidden"} 
                variants={fadeUp}
              >
                {text}
              </motion.p>
            ))}

            <motion.div 
              className="about-certs" 
              custom={7} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              variants={fadeUp}
            >
              {certifications.map((cert) => (
                <span key={cert} className="cert">{cert}</span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;