import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Different from "../components/DifferentContent/Different";

// Mock do AOS
jest.mock('aos', () => ({
  init: jest.fn(),
  refresh: jest.fn(),
  refreshHard: jest.fn()
}));

// Mock do CSS
jest.mock("../components/DifferentContent/styles.css", () => ({}));

describe("Different Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza o título da seção corretamente", () => {
      render(<Different />);
      
      expect(
        screen.getByText("O que é diferente aqui")
      ).toBeInTheDocument();
    });

    test("renderiza o título principal com formatação em itálico", () => {
      render(<Different />);
      
      // Usando regex para encontrar o texto quebrado
      expect(
        screen.getByText(/Estou cansada do/)
      ).toBeInTheDocument();
      
      expect(
        screen.getByText(/discurso financeiro/)
      ).toBeInTheDocument();
      
      const italicText = screen.getByText(/que pune as pessoas\./);
      expect(italicText).toBeInTheDocument();
      expect(italicText.tagName).toBe("EM");
    });

    test("renderiza o texto do manifesto", () => {
      render(<Different />);
      
      expect(
        screen.getByText(/Passar décadas dentro do mercado financeiro/)
      ).toBeInTheDocument();
      
      expect(
        screen.getByText(/estar endividado no Brasil de hoje não é falta de caráter/)
      ).toBeInTheDocument();
    });
  });

  describe("Lista do manifesto", () => {
    test("renderiza todos os itens da lista", () => {
      render(<Different />);
      
      // Itens "NÃO"
      expect(screen.getByText("Corta o cafezinho")).toBeInTheDocument();
      expect(screen.getByText("Você gasta demais")).toBeInTheDocument();
      expect(screen.getByText("Siga essa planilha")).toBeInTheDocument();
      expect(screen.getByText("Fórmula de guru")).toBeInTheDocument();
      expect(screen.getByText("Promessa de enriquecer rápido")).toBeInTheDocument();
      expect(screen.getByText("Mais uma lição de moral")).toBeInTheDocument();
    });

    test("renderiza as setas separadoras", () => {
      render(<Different />);
      
      const arrows = screen.getAllByText("→");
      expect(arrows).toHaveLength(6);
    });

    test("renderiza itens da abordagem alternativa", () => {
      render(<Different />);
      
      // Itens "SIM"
      expect(screen.getByText("Entende para onde vai cada real")).toBeInTheDocument();
      expect(screen.getByText("Você nunca aprendeu a se ver")).toBeInTheDocument();
      expect(screen.getByText("Crie um sistema para a sua vida")).toBeInTheDocument();
      expect(screen.getByText("Método que respeita sua realidade")).toBeInTheDocument();
      expect(screen.getByText("Clareza para decidir melhor")).toBeInTheDocument();
      expect(screen.getByText("Uma profissional real do seu lado")).toBeInTheDocument();
    });

    test("verifica estrutura dos itens da lista", () => {
      const { container } = render(<Different />);
      
      const listItems = container.querySelectorAll(".manifesto-item");
      expect(listItems).toHaveLength(6);
      
      listItems.forEach(item => {
        expect(item.querySelector(".nao")).toBeInTheDocument();
        expect(item.querySelector(".sep")).toBeInTheDocument();
        expect(item.querySelector(".sim")).toBeInTheDocument();
      });
    });
  });

  describe("Classes CSS e estrutura", () => {
    test("renderiza elementos com classes CSS corretas", () => {
      const { container } = render(<Different />);
      
      expect(container.querySelector(".different")).toBeInTheDocument();
      expect(container.querySelector(".different-container")).toBeInTheDocument();
      expect(container.querySelector(".section-manifesto")).toBeInTheDocument();
      expect(container.querySelector(".manifesto-grid")).toBeInTheDocument();
    });

    test("renderiza tag da seção com classe correta", () => {
      render(<Different />);
      
      const sectionTag = screen.getByText("O que é diferente aqui");
      expect(sectionTag).toHaveClass("section-tag");
    });

    test("renderiza título com classe correta", () => {
      const { container } = render(<Different />);
      
      const title = container.querySelector(".manifesto-title");
      expect(title).toBeInTheDocument();
      expect(title?.tagName).toBe("H2");
    });

    test("renderiza parágrafo com classe correta", () => {
      const { container } = render(<Different />);
      
      const paragraph = container.querySelector(".manifesto-body");
      expect(paragraph).toBeInTheDocument();
    });

    test("renderiza lista com classe correta", () => {
      const { container } = render(<Different />);
      
      const list = container.querySelector(".manifesto-lista");
      expect(list).toBeInTheDocument();
      expect(list?.tagName).toBe("UL");
    });
  });

  describe("Atributos data-aos", () => {
    test("renderiza elementos com atributos data-aos corretos", () => {
      const { container } = render(<Different />);
      
      expect(container.querySelector('[data-aos="fade-up"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-right"]')).toBeInTheDocument();
    });

    test("verifica se todos os itens da lista têm data-aos", () => {
      const { container } = render(<Different />);
      
      const itemsWithAos = container.querySelectorAll('.manifesto-item[data-aos="fade-up"]');
      expect(itemsWithAos).toHaveLength(6);
    });
  });

  describe("Classes de animação", () => {
    test("renderiza elementos com classes de fade-in", () => {
      const { container } = render(<Different />);
      
      const fadeElements = container.querySelectorAll(".fade-in.visible");
      expect(fadeElements.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elementos semânticos corretos", () => {
      const { container } = render(<Different />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
      expect(container.querySelector("h2")).toBeInTheDocument();
      expect(container.querySelector("ul")).toBeInTheDocument();
      const listItems = container.querySelectorAll("li");
      expect(listItems).toHaveLength(6);
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<Different />);
      
      const section = container.querySelector(".section-manifesto");
      expect(section?.querySelector(".manifesto-grid")).toBeInTheDocument();
      expect(section?.querySelector(".manifesto-title")).toBeInTheDocument();
      expect(section?.querySelector(".manifesto-lista")).toBeInTheDocument();
    });
  });

  describe("Conteúdo específico dos itens", () => {
    test("verifica conteúdo do primeiro item", () => {
      render(<Different />);
      
      expect(screen.getByText("Corta o cafezinho")).toBeInTheDocument();
      expect(screen.getByText("Entende para onde vai cada real")).toBeInTheDocument();
    });

    test("verifica conteúdo do último item", () => {
      render(<Different />);
      
      expect(screen.getByText("Mais uma lição de moral")).toBeInTheDocument();
      expect(screen.getByText("Uma profissional real do seu lado")).toBeInTheDocument();
    });

    test("verifica que cada item tem exatamente 3 spans", () => {
      const { container } = render(<Different />);
      
      const listItems = container.querySelectorAll(".manifesto-item");
      listItems.forEach(item => {
        const spans = item.querySelectorAll("span");
        expect(spans).toHaveLength(3);
      });
    });
  });

  describe("Teste de integração", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<Different />);
      
      expect(container.firstChild).toHaveClass("different");
      expect(screen.getByText("O que é diferente aqui")).toBeInTheDocument();
      
      // Usando regex para encontrar o texto quebrado
      expect(screen.getByText(/Estou cansada do/)).toBeInTheDocument();
      expect(screen.getAllByText("→")).toHaveLength(6);
      
      expect(container.querySelector(".section-tag")).toBeInTheDocument();
      expect(container.querySelector(".manifesto-title")).toBeInTheDocument();
      expect(container.querySelector(".manifesto-body")).toBeInTheDocument();
      expect(container.querySelector(".manifesto-lista")).toBeInTheDocument();
    });
  });
});