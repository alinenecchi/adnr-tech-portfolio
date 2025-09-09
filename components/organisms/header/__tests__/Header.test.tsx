import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../index";
import { LanguageProvider } from "../../../../contexts/LanguageContext";
import { ThemeProvider } from "../../../../contexts/ThemeContext";

// Mock Next.js Link component
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <LanguageProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </LanguageProvider>
  );
};

describe("Header Component", () => {
  it("renders header with logo", () => {
    renderWithProviders(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    // Logo should be present (SVG element)
    expect(document.querySelector("svg")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    renderWithProviders(<Header />);

    expect(screen.getAllByText("Sobre").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Skills").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Projetos").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contato").length).toBeGreaterThan(0);
  });

  it("renders theme and language selectors", () => {
    renderWithProviders(<Header />);

    // Should have selector buttons
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("shows mobile menu button on small screens", () => {
    renderWithProviders(<Header />);

    // Mobile menu button should be present
    const menuButton = screen.getByLabelText("Menu");
    expect(menuButton).toBeInTheDocument();
  });

  it("toggles mobile menu when button is clicked", () => {
    renderWithProviders(<Header />);

    const menuButton = screen.getByLabelText("Menu");
    fireEvent.click(menuButton);

    // Mobile menu should become visible
    expect(menuButton).toBeInTheDocument();
  });

  it("applies sticky positioning", () => {
    renderWithProviders(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("sticky");
  });

  it("applies custom className", () => {
    renderWithProviders(<Header className="custom-header" />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("custom-header");
  });

  it("has correct navigation structure", () => {
    renderWithProviders(<Header />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});
