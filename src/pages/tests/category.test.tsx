import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import { setupServer } from "msw/node";
import { categoryHandlers } from "../../tests/handlers";
// component
import Category from "../category";

// mocks
import { test_item } from "../../tests/mocks";
const fetchedProducts = { "earphones": [], "headphones": [], "speakers": [test_item] };
const updateProducts = vi.fn();

describe("category page tests", () => {
    it("rendering", async () => {
        // server
        const server = setupServer(...categoryHandlers);
        server.listen();

        render(
            <MemoryRouter initialEntries={["?/headphones"]}>
                <Category fetchedProducts={fetchedProducts} updateProducts={updateProducts} />
            </MemoryRouter>
        )

        // getting param variables in tests are a problem*
        expect(screen.queryByTestId("category-name")).toBeInTheDocument()

        server.close();

    });
});