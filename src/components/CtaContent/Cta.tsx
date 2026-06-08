import React, { useRef } from 'react';
import { motion, useInView, Easing } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import './styles.css';

// Criando easing customizado
const customEase: Easing = (t: number) => {
  // Cubic bezier: [0.22, 1, 0.36, 1]
  const x = t;
  const p0 = 0.22;
  const p1 = 1;
  const p2 = 0.36;
  const p3 = 1;
  
  // Implementação simplificada do cubic-bezier
  const cx = 3 * p0;
  const bx = 3 * (p2 - p0) - cx;
  const ax = 1 - cx - bx;
  
  const cy = 3 * p1;
  const by = 3 * (p3 - p1) - cy;
  const ay = 1 - cy - by;
  
  const bezierX = (t: number) => ((ax * t + bx) * t + cx) * t;
  const bezierY = (t: number) => ((ay * t + by) * t + cy) * t;
  
  return bezierY(bezierX(x));
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: customEase // Usando easing customizado
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Cta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="contato-section" id="contato">
      <div className="contato-background">
        <div className="contato-glow"></div>
      </div>
      
      <div className="contato-container">
        <motion.div 
          ref={ref}
          className="contato-content"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="contato-header" variants={fadeInUp} data-aos="fade-up">
            <div className="contato-icon" data-aos= "fade-up">
              <Sparkles size={24} data-aos= "fade-up"/>
            </div>
            <span className="contato-tag" data-aos="fade-up">Próximo passo</span>
          </motion.div>

          <motion.h2 className="contato-titulo" variants={fadeInUp}>
            <p data-aos="fade-left">Você já trabalhou</p>
            <span className="titulo-destaque" data-aos="fade-left">duro o suficiente.</span>
            <em data-aos="fade-right">Agora é a vez do seu dinheiro trabalhar com você.</em>
          </motion.h2>

          <motion.p className="contato-subtitulo" variants={fadeInUp}>
            <p data-aos="fade-up">
            Não sabe por onde começar? Me manda uma mensagem. Sem pressão, sem pitch. 
            </p>
            <strong data-aos="fade-up"> Só uma conversa genuína.</strong>
          </motion.p>

          <motion.div className="contato-acoes" variants={fadeInUp}>
            <motion.a 
              href="https://wa.me/5511999999999" 
              className="btn-whatsapp"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-aos="fade-left"
            >
              <MessageCircle size={20} />
              <span>Conversar no WhatsApp</span>
            </motion.a>

            <motion.a 
              href="#produtos" 
              className="btn-explorar"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-aos="fade-right"
            >
              <span>Explorar soluções</span>
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          <motion.div className="contato-garantia" variants={fadeInUp}>
            <div className="garantia-item" data-aos="fade-up">
              <div className="garantia-icon">✓</div>
              <span>Resposta em até 2h</span>
            </div>
            <div className="garantia-item" data-aos="fade-up">
              <div className="garantia-icon">✓</div>
              <span>Primeira conversa gratuita</span>
            </div>
            <div className="garantia-item" data-aos="fade-up">
              <div className="garantia-icon">✓</div>
              <span>Sem compromisso</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}