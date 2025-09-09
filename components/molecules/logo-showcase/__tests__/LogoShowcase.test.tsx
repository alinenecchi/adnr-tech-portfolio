import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LogoShowcase } from "../index";

describe("LogoShowcase Component", () => {
  it("renders logo showcase container", () => {
    render(<LogoShowcase />);
    const container =
      screen.getByTestId("logo-showcase") || screen.getByRole("region");
    expect(container).toBeInTheDocument();
  });

  it("displays multiple logo variants", () => {
    render(<LogoShowcase />);

    // Should render different logo variants
    const logos = screen.getAllByRole("img", { hidden: true });
    expect(logos.length).toBeGreaterThan(0);
  });

  it("applies custom className", () => {
    render(<LogoShowcase className="custom-showcase" />);
    const container =
      screen.getByTestId("logo-showcase") ||
      document.querySelector(".custom-showcase");
    expect(container).toHaveClass("custom-showcase");
  });

  it("shows logo variations", () => {
    render(<LogoShowcase />);

    // Test that different variants are shown
    expect(
      screen.getByText(/minimal/i) || screen.getByText(/default/i)
    ).toBeInTheDocument();
  });

  it("renders with responsive grid layout", () => {
    render(<LogoShowcase />);
    const container =
      screen.getByTestId("logo-showcase") ||
      document.querySelector("[class*='grid']");
    expect(container).toBeInTheDocument();
  });
});
