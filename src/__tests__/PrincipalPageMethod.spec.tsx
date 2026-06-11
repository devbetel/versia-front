import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Method from "../components/MethodContent/Method";


interface MockComponentProps {
  children?: React.ReactNode;
  className?: string;
  custom?: number;
  initial?: string;
  animate?: string;
  variants?: object;
  href?: string;
  onClick?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  [key: string]: unknown;
}

// Mock do framer-motion - incluindo todos os componentes necessários
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: MockComponentProps) => <div {...props}>{children}</div>,
    li: ({ children, ...props }: MockComponentProps) => <li {...props}>{children}</li>,
    ul: ({ children, ...props }: MockComponentProps) => <ul {...props}>{children}</ul>,
    a: ({ children, ...props }: MockComponentProps) => <a {...props}>{children}</a>,
    span: ({ children, ...props }: MockComponentProps) => <span {...props}>{children}</span>,
    h2: ({ children, ...props }: MockComponentProps) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: MockComponentProps) => <p {...props}>{children}</p>,
  },
  useInView: jest.fn(() => true),
  Variants: {}
}));

// Mock do CSS
jest.mock("../components/MethodContent/styles.css", () => ({}));

describe("Method Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção com id correto", () => {
      const { container } = render(<Method />);
      
      const section = container.querySelector("#metodo");
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("metodo-section");
    });

    test("renderiza o título da seção corretamente", () => {
      render(<Method />);
      
      expect(screen.getByText("O método Vérsia")).toBeInTheDocument();
    });

    test("renderiza o título principal", () => {
      render(<Method />);
      
      expect(screen.getByText("Seis etapas.")).toBeInTheDocument();
      expect(screen.getByText("Uma transformação que começa por dentro.")).toBeInTheDocument();
    });

    test("renderiza os parágrafos de descrição", () => {
      render(<Method />);
      
      expect(
        screen.getByText(/Todo o trabalho da Vérsia Finance segue um processo sequencial/)
      ).toBeInTheDocument();
      
      expect(
        screen.getByText(/Não é sobre disciplina. É sobre entender de onde vieram seus padrões/)
      ).toBeInTheDocument();
    });
  });

  describe("Etapas do método", () => {
    const etapas = [
      { numero: "01", nome: "Validação Emocional", descricao: "Mapeamos as dores da infância e os padrões financeiros herdados. Sem isso, qualquer mudança é superficial." },
      { numero: "02", nome: "Estancamento", descricao: "Renegociação de dívidas e corte de juros caros. Paramos a sangria antes de qualquer outro movimento." },
      { numero: "03", nome: "Redirecionamento", descricao: "Lastro e alinhamento do orçamento real — aquele que cabe na sua vida de verdade." },
      { numero: "04", nome: "Sustentabilidade", descricao: "Piloto automático financeiro saudável. Um sistema que funciona mesmo nos meses difíceis." },
      { numero: "05", nome: "Investimento de Paz", descricao: "Construção da reserva de emergência como primeiro ato real de autocuidado financeiro." },
      { numero: "06", nome: "Autonomia", descricao: "Liberdade de tempo e de escolhas. O dinheiro deixa de ser o motivo pelo qual você não pode." }
    ];

    test("renderiza todas as 6 etapas", () => {
      const { container } = render(<Method />);
      
      const etapasList = container.querySelectorAll(".etapa-item");
      expect(etapasList).toHaveLength(6);
    });

    test("renderiza os números das etapas corretamente", () => {
      render(<Method />);
      
      etapas.forEach(etapa => {
        expect(screen.getByText(etapa.numero)).toBeInTheDocument();
      });
    });

    test("renderiza os nomes das etapas corretamente", () => {
      render(<Method />);
      
      etapas.forEach(etapa => {
        expect(screen.getByText(etapa.nome)).toBeInTheDocument();
      });
    });

    test("renderiza as descrições das etapas corretamente", () => {
      render(<Method />);
      
      etapas.forEach(etapa => {
        expect(screen.getByText(etapa.descricao)).toBeInTheDocument();
      });
    });
  });

  describe("Botão CTA", () => {
    test("renderiza o botão 'Conhecer a mentoria'", () => {
      render(<Method />);
      
      const button = screen.getByText("Conhecer a mentoria");
      expect(button).toBeInTheDocument();
    });

    test("botão tem o href correto", () => {
      const { container } = render(<Method />);
      
      const link = container.querySelector('a[href="#mentoria"]');
      expect(link).toBeInTheDocument();
    });

    test("botão tem a classe CSS correta", () => {
      const { container } = render(<Method />);
      
      const button = container.querySelector(".metodo-cta");
      expect(button).toBeInTheDocument();
    });
  });

  describe("Classes CSS e estrutura", () => {
    test("renderiza elementos com classes CSS corretas", () => {
      const { container } = render(<Method />);
      
      expect(container.querySelector(".metodo-section")).toBeInTheDocument();
      expect(container.querySelector(".metodo-container")).toBeInTheDocument();
      expect(container.querySelector(".metodo-grid")).toBeInTheDocument();
      expect(container.querySelector(".metodo-content")).toBeInTheDocument();
      expect(container.querySelector(".etapas-container")).toBeInTheDocument();
    });

    test("renderiza tag da seção com classe correta", () => {
      render(<Method />);
      
      const tag = screen.getByText("O método Vérsia");
      expect(tag).toHaveClass("metodo-tag");
    });

    test("renderiza título com classe correta", () => {
      const { container } = render(<Method />);
      
      const title = container.querySelector(".metodo-titulo");
      expect(title).toBeInTheDocument();
      expect(title?.tagName).toBe("H2");
    });

    test("renderiza texto com classe correta", () => {
      const { container } = render(<Method />);
      
      const text = container.querySelector(".metodo-texto");
      expect(text).toBeInTheDocument();
    });

    test("cada etapa tem as classes esperadas", () => {
      const { container } = render(<Method />);
      
      const etapasItems = container.querySelectorAll(".etapa-item");
      etapasItems.forEach(item => {
        expect(item.querySelector(".etapa-numero")).toBeInTheDocument();
        expect(item.querySelector(".etapa-conteudo")).toBeInTheDocument();
        expect(item.querySelector(".etapa-titulo")).toBeInTheDocument();
        expect(item.querySelector(".etapa-descricao")).toBeInTheDocument();
      });
    });
  });

  describe("Estrutura de grid", () => {
    test("renderiza a estrutura de grid correta", () => {
      const { container } = render(<Method />);
      
      const grid = container.querySelector(".metodo-grid");
      expect(grid).toBeInTheDocument();
      
      const content = grid?.querySelector(".metodo-content");
      const etapasContainer = grid?.querySelector(".etapas-container");
      
      expect(content).toBeInTheDocument();
      expect(etapasContainer).toBeInTheDocument();
    });

    test("lista de etapas é uma UL", () => {
      const { container } = render(<Method />);
      
      const lista = container.querySelector(".etapas-lista");
      expect(lista).toBeInTheDocument();
      expect(lista?.tagName).toBe("UL");
    });

    test("cada etapa é um LI", () => {
      const { container } = render(<Method />);
      
      const etapasItems = container.querySelectorAll(".etapa-item");
      etapasItems.forEach(item => {
        expect(item?.tagName).toBe("LI");
      });
    });
  });

  describe("Atributos data-aos", () => {
    test("renderiza elementos com atributos data-aos", () => {
      const { container } = render(<Method />);
      
      expect(container.querySelector('[data-aos="fade-up"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-left"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-right"]')).toBeInTheDocument();
    });

    test("cada etapa tem data-aos", () => {
      const { container } = render(<Method />);
      
      const etapasItems = container.querySelectorAll(".etapa-item");
      etapasItems.forEach(item => {
        expect(item).toHaveAttribute("data-aos", "fade-up");
      });
    });
  });

  describe("Atributos de animação", () => {
    test("elementos têm atributos de animação do framer-motion", () => {
      const { container } = render(<Method />);
      
      expect(container.querySelector('[initial="hidden"]')).toBeInTheDocument();
      expect(container.querySelector('[animate="visible"]')).toBeInTheDocument();
    });
  });

  describe("Conteúdo específico das etapas", () => {
    test("primeira etapa tem conteúdo correto", () => {
      render(<Method />);
      
      expect(screen.getByText("01")).toBeInTheDocument();
      expect(screen.getByText("Validação Emocional")).toBeInTheDocument();
      expect(screen.getByText(/Mapeamos as dores da infância/)).toBeInTheDocument();
    });

    test("última etapa tem conteúdo correto", () => {
      render(<Method />);
      
      expect(screen.getByText("06")).toBeInTheDocument();
      expect(screen.getByText("Autonomia")).toBeInTheDocument();
      expect(screen.getByText(/Liberdade de tempo e de escolhas/)).toBeInTheDocument();
    });

    test("etapa de Estancamento tem descrição correta", () => {
      render(<Method />);
      
      expect(screen.getByText("02")).toBeInTheDocument();
      expect(screen.getByText("Estancamento")).toBeInTheDocument();
      expect(screen.getByText(/Renegociação de dívidas/)).toBeInTheDocument();
    });

    test("etapa de Investimento de Paz tem descrição correta", () => {
      render(<Method />);
      
      expect(screen.getByText("05")).toBeInTheDocument();
      expect(screen.getByText("Investimento de Paz")).toBeInTheDocument();
      expect(screen.getByText(/Construção da reserva de emergência/)).toBeInTheDocument();
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elementos semânticos corretos", () => {
      const { container } = render(<Method />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
      expect(container.querySelector("h2")).toBeInTheDocument();
      expect(container.querySelector("ul")).toBeInTheDocument();
      expect(container.querySelectorAll("li")).toHaveLength(6);
      expect(container.querySelector("a")).toBeInTheDocument();
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<Method />);
      
      const section = container.querySelector(".metodo-section");
      const containerEl = section?.querySelector(".metodo-container");
      const grid = containerEl?.querySelector(".metodo-grid");
      const content = grid?.querySelector(".metodo-content");
      const etapasContainer = grid?.querySelector(".etapas-container");
      const lista = etapasContainer?.querySelector(".etapas-lista");
      
      expect(section).toBeInTheDocument();
      expect(containerEl).toBeInTheDocument();
      expect(grid).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(etapasContainer).toBeInTheDocument();
      expect(lista).toBeInTheDocument();
    });
  });

  describe("Teste de integração", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<Method />);
      
      expect(container.firstChild).toHaveClass("metodo-section");
      expect(screen.getByText("O método Vérsia")).toBeInTheDocument();
      expect(screen.getByText("Seis etapas.")).toBeInTheDocument();
      expect(screen.getByText("Uma transformação que começa por dentro.")).toBeInTheDocument();
      expect(screen.getByText("Conhecer a mentoria")).toBeInTheDocument();
      
      expect(screen.getByText("01")).toBeInTheDocument();
      expect(screen.getByText("02")).toBeInTheDocument();
      expect(screen.getByText("03")).toBeInTheDocument();
      expect(screen.getByText("04")).toBeInTheDocument();
      expect(screen.getByText("05")).toBeInTheDocument();
      expect(screen.getByText("06")).toBeInTheDocument();
      
      expect(container.querySelector(".metodo-section")).toBeInTheDocument();
      expect(container.querySelector(".metodo-container")).toBeInTheDocument();
      expect(container.querySelector(".metodo-grid")).toBeInTheDocument();
      expect(container.querySelector(".metodo-content")).toBeInTheDocument();
      expect(container.querySelector(".etapas-container")).toBeInTheDocument();
      expect(container.querySelectorAll(".etapa-item")).toHaveLength(6);
    });
  });
});