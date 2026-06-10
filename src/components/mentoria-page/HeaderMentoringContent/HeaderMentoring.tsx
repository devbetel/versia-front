import React, { useState, useEffect } from 'react';
import './styles.css';

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsHidden(currentScroll > lastScroll && currentScroll > 80);
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
      <div className="header__logo">O EFEITO VÉRSIA</div>
      <button className="header__cta" onClick={scrollToPricing}>
        Quero Começar
      </button>
    </header>
  );
}

export default Header;