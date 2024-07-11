import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { formHandlers } from "../../../tests/handlers";

// component 
import CheckoutForm from "../checkoutForm";

// mocks
import { test_item, test_item_2 } from "../../../tests/mocks";
const cartContents = [test_item, test_item_2, test_item];
const handlePayment = vi.fn();

// new form values
const newValues = {
    "name": "Alexei", "email": "alexei@gmail", "phone": "555-0136", "address": "1137 Williams Avenue", "zipCode": "10001", "city": "New York", "country": "United States", "eMoneyNum": "238521993", "eMoneyPin": "6891", "paymentMethod": "e-money"
};


describe("test checkout form", () => {
    const setup = () => {
        render(<CheckoutForm cart={cartContents} handlePayment={handlePayment} paymentSuccess={false} />)
    }
    it("test rendering", () => {
        // initial rendering
        setup();

        expect(screen.queryByRole("form", { name: /checkout form/i })).toBeInTheDocument();
    });

    it("payment method rendering", async () => {
        setup();
        const user = userEvent.setup();

        const eMoneyNum = screen.getByText(/e-money number/i);
        const eMoneyPin = screen.getByText(/e-money pin/i);

        expect(eMoneyNum).toBeInTheDocument();
        expect(eMoneyPin).toBeInTheDocument();

        // click radio button
        const cashOption = screen.getByText(/cash on delivery/i);

        await user.click(cashOption);

        expect(eMoneyNum).not.toBeInTheDocument();
        expect(screen.queryByTestId("cash-option")).toBeInTheDocument();

    });

    it("test input values", async () => {
        // input values on user input -> setup new object with values
        setup();

        const user = userEvent.setup();

        // select inputs - user type - expect value
        // name
        const nameInput = screen.getByRole("textbox", { name: /name/i });
        await user.type(nameInput, newValues.name);
        expect(nameInput).toHaveValue(newValues.name);

        // email
        const emailInput = screen.getByRole("textbox", { name: /email/i });
        await user.type(emailInput, newValues.email);
        expect(emailInput).toHaveValue(newValues.email);

        // phone
        const phoneInput = screen.getByRole("textbox", { name: /phone/i });
        await user.type(phoneInput, newValues.phone);
        expect(phoneInput).toHaveValue(newValues.phone);

        // address
        const addressInput = screen.getByRole("textbox", { name: /address/i });
        await user.type(addressInput, newValues.address);
        expect(addressInput).toHaveValue(newValues.address);

        // zip code
        const zipCodeInput = screen.getByRole("textbox", { name: /zipcode/i });
        await user.type(zipCodeInput, newValues.zipCode);
        expect(zipCodeInput).toHaveValue(newValues.zipCode);

        // city
        const cityInput = screen.getByRole("textbox", { name: /city/i });
        await user.type(cityInput, newValues.city);
        expect(cityInput).toHaveValue(newValues.city);

        // country
        const countryInput = screen.getByRole("textbox", { name: /country/i });
        await user.type(countryInput, newValues.country);
        expect(countryInput).toHaveValue(newValues.country);

        // e-money num
        const eMoneyNumInput = screen.getByRole("textbox", { name: /e money number/i });
        await user.type(eMoneyNumInput, newValues.eMoneyNum);
        expect(eMoneyNumInput).toHaveValue(newValues.eMoneyNum);

        // e-money pin
        const eMoneyPinInput = screen.getByRole("textbox", { name: /e money pin/i });
        await user.type(eMoneyPinInput, newValues.eMoneyPin);
        expect(eMoneyPinInput).toHaveValue(newValues.eMoneyPin);
    });

    // TEST NOT WORKING
    // it("form submission", async () => {
    //     // server
    //     const server = setupServer(...formHandlers);

    //     server.listen();
    //     // submit with incorrect fields
    //     setup();

    //     const user = userEvent.setup();

    //     // submit button
    //     const submitButton = screen.getByText(/continue & pay/i);
    //     await user.click(submitButton);

    //     await screen.findAllByRole("alert");
        
    //     expect(screen.findByText("wrong format")).toBeInTheDocument();
    //     expect(screen.getAllByRole).toHaveLength(2);

    //     server.close();
    // });

});