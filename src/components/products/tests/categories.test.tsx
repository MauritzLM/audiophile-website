import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

// component
import Categories from "../categories";

describe("category links", () => {
    it("render correctly", () => {
        render(<BrowserRouter><Categories /></BrowserRouter>);

        expect(screen.getAllByTestId("category-link")).toHaveLength(3);
    });
});