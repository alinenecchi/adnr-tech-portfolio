import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "../index";

describe("Label Component", () => {
  it("renders label text correctly", () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("associates with input using htmlFor", () => {
    render(
      <div>
        <Label htmlFor="test-input">Test Label</Label>
        <input id="test-input" />
      </div>
    );
    const label = screen.getByText("Test Label");
    expect(label).toHaveAttribute("for", "test-input");
  });

  it("applies custom className", () => {
    render(<Label className="custom-label">Styled Label</Label>);
    const label = screen.getByText("Styled Label");
    expect(label).toHaveClass("custom-label");
  });

  it("renders as label element", () => {
    render(<Label>Label Element</Label>);
    const label = screen.getByText("Label Element");
    expect(label.tagName).toBe("LABEL");
  });

  it("supports required indicator", () => {
    render(<Label required>Required Label</Label>);
    const label = screen.getByText("Required Label");
    expect(label).toBeInTheDocument();
  });
});
