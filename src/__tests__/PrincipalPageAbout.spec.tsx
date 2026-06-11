import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../components/AboutContent/About";

interface MockComponentProps {
  children?: React.ReactNode;
  className?: string;
  custom?: number;
  initial?: string;
  animate?: string;
  variants?: object;
  [key: string]: unknown;
}

// Mock do framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: MockComponentProps) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: MockComponentProps) => <span {...props}>{children}</span>,
    h2: ({ children, ...props }: MockComponentProps) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: MockComponentProps) => <p {...props}>{children}</p>,
  },
  useInView: jest.fn(() => true),
  Variants: {}
}));

// Mock do CSS
jest.mock("../components/AboutContent/styles.css", () => ({}));

describe("About Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção com id correto", () => {
      const { container } = render(<About />);
      
      const section = container.querySelector("#sobre");
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("about-section");
    });

    test("renderiza o título da seção corretamente", () => {
      render(<About />);
      
      expect(
        screen.getByText("Quem está do outro lado")
      ).toBeInTheDocument();
    });

    test("renderiza o nome Danielle Borges", () => {
      render(<About />);
      
      expect(screen.getByText("Danielle Borges")).toBeInTheDocument();
    });

    test("renderiza o título profissional", () => {
      render(<About />);
      
      expect(
        screen.getByText("Planejadora Financeira CFP® · Especialista em Comportamento")
      ).toBeInTheDocument();
    });
  });

  describe("Imagem", () => {
    test("renderiza a imagem com atributos corretos", () => {
      render(<About />);
      
      const image = screen.getByAltText("Foto de Danielle Borges");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "/about-01.jpeg");
      expect(image).toHaveClass("about-foto-image");
    });

    test("renderiza elementos decorativos da imagem", () => {
      const { container } = render(<About />);
      
      expect(container.querySelector(".about-foto-frame")).toBeInTheDocument();
      expect(container.querySelector(".about-foto-line")).toBeInTheDocument();
    });
  });

  describe("Parágrafos de texto", () => {
    test("renderiza o primeiro parágrafo corretamente", () => {
      render(<About />);
      
      // O texto completo do primeiro parágrafo
      const primeiroParagrafo = screen.getByText(/Danielle Borges cresceu respirando o mercado financeiro\. Influenciada por um tio que trabalhava no Banco do Brasil e a quem vê como um pai profissional, ela se apaixonou desde cedo por esse universo de prestígio\./);
      expect(primeiroParagrafo).toBeInTheDocument();
    });

    test("renderiza o segundo parágrafo corretamente", () => {
      render(<About />);
      
      // O texto completo do segundo parágrafo
      const segundoParagrafo = screen.getByText(/Hoje, com quase duas décadas de experiência na área e a certificação CFP®, Danielle percebeu que o dinheiro ainda é tratado, muitas vezes, apenas como um número, uma meta ou um produto\. Movida pelo desejo de humanizar essa relação, ela criou um espaço onde as finanças se tornam uma verdadeira ferramenta de transformação\./);
      expect(segundoParagrafo).toBeInTheDocument();
    });

    test("renderiza ambos os parágrafos", () => {
      const { container } = render(<About />);
      
      const paragraphs = container.querySelectorAll(".about-texto");
      expect(paragraphs).toHaveLength(2);
    });
  });

  describe("Certificações", () => {
    const certifications = ["CFP®", "CEA", "CPA-20", "CPA-10", "Administração de Empresas", "Finanças Comportamentais"];

    test("renderiza todas as certificações", () => {
      render(<About />);
      
      certifications.forEach(cert => {
        expect(screen.getByText(cert)).toBeInTheDocument();
      });
    });

    test("renderiza as certificações com a classe correta", () => {
      const { container } = render(<About />);
      
      const certElements = container.querySelectorAll(".cert");
      expect(certElements).toHaveLength(6);
      
      certElements.forEach((el, index) => {
        expect(el).toHaveTextContent(certifications[index]);
      });
    });
  });

  describe("Classes CSS e estrutura", () => {
    test("renderiza elementos com classes CSS corretas", () => {
      const { container } = render(<About />);
      
      expect(container.querySelector(".about-section")).toBeInTheDocument();
      expect(container.querySelector(".about-container")).toBeInTheDocument();
      expect(container.querySelector(".about-grid")).toBeInTheDocument();
      expect(container.querySelector(".about-content")).toBeInTheDocument();
    });

    test("renderiza título da seção com classe correta", () => {
      render(<About />);
      
      const sectionTag = screen.getByText("Quem está do outro lado");
      expect(sectionTag).toHaveClass("section-tag");
    });

    test("renderiza nome com classe correta", () => {
      const { container } = render(<About />);
      
      const nome = container.querySelector(".about-nome");
      expect(nome).toBeInTheDocument();
      expect(nome?.tagName).toBe("H2");
    });

    test("renderiza título profissional com classe correta", () => {
      const { container } = render(<About />);
      
      const titulo = container.querySelector(".about-titulo");
      expect(titulo).toBeInTheDocument();
    });

    test("renderiza divisor com classe correta", () => {
      const { container } = render(<About />);
      
      const divider = container.querySelector(".about-divider");
      expect(divider).toBeInTheDocument();
    });
  });

  describe("Estrutura de grid", () => {
    test("renderiza a estrutura de grid correta", () => {
      const { container } = render(<About />);
      
      const grid = container.querySelector(".about-grid");
      expect(grid).toBeInTheDocument();
      
      const fotoWrap = container.querySelector(".about-foto-wrap");
      const content = container.querySelector(".about-content");
      
      expect(fotoWrap).toBeInTheDocument();
      expect(content).toBeInTheDocument();
    });
  });

  describe("Animação e visibilidade", () => {
    test("componente é renderizado com as classes base", () => {
      const { container } = render(<About />);
      
      expect(container.querySelector(".about-section")).toBeInTheDocument();
      expect(container.querySelector(".section-tag")).toBeInTheDocument();
    });

    test("elementos têm as classes de animação configuradas", () => {
      const { container } = render(<About />);
      
      expect(container.querySelector(".about-foto-wrap")).toBeInTheDocument();
      expect(container.querySelector(".about-content")).toBeInTheDocument();
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elementos semânticos corretos", () => {
      const { container } = render(<About />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
      expect(container.querySelector("h2")).toBeInTheDocument();
      expect(container.querySelector("img")).toBeInTheDocument();
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<About />);
      
      const section = container.querySelector(".about-section");
      const containerEl = section?.querySelector(".about-container");
      const grid = containerEl?.querySelector(".about-grid");
      
      expect(section).toBeInTheDocument();
      expect(containerEl).toBeInTheDocument();
      expect(grid).toBeInTheDocument();
      
      const fotoWrap = grid?.querySelector(".about-foto-wrap");
      const content = grid?.querySelector(".about-content");
      
      expect(fotoWrap).toBeInTheDocument();
      expect(content).toBeInTheDocument();
    });
  });

  describe("Conteúdo específico", () => {
    test("verifica conteúdo do primeiro parágrafo", () => {
      render(<About />);
      
      const primeiroParagrafo = screen.getByText(/Danielle Borges cresceu respirando o mercado financeiro\. Influenciada por um tio que trabalhava no Banco do Brasil e a quem vê como um pai profissional, ela se apaixonou desde cedo por esse universo de prestígio\./);
      expect(primeiroParagrafo).toBeInTheDocument();
    });

    test("verifica conteúdo do segundo parágrafo", () => {
      render(<About />);
      
      const segundoParagrafo = screen.getByText(/Hoje, com quase duas décadas de experiência na área e a certificação CFP®, Danielle percebeu que o dinheiro ainda é tratado, muitas vezes, apenas como um número, uma meta ou um produto\. Movida pelo desejo de humanizar essa relação, ela criou um espaço onde as finanças se tornam uma verdadeira ferramenta de transformação\./);
      expect(segundoParagrafo).toBeInTheDocument();
    });

    test("verifica ordem das certificações", () => {
      render(<About />);
      
      const certsContainer = screen.getByText("CFP®").parentElement;
      const certs = certsContainer?.querySelectorAll(".cert");
      
      expect(certs?.[0]).toHaveTextContent("CFP®");
      expect(certs?.[1]).toHaveTextContent("CEA");
      expect(certs?.[2]).toHaveTextContent("CPA-20");
      expect(certs?.[3]).toHaveTextContent("CPA-10");
      expect(certs?.[4]).toHaveTextContent("Administração de Empresas");
      expect(certs?.[5]).toHaveTextContent("Finanças Comportamentais");
    });
  });

  describe("Teste de integração", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<About />);
      
      expect(container.firstChild).toHaveClass("about-section");
      expect(screen.getByText("Quem está do outro lado")).toBeInTheDocument();
      expect(screen.getByText("Danielle Borges")).toBeInTheDocument();
      expect(screen.getByText("Planejadora Financeira CFP® · Especialista em Comportamento")).toBeInTheDocument();
      expect(screen.getByAltText("Foto de Danielle Borges")).toBeInTheDocument();
      expect(screen.getByText("CFP®")).toBeInTheDocument();
      expect(screen.getByText("Finanças Comportamentais")).toBeInTheDocument();
      
      expect(container.querySelector(".about-section")).toBeInTheDocument();
      expect(container.querySelector(".about-container")).toBeInTheDocument();
      expect(container.querySelector(".about-grid")).toBeInTheDocument();
      expect(container.querySelector(".about-content")).toBeInTheDocument();
      expect(container.querySelector(".about-foto-wrap")).toBeInTheDocument();
      expect(container.querySelector(".section-tag")).toBeInTheDocument();
      expect(container.querySelector(".about-nome")).toBeInTheDocument();
      expect(container.querySelector(".about-titulo")).toBeInTheDocument();
      expect(container.querySelector(".about-divider")).toBeInTheDocument();
      expect(container.querySelector(".about-certs")).toBeInTheDocument();
    });
  });
});