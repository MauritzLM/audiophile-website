import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';

// component
import ProductFeatures from "../productFeatures";
// mocks
import { test_item } from "../../../tests/mocks";

describe("product features", () => {
    it("rendering", () => {
        render(<ProductFeatures product={test_item}/>);

        const headings = screen.getAllByRole("heading");

        expect(headings[0].textContent).toMatch(/Features/);
        // renders description
        expect(screen.getByTestId("description")).toBeInTheDocument();
        // renders all box contents
        expect(screen.getAllByRole("listitem")).toHaveLength(5);
        // renders all picture elements
        expect(screen.getAllByTestId("picture")).toHaveLength(3);
    });
});