// app/ebook-jogo-invisivel/page.tsx
"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Adicione esta linha
import './styles.css';
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
  );
}