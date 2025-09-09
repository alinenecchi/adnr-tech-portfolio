import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProjectsSection } from "../index";
import { LanguageProvider } from "../../../../contexts/LanguageContext";

// Mock the theme context
jest.mock("../../../../contexts/ThemeContext", () => ({
  useTheme: () => ({
    theme: "classic-modern",
  }),
}));

// Mock intersection observer hook
jest.mock("../../../../hooks/useIntersectionObserver", () => ({
  useIntersectionObserver: () => [React.createRef(), true],
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
};

describe("ProjectsSection Component", () => {
  it("renders projects section", () => {
    renderWithProviders(<ProjectsSection />);
    expect(
      screen.getByText(
        "Uma seleção dos meus trabalhos mais recentes e impactantes"
      )
    ).toBeInTheDocument();
  });

  it("displays featured projects", () => {
    renderWithProviders(<ProjectsSection />);

    expect(screen.getByText("Portal Toyota Brasil")).toBeInTheDocument();
    expect(screen.getByText("Descarte Certo")).toBeInTheDocument();
  });

  it("shows project images", () => {
    renderWithProviders(<ProjectsSection />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);

    // Check Toyota Brasil image
    const toyotaImage = screen.getByAltText("Portal Toyota Brasil");
    expect(toyotaImage).toBeInTheDocument();
  });

  it("displays project technologies", () => {
    renderWithProviders(<ProjectsSection />);

    expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Next.js").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
  });

  it("shows visit site buttons", () => {
    renderWithProviders(<ProjectsSection />);
    const visitButtons = screen.getAllByText("Ir para o Site");
    expect(visitButtons.length).toBeGreaterThan(0);
  });

  it("displays GitHub link for Descarte Certo", () => {
    renderWithProviders(<ProjectsSection />);
    expect(screen.getByText("Código")).toBeInTheDocument();
  });

  it("shows more projects link", () => {
    renderWithProviders(<ProjectsSection />);
    expect(screen.getByText("Quer ver mais projetos?")).toBeInTheDocument();
    expect(screen.getByText("Visite meu GitHub →")).toBeInTheDocument();
  });

  it("has correct GitHub profile link", () => {
    renderWithProviders(<ProjectsSection />);
    const githubLink = screen.getByText("Visite meu GitHub →").closest("a");
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/alinenecchi"
    );
  });

  it("applies custom className", () => {
    const { container } = renderWithProviders(
      <ProjectsSection className="custom-projects" />
    );
    expect(container.firstChild).toHaveClass("custom-projects");
  });
});
