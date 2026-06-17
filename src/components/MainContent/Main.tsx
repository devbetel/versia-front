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
      <div className="container main-container" >
        <div data-aos="fade-right" className="left-side">
          <div className="left-accent-line" data-aos="fade-down"></div>
          <h2 data-aos="fade-right" data-aos-delay="100" className="title-principal">
            Você não precisa ganhar mais.
          </h2>
          <h3 data-aos="fade-right" data-aos-delay="200" className="subtitle">
            {typewriterText}
            <span className="cursor">|</span>
          </h3>
          <p data-aos="fade-up" data-aos-delay="300" className="description">
            Quase 20 anos no mercado financeiro me ensinaram uma coisa:{" "}
            <strong className="description-strong">
              a maioria das pessoas não tem problema de renda. Tem problema de relação com o dinheiro.
            </strong>{" "}
            Aqui não tem lição de moral. Tem o caminho de volta para a sua paz financeira.
          </p>
          <div data-aos="fade-up" data-aos-delay="400" className="buttons-container">
            <button
                className="btn-beige"
                onClick={() => (window.location.href = '#products')}
                data-aos="zoom-in"
                data-aos-delay="500"
            >
                Veja como posso te ajudar
            </button>
            <button
                className="btn-outline"
                onClick={() => (window.location.href = '#about')}
                data-aos="zoom-in"
                data-aos-delay="600"
            >
                QUEM SOU EU
            </button>
          </div>
        </div>

        <div className="right-side" data-aos="fade-left" data-aos-delay="200">
          <div className="finance-deco">
            <span className="deco-symbol sym-1" data-aos="fade-down" data-aos-delay="300">$</span>
            <span className="deco-symbol sym-2" data-aos="fade-down" data-aos-delay="350">€</span>
            <span className="deco-symbol sym-3" data-aos="fade-down" data-aos-delay="400">R$</span>
            <span className="deco-symbol sym-4" data-aos="fade-down" data-aos-delay="450">¥</span>
            <span className="deco-symbol sym-5" data-aos="fade-down" data-aos-delay="500">£</span>
            <span className="deco-symbol sym-6" data-aos="fade-down" data-aos-delay="550">₿</span>
            <span className="deco-symbol sym-7" data-aos="fade-down" data-aos-delay="600">₹</span>
            <span className="deco-symbol sym-8" data-aos="fade-down" data-aos-delay="650">₩</span>
            <span className="deco-symbol sym-9" data-aos="fade-down" data-aos-delay="700">₦</span>
            <span className="deco-symbol sym-10" data-aos="fade-down" data-aos-delay="750">₫</span>
            <div className="deco-line line-1" data-aos="fade-right" data-aos-delay="400"></div>
            <div className="deco-line line-2" data-aos="fade-left" data-aos-delay="500"></div>
            <div className="deco-dot dot-1" data-aos="zoom-in" data-aos-delay="600"></div>
            <div className="deco-dot dot-2" data-aos="zoom-in" data-aos-delay="650"></div>
            <div className="deco-dot dot-3" data-aos="zoom-in" data-aos-delay="700"></div>
            <div className="deco-dot dot-4" data-aos="zoom-in" data-aos-delay="750"></div>
            <div className="deco-dot dot-5" data-aos="zoom-in" data-aos-delay="800"></div>
          </div>
          <div className="right-content" data-aos="fade-up" data-aos-delay="300">
            <div className="right-text">
              <span className="right-line" data-aos="fade-right" data-aos-delay="400"></span>
              <h2 className="right-name" data-aos="fade-up" data-aos-delay="500">Danielle Borges</h2>
              <p className="right-subtitle" data-aos="fade-up" data-aos-delay="600">
                PLANEJADORA FINANCEIRA CFP® · ESPECIALISTA EM COMPORTAMENTO
              </p>
            </div>
            <img
              src="/IMG_3165-SEM-FUNDO-RECORTADA.png"
              alt="Logo"
              className="img-principal"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;