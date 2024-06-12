import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';

// component
import ProductCardFull from "../productCardFull";

// mocks
import { test_item, test_item_2 } from "../../../tests/mocks";

describe("product card full", () => {
    it("renders correctly", () => {
        render(<ProductCardFull product={test_item} addToCart={vi.fn()} />);

        // renders correct name
        expect(screen.getByRole("heading").textContent).toMatch("ZX7 Speaker");
        // does not render if not new
        expect(screen.queryByTestId("new")).not.toBeInTheDocument();
        // renders correct price
        expect(screen.getByTestId("price").textContent).toMatch("$ 3500");
    });

    it("renders new product correctly", () => {
        render(<ProductCardFull product={test_item_2} addToCart={vi.fn()} />);

        // correct item name
        expect(screen.getByRole("heading").textContent).toMatch("XX99 Mark II Headphones");
        // renders if  new
        expect(screen.queryByTestId("new")).toBeInTheDocument();

    });
});