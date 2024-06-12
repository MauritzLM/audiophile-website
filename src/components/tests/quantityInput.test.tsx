import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// component
import QuantityInput from "../quantityInput";

// mocks
import { test_item } from "../../tests/mocks";
const updateCart = vi.fn()

describe("quantity input", () => {
    it("renders correctly", () => {
        render(<QuantityInput product={test_item} updateCart={updateCart} />);

        // input value on rendering
        expect(screen.getByRole("spinbutton")).toHaveValue(1);
        // renders add to cart button
        expect(screen.getByText("add to cart")).toBeInTheDocument();
    });

    it("test user actions", async () => {
        render(<QuantityInput product={test_item} updateCart={updateCart} />);

        // user-event setup
        const user = userEvent.setup();

        // add to cart button and num input
        const addButton = screen.getByText("add to cart");
        const numInput = screen.getByRole("spinbutton");

        // user actions
        await user.type(numInput, 'backspace');
        await user.type(numInput, '2');
        await user.click(addButton);

        // num input value
        expect(numInput).toHaveValue(2);
        // update cart function arguments
        expect(updateCart).toHaveBeenCalledWith(test_item, 2);
    });
});