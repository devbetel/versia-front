import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TargetBusinessSection from "../components/ebook-empresario-e-patrimonio-page/TargetBusinessContent/TargetBusiness";

// Mock do CSS
jest.mock("../components/ebook-empresario-e-patrimonio-page/TargetBusinessContent/styles.css", () => ({}));

// Mock do AOS
jest.mock("aos", () => ({
  init: jest.fn(),
  refresh: jest.fn(),
}));

describe("TargetBusinessSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção principal", () => {
      const { container } = render(<TargetBusinessSection />);
      
      expect(container.querySelector(".target-section")).toBeInTheDocument();
      expect(container.querySelector(".target-container")).toBeInTheDocument();
    });

    test("renderiza o título", () => {
      render(<TargetBusinessSection />);
      
      expect(screen.getByText(/Este manual foi feito/)).toBeInTheDocument();
      expect(screen.getByText(/para você?/)).toBeInTheDocument();
    });

    test("título tem a classe emphasis", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const emphasis = container.querySelector(".target-emphasis");
      expect(emphasis).toBeInTheDocument();
      expect(emphasis).toHaveTextContent("para você?");
    });
  });

  describe("Lista de critérios", () => {
    test("renderiza os 3 critérios", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const items = container.querySelectorAll(".criterion-item");
      expect(items).toHaveLength(3);
    });

    test("primeiro critério tem conteúdo correto", () => {
      render(<TargetBusinessSection />);
      
      expect(screen.getByText(/Deseja retirar o dinheiro certo do negócio sem sufocar o capital de giro da empresa/)).toBeInTheDocument();
    });

    test("segundo critério tem conteúdo correto", () => {
      render(<TargetBusinessSection />);
      
      expect(screen.getByText(/Busca blindar sua estrutura familiar contra instabilidades do mercado ou riscos tributários/)).toBeInTheDocument();
    });

    test("terceiro critério tem conteúdo correto", () => {
      render(<TargetBusinessSection />);
      
      expect(screen.getByText(/Quer usar ferramentas práticas que exigem apenas 15 minutos semanais para o monitoramento da sua saúde financeira/)).toBeInTheDocument();
    });

    test("cada critério tem ícone de checkbox", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const icons = container.querySelectorAll(".checkbox-icon");
      expect(icons).toHaveLength(3);
      
      icons.forEach(icon => {
        expect(icon).toHaveTextContent("✓");
      });
    });

    test("cada critério tem estrutura correta", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const items = container.querySelectorAll(".criterion-item");
      items.forEach(item => {
        expect(item.querySelector(".checkbox-icon")).toBeInTheDocument();
        expect(item.querySelector(".criterion-text")).toBeInTheDocument();
      });
    });
  });

  describe("Botão CTA", () => {
    test("renderiza o botão", () => {
      render(<TargetBusinessSection />);
      
      const button = screen.getByText("SIM! QUERO CONSTRUIR MEU PATRIMÔNIO");
      expect(button).toBeInTheDocument();
    });

    test("botão tem seta", () => {
      render(<TargetBusinessSection />);
      
      expect(screen.getByText("→")).toBeInTheDocument();
    });

    test("botão tem classe target-cta", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const button = container.querySelector(".target-cta");
      expect(button).toBeInTheDocument();
    });

    test("seta tem classe cta-arrow", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const arrow = container.querySelector(".cta-arrow");
      expect(arrow).toBeInTheDocument();
      expect(arrow).toHaveTextContent("→");
    });

    test("botão é clicável", async () => {
      const user = userEvent.setup();
      const { container } = render(<TargetBusinessSection />);
      
      const button = container.querySelector(".target-cta") as HTMLElement;
      expect(button).toBeInTheDocument();
      
      await user.click(button);
      // Não há ação específica, apenas verifica que não quebra
    });
  });

  describe("Atributos AOS", () => {
    test("título tem data-aos fade-down", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const title = container.querySelector(".target-title");
      expect(title).toHaveAttribute("data-aos", "fade-down");
    });

    test("criteria list tem data-aos fade-right", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const criteriaList = container.querySelector(".criteria-list");
      expect(criteriaList).toHaveAttribute("data-aos", "fade-right");
    });

    test("cada checkbox-icon tem data-aos fade-up", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const icons = container.querySelectorAll(".checkbox-icon");
      icons.forEach(icon => {
        expect(icon).toHaveAttribute("data-aos", "fade-up");
      });
    });

    test("cada criterion-text tem data-aos fade-up", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const texts = container.querySelectorAll(".criterion-text");
      texts.forEach(text => {
        expect(text).toHaveAttribute("data-aos", "fade-up");
      });
    });

    test("botão tem data-aos fade-up", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const button = container.querySelector(".target-cta");
      expect(button).toHaveAttribute("data-aos", "fade-up");
    });
  });

  describe("Classes CSS", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<TargetBusinessSection />);
      
      expect(container.querySelector(".target-section")).toBeInTheDocument();
      expect(container.querySelector(".target-container")).toBeInTheDocument();
      expect(container.querySelector(".target-title")).toBeInTheDocument();
      expect(container.querySelector(".target-emphasis")).toBeInTheDocument();
      expect(container.querySelector(".criteria-list")).toBeInTheDocument();
      expect(container.querySelector(".criterion-item")).toBeInTheDocument();
      expect(container.querySelector(".checkbox-icon")).toBeInTheDocument();
      expect(container.querySelector(".criterion-text")).toBeInTheDocument();
      expect(container.querySelector(".target-cta")).toBeInTheDocument();
      expect(container.querySelector(".cta-arrow")).toBeInTheDocument();
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elemento section semântico", () => {
      const { container } = render(<TargetBusinessSection />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    test("usa heading h2", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const h2 = container.querySelector("h2");
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveClass("target-title");
    });

    test("usa button para CTA", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const button = container.querySelector("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("target-cta");
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const section = container.querySelector(".target-section");
      const containerDiv = section?.querySelector(".target-container");
      const title = containerDiv?.querySelector(".target-title");
      const criteriaList = containerDiv?.querySelector(".criteria-list");
      const button = containerDiv?.querySelector(".target-cta");
      
      expect(section).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(criteriaList).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("Conteúdo específico", () => {
    test("título contém ponto de interrogação", () => {
      render(<TargetBusinessSection />);
      
      const title = screen.getByText(/para você?/);
      expect(title).toBeInTheDocument();
      expect(title.textContent).toContain("?");
    });

    test("todos os critérios têm checkbox com símbolo ✓", () => {
      const { container } = render(<TargetBusinessSection />);
      
      const checkboxes = container.querySelectorAll(".checkbox-icon");
      checkboxes.forEach(checkbox => {
        expect(checkbox.textContent).toBe("✓");
      });
    });

    test("botão tem texto em maiúsculas", () => {
      render(<TargetBusinessSection />);
      
      const buttonText = screen.getByText("SIM! QUERO CONSTRUIR MEU PATRIMÔNIO");
      expect(buttonText).toBeInTheDocument();
      expect(buttonText.textContent).toMatch(/[A-Z]/);
    });
  });

  describe("Teste de integração completa", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<TargetBusinessSection />);
      
      expect(container.querySelector(".target-section")).toBeInTheDocument();
      expect(screen.getByText(/Este manual foi feito/)).toBeInTheDocument();
      expect(screen.getByText(/para você?/)).toBeInTheDocument();
      expect(screen.getByText(/Deseja retirar o dinheiro certo do negócio/)).toBeInTheDocument();
      expect(screen.getByText(/Busca blindar sua estrutura familiar/)).toBeInTheDocument();
      expect(screen.getByText(/Quer usar ferramentas práticas/)).toBeInTheDocument();
      expect(screen.getByText("SIM! QUERO CONSTRUIR MEU PATRIMÔNIO")).toBeInTheDocument();
      
      expect(container.querySelectorAll(".criterion-item")).toHaveLength(3);
      expect(container.querySelectorAll(".checkbox-icon")).toHaveLength(3);
      expect(container.querySelector(".target-cta")).toBeInTheDocument();
    });
  });
});