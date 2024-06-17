import { useState } from "react"
import { item } from "../../types"
// import order summary and render inside form*
import OrderSummary from "./orderSummary"

interface checkoutFormProps {
    cart: item[]
}


function CheckoutForm({ cart }: checkoutFormProps) {
    const [paymentMethod, setPaymentMethod] = useState("e-money");
    // errors state*
    const [errors, setErrors] = useState({ name: "", email: "", phone: "", address: "", zipCode: "", city: "", country: "", eMoneyNum: "", eMoneyPin: "" })
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
                        <div className={errors.name ? "error" : ''}>
                            <span className="error-msg">{errors.name}</span>
                            <label htmlFor="name">Name</label>
                            <input name="name" id="name" type="text" />
                        </div>

                        <div className={errors.email ? "error" : ''}>
                            <span className="error-msg">{errors.email}</span>
                            <label htmlFor="email">Email address</label>
                            <input name="email" id="email" type="email" />
                        </div>

                        <div className={errors.phone ? "error" : ''}>
                            <span className="error-msg">{errors.phone}</span>
                            <label htmlFor="phone">Phone</label>
                            <input name="phone" id="phone" type="tel" />
                        </div>

                    </fieldset>

                    {/* shipping info */}
                    <fieldset>
                        <legend>Shipping info</legend>
                        <div className={errors.address ? "error" : ''}>
                            <span className="error-msg">{errors.address}</span>
                            <label htmlFor="address">address</label>
                            <input name="address" id="address" type="text" />
                        </div>

                        <div className={errors.zipCode ? "error" : ''}>
                            <span className="error-msg">{errors.zipCode}</span>
                            <label htmlFor="zipcode">ZIP code</label>
                            <input name="zipcode" id="zipcode" type="tel" />
                        </div>

                        <div className={errors.city ? "error" : ''}>
                            <span className="error-msg">{errors.city}</span>
                            <label htmlFor="city">city</label>
                            <input name="city" id="city" type="text" />
                        </div>

                        <div className={errors.country ? "error" : ''}>
                            <span className="error-msg">{errors.country}</span>
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
                                <input className={paymentMethod === "e-money" ? "cs-active" : ""} name="method" id="e-money" type="radio" value="e-money" onClick={(e) => setPaymentMethod((e.target as HTMLInputElement).value)} />
                            </div>

                            <div>
                                <label htmlFor="cash">Cash on delivery</label>
                                <input className={paymentMethod === "cash" ? "cs-active" : ""} name="method" id="cash" type="radio" value="cash" onClick={(e) => setPaymentMethod((e.target as HTMLInputElement).value)} />
                            </div>


                            {/* payment method conditional rendering */}
                            {paymentMethod === 'e-money' ?
                                // e-money selected
                                <div className="payment-method">
                                    <div className={errors.eMoneyNum ? "error" : ''}>
                                        <span className="error-msg">{errors.eMoneyNum}</span>
                                        <label htmlFor="e-money-num">e-money number</label>
                                        <input id="e-money-num" name="e-money-num" type="text" />
                                    </div>
                                    <div className={errors.eMoneyPin ? "error" : ''}>
                                        <span className="error-msg">{errors.eMoneyPin}</span>
                                        <label htmlFor="e-money-pin">e-money PIN</label>
                                        <input id="e-money-pin" name="e-money-pin" type="text" />
                                    </div>

                                </div>
                                :
                                // cash selected
                                <div className="payment-method">
                                    <img src="/src/assets/images/checkout/icon-cash-on-delivery.svg" alt="" height="48" width="48" aria-hidden="true" loading="lazy" decoding="async"></img>
                                    <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence.
                                        Just make sure your address is correct so that your order will not be cancelled.</p>
                                </div>
                            }


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