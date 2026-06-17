import React, { useEffect } from "react";
import "./styles.css";
import SEO from "../../components/SEO.tsx";
import MethodMentoring from "../../components/mentoria-page/MethodMentoringContent/Method";
import HowItsWorks from "../../components/mentoria-page/HowItsWorksContent/HowItsWorks";
import HeaderMentoring from "../../components/mentoria-page/HeaderMentoringContent/HeaderMentoring";
import 'aos/dist/aos.css';
import Aos from "aos";
import HeroMentoring from "../../components/mentoria-page/HeroContent/HeroMentoring";
import OfferSectionMentoring from "../../components/mentoria-page/OfferMentoringContent/OfferMentoring.tsx";
import TransitionGradient6 from "../../components/TransitionGradient6/TransitionGradient6.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const MentoriaVersiaPage: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <SEO 
        title="Mentoria Versia - Versia Finance | Mentoria Financeira Exclusiva"
        description="Mentoria personalizada para empresários e investidores. Construa e proteja seu patrimônio com estratégias comprovadas. Sessões individuais com especialistas em planejamento financeiro."
        keywords="mentoria financeira, consultoria patrimonial, planejamento financeiro personalizado, mentoria empresarial, versia finance, coaching financeiro"
        url="https://versiafinance.com/mentoria-versia"
        image="https://versiafinance.com/og-mentoria.jpg"
      />
      
      <div style={{ overflowX: "hidden" }}>
        <HeaderMentoring />
        <HeroMentoring />
        <TransitionGradient6 />
        <MethodMentoring />
        <HowItsWorks />
        <OfferSectionMentoring />
        <Footer />
      </div>
    </>
  );
};

export default MentoriaVersiaPage;