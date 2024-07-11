import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// component
import Header from "../header";
import { BrowserRouter } from "react-router-dom";

// mocks
import { test_item } from "../../tests/mocks";
const handleViewCart = vi.fn();
const mock_cart = [test_item]

describe("header test", () => {
    it("clicking on cart button calls viewcart function", async () => {
        
        render(<BrowserRouter><Header handleViewCart={handleViewCart} cart={mock_cart} /></BrowserRouter>);

        const user = userEvent.setup();
        const cartButton = screen.getByTestId("view-cart");

        await user.click(cartButton);

        expect(handleViewCart).toHaveBeenCalled();
    });
});