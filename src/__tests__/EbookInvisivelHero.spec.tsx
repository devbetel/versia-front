import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Hero from "../components/ebook-jogo-invisivel-page/HeroContent/Hero";

// Mock do CSS
jest.mock("../components/ebook-jogo-invisivel-page/HeroContent/styles.css", () => ({}));

// Mock do AOS
jest.mock("aos", () => ({
  init: jest.fn(),
  refresh: jest.fn(),
}));

// Mock do scrollIntoView
const mockScrollIntoView = jest.fn();
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  writable: true,
  value: mockScrollIntoView,
});

describe("Hero Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção hero corretamente", () => {
      const { container } = render(<Hero />);
      
      expect(container.querySelector(".hero")).toBeInTheDocument();
      expect(container.querySelector(".hero-left")).toBeInTheDocument();
      expect(container.querySelector(".hero-right")).toBeInTheDocument();
    });

    test("renderiza o conteúdo textual principal", () => {
      const { container } = render(<Hero />);
      
      expect(screen.getByText("Pesquisa & Comportamento")).toBeInTheDocument();
      
      // Como "O Jogo" aparece em dois lugares, usamos getAllByText
      expect(screen.getAllByText(/O Jogo/).length).toBeGreaterThan(0);
      
      // Para "invisível", como aparece em duas places diferentes (hero e book), usamos getAllByText
      expect(screen.getAllByText("invisível")).toHaveLength(2);
      
      // "do Dinheiro" está dentro do texto "do Dinheiro" no h1, mas como parte de um texto maior
      // Em vez de buscar texto isolado, verificamos que o título do livro contém o texto
      const bookTitle = container.querySelector(".book-title-main");
      expect(bookTitle?.textContent).toContain("do Dinheiro");
      
      expect(screen.getByText("Por que você trabalha tanto e o dinheiro nunca sobra?")).toBeInTheDocument();
      expect(container.querySelector(".hero")).toBeInTheDocument();
      expect(container.querySelector(".hero-left")).toBeInTheDocument();
      expect(container.querySelector(".hero-right")).toBeInTheDocument();
    });

    test("renderiza a descrição completa", () => {
      render(<Hero />);
      
      const description = screen.getByText(/Não é falta de disciplina/);
      expect(description).toBeInTheDocument();
      expect(description).toHaveTextContent(
        "Não é falta de disciplina. Não é irresponsabilidade. É que existe um sistema — histórico, psicológico e financeiro — que foi desenhado para você não entender. Este e-book explica esse sistema de dentro para fora."
      );
    });

    test("renderiza o botão CTA", () => {
      render(<Hero />);
      
      const ctaButton = screen.getByRole("link", { name: "Quero entender o jogo" });
      expect(ctaButton).toBeInTheDocument();
      expect(ctaButton).toHaveAttribute("href", "#oferta");
      expect(ctaButton).toHaveClass("btn-hero");
    });
  });

  describe("Componente Version", () => {
    test("renderiza ambas as versões", () => {
      const { container } = render(<Hero />);
      
      const versions = container.querySelectorAll(".ver");
      expect(versions).toHaveLength(2);
    });

    test("primeira versão está ativa", () => {
      const { container } = render(<Hero />);
      
      const activeVersion = container.querySelector(".ver.active");
      expect(activeVersion).toBeInTheDocument();
      
      expect(activeVersion?.querySelector(".ver-label")).toHaveTextContent("Versão simples");
    });

    test("versão simples tem conteúdo correto", () => {
      const { container } = render(<Hero />);
      
      const simpleVersion = container.querySelector(".ver.active");
      expect(simpleVersion?.querySelector(".ver-label")).toHaveTextContent("Versão simples");
      expect(simpleVersion?.querySelector(".ver-name")).toHaveTextContent("Só o e-book");
      expect(simpleVersion?.querySelector(".ver-price")).toHaveTextContent("R$26,90");
      expect(simpleVersion?.querySelector(".ver-desc")).toHaveTextContent("PDF completo · acesso imediato");
    });

    test("versão completa tem conteúdo correto", () => {
      const { container } = render(<Hero />);
      
      const versions = container.querySelectorAll(".ver");
      const completeVersion = Array.from(versions).find(ver => 
        !ver.classList.contains("active")
      );
      
      expect(completeVersion?.querySelector(".ver-label")).toHaveTextContent("Versão completa");
      expect(completeVersion?.querySelector(".ver-name")).toHaveTextContent("E-book + Masterclass");
      expect(completeVersion?.querySelector(".ver-price")).toHaveTextContent("R$98,90");
      expect(completeVersion?.querySelector(".ver-desc")).toHaveTextContent("PDF + aula aprofundada comigo");
    });

    test("versão completa não está ativa", () => {
      const { container } = render(<Hero />);
      
      const versions = container.querySelectorAll(".ver");
      const completeVersion = Array.from(versions).find(ver => 
        !ver.classList.contains("active")
      );
      
      expect(completeVersion).not.toHaveClass("active");
    });
  });

  describe("Seção do livro", () => {
    test("renderiza elementos do livro", () => {
      const { container } = render(<Hero />);
      
      expect(container.querySelector(".book-wrap")).toBeInTheDocument();
      expect(container.querySelector(".book")).toBeInTheDocument();
      expect(container.querySelector(".book-shadow")).toBeInTheDocument();
    });

    test("renderiza conteúdo do livro", () => {
      const { container } = render(<Hero />);
      
      expect(screen.getByText("Vérsia Finance")).toBeInTheDocument();
      // O autor está dentro de .book-author, então buscamos por esse elemento
      const bookAuthor = container.querySelector(".book-author");
      expect(bookAuthor).toBeInTheDocument();
      expect(bookAuthor?.textContent).toContain("Danielle Borges");
      expect(bookAuthor?.textContent).toContain("CFP® · Especialista em Comportamento");
      expect(screen.getByText("Acesso imediato após a compra")).toBeInTheDocument();
    });

    test("renderiza elementos visuais do livro", () => {
      const { container } = render(<Hero />);
      
      expect(container.querySelector(".book-stripe")).toBeInTheDocument();
      expect(container.querySelector(".book-badge")).toBeInTheDocument();
      expect(container.querySelector(".book-title-main")).toBeInTheDocument();
      expect(container.querySelector(".book-line")).toBeInTheDocument();
      expect(container.querySelector(".book-author")).toBeInTheDocument();
    });

    test("título do livro tem formatação correta", () => {
      const { container } = render(<Hero />);
      
      const bookTitle = container.querySelector(".book-title-main");
      expect(bookTitle).toBeInTheDocument();
      
      const italicPart = bookTitle?.querySelector(".book-title-italic");
      expect(italicPart).toBeInTheDocument();
      expect(italicPart).toHaveTextContent("invisível");
    });
  });

  describe("Funcionalidade de scroll", () => {
    test("clique no CTA chama scrollIntoView", async () => {
      const user = userEvent.setup();
      
      const mockElement = document.createElement('div');
      mockElement.id = 'oferta';
      jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);
      
      render(<Hero />);
      
      const ctaButton = screen.getByRole("link", { name: "Quero entender o jogo" });
      await user.click(ctaButton);
      
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    test("preventDefault é chamado no clique do CTA", () => {
      render(<Hero />);
      
      const ctaButton = screen.getByRole("link", { name: "Quero entender o jogo" });
      
      const mockPreventDefault = jest.fn();
      const syntheticEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      });
      
      Object.defineProperty(syntheticEvent, 'preventDefault', {
        value: mockPreventDefault,
        writable: false,
      });
      
      fireEvent(ctaButton, syntheticEvent);
      
      expect(mockPreventDefault).toHaveBeenCalled();
    });

    test("não quebra se elemento não for encontrado", async () => {
      const user = userEvent.setup();
      
      jest.spyOn(document, 'getElementById').mockReturnValue(null);
      
      render(<Hero />);
      
      const ctaButton = screen.getByRole("link", { name: "Quero entender o jogo" });
      
      await expect(user.click(ctaButton)).resolves.not.toThrow();
    });
  });

  describe("Atributos de acessibilidade e SEO", () => {
    test("usa elementos semânticos corretos", () => {
      const { container } = render(<Hero />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
      expect(container.querySelector("h1")).toBeInTheDocument();
      expect(container.querySelector("p")).toBeInTheDocument();
    });

    test("título principal é h1", () => {
      const { container } = render(<Hero />);
      
      const h1 = container.querySelector("h1");
      expect(h1).toHaveClass("hero-title");
      expect(h1).toBeInTheDocument();
    });

    test("link CTA é navegável", () => {
      render(<Hero />);
      
      const ctaButton = screen.getByRole("link", { name: "Quero entender o jogo" });
      expect(ctaButton).not.toHaveAttribute("tabindex", "-1");
    });
  });

  describe("Estrutura de classes CSS", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<Hero />);
      
      expect(container.querySelector(".hero")).toBeInTheDocument();
      expect(container.querySelector(".hero-left")).toBeInTheDocument();
      expect(container.querySelector(".hero-right")).toBeInTheDocument();
      expect(container.querySelector(".hero-tag")).toBeInTheDocument();
      expect(container.querySelector(".hero-title")).toBeInTheDocument();
      expect(container.querySelector(".hero-divider")).toBeInTheDocument();
      expect(container.querySelector(".hero-sub")).toBeInTheDocument();
      expect(container.querySelector(".versions")).toBeInTheDocument();
    });

    test("elementos do título têm classes específicas", () => {
      const { container } = render(<Hero />);
      
      expect(container.querySelector(".line-gold")).toBeInTheDocument();
      expect(container.querySelector(".line-muted")).toBeInTheDocument();
    });

    test("versões têm estrutura de classes correta", () => {
      const { container } = render(<Hero />);
      
      const versions = container.querySelectorAll(".ver");
      versions.forEach(version => {
        expect(version.querySelector(".ver-label")).toBeInTheDocument();
        expect(version.querySelector(".ver-name")).toBeInTheDocument();
        expect(version.querySelector(".ver-price")).toBeInTheDocument();
        expect(version.querySelector(".ver-desc")).toBeInTheDocument();
      });
    });
  });

  describe("Atributos data-aos", () => {
    test("elementos têm atributos de animação", () => {
      const { container } = render(<Hero />);
      
      expect(container.querySelector('[data-aos="fade-down"]')).toBeInTheDocument();
      expect(container.querySelectorAll('[data-aos="fade-left"]').length).toBeGreaterThan(0);
      expect(container.querySelector('[data-aos="fade-bottom"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-up"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-right"]')).toBeInTheDocument();
    });
  });

  describe("Formatação de preços", () => {
    test("preços têm formatação com sup", () => {
      const { container } = render(<Hero />);
      
      const priceElements = container.querySelectorAll(".ver-price sup");
      expect(priceElements).toHaveLength(2);
      
      priceElements.forEach(sup => {
        expect(sup).toHaveTextContent("R$");
      });
    });
  });

  describe("Teste de integração completo", () => {
    test("renderiza todos os elementos principais sem erros", () => {
      const { container } = render(<Hero />);
      
      expect(container.querySelector(".hero")).toBeInTheDocument();
      expect(screen.getByText("Pesquisa & Comportamento")).toBeInTheDocument();
      expect(container.querySelector(".hero-divider")).toBeInTheDocument();
      expect(container.querySelector(".versions")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Quero entender o jogo" })).toBeInTheDocument();
      expect(container.querySelector(".book-wrap")).toBeInTheDocument();
      expect(screen.getByText("Vérsia Finance")).toBeInTheDocument();
      expect(screen.getByText("Acesso imediato após a compra")).toBeInTheDocument();
      expect(container.querySelectorAll(".ver")).toHaveLength(2);
      expect(container.querySelector(".ver.active")).toBeInTheDocument();
    });
  });
});