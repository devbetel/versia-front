import "./styles.css";

const Different = () => {
    return (
        <div className="different">
            <div className="different-container">
                <section className="section-manifesto">
                    <div className="manifesto-grid">

                        <div className="fade-in visible">
                            <span className="section-tag" data-aos="fade-up">Um novo jeito de olhar para o seu dinheiro</span>
                            <h2 className="manifesto-title" data-aos="fade-up">
                                Estou cansada do<br />discurso que pune.<br />
                            </h2>
                            <p className="manifesto-body" data-aos="fade-right">
                                Cansada da narrativa que coloca culpa onde deveria existir compreensão. Cansada de ver pessoas inteligentes acreditando que “não nasceram para lidar com dinheiro”.
Décadas dentro do mercado me mostraram algo que a maioria dos especialistas ignora: estar endividado no Brasil não é falta de caráter. 
É consequência de um sistema que ensina você a gastar antes de ensinar você a se enxergar.

                            </p>
                        </div>

                        <div className="fade-in visible">
                            <h2 className="lista-title" data-aos="fade-right">Aqui, Tudo Muda:</h2>
                            <ul className="manifesto-lista">
                                <li className="manifesto-item" data-aos="fade-up">
                                    <span className="nao">Corta o cafezinho</span>
                                    <span className="sep">→</span>
                                    <span className="sim">Entenda para onde vai cada real</span>
                                </li>
                                <li className="manifesto-item" data-aos="fade-up">
                                    <span className="nao">Você gasta demais</span>
                                    <span className="sep">→</span>
                                    <span className="sim">Você nunca aprendeu a se ver</span>
                                </li>
                                <li className="manifesto-item" data-aos="fade-up">
                                    <span className="nao">Siga essa planilha</span>
                                    <span className="sep">→</span>
                                    <span className="sim">Crie um sistema que funcione para a sua vida</span>
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