import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from "../components/HeaderComponent/Header";

// Mock do CSS
jest.mock("../components/HeaderComponent/styles.css", () => ({}));

// Mock do window.matchMedia para testes de responsividade
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: query === '(max-width: 768px)',
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Header Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reseta o scroll Y
    window.scrollY = 0;
    // Reseta window.innerWidth para desktop por padrão
    Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true });
  });

  describe("Renderização básica", () => {
    test("renderiza o header corretamente", () => {
      const { container } = render(<Header />);
      
      expect(container.querySelector(".header")).toBeInTheDocument();
      expect(container.querySelector(".header-container")).toBeInTheDocument();
    });

    test("renderiza a logo com atributos corretos", () => {
      render(<Header />);
      
      const logo = screen.getByAltText("Logo");
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute("src", "/Ativo 4@4x.png");
      expect(logo).toHaveClass("logo-header");
    });

    test("renderiza os links de navegação desktop", () => {
      const { container } = render(<Header />);
      
      // Busca especificamente no nav desktop
      const desktopNav = container.querySelector(".nav");
      expect(desktopNav?.querySelector('a[href="#about"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#products"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#method"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#different"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#cta"]')).toBeInTheDocument();
    });

    test("os links de navegação têm as classes corretas", () => {
      const { container } = render(<Header />);
      
      // Testa apenas links do nav desktop
      const desktopNav = container.querySelector(".nav");
      const links = desktopNav?.querySelectorAll("a");
      
      links?.forEach(link => {
        if (link.textContent === "FALE COMIGO") {
          expect(link).toHaveClass("cta");
        } else if (link.textContent && link.textContent.trim() !== "") {
          expect(link).toHaveClass("item-nav");
        }
      });
    });

    test("os links têm os hrefs corretos", () => {
      const { container } = render(<Header />);
      
      // Busca especificamente no nav desktop
      const desktopNav = container.querySelector(".nav");
      const sobreLink = desktopNav?.querySelector('a[href="#about"]');
      const produtosLink = desktopNav?.querySelector('a[href="#products"]');
      const methodLink = desktopNav?.querySelector('a[href="#method"]');
      const differentLink = desktopNav?.querySelector('a[href="#different"]');
      const ctaLink = desktopNav?.querySelector('a[href="#cta"]');
      
      expect(sobreLink).toHaveAttribute("href", "#about");
      expect(produtosLink).toHaveAttribute("href", "#products");
      expect(methodLink).toHaveAttribute("href", "#method");
      expect(differentLink).toHaveAttribute("href", "#different");
      expect(ctaLink).toHaveAttribute("href", "#cta");
    });
  });

  describe("Menu Mobile - Hambúrguer", () => {
    test("renderiza o botão hambúrguer", () => {
      const { container } = render(<Header />);
      
      const hamburger = container.querySelector(".hamburger");
      expect(hamburger).toBeInTheDocument();
    });

    test("botão hambúrguer tem 3 spans", () => {
      const { container } = render(<Header />);
      
      const hamburger = container.querySelector(".hamburger");
      const spans = hamburger?.querySelectorAll("span");
      expect(spans).toHaveLength(3);
    });

    test("menu mobile começa fechado", () => {
      const { container } = render(<Header />);
      
      const navMobile = container.querySelector(".nav-mobile");
      expect(navMobile).toBeInTheDocument();
      expect(navMobile).not.toHaveClass("nav-mobile--open");
    });

    test("abre o menu mobile ao clicar no hambúrguer", async () => {
      const user = userEvent.setup();
      const { container } = render(<Header />);
      
      const hamburger = container.querySelector(".hamburger") as HTMLElement;
      const navMobile = container.querySelector(".nav-mobile");
      
      expect(navMobile).not.toHaveClass("nav-mobile--open");
      
      await user.click(hamburger);
      
      expect(navMobile).toHaveClass("nav-mobile--open");
      expect(hamburger).toHaveClass("hamburger--open");
    });

    test("fecha o menu mobile ao clicar novamente no hambúrguer", async () => {
      const user = userEvent.setup();
      const { container } = render(<Header />);
      
      const hamburger = container.querySelector(".hamburger") as HTMLElement;
      const navMobile = container.querySelector(".nav-mobile");
      
      await user.click(hamburger);
      expect(navMobile).toHaveClass("nav-mobile--open");
      
      await user.click(hamburger);
      expect(navMobile).not.toHaveClass("nav-mobile--open");
    });

    test("fecha o menu mobile ao clicar em um link", async () => {
      const user = userEvent.setup();
      const { container } = render(<Header />);
      
      const hamburger = container.querySelector(".hamburger") as HTMLElement;
      const navMobile = container.querySelector(".nav-mobile");
      
      await user.click(hamburger);
      expect(navMobile).toHaveClass("nav-mobile--open");
      
      // Busca especificamente no nav mobile
      const mobileLink = navMobile?.querySelector('a[href="#about"]') as HTMLElement;
      await user.click(mobileLink);
      
      expect(navMobile).not.toHaveClass("nav-mobile--open");
    });

    test("menu mobile tem todos os links", () => {
      const { container } = render(<Header />);
      
      const navMobile = container.querySelector(".nav-mobile");
      const links = navMobile?.querySelectorAll("a");
      
      expect(links).toHaveLength(5);
      expect(links?.[0]).toHaveTextContent("Sobre");
      expect(links?.[1]).toHaveTextContent("Produtos");
      expect(links?.[2]).toHaveTextContent("Método");
      expect(links?.[3]).toHaveTextContent("Diferencial");
      expect(links?.[4]).toHaveTextContent("FALE COMIGO");
    });
  });

  describe("Comportamento de scroll no mobile", () => {
    test("header fica visível quando scroll é para cima", () => {
      const { container } = render(<Header />);
      
      // Simula dispositivo mobile e dispara evento de resize
      act(() => {
        Object.defineProperty(window, 'innerWidth', { value: 500, writable: true });
        window.dispatchEvent(new Event('resize'));
      });

      act(() => {
        // Simula scroll para baixo
        window.scrollY = 100;
        window.dispatchEvent(new Event('scroll'));
      });

      act(() => {
        // Simula scroll para cima
        window.scrollY = 50;
        window.dispatchEvent(new Event('scroll'));
      });
      
      const header = container.querySelector(".header");
      expect(header).toHaveClass("header--visible");
    });

    test("header esconde quando scroll é para baixo", () => {
      const { container } = render(<Header />);
      
      // Simula dispositivo mobile
      act(() => {
        Object.defineProperty(window, 'innerWidth', { value: 500, writable: true });
        window.dispatchEvent(new Event('resize'));
      });

      act(() => {
        // Simula scroll inicial
        window.scrollY = 50;
        window.dispatchEvent(new Event('scroll'));
      });

      act(() => {
        // Simula scroll para baixo
        window.scrollY = 150;
        window.dispatchEvent(new Event('scroll'));
      });
      
      const header = container.querySelector(".header");
      expect(header).toHaveClass("header--hidden");
    });

    test("header fica visível quando scroll no topo", () => {
      const { container } = render(<Header />);
      
      // Simula dispositivo mobile
      act(() => {
        Object.defineProperty(window, 'innerWidth', { value: 500, writable: true });
        window.dispatchEvent(new Event('resize'));
      });

      act(() => {
        // Simula scroll no topo
        window.scrollY = 0;
        window.dispatchEvent(new Event('scroll'));
      });
      
      const header = container.querySelector(".header");
      expect(header).toHaveClass("header--visible");
    });
  });

  describe("Classes CSS", () => {
    test("header tem classe base correta", () => {
      const { container } = render(<Header />);
      
      const header = container.querySelector(".header");
      expect(header).toHaveClass("header");
    });

    test("container tem classe correta", () => {
      const { container } = render(<Header />);
      
      const headerContainer = container.querySelector(".header-container");
      expect(headerContainer).toHaveClass("header-container");
    });

    test("nav desktop tem classe correta", () => {
      const { container } = render(<Header />);
      
      const nav = container.querySelector(".nav");
      expect(nav).toHaveClass("nav");
    });

    test("nav mobile tem classe correta", () => {
      const { container } = render(<Header />);
      
      const navMobile = container.querySelector(".nav-mobile");
      expect(navMobile).toHaveClass("nav-mobile");
    });
  });

  describe("Acessibilidade", () => {
    test("botão hambúrguer tem aria-label", () => {
      const { container } = render(<Header />);
      
      const hamburger = container.querySelector(".hamburger");
      expect(hamburger).toHaveAttribute("aria-label", "Menu");
    });

    test("logo tem texto alternativo", () => {
      render(<Header />);
      
      const logo = screen.getByAltText("Logo");
      expect(logo).toBeInTheDocument();
    });

    test("links são navegáveis por teclado", () => {
      render(<Header />);
      
      const links = screen.getAllByRole("link");
      links.forEach(link => {
        expect(link).not.toHaveAttribute("tabindex", "-1");
      });
    });
  });

  describe("Estrutura semântica", () => {
    test("usa elemento header semântico", () => {
      const { container } = render(<Header />);
      
      expect(container.querySelector("header")).toBeInTheDocument();
    });

    test("usa elemento nav para navegação", () => {
      const { container } = render(<Header />);
      
      const navElements = container.querySelectorAll("nav");
      expect(navElements).toHaveLength(2); // nav desktop e nav mobile
    });

    test("verifica hierarquia de elementos", () => {
      const { container } = render(<Header />);
      
      const header = container.querySelector(".header");
      const containerDiv = header?.querySelector(".header-container");
      const logo = containerDiv?.querySelector(".logo-header");
      const nav = containerDiv?.querySelector(".nav");
      const hamburger = containerDiv?.querySelector(".hamburger");
      
      expect(header).toBeInTheDocument();
      expect(containerDiv).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
      expect(nav).toBeInTheDocument();
      expect(hamburger).toBeInTheDocument();
    });
  });

  describe("Teste de integração", () => {
    test("renderiza o componente completo sem erros", () => {
      const { container } = render(<Header />);
      
      expect(container.querySelector(".header")).toBeInTheDocument();
      expect(screen.getByAltText("Logo")).toBeInTheDocument();
      
      // Verifica links no nav desktop
      const desktopNav = container.querySelector(".nav");
      expect(desktopNav?.querySelector('a[href="#about"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#products"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#method"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#different"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#cta"]')).toBeInTheDocument();
      
      expect(container.querySelector(".hamburger")).toBeInTheDocument();
      expect(container.querySelector(".nav-mobile")).toBeInTheDocument();
    });
  });
});