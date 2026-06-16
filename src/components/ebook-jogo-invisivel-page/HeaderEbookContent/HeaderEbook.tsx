import React from "react";
import "./styles.css";

const HeaderEbook = () => {
  return (
    <header className="header-ebook">
      <div className="header-ebook__inner">
        <img
          src="/Ativo 4@4x.png"
          alt="Vérsia Finance Logo"
          className="header-ebook__logo"
        />
        <a href="https://pay.kiwify.com.br/hzfZdZq" className="header-ebook__cta">
          QUERO O E-BOOK
        </a>
      </div>
    </header>
  );
};

export default HeaderEbook;