import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomImage as Image } from "../index";

describe("Image Component", () => {
  const defaultProps = {
    src: "https://example.com/image.jpg",
    alt: "Test image",
  };

  it("renders image with correct src and alt", () => {
    render(<Image {...defaultProps} />);
    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("applies width and height when provided", () => {
    render(<Image {...defaultProps} width={300} height={200} />);
    const image = screen.getByAltText("Test image");
    expect(image).toHaveAttribute("width", "300");
    expect(image).toHaveAttribute("height", "200");
  });

  it("applies custom className", () => {
    render(<Image {...defaultProps} className="custom-image" />);
    const image = screen.getByAltText("Test image");
    expect(image).toHaveClass("custom-image");
  });

  it("sets priority attribute when priority is true", () => {
    render(<Image {...defaultProps} priority={true} />);
    const image = screen.getByAltText("Test image");
    expect(image).toHaveAttribute("priority");
  });

  it("handles missing alt text gracefully", () => {
    render(<Image src="https://example.com/image.jpg" alt="" />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
