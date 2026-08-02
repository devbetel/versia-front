import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";
import { Variants } from "framer-motion";

const certifications = ["CFP®", "C-Pro I", "C-Pro R", "CPA", "Administração", "Finanças Comportamentais"];

const paragraphs = [
  "Quase duas décadas no mercado financeiro e a certificação CFP® me deram técnica. O que me fez mudar foi ver que técnica sem compreensão do comportamento não gera paz.",
  "Eu rompi com o modelo que empurra produtos e lições de moral. Rompi com a ideia de que dinheiro é só matemática. ",
  "Este espaço nasceu para provar que você pode, sim, dominar suas finanças sem abrir mão de viver bem hoje. Sem sermão. Sem culpa.",
  "Eu rompi com o modelo que empurra produtos e lições de moral. Rompi com a ideia de que dinheiro é só matemática. Rompi com a narrativa que culpa quem nunca foi ensinado a se enxergar.",
  "Este espaço nasceu para provar que você pode, sim, dominar suas finanças sem abrir mão de viver bem hoje. Sem sermão. Sem culpa. Só clareza, lógica e respeito pela sua história."
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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="about-section" id="sobre">
      <div className="about-container" ref={ref}>
        <div className="about-grid">

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

          <div className="about-content">
            <motion.span 
              className="section-tag" 
              custom={1} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              variants={fadeUp}
            > 
              A profissional que entende o sistema — e escolheu fazer diferente.
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
              custom={4 + paragraphs.length} 
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