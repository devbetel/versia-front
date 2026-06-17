import  { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";
import { Variants } from "framer-motion";

const certifications = ["CFP®", "CEA", "CPA-20", "CPA-10", "Administração de Empresas", "Finanças Comportamentais"];

const paragraphs = [
  "Aos olhos do mercado tradicional, eu tenho o crachá perfeito. São quase duas décadas de experiência prática e a certificação CFP®, o padrão mais alto de excelência financeira que existe. Minha paixão por esse mundo começou cedo, vendo meu tio construir uma carreira sólida no Banco do Brasil.",
  "Eu sei exatamente como o sistema funciona. E é por isso que decidi romper com ele.",

  "Percebi que empurrar produtos, metas frias e lições de moral não traz paz financeira para ninguém. Dinheiro não é matemática pura; é comportamento. Este espaço nasceu para provar que você pode, sim, dominar as suas finanças sem abrir mão de viver bem hoje. Sem sermão. Só clareza e o respeito que a sua história merece.",
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