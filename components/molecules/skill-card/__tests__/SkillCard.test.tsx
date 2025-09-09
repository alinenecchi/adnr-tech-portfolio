import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Code, Palette } from "lucide-react";
import { SkillCard } from "../index";
import { LanguageProvider } from "../../../../contexts/LanguageContext";
import { ThemeProvider } from "../../../../contexts/ThemeContext";

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <LanguageProvider>
      <ThemeProvider>
        {ui}
      </ThemeProvider>
    </LanguageProvider>
  );
};

const mockSkill = {
  title: "Frontend",
  icon: Code,
  level: "Avançado" as const,
  tools: ["React", "TypeScript", "Next.js"],
};

const mockDesignSkill = {
  title: "Design",
  icon: Palette,
  level: "Intermediário" as const,
  tools: ["Figma", "Adobe XD"],
};

describe("SkillCard Component", () => {
  it("renders skill title correctly", () => {
    renderWithProviders(<SkillCard {...mockSkill} />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  it("renders skill level correctly", () => {
    renderWithProviders(<SkillCard {...mockSkill} />);
    expect(screen.getByText("Avançado")).toBeInTheDocument();
  });

  it("renders all tools correctly", () => {
    renderWithProviders(<SkillCard {...mockSkill} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
  });

  it("renders icon correctly", () => {
    renderWithProviders(<SkillCard {...mockSkill} />);
    // The icon should be present (lucide-react icons render as SVG)
    const icon = screen
      .getByText("Frontend")
      .parentElement?.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("applies correct level styling for Avançado", () => {
    renderWithProviders(<SkillCard {...mockSkill} />);
    const levelBadge = screen.getByText("Avançado");
    expect(levelBadge).toHaveClass("bg-green-100", "text-green-800");
  });

  it("applies correct level styling for Intermediário", () => {
    renderWithProviders(<SkillCard {...mockDesignSkill} />);
    const levelBadge = screen.getByText("Intermediário");
    expect(levelBadge).toHaveClass("bg-blue-100", "text-blue-800");
  });

  it("applies correct level styling for Iniciante", () => {
    const beginnerSkill = { ...mockSkill, level: "Iniciante" as const };
    render(<SkillCard {...beginnerSkill} />);
    const levelBadge = screen.getByText("Iniciante");
    expect(levelBadge).toHaveClass("bg-yellow-100", "text-yellow-800");
  });

  it("renders different icons for different skills", () => {
    const { rerender } = render(<SkillCard {...mockSkill} />);
    let icon = screen.getByText("Frontend").parentElement?.querySelector("svg");
    expect(icon).toBeInTheDocument();

    rerender(<SkillCard {...mockDesignSkill} />);
    icon = screen.getByText("Design").parentElement?.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("handles empty tools array", () => {
    const skillWithoutTools = { ...mockSkill, tools: [] };
    render(<SkillCard {...skillWithoutTools} />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Avançado")).toBeInTheDocument();
    // Should not render any tool badges
    expect(screen.queryByText("React")).not.toBeInTheDocument();
  });

  it("has correct base structure", () => {
    renderWithProviders(<SkillCard {...mockSkill} />);

    // Check if the main elements are present
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Avançado")).toBeInTheDocument();

    // Check if tools are rendered as badges
    const reactBadge = screen.getByText("React");
    expect(reactBadge).toHaveClass("inline-flex", "items-center", "rounded");
  });

  it("renders all skill levels correctly", () => {
    const levels = ["Iniciante", "Intermediário", "Avançado"] as const;

    levels.forEach((level) => {
      const skill = { ...mockSkill, level };
      const { unmount } = render(<SkillCard {...skill} />);
      expect(screen.getByText(level)).toBeInTheDocument();
      unmount();
    });
  });
});
