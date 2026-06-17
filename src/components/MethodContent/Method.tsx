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
    numero: "01",
    nome: "Validação Emocional",
    descricao:
      "Mapeamos as histórias e experiências que você ouviu e viveu sobre dinheiro no passado. Sem desatar esses nós, qualquer mudança será superficial.",
  },
  {
    numero: "02",
    nome: "Estancamento",
    descricao:
      "Renegociação de dívidas e corte de juros abusivos. Paramos a sangria financeira antes de dar qualquer outro passo.",
  },
  {
    numero: "03",
    nome: "Redirecionamento",
    descricao:
      "Desenhamos o seu orçamento real — aquele que respeita a sua rotina atual e cabe na sua vida de verdade, sem privações absurdas. ",
  },
  {
    numero: "04",
    nome: "Sustentabilidade",
    descricao:
      "Criamos um piloto automático financeiro saudável. Um sistema prático que funciona sozinho, inclusive nos meses mais difíceis.",
  },
  {
    numero: "05",
    nome: "Investimento de Paz",
    descricao:
      "A construção da sua reserva de emergência. Ela não serve para te deixar rico, mas para ser o seu primeiro ato real de autocuidado e tranquilidade.",
  },
  {
    numero: "06",
    nome: "Autonomia",
    descricao:
      'Liberdade de tempo e de escolhas. O dinheiro deixa de ser uma barreira invisível e passa a ser a ferramenta que te permite dizer "sim".',
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
              O método Vérsia
            </span>
            <h2 className="metodo-titulo" data-aos="fade-left">
              Seis etapas.
              <em>Uma transformação que começa por dentro.</em>
            </h2>
            <div className="metodo-texto" data-aos="fade-left">
              <p>
                O Método Vérsia não é uma fórmula mágica de internet, é um
                processo sequencial — porque mudar a sua relação com o dinheiro
                não acontece por causa de uma planilha. Acontece quando cada
                fase prepara o terreno para a próxima.
              </p>
              <p>
                Não é sobre ter uma disciplina militar. É sobre entender de onde
                vieram os seus padrões e decidir, conscientemente, o que você
                quer carregar daqui para frente.
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
