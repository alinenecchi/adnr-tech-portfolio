import React from "react";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../index";

describe("Card Components", () => {
  describe("Card", () => {
    it("renders card with children", () => {
      render(
        <Card>
          <div>Card content</div>
        </Card>
      );
      expect(screen.getByText("Card content")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(
        <Card className="custom-card">
          <div>Card content</div>
        </Card>
      );
      const card = screen.getByText("Card content").parentElement;
      expect(card).toHaveClass("custom-card");
    });

    it("has correct base classes", () => {
      render(
        <Card>
          <div>Card content</div>
        </Card>
      );
      const card = screen.getByText("Card content").parentElement;
      expect(card).toHaveClass(
        "rounded-lg",
        "border",
        "bg-card",
        "text-card-foreground",
        "shadow-sm"
      );
    });
  });

  describe("CardHeader", () => {
    it("renders header with children", () => {
      render(
        <Card>
          <CardHeader>
            <div>Header content</div>
          </CardHeader>
        </Card>
      );
      expect(screen.getByText("Header content")).toBeInTheDocument();
    });

    it("has correct base classes", () => {
      render(
        <Card>
          <CardHeader>
            <div>Header content</div>
          </CardHeader>
        </Card>
      );
      const header = screen.getByText("Header content").parentElement;
      expect(header).toHaveClass("flex", "flex-col", "space-y-1.5", "p-6");
    });
  });

  describe("CardTitle", () => {
    it("renders title with children", () => {
      render(
        <Card>
          <CardTitle>Card Title</CardTitle>
        </Card>
      );
      expect(screen.getByText("Card Title")).toBeInTheDocument();
    });

    it("renders as h3 element", () => {
      render(
        <Card>
          <CardTitle>Card Title</CardTitle>
        </Card>
      );
      const title = screen.getByRole("heading", { level: 3 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("Card Title");
    });

    it("has correct base classes", () => {
      render(
        <Card>
          <CardTitle>Card Title</CardTitle>
        </Card>
      );
      const title = screen.getByRole("heading", { level: 3 });
      expect(title).toHaveClass(
        "text-2xl",
        "font-semibold",
        "leading-none",
        "tracking-tight"
      );
    });
  });

  describe("CardDescription", () => {
    it("renders description with children", () => {
      render(
        <Card>
          <CardDescription>Card description</CardDescription>
        </Card>
      );
      expect(screen.getByText("Card description")).toBeInTheDocument();
    });

    it("has correct base classes", () => {
      render(
        <Card>
          <CardDescription>Card description</CardDescription>
        </Card>
      );
      const description = screen.getByText("Card description");
      expect(description).toHaveClass("text-sm", "text-muted-foreground");
    });
  });

  describe("CardContent", () => {
    it("renders content with children", () => {
      render(
        <Card>
          <CardContent>
            <div>Card content</div>
          </CardContent>
        </Card>
      );
      expect(screen.getByText("Card content")).toBeInTheDocument();
    });

    it("has correct base classes", () => {
      render(
        <Card>
          <CardContent>
            <div>Card content</div>
          </CardContent>
        </Card>
      );
      const content = screen.getByText("Card content").parentElement;
      expect(content).toHaveClass("p-6", "pt-0");
    });
  });

  describe("Complete Card Structure", () => {
    it("renders complete card structure correctly", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
            <CardDescription>Test description</CardDescription>
          </CardHeader>
          <CardContent>
            <div>Test content</div>
          </CardContent>
        </Card>
      );

      expect(
        screen.getByRole("heading", { name: "Test Title" })
      ).toBeInTheDocument();
      expect(screen.getByText("Test description")).toBeInTheDocument();
      expect(screen.getByText("Test content")).toBeInTheDocument();
    });
  });
});


