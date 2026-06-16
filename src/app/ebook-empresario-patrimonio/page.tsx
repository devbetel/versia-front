import React, { useEffect } from 'react';
import "./styles.css";
import SEO from '../../components/SEO';
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
    <>
      <SEO 
        title="E-book Empresário e Patrimônio - Versia Finance | Proteja Seu Patrimônio"
        description="Guia completo para empresários que querem proteger e multiplicar seu patrimônio. Estratégias de blindagem patrimonial, planejamento sucessório e gestão financeira empresarial."
        keywords="ebook empresário, proteção patrimonial, planejamento sucessório, gestão financeira empresarial, versia finance, blindagem patrimonial"
        url="https://versiafinance.com/ebook-empresario-e-patrimonio"
        image="https://versiafinance.com/og-empresario.jpg"
      />
      
      <div className="app">
        <HeaderBusiness />
        <HeroBusinessSection />
        <ProblemBusinessSection />
        <ContentBusinessSection />
        <TargetBusinessSection />
        <OfferBusinessSection />
        <Footer />
      </div>
    </>
  );
};

export default EbookEmpresarioPage;