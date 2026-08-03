import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import "./styles.css";

// Variants para animações
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const Different = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const manifestoItems = [
    { nao: "Corta o cafezinho", sim: "Entenda para onde vai cada real" },
    { nao: "Você gasta demais", sim: "Você nunca aprendeu a se ver" },
    { nao: "Siga essa planilha", sim: "Crie um sistema que funcione para a sua vida" },
    { nao: "Fórmula de guru", sim: "Método que respeita sua realidade" },
    { nao: "Promessa de enriquecer rápido", sim: "Clareza para decidir melhor" },
    { nao: "Mais uma lição de moral", sim: "Uma profissional real do seu lado" },
  ];

  return (
    <div className="different" ref={ref}>
      <div className="different-container">
        <section className="section-manifesto">
          <div className="manifesto-grid">
            <motion.div 
              className="fade-in"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.span 
                className="section-tag" 
                variants={fadeInUp}
                custom={{ delay: 0.1 }}
              >
                Um novo jeito de olhar para o seu dinheiro
              </motion.span>

              <motion.h2 
                className="manifesto-title"
                variants={fadeInUp}
                custom={{ delay: 0.2 }}
              >
                Estou cansada do<br />discurso que pune.<br />
              </motion.h2>

              <motion.p 
                className="manifesto-body"
                variants={fadeInUp}
                custom={{ delay: 0.3 }}
              >
                Cansada da narrativa que coloca culpa onde deveria existir compreensão. Cansada de ver pessoas inteligentes acreditando que "não nasceram para lidar com dinheiro".
                Décadas dentro do mercado me mostraram algo que a maioria dos especialistas ignora: <strong className="accent">estar endividado no Brasil não é falta de caráter. </strong>
                É consequência de um sistema que ensina você a gastar antes de ensinar você a se enxergar.
              </motion.p>
            </motion.div>

            <motion.div 
              className="fade-in"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h2 
                className="lista-title"
                variants={fadeInUp}
                custom={{ delay: 0.4 }}
              >
                Aqui, Tudo Muda:
              </motion.h2>

              <ul className="manifesto-lista">
                {manifestoItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="manifesto-item"
                    variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                    custom={{ delay: 0.5 + (index * 0.08) }}
                    whileHover={{ 
                      x: 8,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.span 
                      className="nao"
                      variants={scaleIn}
                      custom={{ delay: 0.55 + (index * 0.08) }}
                    >
                      {item.nao}
                    </motion.span>

                    <motion.span 
                      className="sep"
                      variants={scaleIn}
                      custom={{ delay: 0.6 + (index * 0.08) }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      →
                    </motion.span>

                    <motion.span 
                      className="sim"
                      variants={scaleIn}
                      custom={{ delay: 0.65 + (index * 0.08) }}
                    >
                      {item.sim}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Different;