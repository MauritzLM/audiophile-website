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

        expect(screen.getByRole("heading").textContent).toMatch(/Features/);
        expect(screen.getAllByRole("listitem")).toHaveLength(5);
    });
});