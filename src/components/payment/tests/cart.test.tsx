import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

// component
import Cart from "../cart";

// mocks
import { test_item, test_item_2 } from "../../../tests/mocks";
const cartContents = [test_item, test_item_2, test_item];
const updateCart = vi.fn();
const clearCart = vi.fn()


describe("cart component", () => {
    it("rendering", () => {
        render(<Cart cart={cartContents} updateCart={updateCart} clearCart={clearCart} />);

        // renders element for each unique item
    });

    // test user actions
});