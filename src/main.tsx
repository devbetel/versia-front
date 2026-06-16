import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

// Lazy loading das páginas
const HomePage = lazy(() => import('./app/page'));
const MentoriaVersiaPage = lazy(() => import('./app/mentoria-versia/page'));
const EbookJogoInvisivelPage = lazy(() => import('./app/ebook-jogo-invisivel/page'));
const EbookEmpresarioPage = lazy(() => import('./app/ebook-empresario-patrimonio/page'));

// Função inline para o Loading (evita o erro)


// OU exportar como arrow function
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mentoria-versia" element={<MentoriaVersiaPage />} />
            <Route path="/ebook-jogo-invisivel" element={<EbookJogoInvisivelPage />} />
            <Route path="/ebook-empresario-e-patrimonio" element={<EbookEmpresarioPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);