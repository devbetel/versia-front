import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProblemBusinessSection from "../components/ebook-empresario-e-patrimonio-page/ProblemBusinessContent/ProblemBusiness";

// Mock do CSS
jest.mock("../components/business-page/ProblemBusiness/styles.css", () => ({}));

// Mock do AOS
jest.mock("aos", () => ({
  init: jest.fn(),
  refresh: jest.fn(),
}));

describe("ProblemBusinessSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção principal", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      expect(container.querySelector(".problem-section")).toBeInTheDocument();
      expect(container.querySelector(".problem-container")).toBeInTheDocument();
    });

    test("renderiza o título", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText(/O jogo invisível que está/)).toBeInTheDocument();
      expect(screen.getByText(/drenando o seu esforço/)).toBeInTheDocument();
    });

    test("título tem a classe emphasis", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const emphasis = container.querySelector(".problem-emphasis");
      expect(emphasis).toBeInTheDocument();
      expect(emphasis).toHaveTextContent("drenando o seu esforço");
    });
  });

  describe("Conteúdo textual", () => {
    test("renderiza o primeiro parágrafo", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText(/Empreender exige coragem/)).toBeInTheDocument();
      expect(screen.getByText(/muitas empresas faturam alto, mas não geram riqueza real para o dono/)).toBeInTheDocument();
    });

    test("primeiro parágrafo tem texto em negrito", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const strongText = container.querySelector(".problem-text strong");
      expect(strongText).toBeInTheDocument();
      expect(strongText).toHaveTextContent("muitas empresas faturam alto, mas não geram riqueza real para o dono.");
    });

    test("renderiza o segundo parágrafo", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText(/Você enfrenta o estresse diário da operação/)).toBeInTheDocument();
      expect(screen.getByText(/No final do mês, no entanto, fica apenas com a sensação/)).toBeInTheDocument();
    });

    test("renderiza ambos os parágrafos", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const paragraphs = container.querySelectorAll(".problem-text");
      expect(paragraphs).toHaveLength(2);
    });
  });

  describe("Symptoms Box", () => {
    test("renderiza a caixa de sintomas", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      expect(container.querySelector(".symptoms-box")).toBeInTheDocument();
    });

    test("renderiza o título dos sintomas", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText(/Se você se identifica com algum desses sintomas, você está preso no ciclo invisível:/)).toBeInTheDocument();
    });

    test("renderiza a lista de sintomas", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const list = container.querySelector(".symptoms-list");
      expect(list).toBeInTheDocument();
      expect(list?.tagName).toBe("UL");
    });

    test("renderiza todos os 4 sintomas", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const items = container.querySelectorAll(".symptom-item");
      expect(items).toHaveLength(4);
    });

    test("primeiro sintoma tem conteúdo correto", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText("Falta de previsibilidade financeira no negócio")).toBeInTheDocument();
    });

    test("segundo sintoma tem conteúdo correto", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText("Contas pessoais e da empresa misturadas (o CNPJ virou sua carteira)")).toBeInTheDocument();
    });

    test("terceiro sintoma tem conteúdo correto", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText("Retiradas desorganizadas e decisões baseadas na emoção")).toBeInTheDocument();
    });

    test("quarto sintoma tem conteúdo correto", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText("Excesso de trabalho e zero liberdade para desfrutar do que constrói")).toBeInTheDocument();
    });

    test("cada sintoma tem ícone de alerta", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const icons = container.querySelectorAll(".symptom-icon");
      expect(icons).toHaveLength(4);
      
      icons.forEach(icon => {
        expect(icon).toHaveTextContent("⚠");
      });
    });

    test("cada sintoma tem estrutura correta", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const items = container.querySelectorAll(".symptom-item");
      items.forEach(item => {
        expect(item.querySelector(".symptom-icon")).toBeInTheDocument();
      });
    });
  });

  describe("Risk Alert", () => {
    test("renderiza o alerta de risco", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      expect(container.querySelector(".risk-alert")).toBeInTheDocument();
    });

    test("renderiza o ícone do alerta", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText("⚡")).toBeInTheDocument();
    });

    test("renderiza o título do alerta", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText("O Risco Real e Imediato")).toBeInTheDocument();
    });

    test("renderiza o texto do alerta", () => {
      render(<ProblemBusinessSection />);
      
      expect(screen.getByText(/Com a fiscalização digital e a evolução tributária automatizada/)).toBeInTheDocument();
      expect(screen.getByText(/misturar contas físicas e jurídicas não é mais apenas uma "bagunça de controle"/)).toBeInTheDocument();
    });

    test("alerta tem texto em negrito", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const strongText = container.querySelector(".alert-text strong");
      expect(strongText).toBeInTheDocument();
      expect(strongText).toHaveTextContent("risco fiscal severo de autuação imediata.");
    });

    test("alerta tem estrutura correta", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const alert = container.querySelector(".risk-alert");
      expect(alert?.querySelector(".alert-icon")).toBeInTheDocument();
      expect(alert?.querySelector(".alert-content")).toBeInTheDocument();
      expect(alert?.querySelector(".alert-title")).toBeInTheDocument();
      expect(alert?.querySelector(".alert-text")).toBeInTheDocument();
    });
  });

  describe("Atributos AOS", () => {
    test("título tem data-aos fade-down", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const title = container.querySelector(".problem-title");
      expect(title).toHaveAttribute("data-aos", "fade-down");
    });

    test("primeiro parágrafo tem data-aos fade-down", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const texts = container.querySelectorAll(".problem-text");
      texts.forEach(text => {
        expect(text).toHaveAttribute("data-aos", "fade-down");
      });
    });

    test("symptoms box tem data-aos fade-right", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const symptomsBox = container.querySelector(".symptoms-box");
      expect(symptomsBox).toHaveAttribute("data-aos", "fade-right");
    });

    test("risk alert tem data-aos fade-up", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const riskAlert = container.querySelector(".risk-alert");
      expect(riskAlert).toHaveAttribute("data-aos", "fade-up");
    });
  });

  describe("Classes CSS e estrutura", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      expect(container.querySelector(".problem-section")).toBeInTheDocument();
      expect(container.querySelector(".problem-container")).toBeInTheDocument();
      expect(container.querySelector(".problem-content")).toBeInTheDocument();
      expect(container.querySelector(".symptoms-box")).toBeInTheDocument();
      expect(container.querySelector(".symptoms-title")).toBeInTheDocument();
      expect(container.querySelector(".symptoms-list")).toBeInTheDocument();
      expect(container.querySelector(".risk-alert")).toBeInTheDocument();
      expect(container.querySelector(".alert-icon")).toBeInTheDocument();
      expect(container.querySelector(".alert-content")).toBeInTheDocument();
      expect(container.querySelector(".alert-title")).toBeInTheDocument();
      expect(container.querySelector(".alert-text")).toBeInTheDocument();
    });

    test("problem-content contém os parágrafos", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const content = container.querySelector(".problem-content");
      expect(content?.querySelectorAll(".problem-text")).toHaveLength(2);
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elemento section semântico", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    test("usa heading h2", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const h2 = container.querySelector("h2");
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveClass("problem-title");
    });

    test("usa heading h3 para symptoms", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const h3 = container.querySelector("h3");
      expect(h3).toBeInTheDocument();
      expect(h3).toHaveClass("symptoms-title");
    });

    test("usa heading h4 para alert", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const h4 = container.querySelector("h4");
      expect(h4).toBeInTheDocument();
      expect(h4).toHaveClass("alert-title");
    });

    test("usa lista para sintomas", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const list = container.querySelector("ul");
      expect(list).toBeInTheDocument();
      expect(list).toHaveClass("symptoms-list");
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      const section = container.querySelector(".problem-section");
      const containerDiv = section?.querySelector(".problem-container");
      const title = containerDiv?.querySelector(".problem-title");
      const content = containerDiv?.querySelector(".problem-content");
      const symptomsBox = containerDiv?.querySelector(".symptoms-box");
      const riskAlert = containerDiv?.querySelector(".risk-alert");
      
      expect(section).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(symptomsBox).toBeInTheDocument();
      expect(riskAlert).toBeInTheDocument();
    });
  });

  describe("Teste de integração completa", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<ProblemBusinessSection />);
      
      expect(container.querySelector(".problem-section")).toBeInTheDocument();
      expect(screen.getByText(/O jogo invisível que está/)).toBeInTheDocument();
      expect(screen.getByText(/Empreender exige coragem/)).toBeInTheDocument();
      expect(screen.getByText(/Se você se identifica com algum desses sintomas/)).toBeInTheDocument();
      expect(screen.getByText("Falta de previsibilidade financeira no negócio")).toBeInTheDocument();
      expect(screen.getByText("Contas pessoais e da empresa misturadas (o CNPJ virou sua carteira)")).toBeInTheDocument();
      expect(screen.getByText("Retiradas desorganizadas e decisões baseadas na emoção")).toBeInTheDocument();
      expect(screen.getByText("Excesso de trabalho e zero liberdade para desfrutar do que constrói")).toBeInTheDocument();
      expect(screen.getByText("O Risco Real e Imediato")).toBeInTheDocument();
      
      expect(container.querySelectorAll(".symptom-item")).toHaveLength(4);
      expect(container.querySelectorAll(".symptom-icon")).toHaveLength(4);
      expect(container.querySelector(".risk-alert")).toBeInTheDocument();
    });
  });
});