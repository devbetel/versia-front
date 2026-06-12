import React, { useEffect } from 'react';
import "./styles.css";
import HeroBusinessSection from '../../components/ebook-empresario-e-patrimonio-page/HeroBusinessContent/HeroBusiness';
import ProblemBusinessSection from '../../components/ebook-empresario-e-patrimonio-page/ProblemBusinessContent/ProblemBusiness';
import ContentBusinessSection from '../../components/ebook-empresario-e-patrimonio-page/ContentBusinessContent/ContentBusiness';
import TargetBusinessSection from '../../components/ebook-empresario-e-patrimonio-page/TargetBusinessContent/TargetBusiness';
import Aos from 'aos';
import OfferBusinessSection from '../../components/ebook-empresario-e-patrimonio-page/OfferBusinessContent/OfferBusiness';
import Footer from '../../components/Footer/Footer';
import HeaderBusiness from '../../components/ebook-empresario-e-patrimonio-page/HeaderBusinessContent/HeaderBusiness';


const EbookEmpresarioPage: React.FC = () => {
     useEffect(() => {
        Aos.init({
          duration: 1200,
          once: true,
        });
      }, []);
    
  return (
    <div className="app">
      <HeaderBusiness />
      <HeroBusinessSection />
      <ProblemBusinessSection />
      <ContentBusinessSection />
      <TargetBusinessSection />
      <OfferBusinessSection />
      <Footer />
    </div>
  );
};

export default EbookEmpresarioPage;