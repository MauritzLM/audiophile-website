import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

// component
import PaymentSuccess from "../paymentSuccess";

// mocks
import { test_item, test_item_2 } from "../../../tests/mocks";
import userEvent from "@testing-library/user-event";

const cartContents = [test_item, test_item_2, test_item];
const clearCart = vi.fn();
// expand button rendering & text

describe("payment success component", () => {
    it("rendering", () => {
        render(<BrowserRouter><PaymentSuccess cart={cartContents} clearCart={clearCart}/></BrowserRouter>);

        expect(screen.getByText(/thank you for your order/i)).toBeInTheDocument();
    });

    it("test expanded view", async () => {
        render(<BrowserRouter><PaymentSuccess cart={cartContents} clearCart={clearCart}/></BrowserRouter>);

        const user = userEvent.setup();

        const expandButton = screen.getByTestId("expand");

        expect(expandButton).toHaveTextContent("and 1 other item(s)");
       
        await user.click(expandButton);
        
        expect(expandButton).toHaveTextContent(/view less/i);
        
    });
});