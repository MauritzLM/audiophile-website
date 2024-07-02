import { Link } from "react-router-dom"
import { item } from "../types"
import CheckoutForm from "../components/payment/checkoutForm"
import { useState, useEffect } from "react"
import PaymentSuccess from "../components/payment/paymentSuccess"
import "/src/assets/sass/checkout.scss"

interface checkoutProps {
    cart: item[],
    clearCart: () => void
}

function Checkout({ cart, clearCart }: checkoutProps) {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    // implement go back*

    const handlePayment = function () {
        setPaymentSuccess(true)
    }

    // scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])


    if (paymentSuccess) {
        return (
            <>
                <div className="checkout-wrapper">
                    <CheckoutForm cart={cart} handlePayment={handlePayment} paymentSuccess={paymentSuccess} />

                    <PaymentSuccess cart={cart} clearCart={clearCart} />
                </div>
            </>
        )
    }

    if (!cart.length) {
        return (
            <>
                <div className="checkout-wrapper">
                    <Link className="go-back" to="/">go back</Link>
                    <p>cart is empty</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="checkout-wrapper">
                <Link className="go-back" to="/">go back</Link>
                {/* form component* */}

                <CheckoutForm cart={cart} handlePayment={handlePayment} paymentSuccess={paymentSuccess} />
            </div>
        </>
    )
}

export default Checkout