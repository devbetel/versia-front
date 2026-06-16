import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import HeroBusinessSection from "../components/ebook-empresario-e-patrimonio-page/HeroBusinessContent/HeroBusiness";

// Mock do CSS
jest.mock("../components/business-page/HeroBusiness/styles.css", () => ({}));

// Mock do AOS
jest.mock("aos", () => ({
  init: jest.fn(),
  refresh: jest.fn(),
}));

describe("HeroBusinessSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção principal", () => {
      const { container } = render(<HeroBusinessSection />);
      
      expect(container.querySelector(".hero-section")).toBeInTheDocument();
      expect(container.querySelector(".hero-container")).toBeInTheDocument();
    });

    test("renderiza o badge", () => {
      render(<HeroBusinessSection />);
      
      expect(screen.getByText("Conteúdo Estratégico para Empresários")).toBeInTheDocument();
    });

    test("badge tem classe correta", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const badge = container.querySelector(".hero-badge");
      expect(badge).toBeInTheDocument();
      expect(badge?.querySelector(".hero-badge__dot")).toBeInTheDocument();
      expect(badge?.querySelector(".hero-badge__text")).toBeInTheDocument();
    });

    test("renderiza o título principal", () => {
      render(<HeroBusinessSection />);
      
      expect(screen.getByText(/Suba o nível do seu jogo:/)).toBeInTheDocument();
      expect(screen.getByText(/Pare de construir apenas/)).toBeInTheDocument();
      expect(screen.getByText(/uma empresa rica/)).toBeInTheDocument();
      expect(screen.getByText(/e comece a ser/)).toBeInTheDocument();
      expect(screen.getByText(/um empresário rico./)).toBeInTheDocument();
    });

    test("título tem classe hero-title", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const title = container.querySelector(".hero-title");
      expect(title).toBeInTheDocument();
    });
  });

  describe("Elementos de fundo e decoração", () => {
    test("renderiza o dot grid", () => {
      const { container } = render(<HeroBusinessSection />);
      
      expect(container.querySelector(".hero-dot-grid")).toBeInTheDocument();
    });

    test("renderiza os glows", () => {
      const { container } = render(<HeroBusinessSection />);
      
      expect(container.querySelector(".hero-glow--left")).toBeInTheDocument();
      expect(container.querySelector(".hero-glow--right")).toBeInTheDocument();
      expect(container.querySelector(".hero-glow--center")).toBeInTheDocument();
    });

    test("renderiza a onda decorativa", () => {
      const { container } = render(<HeroBusinessSection />);
      
      expect(container.querySelector(".hero-wave")).toBeInTheDocument();
      expect(container.querySelector(".hero-wave svg")).toBeInTheDocument();
    });
  });

  describe("Lado direito - Conteúdo", () => {
    test("renderiza o subtítulo", () => {
      render(<HeroBusinessSection />);
      
      expect(screen.getByText(/O guia definitivo para transformar faturamento em lucro real/)).toBeInTheDocument();
      expect(screen.getByText(/blindar a família, organizar o pró-labore/)).toBeInTheDocument();
      expect(screen.getByText(/patrimônio inabalável fora do seu CNPJ/)).toBeInTheDocument();
    });

    test("subtítulo tem texto em negrito", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const strongText = container.querySelector(".hero-subtitle strong");
      expect(strongText).toBeInTheDocument();
      expect(strongText).toHaveTextContent("patrimônio inabalável fora do seu CNPJ.");
    });

    test("renderiza o divisor", () => {
      const { container } = render(<HeroBusinessSection />);
      
      expect(container.querySelector(".hero-divider")).toBeInTheDocument();
    });

    test("renderiza a nota do CTA", () => {
      render(<HeroBusinessSection />);
      
      expect(screen.getByText(/🔒 Acesso imediato · Sem compromisso/)).toBeInTheDocument();
    });
  });

  describe("Botão CTA", () => {
    test("renderiza o botão", () => {
      render(<HeroBusinessSection />);
      
      const button = screen.getByText("QUERO ACESSAR O MATERIAL AGORA");
      expect(button).toBeInTheDocument();
    });

    test("botão tem seta", () => {
      render(<HeroBusinessSection />);
      
      expect(screen.getByText("→")).toBeInTheDocument();
    });

    test("botão tem classe hero-cta", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const button = container.querySelector(".hero-cta");
      expect(button).toBeInTheDocument();
    });

    test("hover no botão adiciona classe", async () => {
      const user = userEvent.setup();
      const { container } = render(<HeroBusinessSection />);
      
      const button = container.querySelector(".hero-cta") as HTMLElement;
      
      await user.hover(button);
      expect(button).toHaveClass("hero-cta--hovered");
      
      await user.unhover(button);
      expect(button).not.toHaveClass("hero-cta--hovered");
    });
  });

  describe("Stats Bar", () => {
    test("renderiza a barra de estatísticas", () => {
      const { container } = render(<HeroBusinessSection />);
      
      expect(container.querySelector(".hero-stats-bar")).toBeInTheDocument();
      expect(container.querySelector(".hero-stats-inner")).toBeInTheDocument();
    });

    test("renderiza os 3 stats", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const stats = container.querySelectorAll(".hero-stat");
      expect(stats).toHaveLength(3);
    });

    test("primeiro stat: 6+ Módulos Práticos", () => {
      render(<HeroBusinessSection />);
      
      expect(screen.getByText("6+")).toBeInTheDocument();
      expect(screen.getByText("Módulos Práticos")).toBeInTheDocument();
    });

    test("segundo stat: 30 Dias de Plano de Ação", () => {
      render(<HeroBusinessSection />);
      
      expect(screen.getByText("30")).toBeInTheDocument();
      expect(screen.getByText("Dias de Plano de Ação")).toBeInTheDocument();
    });

    test("terceiro stat: 15min Por Semana", () => {
      render(<HeroBusinessSection />);
      
      expect(screen.getByText("15min")).toBeInTheDocument();
      expect(screen.getByText("Por Semana")).toBeInTheDocument();
    });

    test("stats têm divisores", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const dividers = container.querySelectorAll(".hero-stats__divider");
      expect(dividers).toHaveLength(2);
    });
  });

  describe("Highlights e underlines", () => {
    test("primeiro highlight tem underline SVG", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const highlights = container.querySelectorAll(".hero-highlight");
      const firstHighlight = highlights[0];
      
      expect(firstHighlight).toBeInTheDocument();
      expect(firstHighlight?.querySelector(".hero-underline")).toBeInTheDocument();
      expect(firstHighlight).toHaveTextContent("uma empresa rica");
    });

    test("segundo highlight tem underline SVG", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const highlights = container.querySelectorAll(".hero-highlight");
      const secondHighlight = highlights[1];
      
      expect(secondHighlight).toBeInTheDocument();
      expect(secondHighlight?.querySelector(".hero-underline")).toBeInTheDocument();
      expect(secondHighlight).toHaveTextContent("um empresário rico.");
    });

    test("underlines têm viewBox correto", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const underlines = container.querySelectorAll(".hero-underline");
      expect(underlines[0]).toHaveAttribute("viewBox", "0 0 200 8");
      expect(underlines[1]).toHaveAttribute("viewBox", "0 0 230 8");
    });
  });

  describe("Atributos AOS", () => {
    test("badge tem data-aos fade-down", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const badge = container.querySelector(".hero-badge");
      expect(badge).toHaveAttribute("data-aos", "fade-down");
    });

    test("título tem data-aos fade-right com delay", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const title = container.querySelector(".hero-title");
      expect(title).toHaveAttribute("data-aos", "fade-right");
      expect(title).toHaveAttribute("data-aos-delay", "100");
    });

    test("lado direito tem data-aos fade-left com delay", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const rightSide = container.querySelector(".hero-right");
      expect(rightSide).toHaveAttribute("data-aos", "fade-left");
      expect(rightSide).toHaveAttribute("data-aos-delay", "200");
    });

    test("stats bar tem data-aos fade-up com delay", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const statsBar = container.querySelector(".hero-stats-bar");
      expect(statsBar).toHaveAttribute("data-aos", "fade-up");
      expect(statsBar).toHaveAttribute("data-aos-delay", "300");
    });
  });

  describe("Classes CSS", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<HeroBusinessSection />);
      
      expect(container.querySelector(".hero-left")).toBeInTheDocument();
      expect(container.querySelector(".hero-right")).toBeInTheDocument();
      expect(container.querySelector(".hero-subtitle")).toBeInTheDocument();
      expect(container.querySelector(".hero-cta")).toBeInTheDocument();
      expect(container.querySelector(".hero-cta-note")).toBeInTheDocument();
      expect(container.querySelector(".hero-cta__text")).toBeInTheDocument();
      expect(container.querySelector(".hero-cta__arrow")).toBeInTheDocument();
    });

    test("cada stat tem número e label", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const stats = container.querySelectorAll(".hero-stat");
      stats.forEach(stat => {
        expect(stat.querySelector(".hero-stat__number")).toBeInTheDocument();
        expect(stat.querySelector(".hero-stat__label")).toBeInTheDocument();
      });
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elemento section semântico", () => {
      const { container } = render(<HeroBusinessSection />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    test("usa heading h1", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const h1 = container.querySelector("h1");
      expect(h1).toBeInTheDocument();
      expect(h1).toHaveClass("hero-title");
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<HeroBusinessSection />);
      
      const section = container.querySelector(".hero-section");
      const containerDiv = section?.querySelector(".hero-container");
      const leftSide = containerDiv?.querySelector(".hero-left");
      const rightSide = containerDiv?.querySelector(".hero-right");
      const title = leftSide?.querySelector(".hero-title");
      const subtitle = rightSide?.querySelector(".hero-subtitle");
      const cta = rightSide?.querySelector(".hero-cta");
      
      expect(section).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(leftSide).toBeInTheDocument();
      expect(rightSide).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(subtitle).toBeInTheDocument();
      expect(cta).toBeInTheDocument();
    });
  });

  describe("Teste de integração completa", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<HeroBusinessSection />);
      
      expect(container.querySelector(".hero-section")).toBeInTheDocument();
      expect(screen.getByText("Conteúdo Estratégico para Empresários")).toBeInTheDocument();
      expect(screen.getByText(/Suba o nível do seu jogo/)).toBeInTheDocument();
      expect(screen.getByText(/O guia definitivo para transformar faturamento/)).toBeInTheDocument();
      expect(screen.getByText("QUERO ACESSAR O MATERIAL AGORA")).toBeInTheDocument();
      expect(screen.getByText("6+")).toBeInTheDocument();
      expect(screen.getByText("30")).toBeInTheDocument();
      expect(screen.getByText("15min")).toBeInTheDocument();
      
      expect(container.querySelector(".hero-dot-grid")).toBeInTheDocument();
      expect(container.querySelector(".hero-wave")).toBeInTheDocument();
      expect(container.querySelectorAll(".hero-stat")).toHaveLength(3);
      expect(container.querySelectorAll(".hero-glow")).toHaveLength(3);
    });
  });
});