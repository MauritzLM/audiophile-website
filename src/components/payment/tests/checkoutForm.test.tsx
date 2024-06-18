import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

// component 
import CheckoutForm from "../checkoutForm";

// mocks
import { test_item, test_item_2 } from "../../../tests/mocks";
const cartContents = [test_item, test_item_2, test_item];

describe("test checkout form", () => {
    it("test rendering", () => {
        // initial rendering

    });

    it("payment method rendering", () => {
        // click radio button
    });

    it("test controlled inputs", () => {
        // input values on user input
    });

    it("form submission", () => {
        // submit with incorrect fields
    });

});