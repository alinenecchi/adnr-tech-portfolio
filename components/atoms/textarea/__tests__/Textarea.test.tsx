import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Textarea } from "../index";

describe("Textarea Component", () => {
  it("renders textarea correctly", () => {
    render(<Textarea placeholder="Test textarea" />);
    const textarea = screen.getByPlaceholderText("Test textarea");
    expect(textarea).toBeInTheDocument();
  });

  it("handles value changes", () => {
    const handleChange = jest.fn();
    render(<Textarea value="" onChange={handleChange} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "test message" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<Textarea className="custom-textarea" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("custom-textarea");
  });

  it("supports rows attribute", () => {
    render(<Textarea rows={5} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("rows", "5");
  });

  it("can be disabled", () => {
    render(<Textarea disabled />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDisabled();
  });

  it("supports required attribute", () => {
    render(<Textarea required />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeRequired();
  });

  it("supports maxLength attribute", () => {
    render(<Textarea maxLength={100} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("maxLength", "100");
  });
});
