import React from "react";
import { render, screen, act } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "../LanguageContext";

// Test component to access language context
const TestComponent = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <div data-testid="current-language">{language}</div>
      <div data-testid="translated-text">{t("navigation.home")}</div>
      <button onClick={() => setLanguage("en")}>Change to English</button>
      <button onClick={() => setLanguage("es")}>Change to Spanish</button>
    </div>
  );
};

describe("LanguageContext", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("provides default language", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("current-language")).toHaveTextContent("pt");
  });

  it("provides translation function", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("translated-text")).toHaveTextContent("Início");
  });

  it("allows language change to English", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("current-language")).toHaveTextContent("pt");
    expect(screen.getByTestId("translated-text")).toHaveTextContent("Início");

    act(() => {
      screen.getByText("Change to English").click();
    });

    expect(screen.getByTestId("current-language")).toHaveTextContent("en");
    expect(screen.getByTestId("translated-text")).toHaveTextContent("Home");
  });

  it("allows language change to Spanish", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("current-language")).toHaveTextContent("pt");

    act(() => {
      screen.getByText("Change to Spanish").click();
    });

    expect(screen.getByTestId("current-language")).toHaveTextContent("es");
    expect(screen.getByTestId("translated-text")).toHaveTextContent("Inicio");
  });

  it("loads language from localStorage on mount", () => {
    localStorage.setItem("portfolio-language", "en");

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("current-language")).toHaveTextContent("en");
    expect(screen.getByTestId("translated-text")).toHaveTextContent("Home");
  });

  it("saves language to localStorage when changed", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    act(() => {
      screen.getByText("Change to English").click();
    });

    expect(localStorage.getItem("portfolio-language")).toBe("en");
  });

  it("ignores invalid language from localStorage", () => {
    localStorage.setItem("portfolio-language", "invalid-lang");

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("current-language")).toHaveTextContent("pt");
  });

  it("handles nested translation keys", () => {
    const NestedTestComponent = () => {
      const { t } = useLanguage();
      return <div data-testid="nested-translation">{t("navigation.home")}</div>;
    };

    render(
      <LanguageProvider>
        <NestedTestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("nested-translation")).toHaveTextContent(
      "Início"
    );
  });

  it("returns key when translation not found", () => {
    const NotFoundTestComponent = () => {
      const { t } = useLanguage();
      return <div data-testid="not-found">{t("nonexistent.key")}</div>;
    };

    render(
      <LanguageProvider>
        <NotFoundTestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("not-found")).toHaveTextContent(
      "nonexistent.key"
    );
  });

  it("handles parameter substitution", () => {
    const ParamTestComponent = () => {
      const { t } = useLanguage();
      return (
        <div data-testid="param-test">{t("test.key", { name: "Test" })}</div>
      );
    };

    render(
      <LanguageProvider>
        <ParamTestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("param-test")).toHaveTextContent("test.key");
  });

  it("throws error when used outside provider", () => {
    // Suppress console.error for this test
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow("useLanguage must be used within a LanguageProvider");

    consoleSpy.mockRestore();
  });

  it("maintains language state across re-renders", () => {
    const { rerender } = render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    act(() => {
      screen.getByText("Change to English").click();
    });

    expect(screen.getByTestId("current-language")).toHaveTextContent("en");

    // Re-render the component
    rerender(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("current-language")).toHaveTextContent("en");
  });
});
