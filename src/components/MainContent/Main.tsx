import React from "react";
import "./styles.css";
import { useTypewriter } from "../../hooks/useTypewriter";

const Main = () => {
  const typewriterText = useTypewriter({
    text: "Precisa viver bem com o que já tem.",
    speed: 80,
    deleteSpeed: 40,
    delayBefore: 2000,
    loop: true,
  });

  return (
    <main className="main">
      <div className="container main-container">
        <div data-aos="fade-right" className="left-side">
          <div className="left-accent-line"></div>
          <h2 data-aos="fade-right" className="title-principal">
            Você não precisa ganhar mais.
          </h2>
          <h3 data-aos="fade-right" className="subtitle">
            {typewriterText}
            <span className="cursor">|</span>
          </h3>
          <p data-aos="fade-up" className="description">
            Quase 20 anos no mercado financeiro me ensinaram uma coisa:{" "}
            <strong className="description-strong">
              a maioria das pessoas não tem problema de renda. Tem problema de relação.
            </strong>{" "}
            Aqui não tem lição de moral. Tem o caminho de volta para a sua paz financeira.
          </p>
          <div data-aos="fade-up" className="buttons-container">
    <button
        className="btn-beige"
        onClick={() => (window.location.href = '#products')}
    >
        CONHEÇA OS PRODUTOS
    </button>
    <button
        className="btn-outline"
        onClick={() => (window.location.href = '#about')}
    >
        QUEM SOU EU
    </button>
</div>
        </div>

        <div className="right-side">
          <div className="finance-deco">
  <span className="deco-symbol sym-1">$</span>
  <span className="deco-symbol sym-2">€</span>
  <span className="deco-symbol sym-3">R$</span>
  <span className="deco-symbol sym-4">¥</span>
  <span className="deco-symbol sym-5">£</span>
  <span className="deco-symbol sym-6">₿</span>
  <span className="deco-symbol sym-7">₹</span>
  <span className="deco-symbol sym-8">₩</span>
  <span className="deco-symbol sym-9">₦</span>
  <span className="deco-symbol sym-10">₫</span>
  <div className="deco-line line-1"></div>
  <div className="deco-line line-2"></div>
  <div className="deco-dot dot-1"></div>
  <div className="deco-dot dot-2"></div>
  <div className="deco-dot dot-3"></div>
  <div className="deco-dot dot-4"></div>
  <div className="deco-dot dot-5"></div>
</div>
          <div className="right-content">
            <div className="right-text">
              <span className="right-line"></span>
              <h2 className="right-name" >Danielle Borges</h2>
              <p className="right-subtitle">
                PLANEJADORA FINANCEIRA CFP® · ESPECIALISTA EM COMPORTAMENTO
              </p>
            </div>
            <img
              src="/IMG_3165-SEM-FUNDO-RECORTADA.png"
              alt="Logo"
              className="img-principal"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;