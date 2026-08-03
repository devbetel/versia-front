import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import "./styles.css";

const etapas = [
  { numero: "V", nome: "Validação", descricao: "Onde mora a sua história." },
  { numero: "É", nome: "Estancamento", descricao: "Parar a sangria." },
  { numero: "R", nome: "Redirecionamento", descricao: "Orçamento que cabe na sua vida." },
  { numero: "S", nome: "Sustentabilidade", descricao: "Piloto automático saudável." },
  { numero: "I", nome: "Investimento de Paz", descricao: "Sua reserva como autocuidado." },
  { numero: "A", nome: "Autonomia", descricao: "Liberdade de tempo e de escolhas." },
];

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
      staggerChildren: 0.12,
      delayChildren: 0.2,
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export default function Method() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="metodo-section" id="metodo">
      <div className="metodo-container">
        <div className="metodo-grid">
          <motion.div
            ref={ref}
            className="metodo-content"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span 
              className="metodo-tag" 
              variants={fadeInUp}
              custom={{ delay: 0.1 }}
            >
              
              O Método VÉRSIA
            </motion.span>

            <motion.h2 
              className="metodo-titulo"
              variants={fadeInUp}
              custom={{ delay: 0.2 }}
            >
              Seis etapas.
              <em>Uma transformação que começa por dentro.</em>
            </motion.h2>

            <motion.div 
              className="metodo-texto"
              variants={fadeInUp}
              custom={{ delay: 0.3 }}
            >
              <motion.p
                variants={fadeInUp}
                custom={{ delay: 0.35 }}
              >
                <strong className="accent-2">O Método VÉRSIA </strong> não é fórmula mágica. É processo. É sequência. É lógica aplicada ao comportamento.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                custom={{ delay: 0.4 }}
              >
                Porque mudar sua relação com o dinheiro não acontece por causa de uma planilha. Acontece quando cada fase prepara o terreno para a próxima. Acontece quando você entende de onde vieram seus padrões — e decide conscientemente o que quer carregar daqui para frente.
              </motion.p>
            </motion.div>

          
          </motion.div>

          <motion.div 
            className="etapas-container"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <ul className="etapas-lista">
              {etapas.map((etapa, index) => (
                <motion.li 
                  key={etapa.numero} 
                  className="etapa-item"
                  variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                  custom={{ delay: 0.3 + (index * 0.1) }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="etapa-numero"
                    variants={scaleIn}
                    custom={{ delay: 0.4 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span>{etapa.numero}</span>
                  </motion.div>
                  <motion.div 
                    className="etapa-conteudo"
                    variants={fadeInUp}
                    custom={{ delay: 0.35 + (index * 0.1) }}
                  >
                    <motion.h3 
                      className="etapa-titulo"
                      variants={fadeInLeft}
                      custom={{ delay: 0.4 + (index * 0.1) }}
                    >
                      {etapa.nome}
                    </motion.h3>
                    <motion.p 
                      className="etapa-descricao"
                      variants={fadeInUp}
                      custom={{ delay: 0.45 + (index * 0.1) }}
                    >
                      {etapa.descricao}
                    </motion.p>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}