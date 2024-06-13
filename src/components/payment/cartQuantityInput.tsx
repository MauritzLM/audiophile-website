import { useEffect, useState } from "react"
import { item } from "../../types"

interface cartQuantityInputProps {
    product: item,
    cart: item[],
    updateCart: (product: item, quantity: number) => void
}

function CartQuantityInput({ product, cart, updateCart }: cartQuantityInputProps) {

    const [inputValue, setInputValue] = useState(0);

    const updateQuantity = (operator: string) => {

        if (operator === "remove") {
            setInputValue(inputValue - 1)
            updateCart(product, inputValue - 1)
        }

        if (operator === "add") {
            // max value check
            if (inputValue === 5) {
                updateCart(product, 5)
                return
            }

            setInputValue(inputValue + 1)
            updateCart(product, inputValue + 1)
        }
    };

    useEffect(() => {
        // each time cart changes recalculate the quantity
        let quantity = 0;
        cart.forEach(item => {
            if (item.name === product.name) {
                quantity++
            }
        });
        setInputValue(quantity)

    }, [cart, product.name])

    return (
        <>
            <label htmlFor="cart-quantity">quantity
                {/* remove button */}
                <button className="remove-btn" onClick={() => updateQuantity("remove")}>-</button>

                <input data-testid="cart-quantity" name="cart-quantity" id="cart-quantity" type="number" value={inputValue} onChange={(e) => { setInputValue(Number(e.target.value)) }} min="0" max="5" disabled />
                {/* add button */}
                <button className="add-btn" onClick={() => updateQuantity("add")}>+</button>
            </label>
        </>
    )
}

export default CartQuantityInput