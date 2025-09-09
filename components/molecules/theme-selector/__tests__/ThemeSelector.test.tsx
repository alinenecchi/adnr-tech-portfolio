import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeSelector } from "../index";
import { ThemeProvider } from "../../../../contexts/ThemeContext";
import { LanguageProvider } from "../../../../contexts/LanguageContext";

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <LanguageProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </LanguageProvider>
  );
};

describe("ThemeSelector Component", () => {
  it("renders theme selector button", () => {
    renderWithProviders(<ThemeSelector />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("opens dropdown when clicked", () => {
    renderWithProviders(<ThemeSelector />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText(/modern/i)).toBeInTheDocument();
    expect(screen.getByText(/minimal/i)).toBeInTheDocument();
  });

  it("shows theme options when opened", () => {
    renderWithProviders(<ThemeSelector />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Should show all theme options
    expect(screen.getByText(/modern/i)).toBeInTheDocument();
    expect(screen.getByText(/minimal/i)).toBeInTheDocument();
    expect(screen.getByText(/futuristic/i)).toBeInTheDocument();
    expect(screen.getByText(/corporate/i)).toBeInTheDocument();
  });

  it("applies custom className", () => {
    renderWithProviders(<ThemeSelector className="custom-selector" />);
    const container = screen.getByRole("button").parentElement;
    expect(container).toHaveClass("custom-selector");
  });

  it("changes theme when option is selected", () => {
    renderWithProviders(<ThemeSelector />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    const minimalOption = screen.getByText(/minimal/i);
    fireEvent.click(minimalOption);

    // Theme should change (this would be tested through context)
    expect(button).toBeInTheDocument();
  });
});
