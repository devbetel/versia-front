import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import './styles.css';

function HeroMentoring() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById('pricing')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  // Variants com tipagem correta
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1, 
        ease: "easeOut" 
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  return (
    <section className="hero">
      {/* CÍRCULOS */}
      <motion.div
        className="hero__circle hero__circle--sm"
        variants={fadeIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.1, duration: 1 }}
      />

      <motion.div
        className="hero__circle hero__circle--lg"
        variants={fadeIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.2, duration: 1 }}
      />

      <motion.div 
        className="hero__content"
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="hero__title" 
          variants={fadeInDown}
          transition={{ delay: 0.3 }}
        >
          Mentoria Coletiva<br />
          para<br />
          Autonomia Financeira<br />
          Feminina
        </motion.h1>

        <motion.p 
          className="hero__subtitle" 
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Você não precisa de mais informação sobre dinheiro. <br />
          Você precisa de lógica para mudar seu comportamento.
        </motion.p>

        <motion.div
          className="hero__description"
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <p>
            <strong>
              Mentoria coletiva Método VÉRSIA — para quem ganha bem, vive no
              automático e quer clareza, controle e autonomia financeira.
            </strong>
          </p>
          <p>
            Do diagnóstico à autonomia: um processo prático de 2 meses que
            transforma conhecimento em hábito.
          </p>
        </motion.div>

        <motion.div 
          className="hero__quote" 
          variants={zoomIn}
          transition={{ delay: 0.6 }}
        >
          <p>
            <strong>Você tem, de fato, autonomia sobre o seu dinheiro?</strong>
          </p>
        </motion.div>

        <motion.p
          className="hero__subtitle"
          variants={fadeInUp}
          transition={{ delay: 0.7 }}
          style={{ marginBottom: '2.5rem' }}
        >
          A independência te tira do barco dos outros. A{' '}
          <strong>autonomia</strong> te dá o poder de decidir o destino da sua
          vida.
        </motion.p>

        <motion.button
          className="hero__cta"
          onClick={scrollToPricing}
          variants={zoomIn}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Quero Minha Versão financeiramente mais forte
        </motion.button>

        <motion.p 
          className="hero__badge"
          variants={fadeInUp}
          transition={{ delay: 0.9 }}
        >
          2 meses • Máximo 30 pessoas • Online ao vivo
        </motion.p>
      </motion.div>
    </section>
  );
}

export default HeroMentoring;