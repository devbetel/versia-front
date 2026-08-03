import "./styles.css";

const Main = () => {
  return (
    <main className="main">
      <div className="container main-container">
        {/* LEFT SIDE */}
        <div data-aos="fade-right" className="left-side">
          <div className="left-accent-line" data-aos="fade-down"></div>
          
          <h2 data-aos="fade-right" data-aos-delay="100" className="title-principal">
            Você não precisa de mais informação sobre dinheiro.
          </h2>
          
          <h3 data-aos="fade-right" data-aos-delay="200" className="subtitle">
            Você precisa de lógica para mudar seu comportamento.
          </h3>
          
          <p data-aos="fade-up" data-aos-delay="300" className="description">
            <strong className="description-strong">
              Mentoria coletiva Método VÉRSIA
            </strong>{" "}
            — para quem ganha bem, vive no automático e quer <strong className="description-strong"> clareza, controle e autonomia financeira.</strong>
            <br /><br />
            Do diagnóstico à autonomia: um processo prático de{" "}
            <strong className="description-strong">2 meses</strong> que transforma conhecimento em hábito.
          </p>

          

<a href="https://pay.kiwify.com.br/S42F8KF">
          <button className="hero__cta">
            
            Quero Minha Versão financeiramente mais forte
          </button>
            </a>

          <p className="hero__badge">
            2 meses • Máximo 30 pessoas • Online ao vivo

          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-side" data-aos="fade-left" data-aos-delay="200">
          <div className="finance-deco">
            <DecorativeElements />
          </div>
          <div className="right-content">
            <div className="img-wrapper">
              <img
                src="/IMG_3165-SEM-FUNDO-RECORTADA.png"
                alt="Danielle Borges"
                className="img-principal"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
            </div>
            <span className="right-line" data-aos="fade-right" data-aos-delay="400"></span>
          </div>
        </div>
      </div>
    </main>
  );
};

const DecorativeElements = () => (
  <>
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
  </>
);

export default Main;