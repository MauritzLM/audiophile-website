import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

// component
import Cart from "../cart";

// mocks
import { test_item, test_item_2 } from "../../../tests/mocks";
const cartContents = [test_item, test_item_2, test_item];
const updateCart = vi.fn();
const clearCart = vi.fn()


describe("cart component", () => {
    it("rendering", () => {
        render(<BrowserRouter><Cart cart={cartContents} updateCart={updateCart} clearCart={clearCart} /></BrowserRouter>);

        // renders element for each unique item
        expect(screen.getAllByRole("listitem")).toHaveLength(2);

        // correct total given props
        expect(screen.getByTestId("price").textContent).toMatch("$ 9999");
    });

    // test user actions - remove all
    it("test remove all button", async () => {
        render(<BrowserRouter><Cart cart={cartContents} updateCart={updateCart} clearCart={clearCart} /></BrowserRouter>);

        const user = userEvent.setup();
        
        const removeButton = screen.getByText("Remove all");

        await user.click(removeButton);

        expect(clearCart).toHaveBeenCalled();
    });
});