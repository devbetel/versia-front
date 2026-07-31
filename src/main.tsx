import React, { lazy, Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy loading das páginas
// const HomePage = lazy(() => import('./app/page'));
const MentoriaVersiaPage = lazy(() => import('./app/mentoria-versia/page'));
// const EbookJogoInvisivelPage = lazy(() => import('./app/ebook-jogo-invisivel/page'));
// const EbookEmpresarioPage = lazy(() => import('./app/ebook-empresario-patrimonio/page'));

// Loading component
export const Loading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    fontFamily: 'Georgia, serif',
    fontSize: '1.2rem',
    color: '#333'
  }}>
    Carregando...
  </div>
);

// Componente App com inicialização do AOS
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      offset: 100,
    });
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Redireciona a rota principal para /mentoria-versia */}
            <Route path="/" element={<Navigate to="/mentoria-versia" replace />} />

            {/* Único endpoint ativo */}
            <Route path="/mentoria-versia" element={<MentoriaVersiaPage />} />

            {/* Outros endpoints comentados */}
            {/*
            <Route path="/ebook-jogo-invisivel" element={<EbookJogoInvisivelPage />} />
            <Route path="/ebook-empresario-patrimonio" element={<EbookEmpresarioPage />} />
            */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);