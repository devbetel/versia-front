import React from "react";
import "./styles.css";

const HeaderEbook = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <img
          src="/Ativo 4@4x.png"
          alt="Logo"
          className="logo-header"
        />
        <nav className="nav">
          <a href="#oferta" className="nav-cta">QUERO O E-BOOK</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderEbook;