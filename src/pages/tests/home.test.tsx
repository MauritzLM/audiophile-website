import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

// component
import Home from "../home";
import { test_item, test_item_2 } from "../../tests/mocks";

//mocks
const featured = [test_item, test_item_2];

// renders featured products
describe("home page tests", () => {
    it("renders all featured items", () => {
        render(<BrowserRouter><Home featured={featured} /></BrowserRouter>)

        const featuredProducts = screen.getAllByRole("listitem");

        expect(featuredProducts).toHaveLength(2);
    });
});