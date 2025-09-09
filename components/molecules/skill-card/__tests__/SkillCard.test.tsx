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
  level: "advanced" as const,
  tools: ["React", "TypeScript", "Next.js"],
};

const mockDesignSkill = {
  title: "Design",
  icon: Palette,
  level: "intermediate" as const,
  tools: ["Figma", "Adobe XD"],
};

describe("SkillCard Component", () => {
  it("renders skill title correctly", () => {
    renderWithProviders(<SkillCard {...mockSkill} />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  it("renders skill level correctly", () => {
    renderWithProviders(<SkillCard {...mockSkill} />);
    expect(screen.getByText("Avançado")).toBeInTheDocument(); // Portuguese translation for "advanced"
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

  it("applies correct level styling for advanced", () => {
    renderWithProviders(<SkillCard {...mockSkill} />);
    const levelBadge = screen.getByText("Avançado"); // Portuguese translation
    expect(levelBadge).toHaveClass("bg-green-100", "text-green-800");
  });

  it("applies correct level styling for intermediate", () => {
    renderWithProviders(<SkillCard {...mockDesignSkill} />);
    const levelBadge = screen.getByText("Intermediário"); // Portuguese translation
    expect(levelBadge).toHaveClass("bg-blue-100", "text-blue-800");
  });

  it("applies correct level styling for beginner", () => {
    const beginnerSkill = { ...mockSkill, level: "beginner" as const };
    renderWithProviders(<SkillCard {...beginnerSkill} />);
    const levelBadge = screen.getByText("Iniciante"); // Portuguese translation
    expect(levelBadge).toHaveClass("bg-yellow-100", "text-yellow-800");
  });

  it("renders different icons for different skills", () => {
    const { rerender } = renderWithProviders(<SkillCard {...mockSkill} />);
    let icon = screen.getByText("Frontend").parentElement?.querySelector("svg");
    expect(icon).toBeInTheDocument();

    rerender(
      <LanguageProvider>
        <ThemeProvider>
          <SkillCard {...mockDesignSkill} />
        </ThemeProvider>
      </LanguageProvider>
    );
    icon = screen.getByText("Design").parentElement?.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("handles empty tools array", () => {
    const skillWithoutTools = { ...mockSkill, tools: [] };
    renderWithProviders(<SkillCard {...skillWithoutTools} />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Avançado")).toBeInTheDocument(); // Portuguese translation
    // Should not render any tool badges
    expect(screen.queryByText("React")).not.toBeInTheDocument();
  });

  it("has correct base structure", () => {
    renderWithProviders(<SkillCard {...mockSkill} />);

    // Check if the main elements are present
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Avançado")).toBeInTheDocument(); // Portuguese translation

    // Check if tools are rendered as badges
    const reactBadge = screen.getByText("React");
    expect(reactBadge).toHaveClass("inline-flex", "items-center", "rounded");
  });

  it("renders all skill levels correctly", () => {
    const levels = [
      { key: "beginner", text: "Iniciante" },
      { key: "intermediate", text: "Intermediário" }, 
      { key: "advanced", text: "Avançado" }
    ];

    levels.forEach(({ key, text }) => {
      const skill = { ...mockSkill, level: key as const };
      const { unmount } = renderWithProviders(<SkillCard {...skill} />);
      expect(screen.getByText(text)).toBeInTheDocument(); // Check Portuguese translation
      unmount();
    });
  });
});
