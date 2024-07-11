import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// component
import QuantityInput from "../quantityInput";

// mocks
import { test_item, test_item_2 } from "../../tests/mocks";
const addToCart = vi.fn()

describe("quantity input", () => {
    it("renders correctly", () => {
        render(<QuantityInput product={test_item} addToCart={addToCart} />);

        // input value on rendering
        expect(screen.getByRole("spinbutton")).toHaveValue(1);
        // renders add to cart button
        expect(screen.getByText("add to cart")).toBeInTheDocument();
    });

    it("test user actions", async () => {
        render(<QuantityInput product={test_item} addToCart={addToCart} />);

        // user-event setup
        const user = userEvent.setup();

        // add to cart button and num input
        const cartButton = screen.getByText("add to cart");
        const numInput = screen.getByRole("spinbutton");

        // user actions
        await user.type(numInput, 'backspace');
        await user.type(numInput, '2');
        await user.click(cartButton);

        // num input value - reset after clicking button
        expect(numInput).toHaveValue(1);
        // update cart function arguments
        expect(addToCart).toHaveBeenCalledWith(test_item, 2);
    });

    it("test add button", async () => {
        render(<QuantityInput product={test_item_2} addToCart={addToCart} />);

        // user-event setup
        const user = userEvent.setup();

        const addButton = screen.getByText("+");
        const numInput = screen.getByRole("spinbutton");

        // user action
        await user.click(addButton);

        // num input value
        expect(numInput).toHaveValue(2);

    });

    it("test remove button", async () => {
        render(<QuantityInput product={test_item_2} addToCart={addToCart} />);

        // user-event setup
        const user = userEvent.setup();

        const removeButton = screen.getByText("-");
        const numInput = screen.getByRole("spinbutton");

        // user actions
        await user.type(numInput, 'backspace');
        await user.type(numInput, '5');
        await user.click(removeButton);

        // num input value
        expect(numInput).toHaveValue(4);

    });
});