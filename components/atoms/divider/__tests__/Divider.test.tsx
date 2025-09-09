import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Divider } from "../index";

describe("Divider Component", () => {
  it("renders horizontal divider by default", () => {
    const { container } = render(<Divider />);
    const divider = container.firstChild;
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass("w-full");
  });

  it("renders vertical divider when orientation is vertical", () => {
    const { container } = render(<Divider orientation="vertical" />);
    const divider = container.firstChild;
    expect(divider).toHaveClass("h-full");
  });

  it("applies custom className", () => {
    const { container } = render(<Divider className="custom-divider" />);
    const divider = container.firstChild;
    expect(divider).toHaveClass("custom-divider");
  });

  it("renders as div element", () => {
    const { container } = render(<Divider />);
    const divider = container.firstChild as HTMLElement;
    expect(divider.tagName).toBe("DIV");
  });
});
