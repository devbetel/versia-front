import React, { useEffect } from "react";
import "./styles.css";
import MethodMentoring from "../../components/mentoria-page/MethodMentoringContent/Method";
import HowItsWorks from "../../components/mentoria-page/HowItsWorksContent/HowItsWorks";
import HeaderMentoring from "../../components/mentoria-page/HeaderMentoringContent/HeaderMentoring";
import 'aos/dist/aos.css';
import Aos from "aos";
import HeroMentoring from "../../components/mentoria-page/HeroContent/HeroMentoring";
import OfferSectionMentoring from "../../components/mentoria-page/OfferMentoringContent/OfferMentoring.tsx";
import TransitionGradient6 from "../../components/TransitionGradient6/TransitionGradient6.tsx";


const MentoriaVersiaPage: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", overflowX: "hidden" }}>
      <HeaderMentoring />
      <HeroMentoring />
      <TransitionGradient6 />
      <MethodMentoring />
      <HowItsWorks />
        <OfferSectionMentoring />
      {/* <Footer /> */}
    </div>
  );
};

export default MentoriaVersiaPage;