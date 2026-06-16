import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import OfferBusinessSection from "../components/ebook-empresario-e-patrimonio-page/OfferBusinessContent/OfferBusiness";

// Mock do CSS
jest.mock("../components/ebook-empresario-e-patrimonio-page/OfferBusinessContent/styles.css", () => ({}));

// Mock do IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  disconnect: jest.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

describe("OfferBusinessSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza a seção principal", () => {
      const { container } = render(<OfferBusinessSection />);
      
      expect(container.querySelector(".business-offer-section")).toBeInTheDocument();
      expect(container.querySelector(".business-container")).toBeInTheDocument();
    });

    test("renderiza o header", () => {
      render(<OfferBusinessSection />);
      
      expect(screen.getByText("Soluções Empresariais")).toBeInTheDocument();
      expect(screen.getByText(/Transforme seu/)).toBeInTheDocument();
      expect(screen.getByText(/patrimônio empresarial/)).toBeInTheDocument();
      expect(screen.getByText(/em uma máquina de crescimento/)).toBeInTheDocument();
      expect(screen.getByText(/Metodologias comprovadas por empresários/)).toBeInTheDocument();
    });

    test("título tem classe title-span", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const span = container.querySelector(".title-span");
      expect(span).toBeInTheDocument();
      expect(span).toHaveTextContent("patrimônio empresarial");
    });

    test("renderiza o ícone SVG no header", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const svg = container.querySelector(".business-tag svg");
      expect(svg).toBeInTheDocument();
    });
  });

  describe("Planos de preços", () => {
    test("renderiza os 2 planos", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const cards = container.querySelectorAll(".business-card");
      expect(cards).toHaveLength(2);
    });

    test("renderiza o plano E-book (versão simples)", () => {
      const { container } = render(<OfferBusinessSection />);
      
      expect(screen.getByText("PARA QUEM QUER LER")).toBeInTheDocument();
      expect(screen.getByText("Só o E-book")).toBeInTheDocument();
      
      const simpleCard = container.querySelectorAll(".business-card")[0] as HTMLElement;
      expect(simpleCard.querySelector(".business-currency")).toHaveTextContent("R$");
      expect(simpleCard.querySelector(".business-amount")).toHaveTextContent("26,90");
      
      // Usar getAllByText e verificar o primeiro elemento
      const periodElements = screen.getAllByText("pagamento único · acesso permanente");
      expect(periodElements.length).toBe(2);
      expect(periodElements[0]).toBeInTheDocument();
    });

    test("renderiza o plano E-book + Masterclass (versão completa)", () => {
      const { container } = render(<OfferBusinessSection />);
      
      expect(screen.getByText("PARA QUEM QUER IR FUNDO")).toBeInTheDocument();
      expect(screen.getByText("E-book + Masterclass")).toBeInTheDocument();
      
      const completeCard = container.querySelectorAll(".business-card")[1] as HTMLElement;
      expect(completeCard.querySelector(".business-currency")).toHaveTextContent("R$");
      expect(completeCard.querySelector(".business-amount")).toHaveTextContent("98,90");
      
      expect(screen.getAllByText("pagamento único · acesso permanente")).toHaveLength(2);
    });

    test("plano completo tem badge 'MAIS COMPLETO'", () => {
      render(<OfferBusinessSection />);
      
      expect(screen.getByText("MAIS COMPLETO")).toBeInTheDocument();
    });

    test("plano completo tem preço original e badge de economia", () => {
      render(<OfferBusinessSection />);
      
      expect(screen.getByText(/De R\$ 118/)).toBeInTheDocument();
      expect(screen.getByText(/Economize R\$ 19/)).toBeInTheDocument();
    });

    test("plano simples não tem badge", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const simpleCard = container.querySelectorAll(".business-card")[0] as HTMLElement;
      expect(simpleCard?.querySelector(".business-badge")).toBeNull();
    });
  });

  describe("Features dos planos", () => {
    test("plano simples tem 4 features", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const simpleCard = container.querySelectorAll(".business-card")[0] as HTMLElement;
      const features = simpleCard?.querySelectorAll(".business-feature-item");
      expect(features).toHaveLength(4);
    });

    test("plano simples tem as features corretas", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const simpleCard = container.querySelectorAll(".business-card")[0] as HTMLElement;
      
      expect(within(simpleCard).getByText("E-book completo em PDF")).toBeInTheDocument();
      expect(within(simpleCard).getByText("Pesquisa exclusiva com dados reais")).toBeInTheDocument();
      expect(within(simpleCard).getByText("Leitura no seu ritmo")).toBeInTheDocument();
      expect(within(simpleCard).getByText("Acesso permanente")).toBeInTheDocument();
    });

    test("plano completo tem 5 features", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const completeCard = container.querySelectorAll(".business-card")[1] as HTMLElement;
      const features = completeCard?.querySelectorAll(".business-feature-item");
      expect(features).toHaveLength(5);
    });

    test("plano completo tem as features corretas", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const completeCard = container.querySelectorAll(".business-card")[1] as HTMLElement;
      
      expect(within(completeCard).getByText("E-book completo em PDF")).toBeInTheDocument();
      expect(within(completeCard).getByText("Masterclass gravada exclusiva")).toBeInTheDocument();
      expect(within(completeCard).getByText("Aprofundamento dos temas principais")).toBeInTheDocument();
      expect(within(completeCard).getByText("Sessão de perguntas e respostas")).toBeInTheDocument();
      expect(within(completeCard).getByText("Acesso permanente a tudo")).toBeInTheDocument();
    });

    test("features têm título 'O que está incluído'", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const featuresTitles = container.querySelectorAll(".features-title");
      expect(featuresTitles).toHaveLength(2);
      featuresTitles.forEach(title => {
        expect(title).toHaveTextContent("O que está incluído:");
      });
    });

    test("cada feature tem ícone de check", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const checkIcons = container.querySelectorAll(".business-check-icon");
      expect(checkIcons.length).toBe(9);
    });
  });

  describe("Botões CTA", () => {
    test("renderiza botão 'Quero o e-book'", () => {
      render(<OfferBusinessSection />);
      
      const button = screen.getByText("Quero o e-book");
      expect(button).toBeInTheDocument();
    });

    test("renderiza botão 'Quero o completo'", () => {
      render(<OfferBusinessSection />);
      
      const button = screen.getByText("Quero o completo");
      expect(button).toBeInTheDocument();
    });

    test("botão do plano simples tem classe 'secondary'", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const simpleCard = container.querySelectorAll(".business-card")[0] as HTMLElement;
      const button = simpleCard?.querySelector(".business-cta-button");
      expect(button).toHaveClass("secondary");
    });

    test("botão do plano completo tem classe 'primary'", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const completeCard = container.querySelectorAll(".business-card")[1] as HTMLElement;
      const button = completeCard?.querySelector(".business-cta-button");
      expect(button).toHaveClass("primary");
    });

    test("botões têm ícone de seta", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const arrows = container.querySelectorAll(".business-button-arrow");
      expect(arrows).toHaveLength(2);
    });

    test("clique no botão chama handlePlanSelect", async () => {
      const user = userEvent.setup();
      const consoleSpy = jest.spyOn(console, 'log');
      
      render(<OfferBusinessSection />);
      
      const button = screen.getByText("Quero o e-book");
      await user.click(button);
      
      expect(consoleSpy).toHaveBeenCalledWith("Plano empresarial selecionado: ebook");
      consoleSpy.mockRestore();
    });
  });

  describe("Cards com highlight", () => {
    test("plano completo tem classe 'highlighted'", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const completeCard = container.querySelectorAll(".business-card")[1] as HTMLElement;
      expect(completeCard).toHaveClass("highlighted");
    });

    test("plano simples não tem classe 'highlighted'", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const simpleCard = container.querySelectorAll(".business-card")[0] as HTMLElement;
      expect(simpleCard).not.toHaveClass("highlighted");
    });

    test("plano completo tem glow de destaque", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const completeCard = container.querySelectorAll(".business-card")[1] as HTMLElement;
      const glow = completeCard?.querySelector(".business-highlight-glow");
      expect(glow).toBeInTheDocument();
    });
  });

  describe("Footer e Garantia", () => {
    test("renderiza o footer", () => {
      const { container } = render(<OfferBusinessSection />);
      
      expect(container.querySelector(".business-footer")).toBeInTheDocument();
    });

    test("renderiza a garantia", () => {
      render(<OfferBusinessSection />);
      
      expect(screen.getByText("Garantia de 30 dias")).toBeInTheDocument();
      expect(screen.getByText(/Se não ficar satisfeito, devolvemos 100% do seu investimento/)).toBeInTheDocument();
    });

    test("garantia tem ícone SVG", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const icon = container.querySelector(".guarantee-icon");
      expect(icon).toBeInTheDocument();
    });

    test("renderiza o suporte", () => {
      render(<OfferBusinessSection />);
      
      expect(screen.getByText("Dúvidas sobre qual plano escolher?")).toBeInTheDocument();
      expect(screen.getByText("Fale com um especialista")).toBeInTheDocument();
    });

    test("link do WhatsApp tem href correto", () => {
      render(<OfferBusinessSection />);
      
      const whatsappLink = screen.getByText("Fale com um especialista");
      expect(whatsappLink).toHaveAttribute("href", "https://wa.me/5511999999999");
    });

    test("link do WhatsApp abre em nova aba", () => {
      render(<OfferBusinessSection />);
      
      const whatsappLink = screen.getByText("Fale com um especialista");
      expect(whatsappLink).toHaveAttribute("target", "_blank");
      expect(whatsappLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Props personalizadas", () => {
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
          description: 'Descrição personalizada'
        }
      ];
      
      const { container } = render(<OfferBusinessSection plans={customPlans} />);
      
      expect(screen.getByText("PLANO PERSONALIZADO")).toBeInTheDocument();
      expect(screen.getByText("Plano Custom")).toBeInTheDocument();
      
      const customCard = container.querySelector(".business-card") as HTMLElement;
      expect(customCard?.querySelector(".business-currency")).toHaveTextContent("R$");
      expect(customCard?.querySelector(".business-amount")).toHaveTextContent("49,90");
      
      expect(screen.getByText("Descrição personalizada")).toBeInTheDocument();
      expect(screen.getByText("Comprar agora")).toBeInTheDocument();
    });

    test("aceita whatsappNumber personalizado via props", () => {
      render(<OfferBusinessSection whatsappNumber="5511987654321" />);
      
      const whatsappLink = screen.getByText("Fale com um especialista");
      expect(whatsappLink).toHaveAttribute("href", "https://wa.me/5511987654321");
    });
  });

  describe("Classes CSS e estrutura", () => {
    test("elementos têm classes CSS corretas", () => {
      const { container } = render(<OfferBusinessSection />);
      
      expect(container.querySelector(".business-offer-section")).toBeInTheDocument();
      expect(container.querySelector(".business-container")).toBeInTheDocument();
      expect(container.querySelector(".business-header")).toBeInTheDocument();
      expect(container.querySelector(".business-grid")).toBeInTheDocument();
      expect(container.querySelector(".business-footer")).toBeInTheDocument();
    });

    test("cada card tem estrutura de preço correta", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const cards = container.querySelectorAll(".business-card");
      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        expect(cardElement.querySelector(".business-content")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-card-header")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-card-tag")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-card-name")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-pricing")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-price-container")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-current-price")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-currency")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-amount")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-period")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-features")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-features-list")).toBeInTheDocument();
        expect(cardElement.querySelector(".business-cta-button")).toBeInTheDocument();
      });
    });
  });

  describe("Animações e IntersectionObserver", () => {
    test("cards têm animationDelay diferente", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const cards = container.querySelectorAll(".business-card");
      expect(cards[0]).toHaveStyle("animation-delay: 0s");
      expect(cards[1]).toHaveStyle("animation-delay: 0.2s");
    });

    test("IntersectionObserver é configurado", () => {
      render(<OfferBusinessSection />);
      
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
      
      const { container } = render(<OfferBusinessSection />);
      
      const simpleCard = container.querySelectorAll(".business-card")[0] as HTMLElement;
      await user.click(simpleCard);
      
      expect(consoleSpy).toHaveBeenCalledWith("Plano empresarial selecionado: ebook");
      consoleSpy.mockRestore();
    });

    test("clique no card completo chama handlePlanSelect", async () => {
      const user = userEvent.setup();
      const consoleSpy = jest.spyOn(console, 'log');
      
      const { container } = render(<OfferBusinessSection />);
      
      const completeCard = container.querySelectorAll(".business-card")[1] as HTMLElement;
      await user.click(completeCard);
      
      expect(consoleSpy).toHaveBeenCalledWith("Plano empresarial selecionado: complete");
      consoleSpy.mockRestore();
    });
  });

  describe("Elementos SVG", () => {
    test("ícone do card badge tem viewBox correto", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const badgeIcon = container.querySelector(".business-badge svg");
      expect(badgeIcon).toHaveAttribute("viewBox", "0 0 12 12");
    });

    test("ícone de check tem viewBox correto", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const checkIcon = container.querySelector(".business-check-icon");
      expect(checkIcon).toHaveAttribute("viewBox", "0 0 20 20");
    });

    test("seta do botão tem viewBox correto", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const buttonArrow = container.querySelector(".business-button-arrow");
      expect(buttonArrow).toHaveAttribute("viewBox", "0 0 24 24");
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elemento section semântico", () => {
      const { container } = render(<OfferBusinessSection />);
      
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    test("usa heading h2", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const h2 = container.querySelector("h2");
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveClass("business-title");
    });

    test("usa heading h3 para nomes dos planos", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const h3Elements = container.querySelectorAll("h3.business-card-name");
      expect(h3Elements).toHaveLength(2);
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const section = container.querySelector(".business-offer-section");
      const containerDiv = section?.querySelector(".business-container");
      const header = containerDiv?.querySelector(".business-header");
      const grid = containerDiv?.querySelector(".business-grid");
      const footer = containerDiv?.querySelector(".business-footer");
      
      expect(section).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(header).toBeInTheDocument();
      expect(grid).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });
  });

  describe("Preços formatados", () => {
    test("preço do plano simples está formatado corretamente", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const simpleCard = container.querySelectorAll(".business-card")[0] as HTMLElement;
      expect(simpleCard.querySelector(".business-currency")).toHaveTextContent("R$");
      expect(simpleCard.querySelector(".business-amount")).toHaveTextContent("26,90");
    });

    test("preço do plano completo está formatado corretamente", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const completeCard = container.querySelectorAll(".business-card")[1] as HTMLElement;
      expect(completeCard.querySelector(".business-currency")).toHaveTextContent("R$");
      expect(completeCard.querySelector(".business-amount")).toHaveTextContent("98,90");
    });

    test("preço personalizado é formatado corretamente", () => {
      const customPlans = [
        {
          id: 'custom',
          tag: 'PERSONALIZADO',
          name: 'Custom',
          price: 123.45,
          period: 'único',
          features: ['Test'],
          buttonText: 'Comprar'
        }
      ];
      
      const { container } = render(<OfferBusinessSection plans={customPlans} />);
      
      const customCard = container.querySelector(".business-card") as HTMLElement;
      expect(customCard?.querySelector(".business-currency")).toHaveTextContent("R$");
      expect(customCard?.querySelector(".business-amount")).toHaveTextContent("123,45");
    });
  });

  describe("Teste de integração completa", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<OfferBusinessSection />);
      
      expect(container.querySelector(".business-offer-section")).toBeInTheDocument();
      expect(screen.getByText("Soluções Empresariais")).toBeInTheDocument();
      expect(screen.getByText("PARA QUEM QUER LER")).toBeInTheDocument();
      expect(screen.getByText("PARA QUEM QUER IR FUNDO")).toBeInTheDocument();
      expect(screen.getByText("Quero o e-book")).toBeInTheDocument();
      expect(screen.getByText("Quero o completo")).toBeInTheDocument();
      expect(screen.getByText("Garantia de 30 dias")).toBeInTheDocument();
      expect(screen.getByText("Fale com um especialista")).toBeInTheDocument();
      
      expect(container.querySelectorAll(".business-card")).toHaveLength(2);
      expect(container.querySelectorAll(".business-feature-item")).toHaveLength(9);
    });

    test("todos os elementos interativos estão funcionando", async () => {
      const user = userEvent.setup();
      const consoleSpy = jest.spyOn(console, 'log');
      
      const { container } = render(<OfferBusinessSection />);
      
      const firstButton = screen.getByText("Quero o e-book");
      await user.click(firstButton);
      expect(consoleSpy).toHaveBeenCalledWith("Plano empresarial selecionado: ebook");
      
      const secondButton = screen.getByText("Quero o completo");
      await user.click(secondButton);
      expect(consoleSpy).toHaveBeenCalledWith("Plano empresarial selecionado: complete");
      
      const firstCard = container.querySelectorAll(".business-card")[0] as HTMLElement;
      await user.click(firstCard);
      expect(consoleSpy).toHaveBeenCalledWith("Plano empresarial selecionado: ebook");
      
      consoleSpy.mockRestore();
    });

    test("estrutura de dados dos planos padrão está correta", () => {
      const { container } = render(<OfferBusinessSection />);
      
      const cards = container.querySelectorAll(".business-card");
      expect(cards).toHaveLength(2);
      
      const firstCard = cards[0] as HTMLElement;
      expect(firstCard).not.toHaveClass("highlighted");
      expect(firstCard.querySelector(".business-badge")).toBeNull();
      expect(firstCard.querySelectorAll(".business-feature-item")).toHaveLength(4);
      
      const secondCard = cards[1] as HTMLElement;
      expect(secondCard).toHaveClass("highlighted");
      expect(secondCard.querySelector(".business-badge")).toBeInTheDocument();
      expect(secondCard.querySelectorAll(".business-feature-item")).toHaveLength(5);
      expect(secondCard.querySelector(".business-highlight-glow")).toBeInTheDocument();
    });
  });
});