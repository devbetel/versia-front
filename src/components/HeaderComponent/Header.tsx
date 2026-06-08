import React, { useState, useEffect } from "react";
import "./styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!isMobile) return; // Só aplica scroll no mobile

      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setVisible(true);
      } else {
        setVisible(false);
        setMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [lastScrollY, isMobile]);

  return (
    <header className={`header ${isMobile && visible ? "header--visible" : ""} ${isMobile && !visible ? "header--hidden" : ""}`}>
      <div className="container header-container">
        <img
          src="/Ativo 4@4x.png"
          alt="Logo"
          className="logo-header"
        />

        <nav className="nav">
          <a href="#about" className="item-nav">Sobre</a>
          <a href="#products" className="item-nav">Produtos</a>
          <a href="#method" className="item-nav">Método</a>
          <a href="#different" className="item-nav">Diferencial</a>
          <a className="cta" href="#cta">FALE COMIGO</a>
        </nav>

        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`nav-mobile ${menuOpen ? "nav-mobile--open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#products" onClick={() => setMenuOpen(false)}>Produtos</a>
        <a href="#method" onClick={() => setMenuOpen(false)}>Método</a>
        <a href="#different" onClick={() => setMenuOpen(false)}>Diferencial</a>
        <a className="cta" href="#cta" onClick={() => setMenuOpen(false)}>FALE COMIGO</a>
      </nav>
    </header>
  );
};

export default Header;