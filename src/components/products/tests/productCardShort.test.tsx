import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

// component
import ProductCardShort from "../productCardShort";

// mock items
import { test_item } from "../../../tests/mocks";

describe('product card short', () => {
    it('renders correctly', () => {
        render(<BrowserRouter><ProductCardShort item={test_item} index={1} /></BrowserRouter>)

        expect(screen.getByRole("heading").textContent).toMatch("ZX7 Speaker");
        expect(screen.queryByTestId("new")).not.toBeInTheDocument();
    });
});