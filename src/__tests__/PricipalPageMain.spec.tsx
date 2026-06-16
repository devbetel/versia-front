import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Main from "../components/MainContent/Main";

// Mock do hook useTypewriter
const mockUseTypewriter = jest.fn(() => "Precisa viver bem com o que já tem.");

jest.mock("../hooks/useTypewriter", () => ({
  useTypewriter: () => mockUseTypewriter()
}));

// Mock do AOS
jest.mock('aos', () => ({
  init: jest.fn(),
  refresh: jest.fn(),
  refreshHard: jest.fn()
}));

// Mock do CSS
jest.mock("../components/MainContent/styles.css", () => ({}));

// Variável para guardar o location original
let originalLocation: Location;

describe("Main Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseTypewriter.mockClear();
    
    // Salvar o location original
    originalLocation = window.location;
    
    // Remover o location atual
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (window as any).location;
    
    // Criar um novo objeto location mockado
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).location = {
      href: '',
      pathname: '',
      search: '',
      hash: '',
      assign: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      toString: jest.fn(),
    };
  });

  afterEach(() => {
    // Restaurar o location original
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).location = originalLocation;
  });

  describe("Renderização básica", () => {
    test("renderiza o título principal corretamente", () => {
      render(<Main />);
      
      expect(
        screen.getByText("Você não precisa ganhar mais.")
      ).toBeInTheDocument();
    });

    test("renderiza o texto do typewriter", () => {
      render(<Main />);
      
      expect(
        screen.getByText("Precisa viver bem com o que já tem.")
      ).toBeInTheDocument();
    });

    test("renderiza o cursor do typewriter", () => {
      render(<Main />);
      
      const cursor = screen.getByText("|");
      expect(cursor).toBeInTheDocument();
      expect(cursor).toHaveClass("cursor");
    });

    test("renderiza a descrição com texto em negrito", () => {
      render(<Main />);
      
      expect(
        screen.getByText(/Quase 20 anos no mercado financeiro/)
      ).toBeInTheDocument();
      
      expect(
        screen.getByText(
          "a maioria das pessoas não tem problema de renda. Tem problema de relação."
        )
      ).toBeInTheDocument();
    });

    test("renderiza o nome e subtítulo da especialista", () => {
      render(<Main />);
      
      expect(screen.getByText("Danielle Borges")).toBeInTheDocument();
      expect(
        screen.getByText(
          "PLANEJADORA FINANCEIRA CFP® · ESPECIALISTA EM COMPORTAMENTO"
        )
      ).toBeInTheDocument();
    });

    test("renderiza a imagem principal", () => {
      render(<Main />);
      
      const image = screen.getByAltText("Logo");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute(
        "src",
        "/IMG_3165-SEM-FUNDO-RECORTADA.png"
      );
      expect(image).toHaveClass("img-principal");
    });
  });

  describe("Elementos decorativos", () => {
    test("renderiza todos os símbolos de moeda", () => {
      render(<Main />);
      
      const symbols = ["$", "€", "R$", "¥", "£", "₿", "₹", "₩", "₦", "₫"];
      
      symbols.forEach(symbol => {
        expect(screen.getByText(symbol)).toBeInTheDocument();
      });
    });

    test("renderiza elementos decorativos com classes corretas", () => {
      const { container } = render(<Main />);
      
      expect(container.querySelector(".deco-line.line-1")).toBeInTheDocument();
      expect(container.querySelector(".deco-line.line-2")).toBeInTheDocument();
      
      for (let i = 1; i <= 5; i++) {
        expect(container.querySelector(`.deco-dot.dot-${i}`)).toBeInTheDocument();
      }
    });
  });

  describe("Botões de navegação", () => {
    test("renderiza ambos os botões com textos corretos", () => {
      render(<Main />);
      
      expect(screen.getByText("CONHEÇA OS PRODUTOS")).toBeInTheDocument();
      expect(screen.getByText("QUEM SOU EU")).toBeInTheDocument();
    });

    test("botões têm as classes CSS corretas", () => {
      render(<Main />);
      
      const productButton = screen.getByText("CONHEÇA OS PRODUTOS");
      const aboutButton = screen.getByText("QUEM SOU EU");
      
      expect(productButton).toHaveClass("btn-beige");
      expect(aboutButton).toHaveClass("btn-outline");
    });

    test("clique no botão 'CONHEÇA OS PRODUTOS' navega para #products", async () => {
      const user = userEvent.setup();
      
      render(<Main />);
      
      const productButton = screen.getByText("CONHEÇA OS PRODUTOS");
      await user.click(productButton);
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((window as any).location.href).toBe('http://localhost/#products');
    });

    test("clique no botão 'QUEM SOU EU' navega para #about", async () => {
      const user = userEvent.setup();
      
      render(<Main />);
      
      const aboutButton = screen.getByText("QUEM SOU EU");
      await user.click(aboutButton);
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((window as any).location.href).toBe('http://localhost/#about');
    });
  });

  describe("Estrutura e layout", () => {
    test("renderiza a estrutura principal correta", () => {
      const { container } = render(<Main />);
      
      expect(container.querySelector(".main")).toBeInTheDocument();
      expect(container.querySelector(".container.main-container")).toBeInTheDocument();
      expect(container.querySelector(".left-side")).toBeInTheDocument();
      expect(container.querySelector(".right-side")).toBeInTheDocument();
    });

    test("renderiza elementos com atributos data-aos", () => {
      const { container } = render(<Main />);
      
      expect(container.querySelector('[data-aos="fade-right"]')).toBeInTheDocument();
      expect(container.querySelector('[data-aos="fade-up"]')).toBeInTheDocument();
    });

    test("renderiza linha de acento no lado esquerdo", () => {
      const { container } = render(<Main />);
      
      expect(container.querySelector(".left-accent-line")).toBeInTheDocument();
    });
  });

  describe("Acessibilidade", () => {
    test("imagem tem texto alternativo apropriado", () => {
      render(<Main />);
      
      const image = screen.getByAltText("Logo");
      expect(image).toBeInTheDocument();
    });

    test("botões são focalizáveis", () => {
      render(<Main />);
      
      const productButton = screen.getByText("CONHEÇA OS PRODUTOS");
      const aboutButton = screen.getByText("QUEM SOU EU");
      
      expect(productButton).not.toHaveAttribute("disabled");
      expect(aboutButton).not.toHaveAttribute("disabled");
    });
  });

  describe("Teste de integração", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<Main />);
      
      expect(container.firstChild).toHaveClass("main");
      expect(screen.getByText("Danielle Borges")).toBeInTheDocument();
      expect(screen.getByText("CONHEÇA OS PRODUTOS")).toBeInTheDocument();
      expect(screen.getByText("QUEM SOU EU")).toBeInTheDocument();
    });
  });
});