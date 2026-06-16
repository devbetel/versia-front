import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import OfferSection from "../components/ebook-jogo-invisivel-page/OfferContent/Offer";

// Mock do CSS
jest.mock("../components/ebook-jogo-invisivel-page/OfferContent/styles.css", () => ({}));

// Mock do IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  disconnect: jest.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

describe("OfferSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção principal", () => {
      const { container } = render(<OfferSection />);
      
      expect(container.querySelector(".offer-section")).toBeInTheDocument();
      expect(container.querySelector(".offer-container")).toBeInTheDocument();
    });

    test("renderiza o header com título e subtítulo", () => {
      render(<OfferSection />);
      
      expect(screen.getByText("Escolha sua versão")).toBeInTheDocument();
      expect(screen.getByText("R$26,90 para entender o jogo.")).toBeInTheDocument();
      expect(screen.getByText("Acesso imediato. Sem assinatura. Sem fórmula mágica.")).toBeInTheDocument();
    });

    test("renderiza o ícone SVG no header", () => {
      const { container } = render(<OfferSection />);
      
      const svg = container.querySelector(".section-tag svg");
      expect(svg).toBeInTheDocument();
    });
  });

  describe("Planos de preços", () => {
    test("renderiza os 2 planos", () => {
      const { container } = render(<OfferSection />);
      
      const cards = container.querySelectorAll(".pricing-card");
      expect(cards).toHaveLength(2);
    });

    test("renderiza o plano E-book (versão simples)", () => {
      const { container } = render(<OfferSection />);
      
      const simpleCard = container.querySelectorAll(".pricing-card")[0] as HTMLElement;
      
      expect(within(simpleCard).getByText("PARA QUEM QUER LER")).toBeInTheDocument();
      expect(within(simpleCard).getByText("Só o E-book")).toBeInTheDocument();
      expect(within(simpleCard).getByText("26,90")).toBeInTheDocument();
      
      const pricePeriod = simpleCard.querySelector(".price-period") as HTMLElement;
      expect(pricePeriod).toHaveTextContent("pagamento único · acesso permanente");
    });

    test("renderiza o plano E-book + Masterclass (versão completa)", () => {
      const { container } = render(<OfferSection />);
      
      const completeCard = container.querySelectorAll(".pricing-card")[1] as HTMLElement;
      
      expect(within(completeCard).getByText("PARA QUEM QUER IR FUNDO")).toBeInTheDocument();
      expect(within(completeCard).getByText("E-book + Masterclass")).toBeInTheDocument();
      expect(within(completeCard).getByText("98,90")).toBeInTheDocument();
      
      const pricePeriod = completeCard.querySelector(".price-period") as HTMLElement;
      expect(pricePeriod).toHaveTextContent("pagamento único · acesso permanente");
    });

    test("plano completo tem badge 'MAIS COMPLETO'", () => {
      render(<OfferSection />);
      
      expect(screen.getByText("MAIS COMPLETO")).toBeInTheDocument();
    });

    test("plano completo tem preço original riscado", () => {
      render(<OfferSection />);
      
      expect(screen.getByText("R$ 118")).toBeInTheDocument();
      expect(screen.getByText("R$ 118")).toHaveClass("original-price");
    });

    test("plano simples não tem badge", () => {
      const { container } = render(<OfferSection />);
      
      const simpleCard = container.querySelectorAll(".pricing-card")[0] as HTMLElement;
      expect(simpleCard?.querySelector(".card-badge")).toBeNull();
    });
  });

  describe("Features dos planos", () => {
    test("plano simples tem 4 features", () => {
      const { container } = render(<OfferSection />);
      
      const simpleCard = container.querySelectorAll(".pricing-card")[0] as HTMLElement;
      const features = simpleCard?.querySelectorAll(".feature-item");
      expect(features).toHaveLength(4);
    });

    test("plano simples tem as features corretas", () => {
      const { container } = render(<OfferSection />);
      
      const simpleCard = container.querySelectorAll(".pricing-card")[0] as HTMLElement;
      
      expect(within(simpleCard).getByText("E-book completo em PDF")).toBeInTheDocument();
      expect(within(simpleCard).getByText("Pesquisa exclusiva com dados reais")).toBeInTheDocument();
      expect(within(simpleCard).getByText("Leitura no seu ritmo")).toBeInTheDocument();
      expect(within(simpleCard).getByText("Acesso permanente")).toBeInTheDocument();
    });

    test("plano completo tem 5 features", () => {
      const { container } = render(<OfferSection />);
      
      const completeCard = container.querySelectorAll(".pricing-card")[1] as HTMLElement;
      const features = completeCard?.querySelectorAll(".feature-item");
      expect(features).toHaveLength(5);
    });

    test("plano completo tem as features corretas", () => {
      const { container } = render(<OfferSection />);
      
      const completeCard = container.querySelectorAll(".pricing-card")[1] as HTMLElement;
      
      expect(within(completeCard).getByText("E-book completo em PDF")).toBeInTheDocument();
      expect(within(completeCard).getByText("Masterclass gravada exclusiva")).toBeInTheDocument();
      expect(within(completeCard).getByText("Aprofundamento dos temas principais")).toBeInTheDocument();
      expect(within(completeCard).getByText("Sessão de perguntas e respostas")).toBeInTheDocument();
      expect(within(completeCard).getByText("Acesso permanente a tudo")).toBeInTheDocument();
    });

    test("cada feature tem ícone de check", () => {
      const { container } = render(<OfferSection />);
      
      const checkIcons = container.querySelectorAll(".check-icon");
      expect(checkIcons.length).toBe(9);
    });
  });

  describe("Botões CTA", () => {
    test("renderiza botão 'Quero o e-book'", () => {
      render(<OfferSection />);
      
      const button = screen.getByText("Quero o e-book · R$ 26,90");
      expect(button).toBeInTheDocument();
    });

    test("renderiza botão 'Quero o completo'", () => {
      render(<OfferSection />);
      
      const button = screen.getByText("Quero o completo · R$ 98,90");
      expect(button).toBeInTheDocument();
    });

    test("botão do plano simples tem classe 'secondary'", () => {
      const { container } = render(<OfferSection />);
      
      const simpleCard = container.querySelectorAll(".pricing-card")[0] as HTMLElement;
      const button = simpleCard?.querySelector(".cta-button");
      expect(button).toHaveClass("secondary");
    });

    test("botão do plano completo tem classe 'primary'", () => {
      const { container } = render(<OfferSection />);
      
      const completeCard = container.querySelectorAll(".pricing-card")[1] as HTMLElement;
      const button = completeCard?.querySelector(".cta-button");
      expect(button).toHaveClass("primary");
    });

    test("clique no botão não propaga para o card", async () => {
      const user = userEvent.setup();
      const consoleSpy = jest.spyOn(console, 'log');
      
      render(<OfferSection />);
      
      const button = screen.getByText("Quero o e-book · R$ 26,90");
      await user.click(button);
      
      expect(consoleSpy).toHaveBeenCalledWith("Plano selecionado: ebook");
      consoleSpy.mockRestore();
    });
  });

  describe("Cards com highlight", () => {
    test("plano completo tem classe 'highlighted'", () => {
      const { container } = render(<OfferSection />);
      
      const completeCard = container.querySelectorAll(".pricing-card")[1] as HTMLElement;
      expect(completeCard).toHaveClass("highlighted");
    });

    test("plano simples não tem classe 'highlighted'", () => {
      const { container } = render(<OfferSection />);
      
      const simpleCard = container.querySelectorAll(".pricing-card")[0] as HTMLElement;
      expect(simpleCard).not.toHaveClass("highlighted");
    });

    test("plano completo tem glow de destaque", () => {
      const { container } = render(<OfferSection />);
      
      const completeCard = container.querySelectorAll(".pricing-card")[1] as HTMLElement;
      const glow = completeCard?.querySelector(".highlight-glow");
      expect(glow).toBeInTheDocument();
    });
  });

  describe("Footer e WhatsApp", () => {
    test("renderiza o footer", () => {
      render(<OfferSection />);
      
      expect(screen.getByText("Dúvidas antes de comprar?")).toBeInTheDocument();
      expect(screen.getByText("Fale pelo WhatsApp")).toBeInTheDocument();
    });

    test("link do WhatsApp tem href correto", () => {
      render(<OfferSection />);
      
      const whatsappLink = screen.getByText("Fale pelo WhatsApp");
      expect(whatsappLink).toHaveAttribute("href", "https://wa.me/5511999999999");
    });

    test("link do WhatsApp abre em nova aba", () => {
      render(<OfferSection />);
      
      const whatsappLink = screen.getByText("Fale pelo WhatsApp");
      expect(whatsappLink).toHaveAttribute("target", "_blank");
      expect(whatsappLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Classes CSS e estrutura", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<OfferSection />);
      
      expect(container.querySelector(".offer-section")).toBeInTheDocument();
      expect(container.querySelector(".offer-container")).toBeInTheDocument();
      expect(container.querySelector(".offer-header")).toBeInTheDocument();
      expect(container.querySelector(".pricing-grid")).toBeInTheDocument();
      expect(container.querySelector(".offer-footer")).toBeInTheDocument();
    });

    test("section-tag-wrapper tem estrutura correta", () => {
      const { container } = render(<OfferSection />);
      
      expect(container.querySelector(".section-tag-wrapper")).toBeInTheDocument();
      expect(container.querySelector(".section-tag")).toBeInTheDocument();
    });

    test("cada card tem estrutura de preço correta", () => {
      const { container } = render(<OfferSection />);
      
      const cards = container.querySelectorAll(".pricing-card");
      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        expect(cardElement.querySelector(".card-content")).toBeInTheDocument();
        expect(cardElement.querySelector(".card-header")).toBeInTheDocument();
        expect(cardElement.querySelector(".card-tag")).toBeInTheDocument();
        expect(cardElement.querySelector(".card-name")).toBeInTheDocument();
        expect(cardElement.querySelector(".card-pricing")).toBeInTheDocument();
        expect(cardElement.querySelector(".price-container")).toBeInTheDocument();
        expect(cardElement.querySelector(".current-price")).toBeInTheDocument();
        expect(cardElement.querySelector(".currency")).toBeInTheDocument();
        expect(cardElement.querySelector(".amount")).toBeInTheDocument();
        expect(cardElement.querySelector(".price-period")).toBeInTheDocument();
        expect(cardElement.querySelector(".features-list")).toBeInTheDocument();
        expect(cardElement.querySelector(".cta-button")).toBeInTheDocument();
      });
    });
  });

  describe("Preços com props personalizadas", () => {
    test("aceita plans personalizados via props", () => {
      const customPlans = [
        {
          id: 'custom',
          tag: 'PLANO PERSONALIZADO',
          name: 'Plano Custom',
          price: 49.90,
          period: 'pagamento único',
          features: ['Feature 1', 'Feature 2'],
          buttonText: 'Comprar agora',
        }
      ];
      
      render(<OfferSection plans={customPlans} />);
      
      expect(screen.getByText("PLANO PERSONALIZADO")).toBeInTheDocument();
      expect(screen.getByText("Plano Custom")).toBeInTheDocument();
      expect(screen.getByText("49,90")).toBeInTheDocument();
      expect(screen.getByText("Comprar agora · R$ 49,90")).toBeInTheDocument();
    });

    test("aceita whatsappNumber personalizado via props", () => {
      render(<OfferSection whatsappNumber="5511987654321" />);
      
      const whatsappLink = screen.getByText("Fale pelo WhatsApp");
      expect(whatsappLink).toHaveAttribute("href", "https://wa.me/5511987654321");
    });
  });

  describe("Formatação de preços", () => {
    test("preços têm 2 casas decimais", () => {
      render(<OfferSection />);
      
      expect(screen.getByText("26,90")).toBeInTheDocument();
      expect(screen.getByText("98,90")).toBeInTheDocument();
    });

    test("preço original é formatado sem casas decimais", () => {
      render(<OfferSection />);
      
      expect(screen.getByText("R$ 118")).toBeInTheDocument();
    });
  });

  describe("Animações e IntersectionObserver", () => {
    test("cards têm animationDelay diferente", () => {
      const { container } = render(<OfferSection />);
      
      const cards = container.querySelectorAll(".pricing-card");
      expect(cards[0]).toHaveStyle("animation-delay: 0s");
      expect(cards[1]).toHaveStyle("animation-delay: 0.15s");
    });

    test("IntersectionObserver é configurado", () => {
      render(<OfferSection />);
      
      expect(mockIntersectionObserver).toHaveBeenCalledWith(
        expect.any(Function),
        { threshold: 0.2 }
      );
    });
  });

  describe("Click nos cards", () => {
    test("clique no card chama handlePlanSelect", async () => {
      const user = userEvent.setup();
      const consoleSpy = jest.spyOn(console, 'log');
      
      const { container } = render(<OfferSection />);
      
      const simpleCard = container.querySelectorAll(".pricing-card")[0] as HTMLElement;
      await user.click(simpleCard);
      
      expect(consoleSpy).toHaveBeenCalledWith("Plano selecionado: ebook");
      consoleSpy.mockRestore();
    });

    test("clique no card completo chama handlePlanSelect", async () => {
      const user = userEvent.setup();
      const consoleSpy = jest.spyOn(console, 'log');
      
      const { container } = render(<OfferSection />);
      
      const completeCard = container.querySelectorAll(".pricing-card")[1] as HTMLElement;
      await user.click(completeCard);
      
      expect(consoleSpy).toHaveBeenCalledWith("Plano selecionado: complete");
      consoleSpy.mockRestore();
    });
  });

  describe("Elementos SVG", () => {
    test("ícone do card badge tem viewBox correto", () => {
      const { container } = render(<OfferSection />);
      
      const badgeIcon = container.querySelector(".card-badge svg");
      expect(badgeIcon).toHaveAttribute("viewBox", "0 0 12 12");
    });

    test("ícone de check tem viewBox correto", () => {
      const { container } = render(<OfferSection />);
      
      const checkIcon = container.querySelector(".check-icon");
      expect(checkIcon).toHaveAttribute("viewBox", "0 0 20 20");
    });

    test("seta do botão tem viewBox correto", () => {
      const { container } = render(<OfferSection />);
      
      const buttonArrow = container.querySelector(".cta-button .button-arrow");
      expect(buttonArrow).toHaveAttribute("viewBox", "0 0 16 16");
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elemento section semântico", () => {
      const { container } = render(<OfferSection />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    test("usa heading h2", () => {
      const { container } = render(<OfferSection />);
      
      const h2 = container.querySelector("h2");
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveClass("offer-title");
    });

    test("usa heading h3 para nomes dos planos", () => {
      const { container } = render(<OfferSection />);
      
      const h3Elements = container.querySelectorAll("h3.card-name");
      expect(h3Elements).toHaveLength(2);
    });

    test("usa lista para features", () => {
      const { container } = render(<OfferSection />);
      
      const lists = container.querySelectorAll(".features-list");
      expect(lists).toHaveLength(2);
      
      lists.forEach(list => {
        expect(list?.tagName).toBe("UL");
      });
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<OfferSection />);
      
      const section = container.querySelector(".offer-section");
      const containerDiv = section?.querySelector(".offer-container");
      const header = containerDiv?.querySelector(".offer-header");
      const grid = containerDiv?.querySelector(".pricing-grid");
      const footer = containerDiv?.querySelector(".offer-footer");
      
      expect(section).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(header).toBeInTheDocument();
      expect(grid).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });
  });

  describe("Testes específicos de elementos duplicados", () => {
    test("cada card tem seu próprio price-period", () => {
      const { container } = render(<OfferSection />);
      
      const pricePeriods = container.querySelectorAll(".price-period");
      expect(pricePeriods).toHaveLength(2);
      
      pricePeriods.forEach(period => {
        expect(period).toHaveTextContent("pagamento único · acesso permanente");
      });
    });

    test("features duplicadas existem em cards diferentes", () => {
      const { container } = render(<OfferSection />);
      
      const simpleCard = container.querySelectorAll(".pricing-card")[0] as HTMLElement;
      const completeCard = container.querySelectorAll(".pricing-card")[1] as HTMLElement;
      
      expect(within(simpleCard).getByText("E-book completo em PDF")).toBeInTheDocument();
      expect(within(completeCard).getByText("E-book completo em PDF")).toBeInTheDocument();
    });

    test("botões têm preços específicos de cada card", () => {
      const { container } = render(<OfferSection />);
      
      const simpleCard = container.querySelectorAll(".pricing-card")[0] as HTMLElement;
      const completeCard = container.querySelectorAll(".pricing-card")[1] as HTMLElement;
      
      const simpleButton = within(simpleCard).getByText("Quero o e-book · R$ 26,90");
      const completeButton = within(completeCard).getByText("Quero o completo · R$ 98,90");
      
      expect(simpleButton).toBeInTheDocument();
      expect(completeButton).toBeInTheDocument();
    });
  });

  describe("Animações e estados", () => {
    test("header tem classe animate-in após trigger", () => {
      const { container } = render(<OfferSection />);
      
      const header = container.querySelector(".offer-header") as HTMLElement;
      expect(header).not.toHaveClass("animate-in");
    });

    test("footer tem classe animate-in após trigger", () => {
      const { container } = render(<OfferSection />);
      
      const footer = container.querySelector(".offer-footer") as HTMLElement;
      expect(footer).not.toHaveClass("animate-in");
    });

    test("cards têm inline style para animation-delay", () => {
      const { container } = render(<OfferSection />);
      
      const cards = container.querySelectorAll(".pricing-card");
      
      expect(cards[0]).toHaveAttribute("style");
      expect(cards[1]).toHaveAttribute("style");
      
      expect(cards[0].getAttribute("style")).toContain("animation-delay: 0s");
      expect(cards[1].getAttribute("style")).toContain("animation-delay: 0.15s");
    });
  });

  describe("Teste de integração completa", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<OfferSection />);
      
      expect(container.querySelector(".offer-section")).toBeInTheDocument();
      expect(screen.getByText("Escolha sua versão")).toBeInTheDocument();
      
      const simpleCard = container.querySelectorAll(".pricing-card")[0] as HTMLElement;
      const completeCard = container.querySelectorAll(".pricing-card")[1] as HTMLElement;
      
      expect(within(simpleCard).getByText("PARA QUEM QUER LER")).toBeInTheDocument();
      expect(within(completeCard).getByText("PARA QUEM QUER IR FUNDO")).toBeInTheDocument();
      
      expect(within(simpleCard).getByText("Quero o e-book · R$ 26,90")).toBeInTheDocument();
      expect(within(completeCard).getByText("Quero o completo · R$ 98,90")).toBeInTheDocument();
      
      expect(screen.getByText("Fale pelo WhatsApp")).toBeInTheDocument();
      expect(container.querySelectorAll(".pricing-card")).toHaveLength(2);
      expect(container.querySelectorAll(".feature-item")).toHaveLength(9);
    });

    test("todos os elementos têm IDs e classes necessários", () => {
      const { container } = render(<OfferSection />);
      
      expect(container.querySelector("#offer-section")).toBeInTheDocument();
      expect(container.querySelector(".offer-container")).toBeInTheDocument();
      expect(container.querySelector(".section-tag-wrapper")).toBeInTheDocument();
      expect(container.querySelector(".title-highlight")).toBeInTheDocument();
      expect(container.querySelector(".pricing-grid")).toBeInTheDocument();
      expect(container.querySelector(".support-link")).toBeInTheDocument();
      expect(container.querySelectorAll(".card-badge")).toHaveLength(1);
      expect(container.querySelectorAll(".highlight-glow")).toHaveLength(1);
      expect(container.querySelectorAll(".original-price")).toHaveLength(1);
    });
  });
});