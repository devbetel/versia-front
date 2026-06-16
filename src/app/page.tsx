"use client";

import { useEffect } from "react";
import Aos from "aos";
import SEO from "../components/SEO";
import Main from "../components/MainContent/Main";
import TransitionSection from "../components/TransitionGradient/TransitionSection";
import Different from "../components/DifferentContent/Different";
import About from "../components/AboutContent/About";
import TransitionGradient2 from "../components/TransitionGradient2Content/TransitionGradient2";
import Produtos from "../components/ProductsContent/Products";
import TransitionGradientAbout from "../components/TransitionGradient3Content/TransitionGradient3";
import Method from "../components/MethodContent/Method";
import Cta from "../components/CtaContent/Cta";
import TransitionGradiente4 from "../components/TransitionGradient4Content/TransitionGradient4";
import TransitionGradient5 from "../components/TransitionGradient5Content/TransitionGradient5";
import Header from "../components/HeaderComponent/Header";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      offset: 100,
    });
  }, []);

  return (
    <>
      <SEO 
        title="Versia Finance - Soluções Financeiras Inteligentes"
        description="Transforme sua relação com o dinheiro. Mentoria especializada, e-books exclusivos e estratégias práticas para empresários e investidores construírem patrimônio de forma inteligente."
        keywords="versia finance, planejamento financeiro, mentoria financeira, gestão patrimonial, investimentos, consultoria financeira"
        url="https://versiafinance.com"
        image="https://versiafinance.com/og-home.jpg"
      />
      
      <Header />
      <Main />
      <TransitionSection />
      <div id="different">
        <Different />
      </div>
      <TransitionGradient2 />
      <div id="about">
        <About />
      </div>
      <TransitionGradientAbout />
      <div id="products">
        <Produtos />
      </div>
      <TransitionGradiente4 />
      <div id="method">
        <Method />
      </div>
      <TransitionGradient5 />
      <div id="cta">
        <Cta />
      </div>
      <Footer />
    </>
  );
}