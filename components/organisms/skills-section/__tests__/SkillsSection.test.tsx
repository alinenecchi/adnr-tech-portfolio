import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SkillsSection } from "../index";
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

describe("SkillsSection Component", () => {
  it("renders skills section", () => {
    renderWithProviders(<SkillsSection />);
    expect(
      screen.getByText(
        "Tecnologias e ferramentas que domino para criar soluções completas"
      )
    ).toBeInTheDocument();
  });

  it("displays skill categories", () => {
    renderWithProviders(<SkillsSection />);

    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Cloud & DevOps")).toBeInTheDocument();
    expect(screen.getByText("Databases")).toBeInTheDocument();
    expect(screen.getByText("Mobile")).toBeInTheDocument();
    expect(screen.getByText("Design & UX")).toBeInTheDocument();
  });

  it("shows skill levels", () => {
    renderWithProviders(<SkillsSection />);

    expect(screen.getByText("Avançado")).toBeInTheDocument();
    expect(screen.getAllByText("Intermediário")).toHaveLength(5); // 5 categories with intermediate level
  });

  it("displays additional skills section", () => {
    renderWithProviders(<SkillsSection />);
    expect(screen.getByText("Outras Competências")).toBeInTheDocument();
  });

  it("shows methodology skills", () => {
    renderWithProviders(<SkillsSection />);
    expect(screen.getByText("Metodologias")).toBeInTheDocument();
    expect(
      screen.getByText("Scrum, Kanban, Clean Code, TDD")
    ).toBeInTheDocument();
  });

  it("displays versioning skills", () => {
    renderWithProviders(<SkillsSection />);
    expect(screen.getByText("Versionamento")).toBeInTheDocument();
    expect(
      screen.getByText("Git, GitHub, GitLab, Git Flow")
    ).toBeInTheDocument();
  });

  it("shows soft skills", () => {
    renderWithProviders(<SkillsSection />);
    expect(screen.getByText("Soft Skills")).toBeInTheDocument();
    expect(
      screen.getByText("Comunicação, Trabalho em equipe, Liderança")
    ).toBeInTheDocument();
  });

  it("displays language skills", () => {
    renderWithProviders(<SkillsSection />);
    expect(screen.getByText("Idiomas")).toBeInTheDocument();
    expect(
      screen.getByText("Português (Nativo), Inglês (Intermediário)")
    ).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = renderWithProviders(
      <SkillsSection className="custom-skills" />
    );
    expect(container.firstChild).toHaveClass("custom-skills");
  });
});
