import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';

interface Chapter {
  number: string;
  title: string;
  description: string;
  readingTime?: string;
  highlighted?: boolean;
}

interface ResearchSource {
  icon: string;
  name: string;
}

// Componente movido para fora da renderização
const ContentStats: React.FC = () => (
  <div className="content-stats" data-aos="zoom-in" data-aos-delay="200">
    <div className="stat-item">
      <div className="stat-number">103</div>
      <div className="stat-label">Páginas</div>
    </div>
    <div className="stat-divider"></div>
    <div className="stat-item">
      <div className="stat-number">7</div>
      <div className="stat-label">Capítulos</div>
    </div>
    <div className="stat-divider"></div>
    <div className="stat-item">
      <div className="stat-number">2h</div>
      <div className="stat-label">Leitura</div>
    </div>
  </div>
);

// Componente movido para fora da renderização
const ResearchSources: React.FC = () => {
  const researchSources: ResearchSource[] = [
    { icon: '📊', name: 'CNC' },
    { icon: '💼', name: 'ANBIMA' },
    { icon: '📈', name: 'FGV' },
    { icon: '🎯', name: 'SERASA' }
  ];

  return (
    <div className="research-sources" data-aos="fade-right" data-aos-delay="100">
      <div className="sources-label">Baseado em pesquisas de:</div>
      <div className="sources-grid">
        {researchSources.map((source, index) => (
          <div 
            key={index} 
            className="research-badge"
            data-aos="fade-up"
            data-aos-delay={150 + (index * 50)}
          >
            <span className="badge-icon">{source.icon}</span>
            <span className="badge-text">{source.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente movido para fora da renderização
const ChapterCard: React.FC<{ chapter: Chapter; index: number }> = ({ chapter, index }) => (
  <div 
    className={`chapter-card ${chapter.highlighted ? 'highlighted' : ''}`}
    data-aos="fade-left"
    data-aos-delay={index * 100}
  >
    <div className="chapter-header">
      <div className="chapter-number">
        <span className="number-text">{chapter.number}</span>
        {chapter.highlighted && <div className="number-indicator"></div>}
      </div>
      <div className="chapter-progress">
        <div className="progress-bar"></div>
      </div>
    </div>
    
    <div className="chapter-content">
      <h3 className="chapter-title">{chapter.title}</h3>
      <p className="chapter-description">{chapter.description}</p>
    </div>
    
    {chapter.readingTime && (
      <div className="chapter-footer">
        <div className="reading-time">
          <span className="time-icon">⏱️</span>
          <span>{chapter.readingTime} de leitura</span>
        </div>
      </div>
    )}
  </div>
);

const ChaptersSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const chapters: Chapter[] = [
    {
      number: '01',
      title: 'O dia em que o amanhã chegou',
      description: 'A história pessoal que está na origem de tudo — e por que ela importa para você.',
      readingTime: '8 min',
      highlighted: true
    },
    {
      number: '02',
      title: 'A bolha invisível do sucesso fantasma',
      description: 'Por que profissionais bem-sucedidos estão atolados em dívidas ocultas.',
      readingTime: '12 min'
    },
    {
      number: '03',
      title: 'Desmistificando o endividamento',
      description: 'Nem toda dívida é ruim. A diferença entre endividamento estratégico e tóxico.',
      readingTime: '15 min'
    },
    {
      number: '04',
      title: 'A raiz histórica: o crédito sem manual',
      description: 'De 1994 ao crédito consignado — como o Brasil foi treinado a se endividar.',
      readingTime: '18 min'
    },
    {
      number: '05',
      title: 'A psicologia oculta do consumo',
      description: 'O efeito compensação, o desconto hiperbólico e os traumas financeiros herdados.',
      readingTime: '14 min'
    },
    {
      number: '06',
      title: 'A prisão invisível: burnout e dívida',
      description: 'Como o superendividamento te prende em empregos onde você não é feliz.',
      readingTime: '16 min'
    },
    {
      number: '07',
      title: 'O caminho de volta sem vergonha',
      description: 'O primeiro passo não é cortar o cafezinho. É entender o jogo.',
      readingTime: '20 min'
    }
  ];

  return (
    <section className="section-caps">
      <div className="caps-container">
        <div className="caps-grid">
          {/* Content Section */}
          <div className="content-section">
            <div className="section-header" data-aos="fade-up">
              <div className="section-tag">
                O que você vai entender
                <div className="tag-decoration">
                  <div className="decoration-dot"></div>
                  <div className="decoration-line"></div>
                </div>
              </div>
              
              <h2 className="caps-title" data-aos="fade-up" data-aos-delay="100">
                Um e-book que explica<br />
                <em className="title-emphasis">o sistema de dentro<br />para fora.</em>
              </h2>
              
              <p className="caps-body" data-aos="fade-up" data-aos-delay="200">
                Não é livro de autoajuda. Não é planilha disfarçada. É uma pesquisa real — 
                com dados da CNC, ANBIMA, FGV e Serasa — escrita por quem passou décadas 
                dentro do mercado e ainda assim quase afundou. Porque conhecimento técnico 
                não basta. O comportamento precisa mudar junto.
              </p>
            </div>
            
            <ResearchSources />
            <ContentStats />
          </div>

          {/* Chapters Section */}
          <div className="chapters-section">
            <div className="chapters-header" data-aos="fade-down">
              <h3 className="chapters-title">Estrutura do E-book</h3>
              <p className="chapters-subtitle">7 capítulos que vão mudar sua relação com o dinheiro</p>
            </div>
            
            <div className="chapters-container">
              {chapters.map((chapter, index) => (
                <ChapterCard key={index} chapter={chapter} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;