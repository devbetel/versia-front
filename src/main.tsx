// src/main.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './app/page';
import EbookPage from './app/ebook-jogo-invisivel/page';
import MentoriaVersiaPage from './app/mentoria-versia/page';
import EbookEmpresarioPage from './app/ebook-empresario-patrimonio/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/ebook-jogo-invisivel',
    element: <EbookPage />
  }, {
    path: "mentoria-versia",
    element: <MentoriaVersiaPage />
  }, {
    path: "ebook-empresario-patrimonio",
    element: <EbookEmpresarioPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);