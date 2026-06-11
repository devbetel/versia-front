import React from 'react';
import './styles.css';

interface FooterProps {
  whatsappNumber?: string;
}

const Footer: React.FC<FooterProps> = ({ whatsappNumber = "SEUNUMERO" }) => {
  return (
    <footer className="footer">
      <a href="#" className="footer-logo">
        Vérsia Finance
      </a>
      
      <div className="footer-links">

        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
      
      <span className="footer-copy">
        © 2024 Vérsia Finance. Todos os direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;