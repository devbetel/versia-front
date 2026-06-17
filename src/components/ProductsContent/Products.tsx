import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import "./styles.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.08,
      duration: 0.75,
      ease: "easeOut",
    },
  }),
};

type Categoria = "todos" | "para-voce" | "para-empresas" | "livros-ferramentas";

interface Produto {
  href: string;
  nivel: string;
  nome: string;
  desc: string;
  cta: string;
  emBreve: boolean;
  categorias: Categoria[];
}

const produtos: Produto[] = [
  {
    href: "/mentoria-versia",
    nivel: "Comunidade · Mulheres",
    nome: "Mentoria Coletiva para Mulheres",
    desc: "6 encontros semanais ao vivo seguindo o método Vérsia - da validação emocional até a autonomia financeira real.",
    cta: "Ver mais",
    emBreve: false,
    categorias: ["para-voce"],
  },
  {
    href: "/ebook-jogo-invisivel",
    nivel: "Conhecimento · Comportamento",
    nome: "E-book: O Jogo Invisível do Dinheiro",
    desc: "Pesquisa + comportamento + sistema. Entenda por que você faz com o dinheiro o que você faz — e como mudar isso.",
    cta: "Ver mais",
    emBreve: false,
    categorias: ["livros-ferramentas"],
  },
  {
    href: "/ebook-empresario-patrimonio",
    nivel: "Conhecimento · Empresários",
    nome: "E-book: O Empresário e o Patrimônio",
    desc: "Para MEIs, profissionais liberais e empresários que faturam bem mas ainda não construíram patrimônio de verdade.",
    cta: "Ver mais",
    emBreve: false,
    categorias: ["livros-ferramentas", "para-empresas"],
  },
  {
    href: "#",
    nivel: "Especialidade",
    nome: "Finanças Comportamentais",
    desc: "Por que você faz com o dinheiro o que você faz? Um trabalho profundo sobre os padrões que governam suas decisões financeiras.",
    cta: "",
    emBreve: true,
    categorias: ["para-voce"],
  },
  {
    href: "#",
    nivel: "Entrada · Autonomia",
    nome: "App + Aulas de Autoatendimento",
    desc: "Organize, visualize e entenda o seu dinheiro — no seu ritmo, sem precisar de ninguém. Kit completo de autonomia financeira.",
    cta: "",
    emBreve: true,
    categorias: ["para-voce"],
  },
];

function ProdutoCard({
  produto,
  index,
  isInView,
}: {
  produto: Produto;
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const isActive = hovered && !produto.emBreve;

  const cardClass = [
    "produto-card",
    produto.emBreve ? "em-breve" : "",
    isActive ? "ativo" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const ctaClass = [
    "produto-cta",
    isActive ? "ativo" : "",
    produto.emBreve ? "desabilitado" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.a
      href={produto.emBreve ? undefined : produto.href}
      className={cardClass}
      custom={index * 0.15 + 1}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      onHoverStart={() => !produto.emBreve && setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      layout
    >
      <motion.div
        className="card-accent-line"
        animate={{ scaleX: isActive ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <span className="produto-nivel">{produto.nivel}</span>
      <h3 className="produto-nome">{produto.nome}</h3>
      <p className="produto-desc">{produto.desc}</p>
      <div className="produto-divider" />

      {produto.emBreve && (
        <div className="produto-em-breve-badge">Em breve</div>
      )}

      <div className={ctaClass}>
        <span>{produto.cta}</span>
        <motion.span
          animate={{ x: isActive ? 5 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ display: "inline-block" }}
        >
          →
        </motion.span>
      </div>
    </motion.a>
  );
}

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria | null>(null);

  // Filtro corrigido para mostrar TODOS os produtos quando "todos" estiver ativo
  const produtosFiltrados = 
    categoriaAtiva === "todos" 
      ? produtos 
      : categoriaAtiva 
        ? produtos.filter((p) => p.categorias.includes(categoriaAtiva))
        : [];

  const abas = [
    { id: "todos" as Categoria, label: "Todos" },
    { id: "para-voce" as Categoria, label: "Para Você" },
    { id: "para-empresas" as Categoria, label: "Para Empresas" },
    { id: "livros-ferramentas" as Categoria, label: "Livros e Ferramentas" },
  ];

  return (
    <section id="produtos" className="produtos-section">
      <div className="produtos-container" ref={ref}>
        <motion.div
          className="produtos-header"
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <span className="produtos-section-tag">Por onde começar</span>
          <h2 className="produtos-title">
            Escolha o seu <em>próximo passo</em>
          </h2>
          <p className="produtos-sub">
            Do mais acessível ao mais aprofundado — cada produto foi criado
            para um momento diferente da sua jornada financeira.
          </p>
        </motion.div>

        <motion.div
          className="produtos-tabs"
          custom={0.5}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          {abas.map((aba) => (
            <button
              key={aba.id}
              className={`tab-button ${categoriaAtiva === aba.id ? "active" : ""}`}
              onClick={() => setCategoriaAtiva(aba.id)}
            >
              {aba.label}
              {categoriaAtiva === aba.id && (
                <motion.div
                  className="tab-underline"
                  layoutId="activeTab"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}
            </button>
          ))}
        </motion.div>

        <motion.div className="produtos-grid" layout>
          {produtosFiltrados.map((produto, i) => (
            <ProdutoCard
              key={produto.nome}
              produto={produto}
              index={i}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}