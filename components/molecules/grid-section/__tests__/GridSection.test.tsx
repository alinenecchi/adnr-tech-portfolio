import React from "react";
import { render, screen } from "@testing-library/react";
import { GridSection } from "../index";

describe("GridSection Component", () => {
  it("renders section with correct id", () => {
    render(
      <GridSection title="Test Section" id="test-section">
        <div>Test content</div>
      </GridSection>
    );

    const section = document.getElementById("test-section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "test-section");
  });

  it("renders title correctly", () => {
    render(
      <GridSection title="Test Section" id="test-section">
        <div>Test content</div>
      </GridSection>
    );

    expect(screen.getByText("Test Section")).toBeInTheDocument();
  });

  it("renders title with accent dot", () => {
    render(
      <GridSection title="Test Section" id="test-section">
        <div>Test content</div>
      </GridSection>
    );

    expect(screen.getByText(".")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <GridSection title="Test Section" id="test-section">
        <div>Test content</div>
      </GridSection>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <GridSection
        title="Test Section"
        id="test-section"
        className="custom-class"
      >
        <div>Test content</div>
      </GridSection>
    );

    const section = document.getElementById("test-section");
    expect(section).toHaveClass("custom-class");
  });

  it("has correct base classes", () => {
    render(
      <GridSection title="Test Section" id="test-section">
        <div>Test content</div>
      </GridSection>
    );

    const section = document.getElementById("test-section");
    expect(section).toHaveClass("py-20", "md:py-28", "section-animate");
  });

  it("renders title with correct heading level", () => {
    render(
      <GridSection title="Test Section" id="test-section">
        <div>Test content</div>
      </GridSection>
    );

    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Test Section");
  });

  it("has correct title styling classes", () => {
    render(
      <GridSection title="Test Section" id="test-section">
        <div>Test content</div>
      </GridSection>
    );

    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toHaveClass(
      "text-3xl",
      "md:text-4xl",
      "font-bold",
      "text-center",
      "mb-16"
    );
  });

  it("renders multiple children correctly", () => {
    render(
      <GridSection title="Test Section" id="test-section">
        <div>First content</div>
        <div>Second content</div>
        <div>Third content</div>
      </GridSection>
    );

    expect(screen.getByText("First content")).toBeInTheDocument();
    expect(screen.getByText("Second content")).toBeInTheDocument();
    expect(screen.getByText("Third content")).toBeInTheDocument();
  });

  it("handles empty title", () => {
    render(
      <GridSection title="" id="test-section">
        <div>Test content</div>
      </GridSection>
    );

    expect(screen.getByText(".")).toBeInTheDocument();
  });

  it("handles complex children structure", () => {
    render(
      <GridSection title="Complex Section" id="complex-section">
        <div>
          <h3>Subtitle</h3>
          <p>Description</p>
          <button>Action</button>
        </div>
      </GridSection>
    );

    expect(screen.getByText("Complex Section")).toBeInTheDocument();
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
