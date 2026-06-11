import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cta from "../components/CtaContent/Cta";

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
    div: ({ children, ...props }: MockComponentProps) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: MockComponentProps) => <a {...props}>{children}</a>,
    h2: ({ children, ...props }: MockComponentProps) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: MockComponentProps) => <p {...props}>{children}</p>,
  },
  useInView: jest.fn(() => true),
  useAnimation: jest.fn(() => ({ start: jest.fn() })),
  Variants: {}
}));

// Mock do lucide-react
jest.mock("lucide-react", () => ({
  MessageCircle: () => <svg data-testid="message-circle-icon" />,
  ArrowRight: () => <svg data-testid="arrow-right-icon" />,
  Sparkles: () => <svg data-testid="sparkles-icon" />,
}));

// Mock do CSS
jest.mock("../components/CtaContent/styles.css", () => ({}));

describe("Cta Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção com id correto", () => {
      const { container } = render(<Cta />);
      
      const section = container.querySelector("#contato");
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("contato-section");
    });

    test("renderiza o ícone de Sparkles", () => {
      render(<Cta />);
      
      expect(screen.getByTestId("sparkles-icon")).toBeInTheDocument();
    });

    test("renderiza a tag da seção corretamente", () => {
      render(<Cta />);
      
      expect(screen.getByText("Próximo passo")).toBeInTheDocument();
    });

    test("renderiza o título principal", () => {
      render(<Cta />);
      
      expect(screen.getByText("Você já trabalhou")).toBeInTheDocument();
      expect(screen.getByText("duro o suficiente.")).toBeInTheDocument();
      expect(screen.getByText("Agora é a vez do seu dinheiro trabalhar com você.")).toBeInTheDocument();
    });

    test("renderiza o subtítulo (texto quebrado)", () => {
      render(<Cta />);
      
      // Como o texto está quebrado em elementos diferentes, usamos getAllByText parcial
      expect(screen.getByText(/Não sabe por onde começar\?/)).toBeInTheDocument();
      expect(screen.getByText(/Só uma conversa genuína/)).toBeInTheDocument();
    });
  });

  describe("Botões CTA", () => {
    test("renderiza o botão 'Conversar no WhatsApp'", () => {
      render(<Cta />);
      
      const button = screen.getByText("Conversar no WhatsApp");
      expect(button).toBeInTheDocument();
    });

    test("botão WhatsApp tem o ícone correto", () => {
      render(<Cta />);
      
      expect(screen.getByTestId("message-circle-icon")).toBeInTheDocument();
    });

    test("botão WhatsApp tem o href correto", () => {
      const { container } = render(<Cta />);
      
      const link = container.querySelector('a[href="https://wa.me/5511999999999"]');
      expect(link).toBeInTheDocument();
    });

    test("botão WhatsApp tem a classe CSS correta", () => {
      const { container } = render(<Cta />);
      
      const button = container.querySelector(".btn-whatsapp");
      expect(button).toBeInTheDocument();
    });

    test("renderiza o botão 'Explorar soluções'", () => {
      render(<Cta />);
      
      const button = screen.getByText("Explorar soluções");
      expect(button).toBeInTheDocument();
    });

    test("botão Explorar tem o ícone correto", () => {
      render(<Cta />);
      
      expect(screen.getByTestId("arrow-right-icon")).toBeInTheDocument();
    });

    test("botão Explorar tem o href correto", () => {
      const { container } = render(<Cta />);
      
      const link = container.querySelector('a[href="#produtos"]');
      expect(link).toBeInTheDocument();
    });

    test("botão Explorar tem a classe CSS correta", () => {
      const { container } = render(<Cta />);
      
      const button = container.querySelector(".btn-explorar");
      expect(button).toBeInTheDocument();
    });
  });

  describe("Classes CSS e estrutura", () => {
    test("renderiza elementos com classes CSS corretas", () => {
      const { container } = render(<Cta />);
      
      expect(container.querySelector(".contato-section")).toBeInTheDocument();
      expect(container.querySelector(".contato-background")).toBeInTheDocument();
      expect(container.querySelector(".contato-glow")).toBeInTheDocument();
      expect(container.querySelector(".contato-container")).toBeInTheDocument();
      expect(container.querySelector(".contato-content")).toBeInTheDocument();
    });

    test("renderiza header com classe correta", () => {
      const { container } = render(<Cta />);
      
      const header = container.querySelector(".contato-header");
      expect(header).toBeInTheDocument();
    });

    test("renderiza ícone com classe correta", () => {
      const { container } = render(<Cta />);
      
      const icon = container.querySelector(".contato-icon");
      expect(icon).toBeInTheDocument();
    });

    test("renderiza tag com classe correta", () => {
      render(<Cta />);
      
      const tag = screen.getByText("Próximo passo");
      expect(tag).toHaveClass("contato-tag");
    });

    test("renderiza título com classe correta", () => {
      const { container } = render(<Cta />);
      
      const title = container.querySelector(".contato-titulo");
      expect(title).toBeInTheDocument();
      expect(title?.tagName).toBe("H2");
    });

    test("renderiza título destaque com classe correta", () => {
      const { container } = render(<Cta />);
      
      const highlight = container.querySelector(".titulo-destaque");
      expect(highlight).toBeInTheDocument();
    });

    test("renderiza subtítulo com classe correta", () => {
      const { container } = render(<Cta />);
      
      const subtitle = container.querySelector(".contato-subtitulo");
      expect(subtitle).toBeInTheDocument();
    });

    test("renderiza ações com classe correta", () => {
      const { container } = render(<Cta />);
      
      const actions = container.querySelector(".contato-acoes");
      expect(actions).toBeInTheDocument();
    });
  });

  describe("Conteúdo específico", () => {
    test("título tem o texto completo correto", () => {
      render(<Cta />);
      
      expect(screen.getByText("Você já trabalhou")).toBeInTheDocument();
      expect(screen.getByText("duro o suficiente.")).toBeInTheDocument();
      expect(screen.getByText("Agora é a vez do seu dinheiro trabalhar com você.")).toBeInTheDocument();
    });

    test("subtítulo tem as partes do texto corretas", () => {
      render(<Cta />);
      
      // Verifica as partes do subtítulo separadamente
      expect(screen.getByText(/Não sabe por onde começar\? Me manda uma mensagem\. Sem pressão, sem pitch\./)).toBeInTheDocument();
      expect(screen.getByText(/Só uma conversa genuína\./)).toBeInTheDocument();
    });

    test("título destaque tem a classe correta", () => {
      const { container } = render(<Cta />);
      
      const highlight = container.querySelector(".titulo-destaque");
      expect(highlight).toHaveTextContent("duro o suficiente.");
    });
  });

  describe("Atributos data-aos", () => {
    test("renderiza elementos com atributos data-aos", () => {
      const { container } = render(<Cta />);
      
      expect(container.querySelector('[data-aos="fade-up"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-left"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-right"]')).toBeInTheDocument();
    });

    test("ícone tem data-aos", () => {
      const { container } = render(<Cta />);
      
      const icon = container.querySelector(".contato-icon");
      expect(icon).toHaveAttribute("data-aos", "fade-up");
    });

    test("tag tem data-aos", () => {
      const { container } = render(<Cta />);
      
      const tag = container.querySelector(".contato-tag");
      expect(tag).toHaveAttribute("data-aos", "fade-up");
    });

    test("botão WhatsApp tem data-aos", () => {
      const { container } = render(<Cta />);
      
      const button = container.querySelector(".btn-whatsapp");
      expect(button).toHaveAttribute("data-aos", "fade-left");
    });

    test("botão Explorar tem data-aos", () => {
      const { container } = render(<Cta />);
      
      const button = container.querySelector(".btn-explorar");
      expect(button).toHaveAttribute("data-aos", "fade-right");
    });
  });

  describe("Atributos de animação", () => {
    test("elementos têm atributos de animação do framer-motion", () => {
      const { container } = render(<Cta />);
      
      expect(container.querySelector('[initial="hidden"]')).toBeInTheDocument();
      expect(container.querySelector('[animate="visible"]')).toBeInTheDocument();
    });

    test("botões têm hover animation", () => {
      const { container } = render(<Cta />);
      
      const whatsappBtn = container.querySelector(".btn-whatsapp");
      const explorarBtn = container.querySelector(".btn-explorar");
      
      expect(whatsappBtn).toBeInTheDocument();
      expect(explorarBtn).toBeInTheDocument();
    });
  });

  describe("Elementos de fundo", () => {
    test("renderiza o background", () => {
      const { container } = render(<Cta />);
      
      expect(container.querySelector(".contato-background")).toBeInTheDocument();
      expect(container.querySelector(".contato-glow")).toBeInTheDocument();
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elementos semânticos corretos", () => {
      const { container } = render(<Cta />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
      expect(container.querySelector("h2")).toBeInTheDocument();
      expect(container.querySelectorAll("a")).toHaveLength(2);
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<Cta />);
      
      const section = container.querySelector(".contato-section");
      const containerDiv = section?.querySelector(".contato-container");
      const content = containerDiv?.querySelector(".contato-content");
      const header = content?.querySelector(".contato-header");
      const actions = content?.querySelector(".contato-acoes");
      
      expect(section).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(header).toBeInTheDocument();
      expect(actions).toBeInTheDocument();
    });
  });

  describe("Teste de integração", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<Cta />);
      
      expect(container.firstChild).toHaveClass("contato-section");
      expect(screen.getByText("Próximo passo")).toBeInTheDocument();
      expect(screen.getByText("Você já trabalhou")).toBeInTheDocument();
      expect(screen.getByText("duro o suficiente.")).toBeInTheDocument();
      expect(screen.getByText("Agora é a vez do seu dinheiro trabalhar com você.")).toBeInTheDocument();
      expect(screen.getByText("Conversar no WhatsApp")).toBeInTheDocument();
      expect(screen.getByText("Explorar soluções")).toBeInTheDocument();
      expect(screen.getByTestId("sparkles-icon")).toBeInTheDocument();
      expect(screen.getByTestId("message-circle-icon")).toBeInTheDocument();
      expect(screen.getByTestId("arrow-right-icon")).toBeInTheDocument();
      
      expect(container.querySelector(".contato-section")).toBeInTheDocument();
      expect(container.querySelector(".contato-container")).toBeInTheDocument();
      expect(container.querySelector(".contato-content")).toBeInTheDocument();
      expect(container.querySelector(".contato-header")).toBeInTheDocument();
      expect(container.querySelector(".contato-acoes")).toBeInTheDocument();
      expect(container.querySelectorAll("a")).toHaveLength(2);
    });
  });
});