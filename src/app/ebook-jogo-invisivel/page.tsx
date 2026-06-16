"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import './styles.css';
import SEO from '../../components/SEO';
import HookSection from '../../components/ebook-jogo-invisivel-page/HookContent/HookEbook';
import Data from '../../components/ebook-jogo-invisivel-page/DataContent/Data';
import BankersSection from '../../components/ebook-jogo-invisivel-page/BankersContent/Bankers';
import Chapters from '../../components/ebook-jogo-invisivel-page/ChaptersContent/Chapters';
import Hero from '../../components/ebook-jogo-invisivel-page/HeroContent/Hero';
import Aos from 'aos';
import OfferSection from '../../components/ebook-jogo-invisivel-page/OfferContent/Offer';
import HeaderEbook from '../../components/ebook-jogo-invisivel-page/HeaderEbookContent/HeaderEbook';
import FinalSection from '../../components/ebook-jogo-invisivel-page/FinalContent/Final';
import TransitionGradient6 from '../../components/TransitionGradient6/TransitionGradient6';
import Footer from '../../components/Footer/Footer';

export default function EbookJogoInvisivelPage(){
   useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <SEO 
        title="E-book Jogo Invisível - Versia Finance | Desvende os Segredos dos Banqueiros"
        description="Descubra as estratégias que os banqueiros usam e você desconhece. E-book exclusivo com táticas práticas para proteger e multiplicar seu patrimônio. Download gratuito!"
        keywords="ebook jogo invisível, estratégias financeiras, bancos, investimentos inteligentes, versia finance, proteção patrimonial"
        url="https://versiafinance.com/ebook-jogo-invisivel"
        image="https://versiafinance.com/og-jogo-invisivel.jpg"
      />
      
      <main className="ebook-page">
        <HeaderEbook />
        <Hero />
        <TransitionGradient6 />
        <HookSection />
        <Data />
        <Chapters />
        <BankersSection />
        <OfferSection />
        <FinalSection />
        <Footer />
      </main>
    </>
  );
}