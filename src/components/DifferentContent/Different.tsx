import React from "react";
import "./styles.css";

const Different = () => {
    return (
        <div className="different">
            <div className="different-container">
                <section className="section-manifesto">
                    <div className="manifesto-grid">

                        <div className="fade-in visible">
                            <span className="section-tag" data-aos="fade-up">O que é diferente aqui</span>
                            <h2 className="manifesto-title" data-aos="fade-up">
                                Estou cansada do<br />discurso financeiro<br />
                                <em>que pune as pessoas.</em>
                            </h2>
                            <p className="manifesto-body" data-aos="fade-right">
                                Passar décadas dentro do mercado financeiro me fez entender uma coisa que a maioria dos especialistas ignora: estar endividado no Brasil de hoje não é falta de caráter. É o resultado previsível de um sistema que foi desenhado para fazer você gastar antes de aprender a poupar.
                            </p>
                        </div>

                        <div className="fade-in visible">
                            <ul className="manifesto-lista">
                                <li className="manifesto-item" data-aos="fade-up">
                                    <span className="nao">Corta o cafezinho</span>
                                    <span className="sep">→</span>
                                    <span className="sim">Entende para onde vai cada real</span>
                                </li>
                                <li className="manifesto-item" data-aos="fade-up">
                                    <span className="nao">Você gasta demais</span>
                                    <span className="sep">→</span>
                                    <span className="sim">Você nunca aprendeu a se ver</span>
                                </li>
                                <li className="manifesto-item" data-aos="fade-up">
                                    <span className="nao">Siga essa planilha</span>
                                    <span className="sep">→</span>
                                    <span className="sim">Crie um sistema para a sua vida</span>
                                </li>
                                <li className="manifesto-item" data-aos="fade-up">
                                    <span className="nao">Fórmula de guru</span>
                                    <span className="sep">→</span>
                                    <span className="sim">Método que respeita sua realidade</span>
                                </li>
                                <li className="manifesto-item" data-aos="fade-up">
                                    <span className="nao">Promessa de enriquecer rápido</span>
                                    <span className="sep">→</span>
                                    <span className="sim">Clareza para decidir melhor</span>
                                </li>
                                <li className="manifesto-item" data-aos="fade-up">
                                    <span className="nao">Mais uma lição de moral</span>
                                    <span className="sep">→</span>
                                    <span className="sim">Uma profissional real do seu lado</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Different;