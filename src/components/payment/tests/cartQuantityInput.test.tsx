import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

// component
import CartQuantityInput from "../cartQuantityInput";

// mocks
import { test_item } from "../../../tests/mocks";
const updateCart = vi.fn();
const test_cart = [test_item, test_item];

describe("cart quantity input", () => {
    it("renders correctly", () => {
        render(<CartQuantityInput product={test_item} cart={test_cart} updateCart={updateCart} />);

        // number input
        expect(screen.getByTestId("cart-quantity")).toHaveValue(2);
        // add and remove buttons
        expect(screen.getAllByRole("button")).toHaveLength(2);
    });

    describe("test user actions", () => {

        const user = userEvent.setup();

        it("remove button", async () => {
            render(<CartQuantityInput product={test_item} cart={test_cart} updateCart={updateCart} />);

            const buttons = screen.getAllByRole("button");
            const numberInput = screen.getByTestId("cart-quantity");

            await user.click(buttons[0]);

            expect(numberInput).toHaveValue(1);
            expect(updateCart).toHaveBeenCalled();
        });
        
        it("add button", async () => {
            render(<CartQuantityInput product={test_item} cart={test_cart} updateCart={updateCart} />);

            const buttons = screen.getAllByRole("button");
            const numberInput = screen.getByTestId("cart-quantity");

            await user.click(buttons[1]);

            expect(numberInput).toHaveValue(3);
            expect(updateCart).toHaveBeenCalledWith(test_item, 3);
        });

    });
});