import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ContentBusinessSection from "../components/ebook-empresario-e-patrimonio-page/ContentBusinessContent/ContentBusiness";

// Mock do CSS
jest.mock("../components/ebook-empresario-e-patrimonio-page/ContentBusinessContent/styles.css", () => ({}));

// Mock do AOS
jest.mock("aos", () => ({
  init: jest.fn(),
  refresh: jest.fn(),
}));

describe("ContentBusinessSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção principal", () => {
      const { container } = render(<ContentBusinessSection />);
      
      expect(container.querySelector(".content-section")).toBeInTheDocument();
      expect(container.querySelector(".content-container")).toBeInTheDocument();
    });

    test("renderiza os elementos de fundo", () => {
      const { container } = render(<ContentBusinessSection />);
      
      expect(container.querySelector(".content-bg-dots")).toBeInTheDocument();
      expect(container.querySelector(".content-bg-glow--left")).toBeInTheDocument();
      expect(container.querySelector(".content-bg-glow--right")).toBeInTheDocument();
    });
  });

  describe("Header", () => {
    test("renderiza o badge do header", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText("Conteúdo Premium")).toBeInTheDocument();
    });

    test("badge tem a estrutura correta", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const badge = container.querySelector(".header-badge");
      expect(badge?.querySelector(".header-badge__dot")).toBeInTheDocument();
      expect(badge?.querySelector(".header-badge__text")).toBeInTheDocument();
    });

    test("renderiza o título", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText(/O que você vai/)).toBeInTheDocument();
      expect(screen.getByText(/dominar/)).toBeInTheDocument();
      expect(screen.getByText(/no Guia Prático/)).toBeInTheDocument();
    });

    test("título tem a classe emphasis", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const emphasis = container.querySelector(".content-emphasis");
      expect(emphasis).toBeInTheDocument();
      expect(emphasis).toHaveTextContent("dominar");
    });

    test("renderiza o subtítulo", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText(/4 módulos estratégicos desenvolvidos para transformar/)).toBeInTheDocument();
    });

    test("subtítulo tem texto em negrito", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const strongText = container.querySelector(".content-subtitle strong");
      expect(strongText).toBeInTheDocument();
      expect(strongText).toHaveTextContent("seu conhecimento em resultados práticos");
    });
  });

  describe("Módulos", () => {
    test("renderiza os 4 módulos", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const modules = container.querySelectorAll(".module-card");
      expect(modules).toHaveLength(4);
    });

    test("primeiro módulo tem conteúdo correto", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText("Gestão de Pró-Labore")).toBeInTheDocument();
      expect(screen.getByText(/Rompa a ilusão da contabilidade mental/)).toBeInTheDocument();
      expect(screen.getByText("💰")).toBeInTheDocument();
      expect(screen.getByText("Módulos 1-3")).toBeInTheDocument();
    });

    test("segundo módulo tem conteúdo correto", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText("Estratégia dos 3 Baldes")).toBeInTheDocument();
      expect(screen.getByText(/Aloque o capital de forma inteligente/)).toBeInTheDocument();
      expect(screen.getByText("🎯")).toBeInTheDocument();
      // Como "Módulo 4" aparece em dois lugares (badge e progress-text), usamos getAllByText
      const modulo4Elements = screen.getAllByText("Módulo 4");
      expect(modulo4Elements.length).toBeGreaterThan(0);
    });

    test("terceiro módulo tem conteúdo correto", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText("Blindagem Familiar")).toBeInTheDocument();
      expect(screen.getByText(/A empresa é o motor, você é o operador/)).toBeInTheDocument();
      expect(screen.getByText("🛡️")).toBeInTheDocument();
      expect(screen.getByText("Módulos 5-6")).toBeInTheDocument();
    });

    test("quarto módulo tem conteúdo correto", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText("Ferramentas e Ação")).toBeInTheDocument();
      expect(screen.getByText(/Acesse planilhas otimizadas de separação de contas/)).toBeInTheDocument();
      expect(screen.getByText("📊")).toBeInTheDocument();
      expect(screen.getByText("Práticos")).toBeInTheDocument();
    });

    test("cada módulo tem estrutura completa", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const modules = container.querySelectorAll(".module-card");
      modules.forEach(module => {
        expect(module.querySelector(".module-header")).toBeInTheDocument();
        expect(module.querySelector(".module-badge")).toBeInTheDocument();
        expect(module.querySelector(".module-icon")).toBeInTheDocument();
        expect(module.querySelector(".module-content")).toBeInTheDocument();
        expect(module.querySelector(".module-title")).toBeInTheDocument();
        expect(module.querySelector(".module-description")).toBeInTheDocument();
        expect(module.querySelector(".module-footer")).toBeInTheDocument();
        expect(module.querySelector(".module-progress")).toBeInTheDocument();
        expect(module.querySelector(".progress-bar")).toBeInTheDocument();
        expect(module.querySelector(".progress-fill")).toBeInTheDocument();
        expect(module.querySelector(".progress-text")).toBeInTheDocument();
        expect(module.querySelector(".module-overlay")).toBeInTheDocument();
      });
    });

    test("progress-fill tem largura proporcional", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const fills = container.querySelectorAll(".progress-fill");
      expect(fills[0]).toHaveStyle("width: 25%");
      expect(fills[1]).toHaveStyle("width: 50%");
      expect(fills[2]).toHaveStyle("width: 75%");
      expect(fills[3]).toHaveStyle("width: 100%");
    });

    test("progress-text mostra módulo correto", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText("Módulo 1")).toBeInTheDocument();
      expect(screen.getByText("Módulo 2")).toBeInTheDocument();
      expect(screen.getByText("Módulo 3")).toBeInTheDocument();
      // "Módulo 4" aparece em dois lugares, usamos getAllByText
      const modulo4Elements = screen.getAllByText("Módulo 4");
      expect(modulo4Elements.length).toBeGreaterThan(0);
    });
  });

  describe("Call to Action", () => {
    test("renderiza o CTA wrapper", () => {
      const { container } = render(<ContentBusinessSection />);
      
      expect(container.querySelector(".content-cta-wrapper")).toBeInTheDocument();
      expect(container.querySelector(".cta-card")).toBeInTheDocument();
    });

    test("renderiza o ícone do CTA", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText("🚀")).toBeInTheDocument();
    });

    test("renderiza o título do CTA", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText("Pronto para começar sua jornada?")).toBeInTheDocument();
    });

    test("renderiza o subtítulo do CTA", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText("Acesse todo o conteúdo agora e transforme sua gestão financeira")).toBeInTheDocument();
    });

    test("renderiza o botão CTA", () => {
      render(<ContentBusinessSection />);
      
      const button = screen.getByText("COMEÇAR AGORA");
      expect(button).toBeInTheDocument();
    });

    test("botão CTA tem seta", () => {
      render(<ContentBusinessSection />);
      
      expect(screen.getByText("→")).toBeInTheDocument();
    });

    test("botão CTA tem classe correta", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const button = container.querySelector(".cta-button");
      expect(button).toBeInTheDocument();
    });
  });

  describe("Atributos AOS", () => {
    test("badge tem data-aos fade-down", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const badge = container.querySelector(".header-badge");
      expect(badge).toHaveAttribute("data-aos", "fade-down");
    });

    test("título tem data-aos fade-down com delay", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const title = container.querySelector(".content-title");
      expect(title).toHaveAttribute("data-aos", "fade-down");
      expect(title).toHaveAttribute("data-aos-delay", "100");
    });

    test("subtítulo tem data-aos fade-down com delay", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const subtitle = container.querySelector(".content-subtitle");
      expect(subtitle).toHaveAttribute("data-aos", "fade-down");
      expect(subtitle).toHaveAttribute("data-aos-delay", "200");
    });

    test("modules wrapper tem data-aos fade-up com delay", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const wrapper = container.querySelector(".modules-wrapper");
      expect(wrapper).toHaveAttribute("data-aos", "fade-up");
      expect(wrapper).toHaveAttribute("data-aos-delay", "300");
    });

    test("cada módulo tem data-aos fade-up com delay incremental", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const modules = container.querySelectorAll(".module-card");
      expect(modules[0]).toHaveAttribute("data-aos-delay", "400");
      expect(modules[1]).toHaveAttribute("data-aos-delay", "500");
      expect(modules[2]).toHaveAttribute("data-aos-delay", "600");
      expect(modules[3]).toHaveAttribute("data-aos-delay", "700");
    });

    test("CTA wrapper tem data-aos fade-up com delay", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const ctaWrapper = container.querySelector(".content-cta-wrapper");
      expect(ctaWrapper).toHaveAttribute("data-aos", "fade-up");
      expect(ctaWrapper).toHaveAttribute("data-aos-delay", "800");
    });
  });

  describe("Classes CSS", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<ContentBusinessSection />);
      
      expect(container.querySelector(".content-header")).toBeInTheDocument();
      expect(container.querySelector(".modules-wrapper")).toBeInTheDocument();
      expect(container.querySelector(".modules-grid")).toBeInTheDocument();
      expect(container.querySelector(".content-cta-wrapper")).toBeInTheDocument();
      expect(container.querySelector(".cta-card")).toBeInTheDocument();
      expect(container.querySelector(".cta-icon")).toBeInTheDocument();
      expect(container.querySelector(".cta-title")).toBeInTheDocument();
      expect(container.querySelector(".cta-subtitle")).toBeInTheDocument();
      expect(container.querySelector(".cta-text")).toBeInTheDocument();
      expect(container.querySelector(".cta-arrow")).toBeInTheDocument();
    });
  });

  describe("Interações do botão", () => {
    test("botão CTA é clicável", async () => {
      const user = userEvent.setup();
      const { container } = render(<ContentBusinessSection />);
      
      const button = container.querySelector(".cta-button") as HTMLElement;
      expect(button).toBeInTheDocument();
      
      await user.click(button);
      // Não há ação específica, apenas verifica que não quebra
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elemento section semântico", () => {
      const { container } = render(<ContentBusinessSection />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    test("usa heading h2", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const h2 = container.querySelector("h2");
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveClass("content-title");
    });

    test("usa heading h3 para módulos", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const h3Elements = container.querySelectorAll("h3");
      expect(h3Elements).toHaveLength(5); // 4 modules + 1 CTA title
      h3Elements.forEach(h3 => {
        expect(h3).toBeInTheDocument();
      });
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<ContentBusinessSection />);
      
      const section = container.querySelector(".content-section");
      const containerDiv = section?.querySelector(".content-container");
      const header = containerDiv?.querySelector(".content-header");
      const modulesWrapper = containerDiv?.querySelector(".modules-wrapper");
      const grid = modulesWrapper?.querySelector(".modules-grid");
      const ctaWrapper = containerDiv?.querySelector(".content-cta-wrapper");
      
      expect(section).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(header).toBeInTheDocument();
      expect(modulesWrapper).toBeInTheDocument();
      expect(grid).toBeInTheDocument();
      expect(ctaWrapper).toBeInTheDocument();
    });
  });

  describe("Teste de integração completa", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<ContentBusinessSection />);
      
      expect(container.querySelector(".content-section")).toBeInTheDocument();
      expect(screen.getByText("Conteúdo Premium")).toBeInTheDocument();
      expect(screen.getByText(/O que você vai/)).toBeInTheDocument();
      expect(screen.getByText("Gestão de Pró-Labore")).toBeInTheDocument();
      expect(screen.getByText("Estratégia dos 3 Baldes")).toBeInTheDocument();
      expect(screen.getByText("Blindagem Familiar")).toBeInTheDocument();
      expect(screen.getByText("Ferramentas e Ação")).toBeInTheDocument();
      expect(screen.getByText("Pronto para começar sua jornada?")).toBeInTheDocument();
      expect(screen.getByText("COMEÇAR AGORA")).toBeInTheDocument();
      
      expect(container.querySelectorAll(".module-card")).toHaveLength(4);
      expect(container.querySelectorAll(".progress-fill")).toHaveLength(4);
    });
  });
});