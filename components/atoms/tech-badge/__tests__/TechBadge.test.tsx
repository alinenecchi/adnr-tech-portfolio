import React from "react";
import { render, screen } from "@testing-library/react";
import { TechBadge } from "../index";

describe("TechBadge Component", () => {
  it("renders tech name correctly", () => {
    render(<TechBadge tech="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("applies custom colors for known technologies", () => {
    render(<TechBadge tech="React" />);
    const badge = screen.getByText("React");
    expect(badge).toHaveClass("bg-blue-100", "text-blue-800");
  });

  it("applies default styling for unknown technologies", () => {
    render(<TechBadge tech="UnknownTech" />);
    const badge = screen.getByText("UnknownTech");
    expect(badge).toHaveClass("border", "border-border");
  });

  it("renders different technologies with appropriate colors", () => {
    const { rerender } = render(<TechBadge tech="TypeScript" />);
    expect(screen.getByText("TypeScript")).toHaveClass(
      "bg-purple-100",
      "text-purple-800"
    );

    rerender(<TechBadge tech="Node.js" />);
    expect(screen.getByText("Node.js")).toHaveClass(
      "bg-green-100",
      "text-green-800"
    );

    rerender(<TechBadge tech="JavaScript" />);
    expect(screen.getByText("JavaScript")).toHaveClass(
      "bg-yellow-100",
      "text-yellow-800"
    );
  });

  it("has correct base classes", () => {
    render(<TechBadge tech="React" />);
    const badge = screen.getByText("React");
    expect(badge).toHaveClass(
      "inline-flex",
      "items-center",
      "px-2.5",
      "py-0.5",
      "rounded-full",
      "text-xs",
      "font-medium",
      "transition-colors"
    );
  });

  it("handles empty tech name", () => {
    const { container } = render(<TechBadge tech="" />);
    const badge = container.querySelector("span");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("");
  });
});
