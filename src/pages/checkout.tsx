import { Link } from "react-router-dom"
import { item } from "../types"
import CheckoutForm from "../components/payment/checkoutForm"
import { useState } from "react"
import PaymentSuccess from "../components/payment/paymentSuccess"

interface checkoutProps {
    cart: item[],
    clearCart: () => void
}

function Checkout({ cart, clearCart }: checkoutProps) {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    // implement go back*
    // payment success state* - pass to checkout form to update state*

    const handlePayment = function () {
        setPaymentSuccess(true)
    }

    // render checkout form and order summary*
    // if paid render payment success component*


    if (paymentSuccess) {
        return (
            // render checkout form*
            // payment succes component z-index* background overlay*
            <PaymentSuccess cart={cart} clearCart={clearCart}/>
        )
    }

    if (!cart.length) {
        return (
            <>
                <Link to="/">go back</Link>
                <p>cart is empty</p>
            </>
        )
    }

    return (
        <>
            <Link to="/">go back</Link>
            {/* form component* */}

            <CheckoutForm cart={cart} handlePayment={handlePayment} />
        </>
    )
}

export default Checkout