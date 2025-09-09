import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "../index";

describe("Input Component", () => {
  it("renders input correctly", () => {
    render(<Input placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toBeInTheDocument();
  });

  it("handles value changes", () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "test value" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<Input className="custom-input" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-input");
  });

  it("supports different input types", () => {
    render(<Input type="email" placeholder="Email input" />);
    const input = screen.getByPlaceholderText("Email input");
    expect(input).toHaveAttribute("type", "email");
  });

  it("can be disabled", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("supports required attribute", () => {
    render(<Input required />);
    const input = screen.getByRole("textbox");
    expect(input).toBeRequired();
  });
});
