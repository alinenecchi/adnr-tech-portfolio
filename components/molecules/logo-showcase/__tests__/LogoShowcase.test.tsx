import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LogoShowcase } from "../index";

describe("LogoShowcase Component", () => {
  it("renders logo showcase container", () => {
    const { container } = render(<LogoShowcase />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("displays logo section title", () => {
    render(<LogoShowcase />);
    expect(screen.getByText("Variações do Logo ADNR Tech")).toBeInTheDocument();
  });

  it("shows logo variants", () => {
    render(<LogoShowcase />);
    expect(screen.getByText("Logo Completo")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<LogoShowcase className="custom-showcase" />);
    expect(container.firstChild).toHaveClass("custom-showcase");
  });

  it("renders with grid layout", () => {
    render(<LogoShowcase />);
    const gridContainer = document.querySelector("[class*='grid']");
    expect(gridContainer).toBeInTheDocument();
  });
});
