import './styles.css';

function MethodMentoring() {
  const steps = [
    {
      letter: 'V',
      encounter: 'Encontro 1',
      topic: 'Mapeamento de Padrões e Histórico',
      title: 'alidação Emocional',
      description: 'O dinheiro sumir ou faltar costuma estar ligado ao que você ouviu e viveu no passado. Vamos desarmar esses bloqueios comportamentais e entender como e por que você toma suas decisões financeiras hoje. Sem teorias superficiais: psicologia econômica pura.'
    },
    {
      letter: 'E',
      encounter: 'Encontro 2',
      topic: 'Diagnóstico e Blindagem de Juros',
      title: 'stancamento',
      description: 'Chega de sangrar dinheiro com taxas abusivas, contratos desvantajosos e escolhas erradas (como produtos empurrados por bancos que não servem para o seu perfil). Vamos mapear os ralos financeiros e estruturar uma renegociação com autoridade.'
    },
    {
      letter: 'R',
      encounter: 'Encontro 3',
      topic: 'Lastro e Alinhamento do Orçamento Real',
      title: 'edirecionamento',
      description: 'Trazer o seu dinheiro para a realidade com clareza. Você aprenderá a dar um destino estratégico para cada centavo, criando um lastro financeiro seguro e descobrindo que "existe dinheiro dentro do seu próprio dinheiro", sem passar por privações desnecessárias.'
    },
    {
      letter: 'S',
      encounter: 'Encontro 4',
      topic: 'Piloto Automático Financeiro Saudável',
      title: 'ustentabilidade',
      description: 'Finanças organizadas não combinam com sofrimento mensal. Vamos estruturar a sua rotina e ferramentas para que as contas e a poupança operem de forma previsível, leve, organizada e automatizada.'
    },
    {
      letter: 'I',
      encounter: 'Encontro 5',
      topic: 'Construção da Reserva de Emergência',
      title: 'nvestimento de Paz',
      description: 'Dormir com a certeza de que, aconteça o que acontecer, você e quem é importante para você. O foco absoluto aqui é a estruturação da sua Reserva de Paz: o primeiro e mais inegociável investimento da sua nova vida autônoma. Dormir com a certeza de que, aconteça o que acontecer, você e quem é importante para você estarão protegidos.'
    },
    {
      letter: 'A',
      encounter: 'Encontro 6',
      topic: 'Liberdade de Tempo e Tomada de Decisão',
      title: 'utonomia',
      description: 'O fechamento da nossa jornada. Com o plano de ação desenhado e as ferramentas dominadas, você assume o controle definitivo do timão. É o poder da escolha livre de medos ou dependências.'
    }
  ];

  return (
    <section className="metodo">
      <div className="metodo__inner">
        <div className="metodo__header">
          <p className="section-eyebrow">O Método</p>
          <h2 className="section-title section-title--dark">
            O Método <span className="accent">VÉRSIA</span>
          </h2>
          <p className="section-subtitle">
            Um método prático, focado em comportamento e estratégia real, desenhado em 6 degraus 
            consecutivos para transformar sua relação com o dinheiro
          </p>
        </div>

        <div className="steps-list">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-card__badge">
                <span>{idx + 1}</span>
              </div>
              <div className="step-card__content">
                <div className="step-card__meta">
                  <span className="step-card__encounter">{step.encounter}</span>
                  <span className="step-card__sep">•</span>
                  <span className="step-card__topic">{step.topic}</span>
                </div>
                <h3 className="step-card__title">
                  [<span className="letter">{step.letter}</span>]{step.title}
                </h3>
                <p className="step-card__desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodMentoring;