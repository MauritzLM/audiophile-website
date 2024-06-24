import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// component
import Header from "../header";
import { BrowserRouter } from "react-router-dom";

// mocks
const handleViewCart = vi.fn();

describe("header test", () => {
    it("clicking on cart button calls viewcart function", async () => {
        
        render(<BrowserRouter><Header handleViewCart={handleViewCart} /></BrowserRouter>);

        const user = userEvent.setup();
        const cartButton = screen.getByRole("button");

        await user.click(cartButton);

        expect(handleViewCart).toHaveBeenCalled();
    });
});