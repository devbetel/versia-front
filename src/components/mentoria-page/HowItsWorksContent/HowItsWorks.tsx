import './styles.css';

function HowItsWorks() {
  const stats = [
    {
      number: '6',
      label: 'Encontros ao Vivo Online',
      description: 'Cada encontro tem 2h (ou mais, até que todas as dúvidas sejam sanadas). Formato exclusivo com conteúdo denso e aplicável.'
    },
    {
      number: '30',
      label: 'Mulheres por Turma (Máximo)',
      description: 'Vagas limitadas para garantir foco total, networking qualificado e atendimento próximo de cada participante.'
    },
    {
      number: '100%',
      label: 'Foco em Comportamento',
      description: 'Não é só planilha. É psicologia econômica, estratégia real e autonomia de verdade para você dominar o timão da sua vida.'
    }
  ];

  return (
    <section className="como-funciona">
      <div className="como-funciona__inner">
        <div className="como-funciona__header">
          <p className="section-eyebrow">Como Funciona</p>
          <h2 className="section-title section-title--light">
            Como Funciona a <span className="accent">Mentoria</span>
          </h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-card__number">{stat.number}</div>
              <h3 className="stat-card__label">{stat.label}</h3>
              <p className="stat-card__desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItsWorks;