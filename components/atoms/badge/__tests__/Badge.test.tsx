import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Badge } from "../index";

describe("Badge Component", () => {
  it("renders children correctly", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies default variant styling", () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText("Default Badge");
    expect(badge).toHaveClass("bg-primary");
  });

  it("applies outline variant styling", () => {
    render(<Badge variant="outline">Outline Badge</Badge>);
    const badge = screen.getByText("Outline Badge");
    expect(badge).toHaveClass("border");
  });

  it("applies secondary variant styling", () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>);
    const badge = screen.getByText("Secondary Badge");
    expect(badge).toHaveClass("bg-secondary");
  });

  it("applies custom className", () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badge = screen.getByText("Custom Badge");
    expect(badge).toHaveClass("custom-class");
  });

  it("renders with custom style prop", () => {
    render(<Badge style={{ backgroundColor: "red" }}>Styled Badge</Badge>);
    const badge = screen.getByText("Styled Badge");
    expect(badge).toHaveStyle("background-color: red");
  });
});
