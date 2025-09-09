import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Divider } from "../index";

describe("Divider Component", () => {
  it("renders horizontal divider by default", () => {
    render(<Divider />);
    const divider = screen.getByRole("separator");
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass("border-t");
  });

  it("renders vertical divider when orientation is vertical", () => {
    render(<Divider orientation="vertical" />);
    const divider = screen.getByRole("separator");
    expect(divider).toHaveClass("border-l");
  });

  it("applies custom className", () => {
    render(<Divider className="custom-divider" />);
    const divider = screen.getByRole("separator");
    expect(divider).toHaveClass("custom-divider");
  });

  it("has correct aria-orientation for vertical divider", () => {
    render(<Divider orientation="vertical" />);
    const divider = screen.getByRole("separator");
    expect(divider).toHaveAttribute("aria-orientation", "vertical");
  });

  it("has correct aria-orientation for horizontal divider", () => {
    render(<Divider orientation="horizontal" />);
    const divider = screen.getByRole("separator");
    expect(divider).toHaveAttribute("aria-orientation", "horizontal");
  });
});
