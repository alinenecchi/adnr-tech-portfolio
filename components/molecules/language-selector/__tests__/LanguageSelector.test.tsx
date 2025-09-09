import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LanguageSelector } from "../index";
import { LanguageProvider } from "../../../../contexts/LanguageContext";

// Mock the theme context
jest.mock("../../../../contexts/ThemeContext", () => ({
  useTheme: () => ({
    theme: "classic-modern",
  }),
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
};

describe("LanguageSelector Component", () => {
  it("renders language selector", () => {
    renderWithProviders(<LanguageSelector />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("shows current language", () => {
    renderWithProviders(<LanguageSelector />);
    // Should show Portuguese by default
    expect(screen.getByText("🇧🇷")).toBeInTheDocument();
  });

  it("opens dropdown when clicked", () => {
    renderWithProviders(<LanguageSelector />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getAllByText("Português").length).toBeGreaterThan(0);
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Español")).toBeInTheDocument();
  });

  it("changes language when option is selected", () => {
    renderWithProviders(<LanguageSelector />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    const englishOption = screen.getByText("English");
    fireEvent.click(englishOption);

    expect(screen.getByText("🇺🇸")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    renderWithProviders(<LanguageSelector className="custom-selector" />);
    const button = screen.getByRole("button");
    expect(button.parentElement).toHaveClass("custom-selector");
  });
});
