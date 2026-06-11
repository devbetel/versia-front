import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChaptersSection from "../components/ebook-jogo-invisivel-page/ChaptersContent/Chapters";
import AOS from "aos";

// Mock do AOS
jest.mock("aos", () => ({
  init: jest.fn(),
  refresh: jest.fn(),
}));

// Mock do CSS
jest.mock("../components/ebook-jogo-invisivel-page/ChaptersContent/styles.css", () => ({}));
jest.mock("aos/dist/aos.css", () => ({}));

describe("ChaptersSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Renderização básica", () => {
    test("renderiza o componente principal", () => {
      const { container } = render(<ChaptersSection />);
      
      expect(container.querySelector(".section-caps")).toBeInTheDocument();
      expect(container.querySelector(".caps-container")).toBeInTheDocument();
      expect(container.querySelector(".caps-grid")).toBeInTheDocument();
    });

    test("renderiza as seções principais", () => {
      const { container } = render(<ChaptersSection />);
      
      expect(container.querySelector(".content-section")).toBeInTheDocument();
      expect(container.querySelector(".chapters-section")).toBeInTheDocument();
    });
  });

  describe("Section Header", () => {
    test("renderiza a tag da seção", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("O que você vai entender")).toBeInTheDocument();
    });

    test("renderiza o título principal", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("Um e-book que explica")).toBeInTheDocument();
      // O texto está dentro do em, então buscamos pelo conteúdo completo
      const emphasisText = screen.getByText(/o sistema de dentro\s*para fora\./);
      expect(emphasisText).toBeInTheDocument();
    });

    test("título tem a classe emphasis", () => {
      const { container } = render(<ChaptersSection />);
      
      const emphasis = container.querySelector(".title-emphasis");
      expect(emphasis).toBeInTheDocument();
      expect(emphasis?.textContent).toContain("o sistema de dentro");
      expect(emphasis?.textContent).toContain("para fora.");
    });

    test("renderiza o texto descritivo", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText(/Não é livro de autoajuda/)).toBeInTheDocument();
      expect(screen.getByText(/com dados da CNC, ANBIMA, FGV e Serasa/)).toBeInTheDocument();
      expect(screen.getByText(/O comportamento precisa mudar junto/)).toBeInTheDocument();
    });

    test("verifica estrutura da tag decoration", () => {
      const { container } = render(<ChaptersSection />);
      
      const tagDecoration = container.querySelector(".tag-decoration");
      expect(tagDecoration).toBeInTheDocument();
      
      const decorationDot = container.querySelector(".decoration-dot");
      expect(decorationDot).toBeInTheDocument();
      
      const decorationLine = container.querySelector(".decoration-line");
      expect(decorationLine).toBeInTheDocument();
    });
  });

  describe("ContentStats Component", () => {
    test("renderiza as estatísticas do conteúdo", () => {
      const { container } = render(<ChaptersSection />);
      
      const contentStats = container.querySelector(".content-stats");
      expect(contentStats).toBeInTheDocument();
    });

    test("renderiza os números corretos", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("15")).toBeInTheDocument();
      expect(screen.getByText("7")).toBeInTheDocument();
      expect(screen.getByText("2h")).toBeInTheDocument();
    });

    test("renderiza os labels corretos", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("Páginas")).toBeInTheDocument();
      expect(screen.getByText("Capítulos")).toBeInTheDocument();
      expect(screen.getByText("Leitura")).toBeInTheDocument();
    });

    test("tem a estrutura correta de stats", () => {
      const { container } = render(<ChaptersSection />);
      
      const statItems = container.querySelectorAll(".stat-item");
      expect(statItems).toHaveLength(3);
      
      const statDividers = container.querySelectorAll(".stat-divider");
      expect(statDividers).toHaveLength(2);
    });

    test("cada stat-item tem número e label", () => {
      const { container } = render(<ChaptersSection />);
      
      const statItems = container.querySelectorAll(".stat-item");
      statItems.forEach(item => {
        expect(item.querySelector(".stat-number")).toBeInTheDocument();
        expect(item.querySelector(".stat-label")).toBeInTheDocument();
      });
    });
  });

  describe("ResearchSources Component", () => {
    test("renderiza o componente de fontes de pesquisa", () => {
      const { container } = render(<ChaptersSection />);
      
      const researchSources = container.querySelector(".research-sources");
      expect(researchSources).toBeInTheDocument();
    });

    test("renderiza o label das fontes", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("Baseado em pesquisas de:")).toBeInTheDocument();
    });

    test("renderiza todas as 4 fontes de pesquisa", () => {
      const { container } = render(<ChaptersSection />);
      
      const researchBadges = container.querySelectorAll(".research-badge");
      expect(researchBadges).toHaveLength(4);
    });

    test("renderiza os nomes das instituições", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("CNC")).toBeInTheDocument();
      expect(screen.getByText("ANBIMA")).toBeInTheDocument();
      expect(screen.getByText("FGV")).toBeInTheDocument();
      expect(screen.getByText("SERASA")).toBeInTheDocument();
    });

    test("renderiza os ícones corretos", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("📊")).toBeInTheDocument();
      expect(screen.getByText("💼")).toBeInTheDocument();
      expect(screen.getByText("📈")).toBeInTheDocument();
      expect(screen.getByText("🎯")).toBeInTheDocument();
    });

    test("cada badge tem ícone e texto", () => {
      const { container } = render(<ChaptersSection />);
      
      const badges = container.querySelectorAll(".research-badge");
      badges.forEach(badge => {
        expect(badge.querySelector(".badge-icon")).toBeInTheDocument();
        expect(badge.querySelector(".badge-text")).toBeInTheDocument();
      });
    });
  });

  describe("Chapters Section Header", () => {
    test("renderiza o header dos capítulos", () => {
      const { container } = render(<ChaptersSection />);
      
      const chaptersHeader = container.querySelector(".chapters-header");
      expect(chaptersHeader).toBeInTheDocument();
    });

    test("renderiza título e subtítulo dos capítulos", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("Estrutura do E-book")).toBeInTheDocument();
      expect(screen.getByText("7 capítulos que vão mudar sua relação com o dinheiro")).toBeInTheDocument();
    });
  });

  describe("ChapterCard Component", () => {
    test("renderiza todos os 7 capítulos", () => {
      const { container } = render(<ChaptersSection />);
      
      const chapterCards = container.querySelectorAll(".chapter-card");
      expect(chapterCards).toHaveLength(7);
    });

    test("primeiro capítulo tem classe highlighted", () => {
      const { container } = render(<ChaptersSection />);
      
      const chapterCards = container.querySelectorAll(".chapter-card");
      expect(chapterCards[0]).toHaveClass("highlighted");
    });

    test("outros capítulos não têm classe highlighted", () => {
      const { container } = render(<ChaptersSection />);
      
      const chapterCards = container.querySelectorAll(".chapter-card");
      for (let i = 1; i < chapterCards.length; i++) {
        expect(chapterCards[i]).not.toHaveClass("highlighted");
      }
    });

    test("cada capítulo tem estrutura correta", () => {
      const { container } = render(<ChaptersSection />);
      
      const chapterCards = container.querySelectorAll(".chapter-card");
      chapterCards.forEach(card => {
        expect(card.querySelector(".chapter-header")).toBeInTheDocument();
        expect(card.querySelector(".chapter-number")).toBeInTheDocument();
        expect(card.querySelector(".chapter-progress")).toBeInTheDocument();
        expect(card.querySelector(".progress-bar")).toBeInTheDocument();
        expect(card.querySelector(".chapter-content")).toBeInTheDocument();
        expect(card.querySelector(".chapter-title")).toBeInTheDocument();
        expect(card.querySelector(".chapter-description")).toBeInTheDocument();
      });
    });

    test("primeiro capítulo tem indicador especial", () => {
      const { container } = render(<ChaptersSection />);
      
      const firstCard = container.querySelectorAll(".chapter-card")[0];
      expect(firstCard.querySelector(".number-indicator")).toBeInTheDocument();
    });

    test("outros capítulos não têm indicador especial", () => {
      const { container } = render(<ChaptersSection />);
      
      const chapterCards = container.querySelectorAll(".chapter-card");
      for (let i = 1; i < chapterCards.length; i++) {
        expect(chapterCards[i].querySelector(".number-indicator")).toBeNull();
      }
    });
  });

  describe("Conteúdo específico dos capítulos", () => {
    test("renderiza os números dos capítulos", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("01")).toBeInTheDocument();
      expect(screen.getByText("02")).toBeInTheDocument();
      expect(screen.getByText("03")).toBeInTheDocument();
      expect(screen.getByText("04")).toBeInTheDocument();
      expect(screen.getByText("05")).toBeInTheDocument();
      expect(screen.getByText("06")).toBeInTheDocument();
      expect(screen.getByText("07")).toBeInTheDocument();
    });

    test("renderiza os títulos dos capítulos", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("O dia em que o amanhã chegou")).toBeInTheDocument();
      expect(screen.getByText("A bolha invisível do sucesso fantasma")).toBeInTheDocument();
      expect(screen.getByText("Desmistificando o endividamento")).toBeInTheDocument();
      expect(screen.getByText("A raiz histórica: o crédito sem manual")).toBeInTheDocument();
      expect(screen.getByText("A psicologia oculta do consumo")).toBeInTheDocument();
      expect(screen.getByText("A prisão invisível: burnout e dívida")).toBeInTheDocument();
      expect(screen.getByText("O caminho de volta sem vergonha")).toBeInTheDocument();
    });

    test("renderiza as descrições dos capítulos", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText(/A história pessoal que está na origem de tudo/)).toBeInTheDocument();
      expect(screen.getByText(/Por que profissionais bem-sucedidos estão atolados/)).toBeInTheDocument();
      expect(screen.getByText(/Nem toda dívida é ruim/)).toBeInTheDocument();
      expect(screen.getByText(/De 1994 ao crédito consignado/)).toBeInTheDocument();
      expect(screen.getByText(/O efeito compensação, o desconto hiperbólico/)).toBeInTheDocument();
      expect(screen.getByText(/Como o superendividamento te prende/)).toBeInTheDocument();
      expect(screen.getByText(/O primeiro passo não é cortar o cafezinho/)).toBeInTheDocument();
    });

    test("todos os capítulos têm tempo de leitura", () => {
      render(<ChaptersSection />);
      
      expect(screen.getByText("8 min de leitura")).toBeInTheDocument();
      expect(screen.getByText("12 min de leitura")).toBeInTheDocument();
      expect(screen.getByText("15 min de leitura")).toBeInTheDocument();
      expect(screen.getByText("18 min de leitura")).toBeInTheDocument();
      expect(screen.getByText("14 min de leitura")).toBeInTheDocument();
      expect(screen.getByText("16 min de leitura")).toBeInTheDocument();
      expect(screen.getByText("20 min de leitura")).toBeInTheDocument();
    });

    test("cada capítulo tem footer com tempo de leitura", () => {
      const { container } = render(<ChaptersSection />);
      
      const chapterFooters = container.querySelectorAll(".chapter-footer");
      expect(chapterFooters).toHaveLength(7);
      
      chapterFooters.forEach(footer => {
        expect(footer.querySelector(".reading-time")).toBeInTheDocument();
        expect(footer.querySelector(".time-icon")).toBeInTheDocument();
      });
    });

    test("renderiza ícones de tempo corretos", () => {
      render(<ChaptersSection />);
      
      const timeIcons = screen.getAllByText("⏱️");
      expect(timeIcons).toHaveLength(7);
    });
  });

  describe("Atributos AOS", () => {
    test("elementos têm atributos data-aos corretos", () => {
      const { container } = render(<ChaptersSection />);
      
      expect(container.querySelector('[data-aos="fade-up"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="zoom-in"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-right"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-left"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-down"]')).toBeInTheDocument();
    });

    test("elementos têm delays corretos", () => {
      const { container } = render(<ChaptersSection />);
      
      expect(container.querySelector('[data-aos-delay="100"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos-delay="200"]')).toBeInTheDocument();
    });

    test("research badges têm delays sequenciais", () => {
      const { container } = render(<ChaptersSection />);
      
      const badges = container.querySelectorAll('.research-badge[data-aos-delay]');
      expect(badges).toHaveLength(4);
    });
  });

  describe("Classes CSS corretas", () => {
    test("verifica classes principais", () => {
      const { container } = render(<ChaptersSection />);
      
      expect(container.querySelector(".section-tag")).toBeInTheDocument();
      expect(container.querySelector(".caps-title")).toBeInTheDocument();
      expect(container.querySelector(".caps-body")).toBeInTheDocument();
      expect(container.querySelector(".chapters-title")).toBeInTheDocument();
      expect(container.querySelector(".chapters-subtitle")).toBeInTheDocument();
      expect(container.querySelector(".chapters-container")).toBeInTheDocument();
    });

    test("verifica classes dos números dos capítulos", () => {
      const { container } = render(<ChaptersSection />);
      
      const numberTexts = container.querySelectorAll(".number-text");
      expect(numberTexts).toHaveLength(7);
    });
  });

  describe("Inicialização do AOS", () => {
    test("AOS.init é chamado com configurações corretas", () => {
      render(<ChaptersSection />);
      
      expect(AOS.init).toHaveBeenCalledWith({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
      });
    });
  });

  describe("Teste de integração completa", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<ChaptersSection />);
      
      expect(container.querySelector(".section-caps")).toBeInTheDocument();
      expect(container.querySelector(".content-section")).toBeInTheDocument();
      expect(container.querySelector(".chapters-section")).toBeInTheDocument();
      
      expect(screen.getByText("O que você vai entender")).toBeInTheDocument();
      expect(screen.getByText("Um e-book que explica")).toBeInTheDocument();
      expect(screen.getByText("Estrutura do E-book")).toBeInTheDocument();
      expect(screen.getByText("15")).toBeInTheDocument();
      expect(screen.getByText("Páginas")).toBeInTheDocument();
      expect(screen.getByText("CNC")).toBeInTheDocument();
      expect(screen.getByText("ANBIMA")).toBeInTheDocument();
      expect(container.querySelectorAll(".chapter-card")).toHaveLength(7);
      expect(screen.getByText("O dia em que o amanhã chegou")).toBeInTheDocument();
      expect(screen.getByText("8 min de leitura")).toBeInTheDocument();
    });
  });
});