import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HookSection from "../components/ebook-jogo-invisivel-page/HookContent/HookEbook";

// Mock do AOS
jest.mock("aos", () => ({
  init: jest.fn(),
  refresh: jest.fn(),
}));

// Mock do CSS
jest.mock("../components/ebook-jogo-invisivel-page/HookContent/styles.css", () => ({}));

describe("HookSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção principal", () => {
      const { container } = render(<HookSection />);
      
      expect(container.querySelector(".section-gancho")).toBeInTheDocument();
      expect(container.querySelector(".container")).toBeInTheDocument();
      expect(container.querySelector(".gancho-grid")).toBeInTheDocument();
    });

    test("renderiza a tag da seção", () => {
      render(<HookSection />);
      
      expect(screen.getByText("Por que este e-book existe")).toBeInTheDocument();
    });

    test("renderiza o título principal", () => {
      render(<HookSection />);
      
      expect(screen.getByText("Quase 20 anos em banco.")).toBeInTheDocument();
      expect(screen.getByText("E quase afundei mesmo assim.")).toBeInTheDocument();
    });

    test("título tem a classe emphasis", () => {
      const { container } = render(<HookSection />);
      
      const emphasis = container.querySelector(".title-emphasis");
      expect(emphasis).toBeInTheDocument();
      expect(emphasis).toHaveTextContent("E quase afundei mesmo assim.");
    });

    test("renderiza os parágrafos de texto", () => {
      render(<HookSection />);
      
      expect(
        screen.getByText(/Em 2015, enquanto estava de licença-maternidade/)
      ).toBeInTheDocument();
      
      expect(
        screen.getByText(/Essa experiência me fez entender algo que mudou tudo/)
      ).toBeInTheDocument();
    });
  });

  describe("Componente AuthorCard", () => {
    test("renderiza o card do autor", () => {
      const { container } = render(<HookSection />);
      
      expect(container.querySelector(".author-card")).toBeInTheDocument();
    });

    test("renderiza o label do autor", () => {
      render(<HookSection />);
      
      expect(screen.getByText("Quem escreveu")).toBeInTheDocument();
    });

    test("renderiza o nome do autor", () => {
      render(<HookSection />);
      
      expect(screen.getByText("Danielle Borges")).toBeInTheDocument();
    });

    test("renderiza o título do autor", () => {
      render(<HookSection />);
      
      expect(screen.getByText("Planejadora Financeira CFP®")).toBeInTheDocument();
    });

    test("renderiza a lista de credenciais", () => {
      render(<HookSection />);
      
      expect(screen.getByText("Quase 20 anos no mercado financeiro")).toBeInTheDocument();
      expect(screen.getByText("Certificações CPA-10, CPA-20, CEA e CFP®")).toBeInTheDocument();
      expect(screen.getByText("Pesquisa exclusiva sobre endividamento e comportamento")).toBeInTheDocument();
      expect(screen.getByText("Viveu o endividamento e a reconstrução na própria pele")).toBeInTheDocument();
    });

    test("credential-item tem a estrutura correta", () => {
      const { container } = render(<HookSection />);
      
      const credentialItems = container.querySelectorAll(".credential-item");
      expect(credentialItems).toHaveLength(4);
      
      credentialItems.forEach(item => {
        expect(item.querySelector(".credential-bullet")).toBeInTheDocument();
        expect(item.querySelector(".credential-bullet")).toHaveTextContent("●");
      });
    });

    test("renderiza o badge de certificação", () => {
      render(<HookSection />);
      
      expect(screen.getByText("CFP®")).toBeInTheDocument();
      expect(screen.getByText("Certified Financial Planner")).toBeInTheDocument();
    });
  });

  describe("Classes CSS", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<HookSection />);
      
      expect(container.querySelector(".section-gancho")).toBeInTheDocument();
      expect(container.querySelector(".gancho-grid")).toBeInTheDocument();
      expect(container.querySelector(".gancho-content")).toBeInTheDocument();
      expect(container.querySelector(".gancho-title")).toBeInTheDocument();
      expect(container.querySelector(".gancho-body")).toBeInTheDocument();
      expect(container.querySelector(".author-section")).toBeInTheDocument();
    });

    test("section-header tem classe correta", () => {
      const { container } = render(<HookSection />);
      
      const sectionHeader = container.querySelector(".section-header");
      expect(sectionHeader).toBeInTheDocument();
    });

    test("section-tag tem classe correta", () => {
      render(<HookSection />);
      
      const sectionTag = screen.getByText("Por que este e-book existe");
      expect(sectionTag).toHaveClass("section-tag");
    });

    test("tag-dot está presente", () => {
      const { container } = render(<HookSection />);
      
      const tagDot = container.querySelector(".tag-dot");
      expect(tagDot).toBeInTheDocument();
    });

    test("body-paragraph tem classe correta", () => {
      const { container } = render(<HookSection />);
      
      const paragraphs = container.querySelectorAll(".body-paragraph");
      expect(paragraphs).toHaveLength(2);
    });
  });

  describe("AuthorCard Classes CSS", () => {
    test("author-card tem classes corretas", () => {
      const { container } = render(<HookSection />);
      
      expect(container.querySelector(".author-card")).toBeInTheDocument();
      expect(container.querySelector(".author-header")).toBeInTheDocument();
      expect(container.querySelector(".author-info")).toBeInTheDocument();
      expect(container.querySelector(".author-name")).toBeInTheDocument();
      expect(container.querySelector(".author-title")).toBeInTheDocument();
      expect(container.querySelector(".credentials-list")).toBeInTheDocument();
      expect(container.querySelector(".author-footer")).toBeInTheDocument();
    });

    test("author-divider está presente", () => {
      const { container } = render(<HookSection />);
      
      const divider = container.querySelector(".author-divider");
      expect(divider).toBeInTheDocument();
    });

    test("certification-badge tem classes corretas", () => {
      const { container } = render(<HookSection />);
      
      const badge = container.querySelector(".certification-badge");
      expect(badge).toBeInTheDocument();
      expect(badge?.querySelector(".badge-text")).toBeInTheDocument();
      expect(badge?.querySelector(".badge-subtitle")).toBeInTheDocument();
    });
  });

  describe("Atributos data-aos", () => {
    test("elementos têm atributos data-aos", () => {
      const { container } = render(<HookSection />);
      
      expect(container.querySelector('[data-aos="fade-top"]')).toBeInTheDocument();
      expect(container.querySelectorAll('[data-aos="fade-right"]').length).toBeGreaterThan(0);
      expect(container.querySelector('[data-aos="fade-left"]')).toBeInTheDocument();
    });

    test("section-tag tem data-aos fade-top", () => {
      const { container } = render(<HookSection />);
      
      const sectionTag = container.querySelector(".section-tag");
      expect(sectionTag).toHaveAttribute("data-aos", "fade-top");
    });

    test("gancho-title tem data-aos fade-right", () => {
      const { container } = render(<HookSection />);
      
      const title = container.querySelector(".gancho-title");
      expect(title).toHaveAttribute("data-aos", "fade-right");
    });

    test("parágrafos têm data-aos fade-right", () => {
      const { container } = render(<HookSection />);
      
      const paragraphs = container.querySelectorAll(".body-paragraph");
      paragraphs.forEach(paragraph => {
        expect(paragraph).toHaveAttribute("data-aos", "fade-right");
      });
    });

    test("author-section tem data-aos fade-left", () => {
      const { container } = render(<HookSection />);
      
      const authorSection = container.querySelector(".author-section");
      expect(authorSection).toHaveAttribute("data-aos", "fade-left");
    });
  });

  describe("Estrutura de grid", () => {
    test("grid tem duas colunas (content e author)", () => {
      const { container } = render(<HookSection />);
      
      const grid = container.querySelector(".gancho-grid");
      const ganchoContent = grid?.querySelector(".gancho-content");
      const authorSection = grid?.querySelector(".author-section");
      
      expect(grid).toBeInTheDocument();
      expect(ganchoContent).toBeInTheDocument();
      expect(authorSection).toBeInTheDocument();
    });
  });

  describe("Conteúdo específico", () => {
    test("primeiro parágrafo tem o texto correto", () => {
      render(<HookSection />);
      
      expect(
        screen.getByText(/Em 2015, enquanto estava de licença-maternidade viajando e estourando cartões/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/o Brasil entrou em crise política/)
      ).toBeInTheDocument();
    });

    test("segundo parágrafo tem o texto correto", () => {
      render(<HookSection />);
      
      expect(
        screen.getByText(/Essa experiência me fez entender algo que mudou tudo/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/não é falta de informação que mantém as pessoas endividadas/)
      ).toBeInTheDocument();
    });

    test("credenciais têm o texto completo", () => {
      render(<HookSection />);
      
      expect(screen.getByText("Quase 20 anos no mercado financeiro")).toBeInTheDocument();
      expect(screen.getByText("Certificações CPA-10, CPA-20, CEA e CFP®")).toBeInTheDocument();
      expect(screen.getByText("Pesquisa exclusiva sobre endividamento e comportamento")).toBeInTheDocument();
      expect(screen.getByText("Viveu o endividamento e a reconstrução na própria pele")).toBeInTheDocument();
    });
  });

  describe("Elementos decorativos", () => {
    test("tag-dot está presente", () => {
      const { container } = render(<HookSection />);
      
      const tagDot = container.querySelector(".tag-dot");
      expect(tagDot).toBeInTheDocument();
    });

    test("author-divider está presente", () => {
      const { container } = render(<HookSection />);
      
      const authorDivider = container.querySelector(".author-divider");
      expect(authorDivider).toBeInTheDocument();
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elemento section semântico", () => {
      const { container } = render(<HookSection />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    test("usa heading h2", () => {
      const { container } = render(<HookSection />);
      
      const h2 = container.querySelector("h2");
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveClass("gancho-title");
    });

    test("usa lista para credenciais", () => {
      const { container } = render(<HookSection />);
      
      const list = container.querySelector(".credentials-list");
      expect(list).toBeInTheDocument();
      expect(list?.tagName).toBe("UL");
      
      const items = list?.querySelectorAll("li");
      expect(items).toHaveLength(4);
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<HookSection />);
      
      const section = container.querySelector(".section-gancho");
      const containerDiv = section?.querySelector(".container");
      const grid = containerDiv?.querySelector(".gancho-grid");
      const content = grid?.querySelector(".gancho-content");
      const authorSection = grid?.querySelector(".author-section");
      const authorCard = authorSection?.querySelector(".author-card");
      
      expect(section).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(grid).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(authorSection).toBeInTheDocument();
      expect(authorCard).toBeInTheDocument();
    });
  });

  describe("Teste de integração", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<HookSection />);
      
      expect(container.querySelector(".section-gancho")).toBeInTheDocument();
      expect(screen.getByText("Por que este e-book existe")).toBeInTheDocument();
      expect(screen.getByText("Quase 20 anos em banco.")).toBeInTheDocument();
      expect(screen.getByText("E quase afundei mesmo assim.")).toBeInTheDocument();
      expect(screen.getByText("Danielle Borges")).toBeInTheDocument();
      expect(screen.getByText("Planejadora Financeira CFP®")).toBeInTheDocument();
      expect(screen.getByText("CFP®")).toBeInTheDocument();
      expect(screen.getByText("Certified Financial Planner")).toBeInTheDocument();
      
      expect(container.querySelector(".gancho-grid")).toBeInTheDocument();
      expect(container.querySelector(".gancho-content")).toBeInTheDocument();
      expect(container.querySelector(".author-section")).toBeInTheDocument();
      expect(container.querySelector(".author-card")).toBeInTheDocument();
      expect(container.querySelectorAll(".credential-item")).toHaveLength(4);
    });
  });
});