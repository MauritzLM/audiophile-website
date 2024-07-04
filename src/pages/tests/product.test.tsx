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
const fetchedProducts_1 = { "earphones": [], "headphones": [test_item_2], "speakers": [] }
const fetchedProducts_2 = { "earphones": [], "headphones": [test_item_2], "speakers": [test_item] }

// fetches product
// renders product info
describe("product page tests", () => {
    it("rendering when product not in app state", async () => {
        // server
        const server = setupServer(...productHandlers);
        server.listen();

        render(
            <MemoryRouter initialEntries={["?/speakers/ZX7%20Speaker"]}>
                <Product fetchedProducts={fetchedProducts_1} addToCart={addToCart} updateProducts={vi.fn()} />
            </MemoryRouter>
        );

        // expect product name - ZX7 Speaker
        await waitFor(() => expect(screen.getByTestId("product-name").textContent).toMatch("ZX7 Speaker"));


        server.close();
    });

    it("rendering when product already in app state", async () => {
        // server
        const server = setupServer(...productHandlers);
        server.listen();

        render(
            <MemoryRouter initialEntries={["?/speakers/ZX7%20Speaker"]}>
                <Product fetchedProducts={fetchedProducts_2} addToCart={addToCart} updateProducts={vi.fn()} />
            </MemoryRouter>
        );

        // expect product name - ZX7 Speaker
        await waitFor(() => expect(screen.getByTestId("product-name").textContent).toMatch("ZX7 Speaker"));


        server.close();
    });
});