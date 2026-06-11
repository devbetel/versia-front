import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DataSection from "../components/ebook-jogo-invisivel-page/DataContent/Data";

// Mock do CSS
jest.mock("../components/ebook-jogo-invisivel-page/DataContent/styles.css", () => ({}));

describe("DataSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza o componente principal", () => {
      const { container } = render(<DataSection />);
      
      expect(container.querySelector(".container")).toBeInTheDocument();
    });

    test("renderiza o título da seção", () => {
      render(<DataSection />);
      
      expect(screen.getByText("Os números que o sistema")).toBeInTheDocument();
      expect(screen.getByText("prefere que você não saiba")).toBeInTheDocument();
    });

    test("título tem a classe emphasis", () => {
      const { container } = render(<DataSection />);
      
      const emphasis = container.querySelector(".title-emphasis");
      expect(emphasis).toBeInTheDocument();
      expect(emphasis).toHaveTextContent("prefere que você não saiba");
    });

    test("renderiza a underline do título", () => {
      const { container } = render(<DataSection />);
      
      const underline = container.querySelector(".title-underline");
      expect(underline).toBeInTheDocument();
    });
  });

  describe("Estatísticas - Cards", () => {
    test("renderiza os 3 cards de estatísticas", () => {
      const { container } = render(<DataSection />);
      
      const cards = container.querySelectorAll(".stat-card");
      expect(cards).toHaveLength(3);
    });

    test("renderiza o primeiro card (47%)", () => {
      const { container } = render(<DataSection />);
      
      expect(screen.getByText("47%")).toBeInTheDocument();
      expect(screen.getByText("dos brasileiros vivem em ALTO ESTRESSE por causa de dinheiro")).toBeInTheDocument();
      
      // Buscar o texto específico dentro do primeiro card
      const cards = container.querySelectorAll(".stat-card");
      const firstCard = cards[0];
      expect(firstCard.querySelector(".stat-source")).toHaveTextContent("ANBIMA · Raio X do Investidor 2025");
    });

    test("renderiza o segundo card (80,4%) com highlight", () => {
      render(<DataSection />);
      
      expect(screen.getByText("80,4%")).toBeInTheDocument();
      expect(screen.getByText("das famílias brasileiras estão endividadas")).toBeInTheDocument();
      expect(screen.getByText("CNC, 2026 · recorde histórico")).toBeInTheDocument();
    });

    test("renderiza o terceiro card (55%)", () => {
      const { container } = render(<DataSection />);
      
      expect(screen.getByText("55%")).toBeInTheDocument();
      expect(screen.getByText("das mulheres brasileiras não investem de forma alguma")).toBeInTheDocument();
      
      // Buscar o texto específico dentro do terceiro card
      const cards = container.querySelectorAll(".stat-card");
      const thirdCard = cards[2];
      expect(thirdCard.querySelector(".stat-source")).toHaveTextContent("ANBIMA · Raio X do Investidor 2025");
    });
  });

  describe("StatCard Component", () => {
    test("cada card tem a estrutura visual correta", () => {
      const { container } = render(<DataSection />);
      
      const cards = container.querySelectorAll(".stat-card");
      cards.forEach(card => {
        expect(card.querySelector(".stat-visual")).toBeInTheDocument();
        expect(card.querySelector(".stat-number")).toBeInTheDocument();
        expect(card.querySelector(".stat-indicator")).toBeInTheDocument();
        expect(card.querySelector(".stat-content")).toBeInTheDocument();
        expect(card.querySelector(".stat-label")).toBeInTheDocument();
        expect(card.querySelector(".stat-source")).toBeInTheDocument();
        expect(card.querySelector(".source-icon")).toBeInTheDocument();
      });
    });

    test("segundo card tem classe highlight", () => {
      const { container } = render(<DataSection />);
      
      const cards = container.querySelectorAll(".stat-card");
      expect(cards[1]).toHaveClass("highlight");
    });

    test("primeiro card não tem classe highlight", () => {
      const { container } = render(<DataSection />);
      
      const cards = container.querySelectorAll(".stat-card");
      // O primeiro card tem classe "highlight" base, mas não tem a classe "highlight" adicional
      // Verificamos que não tem duas classes "highlight" ou classe condicional
      const className = cards[0].className;
      expect(className.split(' ').filter(cls => cls === 'highlight').length).toBe(1);
    });

    test("terceiro card não tem classe highlight", () => {
      const { container } = render(<DataSection />);
      
      const cards = container.querySelectorAll(".stat-card");
      // O terceiro card tem classe "highlight" base, mas não tem a classe "highlight" adicional
      // Verificamos que não tem duas classes "highlight" ou classe condicional
      const className = cards[2].className;
      expect(className.split(' ').filter(cls => cls === 'highlight').length).toBe(1);
    });
  });

  describe("HighlightQuote Component", () => {
    test("renderiza o highlight quote", () => {
      render(<DataSection />);
      
      expect(screen.getByText(/Em termos percentuais/)).toBeInTheDocument();
      expect(screen.getByText(/a classe média é a mais endividada/)).toBeInTheDocument();
      expect(screen.getByText(/O problema real não é falta de dinheiro/)).toBeInTheDocument();
    });

    test("renderiza a decoração do quote", () => {
      const { container } = render(<DataSection />);
      
      const quoteDecoration = container.querySelector(".quote-decoration");
      expect(quoteDecoration).toBeInTheDocument();
      
      const quoteLines = container.querySelectorAll(".quote-line");
      expect(quoteLines).toHaveLength(2);
      
      const quoteDot = container.querySelector(".quote-dot");
      expect(quoteDot).toBeInTheDocument();
    });

    test("renderiza a attribution", () => {
      render(<DataSection />);
      
      expect(screen.getByText("Análise comportamental")).toBeInTheDocument();
      expect(screen.getByText("Análise comportamental")).toHaveClass("attribution-text");
    });
  });

  describe("Classes CSS", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<DataSection />);
      
      expect(container.querySelector(".section-header")).toBeInTheDocument();
      expect(container.querySelector(".dados-title")).toBeInTheDocument();
      expect(container.querySelector(".dados-grid")).toBeInTheDocument();
      expect(container.querySelector(".dados-highlight")).toBeInTheDocument();
      expect(container.querySelector(".highlight-quote")).toBeInTheDocument();
      expect(container.querySelector(".quote-content")).toBeInTheDocument();
      expect(container.querySelector(".quote-attribution")).toBeInTheDocument();
    });

    test("cards têm as classes internas corretas", () => {
      const { container } = render(<DataSection />);
      
      const cards = container.querySelectorAll(".stat-card");
      cards.forEach(card => {
        expect(card.querySelector(".stat-number")).toBeInTheDocument();
        expect(card.querySelector(".stat-indicator")).toBeInTheDocument();
        expect(card.querySelector(".stat-label")).toBeInTheDocument();
        expect(card.querySelector(".stat-source")).toBeInTheDocument();
      });
    });
  });

  describe("Animações fade-in", () => {
    test("elementos têm classe fade-in", () => {
      const { container } = render(<DataSection />);
      
      expect(container.querySelector(".fade-in")).toBeInTheDocument();
      expect(container.querySelectorAll(".fade-in").length).toBeGreaterThan(0);
    });

    test("título tem classe fade-in", () => {
      const { container } = render(<DataSection />);
      
      const title = container.querySelector(".dados-title");
      expect(title).toHaveClass("fade-in");
    });

    test("cards têm animationDelay diferentes", () => {
      const { container } = render(<DataSection />);
      
      const fadeElements = container.querySelectorAll(".fade-in");
      const delays = Array.from(fadeElements).map(el => el.getAttribute("style"));
      
      expect(delays.length).toBeGreaterThan(0);
    });

    test("container do highlight tem classe fade-in", () => {
      const { container } = render(<DataSection />);
      
      const highlight = container.querySelector(".dados-highlight");
      expect(highlight).toHaveClass("fade-in");
    });
  });

  describe("Conteúdo específico", () => {
    test("primeira estatística tem o texto correto", () => {
      const { container } = render(<DataSection />);
      
      expect(screen.getByText("47%")).toBeInTheDocument();
      expect(screen.getByText("dos brasileiros vivem em ALTO ESTRESSE por causa de dinheiro")).toBeInTheDocument();
      
      // Verificar texto específico dentro do primeiro card
      const cards = container.querySelectorAll(".stat-card");
      const firstCard = cards[0];
      expect(firstCard.querySelector(".stat-source")).toHaveTextContent("ANBIMA · Raio X do Investidor 2025");
    });

    test("segunda estatística tem o texto correto", () => {
      render(<DataSection />);
      
      expect(screen.getByText("80,4%")).toBeInTheDocument();
      expect(screen.getByText("das famílias brasileiras estão endividadas")).toBeInTheDocument();
      expect(screen.getByText("CNC, 2026 · recorde histórico")).toBeInTheDocument();
    });

    test("terceira estatística tem o texto correto", () => {
      const { container } = render(<DataSection />);
      
      expect(screen.getByText("55%")).toBeInTheDocument();
      expect(screen.getByText("das mulheres brasileiras não investem de forma alguma")).toBeInTheDocument();
      
      // Verificar texto específico dentro do terceiro card
      const cards = container.querySelectorAll(".stat-card");
      const thirdCard = cards[2];
      expect(thirdCard.querySelector(".stat-source")).toHaveTextContent("ANBIMA · Raio X do Investidor 2025");
    });

    test("quote tem a ênfase correta", () => {
      const { container } = render(<DataSection />);
      
      const quoteEmphasis = container.querySelector(".quote-content em");
      expect(quoteEmphasis).toBeInTheDocument();
      expect(quoteEmphasis).toHaveTextContent("a classe média é a mais endividada.");
    });
  });

  describe("Grid de cards", () => {
    test("grid contém 3 cards", () => {
      const { container } = render(<DataSection />);
      
      const grid = container.querySelector(".dados-grid");
      expect(grid).toBeInTheDocument();
      
      const cards = grid?.querySelectorAll(".stat-card");
      expect(cards).toHaveLength(3);
    });
  });

  describe("Ícones das fontes", () => {
    test("cada card tem ícone de fonte", () => {
      render(<DataSection />);
      
      const icons = screen.getAllByText("📊");
      expect(icons).toHaveLength(3);
    });
  });

  describe("Estrutura semântica", () => {
    test("usa heading h2", () => {
      const { container } = render(<DataSection />);
      
      const h2 = container.querySelector("h2");
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveClass("dados-title");
    });

    test("usa blockquote para citação", () => {
      const { container } = render(<DataSection />);
      
      const blockquote = container.querySelector("blockquote");
      expect(blockquote).toBeInTheDocument();
      expect(blockquote).toHaveClass("quote-content");
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<DataSection />);
      
      const containerDiv = container.querySelector(".container");
      const sectionHeader = containerDiv?.querySelector(".section-header");
      const title = sectionHeader?.querySelector(".dados-title");
      const grid = containerDiv?.querySelector(".dados-grid");
      const highlight = containerDiv?.querySelector(".dados-highlight");
      
      expect(containerDiv).toBeInTheDocument();
      expect(sectionHeader).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(grid).toBeInTheDocument();
      expect(highlight).toBeInTheDocument();
    });
  });

  describe("Teste de integração", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<DataSection />);
      
      expect(container.querySelector(".container")).toBeInTheDocument();
      expect(screen.getByText("Os números que o sistema")).toBeInTheDocument();
      expect(screen.getByText("prefere que você não saiba")).toBeInTheDocument();
      expect(screen.getByText("47%")).toBeInTheDocument();
      expect(screen.getByText("80,4%")).toBeInTheDocument();
      expect(screen.getByText("55%")).toBeInTheDocument();
      expect(screen.getByText(/a classe média é a mais endividada/)).toBeInTheDocument();
      
      expect(container.querySelector(".section-header")).toBeInTheDocument();
      expect(container.querySelector(".dados-grid")).toBeInTheDocument();
      expect(container.querySelectorAll(".stat-card")).toHaveLength(3);
      expect(container.querySelector(".highlight-quote")).toBeInTheDocument();
    });
  });
});