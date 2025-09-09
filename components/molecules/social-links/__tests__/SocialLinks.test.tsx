import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SocialLinks } from "../index";
import { Github, Linkedin, Mail } from "lucide-react";

const mockLinks = [
  {
    name: "GitHub",
    url: "https://github.com/test",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/test",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:test@example.com",
    icon: Mail,
  },
];

describe("SocialLinks Component", () => {
  it("renders all social links", () => {
    render(<SocialLinks links={mockLinks} />);

    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("renders correct href attributes", () => {
    render(<SocialLinks links={mockLinks} />);

    expect(screen.getByLabelText("GitHub")).toHaveAttribute(
      "href",
      "https://github.com/test"
    );
    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute(
      "href",
      "https://linkedin.com/in/test"
    );
    expect(screen.getByLabelText("Email")).toHaveAttribute(
      "href",
      "mailto:test@example.com"
    );
  });

  it("opens external links in new tab", () => {
    render(<SocialLinks links={mockLinks} />);

    const githubLink = screen.getByLabelText("GitHub");
    const linkedinLink = screen.getByLabelText("LinkedIn");

    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not open email links in new tab", () => {
    render(<SocialLinks links={mockLinks} />);

    const emailLink = screen.getByLabelText("Email");
    expect(emailLink).not.toHaveAttribute("target", "_blank");
  });

  it("applies custom className", () => {
    render(<SocialLinks links={mockLinks} className="custom-social-links" />);
    const container = screen.getByLabelText("GitHub").parentElement;
    expect(container).toHaveClass("custom-social-links");
  });

  it("handles empty links array", () => {
    render(<SocialLinks links={[]} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders icons for each link", () => {
    render(<SocialLinks links={mockLinks} />);

    // Each link should have an SVG icon
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link.querySelector("svg")).toBeInTheDocument();
    });
  });
});
