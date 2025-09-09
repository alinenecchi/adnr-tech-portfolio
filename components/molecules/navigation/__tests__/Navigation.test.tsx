import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navigation } from "../index";

const mockItems = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about", active: false },
  { label: "Projects", href: "#projects", active: false },
  { label: "Contact", href: "#contact", active: false },
];

describe("Navigation Component", () => {
  it("renders all navigation items", () => {
    render(<Navigation items={mockItems} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders correct href attributes", () => {
    render(<Navigation items={mockItems} />);

    expect(screen.getByText("Home").closest("a")).toHaveAttribute(
      "href",
      "#home"
    );
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "#about"
    );
    expect(screen.getByText("Projects").closest("a")).toHaveAttribute(
      "href",
      "#projects"
    );
    expect(screen.getByText("Contact").closest("a")).toHaveAttribute(
      "href",
      "#contact"
    );
  });

  it("applies active styling to active item", () => {
    render(<Navigation items={mockItems} />);

    const homeLink = screen.getByText("Home").closest("a");
    const aboutLink = screen.getByText("About").closest("a");

    expect(homeLink).toHaveClass("text-accent-primary", "font-semibold");
    expect(aboutLink).toHaveClass("text-text-secondary");
  });

  it("applies custom className", () => {
    render(<Navigation items={mockItems} className="custom-nav" />);
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("custom-nav");
  });

  it("handles empty items array", () => {
    render(<Navigation items={[]} />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders as nav element", () => {
    render(<Navigation items={mockItems} />);
    const nav = screen.getByRole("navigation");
    expect(nav.tagName).toBe("NAV");
  });
});
