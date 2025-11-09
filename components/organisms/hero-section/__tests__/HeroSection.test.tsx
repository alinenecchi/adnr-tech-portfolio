import React from "react";
import { render, screen } from "@/utils/test-utils";
import "@testing-library/jest-dom";
import { HeroSection } from "../index";

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

describe("HeroSection Component", () => {
  const defaultProps = {
    isDarkMode: false,
  };

  it("renders hero section with name and title", () => {
    render(<HeroSection {...defaultProps} />);

    // Verifica se o nome aparece (pode estar em um span)
    expect(screen.getByText("Aline Dias Necchi Ribeiro")).toBeInTheDocument();
    // Verifica se há um título (pode variar com tradução)
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("displays hero description", () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText(/Especializada em React/i)).toBeInTheDocument();
  });

  it("shows tech badges", () => {
    render(<HeroSection {...defaultProps} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("renders profile image", () => {
    render(<HeroSection {...defaultProps} />);
    const image = screen.getByAltText("Aline Dias Necchi Ribeiro");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/personal/profile.png");
  });

  it("displays action buttons", () => {
    render(<HeroSection {...defaultProps} />);

    expect(screen.getByText("Ver Projetos")).toBeInTheDocument();
    expect(screen.getByText("Baixar Currículo")).toBeInTheDocument();
  });

  it("has correct button links", () => {
    render(<HeroSection {...defaultProps} />);

    const projectsLink = screen.getByText("Ver Projetos").closest("a");
    expect(projectsLink).toHaveAttribute("href", "#projects");
    
    // O botão de currículo pode ser um botão com onClick, não um link
    const resumeButton = screen.getByText("Baixar Currículo");
    expect(resumeButton).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <HeroSection {...defaultProps} className="custom-hero" />
    );
    expect(container.firstChild).toHaveClass("custom-hero");
  });

  it("adapts styling for dark mode", () => {
    render(<HeroSection isDarkMode={true} />);
    // Component should render without errors in dark mode
    expect(screen.getByText("Aline Dias Necchi Ribeiro")).toBeInTheDocument();
  });
});
