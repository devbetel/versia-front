import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./styles.css";
import { Variants } from "framer-motion";

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

const produtos = [
  {
    href: "#",
    nivel: "Entrada · Autonomia",
    nome: "App + Aulas de Autoatendimento",
    desc: "Organize, visualize e entenda o seu dinheiro — no seu ritmo, sem precisar de ninguém. Kit completo de autonomia financeira.",
    precoValor: "197,00",
    precoSufixo: "/ mês",
    cta: "Ver mais",
    emBreve: false,
  },
  {
    href: "/ebook-jogo-invisivel",
    nivel: "Conhecimento · Comportamento",
    nome: "E-book: O Jogo Invisível do Dinheiro",
    desc: "Pesquisa + comportamento + sistema. Entenda por que você faz com o dinheiro o que você faz — e como mudar isso.",
    precoValor: "26,90",
    precoSufixo: "· com masterclass R$98,90",
    cta: "Ver mais",
    emBreve: false,
  },
  {
    href: "#",
    nivel: "Conhecimento · Empresários",
    nome: "E-book: O Empresário e o Patrimônio",
    desc: "Para MEIs, profissionais liberais e empresários que faturam bem mas ainda não construíram patrimônio de verdade.",
    precoValor: "26,90",
    precoSufixo: "· com masterclass R$98,90",
    cta: "Ver mais",
    emBreve: false,
  }
];

interface Produto {
  href: string;
  nivel: string;
  nome: string;
  desc: string;
  precoValor?: string;
  precoSufixo?: string;
  cta: string;
  emBreve: boolean;
  precoTexto?: string;
}

function ProdutoCard({ produto, index, isInView }: { produto: Produto; index: number; isInView: boolean; }) {
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

      <div className="produto-preco-wrap">
        {produto.precoValor ? (
          <div className="produto-preco">
            <sup>R$</sup>
            {produto.precoValor}
            <span className="produto-preco-sufixo">{produto.precoSufixo}</span>
          </div>
        ) : (
          <span className="produto-preco-texto">{produto.precoTexto}</span>
        )}
      </div>

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

        <div className="produtos-grid">
          {produtos.map((produto, i) => (
            <ProdutoCard
              key={i}
              produto={produto}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}