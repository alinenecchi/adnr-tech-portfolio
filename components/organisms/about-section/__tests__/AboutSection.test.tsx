import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AboutSection } from "../index";
import { LanguageProvider } from "../../../../contexts/LanguageContext";

// Mock the theme context
jest.mock("../../../../contexts/ThemeContext", () => ({
  useTheme: () => ({
    theme: "classic-modern",
  }),
}));

// Mock intersection observer hook
jest.mock("../../../../hooks/useIntersectionObserver", () => ({
  useIntersectionObserver: () => [React.createRef(), true],
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
};

describe("AboutSection Component", () => {
  it("renders about section", () => {
    renderWithProviders(<AboutSection />);
    expect(screen.getByText("Aline Dias Necchi Ribeiro")).toBeInTheDocument();
  });

  it("displays profile image", () => {
    renderWithProviders(<AboutSection />);
    const image = screen.getByAltText("Aline Dias Necchi Ribeiro");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/personal/profile.png");
  });

  it("shows location information", () => {
    renderWithProviders(<AboutSection />);
    expect(screen.getByText("Porto Alegre, RS")).toBeInTheDocument();
  });

  it("displays market experience", () => {
    renderWithProviders(<AboutSection />);
    expect(
      screen.getByText(/Atuação no mercado desde 2019/i)
    ).toBeInTheDocument();
  });

  it("shows professional experience timeline", () => {
    renderWithProviders(<AboutSection />);
    expect(screen.getByText("Experiência Profissional")).toBeInTheDocument();
    expect(screen.getAllByText(/On2/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Frontend Developer/i).length).toBeGreaterThan(
      0
    );
  });

  it("displays personal values section", () => {
    renderWithProviders(<AboutSection />);
    expect(screen.getByText("Meus Valores")).toBeInTheDocument();
    expect(screen.getByText("Inovação")).toBeInTheDocument();
    expect(screen.getByText("Colaboração")).toBeInTheDocument();
    expect(screen.getByText("Qualidade")).toBeInTheDocument();
    expect(screen.getByText("Paixão")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = renderWithProviders(
      <AboutSection className="custom-about" />
    );
    expect(container.firstChild).toHaveClass("custom-about");
  });

  it("renders bio text", () => {
    renderWithProviders(<AboutSection />);
    expect(
      screen.getAllByText(/Desenvolvedora apaixonada/i).length
    ).toBeGreaterThan(0);
  });

  it("shows journey text", () => {
    renderWithProviders(<AboutSection />);
    expect(screen.getByText(/Minha jornada começou/i)).toBeInTheDocument();
  });
});
