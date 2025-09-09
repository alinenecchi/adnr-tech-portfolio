import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "../index";
import { LanguageProvider } from "../../../../contexts/LanguageContext";
import { ThemeProvider } from "../../../../contexts/ThemeContext";

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <LanguageProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </LanguageProvider>
  );
};

describe("Footer Component", () => {
  it("renders footer with logo", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    // Logo should be present (SVG element)
    expect(document.querySelector("svg")).toBeInTheDocument();
  });

  it("displays copyright information", () => {
    renderWithProviders(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${currentYear}`))
    ).toBeInTheDocument();
    expect(screen.getByText(/Aline Dias Necchi Ribeiro/)).toBeInTheDocument();
  });

  it("shows social media links", () => {
    renderWithProviders(<Footer />);

    const githubLink = screen.getByLabelText("GitHub");
    const linkedinLink = screen.getByLabelText("LinkedIn");
    const whatsappLink = screen.getByLabelText("WhatsApp");

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(whatsappLink).toBeInTheDocument();
  });

  it("has correct social media URLs", () => {
    renderWithProviders(<Footer />);

    expect(screen.getByLabelText("GitHub")).toHaveAttribute(
      "href",
      "https://github.com/alinenecchi"
    );
    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/aline-necchi/"
    );
    expect(screen.getByLabelText("WhatsApp")).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me")
    );
  });

  it("opens social links in new tab", () => {
    renderWithProviders(<Footer />);

    const socialLinks = screen.getAllByRole("link");
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("applies custom className", () => {
    renderWithProviders(<Footer className="custom-footer" />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("custom-footer");
  });

  it("renders as footer element", () => {
    renderWithProviders(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer.tagName).toBe("FOOTER");
  });
});
