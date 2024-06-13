import { useState } from "react"
import { item } from "../../types"
// import order summary and render inside form*
import OrderSummary from "./orderSummary"

interface checkoutFormProps {
    cart: item[]
}

function CheckoutForm({ cart }: checkoutFormProps) {
    const [paymentMethod, setPaymentMethod] = useState("");
    // errors state*
    // payment method state*
    // error class to display errors*
    // on submit function*
    return (
        <>
            <form>
                <div>
                    <h2>Checkout</h2>
                    {/* billing details */}
                    <fieldset>
                        <legend>Billing Details</legend>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input name="name" id="name" type="text" />
                        </div>

                        <div>
                            <label htmlFor="email">Email address</label>
                            <input name="email" id="email" type="email" />
                        </div>

                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input name="phone" id="phone" type="tel" />
                        </div>

                    </fieldset>

                    {/* shipping info */}
                    <fieldset>
                        <legend>Shipping info</legend>
                        <div>
                            <label htmlFor="address">address</label>
                            <input name="address" id="address" type="text" />
                        </div>

                        <div>
                            <label htmlFor="zipcode">ZIP code</label>
                            <input name="zipcode" id="zipcode" type="tel" />
                        </div>

                        <div>
                            <label htmlFor="city">city</label>
                            <input name="city" id="city" type="text" />
                        </div>

                        <div>
                            <label htmlFor="country">country</label>
                            <input name="country" id="country" type="text" />
                        </div>
                    </fieldset>

                    {/* payment details */}
                    <fieldset>
                        <legend>Payment Details</legend>
                        <div>
                            <span>Payment method</span>
                            <div>
                                <label htmlFor="e-money">E-money</label>
                                <input name="method" id="e-money" type="radio" />
                            </div>

                            <div>
                                <label htmlFor="cash">Cash on delivery</label>
                                <input name="method" id="cash" type="radio" />
                            </div>

                            {/* payment method conditional rendering* */}
                            
                        </div>
                    </fieldset>
                </div>

                <div>
                    <OrderSummary cart={cart} />
                    <button type="submit">Continue & Pay</button>
                </div>
            </form>
        </>
    )
}

export default CheckoutForm