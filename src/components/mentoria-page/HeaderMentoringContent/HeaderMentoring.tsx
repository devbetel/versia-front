import { useState, useEffect } from 'react';
import './styles.css';

function HeaderMentoring() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsHidden(currentScroll > lastScroll && currentScroll > 80);
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
      <div className="header__logo">
        <img
          src="/Ativo 4@4x.png"
          alt="Logo"
          className="logo-header"
        />
      </div>
      <button className="header__cta" onClick={scrollToPricing}>
        <a href='https://www.asaas.com/c/kfy6u6loweoer53r'>
        Quero Começar
        </a>
      </button>
    </header>
  );
}

export default HeaderMentoring;