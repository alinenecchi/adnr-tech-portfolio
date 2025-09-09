import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "../index";

describe("Text Component", () => {
  it("renders text content correctly", () => {
    render(<Text>Test text content</Text>);
    expect(screen.getByText("Test text content")).toBeInTheDocument();
  });

  it("applies body variant by default", () => {
    render(<Text>Default text</Text>);
    const text = screen.getByText("Default text");
    expect(text).toHaveClass("text-base");
  });

  it("applies caption variant styling", () => {
    render(<Text variant="caption">Caption text</Text>);
    const text = screen.getByText("Caption text");
    expect(text).toHaveClass("text-sm");
  });

  it("applies small variant styling", () => {
    render(<Text variant="small">Small text</Text>);
    const text = screen.getByText("Small text");
    expect(text).toHaveClass("text-xs");
  });

  it("applies lead variant styling", () => {
    render(<Text variant="lead">Lead text</Text>);
    const text = screen.getByText("Lead text");
    expect(text).toHaveClass("text-lg");
  });

  it("applies custom className", () => {
    render(<Text className="custom-text">Custom styled text</Text>);
    const text = screen.getByText("Custom styled text");
    expect(text).toHaveClass("custom-text");
  });

  it("renders as p element by default", () => {
    render(<Text>Paragraph text</Text>);
    const text = screen.getByText("Paragraph text");
    expect(text.tagName).toBe("P");
  });
});
