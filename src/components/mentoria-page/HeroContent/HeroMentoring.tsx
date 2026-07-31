import './styles.css';

function HeroMentoring() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div
        className="hero__circle"
        style={{ width: '600px', height: '600px' }}
        data-aos="fade-in"
        data-aos-delay="100"
      ></div>
      <div
        className="hero__circle"
        style={{ width: '900px', height: '900px' }}
        data-aos="fade-in"
        data-aos-delay="200"
      ></div>

      <div className="hero__content">
        <h1 className="hero__title" data-aos="fade-down" data-aos-delay="300">
          Mentoria Coletiva<br />
          para<br />
          Autonomia Financeira<br />
          Feminina
        </h1>

        <p className="hero__subtitle" data-aos="fade-up" data-aos-delay="400">
          Você não precisa de mais informação sobre dinheiro. <br />
          Você precisa de lógica para mudar seu comportamento.
        </p>

        <div
          className="hero__description"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p>
            <strong>
              Mentoria coletiva Método VÉRSIA — para quem ganha bem, vive no
              automático e quer clareza, controle e autonomia financeira.
            </strong>
          </p>
          <p>
            Do diagnóstico à autonomia: um processo prático de 2 meses que
            transforma conhecimento em hábito.
          </p>
        </div>

        <div className="hero__quote" data-aos="zoom-in" data-aos-delay="600">
          <p>
            <strong>Você tem, de fato, autonomia sobre o seu dinheiro?</strong>
          </p>
        </div>

        <p
          className="hero__subtitle"
          style={{ marginBottom: '2.5rem' }}
          data-aos="fade-up"
          data-aos-delay="700"
        >
          A independência te tira do barco dos outros. A{' '}
          <strong>autonomia</strong> te dá o poder de decidir o destino da sua
          vida.
        </p>

        <button
          className="hero__cta"
          onClick={scrollToPricing}
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          Quero Minha Versão financeiramente mais forte
        </button>

        <p className="hero__badge" data-aos="fade-up" data-aos-delay="900">
          2 meses • Máximo 30 pessoas • Online ao vivo
        </p>
      </div>
    </section>
  );
}

export default HeroMentoring;