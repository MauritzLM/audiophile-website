import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

// component
import OtherProducts from "../otherProducts";

// mocks
import { test_item } from "../../../tests/mocks";

describe("other products you may like", () => {
    it("renders all products", () => {
        render(<BrowserRouter><OtherProducts product={test_item}/></BrowserRouter>)

        const names = screen.getAllByTestId("item-name");

        expect(screen.getAllByTestId("other-product")).toHaveLength(3);
        expect(names[1].textContent).toMatch("XX99 Mark I");
        
    });
});
