import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroSection } from "../index";
import { LanguageProvider } from "../../../../contexts/LanguageContext";

// Mock Next.js Link component
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock intersection observer hook
jest.mock("../../../../hooks/useIntersectionObserver", () => ({
  useIntersectionObserver: () => [React.createRef(), true],
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
};

describe("HeroSection Component", () => {
  const defaultProps = {
    isDarkMode: false,
  };

  it("renders hero section with name and title", () => {
    renderWithProviders(<HeroSection {...defaultProps} />);

    expect(screen.getByText(/Olá, eu sou/)).toBeInTheDocument();
    expect(screen.getByText("Aline Dias Necchi Ribeiro")).toBeInTheDocument();
    expect(screen.getByText(/Desenvolvedora Full Stack/)).toBeInTheDocument();
  });

  it("displays hero description", () => {
    renderWithProviders(<HeroSection {...defaultProps} />);
    expect(screen.getByText(/Especializada em React/i)).toBeInTheDocument();
  });

  it("shows tech badges", () => {
    renderWithProviders(<HeroSection {...defaultProps} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("renders profile image", () => {
    renderWithProviders(<HeroSection {...defaultProps} />);
    const image = screen.getByAltText("Aline Dias Necchi Ribeiro");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/personal/profile.png");
  });

  it("displays action buttons", () => {
    renderWithProviders(<HeroSection {...defaultProps} />);

    expect(screen.getByText("Ver Projetos")).toBeInTheDocument();
    expect(screen.getByText("Baixar Currículo")).toBeInTheDocument();
  });

  it("has correct button links", () => {
    renderWithProviders(<HeroSection {...defaultProps} />);

    const projectsLink = screen.getByText("Ver Projetos").closest("a");
    const resumeLink = screen.getByText("Baixar Currículo").closest("a");

    expect(projectsLink).toHaveAttribute("href", "#projects");
    expect(resumeLink).toHaveAttribute("href", "#contact");
  });

  it("applies custom className", () => {
    const { container } = renderWithProviders(
      <HeroSection {...defaultProps} className="custom-hero" />
    );
    expect(container.firstChild).toHaveClass("custom-hero");
  });

  it("adapts styling for dark mode", () => {
    renderWithProviders(<HeroSection isDarkMode={true} />);
    // Component should render without errors in dark mode
    expect(screen.getByText("Aline Dias Necchi Ribeiro")).toBeInTheDocument();
  });
});
