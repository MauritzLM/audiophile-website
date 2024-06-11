import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';

// component
import ProductCardFull from "../productCardFull";

// mocks
import { test_item } from "../../../tests/mocks";

describe("product card full", () => {
    it("renders correctly", () => {
        render(<ProductCardFull product={test_item} updateCart={vi.fn()}/>)
        
        expect(screen.getByRole("heading").textContent).toMatch("ZX7 Speaker");
        expect(screen.queryByTestId("new")).not.toBeInTheDocument();
        expect(screen.getByTestId("price").textContent).toMatch("$ 3500");
    });
});