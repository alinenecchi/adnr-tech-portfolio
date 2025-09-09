import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Title } from "../index";

describe("Title Component", () => {
  it("renders h1 by default", () => {
    render(<Title>Test Title</Title>);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H1");
  });

  it("renders correct heading level", () => {
    render(<Title level={2}>H2 Title</Title>);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title.tagName).toBe("H2");
  });

  it("renders h3 when level is 3", () => {
    render(<Title level={3}>H3 Title</Title>);
    const title = screen.getByRole("heading", { level: 3 });
    expect(title.tagName).toBe("H3");
  });

  it("applies custom className", () => {
    render(<Title className="custom-title">Styled Title</Title>);
    const title = screen.getByText("Styled Title");
    expect(title).toHaveClass("custom-title");
  });

  it("uses custom variant when provided", () => {
    render(
      <Title variant="h4" level={1}>
        Custom Variant
      </Title>
    );
    const title = screen.getByText("Custom Variant");
    expect(title.tagName).toBe("H4");
  });

  it("renders title content correctly", () => {
    render(<Title level={2}>Complex Title Content</Title>);
    expect(screen.getByText("Complex Title Content")).toBeInTheDocument();
  });

  it("supports all heading levels", () => {
    const levels = [1, 2, 3, 4, 5, 6] as const;
    levels.forEach((level) => {
      render(<Title level={level}>Title Level {level}</Title>);
      const title = screen.getByRole("heading", { level });
      expect(title.tagName).toBe(`H${level}`);
    });
  });
});
