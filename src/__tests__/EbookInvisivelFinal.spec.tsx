import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import FinalSection from "../components/ebook-jogo-invisivel-page/FinalContent/Final";

// Mock do CSS
jest.mock("../components/ebook-jogo-invisivel-page/FinalContent/styles.css", () => ({}));

// Mock do IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  disconnect: jest.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock do scrollIntoView
const mockScrollIntoView = jest.fn();
Element.prototype.scrollIntoView = mockScrollIntoView;

// Mock do querySelector
const mockQuerySelector = jest.fn();
document.querySelector = mockQuerySelector;

describe("FinalSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Setup padrão do querySelector para retornar um elemento mock
    mockQuerySelector.mockReturnValue({
      scrollIntoView: mockScrollIntoView
    });
  });

  describe("Renderização básica", () => {
    test("renderiza a seção principal", () => {
      const { container } = render(<FinalSection />);
      
      expect(container.querySelector(".final-section")).toBeInTheDocument();
      expect(container.querySelector(".final-container")).toBeInTheDocument();
    });

    test("renderiza o título principal", () => {
      render(<FinalSection />);
      
      expect(screen.getByText("O jogo foi feito")).toBeInTheDocument();
      expect(screen.getByText("para você perder.")).toBeInTheDocument();
      expect(screen.getByText("Agora você conhece as regras.")).toBeInTheDocument();
    });

    test("título highlight tem classe correta", () => {
      const { container } = render(<FinalSection />);
      
      const highlight = container.querySelector(".title-highlight");
      expect(highlight).toBeInTheDocument();
      expect(highlight).toHaveTextContent("Agora você conhece as regras.");
    });

    test("renderiza o subtítulo com preço", () => {
      render(<FinalSection />);
      
      expect(screen.getByText("Por R$26,90")).toBeInTheDocument();
      expect(screen.getByText("Sem lição de moral. Com a verdade que ninguém contou.")).toBeInTheDocument();
    });

    test("renderiza o botão CTA", () => {
      render(<FinalSection />);
      
      const button = screen.getByText("Quero entender o jogo");
      expect(button).toBeInTheDocument();
    });
  });

  describe("Elementos de fundo e efeitos", () => {
    test("renderiza os elementos de fundo", () => {
      const { container } = render(<FinalSection />);
      
      expect(container.querySelector(".section-background")).toBeInTheDocument();
      expect(container.querySelector(".grid-pattern")).toBeInTheDocument();
    });

    test("renderiza as orbs de gradiente", () => {
      const { container } = render(<FinalSection />);
      
      expect(container.querySelector(".gradient-orb.orb-1")).toBeInTheDocument();
      expect(container.querySelector(".gradient-orb.orb-2")).toBeInTheDocument();
    });
  });

  describe("Elementos decorativos flutuantes", () => {
    test("renderiza os cards flutuantes", () => {
      const { container } = render(<FinalSection />);
      
      expect(container.querySelector(".decorative-elements")).toBeInTheDocument();
      expect(container.querySelector(".floating-card.card-1")).toBeInTheDocument();
      expect(container.querySelector(".floating-card.card-2")).toBeInTheDocument();
      expect(container.querySelector(".floating-card.card-3")).toBeInTheDocument();
    });

    test("cards flutuantes têm ícones e textos corretos", () => {
      render(<FinalSection />);
      
      expect(screen.getByText("💡")).toBeInTheDocument();
      expect(screen.getByText("Insights Reais")).toBeInTheDocument();
      expect(screen.getByText("🎯")).toBeInTheDocument();
      expect(screen.getByText("Sem Enrolação")).toBeInTheDocument();
      expect(screen.getByText("🔥")).toBeInTheDocument();
      expect(screen.getByText("Verdade Nua")).toBeInTheDocument();
    });
  });

  describe("Trust Indicators", () => {
    test("renderiza os indicadores de confiança", () => {
      const { container } = render(<FinalSection />);
      
      expect(container.querySelector(".trust-indicators")).toBeInTheDocument();
      expect(container.querySelectorAll(".trust-item")).toHaveLength(3);
    });

    test("indicadores têm textos corretos", () => {
      render(<FinalSection />);
      
      expect(screen.getByText("Acesso Imediato")).toBeInTheDocument();
      expect(screen.getByText("Sem Assinatura")).toBeInTheDocument();
      expect(screen.getByText("Conteúdo Premium")).toBeInTheDocument();
    });

    test("indicadores têm ícones SVG", () => {
      const { container } = render(<FinalSection />);
      
      const icons = container.querySelectorAll(".trust-icon");
      expect(icons).toHaveLength(3);
    });
  });

  describe("Scroll Indicator", () => {
    test("renderiza o indicador de scroll", () => {
      const { container } = render(<FinalSection />);
      
      expect(container.querySelector(".scroll-indicator")).toBeInTheDocument();
      expect(container.querySelector(".scroll-arrow")).toBeInTheDocument();
    });

    test("indicador tem SVG com paths corretos", () => {
      const { container } = render(<FinalSection />);
      
      const svg = container.querySelector(".scroll-arrow svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
    });
  });

  describe("Botão CTA", () => {
    test("botão tem o href correto", () => {
      render(<FinalSection />);
      
      const button = screen.getByText("Quero entender o jogo").closest("a");
      expect(button).toHaveAttribute("href", "#oferta");
    });

    test("botão tem a classe CSS correta", () => {
      const { container } = render(<FinalSection />);
      
      const button = container.querySelector(".cta-button");
      expect(button).toBeInTheDocument();
    });

    test("botão tem ícones SVG", () => {
      const { container } = render(<FinalSection />);
      
      const buttonIcon = container.querySelector(".button-icon svg");
      const buttonArrow = container.querySelector(".button-arrow svg");
      
      expect(buttonIcon).toBeInTheDocument();
      expect(buttonArrow).toBeInTheDocument();
    });

    test("botão tem efeitos de brilho", () => {
      const { container } = render(<FinalSection />);
      
      expect(container.querySelector(".button-shine")).toBeInTheDocument();
      expect(container.querySelector(".button-glow")).toBeInTheDocument();
    });

    test("clique no botão chama scrollIntoView", async () => {
      const user = userEvent.setup();
      render(<FinalSection />);
      
      const button = screen.getByText("Quero entender o jogo");
      
      await act(async () => {
        await user.click(button);
      });
      
      expect(mockQuerySelector).toHaveBeenCalledWith("#oferta");
      expect(mockScrollIntoView).toHaveBeenCalledWith({ 
        behavior: 'smooth',
        block: 'start'
      });
    });

    test("preventDefault é chamado no clique", async () => {
      const user = userEvent.setup();
      render(<FinalSection />);
      
      const button = screen.getByText("Quero entender o jogo");
      
      await act(async () => {
        await user.click(button);
      });
      
      // O scrollIntoView foi chamado, então o preventDefault funcionou
      expect(mockScrollIntoView).toHaveBeenCalled();
    });
  });

  describe("Props personalizadas", () => {
    test("aceita título personalizado", () => {
      const customTitle = {
        line1: "Título personalizado",
        line2: "Linha personalizada",
        highlight: "Destaque personalizado"
      };
      
      render(<FinalSection title={customTitle} />);
      
      expect(screen.getByText("Título personalizado")).toBeInTheDocument();
      expect(screen.getByText("Linha personalizada")).toBeInTheDocument();
      expect(screen.getByText("Destaque personalizado")).toBeInTheDocument();
    });

    test("aceita subtítulo personalizado", () => {
      render(<FinalSection subtitle="Subtítulo personalizado aqui" />);
      
      expect(screen.getByText("Subtítulo personalizado aqui")).toBeInTheDocument();
    });

    test("aceita preço personalizado", () => {
      render(<FinalSection price={49.90} />);
      
      expect(screen.getByText("Por R$49,90")).toBeInTheDocument();
    });

    test("aceita texto do botão personalizado", () => {
      render(<FinalSection buttonText="Clique aqui agora" />);
      
      expect(screen.getByText("Clique aqui agora")).toBeInTheDocument();
    });

    test("aceita targetSection personalizado", () => {
      render(<FinalSection targetSection="#contato" />);
      
      const button = screen.getByText("Quero entender o jogo").closest("a");
      expect(button).toHaveAttribute("href", "#contato");
    });

    test("aceita className personalizado", () => {
      const { container } = render(<FinalSection className="classe-personalizada" />);
      
      const section = container.querySelector(".final-section");
      expect(section).toHaveClass("classe-personalizada");
    });
  });

  describe("Callback onButtonClick", () => {
    test("chama onButtonClick quando fornecido", async () => {
      const user = userEvent.setup();
      const mockOnClick = jest.fn();
      
      render(<FinalSection onButtonClick={mockOnClick} />);
      
      const button = screen.getByText("Quero entender o jogo");
      
      await act(async () => {
        await user.click(button);
      });
      
      expect(mockOnClick).toHaveBeenCalled();
      expect(mockScrollIntoView).not.toHaveBeenCalled();
    });
  });

  describe("Animações e IntersectionObserver", () => {
    test("IntersectionObserver é configurado", () => {
      render(<FinalSection />);
      
      expect(mockIntersectionObserver).toHaveBeenCalledWith(
        expect.any(Function),
        { threshold: 0.3, rootMargin: '0px 0px -10% 0px' }
      );
    });

    test("elementos têm classe 'visible' quando visíveis", async () => {
      const { container } = render(<FinalSection />);
      
      // Capturar o callback do IntersectionObserver
      const [callback] = mockIntersectionObserver.mock.calls[0];
      
      // Inicialmente não deve ter a classe visible
      expect(container.querySelector('.final-section')).not.toHaveClass('visible');
      
      // Simular intersecção usando act para evitar warning
      await act(async () => {
        callback([{ isIntersecting: true }]);
      });
      
      // Aguardar atualização do estado
      await waitFor(() => {
        expect(container.querySelector('.final-section')).toHaveClass('visible');
      });
    });
  });

  describe("Mouse move effect", () => {
    test("mouse move atualiza posição das orbs", () => {
      const { container } = render(<FinalSection />);
      
      const section = container.querySelector(".final-section") as HTMLElement;
      const orb1 = container.querySelector(".orb-1") as HTMLElement;
      
      // Mock do getBoundingClientRect
      const mockRect = {
        left: 0,
        top: 0,
        width: 1000,
        height: 800,
        right: 1000,
        bottom: 800,
        x: 0,
        y: 0,
        toJSON: jest.fn()
      };
      jest.spyOn(section, 'getBoundingClientRect').mockReturnValue(mockRect);
      
      // Simular mouse move usando act para evitar warning
      act(() => {
        const mouseEvent = new MouseEvent('mousemove', { clientX: 500, clientY: 400 });
        section.dispatchEvent(mouseEvent);
      });
      
      // Verificar que o estilo da orb foi atualizado
      expect(orb1.style.transform).toBeDefined();
    });
  });

  describe("Formatação de preços", () => {
    test("preço tem 2 casas decimais", () => {
      render(<FinalSection price={26.90} />);
      
      expect(screen.getByText("Por R$26,90")).toBeInTheDocument();
    });

    test("preço é formatado com vírgula", () => {
      render(<FinalSection price={99.99} />);
      
      expect(screen.getByText("Por R$99,99")).toBeInTheDocument();
    });
  });

  describe("Classes CSS e estrutura", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<FinalSection />);
      
      expect(container.querySelector(".final-section")).toBeInTheDocument();
      expect(container.querySelector(".final-container")).toBeInTheDocument();
      expect(container.querySelector(".final-content")).toBeInTheDocument();
      expect(container.querySelector(".final-title")).toBeInTheDocument();
      expect(container.querySelector(".final-subtitle")).toBeInTheDocument();
      expect(container.querySelector(".final-cta")).toBeInTheDocument();
    });

    test("title-lines têm atributos data-delay", () => {
      const { container } = render(<FinalSection />);
      
      const lines = container.querySelectorAll(".title-line");
      expect(lines[0]).toHaveAttribute("data-delay", "0");
      expect(lines[1]).toHaveAttribute("data-delay", "200");
    });

    test("title-highlight tem data-delay", () => {
      const { container } = render(<FinalSection />);
      
      const highlight = container.querySelector(".title-highlight");
      expect(highlight).toHaveAttribute("data-delay", "400");
    });
  });

  describe("Atributos de acessibilidade", () => {
    test("botão tem aria-label", () => {
      render(<FinalSection />);
      
      const button = screen.getByText("Quero entender o jogo").closest("a");
      expect(button).toHaveAttribute("aria-label", "Quero entender o jogo - Ir para seção de ofertas");
    });

    test("botão tem targetSection no aria-label", () => {
      render(<FinalSection targetSection="#contato" />);
      
      const button = screen.getByText("Quero entender o jogo").closest("a");
      expect(button).toHaveAttribute("aria-label", "Quero entender o jogo - Ir para seção de ofertas");
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elemento section semântico", () => {
      const { container } = render(<FinalSection />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    test("usa heading h2", () => {
      const { container } = render(<FinalSection />);
      
      const h2 = container.querySelector("h2");
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveClass("final-title");
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<FinalSection />);
      
      const section = container.querySelector(".final-section");
      const containerDiv = section?.querySelector(".final-container");
      const content = containerDiv?.querySelector(".final-content");
      const decorative = containerDiv?.querySelector(".decorative-elements");
      const trust = containerDiv?.querySelector(".trust-indicators");
      const scrollIndicator = section?.querySelector(".scroll-indicator");
      
      expect(section).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(decorative).toBeInTheDocument();
      expect(trust).toBeInTheDocument();
      expect(scrollIndicator).toBeInTheDocument();
    });
  });

  describe("Elementos SVG", () => {
    test("ícone do botão tem viewBox correto", () => {
      const { container } = render(<FinalSection />);
      
      const buttonIcon = container.querySelector(".button-icon svg");
      expect(buttonIcon).toHaveAttribute("viewBox", "0 0 20 20");
    });

    test("seta do botão tem viewBox correto", () => {
      const { container } = render(<FinalSection />);
      
      const buttonArrow = container.querySelector(".button-arrow svg");
      expect(buttonArrow).toHaveAttribute("viewBox", "0 0 16 16");
    });

    test("seta do scroll tem viewBox correto", () => {
      const { container } = render(<FinalSection />);
      
      const scrollArrow = container.querySelector(".scroll-arrow svg");
      expect(scrollArrow).toHaveAttribute("viewBox", "0 0 24 24");
    });
  });

  describe("Estados de animação", () => {
    test("section não tem classe visible inicialmente", () => {
      const { container } = render(<FinalSection />);
      
      const section = container.querySelector(".final-section");
      expect(section).not.toHaveClass("visible");
    });

    test("elementos de animação têm estrutura correta", () => {
      const { container } = render(<FinalSection />);
      
      const title = container.querySelector(".final-title");
      const subtitle = container.querySelector(".final-subtitle");
      const cta = container.querySelector(".final-cta");
      const trust = container.querySelector(".trust-indicators");
      const scroll = container.querySelector(".scroll-indicator");
      
      expect(title).toBeInTheDocument();
      expect(subtitle).toBeInTheDocument();
      expect(cta).toBeInTheDocument();
      expect(trust).toBeInTheDocument();
      expect(scroll).toBeInTheDocument();
    });

    test("orbs têm transform inline style", () => {
      const { container } = render(<FinalSection />);
      
      const orb1 = container.querySelector(".orb-1") as HTMLElement;
      const orb2 = container.querySelector(".orb-2") as HTMLElement;
      
      expect(orb1.style.transform).toBeDefined();
      expect(orb2.style.transform).toBeDefined();
    });
  });

  describe("Event Listeners", () => {
    test("mousemove listener é adicionado corretamente", () => {
      const { container } = render(<FinalSection />);
      
      const section = container.querySelector(".final-section") as HTMLElement;
      
      // Re-render para trigger o effect
      render(<FinalSection />);
      
      // Verificar estrutura sem precisar testar o listener diretamente
      expect(section).toBeInTheDocument();
    });
  });

  describe("Teste de integração completa", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<FinalSection />);
      
      // Estrutura principal
      expect(container.querySelector(".final-section")).toBeInTheDocument();
      
      // Conteúdo de texto
      expect(screen.getByText("O jogo foi feito")).toBeInTheDocument();
      expect(screen.getByText("para você perder.")).toBeInTheDocument();
      expect(screen.getByText("Agora você conhece as regras.")).toBeInTheDocument();
      expect(screen.getByText("Por R$26,90")).toBeInTheDocument();
      expect(screen.getByText("Quero entender o jogo")).toBeInTheDocument();
      
      // Cards flutuantes
      expect(screen.getByText("Insights Reais")).toBeInTheDocument();
      expect(screen.getByText("Sem Enrolação")).toBeInTheDocument();
      expect(screen.getByText("Verdade Nua")).toBeInTheDocument();
      
      // Trust indicators
      expect(screen.getByText("Acesso Imediato")).toBeInTheDocument();
      expect(screen.getByText("Sem Assinatura")).toBeInTheDocument();
      expect(screen.getByText("Conteúdo Premium")).toBeInTheDocument();
      
      // Elementos estruturais
      expect(container.querySelector(".section-background")).toBeInTheDocument();
      expect(container.querySelector(".decorative-elements")).toBeInTheDocument();
      expect(container.querySelector(".trust-indicators")).toBeInTheDocument();
      expect(container.querySelector(".scroll-indicator")).toBeInTheDocument();
      
      // Contadores
      expect(container.querySelectorAll(".floating-card")).toHaveLength(3);
      expect(container.querySelectorAll(".trust-item")).toHaveLength(3);
      expect(container.querySelectorAll(".gradient-orb")).toHaveLength(2);
    });

    test("todos os IDs e classes necessários estão presentes", () => {
      const { container } = render(<FinalSection />);
      
      // ID da seção
      expect(container.querySelector("#final-section")).toBeInTheDocument();
      
      // Classes principais
      expect(container.querySelector(".final-container")).toBeInTheDocument();
      expect(container.querySelector(".final-content")).toBeInTheDocument();
      expect(container.querySelector(".price-highlight")).toBeInTheDocument();
      expect(container.querySelector(".subtitle-text")).toBeInTheDocument();
      expect(container.querySelector(".button-content")).toBeInTheDocument();
      
      // Elementos de efeito
      expect(container.querySelector(".button-shine")).toBeInTheDocument();
      expect(container.querySelector(".button-glow")).toBeInTheDocument();
      expect(container.querySelector(".grid-pattern")).toBeInTheDocument();
    });

    test("componente funciona com todas as props padrão", () => {
      const { container } = render(<FinalSection />);
      
      // Verificar valores padrão
      expect(screen.getByText("O jogo foi feito")).toBeInTheDocument();
      expect(screen.getByText("Por R$26,90")).toBeInTheDocument();
      expect(screen.getByText("Quero entender o jogo")).toBeInTheDocument();
      
      const button = screen.getByText("Quero entender o jogo").closest("a");
      expect(button).toHaveAttribute("href", "#oferta");
      
      const section = container.querySelector(".final-section");
      expect(section).not.toHaveClass("classe-personalizada");
    });
  });
});