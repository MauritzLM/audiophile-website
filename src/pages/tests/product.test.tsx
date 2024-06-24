import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import { productHandlers } from "../../tests/handlers";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";

// component
import Product from "../product";

// mocks
import { test_item, test_item_2 } from "../../tests/mocks";
const addToCart = vi.fn();
const fetchedProduct = { "earphones": [], "headphones": [test_item_2], "speakers": [test_item] }

// fetches product
// renders product info
describe("product page tests", () => {
    it("rendering", async () => {
        // server
        const server = setupServer(...productHandlers);
        server.listen();

        render(
            <MemoryRouter initialEntries={["?/speakers/ZX7%20Speaker"]}>
                <Product fetchedProducts={fetchedProduct} addToCart={addToCart} />
            </MemoryRouter>
        );

        // expect product name - ZX7 Speaker
        await waitFor(() => expect(screen.getByTestId("product-name").textContent).toMatch("ZX7 Speaker"));


        server.close();
    });
});