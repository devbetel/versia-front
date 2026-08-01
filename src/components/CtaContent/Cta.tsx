import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import "./styles.css";

export default function Cta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="contato-section" id="contato">
      <div className="contato-container">
        <motion.div
          ref={ref}
          className="contato-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="contato-header">
            <div className="contato-icon">
              <Sparkles size={20} />
            </div>
            <span className="contato-tag">Próximo passo</span>
          </div>

          <h2 className="contato-titulo">
            Você já trabalhou
            <span className="titulo-destaque">duro o suficiente.</span>
            <em>Agora é a vez do seu dinheiro trabalhar com você.</em>
          </h2>

          <div className="contato-texto-destaque">
            <p>Você não precisa de perfeição.</p>
            <p>Precisa de lógica.</p>
            <p>Precisa de clareza.</p>
            <p>Precisa de um método que respeite sua história.</p>
          </div>

          <div className="contato-subtitulo">
            <p>
              Não sabe por onde começar? Me manda uma mensagem. Sem pressão, sem pitch.
            </p>
            <strong>Só uma conversa genuína.</strong>
          </div>

          <div className="contato-acoes">
            <a
              href="https://pay.kiwify.com.br/S42F8KF"
              className="btn-versoes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero minha versão financeiramente mais forte
            </a>

            <a
              href="https://wa.me/5587991097916"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} />
              Conversar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}