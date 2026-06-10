import React from 'react';
import './styles.css';

interface CredentialItemProps {
  text: string;
}

const CredentialItem: React.FC<CredentialItemProps> = ({ text }) => (
  <li className="credential-item">
    <span className="credential-bullet">●</span>
    {text}
  </li>
);

interface AuthorCardProps {
  name: string;
  title: string;
  credentials: string[];
}

const AuthorCard: React.FC<AuthorCardProps> = ({ name, title, credentials }) => (
  <div className="author-card">
    <div className="author-header">
      <span className="author-label">Quem escreveu</span>
      <div className="author-divider"></div>
    </div>
    <div className="author-info">
      <h3 className="author-name">{name}</h3>
      <p className="author-title">{title}</p>
    </div>
    <ul className="credentials-list">
      {credentials.map((credential, index) => (
        <CredentialItem key={index} text={credential} />
      ))}
    </ul>
    <div className="author-footer">
      <div className="certification-badge">
        <span className="badge-text">CFP®</span>
        <span className="badge-subtitle">Certified Financial Planner</span>
      </div>
    </div>
  </div>
);

const HookSection: React.FC = () => {
  const credentials = [
    "Quase 20 anos no mercado financeiro",
    "Certificações CPA-10, CPA-20, CEA e CFP®",
    "Pesquisa exclusiva sobre endividamento e comportamento",
    "Viveu o endividamento e a reconstrução na própria pele"
  ];

  return (
    <section className="section-gancho">
      <div className="container">
        <div className="gancho-grid">
          <div className="gancho-content">
            <div className="section-header">
              <span className="section-tag" data-aos="fade-top">
                <span className="tag-dot" ></span>
                Por que este e-book existe
              </span>
            </div>
            
            <h2 className="gancho-title" data-aos="fade-right">
              Quase 20 anos em banco.<br />
              <em className="title-emphasis">E quase afundei mesmo assim.</em>
            </h2>
            
            <div className="gancho-body">
              <p className="body-paragraph" data-aos="fade-right" >
                Em 2015, enquanto estava de licença-maternidade viajando e estourando cartões, 
                o Brasil entrou em crise política. Os contratos do meu esposo com a Codevasf foram 
                bloqueados do dia para a noite. Sem aviso. Foi assim que descobri que meu pai estava 
                certo — e que eu, funcionária de banco há quase dez anos, não tinha aplicado nada do que sabia.
              </p>
              
              <p className="body-paragraph" data-aos="fade-right">
                Essa experiência me fez entender algo que mudou tudo: não é falta de informação que 
                mantém as pessoas endividadas. É a relação invisível que cada um de nós tem com o 
                dinheiro — moldada pela infância, pela história do país e por um sistema que ninguém explicou.
              </p>
            </div>
            
            
          </div>
          
          <div className="author-section" data-aos="fade-left">
            <AuthorCard
              name="Danielle Borges"
              title="Planejadora Financeira CFP®"
              credentials={credentials}
            />
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default HookSection;