import React from "react";
import "./styles.css";
import SEO from "../../components/SEO.tsx";
import HowItsWorks from "../../components/mentoria-page/HowItsWorksContent/HowItsWorks";
import HeaderMentoring from "../../components/mentoria-page/HeaderMentoringContent/HeaderMentoring";
import OfferSectionMentoring from "../../components/mentoria-page/OfferMentoringContent/OfferMentoring.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Different from "../../components/DifferentContent/Different.tsx";
import TransitionGradient2 from "../../components/TransitionGradient2Content/TransitionGradient2.tsx";
import About from "../../components/AboutContent/About.tsx";
import TransitionGradient8 from "../../components/mentoria-page/TransitionGradient8.tsx/TransitionGradient8.tsx";
import Method from "../../components/MethodContent/Method.tsx";
import Cta from "../../components/CtaContent/Cta.tsx";
import TransitionGradient3 from "../../components/TransitionGradient3Content/TransitionGradient3.tsx";
import TransitionGradient12 from "../../components/TransitionGradient12/TransitinoGradient12.tsx";
import Main from "../../components/MainContent/Main.tsx";

const MentoriaVersiaPage: React.FC = () => {
  
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
        <Main />
        <Method />
        <TransitionGradient8 />
        <Different />
        <TransitionGradient2 />
        <div id='about'>
        <About />
        </div>
        <TransitionGradient3 />
        <div id='howitworks'>
        <HowItsWorks />
        </div>
        <TransitionGradient12 />
        <OfferSectionMentoring />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default MentoriaVersiaPage;