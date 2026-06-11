import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "../components/ProductsContent/Products";

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

// Mock do framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    a: ({ children, ...props }: MockComponentProps) => <a {...props}>{children}</a>,
    div: ({ children, ...props }: MockComponentProps) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: MockComponentProps) => <span {...props}>{children}</span>,
    h2: ({ children, ...props }: MockComponentProps) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: MockComponentProps) => <p {...props}>{children}</p>,
  },
  useInView: jest.fn(() => true),
  Variants: {},
}));

// Mock do CSS
jest.mock("../components/ProductsContent/styles.css", () => ({}));

// Mock do useRef
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useRef: jest.fn(() => ({ current: null })),
}));

describe("Products Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção com id correto", () => {
      const { container } = render(<Products />);
      const section = container.querySelector("#produtos");
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("produtos-section");
    });

    test("renderiza o título da seção corretamente", () => {
      render(<Products />);
      expect(screen.getByText("Por onde começar")).toBeInTheDocument();
    });

    test("renderiza o título principal", () => {
      render(<Products />);
      expect(screen.getByText("Escolha o seu")).toBeInTheDocument();
      expect(screen.getByText("próximo passo")).toBeInTheDocument();
    });

    test("renderiza o subtítulo", () => {
      render(<Products />);
      expect(
        screen.getByText(/Do mais acessível ao mais aprofundado/)
      ).toBeInTheDocument();
    });
  });

  describe("Produtos - Cards", () => {
    test("renderiza todos os 5 produtos", () => {
      const { container } = render(<Products />);
      const cards = container.querySelectorAll(".produto-card");
      expect(cards).toHaveLength(5);
    });

    test("renderiza o card da Mentoria Coletiva para Mulheres", () => {
      render(<Products />);
      expect(screen.getByText("Mentoria Coletiva para Mulheres")).toBeInTheDocument();
      expect(screen.getByText("Comunidade · Mulheres")).toBeInTheDocument();
      expect(screen.getByText(/6 encontros semanais ao vivo/)).toBeInTheDocument();
    });

    test("renderiza o card do E-book: O Jogo Invisível do Dinheiro", () => {
      render(<Products />);
      expect(screen.getByText("E-book: O Jogo Invisível do Dinheiro")).toBeInTheDocument();
      expect(screen.getByText("Conhecimento · Comportamento")).toBeInTheDocument();
      expect(screen.getByText(/Pesquisa \+ comportamento \+ sistema/)).toBeInTheDocument();
    });
  });

  describe("Preços", () => {
   

    test("não renderiza preço para produtos 'Em breve'", () => {
      const { container } = render(<Products />);
      const emBreveCards = container.querySelectorAll(".produto-card.em-breve");
      emBreveCards.forEach(card => {
        expect(card.querySelector(".produto-preco-wrap")).not.toBeInTheDocument();
      });
    });
  });

  describe("Botões e CTAs", () => {
    test("renderiza botão 'Ver mais' para produtos disponíveis", () => {
      render(<Products />);
      const buttons = screen.getAllByText("Ver mais");
      expect(buttons).toHaveLength(3);
    });

    test("renderiza botão 'Em breve' para produtos indisponíveis", () => {
      render(<Products />);
      const disabledButtons = screen.getAllByText("Em breve");
      expect(disabledButtons).toHaveLength(2);
    });
  });

  describe("Links de navegação", () => {
    test("cards 'Em breve' não têm href", () => {
      const { container } = render(<Products />);
      const emBreveCards = container.querySelectorAll(".produto-card.em-breve");
      emBreveCards.forEach(card => {
        expect(card).not.toHaveAttribute("href");
      });
    });
  });
});