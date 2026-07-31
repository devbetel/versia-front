import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import "./styles.css";

interface Etapa {
  numero: string;
  nome: string;
  descricao: string;
}

const etapas = [
  {
    numero: "V",
    nome: "Validação",
    descricao:
      "Onde mora a sua história.",
  },
  {
    numero: "É",
    nome: "Estancamento",
    descricao:
      "Parar a sangria.",
  },
  {
    numero: "R",
    nome: "Redirecionamento",
    descricao:
      "Orçamento que cabe na sua vida.",
  },
  {
    numero: "S",
    nome: "Sustentabilidade",
    descricao:
      "Piloto automático saudável.",
  },
  {
    numero: "I",
    nome: "Investimento de Paz",
    descricao:
      "Sua reserva como autocuidado.",
  },
  {
    numero: "A",
    nome: "Autonomia",
    descricao:
      'Liberdade de tempo e de escolhas.',
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const EtapaItem = ({ etapa, index }: { etapa: Etapa; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.li
      ref={ref}
      className="etapa-item"
      data-aos="fade-up"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, x: -40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      <div className="etapa-numero" data-aos="fade-right">
        <span>{etapa.numero}</span>
      </div>
      <div className="etapa-conteudo">
        <h3 className="etapa-titulo" data-aos="fade-up">
          {etapa.nome}
        </h3>
        <p className="etapa-descricao" data-aos="fade-bottom">
          {etapa.descricao}
        </p>
      </div>
    </motion.li>
  );
};

export default function Method() {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <section className="metodo-section" id="metodo">
      <div className="metodo-container">
        <div className="metodo-grid">
          <motion.div
            ref={contentRef}
            className="metodo-content"
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="metodo-tag" data-aos="fade-up">
              O Método VÉRSIA
            </span>
            <h2 className="metodo-titulo" data-aos="fade-left">
              Seis etapas.
              <em>Uma transformação que começa por dentro.</em>
            </h2>
            <div className="metodo-texto" data-aos="fade-left">
              <p>
                O Método VÉRSIA não é fórmula mágica. É processo. É sequência. É
                lógica aplicada ao comportamento.
              </p>
              <p>
                Porque mudar sua relação com o dinheiro não acontece por causa
                de uma planilha. Acontece quando cada fase prepara o terreno
                para a próxima. Acontece quando você entende de onde vieram seus
                padrões — e decide conscientemente o que quer carregar daqui
                para frente.
              </p>
            </div>
            <motion.a
              href="#mentoria"
              data-aos="fade-up"
              className="metodo-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Conhecer a mentoria
            </motion.a>
          </motion.div>

          <motion.div
            className="etapas-container"
            variants={staggerContainer}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
          >
            <ul className="etapas-lista">
              {etapas.map((etapa, index) => (
                <EtapaItem
                  key={etapa.numero}
                  etapa={etapa}
                  index={index}
                  data-aos="fade-up"
                />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
