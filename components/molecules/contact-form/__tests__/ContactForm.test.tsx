import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContactForm } from "../index";
import { LanguageProvider } from "../../../../contexts/LanguageContext";

// Mock the theme context
jest.mock("../../../../contexts/ThemeContext", () => ({
  useTheme: () => ({
    theme: "classic-modern",
  }),
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
};

describe("ContactForm Component", () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it("renders all form fields", () => {
    renderWithProviders(<ContactForm onSubmit={mockOnSubmit} />);

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    renderWithProviders(<ContactForm onSubmit={mockOnSubmit} />);
    expect(
      screen.getByRole("button", { name: /enviar mensagem/i })
    ).toBeInTheDocument();
  });

  it("validates required fields", async () => {
    renderWithProviders(<ContactForm onSubmit={mockOnSubmit} />);

    const submitButton = screen.getByRole("button", {
      name: /enviar mensagem/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/nome é obrigatório/i)).toBeInTheDocument();
      expect(screen.getByText(/email é obrigatório/i)).toBeInTheDocument();
      expect(screen.getByText(/mensagem é obrigatória/i)).toBeInTheDocument();
    });
  });

  it("validates email format", async () => {
    renderWithProviders(<ContactForm onSubmit={mockOnSubmit} />);

    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole("button", {
      name: /enviar mensagem/i,
    });

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
    });
  });

  it("submits form with valid data", async () => {
    renderWithProviders(<ContactForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/mensagem/i);
    const submitButton = screen.getByRole("button", {
      name: /enviar mensagem/i,
    });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: "John Doe",
        email: "john@example.com",
        message: "Test message",
      });
    });
  });

  it("shows success message after successful submission", async () => {
    renderWithProviders(<ContactForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/mensagem/i);
    const submitButton = screen.getByRole("button", {
      name: /enviar mensagem/i,
    });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/mensagem enviada com sucesso/i)
      ).toBeInTheDocument();
    });
  });
});
