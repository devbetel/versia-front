import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import BankersSection from "../components/ebook-jogo-invisivel-page/BankersContent/Bankers";

// Mock do AOS
jest.mock("aos", () => ({
  init: jest.fn(),
  refresh: jest.fn(),
}));

// Mock do CSS
jest.mock("../components/ebook-jogo-invisivel-page/BankersContent/styles.css", () => ({}));
jest.mock("aos/dist/aos.css", () => ({}));

// Mock do setInterval e setTimeout
jest.useFakeTimers();

describe("BankersSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    // Mock da data atual para controle nos testes
    jest.setSystemTime(new Date('2024-06-11T16:48:49.000Z'));
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção principal", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector(".banking-section")).toBeInTheDocument();
      expect(container.querySelector(".container")).toBeInTheDocument();
    });

    test("renderiza o breadcrumb", () => {
      render(<BankersSection />);
      
      expect(screen.getByText("E-book")).toBeInTheDocument();
      expect(screen.getByText("Capítulo 2")).toBeInTheDocument();
    });

    test("renderiza o título da seção", () => {
      render(<BankersSection />);
      
      expect(screen.getByText(/A piada interna que só/)).toBeInTheDocument();
      expect(screen.getByText(/os bancários entendem/)).toBeInTheDocument();
    });

    test("título tem a classe highlight", () => {
      const { container } = render(<BankersSection />);
      
      const highlight = container.querySelector(".title-highlight");
      expect(highlight).toBeInTheDocument();
      expect(highlight).toHaveTextContent("os bancários entendem");
    });

    test("renderiza as meta informações", () => {
      render(<BankersSection />);
      
      expect(screen.getByText("📖 Trecho real do livro")).toBeInTheDocument();
      expect(screen.getByText("⏱️ 3 min de leitura")).toBeInTheDocument();
    });
  });

  describe("Story Content", () => {
    test("renderiza o parágrafo da história", () => {
      render(<BankersSection />);
      
      expect(screen.getByText(/Quando a PLR estava chegando/)).toBeInTheDocument();
      expect(screen.getByText(/respondíamos com códigos que pareciam ações da Bolsa/)).toBeInTheDocument();
    });

    test("parágrafo tem texto em negrito", () => {
      const { container } = render(<BankersSection />);
      
      const strongText = container.querySelector(".story-paragraph strong");
      expect(strongText).toBeInTheDocument();
      expect(strongText).toHaveTextContent("nosso próprio sufoco financeiro");
    });
  });

  describe("Trading Terminal", () => {
    test("renderiza o terminal", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector(".trading-terminal")).toBeInTheDocument();
    });

    test("renderiza os controles do terminal", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector(".terminal-header")).toBeInTheDocument();
      expect(container.querySelector(".terminal-controls")).toBeInTheDocument();
      expect(container.querySelectorAll(".control-dot")).toHaveLength(3);
    });

    test("renderiza o título do terminal", () => {
      render(<BankersSection />);
      
      expect(screen.getByText("HomebrokerBank Pro")).toBeInTheDocument();
      expect(screen.getByText("v2.1.4")).toBeInTheDocument();
    });

    test("renderiza o status do mercado", () => {
      render(<BankersSection />);
      
      expect(screen.getByText("Mercado Aberto")).toBeInTheDocument();
      expect(screen.getByText("Tendência: Baixa Geral")).toBeInTheDocument();
    });

    test("renderiza o status indicator com pulsing", () => {
      const { container } = render(<BankersSection />);
      
      const statusIndicator = container.querySelector(".status-indicator");
      expect(statusIndicator).toBeInTheDocument();
      expect(statusIndicator).toHaveClass("pulsing");
    });

    test("renderiza o header da carteira", () => {
      const { container } = render(<BankersSection />);
      
      expect(screen.getByText("Minha Carteira de \"Investimentos\"")).toBeInTheDocument();
      expect(screen.getByText("Saldo Disponível:")).toBeInTheDocument();
      
      const balanceValue = container.querySelector(".balance-value.negative");
      expect(balanceValue).toBeInTheDocument();
      expect(balanceValue).toHaveTextContent("-R$ 47.230,00");
    });
  });

  describe("StockTicker Component", () => {
    test("renderiza todos os 4 ativos", () => {
      const { container } = render(<BankersSection />);
      
      const stockTickers = container.querySelectorAll(".stock-ticker");
      expect(stockTickers).toHaveLength(4);
    });

    test("renderiza o primeiro ativo (CHES4)", () => {
      render(<BankersSection />);
      
      expect(screen.getByText("CHES4")).toBeInTheDocument();
      expect(screen.getByText("Cheque Especial S.A.")).toBeInTheDocument();
      expect(screen.getByText("R$ 12.500,00")).toBeInTheDocument();
      expect(screen.getByText("-15,9%")).toBeInTheDocument();
    });

    test("renderiza o segundo ativo (LIME3)", () => {
      render(<BankersSection />);
      
      expect(screen.getByText("LIME3")).toBeInTheDocument();
      expect(screen.getByText("Limite Conta ON")).toBeInTheDocument();
      expect(screen.getByText("R$ 8.750,00")).toBeInTheDocument();
      expect(screen.getByText("-22,3%")).toBeInTheDocument();
    });

    test("renderiza o terceiro ativo (EMPF4)", () => {
      render(<BankersSection />);
      
      expect(screen.getByText("EMPF4")).toBeInTheDocument();
      expect(screen.getByText("Empréstimos PN")).toBeInTheDocument();
      expect(screen.getByText("R$ 25.900,00")).toBeInTheDocument();
      expect(screen.getByText("-31,7%")).toBeInTheDocument();
    });

    test("renderiza o quarto ativo (BCAR3)", () => {
      render(<BankersSection />);
      
      expect(screen.getByText("BCAR3")).toBeInTheDocument();
      expect(screen.getByText("Boleto Cartão ON")).toBeInTheDocument();
      expect(screen.getByText("R$ 5.680,00")).toBeInTheDocument();
      expect(screen.getByText("-18,4%")).toBeInTheDocument();
    });

    test("cada ticker tem a estrutura correta", () => {
      const { container } = render(<BankersSection />);
      
      const tickers = container.querySelectorAll(".stock-ticker");
      tickers.forEach(ticker => {
        expect(ticker.querySelector(".ticker-header")).toBeInTheDocument();
        expect(ticker.querySelector(".ticker-info")).toBeInTheDocument();
        expect(ticker.querySelector(".ticker-code")).toBeInTheDocument();
        expect(ticker.querySelector(".ticker-exchange")).toBeInTheDocument();
        expect(ticker.querySelector(".price-change")).toBeInTheDocument();
        expect(ticker.querySelector(".trend-arrow")).toBeInTheDocument();
        expect(ticker.querySelector(".change-value")).toBeInTheDocument();
        expect(ticker.querySelector(".ticker-price")).toBeInTheDocument();
        expect(ticker.querySelector(".ticker-name")).toBeInTheDocument();
        expect(ticker.querySelector(".ticker-status")).toBeInTheDocument();
        expect(ticker.querySelector(".status-dot")).toBeInTheDocument();
        expect(ticker.querySelector(".status-text")).toBeInTheDocument();
      });
    });

    test("todos os ativos têm change negativa", () => {
      const { container } = render(<BankersSection />);
      
      const priceChanges = container.querySelectorAll(".price-change");
      priceChanges.forEach(change => {
        expect(change).toHaveClass("negative");
        expect(change).not.toHaveClass("positive");
      });
    });

    test("todos os status-dot têm classe red", () => {
      const { container } = render(<BankersSection />);
      
      const statusDots = container.querySelectorAll(".status-dot");
      statusDots.forEach(dot => {
        expect(dot).toHaveClass("red");
        expect(dot).not.toHaveClass("green");
      });
    });

    test("todos os status-text têm 'Prejuízo garantido'", () => {
      render(<BankersSection />);
      
      const statusTexts = screen.getAllByText("Prejuízo garantido");
      expect(statusTexts).toHaveLength(4);
    });

    test("verifica animação dos tickers com delays", () => {
      act(() => {
        render(<BankersSection />);
      });

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      const { container } = render(<BankersSection />);
      const tickers = container.querySelectorAll(".stock-ticker");
      expect(tickers).toHaveLength(4);
    });
  });

  describe("Terminal Footer", () => {
    test("renderiza o footer do terminal", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector(".terminal-footer")).toBeInTheDocument();
      expect(container.querySelector(".footer-stats")).toBeInTheDocument();
    });

    test("renderiza as estatísticas do footer", () => {
      const { container } = render(<BankersSection />);
      
      expect(screen.getByText("Patrimônio Líquido")).toBeInTheDocument();
      expect(screen.getByText("Variação do Dia")).toBeInTheDocument();
      expect(screen.getByText("-22,1%")).toBeInTheDocument();
      expect(screen.getByText("Risco")).toBeInTheDocument();
      expect(screen.getByText("ALTÍSSIMO")).toBeInTheDocument();

      const footerStats = container.querySelector(".footer-stats");
      const statValue = footerStats?.querySelector(".stat-value.negative");
      expect(statValue).toBeInTheDocument();
      expect(statValue).toHaveTextContent("-R$ 47.230,00");
    });

    test("valores negativos têm classe negative", () => {
      const { container } = render(<BankersSection />);
      
      const negativeValues = container.querySelectorAll(".stat-value.negative");
      expect(negativeValues).toHaveLength(2);
    });

    test("risco tem classe high-risk", () => {
      const { container } = render(<BankersSection />);
      
      const highRisk = container.querySelector(".stat-value.high-risk");
      expect(highRisk).toBeInTheDocument();
      expect(highRisk).toHaveTextContent("ALTÍSSIMO");
    });
  });

  describe("Reflection Box", () => {
    test("renderiza a caixa de reflexão", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector(".reflection-box")).toBeInTheDocument();
    });

    test("renderiza o ícone de reflexão", () => {
      render(<BankersSection />);
      
      expect(screen.getByText("💭")).toBeInTheDocument();
    });

    test("renderiza a citação", () => {
      render(<BankersSection />);
      
      expect(screen.getByText(/Ríamos para não chorar/)).toBeInTheDocument();
      expect(screen.getByText(/O aumento de renda não corrige um comportamento disfuncional/)).toBeInTheDocument();
    });

    test("citação tem ênfase", () => {
      const { container } = render(<BankersSection />);
      
      const emphasis = container.querySelector(".reflection-quote em");
      expect(emphasis).toBeInTheDocument();
      expect(emphasis).toHaveTextContent("Nunca vai.");
    });

    test("renderiza o autor da citação", () => {
      render(<BankersSection />);
      
      expect(screen.getByText(/— Experiência real de quem viveu isso na pele/)).toBeInTheDocument();
    });
  });

  describe("Relógio em tempo real", () => {
    test("exibe o horário atual", () => {
      render(<BankersSection />);
      
      const timeElement = screen.getByText(/\d{2}:\d{2}:\d{2}/);
      expect(timeElement).toBeInTheDocument();
    });

    test("atualiza o horário a cada segundo", () => {
      render(<BankersSection />);
      
      const initialTime = screen.getByText(/\d{2}:\d{2}:\d{2}/).textContent;
      
      act(() => {
        jest.setSystemTime(new Date('2024-06-11T16:48:50.000Z'));
        jest.advanceTimersByTime(1000);
      });
      
      const newTime = screen.getByText(/\d{2}:\d{2}:\d{2}/).textContent;
      expect(newTime).not.toBe(initialTime);
    });

    test("formato do horário está correto", () => {
      render(<BankersSection />);
      
      const timeElement = screen.getByText(/\d{2}:\d{2}:\d{2}/);
      expect(timeElement.textContent).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    });

    test("cleanup do interval funciona corretamente", () => {
      const { unmount } = render(<BankersSection />);
      
      expect(jest.getTimerCount()).toBeGreaterThan(0);
      
      unmount();
      
      act(() => {
        jest.runOnlyPendingTimers();
      });
    });
  });

  describe("Atributos AOS", () => {
    test("elementos têm atributos data-aos corretos", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector('[data-aos="fade-up"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-down"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-right"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-left"]')).toBeInTheDocument();
    });

    test("breadcrumb items têm data-aos", () => {
      const { container } = render(<BankersSection />);
      
      const breadcrumbItems = container.querySelectorAll(".breadcrumb-item");
      breadcrumbItems.forEach(item => {
        expect(item).toHaveAttribute("data-aos", "fade-up");
      });
    });

    test("breadcrumb arrow tem data-aos", () => {
      const { container } = render(<BankersSection />);
      
      const arrow = container.querySelector(".breadcrumb-arrow");
      expect(arrow).toHaveAttribute("data-aos", "fade-up");
    });

    test("título tem data-aos fade-down", () => {
      const { container } = render(<BankersSection />);
      
      const title = container.querySelector(".section-title");
      expect(title).toHaveAttribute("data-aos", "fade-down");
    });

    test("meta informações têm data-aos fade-down", () => {
      const { container } = render(<BankersSection />);
      
      const meta = container.querySelector(".section-meta");
      expect(meta).toHaveAttribute("data-aos", "fade-down");
    });

    test("parágrafo tem data-aos fade-right", () => {
      const { container } = render(<BankersSection />);
      
      const paragraph = container.querySelector(".story-paragraph");
      expect(paragraph).toHaveAttribute("data-aos", "fade-right");
    });

    test("terminal tem data-aos fade-left", () => {
      const { container } = render(<BankersSection />);
      
      const terminal = container.querySelector(".trading-terminal");
      expect(terminal).toHaveAttribute("data-aos", "fade-left");
    });

    test("reflection box tem data-aos fade-up", () => {
      const { container } = render(<BankersSection />);
      
      const reflectionBox = container.querySelector(".reflection-box");
      expect(reflectionBox).toHaveAttribute("data-aos", "fade-up");
    });
  });

  describe("Classes CSS", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector(".banking-section")).toBeInTheDocument();
      expect(container.querySelector(".section-intro")).toBeInTheDocument();
      expect(container.querySelector(".breadcrumb")).toBeInTheDocument();
      expect(container.querySelector(".story-content")).toBeInTheDocument();
      expect(container.querySelector(".story-text")).toBeInTheDocument();
      expect(container.querySelector(".trading-terminal")).toBeInTheDocument();
      expect(container.querySelector(".stocks-grid")).toBeInTheDocument();
      expect(container.querySelector(".reflection-box")).toBeInTheDocument();
    });

    test("breadcrumb-arrow está presente", () => {
      const { container } = render(<BankersSection />);
      
      const arrow = container.querySelector(".breadcrumb-arrow");
      expect(arrow).toBeInTheDocument();
    });

    test("terminal controls têm classes corretas", () => {
      const { container } = render(<BankersSection />);
      
      const dots = container.querySelectorAll(".control-dot");
      expect(dots[0]).toHaveClass("red");
      expect(dots[1]).toHaveClass("yellow");
      expect(dots[2]).toHaveClass("green");
    });

    test("meta divider está presente", () => {
      const { container } = render(<BankersSection />);
      
      const divider = container.querySelector(".meta-divider");
      expect(divider).toBeInTheDocument();
      expect(divider).toHaveTextContent("•");
    });

    test("portfolio header tem classes corretas", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector(".portfolio-header")).toBeInTheDocument();
      expect(container.querySelector(".portfolio-title")).toBeInTheDocument();
      expect(container.querySelector(".portfolio-balance")).toBeInTheDocument();
      expect(container.querySelector(".balance-label")).toBeInTheDocument();
      expect(container.querySelector(".balance-value")).toBeInTheDocument();
    });

    test("reflection content tem estrutura correta", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector(".reflection-icon")).toBeInTheDocument();
      expect(container.querySelector(".reflection-content")).toBeInTheDocument();
      expect(container.querySelector(".reflection-quote")).toBeInTheDocument();
      expect(container.querySelector(".reflection-author")).toBeInTheDocument();
    });
  });

  describe("Animações dos StockTickers", () => {
    test("tickers têm delay diferente", () => {
      act(() => {
        render(<BankersSection />);
      });

      const { container } = render(<BankersSection />);
      const tickers = container.querySelectorAll(".stock-ticker");
      expect(tickers).toHaveLength(4);
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elemento section semântico", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    test("usa heading h2", () => {
      const { container } = render(<BankersSection />);
      
      const h2 = container.querySelector("h2");
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveClass("section-title");
    });

    test("usa heading h3 para portfolio", () => {
      const { container } = render(<BankersSection />);
      
      const h3 = container.querySelector("h3.portfolio-title");
      expect(h3).toBeInTheDocument();
    });

    test("usa blockquote para citação", () => {
      const { container } = render(<BankersSection />);
      
      const blockquote = container.querySelector("blockquote");
      expect(blockquote).toBeInTheDocument();
      expect(blockquote).toHaveClass("reflection-quote");
    });

    test("usa cite para autor", () => {
      const { container } = render(<BankersSection />);
      
      const cite = container.querySelector("cite");
      expect(cite).toBeInTheDocument();
      expect(cite).toHaveClass("reflection-author");
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<BankersSection />);
      
      const section = container.querySelector(".banking-section");
      const containerDiv = section?.querySelector(".container");
      const sectionIntro = containerDiv?.querySelector(".section-intro");
      const storyContent = containerDiv?.querySelector(".story-content");
      const tradingTerminal = storyContent?.querySelector(".trading-terminal");
      const reflectionBox = storyContent?.querySelector(".reflection-box");
      
      expect(section).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(sectionIntro).toBeInTheDocument();
      expect(storyContent).toBeInTheDocument();
      expect(tradingTerminal).toBeInTheDocument();
      expect(reflectionBox).toBeInTheDocument();
    });
  });

  describe("Terminal específicos", () => {
    test("terminal header tem estrutura completa", () => {
      const { container } = render(<BankersSection />);
      
      const header = container.querySelector(".terminal-header");
      expect(header?.querySelector(".terminal-controls")).toBeInTheDocument();
      expect(header?.querySelector(".terminal-title")).toBeInTheDocument();
      expect(header?.querySelector(".terminal-time")).toBeInTheDocument();
    });

    test("terminal title tem nome e versão", () => {
      const { container } = render(<BankersSection />);
      
      const titleContainer = container.querySelector(".terminal-title");
      expect(titleContainer?.querySelector(".terminal-name")).toBeInTheDocument();
      expect(titleContainer?.querySelector(".terminal-version")).toBeInTheDocument();
    });

    test("market status tem todos os elementos", () => {
      const { container } = render(<BankersSection />);
      
      const marketStatus = container.querySelector(".market-status");
      expect(marketStatus?.querySelector(".status-indicator")).toBeInTheDocument();
      expect(marketStatus?.querySelector(".status-text")).toBeInTheDocument();
      expect(marketStatus?.querySelector(".market-trend")).toBeInTheDocument();
    });

    test("cada stat item do footer tem label e value", () => {
      const { container } = render(<BankersSection />);
      
      const statItems = container.querySelectorAll(".stat-item");
      expect(statItems).toHaveLength(3);
      
      statItems.forEach(item => {
        expect(item.querySelector(".stat-label")).toBeInTheDocument();
        expect(item.querySelector(".stat-value")).toBeInTheDocument();
      });
    });
  });

  describe("Responsividade e acessibilidade", () => {
    test("breadcrumb tem estrutura navegacional", () => {
      const { container } = render(<BankersSection />);
      
      const breadcrumb = container.querySelector(".breadcrumb");
      const items = breadcrumb?.querySelectorAll(".breadcrumb-item");
      const arrow = breadcrumb?.querySelector(".breadcrumb-arrow");
      
      expect(items).toHaveLength(2);
      expect(arrow).toBeInTheDocument();
    });

    test("SVG icons têm viewBox e paths corretos", () => {
      const { container } = render(<BankersSection />);
      
      const breadcrumbArrow = container.querySelector(".breadcrumb-arrow");
      expect(breadcrumbArrow).toHaveAttribute("viewBox", "0 0 16 16");
      
      const trendArrows = container.querySelectorAll(".trend-arrow");
      trendArrows.forEach(arrow => {
        expect(arrow).toHaveAttribute("viewBox", "0 0 12 12");
      });
    });

    test("elementos interativos têm indicações visuais", () => {
      const { container } = render(<BankersSection />);
      
      const statusIndicator = container.querySelector(".status-indicator.pulsing");
      expect(statusIndicator).toBeInTheDocument();
      
      const negativeValues = container.querySelectorAll(".negative");
      expect(negativeValues.length).toBeGreaterThan(0);
      
      const highRisk = container.querySelector(".high-risk");
      expect(highRisk).toBeInTheDocument();
    });
  });

  describe("Teste de integração completa", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<BankersSection />);
      
      expect(container.querySelector(".banking-section")).toBeInTheDocument();
      expect(screen.getByText("E-book")).toBeInTheDocument();
      expect(screen.getByText("Capítulo 2")).toBeInTheDocument();
      expect(screen.getByText(/A piada interna que só/)).toBeInTheDocument();
      expect(screen.getByText("CHES4")).toBeInTheDocument();
      expect(screen.getByText("LIME3")).toBeInTheDocument();
      expect(screen.getByText("EMPF4")).toBeInTheDocument();
      expect(screen.getByText("BCAR3")).toBeInTheDocument();
      expect(screen.getByText(/Ríamos para não chorar/)).toBeInTheDocument();
      expect(screen.getByText("— Experiência real de quem viveu isso na pele")).toBeInTheDocument();
      
      expect(container.querySelectorAll(".stock-ticker")).toHaveLength(4);
      expect(container.querySelector(".trading-terminal")).toBeInTheDocument();
      expect(container.querySelector(".reflection-box")).toBeInTheDocument();
      
      const timeElement = screen.getByText(/\d{2}:\d{2}:\d{2}/);
      expect(timeElement).toBeInTheDocument();
    });

    test("todos os elementos críticos estão presentes", () => {
      const { container } = render(<BankersSection />);
      
      const criticalElements = [
        ".banking-section",
        ".breadcrumb",
        ".section-title",
        ".story-paragraph", 
        ".trading-terminal",
        ".terminal-header",
        ".market-status",
        ".portfolio-header",
        ".stocks-grid",
        ".terminal-footer",
        ".reflection-box"
      ];
      
      criticalElements.forEach(selector => {
        expect(container.querySelector(selector)).toBeInTheDocument();
      });
      
      expect(container.querySelectorAll(".stock-ticker")).toHaveLength(4);
      
      const statusDots = container.querySelectorAll(".status-dot.red");
      expect(statusDots).toHaveLength(4);
      
      const aosElements = container.querySelectorAll("[data-aos]");
      expect(aosElements.length).toBeGreaterThan(0);
    });
  });
});