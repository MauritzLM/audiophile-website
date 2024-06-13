import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';

// component
import OrderSummary from "../orderSummary";

// mocks
import { test_item, test_item_2 } from "../../../tests/mocks";
const test_cart = [test_item, test_item_2, test_item];

describe("order summary", () => {
    it("test rendering", () => {
        render(<OrderSummary cart={test_cart} />)

        const items = screen.getAllByRole("listitem");
        const quantities = screen.getAllByTestId("quantity");

        expect(items).toHaveLength(2);
        expect(quantities[0].textContent).toMatch("x2")
    });
});