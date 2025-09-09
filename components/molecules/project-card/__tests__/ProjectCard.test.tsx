import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProjectCard } from "../index";
import { LanguageProvider } from "../../../../contexts/LanguageContext";

// Mock the theme context
jest.mock("../../../../contexts/ThemeContext", () => ({
  useTheme: () => ({
    theme: "classic-modern",
  }),
}));

// Helper function to render with providers
const renderWithProviders = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
};

const mockProject = {
  title: "Test Project",
  description: "This is a test project description",
  image: "https://example.com/image.jpg",
  technologies: ["React", "TypeScript", "Node.js"],
  demoUrl: "https://demo.example.com",
  githubUrl: "https://github.com/example/project",
  featured: false,
};

describe("ProjectCard Component", () => {
  it("renders project title correctly", () => {
    renderWithProviders(<ProjectCard {...mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders project description correctly", () => {
    renderWithProviders(<ProjectCard {...mockProject} />);
    expect(
      screen.getByText("This is a test project description")
    ).toBeInTheDocument();
  });

  it("renders project image with correct alt text", () => {
    renderWithProviders(<ProjectCard {...mockProject} />);
    const image = screen.getByAltText("Test Project");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("renders technology badges", () => {
    renderWithProviders(<ProjectCard {...mockProject} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("renders demo button when demoUrl is provided", () => {
    renderWithProviders(<ProjectCard {...mockProject} />);
    const demoButton = screen.getByRole("link", { name: /ir para o site/i });
    expect(demoButton).toBeInTheDocument();
    expect(demoButton).toHaveAttribute("href", "https://demo.example.com");
    expect(demoButton).toHaveAttribute("target", "_blank");
  });

  it("renders github button when githubUrl is provided", () => {
    renderWithProviders(<ProjectCard {...mockProject} />);
    const githubButton = screen.getByRole("link", { name: /código/i });
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toHaveAttribute(
      "href",
      "https://github.com/example/project"
    );
    expect(githubButton).toHaveAttribute("target", "_blank");
  });

  it("does not render demo button when demoUrl is not provided", () => {
    const projectWithoutDemo = { ...mockProject, demoUrl: undefined };
    renderWithProviders(<ProjectCard {...projectWithoutDemo} />);
    expect(
      screen.queryByRole("link", { name: /ir para o site/i })
    ).not.toBeInTheDocument();
  });

  it("does not render github button when githubUrl is not provided", () => {
    const projectWithoutGithub = { ...mockProject, githubUrl: undefined };
    renderWithProviders(<ProjectCard {...projectWithoutGithub} />);
    expect(
      screen.queryByRole("link", { name: /código/i })
    ).not.toBeInTheDocument();
  });

  it("applies featured styling when featured is true", () => {
    const featuredProject = { ...mockProject, featured: true };
    const { container } = renderWithProviders(
      <ProjectCard {...featuredProject} />
    );
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("md:col-span-2", "lg:col-span-2");
  });

  it("renders external link icon in demo button", () => {
    renderWithProviders(<ProjectCard {...mockProject} />);
    const demoButton = screen.getByRole("link", { name: /ir para o site/i });
    // The icon should be present (lucide-react icons render as SVG)
    expect(demoButton.querySelector("svg")).toBeInTheDocument();
  });

  it("renders github icon in github button", () => {
    renderWithProviders(<ProjectCard {...mockProject} />);
    const githubButton = screen.getByRole("link", { name: /código/i });
    // The icon should be present (lucide-react icons render as SVG)
    expect(githubButton.querySelector("svg")).toBeInTheDocument();
  });

  it("handles empty technologies array", () => {
    const projectWithoutTechs = { ...mockProject, technologies: [] };
    renderWithProviders(<ProjectCard {...projectWithoutTechs} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    // Should not render any tech badges
    expect(screen.queryByText("React")).not.toBeInTheDocument();
  });
});
