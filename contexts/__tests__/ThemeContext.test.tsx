import React from "react";
import { render, screen, act } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../ThemeContext";

// Test component to access theme context
const TestComponent = () => {
  const { theme, setTheme, themeConfig } = useTheme();

  return (
    <div>
      <div data-testid="current-theme">{theme}</div>
      <div data-testid="theme-name">{themeConfig.name}</div>
      <button onClick={() => setTheme("clean-minimal")}>Change Theme</button>
    </div>
  );
};

describe("ThemeContext", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("provides default theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("current-theme")).toHaveTextContent(
      "classic-modern"
    );
  });

  it("provides theme configuration", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-name")).toHaveTextContent(
      "themes.classicModern.name"
    );
  });

  it("allows theme change", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("current-theme")).toHaveTextContent(
      "classic-modern"
    );

    act(() => {
      screen.getByText("Change Theme").click();
    });

    expect(screen.getByTestId("current-theme")).toHaveTextContent(
      "clean-minimal"
    );
  });

  it("loads theme from localStorage on mount", () => {
    localStorage.setItem("portfolio-theme", "tech-futuristic");

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("current-theme")).toHaveTextContent(
      "tech-futuristic"
    );
  });

  it("saves theme to localStorage when changed", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    act(() => {
      screen.getByText("Change Theme").click();
    });

    expect(localStorage.getItem("portfolio-theme")).toBe("clean-minimal");
  });

  it("ignores invalid theme from localStorage", () => {
    localStorage.setItem("portfolio-theme", "invalid-theme");

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("current-theme")).toHaveTextContent(
      "classic-modern"
    );
  });

  it("applies CSS variables to document root", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const root = document.documentElement;
    expect(
      root.style.getPropertyValue("--color-background-primary")
    ).toBeTruthy();
    expect(root.style.getPropertyValue("--color-text-primary")).toBeTruthy();
  });

  it("adds theme class to body", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.body).toHaveClass("theme-classic-modern");
  });

  it("changes body class when theme changes", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.body).toHaveClass("theme-classic-modern");

    act(() => {
      screen.getByText("Change Theme").click();
    });

    expect(document.body).toHaveClass("theme-clean-minimal");
    expect(document.body).not.toHaveClass("theme-classic-modern");
  });

  it("throws error when used outside provider", () => {
    // Suppress console.error for this test
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow("useTheme must be used within a ThemeProvider");

    consoleSpy.mockRestore();
  });
});

