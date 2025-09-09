import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContactSection } from "../index";
import { LanguageProvider } from "../../../../contexts/LanguageContext";
import { ThemeProvider } from "../../../../contexts/ThemeContext";

// Mock intersection observer hook
jest.mock("../../../../hooks/useIntersectionObserver", () => ({
  useIntersectionObserver: () => [React.createRef(), true],
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <LanguageProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </LanguageProvider>
  );
};

describe("ContactSection Component", () => {
  it("renders contact section", () => {
    renderWithProviders(<ContactSection />);
    expect(screen.getByText("Informações de Contato")).toBeInTheDocument();
  });

  it("displays contact information", () => {
    renderWithProviders(<ContactSection />);

    expect(screen.getByText("E-mail")).toBeInTheDocument();
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Localização")).toBeInTheDocument();
  });

  it("shows correct contact details", () => {
    renderWithProviders(<ContactSection />);

    expect(screen.getByText("+55 (51) 99340-9405")).toBeInTheDocument();
    expect(screen.getByText("Porto Alegre, RS")).toBeInTheDocument();
  });

  it("renders social media section", () => {
    renderWithProviders(<ContactSection />);
    expect(screen.getByText("Redes Sociais")).toBeInTheDocument();
  });

  it("displays social media links", () => {
    renderWithProviders(<ContactSection />);

    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it("shows call to action section", () => {
    renderWithProviders(<ContactSection />);
    expect(
      screen.getByText("Pronta para seu próximo projeto?")
    ).toBeInTheDocument();
  });

  it("renders WhatsApp action button", () => {
    renderWithProviders(<ContactSection />);
    const whatsappButton = screen.getByText("Conversar no WhatsApp");
    expect(whatsappButton).toBeInTheDocument();
    expect(whatsappButton.closest("a")).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me")
    );
  });

  it("applies custom className", () => {
    const { container } = renderWithProviders(
      <ContactSection className="custom-contact" />
    );
    expect(container.firstChild).toHaveClass("custom-contact");
  });

  it("has correct email link", () => {
    renderWithProviders(<ContactSection />);
    const emailLink = screen.getByText("E-mail").closest("a");
    expect(emailLink).toHaveAttribute("href", "mailto:alinencchi@gmail.com");
  });
});
