import React, { useState } from "react"
import { item, error, formObj } from "../../types"
// import order summary and render inside form*
import OrderSummary from "./orderSummary"

interface checkoutFormProps {
    cart: item[],
    handlePayment: () => void,
    paymentSuccess: boolean
}

// initial error state
const initialFormState = {
    "name": "", "email": "", "phone": "", "address": "", "zipCode": "", "city": "", "country": "", "eMoneyNum": "", "eMoneyPin": "", "paymentMethod": "e-money"
};


function CheckoutForm({ cart, handlePayment, paymentSuccess }: checkoutFormProps) {
    const [paymentMethod, setPaymentMethod] = useState("e-money");
    // errors state
    const [errors, setErrors] = useState<formObj>(initialFormState);

    // controlled input components
    const [formData, setFormData] = useState<formObj>(initialFormState);

    // on submit function*
    const handleSubmit = async function (event: React.FormEvent<HTMLFormElement>) {
        try {
            event.preventDefault();

            console.log(formData);

            const response = await fetch('http://localhost:3000/payment/submit', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const message = await response.json();

            // if validation errors - update errors state with current errors
            if (message.errors) {
                const currentErrors: formObj = {}

                message.errors.forEach((item: error) => {
                    currentErrors[item.path] = item.msg
                });

                // update state
                setErrors({ ...initialFormState, ...currentErrors });

                return;
            }

            console.log(message)
            // success
            handlePayment();

        } catch (error) {
            console.log(error)
        }
    };

    // payment option select change
    const changeOption = function (event: React.ChangeEvent<HTMLInputElement>) {
        setPaymentMethod(event.currentTarget.value)
        setFormData({ ...formData, "paymentMethod": event.currentTarget.value })
    };

    return (
        <>
            <form id="checkout-form" aria-label="checkout form" name="checkout form" method="post" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-wrapper">
                    <h2>Checkout</h2>
                    {/* billing details */}
                    <fieldset>
                        <legend>Billing Details</legend>
                        <div className={errors.name ? "error form-group" : 'form-group'}>
                            {errors.name && (<span role="alert" className="error-msg">{errors.name}</span>)}
                            <label htmlFor="name">Name</label>
                            <input name="name" id="name" aria-label="name" type="text" value={formData.name} onInput={(e) => setFormData({ ...formData, "name": e.currentTarget.value })} placeholder="Alexei Ward" />
                        </div>

                        <div className={errors.email ? "error form-group" : 'form-group'}>
                            {errors.email && (<span role="alert" className="error-msg">{errors.email}</span>)}
                            <label htmlFor="email">Email address</label>
                            <input name="email" id="email" type="email" aria-label="email" value={formData.email} onInput={(e) => setFormData({ ...formData, "email": e.currentTarget.value })} placeholder="alexei@mail.com" />
                        </div>

                        <div className={errors.phone ? "error form-group" : 'form-group'}>
                            {errors.phone && (<span role="alert" className="error-msg">{errors.phone}</span>)}
                            <label htmlFor="phone">Phone</label>
                            <input name="phone" id="phone" type="tel" aria-label="phone number" value={formData.phone} onInput={(e) => setFormData({ ...formData, "phone": e.currentTarget.value })} placeholder="+1 202-555-0136" />
                        </div>

                    </fieldset>

                    {/* shipping info */}
                    <fieldset>
                        <legend>Shipping info</legend>
                        <div className={errors.address ? "error form-group" : 'form-group'}>
                            {errors.address && (<span role="alert" className="error-msg">{errors.address}</span>)}
                            <label htmlFor="address">address</label>
                            <input name="address" id="address" type="text" aria-label="address" value={formData.address} onInput={(e) => setFormData({ ...formData, "address": e.currentTarget.value })} placeholder="1137 Williams Avenue" />
                        </div>

                        <div className={errors.zipCode ? "error form-group" : 'form-group'}>
                            {errors.zipCode && (<span role="alert" className="error-msg">{errors.zipCode}</span>)}
                            <label htmlFor="zipcode">ZIP code</label>
                            <input name="zipcode" id="zipcode" type="tel" aria-label="zipcode" value={formData.zipCode} onInput={(e) => setFormData({ ...formData, "zipCode": e.currentTarget.value })} placeholder="10001" />
                        </div>

                        <div className={errors.city ? "error form-group" : 'form-group'}>
                            {errors.city && (<span role="alert" className="error-msg">{errors.city}</span>)}
                            <label htmlFor="city">city</label>
                            <input name="city" id="city" type="text" aria-label="city" value={formData.city} onInput={(e) => setFormData({ ...formData, "city": e.currentTarget.value })} placeholder="New York" />
                        </div>

                        <div className={errors.country ? "error form-group" : 'form-group'}>
                            {errors.country && (<span role="alert" className="error-msg">{errors.country}</span>)}
                            <label htmlFor="country">country</label>
                            <input name="country" id="country" type="text" aria-label="country" value={formData.country} onInput={(e) => setFormData({ ...formData, "country": e.currentTarget.value })} placeholder="United States" />
                        </div>
                    </fieldset>

                    {/* payment details */}
                    <fieldset>
                        <legend>Payment Details</legend>
                        <div>
                            <span className="payment-label">Payment method</span>

                            <div className={paymentMethod === "e-money" ? "cs-active radio-group" : "radio-group"}>
                                <label htmlFor="e-money">E-money</label>
                                <input name="method" id="e-money" type="radio" value="e-money" onChange={(e) => changeOption(e)} checked={paymentMethod === "e-money"} />
                            </div>

                            <div className={paymentMethod === "cash" ? "cs-active radio-group" : "radio-group"}>
                                <label htmlFor="cash">Cash on delivery</label>
                                <input name="method" id="cash" type="radio" value="cash" onChange={(e) => changeOption(e)} checked={paymentMethod === "cash"} />
                            </div>


                            {/* payment method conditional rendering */}
                            {paymentMethod === 'e-money' ?
                                // e-money selected
                                <div className="payment-method">
                                    <div className={errors.eMoneyNum ? "error form-group" : 'form-group'}>
                                        {errors.eMoneyNum && (<span role="alert" className="error-msg">{errors.eMoneyNum}</span>)}
                                        <label htmlFor="e-money-num">e-money number</label>
                                        <input id="e-money-num" name="e-money-num" type="text" aria-label="e money number" value={formData.eMoneyNum} onInput={(e) => setFormData({ ...formData, "eMoneyNum": e.currentTarget.value })} placeholder="238521993" />
                                    </div>
                                    <div className={errors.eMoneyPin ? "error form-group" : 'form-group'}>
                                        {errors.eMoneyPin && (<span role="alert" className="error-msg">{errors.eMoneyPin}</span>)}
                                        <label htmlFor="e-money-pin">e-money PIN</label>
                                        <input id="e-money-pin" name="e-money-pin" type="text" aria-label="e money pin" value={formData.eMoneyPin} onInput={(e) => setFormData({ ...formData, "eMoneyPin": e.currentTarget.value })} placeholder="6891" />
                                    </div>

                                </div>
                                :
                                // cash selected
                                <div className="payment-method">
                                    <img src="/src/assets/images/checkout/icon-cash-on-delivery.svg" alt="" height="48" width="48" aria-hidden="true" loading="lazy" decoding="async"></img>
                                    <p data-testid="cash-option">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence.
                                        Just make sure your address is correct so that your order will not be cancelled.</p>
                                </div>
                            }
                        </div>
                    </fieldset>
                </div>

                <div className="summary-wrapper">
                    <h3>Summary</h3>
                    <OrderSummary cart={cart} />
                    <button className="cs-button" type="submit" disabled={paymentSuccess}>Continue & Pay</button>
                </div>
            </form>
        </>
    )
}

export default CheckoutForm